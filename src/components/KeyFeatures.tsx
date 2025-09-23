import React from 'react';
import { Settings, Wifi, Database, TrendingUp } from 'lucide-react';

const KeyFeatures: React.FC = () => {
  const features = [
    {
      category: "Gestion Centralisée",
      icon: Settings,
      items: [
        "vCenter Server pour administration unifiée",
        "Interface web moderne et intuitive",
        "API REST complète pour l'automation",
        "Monitoring et alertes en temps réel"
      ]
    },
    {
      category: "Réseau Avancé",
      icon: Wifi,
      items: [
        "vSphere Distributed Switch",
        "Segmentation réseau micro",
        "Load balancing automatique",
        "Politique de sécurité intégrée"
      ]
    },
    {
      category: "Stockage Intelligent",
      icon: Database,
      items: [
        "Support SAN, NAS, et vSAN",
        "Storage vMotion sans interruption",
        "Déduplication et compression",
        "Snapshots et clonage rapide"
      ]
    },
    {
      category: "Bénéfices Business",
      icon: TrendingUp,
      items: [
        "Consolidation serveurs (ratio 20:1)",
        "Réduction TCO jusqu'à 50%",
        "Disponibilité 99.9%+",
        "RTO < 15 minutes"
      ]
    }
  ];

  const metrics = [
    { label: "Réduction des coûts", value: "50%", color: "text-green-600" },
    { label: "Disponibilité", value: "99.9%", color: "text-blue-600" },
    { label: "Consolidation", value: "20:1", color: "text-purple-600" },
    { label: "ROI", value: "300%", color: "text-[#0fb0f0]" }
  ];

  return (
    <section id="features" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Settings size={32} className="text-[#0fb0f0] mr-3" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Fonctionnalités Clés
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une suite complète d'outils pour la virtualisation d'entreprise
          </p>
        </div>

        {/* Metrics Dashboard */}
        <div className="bg-gradient-to-r from-[#0fb0f0] to-[#0c5a7c] rounded-2xl p-8 mb-12 text-white">
          <h3 className="text-2xl font-bold text-center mb-8">
            Impact Business
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <div key={metric.label} className="text-center">
                <div className="text-4xl font-bold mb-2">{metric.value}</div>
                <div className="text-sm opacity-90">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.category}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#0fb0f0] to-[#0c5a7c] rounded-xl flex items-center justify-center mr-4">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {feature.category}
                  </h3>
                </div>

                <div className="space-y-3">
                  {feature.items.map((item, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-[#0fb0f0] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* vCenter Screenshot Mockup */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <div className="bg-gradient-to-r from-[#0c5a7c] to-[#0fb0f0] p-4">
              <div className="flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="ml-4 text-white font-semibold">
                  vCenter Server
                </div>
              </div>
            </div>

            <div className="p-8 bg-gray-50">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Hosts actifs
                  </h4>
                  <div className="text-2xl font-bold text-[#0fb0f0]">12</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    VMs en cours
                  </h4>
                  <div className="text-2xl font-bold text-green-600">247</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    CPU Usage
                  </h4>
                  <div className="text-2xl font-bold text-yellow-600">67%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;