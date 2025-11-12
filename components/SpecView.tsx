
import React from 'react';
import { SectionCard } from './SectionCard';

const FaqItem: React.FC<{ question: string; children: React.ReactNode }> = ({ question, children }) => (
    <details className="p-4 rounded-lg bg-slate-50 border border-slate-200 cursor-pointer">
        <summary className="font-semibold text-slate-800">{question}</summary>
        <div className="mt-2 text-slate-600 text-sm leading-relaxed prose prose-sm">
            {children}
        </div>
    </details>
);

export const SpecView: React.FC = () => {
    return (
        <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Especificações Técnicas e Questões</h2>
            <p className="text-slate-600 mb-8">Respostas para questões chave de implementação, conformidade e experiência do usuário.</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <SectionCard title="Perguntas Frequentes" icon={<i className="fa-solid fa-circle-question"></i>} gridSpan="lg:col-span-2">
                    <div className="space-y-4">
                        <FaqItem question="Como estruturar a integração com a API do Gov.br?">
                            <p>A integração será via <strong>OAuth 2.0</strong>, o padrão de mercado para autenticação segura.</p>
                            <ol>
                                <li><strong>Fluxo de Autenticação:</strong> O usuário será redirecionado para a tela de login do Gov.br. Após a autenticação, a API nos retornará um token de acesso.</li>
                                <li><strong>Escopos:</strong> Solicitaremos escopos mínimos necessários para obter dados cadastrais (CPF/CNPJ, nome, etc.), garantindo a conformidade com a LGPD.</li>
                                <li><strong>Segurança:</strong> O token de acesso será armazenado de forma segura (encrypted) em nosso backend e usado para chamadas subsequentes às APIs do governo.</li>
                            </ol>
                        </FaqItem>
                        <FaqItem question="Qual o melhor algoritmo para matching de licitações?">
                            <p>Adotaremos uma abordagem híbrida e progressiva:</p>
                            <ul>
                                <li><strong>MVP (Fase 1):</strong> Um algoritmo baseado em <strong>TF-IDF/BM25</strong> para matching de palavras-chave entre o CNAE da empresa e a descrição do edital. Filtros simples por valor e localidade serão aplicados.</li>
                                <li><strong>Machine Learning (Fase 3):</strong> Evoluiremos para um modelo de classificação (ex: <strong>LightGBM ou Regressão Logística</strong>) treinado com dados históricos. O modelo aprenderá com os padrões de licitações que empresas de um determinado perfil ganham, gerando um "Score de Compatibilidade" muito mais preciso.</li>
                            </ul>
                        </FaqItem>
                        <FaqItem question="Como garantir a conformidade com a LGPD?">
                            <p>A conformidade com a Lei Geral de Proteção de Dados é uma prioridade máxima. Nossas ações incluem:</p>
                            <ul>
                                <li><strong>Privacy by Design:</strong> A arquitetura do sistema é pensada desde o início para proteger dados.</li>
                                <li><strong>Consentimento Explícito:</strong> O usuário terá total controle sobre seus dados e consentirá de forma clara para cada uso.</li>
                                <li><strong>Minimização de Dados:</strong> Coletaremos apenas os dados estritamente necessários para a operação.</li>
                                <li><strong>Segurança:</strong> Criptografia de dados em repouso e em trânsito, e políticas rígidas de acesso.</li>
                                <li><strong>Transparência:</strong> Uma política de privacidade clara e um canal direto com nosso Encarregado de Proteção de Dados (DPO).</li>
                            </ul>
                        </FaqItem>
                        <FaqItem question="Estratégia para onboarding de usuários não-técnicos?">
                            <p>O onboarding será focado na simplicidade e no suporte contínuo:</p>
                            <ol>
                                <li><strong>Cadastro Simplificado:</strong> A integração com Gov.br e CNPJ elimina a maior parte da digitação.</li>
                                <li><strong>Tour Guiado Interativo:</strong> Um passo a passo na primeira utilização que apresenta as funcionalidades core (matching, gerador de documentos).</li>
                                <li><strong>Tooltips e Vídeos Curtos:</strong> Dicas contextuais e vídeos de 1 minuto explicando processos chave.</li>
                                <li><strong>Suporte Humanizado:</strong> Acesso fácil a um chat com especialistas para tirar dúvidas, especialmente no plano Premium.</li>
                            </ol>
                        </FaqItem>
                    </div>
                </SectionCard>
            </div>
        </div>
    );
};
