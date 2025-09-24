import React from 'react';
import { Server, Mail, MapPin, Calendar } from 'lucide-react';

const Footer: React.FC = () => {
  const teamMembers = [
    "Rania Ben Ali",
    "Farah Boukesra", 
    "Rana Bchiri",
    "Hiba Ben Soltan",
    "Abdelkader Belhaj",
    "Abdelrazek Chamekh"
  ];

  return (
    <footer className="bg-gradient-to-r from-[#0c5a7c] to-[#0fb0f0] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Project Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mr-3">
                <Server size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg">VMware ESXi</h3>
                <p className="text-sm opacity-80">Présentation Technique</p>
              </div>
            </div>
            
            <p className="text-sm opacity-90 leading-relaxed mb-4">
              Étude complète de l'hyperviseur bare-metal VMware ESXi, 
              ses fonctionnalités avancées et son positionnement sur le marché 
              de la virtualisation d'entreprise.
            </p>

            <div className="flex items-center text-sm opacity-80">
              <Calendar size={16} className="mr-2" />
              <span>Année académique 2025-2026</span>
            </div>
          </div>

          {/* Team */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Équipe de Projet</h4>
            <div className="space-y-2">
              {teamMembers.map((member, index) => (
                <div key={member} className="flex items-center text-sm opacity-90">
                  <div className="w-2 h-2 bg-white/40 rounded-full mr-3"></div>
                  <span>{member}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Institution */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Institution</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <div className="font-medium">ESPRIT</div>
                  <div className="opacity-80">École Supérieure Privée d'Ingénierie et de Technologies</div>
                  <div className="opacity-80">Tunis, Tunisie</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <Mail size={16} className="mr-2" />
                <div className="text-sm opacity-80">
                  4ème année ArcTic 13
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-xs opacity-70">
                © 2025 - Présentation  VMware ESXi
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;