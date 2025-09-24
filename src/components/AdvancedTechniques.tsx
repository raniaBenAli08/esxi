import React from 'react';
import { Cpu, HardDrive, Shield, Network, Code2 } from 'lucide-react';

const AdvancedTechniques: React.FC = () => {
  const sections = [
    {
      title: 'Bare-metal Hypervisor',
      icon: Cpu,
      items: [
        'Installation directe sur le matériel serveur',
        'Gestion native des ressources CPU, mémoire, stockage',
        'Performance maximale, overhead minimal',
      ],
    },
    {
      title: 'VMkernel',
      icon: Shield,
      items: [
        'Micro-noyau spécialisé pour la virtualisation',
        'Ordonnancement efficace des machines virtuelles',
        'Isolation et sécurité renforcée',
      ],
    },
    {
      title: 'VMFS (Virtual Machine File System)',
      icon: HardDrive,
      items: [
        'Système de fichiers clusterisé haute performance',
        'Accès concurrentiel aux baies de stockage partagé',
        'Support des snapshots et clonage rapide',
      ],
    },
    {
      title: 'vSphere APIs',
      icon: Code2,
      items: [
        "Interfaces de gestion et d'automation complètes",
        'Intégration avec outils tiers et scripts personnalisés',
        "API REST moderne pour l'orchestration",
      ],
    },
    {
      title: 'Device Drivers',
      icon: Network,
      items: [
        'Pilotes matériels optimisés et certifiés',
        'Support des technologies hardware récentes',
        'Compatibilité étendue avec les serveurs enterprise',
      ],
    },
  ];

  return (
    <section id="architecture" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Cpu size={32} className="text-[#0fb0f0] mr-3" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Architecture Technique VMware ESXi
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Les fondations techniques qui assurent performance, sécurité et
            fiabilité
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <div
                key={section.title}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#0fb0f0] to-[#0c5a7c] rounded-xl flex items-center justify-center mr-4">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {section.title}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-[#0fb0f0] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AdvancedTechniques;
