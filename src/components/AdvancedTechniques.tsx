import React from 'react';
import { Cpu, HardDrive, Shield, Network, Code2 } from 'lucide-react';

const AdvancedTechniques: React.FC = () => {
  const sections = [
    {
      title: 'Bare-metal Hypervisor',
      icon: Cpu,
      items: [],
    },
    {
      title: 'VMkernel',
      icon: Shield,
      items: [],
    },
    {
      title: 'VMFS (Virtual Machine File System)',
      icon: HardDrive,
      items: [],
    },
    {
      title: 'vSphere APIs',
      icon: Code2,
      items: [],
    },
    {
      title: 'Device Drivers',
      icon: Network,
      items: [],
    },
  ];

  return (
    <section
      id="techniques"
      className="py-24 bg-gradient-to-b from-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Cpu size={36} className="text-blue-500 mr-3" />
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              Techniques
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Les fondations techniques qui garantissent performance, sécurité et
            fiabilité
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <div
                key={section.title}
                className="relative bg-white rounded-2xl shadow-md p-8 border border-blue-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300"></div>
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center mr-4 shadow-sm">
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {section.title}
                  </h3>
                </div>

                <ul className="space-y-4">
                  {section.items.length > 0 ? (
                    section.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2.5 h-2.5 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))
                  ) : (
                    <li className="text-gray-500 italic"></li>
                  )}
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
