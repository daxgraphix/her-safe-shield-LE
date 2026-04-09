import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Volume2, 
  VolumeX, 
  Sun, 
  Moon, 
  RotateCcw,
  User,
  Bell,
  Shield,
  Lock,
  CheckCircle,
  XCircle,
  Sparkles,
  Globe,
  Trash2,
  Trophy
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { UserProfile } from '../types';
import { MISSIONS } from '../constants';

interface SettingsScreenProps {
  user: UserProfile;
  onBack: () => void;
  onToggleSound: () => void;
  onToggleTheme: () => void;
  onReset: () => void;
}

export default function SettingsScreen({
  user,
  onBack,
  onToggleSound,
  onToggleTheme,
  onReset
}: SettingsScreenProps) {
  const [activeTab, setActiveTab] = useState('profile');
  const isDark = user.settings.theme === 'dark';

  const completedMissions = Object.values(user.progress).filter(p => p.status === 'completed').length;
  const totalMissions = MISSIONS.length;
  const progressPercentage = (completedMissions / totalMissions) * 100;

  return (
    <div className={cn(
      "min-h-screen p-4 lg:p-8",
      isDark 
        ? "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" 
        : "bg-gradient-to-br from-gray-100 via-purple-100 to-gray-100"
    )}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="ghost"
            onClick={onBack}
            className={isDark ? "text-slate-400 hover:text-white hover:bg-white/10" : "text-gray-600 hover:text-gray-800 hover:bg-gray-200"}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
          <h1 className={cn("text-2xl lg:text-3xl font-bold flex items-center gap-2", isDark ? "text-white" : "text-gray-800")}>
            <Shield className="w-6 h-6 text-purple-400" />
            Settings
          </h1>
          <div className="w-24" />
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1 space-y-2">
            {[
              { id: 'profile', icon: User, label: 'Profile', desc: 'Your account info' },
              { id: 'appearance', icon: Sun, label: 'Appearance', desc: 'Theme & display' },
              { id: 'notifications', icon: Bell, label: 'Notifications', desc: 'Alerts & sounds' },
              { id: 'progress', icon: Globe, label: 'Progress', desc: 'Your journey' },
              { id: 'privacy', icon: Lock, label: 'Privacy', desc: 'Security settings' },
              { id: 'danger', icon: Trash2, label: 'Danger Zone', desc: 'Reset data' }
            ].map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ x: 4 }}
                onClick={() => setActiveTab(item.id)}
                className={cn(
                  "w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200 text-left",
                  activeTab === item.id 
                    ? "bg-gradient-to-r from-purple-600/40 to-pink-600/40 text-white border border-purple-400/30" 
                    : isDark 
                      ? "text-slate-400 hover:bg-white/5 hover:text-white"
                      : "text-gray-600 hover:bg-gray-200 hover:text-gray-800"
                )}
              >
                <item.icon className={cn("w-5 h-5", activeTab === item.id ? "text-purple-300" : "")} />
                <div>
                  <p className="font-medium text-sm">{item.label}</p>
                  <p className={cn("text-xs", isDark ? "text-slate-500" : "text-gray-400")}>{item.desc}</p>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {/* Profile Tab */}
              {activeTab === 'profile' && (
                <div className="space-y-6">
                  <Card className={cn("glass-card", isDark ? "" : "bg-white/50")}>
                    <CardHeader>
                      <CardTitle className={cn("flex items-center gap-2", isDark ? "text-white" : "text-gray-800")}>
                        <User className="w-5 h-5 text-purple-400" />
                        Profile Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="flex items-center gap-6">
                        <div
                          className="w-20 h-20 rounded-2xl flex items-center justify-center border-4 border-purple-400/30"
                          style={{ backgroundColor: user.avatar.color }}
                          dangerouslySetInnerHTML={{ __html: user.avatar.svg }}
                        />
                        <div>
                          <h3 className={cn("text-xl font-bold", isDark ? "text-white" : "text-gray-800")}>{user.username}</h3>
                          <p className="text-purple-300">Shield Heroine</p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className={cn("p-4 rounded-xl", isDark ? "bg-slate-800/50" : "bg-gray-200/50")}>
                          <p className={isDark ? "text-slate-400 text-sm" : "text-gray-500 text-sm"}>Email</p>
                          <p className={isDark ? "text-white" : "text-gray-800"}>Not set</p>
                        </div>
                        <div className={cn("p-4 rounded-xl", isDark ? "bg-slate-800/50" : "bg-gray-200/50")}>
                          <p className={isDark ? "text-slate-400 text-sm" : "text-gray-500 text-sm"}>Member Since</p>
                          <p className={isDark ? "text-white" : "text-gray-800"}>Today</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className={cn("glass-card", isDark ? "" : "bg-white/50")}>
                    <CardHeader>
                      <CardTitle className={cn("flex items-center gap-2", isDark ? "text-white" : "text-gray-800")}>
                        <Sparkles className="w-5 h-5 text-pink-400" />
                        Achievements Summary
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className={cn("text-center p-4 rounded-xl", isDark ? "bg-purple-900/30 border border-purple-500/20" : "bg-purple-100 border border-purple-200")}>
                          <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                          <p className={cn("text-2xl font-bold", isDark ? "text-white" : "text-gray-800")}>{completedMissions}</p>
                          <p className={isDark ? "text-xs text-slate-400" : "text-xs text-gray-500"}>Badges Earned</p>
                        </div>
                        <div className={cn("text-center p-4 rounded-xl", isDark ? "bg-pink-900/30 border border-pink-500/20" : "bg-pink-100 border border-pink-200")}>
                          <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
                          <p className={cn("text-2xl font-bold", isDark ? "text-white" : "text-gray-800")}>
                            {Object.values(user.progress).filter(p => p.knowledge).length}
                          </p>
                          <p className={isDark ? "text-xs text-slate-400" : "text-xs text-gray-500"}>Lessons Learned</p>
                        </div>
                        <div className={cn("text-center p-4 rounded-xl", isDark ? "bg-blue-900/30 border border-blue-500/20" : "bg-blue-100 border border-blue-200")}>
                          <Shield className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                          <p className={cn("text-2xl font-bold", isDark ? "text-white" : "text-gray-800")}>
                            {Object.values(user.progress).filter(p => p.challenge).length}
                          </p>
                          <p className={isDark ? "text-xs text-slate-400" : "text-xs text-gray-500"}>Challenges Won</p>
                        </div>
                        <div className={cn("text-center p-4 rounded-xl", isDark ? "bg-indigo-900/30 border border-indigo-500/20" : "bg-indigo-100 border border-indigo-200")}>
                          <Sparkles className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                          <p className={cn("text-2xl font-bold", isDark ? "text-white" : "text-gray-800")}>{Math.round(progressPercentage)}%</p>
                          <p className={isDark ? "text-xs text-slate-400" : "text-xs text-gray-500"}>Complete</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Appearance Tab */}
              {activeTab === 'appearance' && (
                <div className="space-y-6">
                  <Card className={cn("glass-card", isDark ? "" : "bg-white/50")}>
                    <CardHeader>
                      <CardTitle className={cn("flex items-center gap-2", isDark ? "text-white" : "text-gray-800")}>
                        <Sun className="w-5 h-5 text-amber-400" />
                        Theme Settings
                      </CardTitle>
                      <CardDescription className={isDark ? "text-slate-400" : "text-gray-500"}>
                        Customize how the app looks
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className={cn("flex items-center justify-between p-4 rounded-xl", isDark ? "bg-slate-800/50" : "bg-gray-200/50")}>
                        <div className="flex items-center gap-4">
                          {user.settings.theme === 'dark' ? (
                            <Moon className="w-6 h-6 text-blue-400" />
                          ) : (
                            <Sun className="w-6 h-6 text-amber-400" />
                          )}
                          <div>
                            <p className={isDark ? "text-white font-medium" : "text-gray-800 font-medium"}>Dark Mode</p>
                            <p className={isDark ? "text-slate-400 text-sm" : "text-gray-500 text-sm"}>
                              Currently: {user.settings.theme === 'dark' ? 'Enabled' : 'Disabled'}
                            </p>
                          </div>
                        </div>
                        <Switch
                          checked={user.settings.theme === 'dark'}
                          onCheckedChange={onToggleTheme}
                        />
                      </div>

                      <div className={cn("p-4 rounded-xl border", isDark ? "bg-gradient-to-r from-purple-900/30 to-pink-900/30 border-purple-500/20" : "bg-gradient-to-r from-purple-100 to-pink-100 border-purple-200")}>
                        <p className={isDark ? "text-white font-medium mb-2" : "text-gray-800 font-medium mb-2"}>Theme Preview</p>
                        <div className="flex gap-4">
                          <div className={cn(
                            "flex-1 p-4 rounded-xl cursor-pointer border-2",
                            user.settings.theme === 'dark' 
                              ? "border-purple-500 bg-slate-800" 
                              : "border-transparent bg-gray-200"
                          )}>
                            <Moon className={cn("w-6 h-6 mx-auto mb-2", user.settings.theme === 'dark' ? "text-slate-300" : "text-gray-500")} />
                            <p className={cn("text-center text-sm", user.settings.theme === 'dark' ? "text-slate-300" : "text-gray-500")}>Dark</p>
                          </div>
                          <div className={cn(
                            "flex-1 p-4 rounded-xl cursor-pointer border-2",
                            user.settings.theme === 'light' 
                              ? "border-purple-500 bg-white" 
                              : "border-transparent bg-gray-200"
                          )}>
                            <Sun className={cn("w-6 h-6 mx-auto mb-2", user.settings.theme === 'light' ? "text-amber-500" : "text-gray-500")} />
                            <p className={cn("text-center text-sm", user.settings.theme === 'light' ? "text-gray-700" : "text-gray-500")}>Light</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Notifications Tab */}
              {activeTab === 'notifications' && (
                <div className="space-y-6">
                  <Card className={cn("glass-card", isDark ? "" : "bg-white/50")}>
                    <CardHeader>
                      <CardTitle className={cn("flex items-center gap-2", isDark ? "text-white" : "text-gray-800")}>
                        <Bell className="w-5 h-5 text-pink-400" />
                        Sound & Notifications
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className={cn("flex items-center justify-between p-4 rounded-xl", isDark ? "bg-slate-800/50" : "bg-gray-200/50")}>
                        <div className="flex items-center gap-4">
                          {user.settings.sound ? (
                            <Volume2 className="w-6 h-6 text-purple-400" />
                          ) : (
                            <VolumeX className="w-6 h-6 text-slate-400" />
                          )}
                          <div>
                            <p className={isDark ? "text-white font-medium" : "text-gray-800 font-medium"}>Sound Effects</p>
                            <p className={isDark ? "text-slate-400 text-sm" : "text-gray-500 text-sm"}>
                              Play sounds for interactions
                            </p>
                          </div>
                        </div>
                        <Switch
                          checked={user.settings.sound}
                          onCheckedChange={onToggleSound}
                        />
                      </div>

                      <div className={cn("flex items-center gap-2 text-sm", isDark ? "text-slate-400" : "text-gray-500")}>
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>Mission completion sounds</span>
                      </div>
                      <div className={cn("flex items-center gap-2 text-sm", isDark ? "text-slate-400" : "text-gray-500")}>
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>Button click feedback</span>
                      </div>
                      <div className={cn("flex items-center gap-2 text-sm", isDark ? "text-slate-600" : "text-gray-400")}>
                        <XCircle className="w-4 h-4" />
                        <span>Push notifications (coming soon)</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Progress Tab */}
              {activeTab === 'progress' && (
                <div className="space-y-6">
                  <Card className={cn("glass-card", isDark ? "" : "bg-white/50")}>
                    <CardHeader>
                      <CardTitle className={cn("flex items-center gap-2", isDark ? "text-white" : "text-gray-800")}>
                        <Globe className="w-5 h-5 text-blue-400" />
                        Journey Progress
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className={isDark ? "text-slate-400" : "text-gray-500"}>Overall Completion</span>
                          <span className={isDark ? "text-white font-medium" : "text-gray-800 font-medium"}>{Math.round(progressPercentage)}%</span>
                        </div>
                        <div className={cn("h-3 rounded-full overflow-hidden", isDark ? "bg-slate-700" : "bg-gray-200")}>
                          <motion.div 
                            className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${progressPercentage}%` }}
                            transition={{ duration: 1 }}
                          />
                        </div>
                        <p className={isDark ? "text-sm text-slate-400" : "text-sm text-gray-500"}>{completedMissions} of {totalMissions} missions completed</p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className={cn("p-4 rounded-xl", isDark ? "bg-purple-900/30 border border-purple-500/20" : "bg-purple-100 border border-purple-200")}>
                          <p className={isDark ? "text-purple-300 text-sm" : "text-purple-600 text-sm"}>Lessons Completed</p>
                          <p className={isDark ? "text-2xl font-bold text-white" : "text-2xl font-bold text-gray-800"}>
                            {Object.values(user.progress).filter(p => p.knowledge).length}
                          </p>
                        </div>
                        <div className={cn("p-4 rounded-xl", isDark ? "bg-pink-900/30 border border-pink-500/20" : "bg-pink-100 border border-pink-200")}>
                          <p className={isDark ? "text-pink-300 text-sm" : "text-pink-600 text-sm"}>Challenges Won</p>
                          <p className={isDark ? "text-2xl font-bold text-white" : "text-2xl font-bold text-gray-800"}>
                            {Object.values(user.progress).filter(p => p.challenge).length}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Privacy Tab */}
              {activeTab === 'privacy' && (
                <div className="space-y-6">
                  <Card className={cn("glass-card", isDark ? "" : "bg-white/50")}>
                    <CardHeader>
                      <CardTitle className={cn("flex items-center gap-2", isDark ? "text-white" : "text-gray-800")}>
                        <Lock className="w-5 h-5 text-green-400" />
                        Privacy & Security
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className={cn("flex items-center justify-between p-4 rounded-xl", isDark ? "bg-slate-800/50" : "bg-gray-200/50")}>
                        <div>
                          <p className={isDark ? "text-white font-medium" : "text-gray-800 font-medium"}>Profile Visibility</p>
                          <p className={isDark ? "text-slate-400 text-sm" : "text-gray-500 text-sm"}>Your progress is private</p>
                        </div>
                        <Badge className="bg-green-500/20 text-green-400">Private</Badge>
                      </div>

                      <div className={cn("flex items-center justify-between p-4 rounded-xl", isDark ? "bg-slate-800/50" : "bg-gray-200/50")}>
                        <div>
                          <p className={isDark ? "text-white font-medium" : "text-gray-800 font-medium"}>Data Storage</p>
                          <p className={isDark ? "text-slate-400 text-sm" : "text-gray-500 text-sm"}>Stored locally on device</p>
                        </div>
                        <Badge className="bg-green-500/20 text-green-400">Secure</Badge>
                      </div>

                      <div className={cn("p-4 rounded-xl border", isDark ? "bg-blue-900/20 border-blue-500/20" : "bg-blue-100 border border-blue-200")}>
                        <p className={isDark ? "text-blue-300 text-sm flex items-center gap-2" : "text-blue-600 text-sm flex items-center gap-2"}>
                          <Shield className="w-4 h-4" />
                          Your data stays on your device. We don't collect or share any personal information.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Danger Zone Tab */}
              {activeTab === 'danger' && (
                <div className="space-y-6">
                  <Card className={cn("glass-card border-red-500/20", isDark ? "" : "bg-white/50")}>
                    <CardHeader>
                      <CardTitle className={cn("flex items-center gap-2", isDark ? "text-white" : "text-gray-800")}>
                        <Trash2 className="w-5 h-5 text-red-400" />
                        Danger Zone
                      </CardTitle>
                      <CardDescription className={isDark ? "text-slate-400" : "text-gray-500"}>
                        These actions cannot be undone
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className={cn("p-4 rounded-xl border", isDark ? "bg-red-900/20 border-red-500/30" : "bg-red-100 border border-red-200")}>
                        <p className={isDark ? "text-white font-medium mb-2" : "text-gray-800 font-medium mb-2"}>Reset All Progress</p>
                        <p className={isDark ? "text-slate-400 text-sm mb-4" : "text-gray-500 text-sm mb-4"}>
                          This will delete all your mission progress, badges, and reset your journey from the beginning.
                        </p>
                        <Button
                          variant="destructive"
                          onClick={onReset}
                          className="bg-red-600 hover:bg-red-700"
                        >
                          <RotateCcw className="w-4 h-4 mr-2" />
                          Reset Everything
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}