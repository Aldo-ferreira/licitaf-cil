
import React, { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { ArchitectureView } from './components/ArchitectureView';
import { RoadmapView } from './components/RoadmapView';
import { MonetizationView } from './components/MonetizationView';
import { SpecView } from './components/SpecView';
import { RiskView } from './components/RiskView';
import { View } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('architecture');

  const renderContent = () => {
    switch (currentView) {
      case 'architecture':
        return <ArchitectureView />;
      case 'roadmap':
        return <RoadmapView />;
      case 'monetization':
        return <MonetizationView />;
      case 'specs':
        return <SpecView />;
      case 'risks':
        return <RiskView />;
      default:
        return <ArchitectureView />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-4 sm:p-6 md:p-8 lg:p-10 overflow-y-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default App;
