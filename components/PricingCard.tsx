
import React from 'react';

interface PricingCardProps {
    plan: string;
    price: string;
    features: string[];
    isFeatured?: boolean;
}

export const PricingCard: React.FC<PricingCardProps> = ({ plan, price, features, isFeatured = false }) => {
    return (
        <div className={`rounded-2xl p-8 flex flex-col ${isFeatured ? 'bg-cyan-600 text-white shadow-xl scale-105' : 'bg-white shadow-sm border border-slate-100'}`}>
            <h3 className="text-lg font-bold">{plan}</h3>
            <p className="mt-2">
                <span className={`text-4xl font-extrabold ${isFeatured ? 'text-white' : 'text-slate-900'}`}>R$ {price}</span>
                <span className={`ml-1 ${isFeatured ? 'text-cyan-200' : 'text-slate-500'}`}>/mês</span>
            </p>
            <p className={`mt-2 text-sm ${isFeatured ? 'text-cyan-100' : 'text-slate-600'}`}>Ideal para empresas que buscam {plan === 'Básico' ? 'iniciar' : 'escalar'} nas licitações.</p>
            <ul className="mt-6 space-y-4 text-sm flex-grow">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                        <i className={`fa-solid fa-check-circle mt-1 mr-3 ${isFeatured ? 'text-cyan-300' : 'text-cyan-500'}`}></i>
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
            <button className={`w-full mt-8 py-3 rounded-lg font-semibold transition-colors ${isFeatured ? 'bg-white text-cyan-600 hover:bg-cyan-50' : 'bg-cyan-600 text-white hover:bg-cyan-700'}`}>
                Começar com o plano {plan}
            </button>
        </div>
    );
};
