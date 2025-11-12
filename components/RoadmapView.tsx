
import React from 'react';
import { SectionCard } from './SectionCard';
import { Timeline } from './Timeline';
import { AIGenerator } from './AIGenerator';
import type { TimelineItemProps } from '../types';

const timelineData: TimelineItemProps[] = [
  {
    phase: 'MVP',
    title: 'Lançamento e Validação',
    duration: '3 Meses',
    sprints: ['Sprint 1-4: Cadastro Inteligente', 'Sprint 1-4: Matching Básico de Licitações']
  },
  {
    phase: 'Fase 2',
    title: 'Expansão de Funcionalidades',
    duration: '2 Meses',
    sprints: ['Sprint 5-8: Gerador de Documentos', 'Sprint 5-8: Integração com ComprasNet e SEFAZ']
  },
  {
    phase: 'Fase 3',
    title: 'Inteligência e Escala',
    duration: '3 Meses',
    sprints: ['Sprint 9-12: Algoritmo de ML para Matching', 'Sprint 9-12: Integrações Avançadas (Junta Comercial)', 'Otimização de Performance']
  }
];

export const RoadmapView: React.FC = () => {
  return (
    <div>
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Plano de Desenvolvimento</h2>
        <p className="text-slate-600 mb-8">Roadmap detalhado com entregas faseadas, do MVP à implementação de Machine Learning.</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
                <SectionCard title="Roadmap Detalhado" icon={<i className="fa-solid fa-timeline"></i>}>
                    <Timeline items={timelineData} />
                </SectionCard>
            </div>
            <div className="lg:col-span-2">
                <AIGenerator />
            </div>
        </div>
    </div>
  );
};
