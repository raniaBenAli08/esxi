import React from 'react';

const Introduction: React.FC = () => (
  <section id="intro" className="py-20 bg-white scroll-mt-20">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h1 className="text-3xl sm:text-4xl font-bold text-[#0fb0f0] mb-4">
        ESXi : Virtual Worlds, One Host.
      </h1>
      <p className="text-xl text-gray-700 mb-2">
        La virtualisation optimise les ressources informatiques.
      </p>
      <p className="text-lg text-gray-600">
        VMware ESXi, hyperviseur de type bare-metal, permet à plusieurs machines
        virtuelles de tourner sur un seul serveur physique, réduisant les coûts
        et simplifiant la gestion.
      </p>
    </div>
  </section>
);

export default Introduction;
