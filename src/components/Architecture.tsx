import React, { useState } from 'react';
import { Layers, HardDrive, Monitor, Shield } from 'lucide-react';

const Architecture: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<number | null>(null);

  const layers = [
    {
      id: 3,
      title: "Machines Virtuelles",
      description: "OS invités et applications isolées",
      icon: Monitor,
      color: "from-green-400 to-green-600",
      details: "Environnements complètement isolés exécutant des OS et applications"
    },
    {
      id: 2,
      title: "Services de Gestion",
      description: "Interfaces utilisateur et API",
      icon: Shield,
      color: "from-[#0fb0f0] to-[#0c5a7c]",
      details: "vCenter, API REST, interfaces web pour la gestion centralisée"
    },
    {
      id: 1,
      title: "VMkernel (Noyau)",
      description: "Cœur de l'hyperviseur ESXi",
      icon: Layers,
      color: "from-purple-400 to-purple-600",
      details: "Planificateur, gestionnaire mémoire, réseau et stockage"
    },
    {
      id: 0,
      title: "Matériel Serveur",
      description: "CPU, RAM, stockage, réseau",
      icon: HardDrive,
      color: "from-gray-500 to-gray-700",
      details: "Infrastructure physique avec support de virtualisation matérielle"
    }
  ];

  return (
    <section id="architecture" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Layers size={32} className="text-[#0fb0f0] mr-3" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Architecture Bare-Metal
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hyperviseur Type 1 installé directement sur le matériel pour des performances optimales
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Architecture Diagram */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                Architecture en Couches
              </h3>
              
              <div className="space-y-3">
                {layers.map((layer) => {
                  const Icon = layer.icon;
                  return (
                    <div
                      key={layer.id}
                      className={`relative p-4 rounded-xl cursor-pointer transition-all duration-300 bg-gradient-to-r ${layer.color} ${
                        activeLayer === layer.id 
                          ? 'scale-105 shadow-lg' 
                          : 'shadow-md hover:shadow-lg hover:scale-102'
                      }`}
                      onClick={() => setActiveLayer(activeLayer === layer.id ? null : layer.id)}
                    >
                      <div className="flex items-center text-white">
                        <Icon size={24} className="mr-3 flex-shrink-0" />
                        <div className="flex-1">
                          <h4 className="font-semibold">{layer.title}</h4>
                          <p className="text-sm opacity-90">{layer.description}</p>
                        </div>
                        <div className={`w-3 h-3 rounded-full bg-white/30 transition-all duration-200 ${
                          activeLayer === layer.id ? 'scale-150' : ''
                        }`}></div>
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

          {/* Key Benefits */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Avantages Clés
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#0fb0f0] rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Performance Native</h4>
                    <p className="text-gray-600">Accès direct au matériel sans couche OS intermédiaire</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#0c5a7c] rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Empreinte Réduite</h4>
                    <p className="text-gray-600">Seulement ~150 Mo, réduisant la surface d'attaque</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#0fb0f0] rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Stabilité Maximale</h4>
                    <p className="text-gray-600">Moins de composants = moins de points de défaillance</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#0c5a7c] rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Isolation Complète</h4>
                    <p className="text-gray-600">Séparation stricte entre VMs et hyperviseur</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Specs */}
            <div className="bg-gradient-to-r from-[#0fb0f0] to-[#0c5a7c] rounded-2xl shadow-xl p-6 text-white">
              <h4 className="font-semibold mb-3">Spécifications Techniques</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="opacity-80">Taille:</span>
                  <div className="font-semibold">~150 Mo</div>
                </div>
                <div>
                  <span className="opacity-80">Type:</span>
                  <div className="font-semibold">Bare-Metal</div>
                </div>
                <div>
                  <span className="opacity-80">Boot:</span>
                  <div className="font-semibold">UEFI/BIOS</div>
                </div>
                <div>
                  <span className="opacity-80">API:</span>
                  <div className="font-semibold">vSphere</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;