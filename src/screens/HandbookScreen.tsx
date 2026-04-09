import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { MISSIONS, HANDBOOK_DATA } from '../constants';
import { UserProfile } from '../types';

interface HandbookScreenProps {
  user: UserProfile;
  onBack: () => void;
  onMissionSelect: (missionId: string) => void;
}

export default function HandbookScreen({ user, onBack, onMissionSelect }: HandbookScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      <div className="max-w-6xl mx-auto">
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
          <h1 className="text-3xl font-bold text-white">Shield Handbook</h1>
          <div className="w-24" /> {/* Spacer */}
        </div>

        {/* Info Banner */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 p-4 rounded-2xl bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-purple-500/20"
        >
          <div className="flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-purple-400" />
            <p className="text-slate-200">All handbook entries are now unlocked! Browse through to refresh your knowledge on digital safety topics.</p>
          </div>
        </motion.div>

        {/* Handbook Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {MISSIONS.map((mission, index) => {
            const isUnlocked = true; // All entries unlocked
            const data = HANDBOOK_DATA[mission.id];

            return (
              <motion.div
                key={mission.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card
                  className={cn(
                    "glass-card h-full transition-all duration-300 cursor-pointer",
                    isUnlocked
                      ? "hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-500/20"
                      : "opacity-60"
                  )}
                  onClick={() => onMissionSelect(mission.id)}
                >
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className={cn(
                      "p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20"
                    )}>
                      {data.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-white mb-1">{data.title}</CardTitle>
                      <div className="flex items-center gap-2 text-purple-400">
                        <Sparkles className="w-4 h-4" />
                        <span className="text-sm">Available</span>
                      </div>
                    </div>
                  </CardHeader>
                  {isUnlocked && (
                    <CardContent>
                      <div className="space-y-4">
                        {data.content.map((item, i) => (
                          <p
                            key={i}
                            className="text-slate-300 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: item }}
                          />
                        ))}
                      </div>
                    </CardContent>
                  )}
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}