import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface LoginScreenProps {
  tempUsername: string;
  setTempUsername: (username: string) => void;
  onBack: () => void;
  onLogin: () => void;
}

export default function LoginScreen({
  tempUsername,
  setTempUsername,
  onBack,
  onLogin
}: LoginScreenProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        className="w-full max-w-md mx-auto"
      >
        {/* Header */}
        <div className="flex items-center mb-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={onBack}
            className="text-slate-400 hover:text-white p-2"
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <h1 className="text-2xl font-bold text-white ml-4">Create Your Profile</h1>
        </div>

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-8 rounded-2xl"
        >
          {/* Avatar Preview */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full flex items-center justify-center">
              <User className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-xl font-semibold text-white text-center mb-2">
            What's your name?
          </h2>
          <p className="text-slate-400 text-center mb-6 text-sm">
            This will be your Shield Heroine identity
          </p>

          {/* Input Field */}
          <div className="space-y-4">
            <div className="relative">
              <Input
                type="text"
                placeholder="Enter your name"
                value={tempUsername}
                onChange={(e) => setTempUsername(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className={`w-full bg-slate-800/50 border-slate-600 text-white placeholder-slate-400 focus:border-purple-400 transition-all duration-300 ${
                  isFocused ? 'ring-2 ring-purple-400/50' : ''
                }`}
                maxLength={20}
              />
              <motion.div
                animate={{ scaleX: tempUsername.length > 0 ? 1 : 0 }}
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-600 origin-left"
              />
            </div>

            {/* Character Count */}
            <div className="flex justify-between text-xs text-slate-400">
              <span>{tempUsername.length}/20 characters</span>
              <span>Min 2 characters</span>
            </div>
          </div>

          {/* Continue Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8"
          >
            <Button
              onClick={onLogin}
              disabled={tempUsername.trim().length < 2}
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Continue
            </Button>
          </motion.div>

          {/* Helper Text */}
          <p className="text-xs text-slate-500 text-center mt-4">
            Your name helps personalize your learning journey
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}