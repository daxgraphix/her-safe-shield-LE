import React from 'react';

export type MissionStatus = 'locked' | 'unlocked' | 'completed';

export interface MissionProgress {
  status: MissionStatus;
  knowledge: boolean;
  challenge: boolean;
}

export interface UserProfile {
  username: string;
  avatar: {
    id: string;
    svg: string;
    color: string;
  };
  progress: Record<string, MissionProgress>;
  settings: {
    sound: boolean;
    theme: 'dark' | 'light';
  };
}

export interface KnowledgePage {
  text: string;
}

export interface KnowledgeModule {
  title: string;
  pages: KnowledgePage[];
}

export interface QuizOption {
  text: string;
  correct: boolean;
}

export interface QuizQuestion {
  text: string;
  options: QuizOption[];
  feedback: string;
}

export interface QuizChallenge {
  type: 'quiz' | 'scenario';
  title: string;
  intro: string;
  questions: QuizQuestion[];
}

export interface PhishingHotspot {
  id: string;
  text: string;
  styles: string;
}

export interface PhishingChallenge {
  type: 'phishing';
  title: string;
  intro: string;
  email: {
    sender: string;
    subject: string;
    body: string;
  };
  hotspots: PhishingHotspot[];
}

export interface MatchingPair {
  left: string;
  right: string;
}

export interface MatchingChallenge {
  type: 'matching';
  title: string;
  intro: string;
  pairs: MatchingPair[];
}

export interface Flashcard {
  front: string;
  back: string;
}

export interface FlashcardChallenge {
  type: 'flashcard';
  title: string;
  intro: string;
  cards: Flashcard[];
}

export type Challenge = QuizChallenge | PhishingChallenge | MatchingChallenge | FlashcardChallenge;

export interface Mission {
  id: string;
  title: string;
  badgeName: string;
  icon: React.ReactNode;
  badgeIcon: React.ReactNode;
  description: string;
  knowledge: KnowledgeModule;
  challenge: Challenge;
}

export interface HandbookEntry {
  title: string;
  icon: React.ReactNode;
  color: string;
  content: string[];
}
