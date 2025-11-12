
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 bg-white/75 backdrop-blur-lg z-10 border-b border-slate-200">
      <div className="mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
             <i className="fa-solid fa-file-invoice-dollar text-2xl text-cyan-600"></i>
            <h1 className="text-xl font-bold text-slate-800 ml-3">LicitaFácil</h1>
            <span className="hidden sm:inline ml-2 text-sm font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-md">Planejamento Estratégico</span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-slate-100">
              <i className="fa-regular fa-bell text-slate-600"></i>
            </button>
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-500">
              <img src="https://picsum.photos/100/100" alt="User Avatar" className="w-full h-full rounded-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
