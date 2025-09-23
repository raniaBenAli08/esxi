import React from 'react';
import { ChevronDown, Server, Cpu } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToNext = () => {
    document.querySelector('#history')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=1920")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c5a7c]/90 via-[#0fb0f0]/80 to-[#0c5a7c]/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 animate-fade-in-up">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center">
              <Server size={40} className="text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            VMware ESXi
            <span className="block text-3xl sm:text-4xl lg:text-5xl text-[#0fb0f0] mt-2">
              Hyperviseur Bare-Metal
            </span>
          </h1>
          
          <div className="flex items-center justify-center mb-8">
            <Cpu size={24} className="text-[#0fb0f0] mr-3" />
            <p className="text-xl sm:text-2xl text-white/90 font-light">
              Virtualisation d'Entreprise
            </p>
          </div>
        </div>

        {/* Team Info */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 mb-12">
          <h3 className="text-lg font-semibold text-white mb-4">Équipe de Projet</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm text-white/90">
            <div>Rania Ben Ali</div>
            <div>Farah Boukesra</div>
            <div>Rana Bchiri</div>
            <div>Hiba Ben Soltan</div>
            <div>Abdelkader Belhaj</div>
            <div>Abdelrazek Chamekh</div>
          </div>
          <div className="mt-4 text-[#0fb0f0] font-medium">
            ESPRIT Tunis – 4ème année ArcTic 13
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToNext}
          className="animate-bounce bg-white/10 backdrop-blur-md rounded-full p-3 hover:bg-white/20 transition-colors duration-300"
        >
          <ChevronDown size={24} className="text-white" />
        </button>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-[#0fb0f0] rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute top-40 right-16 w-6 h-6 bg-white/20 rounded-full opacity-40 animate-pulse delay-1000"></div>
      <div className="absolute bottom-32 left-20 w-3 h-3 bg-[#0fb0f0] rounded-full opacity-50 animate-pulse delay-2000"></div>
    </section>
  );
};

export default Hero;