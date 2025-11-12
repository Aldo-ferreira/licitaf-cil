
import React from 'react';
import type { View } from '../types';

interface SidebarProps {
  currentView: View;
  setCurrentView: (view: View) => void;
}

const NavItem: React.FC<{
  viewName: View;
  currentView: View;
  setCurrentView: (view: View) => void;
  iconClass: string;
  text: string;
}> = ({ viewName, currentView, setCurrentView, iconClass, text }) => (
  <li>
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        setCurrentView(viewName);
      }}
      className={`flex items-center p-3 my-1 rounded-lg transition-colors duration-200 ${
        currentView === viewName
          ? 'bg-cyan-600 text-white shadow-md'
          : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
      }`}
    >
      <i className={`${iconClass} w-6 text-center text-lg`}></i>
      <span className="ml-4 font-medium">{text}</span>
    </a>
  </li>
);

export const Sidebar: React.FC<SidebarProps> = ({ currentView, setCurrentView }) => {
  return (
    <nav className="w-64 bg-white border-r border-slate-200 p-4 sticky top-0 h-screen flex-shrink-0 hidden md:flex flex-col justify-between">
      <div>
        <div className="flex items-center pl-2 mb-8">
          <i className="fa-solid fa-file-invoice-dollar text-3xl text-cyan-600"></i>
          <span className="ml-3 text-2xl font-bold text-slate-800">LicitaFácil</span>
        </div>
        <ul>
          <NavItem
            viewName="architecture"
            currentView={currentView}
            setCurrentView={setCurrentView}
            iconClass="fa-solid fa-sitemap"
            text="Arquitetura"
          />
          <NavItem
            viewName="roadmap"
            currentView={currentView}
            setCurrentView={setCurrentView}
            iconClass="fa-solid fa-road"
            text="Roadmap"
          />
          <NavItem
            viewName="monetization"
            currentView={currentView}
            setCurrentView={setCurrentView}
            iconClass="fa-solid fa-sack-dollar"
            text="Monetização"
          />
          <NavItem
            viewName="specs"
            currentView={currentView}
            setCurrentView={setCurrentView}
            iconClass="fa-solid fa-file-alt"
            text="Especificações"
          />
          <NavItem
            viewName="risks"
            currentView={currentView}
            setCurrentView={setCurrentView}
            iconClass="fa-solid fa-triangle-exclamation"
            text="Riscos"
          />
        </ul>
      </div>
      <div className="p-4 bg-slate-100 rounded-lg">
          <h4 className="font-bold text-slate-800">Precisa de ajuda?</h4>
          <p className="text-sm text-slate-600 mt-1">Contate nosso suporte para dúvidas técnicas.</p>
          <button className="w-full mt-3 bg-cyan-600 text-white text-sm font-semibold py-2 rounded-lg hover:bg-cyan-700 transition-colors">
              Contatar Suporte
          </button>
      </div>
    </nav>
  );
};
