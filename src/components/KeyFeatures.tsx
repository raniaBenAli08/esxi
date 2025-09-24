import React, { useState } from 'react';
import {
  Settings,
  Wifi,
  Database,
  TrendingUp,
  Move3D,
  HardDrive,
  BarChart,
  Shield,
  Copy,
  Camera,
  ArrowRight,
} from 'lucide-react';

const KeyFeatures: React.FC = () => {
  const [animatingVM, setAnimatingVM] = useState(false);

  const features = [
    {
      category: 'Gestion Centralisée',
      icon: Settings,
      items: [
        'vCenter Server pour administration unifiée',
        'Interface web moderne et intuitive',
        "API REST complète pour l'automation",
        'Monitoring et alertes en temps réel',
      ],
    },
    {
      category: 'Réseau Avancé',
      icon: Wifi,
      items: [
        'vSphere Distributed Switch',
        'Segmentation réseau micro',
        'Load balancing automatique',
        'Politique de sécurité intégrée',
      ],
    },
    {
      category: 'Stockage Intelligent',
      icon: Database,
      items: [
        'Support SAN, NAS, et vSAN',
        'Storage vMotion sans interruption',
        'Déduplication et compression',
        'Snapshots et clonage rapide',
      ],
    },
    {
      category: 'Bénéfices Business',
      icon: TrendingUp,
      items: [
        'Consolidation serveurs (ratio 20:1)',
        "Réduction TCO jusqu'à 50%",
        'Disponibilité 99.9%+',
        'RTO < 15 minutes',
      ],
    },
  ];

  const techniques = [
    {
      name: 'vMotion',
      description: 'Migration à chaud des VMs entre serveurs',
      icon: Move3D,
      color: 'from-blue-500 to-blue-700',
      detail: 'Déplace les VMs sans interruption de service',
    },
    {
      name: 'Storage vMotion',
      description: 'Migration du stockage à chaud',
      icon: HardDrive,
      color: 'from-green-500 to-green-700',
      detail: 'Déplace les données VM sans arrêt',
    },
    {
      name: 'DRS',
      description: 'Équilibrage automatique des ressources',
      icon: BarChart,
      color: 'from-purple-500 to-purple-700',
      detail: 'Distribution optimale de la charge',
    },
    {
      name: 'HA',
      description: 'Haute disponibilité automatique',
      icon: Shield,
      color: 'from-red-500 to-red-700',
      detail: 'Redémarrage auto après panne serveur',
    },
    {
      name: 'FT',
      description: 'Tolérance aux pannes continue',
      icon: Copy,
      color: 'from-yellow-500 to-yellow-700',
      detail: 'VM secondaire synchrone en temps réel',
    },
    {
      name: 'Snapshots',
      description: 'Points de restauration instantanés',
      icon: Camera,
      color: 'from-indigo-500 to-indigo-700',
      detail: 'Sauvegarde état complet de la VM',
    },
  ];

  const metrics = [
    { label: 'Réduction des coûts', value: '50%', color: 'text-green-600' },
    { label: 'Disponibilité', value: '99.9%', color: 'text-blue-600' },
    { label: 'Consolidation', value: '20:1', color: 'text-purple-600' },
    { label: 'ROI', value: '300%', color: 'text-[#0fb0f0]' },
  ];

  const startVMotionAnimation = () => {
    setAnimatingVM(true);
    setTimeout(() => setAnimatingVM(false), 3000);
  };

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


        {/* Features Grid */}
       

        {/* vMotion Demo */}
        <div className="bg-white rounded-2xl shadow-xl p-8 my-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Démonstration vMotion
            </h3>
            <p className="text-gray-600">
              Migration à chaud d'une machine virtuelle entre serveurs
            </p>
          </div>

          <div className="relative flex items-center justify-between max-w-4xl mx-auto">
            {/* Source Server */}
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-[#0c5a7c] to-[#0fb0f0] rounded-xl flex items-center justify-center mb-4 relative">
                <div className="text-white font-bold">Serveur A</div>
                {!animatingVM && (
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center animate-pulse">
                    <span className="text-white text-xs font-bold">VM</span>
                  </div>
                )}
              </div>
              <p className="text-sm text-gray-600">Source</p>
            </div>

            {/* Migration Arrow and VM */}
            <div className="flex-1 relative mx-8">
              <ArrowRight
                size={48}
                className={`mx-auto text-[#0fb0f0] transition-all duration-1000 ${
                  animatingVM ? 'scale-110 text-green-500' : ''
                }`}
              />

              {animatingVM && (
                <div className="absolute top-1/2 transform -translate-y-1/2 w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center animate-slide-right">
                  <span className="text-white text-xs font-bold">VM</span>
                </div>
              )}

              <div className="text-center mt-2">
                <span
                  className={`text-sm font-medium transition-colors duration-300 ${
                    animatingVM ? 'text-green-600' : 'text-gray-600'
                  }`}
                >
                  {animatingVM ? 'Migration en cours...' : 'vMotion'}
                </span>
              </div>
            </div>

            {/* Destination Server */}
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-[#0c5a7c] to-[#0fb0f0] rounded-xl flex items-center justify-center mb-4 relative">
                <div className="text-white font-bold">Serveur B</div>
                {animatingVM && (
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center animate-pulse delay-2000">
                    <span className="text-white text-xs font-bold">VM</span>
                  </div>
                )}
              </div>
              <p className="text-sm text-gray-600">Destination</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <button
              onClick={startVMotionAnimation}
              disabled={animatingVM}
              className="bg-gradient-to-r from-[#0fb0f0] to-[#0c5a7c] text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50"
            >
              {animatingVM ? 'Migration en cours...' : 'Démarrer la migration'}
            </button>
          </div>
        </div>

        {/* Techniques Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techniques.map((technique) => {
            const Icon = technique.icon;
            return (
              <div
                key={technique.name}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:border-[#0fb0f0]/20"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${technique.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={32} className="text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {technique.name}
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                  {technique.description}
                </p>

                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-700">{technique.detail}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-right {
          0% {
            left: 0;
          }
          100% {
            left: calc(100% - 2rem);
          }
        }
        .animate-slide-right {
          animation: slide-right 2s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default KeyFeatures;
