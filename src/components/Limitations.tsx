import React from 'react';
import { AlertTriangle, DollarSign, BookOpen, Server } from 'lucide-react';

const Limitations: React.FC = () => {
  const technicalLimitations = [
    { metric: "VMs par hôte", limit: "1,024", icon: Server },
    { metric: "Hôtes par cluster", limit: "64", icon: Server },
    { metric: "RAM par VM", limit: "24 TB", icon: Server },
    { metric: "vCPUs par VM", limit: "768", icon: Server }
  ];

  const challenges = [
    {
      title: "Coûts Élevés",
      description: "Licences VMware peuvent représenter un investissement important",
      icon: DollarSign,
      color: "from-red-500 to-red-600",
      details: [
        "Licence par socket CPU",
        "Coûts de support annuels",
        "Formation équipes"
      ]
    },
    {
      title: "Complexité",
      description: "Courbe d'apprentissage élevée pour les fonctionnalités avancées",
      icon: BookOpen,
      color: "from-yellow-500 to-yellow-600",
      details: [
        "Administration avancée",
        "Troubleshooting réseau",
        "Optimisation performance"
      ]
    },
    {
      title: "Contraintes Matérielles",
      description: "Nécessite du matériel certifié pour un support complet",
      icon: AlertTriangle,
      color: "from-orange-500 to-orange-600",
      details: [
        "HCL (Hardware Compatibility List)",
        "Drivers certifiés requis",
        "Mise à jour firmware"
      ]
    }
  ];

  return (
    <section
      id="limit"
      className="py-20 bg-gradient-to-br from-gray-50 to-red-50 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <AlertTriangle size={32} className="text-red-500 mr-3" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Limitations & Défis
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprendre les contraintes pour une implémentation réussie
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Limitations */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Server size={24} className="text-[#0fb0f0] mr-3" />
              Limites Techniques
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {technicalLimitations.map((limit, index) => {
                const Icon = limit.icon;
                return (
                  <div
                    key={limit.metric}
                    className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-4 border border-gray-100"
                  >
                    <Icon size={20} className="text-[#0c5a7c] mb-2" />
                    <div className="text-sm text-gray-600 mb-1">
                      {limit.metric}
                    </div>
                    <div className="text-xl font-bold text-[#0fb0f0]">
                      {limit.limit}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start">
                <AlertTriangle
                  size={20}
                  className="text-yellow-600 mr-2 mt-1 flex-shrink-0"
                />
                <div>
                  <p className="text-sm text-yellow-800 font-medium">
                    Note importante
                  </p>
                  <p className="text-xs text-yellow-700 mt-1">
                    Ces limites évoluent avec chaque version et dépendent de la
                    licence souscrite.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Challenges */}
          <div className="space-y-6">
            {challenges.map((challenge, index) => {
              const Icon = challenge.icon;
              return (
                <div
                  key={challenge.title}
                  className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${challenge.color} rounded-xl flex items-center justify-center mr-4 flex-shrink-0`}
                    >
                      <Icon size={24} className="text-white" />
                    </div>

                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        {challenge.title}
                      </h4>
                      <p className="text-gray-600 mb-4">
                        {challenge.description}
                      </p>

                      <div className="space-y-2">
                        {challenge.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center">
                            <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                            <span className="text-sm text-gray-700">
                              {detail}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Cost Breakdown */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Exemple de Coûts (indicatifs)
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign size={32} className="text-red-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                vSphere Standard
              </h4>
              <p className="text-2xl font-bold text-red-600">~1,000€</p>
              <p className="text-sm text-gray-600">par socket CPU</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign size={32} className="text-yellow-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                vSphere Enterprise
              </h4>
              <p className="text-2xl font-bold text-yellow-600">~4,000€</p>
              <p className="text-sm text-gray-600">par socket CPU</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen size={32} className="text-orange-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Support & Formation
              </h4>
              <p className="text-2xl font-bold text-orange-600">20-25%</p>
              <p className="text-sm text-gray-600">du coût licence/an</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Limitations;