import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu,
  X,
  Trophy,
  BookOpen,
  Settings,
  Volume2,
  VolumeX,
  Sun,
  Moon,
  RotateCcw,
  CheckCircle2,
  Lock,
  Play,
  Star,
  ChevronUp,
  ChevronDown,
  ArrowUp,
  ArrowDown,
  Target,
  Zap,
  Award,
  Flame,
  Clock,
  Brain,
  Shield,
  Home,
  User,
  TrendingUp,
  Sparkles,
  Heart,
  LockOpen,
  Eye,
  Bell
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { MISSIONS } from '../constants';
import { UserProfile, MissionProgress } from '../types';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface DashboardScreenProps {
  user: UserProfile;
  onMissionSelect: (missionId: string) => void;
  onNavigateToHandbook: () => void;
  onNavigateToSettings: () => void;
  onToggleSound: () => void;
  onToggleTheme: () => void;
  onReset: () => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
  isSidebarCollapsed: boolean;
  setIsSidebarCollapsed: (collapsed: boolean) => void;
  screen?: string;
  setScreen?: (screen: string) => void;
}

export default function DashboardScreen({
  user,
  onMissionSelect,
  onNavigateToHandbook,
  onNavigateToSettings,
  onToggleSound,
  onToggleTheme,
  onReset,
  isSidebarOpen,
  setIsSidebarOpen,
  isSidebarCollapsed,
  setIsSidebarCollapsed,
  screen = 'dashboard',
  setScreen = () => {}
}: DashboardScreenProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const contentRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showScrollBottom, setShowScrollBottom] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const content = contentRef.current;
      if (!content) return;
      
      const { scrollTop, scrollHeight, clientHeight } = content;
      const maxScroll = scrollHeight - clientHeight;
      const progress = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
      
      setScrollProgress(progress);
      setShowScrollTop(scrollTop > 100);
      setShowScrollBottom(scrollTop < maxScroll - 100);
      setIsScrolled(scrollTop > 0);
    };

    const content = contentRef.current;
    if (content) {
      content.addEventListener('scroll', handleScroll);
      handleScroll();
    }

    return () => {
      if (content) {
        content.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const scrollToTop = () => {
    contentRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    if (contentRef.current) {
      contentRef.current.scrollTo({ 
        top: contentRef.current.scrollHeight, 
        behavior: 'smooth' 
      });
    }
  };

  const completedMissions = Object.values(user.progress).filter(p => p.status === 'completed').length;
  const totalMissions = MISSIONS.length;
  const progressPercentage = (completedMissions / totalMissions) * 100;

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'basics', label: 'Basics' },
    { id: 'safety', label: 'Safety' },
    { id: 'wellbeing', label: 'Wellbeing' },
    { id: 'advanced', label: 'Advanced' }
  ];

  const getMissionStatus = (missionId: string): MissionProgress => {
    return user.progress[missionId] || { status: 'locked', knowledge: false, challenge: false };
  };

  const getFilteredMissions = () => {
    if (selectedCategory === 'all') return MISSIONS;

    const categoryRanges = {
      basics: [0, 4],
      safety: [5, 9],
      wellbeing: [10, 14],
      advanced: [15, 19]
    };

    const [start, end] = categoryRanges[selectedCategory as keyof typeof categoryRanges] || [0, MISSIONS.length - 1];
    return MISSIONS.slice(start, end + 1);
  };

return (
    <div className={cn(
      "min-h-screen flex",
      user.settings.theme === 'light' 
        ? "bg-gradient-to-br from-gray-100 via-purple-100 to-gray-100" 
        : "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    )}>
      {/* Mobile Header */}
      <div className={cn(
        "flex items-center justify-between p-4 backdrop-blur-xl border-b lg:hidden absolute top-0 left-0 right-0 z-30",
        user.settings.theme === 'light'
          ? "bg-white/50 border-gray-200"
          : "bg-slate-900/50 border-slate-700"
      )}>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsSidebarOpen(true)}
          className={user.settings.theme === 'light' ? "text-gray-800" : "text-white"}
        >
          <Menu className="w-5 h-5" />
        </Button>
        <h1 className={cn("text-lg font-semibold", user.settings.theme === 'light' ? "text-gray-800" : "text-white")}>Dashboard</h1>
        <Button
          variant="ghost"
          size="sm"
          onClick={onNavigateToSettings}
          className={user.settings.theme === 'light' ? "text-gray-800" : "text-white"}
        >
          <Settings className="w-5 h-5" />
        </Button>
      </div>

      {/* Desktop Header - visible on lg+ */}
      <div className={cn(
        "hidden lg:flex items-center justify-between p-4 backdrop-blur-xl border-b absolute top-0 left-0 right-0 z-30",
        user.settings.theme === 'light'
          ? "bg-white/50 border-gray-200"
          : "bg-slate-900/50 border-slate-700"
      )}>
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className={user.settings.theme === 'light' ? "text-gray-800 hover:bg-gray-100" : "text-white hover:bg-slate-800"}
          >
            <Menu className="w-5 h-5" />
          </Button>
          <h1 className={cn("text-xl font-bold", user.settings.theme === 'light' ? "text-gray-800" : "text-white")}>Mission Hub</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggleTheme}
            className={user.settings.theme === 'light' ? "text-gray-800 hover:bg-gray-100" : "text-white hover:bg-slate-800"}
            title={user.settings.theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {user.settings.theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggleSound}
            className={user.settings.theme === 'light' ? "text-gray-800 hover:bg-gray-100" : "text-white hover:bg-slate-800"}
            title={user.settings.sound ? "Mute Sounds" : "Enable Sounds"}
          >
            {user.settings.sound ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={onNavigateToSettings}
            className={user.settings.theme === 'light' ? "text-gray-800 hover:bg-gray-100" : "text-white hover:bg-slate-800"}
            title="Settings"
          >
            <Settings className="w-5 h-5" />
          </Button>
        </div>
      </div>

      <div className="flex flex-1 pt-14 lg:pt-0">
        {/* Sidebar - Enhanced Design */}
        <AnimatePresence>
          {isSidebarOpen && (
            <>
              {/* Mobile Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                onClick={() => setIsSidebarOpen(false)}
              />

              {/* Sidebar Content */}
              <motion.div
                initial={{ x: -300 }}
                animate={{ x: 0 }}
                exit={{ x: -300 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className={cn(
                  "fixed lg:translate-x-0 inset-y-0 left-0 z-50 bg-gradient-to-b from-slate-900 via-purple-950/90 to-slate-900 backdrop-blur-xl border-r border-purple-500/20 flex flex-col transition-all duration-300",
                  isSidebarCollapsed ? "lg:w-20 w-72" : "w-72",
                  isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
                  "h-full"
                )}
              >
                {/* Sidebar Header with Logo */}
                <div className="p-5 border-b border-purple-500/20 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
                  <div className="flex items-center justify-between">
                    {!isSidebarCollapsed && (
                      <div className="flex items-center gap-3">
                        <motion.div 
                          whileHover={{ rotate: 15, scale: 1.1 }}
                          className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30"
                        >
                          <Shield className="w-5 h-5 text-white" />
                        </motion.div>
                        <div>
                          <h2 className="text-lg font-bold text-white">Shield Hub</h2>
                          <p className="text-xs text-purple-300">Digital Guardian</p>
                        </div>
                      </div>
                    )}
                    {isSidebarCollapsed && (
                      <motion.div 
                        whileHover={{ rotate: 15, scale: 1.1 }}
                        className="w-10 h-10 mx-auto bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30"
                      >
                        <Shield className="w-5 h-5 text-white" />
                      </motion.div>
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsSidebarOpen(false)}
                      className="lg:hidden text-slate-400 hover:text-white hover:bg-white/10"
                    >
                      <X className="w-5 h-5" />
                    </Button>
                  </div>
                </div>

                {/* User Profile Card */}
                <div className="p-4 border-b border-purple-500/20">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center space-x-3 p-3 rounded-2xl bg-gradient-to-r from-purple-900/40 to-pink-900/40 border border-purple-500/20"
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-purple-400/30"
                      style={{ backgroundColor: user.avatar.color }}
                      dangerouslySetInnerHTML={{ __html: user.avatar.svg }}
                    />
                    {!isSidebarCollapsed && (
                      <div className="flex-1 min-w-0">
                        <p className="text-white font-semibold truncate">{user.username}</p>
                        <p className="text-xs text-purple-300 flex items-center gap-1">
                          <Star className="w-3 h-3 text-yellow-400" />
                          Shield Heroine
                        </p>
                      </div>
                    )}
                  </motion.div>
                </div>

                {/* Navigation Menu */}
                <nav className="flex-1 p-3 space-y-2 overflow-y-auto">
                  <motion.div
                    whileHover={{ x: 4 }}
                    className={cn(
                      "group flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-200",
                      screen === 'dashboard' 
                        ? "bg-gradient-to-r from-purple-600/40 to-pink-600/40 text-white border border-purple-400/30" 
                        : "text-slate-400 hover:bg-white/5 hover:text-white"
                    )}
                    onClick={() => { setScreen('dashboard'); setIsSidebarOpen(false); }}
                  >
                    <Home className={cn("w-5 h-5", screen === 'dashboard' ? "text-purple-300" : "text-slate-400 group-hover:text-white")} />
                    {!isSidebarCollapsed && <span className="font-medium">Dashboard</span>}
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 4 }}
                    className={cn(
                      "group flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-200",
                      screen === 'handbook' 
                        ? "bg-gradient-to-r from-purple-600/40 to-pink-600/40 text-white border border-purple-400/30" 
                        : "text-slate-400 hover:bg-white/5 hover:text-white"
                    )}
                    onClick={onNavigateToHandbook}
                  >
                    <BookOpen className={cn("w-5 h-5", screen === 'handbook' ? "text-purple-300" : "text-slate-400 group-hover:text-white")} />
                    {!isSidebarCollapsed && <span className="font-medium">Handbook</span>}
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 4 }}
                    className={cn(
                      "group flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-200",
                      screen === 'settings' 
                        ? "bg-gradient-to-r from-purple-600/40 to-pink-600/40 text-white border border-purple-400/30" 
                        : "text-slate-400 hover:bg-white/5 hover:text-white"
                    )}
                    onClick={onNavigateToSettings}
                  >
                    <Settings className={cn("w-5 h-5", screen === 'settings' ? "text-purple-300" : "text-slate-400 group-hover:text-white")} />
                    {!isSidebarCollapsed && <span className="font-medium">Settings</span>}
                  </motion.div>
                </nav>

                {/* Quick Stats */}
                {!isSidebarCollapsed && (
                  <div className="p-4 border-t border-purple-500/20">
                    <div className="grid grid-cols-3 gap-2">
                      <div className="text-center p-2 rounded-xl bg-purple-900/30">
                        <Trophy className="w-4 h-4 text-yellow-400 mx-auto mb-1" />
                        <p className="text-xs font-bold text-white">{completedMissions}</p>
                        <p className="text-[10px] text-slate-400">Badges</p>
                      </div>
                      <div className="text-center p-2 rounded-xl bg-pink-900/30">
                        <Brain className="w-4 h-4 text-pink-400 mx-auto mb-1" />
                        <p className="text-xs font-bold text-white">
                          {Object.values(user.progress).filter(p => p.knowledge).length}
                        </p>
                        <p className="text-[10px] text-slate-400">Lessons</p>
                      </div>
                      <div className="text-center p-2 rounded-xl bg-blue-900/30">
                        <Shield className="w-4 h-4 text-blue-400 mx-auto mb-1" />
                        <p className="text-xs font-bold text-white">
                          {Math.round(progressPercentage)}%
                        </p>
                        <p className="text-[10px] text-slate-400">Complete</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Bottom Controls */}
                <div className="p-4 border-t border-purple-500/20 bg-gradient-to-t from-purple-900/20 to-transparent">
                  <div className="flex items-center justify-center gap-2">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={onToggleSound}
                            className={cn(
                              "rounded-xl hover:bg-white/10",
                              user.settings.sound ? "text-purple-400" : "text-slate-500"
                            )}
                          >
                            {user.settings.sound ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent className="bg-slate-800 text-white">
                          {user.settings.sound ? 'Sound On' : 'Sound Off'}
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={onToggleTheme}
                            className="rounded-xl hover:bg-white/10 text-slate-400 hover:text-white"
                          >
                            {user.settings.theme === 'dark' ? (
                              <Sun className="w-5 h-5 text-amber-400" />
                            ) : (
                              <Moon className="w-5 h-5 text-blue-400" />
                            )}
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent className="bg-slate-800 text-white">
                          {user.settings.theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={onReset}
                            className="rounded-xl hover:bg-white/10 text-slate-400 hover:text-red-400"
                          >
                            <RotateCcw className="w-5 h-5" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent className="bg-slate-800 text-white">
                          Reset Progress
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Main Content */}
<div ref={contentRef} className="flex-1 p-4 lg:p-8 overflow-y-auto h-screen lg:h-auto relative" style={{ height: 'calc(100vh - 3.5rem)', marginTop: '3.5rem' }}>
          {/* Hero Section with User Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="relative overflow-hidden glass-card rounded-3xl p-8 bg-gradient-to-r from-purple-900/80 via-pink-900/60 to-blue-900/80">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `
                    radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)
                  `,
                  backgroundSize: '24px 24px'
                }} />
              </div>

              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                {/* Left: Greeting & Progress */}
                <div className="flex-1 text-center lg:text-left">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                      Welcome back, <span className="text-pink-400">{user.username}</span>!
                    </h2>
                    <p className="text-slate-300 text-lg mb-6">Ready to continue your digital safety journey?</p>
                  </motion.div>

                  {/* Progress bar with animated fill */}
                  <div className="max-w-md">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-slate-300 flex items-center gap-2">
                        <Target className="w-4 h-4 text-pink-400" />
                        Overall Progress
                      </span>
                      <span className="text-lg font-bold text-white">{Math.round(progressPercentage)}%</span>
                    </div>
                    <div className="h-3 bg-slate-700/50 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${progressPercentage}%` }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                      />
                    </div>
                    <p className="text-sm text-slate-400 mt-2">
                      {completedMissions} of {totalMissions} missions completed
                    </p>
                  </div>
                </div>

                {/* Right: Stats Cards */}
                <div className="flex gap-4 flex-wrap justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="glass-card p-4 rounded-2xl text-center min-w-[120px] bg-purple-500/20 border-purple-400/30"
                  >
                    <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-white">{completedMissions}</p>
                    <p className="text-xs text-slate-400">Badges</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="glass-card p-4 rounded-2xl text-center min-w-[120px] bg-blue-500/20 border-blue-400/30"
                  >
                    <Brain className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-white">
                      {Object.values(user.progress).filter(p => p.knowledge).length}
                    </p>
                    <p className="text-xs text-slate-400">Lessons</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="glass-card p-4 rounded-2xl text-center min-w-[120px] bg-green-500/20 border-green-400/30"
                  >
                    <Shield className="w-8 h-8 text-green-400 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-white">
                      {Object.values(user.progress).filter(p => p.challenge).length}
                    </p>
                    <p className="text-xs text-slate-400">Challenges</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center justify-between mb-6"
          >
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <Zap className="w-6 h-6 text-pink-400" />
              Missions
            </h3>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={onNavigateToHandbook}
                className="text-slate-300 hover:text-white hover:bg-slate-800"
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Handbook
              </Button>
            </div>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex flex-wrap gap-3">
              {categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                >
                  <Button
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className={cn(
                      "transition-all duration-300 rounded-full px-5",
                      selectedCategory === category.id
                        ? "bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white shadow-lg shadow-pink-500/25"
                        : "border-slate-600/50 text-slate-300 hover:text-white hover:bg-slate-800 hover:border-slate-500 bg-slate-900/30"
                    )}
                  >
                    {category.label}
                    <Badge variant="secondary" className={cn(
                      "ml-2 text-xs",
                      selectedCategory === category.id 
                        ? "bg-white/20 text-white" 
                        : "bg-slate-700 text-slate-400"
                    )}>
                      {category.count}
                    </Badge>
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Missions Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-20"
          >
            {getFilteredMissions().map((mission, index) => {
              const status = getMissionStatus(mission.id);
              const isLocked = status.status === 'locked';
              const isCompleted = status.status === 'completed';
              const isAvailable = status.status === 'unlocked';

              return (
                <motion.div
                  key={mission.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                  className={cn(
                    "glass-card p-6 rounded-2xl cursor-pointer transition-all duration-300",
                    isLocked && "opacity-60 cursor-not-allowed",
                    isCompleted && "ring-2 ring-green-400/50",
                    isAvailable && "hover:shadow-purple-500/20"
                  )}
                  onClick={() => !isLocked && onMissionSelect(mission.id)}
                >
                  {/* Mission Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={cn(
                      "p-3 rounded-xl",
                      isCompleted ? "bg-green-500/20" : "bg-slate-800/50"
                    )}>
                      {mission.icon}
                    </div>
                    {isCompleted && (
                      <CheckCircle2 className="w-6 h-6 text-green-400" />
                    )}
                    {isLocked && (
                      <Lock className="w-5 h-5 text-slate-500" />
                    )}
                    {isAvailable && (
                      <Play className="w-5 h-5 text-purple-400" />
                    )}
                  </div>

                  {/* Mission Info */}
                  <div className="space-y-2">
                    <h3 className="font-semibold text-white text-lg leading-tight">
                      {mission.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {mission.description}
                    </p>
                  </div>

                  {/* Progress Indicators */}
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">Knowledge</span>
                      {status.knowledge ? (
                        <CheckCircle2 className="w-4 h-4 text-green-400" />
                      ) : (
                        <div className="w-4 h-4 rounded-full border-2 border-slate-600" />
                      )}
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">Challenge</span>
                      {status.challenge ? (
                        <CheckCircle2 className="w-4 h-4 text-green-400" />
                      ) : (
                        <div className="w-4 h-4 rounded-full border-2 border-slate-600" />
                      )}
                    </div>
                  </div>

                  {/* Badge Preview */}
                  {isCompleted && (
                    <div className="mt-4 pt-4 border-t border-slate-700">
                      <div className="flex items-center space-x-2">
                        <div className="text-yellow-400">
                          <Star className="w-4 h-4" />
                        </div>
                        <span className="text-sm text-yellow-400 font-medium">
                          {mission.badgeName} Badge Earned!
                        </span>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Scroll Progress Indicator - Right Side Bar */}
        <div className="fixed right-4 bottom-20 lg:bottom-8 flex flex-col items-center gap-2 z-40">
          {/* Scroll to Top Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: showScrollTop ? 1 : 0, scale: showScrollTop ? 1 : 0 }}
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-purple-500/80 backdrop-blur-xl border border-purple-400/30 flex items-center justify-center text-white shadow-lg hover:bg-purple-600 transition-all"
            title="Scroll to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>

          {/* Progress Indicator */}
          <div className="w-1 h-16 lg:h-24 bg-slate-700/50 rounded-full overflow-hidden relative">
            <motion.div
              className="w-full bg-purple-500 rounded-full absolute bottom-0"
              style={{ height: `${scrollProgress}%` }}
            />
          </div>

          {/* Scroll to Bottom Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: showScrollBottom ? 1 : 0, scale: showScrollBottom ? 1 : 0 }}
            onClick={scrollToBottom}
            className="w-10 h-10 rounded-full bg-purple-500/80 backdrop-blur-xl border border-purple-400/30 flex items-center justify-center text-white shadow-lg hover:bg-purple-600 transition-all"
            title="Scroll to Bottom"
          >
            <ArrowDown className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}