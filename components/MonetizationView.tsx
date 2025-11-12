
import React from 'react';
import { SectionCard } from './SectionCard';
import { PricingCard } from './PricingCard';

export const MonetizationView: React.FC = () => {
    return (
        <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Estratégia de Monetização</h2>
            <p className="text-slate-600 mb-8">Modelo de negócio Freemium escalável, com planos para PMEs e uma taxa de sucesso alinhada ao resultado do cliente.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                <PricingCard
                    plan="Básico"
                    price="99"
                    features={[
                        'Até 10 matches de licitação/mês',
                        'Gerador de documentos básicos',
                        'Checklist de documentos',
                        'Suporte por e-mail'
                    ]}
                />
                <PricingCard
                    plan="Premium"
                    price="299"
                    isFeatured={true}
                    features={[
                        'Matches de licitação ilimitados',
                        'Score de compatibilidade com ML',
                        'Biblioteca completa de documentos',
                        'Preenchimento automático',
                        'Integração Junta Comercial',
                        'Suporte prioritário via chat'
                    ]}
                />
                <SectionCard title="Taxa de Sucesso" icon={<i className="fa-solid fa-handshake"></i>}>
                    <p className="font-bold text-slate-800 text-lg mb-2">1-5% do valor da licitação</p>
                    <p>
                        Para licitações ganhas com o auxílio da plataforma, será cobrada uma taxa de sucesso sobre o valor total do contrato. Este modelo alinha nossos incentivos com o sucesso dos nossos clientes.
                    </p>
                    <div className="mt-4 p-3 bg-green-50 border-l-4 border-green-500 text-green-800 rounded-r-lg">
                        <p className="font-semibold">Win-Win:</p>
                        <p>Cobramos apenas quando você ganha.</p>
                    </div>
                </SectionCard>
            </div>
        </div>
    );
};
