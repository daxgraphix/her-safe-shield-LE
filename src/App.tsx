/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, 
  User as UserIcon, 
  MessageSquare, 
  Heart, 
  BookOpen, 
  AlertTriangle, 
  CheckCircle2, 
  UserPlus, 
  Lock, 
  Smartphone, 
  Globe, 
  Info,
  Menu,
  Volume2,
  VolumeX,
  Sun,
  Moon,
  RotateCcw,
  X,
  ArrowLeft,
  ArrowRight,
  Download,
  Trophy,
  Settings
} from 'lucide-react';
import { Toaster, toast } from 'sonner';
import confetti from 'canvas-confetti';
import html2canvas from 'html2canvas';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter
} from '@/components/ui/dialog';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { 
  UserProfile, 
  Mission, 
  MissionProgress, 
  Challenge, 
  QuizChallenge, 
  PhishingChallenge, 
  MatchingChallenge, 
  FlashcardChallenge 
} from './types';
import { MISSIONS, AVATARS, COLORS, HANDBOOK_DATA } from './constants';

// Import screen components
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import AvatarSelectionScreen from './screens/AvatarSelectionScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import DashboardScreen from './screens/DashboardScreen';
import MissionView from './screens/MissionView';
import HandbookScreen from './screens/HandbookScreen';
import SettingsScreen from './screens/SettingsScreen';
import CertificateScreen from './screens/CertificateScreen';

type Screen = 'splash' | 'login' | 'avatar' | 'welcome' | 'dashboard' | 'mission' | 'handbook' | 'certificate' | 'settings';

export default function App() {
  const [screen, setScreen] = useState<Screen>('splash');
  const [user, setUser] = useState<UserProfile | null>(null);
  const [tempUsername, setTempUsername] = useState('');
  const [tempAvatar, setTempAvatar] = useState({ id: '', color: '' });
  const [activeMissionId, setActiveMissionId] = useState<string | null>(null);
  const [justCompletedMissionId, setJustCompletedMissionId] = useState<string | null>(null);
  const [showMissionCompleteOverlay, setShowMissionCompleteOverlay] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const scrollAreaRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const viewport = target.querySelector('[data-slot="scroll-area-viewport"]');
    if (viewport) {
      const { scrollTop, scrollHeight, clientHeight } = viewport;
      const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollProgress(progress);
      setShowScrollTop(scrollTop > 300);
    }
  };

  const scrollToTop = () => {
    if (scrollAreaRef.current) {
      const viewport = scrollAreaRef.current.querySelector('[data-slot="scroll-area-viewport"]');
      if (viewport) {
        viewport.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<{
    title: string;
    icon: React.ReactNode;
    body: React.ReactNode;
  } | null>(null);

  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; duration: number }[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 20 + 10
    }));
    setParticles(newParticles);
  }, []);

  // Load profile on mount
  useEffect(() => {
    const saved = localStorage.getItem('herSafeShieldProfile');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Ensure all current missions exist in progress (migration for new missions)
        const updatedProgress = { ...parsed.progress };
        let hasChanges = false;
        MISSIONS.forEach(m => {
          if (!updatedProgress[m.id]) {
            updatedProgress[m.id] = { status: 'unlocked', knowledge: false, challenge: false };
            hasChanges = true;
          }
        });
        
        if (hasChanges) {
          setUser({ ...parsed, progress: updatedProgress });
        } else {
          setUser(parsed);
        }
        setScreen('dashboard');
      } catch (e) {
        console.error("Failed to parse saved profile", e);
      }
    }
  }, []);

  // Save profile on change
  useEffect(() => {
    if (user) {
      localStorage.setItem('herSafeShieldProfile', JSON.stringify(user));
    }
  }, [user]);

  const playSound = useCallback((type: 'click' | 'success' | 'fail' | 'complete' | 'open' | 'close') => {
    if (!user?.settings.sound) return;
    // Simple beep sounds using AudioContext since Tone.js was removed for simplicity in this React version
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    switch (type) {
      case 'click':
        osc.frequency.setValueAtTime(440, ctx.currentTime);
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
        osc.start();
        osc.stop(ctx.currentTime + 0.1);
        break;
      case 'success':
        osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
        osc.frequency.exponentialRampToValueAtTime(659.25, ctx.currentTime + 0.1); // E5
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
        osc.start();
        osc.stop(ctx.currentTime + 0.2);
        break;
      case 'fail':
        osc.frequency.setValueAtTime(261.63, ctx.currentTime); // C4
        osc.frequency.exponentialRampToValueAtTime(220, ctx.currentTime + 0.1); // A3
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
        osc.start();
        osc.stop(ctx.currentTime + 0.2);
        break;
      case 'complete':
        osc.frequency.setValueAtTime(523.25, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1046.50, ctx.currentTime + 0.5);
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
        osc.start();
        osc.stop(ctx.currentTime + 0.5);
        break;
    }
  }, [user?.settings.sound]);

  const handleStartJourney = () => {
    playSound('click');
    setScreen('login');
  };

  const handleLogin = () => {
    if (tempUsername.trim().length < 2) {
      toast.error("Please enter a name (at least 2 characters).");
      playSound('fail');
      return;
    }
    playSound('click');
    setScreen('avatar');
  };

  const handleConfirmAvatar = () => {
    if (!tempAvatar.id || !tempAvatar.color) {
      toast.error("Please select an avatar and a color.");
      playSound('fail');
      return;
    }
    const avatarSvg = AVATARS.find(a => a.id === tempAvatar.id)?.svg(tempAvatar.color) || '';
    const initialProgress: Record<string, MissionProgress> = {};
    MISSIONS.forEach(m => {
      initialProgress[m.id] = { status: 'unlocked', knowledge: false, challenge: false };
    });

    const newUser: UserProfile = {
      username: tempUsername,
      avatar: { id: tempAvatar.id, svg: avatarSvg, color: tempAvatar.color },
      progress: initialProgress,
      settings: { sound: true, theme: 'dark' }
    };
    setUser(newUser);
    playSound('success');
    setScreen('welcome');
  };

  const handleStartAdventure = () => {
    playSound('success');
    setScreen('dashboard');
  };

  const handleReset = () => {
    if (window.confirm("Are you sure you want to reset all your progress?")) {
      localStorage.removeItem('herSafeShieldProfile');
      window.location.reload();
    }
  };

  const toggleSound = () => {
    if (!user) return;
    setUser({ ...user, settings: { ...user.settings, sound: !user.settings.sound } });
    playSound('click');
  };

  const toggleTheme = () => {
    if (!user) return;
    const newTheme = user.settings.theme === 'dark' ? 'light' : 'dark';
    setUser({ ...user, settings: { ...user.settings, theme: newTheme } });
    playSound('click');
  };

  const completeMission = (missionId: string) => {
    if (!user) return;
    const newProgress = { ...user.progress };
    newProgress[missionId] = { ...newProgress[missionId], challenge: true, status: 'completed' };
    
    setUser({ ...user, progress: newProgress });
    playSound('complete');
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
      colors: ['#a855f7', '#f472b6', '#ffffff']
    });

    setJustCompletedMissionId(missionId);
    setShowMissionCompleteOverlay(true);
    
    const allComplete = (Object.values(newProgress) as MissionProgress[]).every(p => p.status === 'completed');
    
    setTimeout(() => {
      setShowMissionCompleteOverlay(false);
      if (allComplete) {
        setScreen('certificate');
      } else {
        toast.success(`Mission Complete! You've earned a new badge.`);
        setScreen('dashboard');
      }
      setTimeout(() => setJustCompletedMissionId(null), 2000);
    }, 3000);
  };

  const handleDownloadCertificate = async () => {
    const element = document.getElementById('certificate-content');
    if (!element) return;
    playSound('click');
    const canvas = await html2canvas(element, { scale: 2 });
    const link = document.createElement('a');
    link.download = `HerSafeShield_Certificate_${user?.username}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
    toast.success("Certificate downloaded!");
  };

  // --- Components ---

  const Sidebar = () => (
    <TooltipProvider>
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 glass-card transition-all duration-700 lg:relative lg:translate-x-0 border-r border-border/50",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full",
        isSidebarCollapsed ? "lg:w-24" : "lg:w-80"
      )}>
        <div className="flex flex-col h-full p-4 lg:p-8">
          <div className={cn("flex items-center justify-between mb-12", isSidebarCollapsed && "lg:flex-col lg:gap-8")}>
            <div className={cn("flex items-center gap-4", isSidebarCollapsed && "lg:flex-col lg:gap-2")}>
              <motion.div 
                whileHover={{ rotate: 15, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 bg-primary rounded-3xl shadow-2xl shadow-primary/30 relative group"
              >
                <Shield className="w-7 h-7 text-white" />
                <div className="absolute inset-0 bg-white/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
              {!isSidebarCollapsed && (
                <div className="flex flex-col">
                  <h2 className="text-2xl font-bold font-display tracking-tight text-foreground glow-text">
                    Shield Hub
                  </h2>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60">Digital Guardian</span>
                </div>
              )}
            </div>
            <div className="flex items-center gap-2">
              <Button 
                variant="ghost" 
                size="icon" 
                className="hidden lg:flex hover:bg-primary/10 hover:text-primary rounded-2xl w-10 h-10 transition-all duration-300"
                onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
              >
                <ArrowLeft className={cn("w-5 h-5 transition-transform duration-700", isSidebarCollapsed && "rotate-180")} />
              </Button>
              <Button variant="ghost" size="icon" className="lg:hidden hover:bg-primary/10 hover:text-primary rounded-2xl w-10 h-10" onClick={() => setIsSidebarOpen(false)}>
                <X className="w-6 h-6" />
              </Button>
            </div>
          </div>

          <nav className="flex-grow space-y-3">
            {[
              { id: 'dashboard', icon: <Globe className="w-5 h-5" />, label: 'Mission Hub' },
              { id: 'handbook', icon: <BookOpen className="w-5 h-5" />, label: 'Handbook' },
              { id: 'settings', icon: <Settings className="w-5 h-5" />, label: 'Settings' }
            ].map((item) => (
              <div key={item.id}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      className={cn(
                        "w-full justify-start gap-5 px-4 py-8 rounded-3xl transition-all duration-500 relative group overflow-hidden border border-transparent",
                        screen === item.id 
                          ? `bg-primary/10 text-primary border-primary/20 shadow-lg shadow-primary/5` 
                          : "text-muted-foreground hover:bg-accent/50 hover:text-foreground hover:border-border/50",
                        isSidebarCollapsed && "lg:justify-center lg:px-0"
                      )}
                      onClick={() => { setScreen(item.id as any); setIsSidebarOpen(false); playSound('click'); }}
                    >
                      <div className={cn(
                        "p-3 rounded-2xl transition-all duration-700 group-hover:scale-110 group-hover:rotate-3",
                        screen === item.id ? `bg-primary text-white shadow-xl shadow-primary/40` : "bg-muted/50"
                      )}>
                        {item.icon}
                      </div>
                      {!isSidebarCollapsed && <span className="font-bold tracking-tight text-lg">{item.label}</span>}
                      {screen === item.id && !isSidebarCollapsed && (
                        <motion.div 
                          layoutId="active-nav-indicator"
                          className="ml-auto w-1.5 h-8 rounded-full bg-primary shadow-[0_0_15px_rgba(236,72,153,0.5)]"
                        />
                      )}
                    </Button>
                  </TooltipTrigger>
                  {isSidebarCollapsed && (
                    <TooltipContent side="right" className="bg-primary text-white border-none font-bold rounded-xl px-4 py-2">
                      {item.label}
                    </TooltipContent>
                  )}
                </Tooltip>
              </div>
            ))}
          </nav>

          <div className="mt-auto pt-8 border-t border-border/50 space-y-6">
            {!isSidebarCollapsed && (
              <div className="glass-card p-5 rounded-3xl border border-primary/10 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-muted p-1 border border-border/50 shadow-inner" dangerouslySetInnerHTML={{ __html: user?.avatar.svg || '' }} />
                  <div className="flex flex-col">
                    <span className="font-bold text-sm text-foreground">{user?.username}</span>
                    <span className="text-[10px] text-primary font-bold uppercase tracking-widest">Shield Heroine</span>
                  </div>
                </div>
              </div>
            )}

            <div className={cn(
              "flex items-center justify-between",
              isSidebarCollapsed ? "flex-col gap-6" : "px-2"
            )}>
              {!isSidebarCollapsed && <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60">Appearance</p>}
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="w-12 h-12 rounded-2xl hover:bg-accent/50 border border-transparent hover:border-border/50 transition-all duration-500"
                    onClick={() => {
                      const newTheme = user?.settings.theme === 'dark' ? 'light' : 'dark';
                      setUser(prev => prev ? { ...prev, settings: { ...prev.settings, theme: newTheme } } : null);
                      playSound('click');
                    }}
                  >
                    {user?.settings.theme === 'dark' ? (
                      <Sun className="w-5 h-5 text-amber-400 animate-in spin-in-90 duration-700" />
                    ) : (
                      <Moon className="w-5 h-5 text-blue-400 animate-in spin-in-90 duration-700" />
                    )}
                  </Button>
                </TooltipTrigger>
                {isSidebarCollapsed && (
                  <TooltipContent side="right" className="bg-primary text-white border-none font-bold rounded-xl px-4 py-2">
                    {user?.settings.theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                  </TooltipContent>
                )}
              </Tooltip>
            </div>
          </div>
        </div>
      </aside>
    </TooltipProvider>
  );

  return (
    <div className={cn(
      "min-h-screen transition-colors duration-500",
      user?.settings.theme === 'light' ? "light" : "dark"
    )} style={{ background: 'hsl(var(--background))', color: 'hsl(var(--foreground))' }}>
      <div id="grid-pattern" />
      
      {/* Floating Particles Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-pink-500/10"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
            }}
          />
        ))}
      </div>

      <Toaster position="bottom-right" theme={user?.settings.theme} />

      <main className="relative z-10 h-screen flex flex-col">
        <AnimatePresence mode="wait">
          {screen === 'splash' && (
            <motion.div 
              key="splash"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
              className="flex-grow flex flex-col items-center justify-center p-8 text-center relative z-10"
            >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="mb-12 relative"
                >
                  <div className="absolute inset-0 bg-pink-500/20 blur-[100px] rounded-full" />
                  <Shield className="w-32 h-32 text-pink-500 relative z-10 drop-shadow-[0_0_15px_rgba(236,72,153,0.5)]" />
                </motion.div>

                <motion.h1 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="text-6xl md:text-8xl font-bold bg-gradient-to-b from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 text-transparent bg-clip-text mb-8 font-display tracking-tight"
                >
                  Her Safe Shield
                </motion.h1>
                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl mb-16 leading-relaxed font-light"
                >
                  Empowering your digital presence.<br />
                  A sophisticated journey into safety and autonomy.
                </motion.p>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  <Button 
                    size="lg" 
                    className="rounded-full px-16 py-10 text-2xl bg-pink-600 hover:bg-pink-700 shadow-[0_0_40px_rgba(236,72,153,0.3)] transition-all hover:scale-105 active:scale-95 group"
                    onClick={handleStartJourney}
                  >
                    Begin Exploration
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="ml-3"
                    >
                      →
                    </motion.span>
                  </Button>
                </motion.div>
            </motion.div>
          )}

          {screen === 'login' && (
            <LoginScreen
              tempUsername={tempUsername}
              setTempUsername={setTempUsername}
              onBack={() => setScreen('splash')}
              onLogin={handleLogin}
            />
          )}

          {screen === 'avatar' && (
            <AvatarSelectionScreen
              tempAvatar={tempAvatar}
              setTempAvatar={setTempAvatar}
              onBack={() => setScreen('login')}
              onConfirm={handleConfirmAvatar}
            />
          )}

          {screen === 'welcome' && (
            <WelcomeScreen
              tempUsername={tempUsername}
              tempAvatar={tempAvatar}
              onStartAdventure={handleStartAdventure}
            />
          )}

          {screen === 'dashboard' && user && (
            <DashboardScreen
              user={user}
              onMissionSelect={(missionId) => {
                setActiveMissionId(missionId);
                setScreen('mission');
                playSound('click');
              }}
              onNavigateToHandbook={() => setScreen('handbook')}
              onNavigateToSettings={() => setScreen('settings')}
              onToggleSound={toggleSound}
              onToggleTheme={toggleTheme}
              onReset={handleReset}
              isSidebarOpen={isSidebarOpen}
              setIsSidebarOpen={setIsSidebarOpen}
              isSidebarCollapsed={isSidebarCollapsed}
              setIsSidebarCollapsed={setIsSidebarCollapsed}
              screen={screen}
              setScreen={setScreen}
            />
          )}

          {screen === 'mission' && user && activeMissionId && (
            <MissionView
              mission={MISSIONS.find(m => m.id === activeMissionId)!}
              progress={user.progress[activeMissionId]}
              onBack={() => {
                setActiveMissionId(null);
                setScreen('dashboard');
                playSound('click');
              }}
              onComplete={() => completeMission(activeMissionId)}
              onUpdateProgress={(update) => {
                if (!user || !activeMissionId) return;
                const newProgress = { ...user.progress };
                newProgress[activeMissionId] = { ...newProgress[activeMissionId], ...update };
                setUser({ ...user, progress: newProgress });
              }}
              playSound={playSound}
            />
          )}

          {screen === 'handbook' && user && (
            <HandbookScreen
              user={user}
              onBack={() => setScreen('dashboard')}
              onMissionSelect={(missionId) => {
                setActiveMissionId(missionId);
                setScreen('mission');
                playSound('click');
              }}
            />
          )}

          {screen === 'settings' && user && (
            <SettingsScreen
              user={user}
              onBack={() => setScreen('dashboard')}
              onToggleSound={toggleSound}
              onToggleTheme={toggleTheme}
              onReset={handleReset}
            />
          )}

          {screen === 'certificate' && user && (
            <CertificateScreen
              user={user}
              onBack={() => setScreen('dashboard')}
            />
          )}
        </AnimatePresence>
      </main>

      {/* Mission Complete Overlay */}
      <AnimatePresence>
        {showMissionCompleteOverlay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 1.1, opacity: 0, y: -40 }}
              className="text-center p-12 max-w-lg"
            >
              <div className="mb-12 flex justify-center relative">
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="p-10 bg-primary/20 rounded-[3rem] border-2 border-primary/30 shadow-2xl shadow-primary/20"
                >
                  <Trophy className="w-24 h-24 text-primary" />
                </motion.div>
                <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full -z-10 animate-pulse" />
              </div>
              <h2 className="text-6xl font-bold mb-6 font-display bg-gradient-to-r from-primary to-pink-400 text-transparent bg-clip-text tracking-tight">
                Mission Complete
              </h2>
              <p className="text-2xl text-muted-foreground mb-12 font-light leading-relaxed">
                You've demonstrated exceptional mastery and earned a new badge of empowerment.
              </p>
              <div className="flex justify-center gap-3">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 1, 0.3]
                    }}
                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
                    className="w-3 h-3 bg-primary rounded-full"
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Universal Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-3xl bg-slate-900 border-slate-800">
          <DialogHeader className="flex flex-row items-center gap-4">
            <div className="p-2 rounded-lg bg-slate-800">
              {modalContent?.icon}
            </div>
            <div>
              <DialogTitle className="text-2xl">{modalContent?.title}</DialogTitle>
            </div>
          </DialogHeader>
          <div className="py-4">
            {modalContent?.body}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// --- Sub-components ---
