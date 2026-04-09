import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Sparkles, Heart, Zap, Lock, Eye, CheckCircle, ArrowRight, Star } from 'lucide-react';

interface SplashScreenProps {
  onStartJourney: () => void;
}

export default function SplashScreen({ onStartJourney }: SplashScreenProps) {
  const [isReady, setIsReady] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [loadedFeatures, setLoadedFeatures] = useState<string[]>([]);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isReady) return;
    
    const features = [
      { id: 'shield', icon: <Shield className="w-5 h-5" />, text: 'Safety Shield Initialized' },
      { id: 'eye', icon: <Eye className="w-5 h-5" />, text: 'Privacy Protection Ready' },
      { id: 'heart', icon: <Heart className="w-5 h-5" />, text: 'Wellbeing Module Active' },
      { id: 'lock', icon: <Lock className="w-5 h-5" />, text: 'Security Protocols Armed' },
      { id: 'zap', icon: <Zap className="w-5 h-5" />, text: 'AI Guardian Online' }
    ];

    features.forEach((feature, index) => {
      setTimeout(() => {
        setLoadedFeatures(prev => [...prev, feature.id]);
      }, index * 200);
    });

    setTimeout(() => {
      setShowContent(true);
    }, features.length * 200 + 400);
  }, [isReady]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 flex items-center justify-center p-4 overflow-hidden relative">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(168, 85, 247, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(168, 85, 247, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        {/* Animated Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/15 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.3, 1], x: [0, 50, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/15 rounded-full blur-[100px]"
          animate={{ scale: [1.2, 1, 1.2], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px]"
          animate={{ rotate: [0, 180, 360] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            animate={{
              y: [0, Math.random() * -200 - 100],
              x: [0, Math.random() * 100 - 50],
              scale: [0, 1.5, 0],
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: Math.random() * 12 + 8,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100 + 50}%`,
              width: Math.random() * 6 + 2,
              height: Math.random() * 6 + 2,
              backgroundColor: [
                'rgba(236, 72, 153, 0.6)',
                'rgba(168, 85, 247, 0.6)',
                'rgba(59, 130, 246, 0.6)',
                'rgba(245, 158, 11, 0.6)'
              ][i % 4]
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-center max-w-3xl mx-auto relative z-10"
      >
        {/* Main Shield with Multiple Effects */}
        <motion.div
          animate={{
            rotate: [0, 2, -2, 0],
            y: [0, -10, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="mb-8"
        >
          <div className="relative w-56 h-56 mx-auto">
            {/* Outer glow rings */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute rounded-full border border-pink-500/20"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.4, 0, 0.4],
                  rotate: [0, 90 * (i + 1), 180 * (i + 1)]
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5
                }}
                style={{
                  inset: i * 15,
                }}
              />
            ))}
            
            {/* Main shield container */}
            <div className="absolute inset-4 bg-gradient-to-br from-pink-500 via-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-[0_0_80px_rgba(168,85,247,0.6)]">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Shield className="w-24 h-24 text-white drop-shadow-2xl" />
              </motion.div>
            </div>
            
            {/* Shine */}
            <div className="absolute top-8 left-10 w-12 h-12 bg-white/40 rounded-full blur-xl" />
          </div>
        </motion.div>

        {/* Title with gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-transparent mb-4 font-display"
        >
          Her Safe Shield
        </motion.h1>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }}>
            <Sparkles className="w-7 h-7 text-pink-400" />
          </motion.div>
          <span className="text-xl font-semibold text-pink-200 tracking-[0.25em] uppercase">Digital Guardian</span>
          <motion.div animate={{ rotate: -360 }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }}>
            <Sparkles className="w-7 h-7 text-pink-400" />
          </motion.div>
        </motion.div>

        {/* Loading Sequence */}
        {!showContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4 mb-12"
          >
            {[
              { id: 'shield', icon: <Shield className="w-5 h-5" />, text: 'Safety Shield Initialized' },
              { id: 'eye', icon: <Eye className="w-5 h-5" />, text: 'Privacy Protection Ready' },
              { id: 'heart', icon: <Heart className="w-5 h-5" />, text: 'Wellbeing Module Active' },
              { id: 'lock', icon: <Lock className="w-5 h-5" />, text: 'Security Protocols Armed' },
              { id: 'zap', icon: <Zap className="w-5 h-5" />, text: 'AI Guardian Online' }
            ].map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: loadedFeatures.includes(feature.id) ? 1 : 0.3,
                  x: 0
                }}
                className="flex items-center justify-center gap-3"
              >
                <motion.div
                  animate={loadedFeatures.includes(feature.id) ? { scale: [1, 1.3, 1], rotate: [0, 15, 0] } : {}}
                  className={loadedFeatures.includes(feature.id) ? "text-green-400" : "text-slate-500"}
                >
                  {loadedFeatures.includes(feature.id) ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    feature.icon
                  )}
                </motion.div>
                <span className={`text-sm ${loadedFeatures.includes(feature.id) ? 'text-slate-200' : 'text-slate-500'}`}>
                  {feature.text}
                </span>
              </motion.div>
            ))}

            {/* Progress bar */}
            <div className="w-72 h-1.5 bg-slate-800 rounded-full mx-auto mt-6 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: showContent ? "100%" : `${loadedFeatures.length * 20}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        )}

        {/* Content after loading */}
        <AnimatePresence>
          {showContent && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-2xl md:text-3xl text-slate-200 mb-4 font-light"
              >
                Your personal guide to
                <span className="text-pink-400 font-semibold"> digital safety</span>
                <br />and empowerment
              </motion.p>

              {/* Feature badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap justify-center gap-3 mb-12"
              >
                {[
                  { icon: Zap, text: 'Digital Skills', color: 'text-yellow-400', bg: 'bg-yellow-500/10' },
                  { icon: Shield, text: 'Online Protection', color: 'text-pink-400', bg: 'bg-pink-500/10' },
                  { icon: Heart, text: 'Digital Wellbeing', color: 'text-purple-400', bg: 'bg-purple-500/10' },
                  { icon: Star, text: '20+ Missions', color: 'text-blue-400', bg: 'bg-blue-500/10' }
                ].map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 ${item.bg}`}
                  >
                    <item.icon className={`w-4 h-4 ${item.color}`} />
                    <span className="text-sm text-slate-300">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onStartJourney}
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
                className="relative bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 hover:from-pink-600 hover:via-purple-700 hover:to-blue-700 text-white font-bold py-5 px-14 rounded-full shadow-[0_0_50px_rgba(236,72,153,0.5)] transition-all duration-300 text-xl"
              >
                <span className="relative flex items-center gap-3">
                  <Sparkles className={`w-5 h-5 ${hovering ? 'animate-pulse' : ''}`} />
                  Begin Your Journey
                  <motion.span
                    animate={{ x: hovering ? [0, 10, 0] : [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </motion.button>

              {/* Stats row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-12 flex justify-center gap-12 text-slate-400"
              >
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">20+</p>
                  <p className="text-sm">Missions</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">10+</p>
                  <p className="text-sm">Topics</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">100%</p>
                  <p className="text-sm">Free</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}