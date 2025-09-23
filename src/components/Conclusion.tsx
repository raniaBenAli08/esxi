import React from 'react';
import { CheckCircle, AlertCircle, Target, Cloud, TrendingUp } from 'lucide-react';

const Conclusion: React.FC = () => {
  const pros = [
    {
      title: "Maturité & Fiabilité",
      description: "Plus de 20 ans d'expérience dans la virtualisation enterprise",
      icon: CheckCircle
    },
    {
      title: "Performance Optimale",
      description: "Hyperviseur bare-metal avec accès direct au hardware",
      icon: TrendingUp
    },
    {
      title: "Écosystème Complet",
      description: "Suite complète d'outils pour la gestion et l'automation",
      icon: Target
    },
    {
      title: "Innovation Continue",
      description: "Support Kubernetes, IA, et technologies émergentes",
      icon: Cloud
    }
  ];

  const cons = [
    {
      title: "Coût Élevé",
      description: "Licences et support représentent un investissement important",
      impact: "high"
    },
    {
      title: "Complexité",
      description: "Courbe d'apprentissage élevée pour les fonctionnalités avancées",
      impact: "medium"
    },
    {
      title: "Dépendance Vendor",
      description: "Lock-in technologique avec l'écosystème VMware",
      impact: "medium"
    }
  ];

  const useCases = [
    {
      scenario: "Datacenter Enterprise",
      description: "Environnements critiques avec besoins haute disponibilité",
      fit: "excellent",
      reason: "Fonctionnalités avancées, support 24/7, écosystème mature"
    },
    {
      scenario: "Cloud Hybride",
      description: "Intégration on-premise et cloud public",
      fit: "excellent",
      reason: "VMware Cloud sur AWS, Azure, Google Cloud"
    },
    {
      scenario: "PME Budget Limité",
      description: "Petites structures avec contraintes financières",
      fit: "limited",
      reason: "Coût élevé peut ne pas être justifié vs alternatives"
    },
    {
      scenario: "DevOps & Containers",
      description: "Environnements de développement modernes",
      fit: "good",
      reason: "Support Kubernetes natif avec Tanzu"
    }
  ];

  const getFitColor = (fit: string) => {
    switch (fit) {
      case 'excellent': return 'bg-green-100 text-green-800 border-green-300';
      case 'good': return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'limited': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getFitIcon = (fit: string) => {
    switch (fit) {
      case 'excellent': return <CheckCircle size={16} className="text-green-600" />;
      case 'good': return <CheckCircle size={16} className="text-blue-600" />;
      case 'limited': return <AlertCircle size={16} className="text-yellow-600" />;
      default: return <AlertCircle size={16} className="text-gray-600" />;
    }
  };

  return (
    <section
      id="conclusion"
      className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-[#0c5a7c] text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Conclusion & Recommandations
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            VMware ESXi reste la référence pour la virtualisation d'entreprise
          </p>
        </div>

        {/* Pros and Cons */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Advantages */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <CheckCircle size={24} className="text-green-400 mr-3" />
              Avantages Clés
            </h3>

            <div className="space-y-6">
              {pros.map((pro, index) => {
                const Icon = pro.icon;
                return (
                  <div key={pro.title} className="flex items-start">
                    <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <Icon size={20} className="text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">
                        {pro.title}
                      </h4>
                      <p className="text-sm opacity-80">{pro.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Challenges */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <AlertCircle size={24} className="text-yellow-400 mr-3" />
              Points d'Attention
            </h3>

            <div className="space-y-6">
              {cons.map((con, index) => (
                <div key={con.title} className="flex items-start">
                  <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <AlertCircle size={20} className="text-yellow-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-lg">{con.title}</h4>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          con.impact === 'high'
                            ? 'bg-red-500/20 text-red-300'
                            : 'bg-yellow-500/20 text-yellow-300'
                        }`}
                      >
                        {con.impact === 'high'
                          ? 'Impact élevé'
                          : 'Impact moyen'}
                      </span>
                    </div>
                    <p className="text-sm opacity-80">{con.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            Cas d'Usage Recommandés
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <div
                key={useCase.scenario}
                className="bg-white/10 rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-lg">{useCase.scenario}</h4>
                  <span
                    className={`px-3 py-1 rounded-full text-sm border flex items-center space-x-2 ${getFitColor(
                      useCase.fit
                    )}`}
                  >
                    {getFitIcon(useCase.fit)}
                    <span className="capitalize">{useCase.fit}</span>
                  </span>
                </div>

                <p className="text-sm opacity-80 mb-4">{useCase.description}</p>

                <div className="bg-white/10 rounded-lg p-3">
                  <p className="text-xs opacity-90">
                    <span className="font-semibold">Raison: </span>
                    {useCase.reason}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final Recommendation
            <div className="bg-gradient-to-r from-[#0fb0f0] to-[#0c5a7c] rounded-2xl p-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">Recommandation Finale</h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/20 rounded-xl p-6">
                <Cloud size={32} className="mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Environnements Critiques</h4>
                <p className="text-sm opacity-90">
                  VMware ESXi est le choix de référence pour les infrastructures critiques nécessitant haute disponibilité et performance.
                </p>
              </div>
              
              <div className="bg-white/20 rounded-xl p-6">
                <TrendingUp size={32} className="mx-auto mb-4" />
                <h4 className="font-semibold mb-2">ROI à Long Terme</h4>
                <p className="text-sm opacity-90">
                  Malgré le coût initial élevé, l'investissement est rentabilisé par la réduction des coûts opérationnels.
                </p>
              </div>
              
              <div className="bg-white/20 rounded-xl p-6">
                <Target size={32} className="mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Innovation Continue</h4>
                <p className="text-sm opacity-90">
                  VMware reste à la pointe de l'innovation avec le support des technologies émergentes.
                </p>
              </div>
            </div>
            
            <div className="bg-white/10 rounded-xl p-6">
              <p className="text-lg font-semibold">
                "VMware ESXi est recommandé pour les organisations cherchant une solution de virtualisation 
                enterprise robuste, évolutive et supportée par un écosystème mature."
              </p>
            </div>
          </div>
        </div>
        */}
      </div>
    </section>
  );
};

export default Conclusion;