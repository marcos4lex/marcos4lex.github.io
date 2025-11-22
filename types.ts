export interface Skill {
  name: string;
  level: number; // 1-100
  category: 'frontend' | 'language' | 'db' | 'tool';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  futureIdeas: string[];
  type: 'web' | 'terminal' | 'system';
  imageUrl?: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  type: 'work' | 'education';
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}