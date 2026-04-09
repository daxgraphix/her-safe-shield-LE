import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AVATARS, COLORS } from '../constants';

interface AvatarSelectionScreenProps {
  tempAvatar: { id: string; color: string };
  setTempAvatar: (avatar: { id: string; color: string }) => void;
  onBack: () => void;
  onConfirm: () => void;
}

export default function AvatarSelectionScreen({
  tempAvatar,
  setTempAvatar,
  onBack,
  onConfirm
}: AvatarSelectionScreenProps) {
  const [selectedAvatarId, setSelectedAvatarId] = useState(tempAvatar.id);
  const [selectedColor, setSelectedColor] = useState(tempAvatar.color);

  const handleAvatarSelect = (avatarId: string) => {
    setSelectedAvatarId(avatarId);
    setTempAvatar({ id: avatarId, color: selectedColor });
  };

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
    setTempAvatar({ id: selectedAvatarId, color });
  };

  const selectedAvatar = AVATARS.find(a => a.id === selectedAvatarId);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col p-4">
      {/* Header */}
      <div className="flex items-center mb-8">
        <Button
          variant="ghost"
          size="sm"
          onClick={onBack}
          className="text-slate-400 hover:text-white p-2"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h1 className="text-3xl font-bold text-white ml-4">Customize Your Shield</h1>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:flex-row gap-8 overflow-y-auto">
        {/* Left: Avatar Preview and Colors */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full lg:w-1/2 flex flex-col gap-8"
        >
          {/* Avatar Preview Card */}
          <div className="glass-card p-8 rounded-3xl border border-purple-500/20">
            <h2 className="text-lg font-semibold text-white text-center mb-6">Your Avatar Preview</h2>
            <div className="flex justify-center mb-6">
              <motion.div
                key={`${selectedAvatarId}-${selectedColor}`}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-40 h-40 rounded-full flex items-center justify-center overflow-hidden border-4 border-white/20 shadow-2xl"
                style={{ backgroundColor: selectedColor }}
              >
                <div dangerouslySetInnerHTML={{ __html: selectedAvatar?.svg(selectedColor) || '' }} />
              </motion.div>
            </div>
            <p className="text-center text-slate-400 text-sm">Your digital guardian awaits</p>
          </div>

          {/* Color Selection */}
          <div className="glass-card p-8 rounded-3xl border border-purple-500/20">
            <h3 className="text-lg font-semibold text-white mb-4">Select Your Color</h3>
            <div className="grid grid-cols-4 gap-4">
              {COLORS.map((color) => (
                <motion.button
                  key={color}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleColorSelect(color)}
                  className={`relative aspect-square rounded-xl border-4 transition-all duration-300 ${
                    selectedColor === color
                      ? 'border-white shadow-lg scale-110'
                      : 'border-slate-600 hover:border-slate-500'
                  }`}
                  style={{ backgroundColor: color }}
                >
                  {selectedColor === color && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <Check className="w-6 h-6 text-white drop-shadow-lg" />
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: Avatar Selection */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="w-full lg:w-1/2"
        >
          <div className="glass-card p-8 rounded-3xl border border-purple-500/20 h-full flex flex-col">
            <h3 className="text-lg font-semibold text-white mb-6">Choose Your Avatar</h3>
            <div className="grid grid-cols-2 gap-4 flex-1 overflow-y-auto mb-8">
              {AVATARS.map((avatar) => (
                <motion.button
                  key={avatar.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleAvatarSelect(avatar.id)}
                  className={`relative p-6 rounded-2xl border-2 transition-all duration-300 ${
                    selectedAvatarId === avatar.id
                      ? 'border-purple-400 bg-purple-400/20 shadow-lg'
                      : 'border-slate-600 bg-slate-800/50 hover:border-slate-500'
                  }`}
                >
                  <div
                    className="w-16 h-16 mx-auto mb-2 flex items-center justify-center"
                    dangerouslySetInnerHTML={{ __html: avatar.svg(selectedColor) }}
                  />
                  {selectedAvatarId === avatar.id && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-1 right-1 w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center border-2 border-white"
                    >
                      <Check className="w-3 h-3 text-white" />
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </div>

            {/* Confirm Button - VERY PROMINENT */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-auto"
            >
              <Button
                onClick={onConfirm}
                disabled={!selectedAvatarId || !selectedColor}
                className="w-full bg-gradient-to-r from-pink-500 via-pink-600 to-purple-600 hover:from-pink-600 hover:via-pink-700 hover:to-purple-700 text-white font-bold py-6 px-8 rounded-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-lg shadow-2xl hover:scale-105"
              >
                <span className="flex items-center justify-center gap-3">
                  Confirm & Continue
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Button>
              <p className="text-xs text-slate-500 text-center mt-3">
                ✨ Your avatar represents your journey as a Shield Heroine
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}