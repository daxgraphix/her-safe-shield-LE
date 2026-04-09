import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Download, Share2, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import html2canvas from 'html2canvas';
import { UserProfile } from '../types';

interface CertificateScreenProps {
  user: UserProfile;
  onBack: () => void;
}

export default function CertificateScreen({ user, onBack }: CertificateScreenProps) {
  const certificateRef = useRef<HTMLDivElement>(null);

  const completedMissions = Object.values(user.progress).filter(
    progress => progress.status === 'completed'
  ).length;

  const totalMissions = 20; // Update based on your missions count
  const completionPercentage = Math.round((completedMissions / totalMissions) * 100);

  const handleDownload = async () => {
    if (!certificateRef.current) return;

    try {
      const canvas = await html2canvas(certificateRef.current, {
        backgroundColor: '#0f172a',
        scale: 2,
      });

      const link = document.createElement('a');
      link.download = `Her-Safe-Shield-Certificate-${user.username}.png`;
      link.href = canvas.toDataURL();
      link.click();

      toast.success('Certificate downloaded successfully!');
    } catch (error) {
      toast.error('Failed to download certificate');
    }
  };

  const handleShare = async () => {
    const text = `I just completed ${completedMissions} missions in Her Safe Shield and earned my digital safety certificate! 🛡️✨`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Her Safe Shield Certificate',
          text: text,
          url: window.location.href,
        });
      } catch (error) {
        // Fallback to clipboard
        navigator.clipboard.writeText(text);
        toast.success('Certificate info copied to clipboard!');
      }
    } else {
      navigator.clipboard.writeText(text);
      toast.success('Certificate info copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="ghost"
            onClick={onBack}
            className="text-slate-400 hover:text-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
          <h1 className="text-3xl font-bold text-white">Certificate</h1>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={handleShare}>
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button size="sm" onClick={handleDownload}>
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>
        </div>

        {/* Certificate */}
        <motion.div
          ref={certificateRef}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative"
        >
          <Card className="glass-card border-2 border-gradient-to-r from-purple-500/50 to-pink-500/50">
            <CardContent className="p-12 text-center">
              {/* Header */}
              <div className="mb-8">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Trophy className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h2 className="text-4xl font-bold text-white mb-2">Certificate of Achievement</h2>
                <p className="text-xl text-purple-300">Her Safe Shield</p>
              </div>

              {/* User Info */}
              <div className="mb-8">
                <div className="flex justify-center mb-4">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: user.avatar.color }}
                    dangerouslySetInnerHTML={{ __html: user.avatar.svg }}
                  />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{user.username}</h3>
                <p className="text-lg text-slate-300">Digital Safety Champion</p>
              </div>

              {/* Achievement */}
              <div className="mb-8">
                <p className="text-lg text-slate-300 mb-4">
                  Has successfully completed
                </p>
                <div className="text-6xl font-bold text-purple-400 mb-2">
                  {completedMissions}
                </div>
                <p className="text-lg text-slate-300 mb-4">
                  out of {totalMissions} missions
                </p>
                <div className="text-2xl font-semibold text-green-400">
                  {completionPercentage}% Complete
                </div>
              </div>

              {/* Message */}
              <div className="mb-8">
                <p className="text-slate-300 italic">
                  "Knowledge is the best defense against digital threats.
                  You are now equipped to protect yourself and others online."
                </p>
              </div>

              {/* Date */}
              <div className="text-sm text-slate-400">
                Issued on {new Date().toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          <Card className="glass-card">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-purple-400 mb-1">
                {completedMissions}
              </div>
              <p className="text-slate-400 text-sm">Missions Completed</p>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-green-400 mb-1">
                {completionPercentage}%
              </div>
              <p className="text-slate-400 text-sm">Completion Rate</p>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-blue-400 mb-1">
                {totalMissions - completedMissions}
              </div>
              <p className="text-slate-400 text-sm">Missions Remaining</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}