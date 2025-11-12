
import React from 'react';
import type { TimelineItemProps } from '../types';

const TimelineItem: React.FC<TimelineItemProps> = ({ phase, title, duration, sprints, isLast }) => (
  <div className="relative pl-8">
    {!isLast && <div className="absolute left-3 top-3 bottom-[-1rem] w-0.5 bg-slate-200"></div>}
    <div className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-600">
      <i className="fa-solid fa-flag-checkered text-white text-xs"></i>
    </div>
    <div className="flex items-baseline">
        <h4 className="font-bold text-slate-800">{phase}: {title}</h4>
        <span className="ml-auto text-xs font-semibold text-slate-500">{duration}</span>
    </div>
    <ul className="mt-2 list-disc list-inside space-y-1 text-slate-500">
      {sprints.map((sprint, index) => (
        <li key={index}><span className="ml-2">{sprint}</span></li>
      ))}
    </ul>
  </div>
);

export const Timeline: React.FC<{ items: TimelineItemProps[] }> = ({ items }) => {
  return (
    <div className="space-y-8">
      {items.map((item, index) => (
        <TimelineItem key={index} {...item} isLast={index === items.length - 1} />
      ))}
    </div>
  );
};
