export type CardFormatStyle = 'chamfer' | 'arch' | 'asymmetric' | 'tilt';

export interface PracticeArea {
  id: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  iconName: string;
  badge: string;
  formatStyle: CardFormatStyle;
  metrics: string;
  deliverables: string[];
  strategicApproach: string;
  featuredCase: {
    context: string;
    action: string;
    outcome: string;
  };
}

export interface SuccessCase {
  id: string;
  category: string;
  badge: string;
  clientProfile: string;
  challenge: string;
  strategy: string;
  financialImpact: string;
  court: string;
  imageUrl?: string;
}

export interface StatItem {
  id: string;
  number: number;
  prefix?: string;
  suffix: string;
  label: string;
  detail: string;
}

export interface Testimonial {
  id: string;
  author: string;
  position: string;
  company: string;
  avatarText: string;
  avatarUrl?: string;
  quote: string;
  caseType: string;
  year: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface AssessmentState {
  area: string;
  urgency: string;
  patrimonyRange: string;
  clientType: string;
  notes: string;
}
