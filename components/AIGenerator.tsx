
import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { SectionCard } from './SectionCard';

export const AIGenerator: React.FC = () => {
    const [prompt, setPrompt] = useState('Gerar tarefas para o Sprint de Cadastro Inteligente');
    const [ideas, setIdeas] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const generateIdeas = async () => {
        if (!process.env.API_KEY) {
            setError('API Key do Gemini não encontrada. Configure a variável de ambiente.');
            setIdeas([
                "Exemplo: Integrar com a API do Gov.br para autenticação OAuth 2.0.",
                "Exemplo: Desenvolver endpoint para consulta de dados de CNPJ na Receita Federal.",
                "Exemplo: Criar UI para a tela de perfil da empresa.",
                "Exemplo: Implementar lógica de análise de elegibilidade inicial.",
            ]);
            return;
        }

        setLoading(true);
        setError(null);
        setIdeas([]);

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: `Aja como um Product Owner sênior. Baseado no objetivo "${prompt}", gere uma lista concisa de 5 a 7 tarefas ou user stories para um sprint de desenvolvimento. Retorne apenas a lista, com cada item começando com um hífen.`,
            });
            
            const text = response.text;
            const generatedIdeas = text.split('- ').filter(idea => idea.trim() !== '');
            setIdeas(generatedIdeas);
        } catch (e) {
            console.error(e);
            setError('Ocorreu um erro ao gerar as ideias. Tente novamente.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <SectionCard title="Gerador de Ideias com IA" icon={<i className="fa-solid fa-lightbulb"></i>}>
            <p className="mb-4">Use a IA do Gemini para gerar tarefas para um sprint com base em um objetivo.</p>
            <div className="space-y-4">
                <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="w-full p-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
                    rows={2}
                    placeholder="Ex: Tarefas para o gerador de documentos"
                />
                <button
                    onClick={generateIdeas}
                    disabled={loading}
                    className="w-full bg-cyan-600 text-white font-semibold py-2 rounded-lg hover:bg-cyan-700 disabled:bg-slate-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
                >
                    {loading ? (
                        <i className="fa-solid fa-spinner fa-spin mr-2"></i>
                    ) : (
                        <i className="fa-solid fa-wand-magic-sparkles mr-2"></i>
                    )}
                    {loading ? 'Gerando...' : 'Gerar Tarefas'}
                </button>
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                
                {ideas.length > 0 && (
                     <div className="mt-4 pt-4 border-t border-slate-200">
                        <h4 className="font-semibold mb-2 text-slate-700">Tarefas Sugeridas:</h4>
                         <ul className="list-disc list-inside space-y-2 text-slate-600">
                             {ideas.map((idea, index) => (
                                 <li key={index}>{idea.trim()}</li>
                             ))}
                         </ul>
                     </div>
                )}
            </div>
        </SectionCard>
    );
};
