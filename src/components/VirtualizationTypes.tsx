import React from 'react';
import { Cpu, Zap, Settings } from 'lucide-react';

const VirtualizationTypes: React.FC = () => {
  const types = [
    {
      title: "Virtualisation Complète",
      description: "OS invité non modifié",
      icon: Cpu,
      color: "from-blue-500 to-blue-700",
      features: [
        "OS invité inchangé",
        "Performance quasi-native",
        "Compatibilité maximale",
        "Isolation complète"
      ],
      performance: 95
    },
    {
      title: "Paravirtualisation",
      description: "OS adapté pour l'hyperviseur",
      icon: Settings,
      color: "from-green-500 to-green-700",
      features: [
        "OS modifié",
        "E/S optimisées",
        "Moins de surcharge",
        "Meilleure performance"
      ],
      performance: 98
    },
    {
      title: "Assistée Matériel",
      description: "Support CPU natif",
      icon: Zap,
      color: "from-purple-500 to-purple-700",
      features: [
        "Intel VT-x / AMD-V",
        "Virtualisation hardware",
        "Performance optimale",
        "Sécurité renforcée"
      ],
      performance: 99
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Cpu size={32} className="text-[#0fb0f0] mr-3" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Types de Virtualisation
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Différentes approches pour optimiser les performances et la compatibilité
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {types.map((type, index) => {
            const Icon = type.icon;
            return (
              <div
                key={type.title}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${type.color} p-6 text-white`}>
                  <Icon size={48} className="mb-4" />
                  <h3 className="text-xl font-bold mb-2">{type.title}</h3>
                  <p className="text-sm opacity-90">{type.description}</p>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Performance Bar */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Performance</span>
                      <span className="text-sm font-bold text-[#0fb0f0]">{type.performance}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-[#0fb0f0] to-[#0c5a7c] h-2 rounded-full transition-all duration-1000 delay-300"
                        style={{ width: `${type.performance}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    {type.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-[#0fb0f0] rounded-full mr-3"></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="h-1 bg-gradient-to-r from-[#0fb0f0] to-[#0c5a7c] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VirtualizationTypes;