
import React from 'react';
import { SectionCard } from './SectionCard';

const RiskRow: React.FC<{ risk: string; impact: string; probability: string; mitigation: string; impactColor: string }> = ({ risk, impact, probability, mitigation, impactColor }) => (
    <tr className="border-b border-slate-200 hover:bg-slate-50">
        <td className="p-3 font-semibold text-slate-700">{risk}</td>
        <td className="p-3"><span className={`px-2 py-1 text-xs font-bold rounded-full ${impactColor}`}>{impact}</span></td>
        <td className="p-3 text-slate-600">{probability}</td>
        <td className="p-3 text-slate-600">{mitigation}</td>
    </tr>
);

export const RiskView: React.FC = () => {
    return (
        <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Análise de Riscos e Mitigação</h2>
            <p className="text-slate-600 mb-8">Identificação proativa de riscos técnicos, de mercado e operacionais, com estratégias de mitigação definidas.</p>
            
            <SectionCard title="Matriz de Riscos" icon={<i className="fa-solid fa-shield-halved"></i>} gridSpan="lg:col-span-1">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-slate-100 text-slate-700 uppercase text-xs">
                            <tr>
                                <th className="p-3">Risco</th>
                                <th className="p-3">Impacto</th>
                                <th className="p-3">Probabilidade</th>
                                <th className="p-3">Estratégia de Mitigação</th>
                            </tr>
                        </thead>
                        <tbody>
                            <RiskRow 
                                risk="Instabilidade de APIs do Governo" 
                                impact="Alto"
                                probability="Média"
                                mitigation="Implementar caching (Redis), filas de retentativa com backoff exponencial e monitoramento contínuo."
                                impactColor="bg-red-100 text-red-800"
                            />
                            <RiskRow 
                                risk="Baixa Adoção pelo Público-Alvo" 
                                impact="Alto"
                                probability="Média"
                                mitigation="Estratégia de onboarding simplificada, modelo Freemium para teste, e marketing focado nos 'early adopters'."
                                impactColor="bg-red-100 text-red-800"
                            />
                             <RiskRow 
                                risk="Mudanças na Legislação de Licitações" 
                                impact="Médio"
                                probability="Baixa"
                                mitigation="Consultoria jurídica contínua e arquitetura de software modular para rápida adaptação das regras de negócio."
                                impactColor="bg-yellow-100 text-yellow-800"
                            />
                            <RiskRow 
                                risk="Conformidade com a LGPD" 
                                impact="Alto"
                                probability="Baixa"
                                mitigation="Contratação de um DPO (Data Protection Officer), auditorias de segurança e política de 'Privacy by Design'."
                                impactColor="bg-red-100 text-red-800"
                            />
                             <RiskRow 
                                risk="Complexidade Técnica do Matching com ML" 
                                impact="Médio"
                                probability="Média"
                                mitigation="Começar com um algoritmo mais simples (MVP), coletar dados de qualidade e contratar especialistas em ML na Fase 3."
                                impactColor="bg-yellow-100 text-yellow-800"
                            />
                        </tbody>
                    </table>
                </div>
            </SectionCard>
        </div>
    );
};
