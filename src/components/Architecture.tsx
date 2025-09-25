import React, { useState } from 'react';
import {
  Layers,
  HardDrive,
  Monitor,
  Shield,
  Settings,
  Database,
} from 'lucide-react';

const Architecture: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<number | null>(null);

  const layers = [
    {
      id: 5,
      title: 'Infrastructure Management',
      description: 'vCenter, API REST, monitoring',
      icon: Settings,
      color: 'from-indigo-400 to-indigo-600',
      details:
        'Permet le monitoring, la migration et la protection automatique des machines virtuelles',
    },
    {
      id: 4,
      title: 'VMFS (VMware File System)',
      description: 'Système de fichiers cluster',
      icon: Database,
      color: 'from-yellow-400 to-yellow-600',
      details:
        'Permet à plusieurs hôtes ESXi de partager le même stockage en cluster',
    },
    {
      id: 3,
      title: 'Machines Virtuelles (VMs)',
      description: 'Multiples OS sur même serveur physique',
      icon: Monitor,
      color: 'from-green-400 to-green-600',
      details:
        "Permettent l'exécution de plusieurs systèmes d'exploitation sur le même serveur physique",
    },
    {
      id: 2,
      title: 'Device Drivers',
      description: 'Pilotes matériels certifiés',
      icon: Shield,
      color: 'from-orange-400 to-orange-600',
      details:
        'Permettent au VMkernel de contrôler et utiliser correctement les périphériques physiques',
    },
    {
      id: 1,
      title: 'VMkernel (Noyau)',
      description: "Cœur de l'hyperviseur ESXi",
      icon: Layers,
      color: 'from-purple-400 to-purple-600',
      details: "Gère l'accès au CPU, mémoire, stockage et réseau pour les VMs",
    },
    {
      id: 0,
      title: 'Serveur Physique (Hardware)',
      description: 'CPU, RAM, stockage, réseau',
      icon: HardDrive,
      color: 'from-gray-500 to-gray-700',
      details:
        'Fournit toutes les ressources nécessaires pour exécuter les machines virtuelles',
    },
  ];

  return (
    // ...existing code...
    <section
      id="architecture"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center min-h-[80vh]"
    >
      <div className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Layers size={32} className="text-[#0fb0f0] mr-3" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Architecture VMware ESXi
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hyperviseur Type 1 (Bare-Metal) installé directement sur le serveur
            physique
          </p>
        </div>

        {/* Centré */}
        <div className="flex items-center justify-center w-full">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 w-full">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              Architecture en Couches
            </h3>
            <div className="space-y-3">
              {layers.map((layer) => {
                const Icon = layer.icon;
                return (
                  <div
                    key={layer.id}
                    className={`relative p-4 rounded-xl cursor-pointer transition-all duration-300 bg-gradient-to-r ${
                      layer.color
                    } ${
                      activeLayer === layer.id
                        ? 'scale-105 shadow-lg'
                        : 'shadow-md hover:shadow-lg hover:scale-102'
                    }`}
                    onClick={() =>
                      setActiveLayer(activeLayer === layer.id ? null : layer.id)
                    }
                  >
                    <div className="flex items-center text-white">
                      <Icon size={24} className="mr-3 flex-shrink-0" />
                      <div className="flex-1">
                        <h4 className="font-semibold">{layer.title}</h4>
                        <p className="text-sm opacity-90">
                          {layer.description}
                        </p>
                      </div>
                      <div
                        className={`w-3 h-3 rounded-full bg-white/30 transition-all duration-200 ${
                          activeLayer === layer.id ? 'scale-150' : ''
                        }`}
                      ></div>
                    </div>
                    {activeLayer === layer.id && (
                      <div className="mt-3 pt-3 border-t border-white/20 text-white text-sm">
                        {layer.details}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
    // ...existing code...
  );
};

export default Architecture;
