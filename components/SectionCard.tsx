
import React from 'react';
import type { SectionCardProps } from '../types';

export const SectionCard: React.FC<SectionCardProps> = ({ title, icon, children, className = '', gridSpan = 'col-span-1' }) => {
  return (
    <div className={`bg-white p-6 rounded-2xl shadow-sm border border-slate-100 ${gridSpan} ${className}`}>
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center mr-4">
          {icon}
        </div>
        <h3 className="text-lg font-bold text-slate-800">{title}</h3>
      </div>
      <div className="text-slate-600 text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
};
