"use client";

import { useState } from "react";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { Plus, Tag, ToggleLeft, ToggleRight, Trash2, CheckCircle2 } from "lucide-react";

interface TopicItem {
  id: string;
  name: string;
  category: string;
  active: boolean;
  articlesCount: number;
}

const INITIAL_TOPICS: TopicItem[] = [
  { id: "1", name: "Tecnologia e Inteligência Artificial", category: "Tecnologia e IA", active: true, articlesCount: 14 },
  { id: "2", name: "Finanças e Economia", category: "Finanças e Economia", active: true, articlesCount: 9 },
  { id: "3", name: "Saúde e Bem-estar", category: "Saúde e Bem-estar", active: true, articlesCount: 8 },
  { id: "4", name: "Casa, Construção e Decoração", category: "Casa e Decoração", active: true, articlesCount: 5 },
  { id: "5", name: "Viagens e Turismo", category: "Viagens e Turismo", active: true, articlesCount: 4 },
  { id: "6", name: "Educação e Carreira", category: "Educação", active: true, articlesCount: 6 },
  { id: "7", name: "Gastronomia", category: "Gastronomia", active: true, articlesCount: 3 },
  { id: "8", name: "Curiosidades Científicas", category: "Curiosidades", active: true, articlesCount: 7 },
];

export default function AdminTopicsPage() {
  const [topics, setTopics] = useState<TopicItem[]>(INITIAL_TOPICS);
  const [newTopicName, setNewTopicName] = useState("");
  const [newCategory, setNewCategory] = useState("Tecnologia e IA");

  const handleAddTopic = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTopicName.trim()) return;

    const newTopic: TopicItem = {
      id: Date.now().toString(),
      name: newTopicName.trim(),
      category: newCategory,
      active: true,
      articlesCount: 0,
    };

    setTopics([newTopic, ...topics]);
    setNewTopicName("");
  };

  const toggleTopic = (id: string) => {
    setTopics(
      topics.map((t) => (t.id === id ? { ...t, active: !t.active } : t))
    );
  };

  const removeTopic = (id: string) => {
    setTopics(topics.filter((t) => t.id !== id));
  };

  return (
    <>
      <AdminHeader
        title="Gerenciamento de Temas"
        subtitle="Cadastre os temas desejados. A IA escolherá aleatoriamente um tema ativo para cada publicação."
      />

      <main className="p-6 sm:p-8 space-y-6 flex-1">
        {/* Identificação institucional */}
        <div className="text-xs text-slate-500 bg-white border border-slate-200 p-3 rounded-lg flex items-center justify-between">
          <span>
            Responsável Técnico: <strong>Peter Port Solucoes Digitais</strong> — CNPJ: <strong>40088094000117</strong>
          </span>
          <span className="font-semibold text-slate-700">
            {topics.filter((t) => t.active).length} Temas Ativos de {topics.length} Cadastrados
          </span>
        </div>

        {/* Formulário de Cadastro Rápido */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
          <h2 className="font-bold text-slate-900 text-sm mb-3 flex items-center gap-2">
            <Plus className="w-4 h-4 text-sky-600" />
            Cadastrar Novo Tema Editorial
          </h2>
          <form onSubmit={handleAddTopic} className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={newTopicName}
              onChange={(e) => setNewTopicName(e.target.value)}
              placeholder="Ex: Robótica e Automação Industrial..."
              className="flex-1 bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:bg-white"
            />
            <select
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              className="bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:bg-white"
            >
              <option value="Tecnologia e IA">Tecnologia e IA</option>
              <option value="Finanças e Economia">Finanças e Economia</option>
              <option value="Saúde e Bem-estar">Saúde e Bem-estar</option>
              <option value="Casa e Decoração">Casa e Decoração</option>
              <option value="Viagens e Turismo">Viagens e Turismo</option>
              <option value="Educação">Educação</option>
              <option value="Gastronomia">Gastronomia</option>
              <option value="Curiosidades">Curiosidades</option>
            </select>
            <button
              type="submit"
              className="bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs px-5 py-2 rounded-lg transition-colors cursor-pointer"
            >
              Adicionar Tema
            </button>
          </form>
        </div>

        {/* Tabela de Temas */}
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead className="bg-slate-50 text-slate-500 uppercase font-bold border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4">Nome do Tema</th>
                  <th className="py-3 px-4">Categoria Vinculada</th>
                  <th className="py-3 px-4">Artigos Gerados</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {topics.map((topic) => (
                  <tr key={topic.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3 px-4 font-semibold text-slate-900 flex items-center gap-2">
                      <Tag className="w-3.5 h-3.5 text-sky-600" />
                      <span>{topic.name}</span>
                    </td>
                    <td className="py-3 px-4 text-slate-600">{topic.category}</td>
                    <td className="py-3 px-4 font-mono font-bold text-slate-900">
                      {topic.articlesCount}
                    </td>
                    <td className="py-3 px-4">
                      <button
                        onClick={() => toggleTopic(topic.id)}
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold cursor-pointer transition-colors ${
                          topic.active
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            : "bg-slate-100 text-slate-500 border border-slate-200"
                        }`}
                      >
                        {topic.active ? (
                          <>
                            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                            Ativo
                          </>
                        ) : (
                          "Pausado"
                        )}
                      </button>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <button
                        onClick={() => removeTopic(topic.id)}
                        className="text-red-500 hover:text-red-700 p-1 rounded hover:bg-red-50 transition-colors"
                        title="Remover tema"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
}
