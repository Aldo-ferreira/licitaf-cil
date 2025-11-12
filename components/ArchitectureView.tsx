
import React from 'react';
import { SectionCard } from './SectionCard';

const TechPill: React.FC<{ label: string; icon: string }> = ({ label, icon }) => (
  <div className="flex items-center bg-slate-100 text-slate-700 text-xs font-medium px-2.5 py-1 rounded-full">
    <i className={`${icon} mr-1.5`}></i>
    {label}
  </div>
);

const ArchBlock: React.FC<{ title: string; icon: string; children: React.ReactNode; color: string }> = ({ title, icon, children, color }) => (
  <div className={`p-4 rounded-lg border-l-4 ${color}`}>
    <div className="flex items-center mb-2">
      <i className={`${icon} mr-2`}></i>
      <h4 className="font-bold">{title}</h4>
    </div>
    <div className="flex flex-wrap gap-2">{children}</div>
  </div>
);

const Arrow: React.FC<{ direction?: 'down' | 'right' }> = ({ direction = 'down' }) => (
    <div className={`flex items-center justify-center my-2 ${direction === 'right' ? 'mx-4 rotate-[-90deg]' : ''}`}>
        <i className="fa-solid fa-arrow-down text-slate-300"></i>
    </div>
);

export const ArchitectureView: React.FC = () => {
  return (
    <div>
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Arquitetura do Sistema</h2>
        <p className="text-slate-600 mb-8">Visão geral da arquitetura de microserviços, fluxo de dados e tecnologias do LicitaFácil.</p>
      
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <SectionCard title="Componentes e Tech Stack" icon={<i className="fa-solid fa-layer-group"></i>} gridSpan="lg:col-span-2">
                <div className="space-y-4">
                    <ArchBlock title="Frontend" icon="fa-solid fa-mobile-screen-button" color="border-cyan-500 bg-cyan-50">
                        <TechPill label="Flutter" icon="fa-brands fa-android" />
                    </ArchBlock>
                    <ArchBlock title="Backend" icon="fa-solid fa-server" color="border-blue-500 bg-blue-50">
                        <TechPill label="Node.js" icon="fa-brands fa-node-js" />
                        <TechPill label="Python" icon="fa-brands fa-python" />
                    </ArchBlock>
                    <ArchBlock title="Banco de Dados" icon="fa-solid fa-database" color="border-indigo-500 bg-indigo-50">
                        <TechPill label="PostgreSQL" icon="fa-solid fa-database" />
                        <TechPill label="Redis" icon="fa-solid fa-memory" />
                    </ArchBlock>
                     <ArchBlock title="Cloud & APIs" icon="fa-solid fa-cloud" color="border-purple-500 bg-purple-50">
                        <TechPill label="AWS / GCP" icon="fa-brands fa-aws" />
                        <TechPill label="GraphQL" icon="fa-solid fa-project-diagram" />
                    </ArchBlock>
                </div>
            </SectionCard>
            <SectionCard title="Fluxo de Dados" icon={<i className="fa-solid fa-right-left"></i>}>
                <div className="flex flex-col text-center text-sm font-semibold">
                    <div className="bg-slate-100 p-2 rounded-md">Usuário (PME)</div>
                    <Arrow />
                    <div className="bg-cyan-100 text-cyan-800 p-2 rounded-md">Frontend (Flutter)</div>
                    <Arrow />
                    <div className="bg-purple-100 text-purple-800 p-2 rounded-md">API Gateway (GraphQL)</div>
                    <Arrow />
                    <div className="bg-blue-100 text-blue-800 p-2 rounded-md">Backend (Node.js / Python)</div>
                    <div className="flex justify-around mt-2">
                        <Arrow direction="down" />
                        <Arrow direction="down" />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="bg-indigo-100 text-indigo-800 p-2 rounded-md">Banco de Dados</div>
                        <div className="bg-green-100 text-green-800 p-2 rounded-md">APIs Externas</div>
                    </div>
                </div>
            </SectionCard>

            <SectionCard title="Integrações Estratégicas" icon={<i className="fa-solid fa-plug-circle-check"></i>} gridSpan="lg:col-span-3">
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <img src="https://seeklogo.com/images/G/gov-br-logo-525E815647-seeklogo.com.png" alt="Gov.br" className="h-10 mx-auto mb-2 grayscale opacity-75"/>
                        <p className="font-semibold text-sm">Gov.br</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <i className="fa-solid fa-building-columns text-3xl mb-2 text-gray-500"></i>
                        <p className="font-semibold text-sm">Junta Comercial</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <i className="fa-solid fa-cart-shopping text-3xl mb-2 text-gray-500"></i>
                        <p className="font-semibold text-sm">ComprasNet</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <i className="fa-solid fa-landmark text-3xl mb-2 text-gray-500"></i>
                        <p className="font-semibold text-sm">SEFAZ</p>
                    </div>
                </div>
            </SectionCard>
        </div>
    </div>
  );
};
