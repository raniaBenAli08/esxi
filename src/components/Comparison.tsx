import React, { useState } from 'react';
import { ArrowUpDown, Check, X, Minus } from 'lucide-react';

const Comparison: React.FC = () => {
  const [sortBy, setSortBy] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const comparisonData = [
    {
      criterion: "Type d'hyperviseur",
      esxi: "Bare-metal (Type 1)",
      hyperv: "Bare-metal (Type 1)",
      score_esxi: "equal",
      score_hyperv: "equal"
    },
    {
      criterion: "Coût initial",
      esxi: "Élevé (licence payante)",
      hyperv: "Inclus Windows Server",
      score_esxi: "poor",
      score_hyperv: "good"
    },
    {
      criterion: "Performance",
      esxi: "Excellente, optimisée",
      hyperv: "Très bonne",
      score_esxi: "excellent",
      score_hyperv: "good"
    },
    {
      criterion: "Écosystème",
      esxi: "Mature et complet",
      hyperv: "Intégration Microsoft",
      score_esxi: "excellent",
      score_hyperv: "good"
    },
    {
      criterion: "Kubernetes",
      esxi: "Intégré (Tanzu)",
      hyperv: "Extensions nécessaires",
      score_esxi: "excellent",
      score_hyperv: "average"
    },
    {
      criterion: "Gestion centralisée",
      esxi: "vCenter Server",
      hyperv: "System Center VMM",
      score_esxi: "excellent",
      score_hyperv: "good"
    },
    {
      criterion: "Support communauté",
      esxi: "Large communauté",
      hyperv: "Communauté Microsoft",
      score_esxi: "excellent",
      score_hyperv: "good"
    },
    {
      criterion: "Courbe apprentissage",
      esxi: "Complexe mais puissant",
      hyperv: "Plus simple si environnement MS",
      score_esxi: "average",
      score_hyperv: "good"
    }
  ];

  const getScoreIcon = (score: string) => {
    switch (score) {
      case 'excellent': return <Check size={20} className="text-green-600" />;
      case 'good': return <Check size={20} className="text-blue-600" />;
      case 'average': return <Minus size={20} className="text-yellow-600" />;
      case 'poor': return <X size={20} className="text-red-600" />;
      case 'equal': return <Minus size={20} className="text-gray-600" />;
      default: return <Minus size={20} className="text-gray-600" />;
    }
  };

  const getScoreColor = (score: string) => {
    switch (score) {
      case 'excellent': return 'bg-green-100 text-green-800';
      case 'good': return 'bg-blue-100 text-blue-800';
      case 'average': return 'bg-yellow-100 text-yellow-800';
      case 'poor': return 'bg-red-100 text-red-800';
      case 'equal': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="comparison" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <ArrowUpDown size={32} className="text-[#0fb0f0] mr-3" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              VMware ESXi vs Hyper-V
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comparaison détaillée des deux solutions de virtualisation leaders
          </p>
        </div>

        {/* Platform Logos */}
        <div className="flex items-center justify-center mb-12 space-x-12">
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-[#0fb0f0] to-[#0c5a7c] rounded-2xl flex items-center justify-center mb-4 mx-auto">
              <span className="text-white font-bold text-2xl">VM</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900">VMware ESXi</h3>
            <p className="text-gray-600">Leader du marché</p>
          </div>
          
          <div className="text-6xl text-gray-300">VS</div>
          
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mb-4 mx-auto">
              <span className="text-white font-bold text-2xl">H-V</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900">Hyper-V</h3>
            <p className="text-gray-600">Solution Microsoft</p>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-[#0fb0f0] to-[#0c5a7c] text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Critère</th>
                  <th className="px-6 py-4 text-center font-semibold">VMware ESXi</th>
                  <th className="px-6 py-4 text-center font-semibold">Microsoft Hyper-V</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr
                    key={row.criterion}
                    className={`${
                      index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                    } hover:bg-blue-50 transition-colors duration-200`}
                  >
                    <td className="px-6 py-4 font-semibold text-gray-900 border-r border-gray-200">
                      {row.criterion}
                    </td>
                    <td className="px-6 py-4 text-center border-r border-gray-200">
                      <div className="flex items-center justify-center space-x-3">
                        {getScoreIcon(row.score_esxi)}
                        <span className="text-sm">{row.esxi}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center space-x-3">
                        {getScoreIcon(row.score_hyperv)}
                        <span className="text-sm">{row.hyperv}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Score Summary */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-[#0fb0f0] to-[#0c5a7c] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">VMware ESXi</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Points forts</span>
                <span className="font-bold">Performance, Écosystème</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Points faibles</span>
                <span className="font-bold">Coût, Complexité</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Recommandé pour</span>
                <span className="font-bold">Enterprise, Cloud</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">Microsoft Hyper-V</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Points forts</span>
                <span className="font-bold">Coût, Intégration MS</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Points faibles</span>
                <span className="font-bold">Écosystème, Kubernetes</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Recommandé pour</span>
                <span className="font-bold">PME, Stack Microsoft</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Decision Guide */}
        <div className="mt-12 bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Guide de Décision</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-[#0fb0f0] mb-4">Choisir VMware ESXi si :</h4>
              <div className="space-y-2">
                {[
                  "Environnement critique de production",
                  "Budget conséquent disponible",
                  "Besoin de fonctionnalités avancées",
                  "Équipe technique expérimentée",
                  "Architecture multi-cloud hybride"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <Check size={16} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-blue-600 mb-4">Choisir Hyper-V si :</h4>
              <div className="space-y-2">
                {[
                  "Écosystème Microsoft existant",
                  "Budget limité pour la virtualisation",
                  "Équipe familière avec Windows",
                  "PME ou département spécifique",
                  "Intégration Active Directory requise"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <Check size={16} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;