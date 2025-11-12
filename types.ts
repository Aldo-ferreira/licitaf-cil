
export type View = 'architecture' | 'roadmap' | 'monetization' | 'specs' | 'risks';

export interface SectionCardProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  gridSpan?: string;
}

export interface TimelineItemProps {
  phase: string;
  title: string;
  duration: string;
  sprints: string[];
  isLast?: boolean;
}
