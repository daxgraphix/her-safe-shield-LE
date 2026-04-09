import React from 'react';
import { motion } from 'motion/react';
import { Shield, Star, Trophy, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface WelcomeScreenProps {
  tempUsername: string;
  tempAvatar: { id: string; color: string };
  onStartAdventure: () => void;
}

export default function WelcomeScreen({ tempUsername, tempAvatar, onStartAdventure }: WelcomeScreenProps) {
  const selectedAvatar = {
    svg: `<svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="${tempAvatar.color}"/><circle cx="9" cy="9" r="1.5" fill="white"/><circle cx="15" cy="9" r="1.5" fill="white"/><path d="M8 16h8c0-2.5-2-4.5-4.5-4.5S8 13.5 8 16z" fill="white"/></svg>`
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-lg mx-auto text-center"
      >
        {/* Welcome Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Welcome, {tempUsername}!
          </h1>
          <p className="text-lg text-slate-300">
            Your journey as a Shield Heroine begins now
          </p>
        </motion.div>

        {/* Avatar Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-pink-400 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
            <div dangerouslySetInnerHTML={{ __html: selectedAvatar.svg }} />
          </div>
        </motion.div>

        {/* Mission Preview Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-2 gap-4 mb-8"
        >
          {[
            { icon: Shield, title: "Digital Safety", color: "text-blue-400" },
            { icon: Heart, title: "Body Autonomy", color: "text-pink-400" },
            { icon: Star, title: "Privacy Pro", color: "text-purple-400" },
            { icon: Trophy, title: "Challenges", color: "text-yellow-400" }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="glass-card p-4 rounded-xl"
            >
              <item.icon className={`w-8 h-8 mx-auto mb-2 ${item.color}`} />
              <p className="text-xs text-slate-300 font-medium">{item.title}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Journey Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="glass-card p-6 rounded-2xl mb-8"
        >
          <h3 className="text-lg font-semibold text-white mb-3">
            Your Heroine Journey Awaits
          </h3>
          <div className="space-y-2 text-sm text-slate-300">
            <p>🚀 Complete 20 interactive missions</p>
            <p>🎯 Master digital safety skills</p>
            <p>🏆 Earn badges and certificates</p>
            <p>💪 Build confidence in the digital world</p>
          </div>
        </motion.div>

        {/* Start Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
        >
          <Button
            onClick={onStartAdventure}
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-full shadow-lg transition-all duration-300 text-lg"
          >
            Start Your Adventure
          </Button>
        </motion.div>

        {/* Encouraging Message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="text-sm text-slate-400 mt-6"
        >
          Remember: Every expert was once a beginner. You've got this! 💪
        </motion.p>
      </motion.div>
    </div>
  );
}