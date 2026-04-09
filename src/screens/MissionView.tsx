import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, Play, BookOpen, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MISSIONS } from '../constants';
import { Mission, MissionProgress } from '../types';

interface MissionViewProps {
  mission: Mission;
  progress: MissionProgress;
  onBack: () => void;
  onComplete: () => void;
  onUpdateProgress: (update: Partial<MissionProgress>) => void;
  playSound: (type: string) => void;
}

export default function MissionView({
  mission,
  progress,
  onBack,
  onComplete,
  onUpdateProgress,
  playSound
}: MissionViewProps) {
  const [currentStage, setCurrentStage] = useState<'knowledge' | 'challenge'>(
    progress.knowledge ? 'challenge' : 'knowledge'
  );
  const [currentPage, setCurrentPage] = useState(0);

  const handleKnowledgeComplete = () => {
    onUpdateProgress({ knowledge: true });
    setCurrentStage('challenge');
    playSound('success');
  };

  const handleChallengeComplete = () => {
    onUpdateProgress({ challenge: true });
    onComplete();
  };

  if (currentStage === 'knowledge') {
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
            <div className="text-right">
              <h1 className="text-2xl font-bold text-white">{mission.title}</h1>
              <p className="text-slate-400">Knowledge Phase</p>
            </div>
          </div>

          {/* Progress */}
          <div className="mb-8">
            <Progress
              value={(currentPage + 1) / mission.knowledge.pages.length * 100}
              className="mb-2"
            />
            <p className="text-sm text-slate-400 text-center">
              Page {currentPage + 1} of {mission.knowledge.pages.length}
            </p>
          </div>

          {/* Content */}
          <Card className="glass-card mb-8">
            <CardContent className="p-8">
              <div
                className="text-lg text-slate-300 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: mission.knowledge.pages[currentPage].text }}
              />
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
              disabled={currentPage === 0}
            >
              Previous
            </Button>
            {currentPage === mission.knowledge.pages.length - 1 ? (
              <Button onClick={handleKnowledgeComplete}>
                Complete Knowledge
              </Button>
            ) : (
              <Button onClick={() => setCurrentPage(currentPage + 1)}>
                Next
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Challenge stage
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="ghost"
            onClick={() => setCurrentStage('knowledge')}
            className="text-slate-400 hover:text-white"
          >
            <BookOpen className="w-4 h-4 mr-2" />
            Back to Knowledge
          </Button>
          <div className="text-right">
            <h1 className="text-2xl font-bold text-white">{mission.title}</h1>
            <p className="text-slate-400">Challenge Phase</p>
          </div>
        </div>

        {/* Challenge Content */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-yellow-400" />
              {mission.challenge.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <p className="text-slate-300 mb-6">{mission.challenge.intro}</p>

            {/* Challenge implementation would go here based on type */}
            <div className="text-center">
              <p className="text-slate-400 mb-4">
                Challenge implementation for type: {mission.challenge.type}
              </p>
              <Button onClick={handleChallengeComplete}>
                Complete Challenge
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}