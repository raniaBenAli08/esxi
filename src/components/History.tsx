import React, { useState, useEffect } from 'react';
import { Calendar, Award } from 'lucide-react';

interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  highlight?: boolean;
}

const History: React.FC = () => {
  const [visibleEvents, setVisibleEvents] = useState<boolean[]>([]);

  const events: TimelineEvent[] = [
    {
      year: 1998,
      title: "Fondation VMware",
      description: "Création de l'entreprise avec une vision révolutionnaire de la virtualisation"
    },
    {
      year: 2001,
      title: "ESX (première version)",
      description: "Lancement du premier hyperviseur VMware ESX",
      highlight: true
    },
    {
      year: 2008,
      title: "ESXi → plus léger",
      description: "Introduction d'ESXi, version allégée sans OS hôte",
      highlight: true
    },
    {
      year: 2016,
      title: "vSphere 6.5",
      description: "Amélioration de la sécurité et support des conteneurs"
    },
    {
      year: 2020,
      title: "vSphere 7.0",
      description: "Intégration native de Kubernetes et modernisation",
      highlight: true
    },
    {
      year: 2022,
      title: "vSphere 8.0",
      description: "Intelligence artificielle et support des DPU (Data Processing Units)"
    }
  ];

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    
    events.forEach((_, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleEvents(prev => {
                const newVisible = [...prev];
                newVisible[index] = true;
                return newVisible;
              });
            }, index * 200);
          }
        },
        { threshold: 0.5 }
      );
      
      const element = document.getElementById(`timeline-${index}`);
      if (element) {
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => observers.forEach(observer => observer.disconnect());
  }, []);

  return (
    <section id="history" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Calendar size={32} className="text-[#0fb0f0] mr-3" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Histoire & Évolution
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Plus de 25 ans d'innovation dans la virtualisation d'entreprise
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#0fb0f0] to-[#0c5a7c]"></div>

          {/* Timeline Events */}
          <div className="space-y-12">
            {events.map((event, index) => (
              <div
                key={event.year}
                id={`timeline-${index}`}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white shadow-lg transition-all duration-500 ${
                  visibleEvents[index] 
                    ? event.highlight 
                      ? 'bg-[#0fb0f0] scale-110' 
                      : 'bg-[#0c5a7c]'
                    : 'bg-gray-300'
                }`}></div>

                {/* Event Card */}
                <div className={`w-5/12 ${
                  visibleEvents[index] 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                } transition-all duration-700 delay-200`}>
                  <div className={`bg-white rounded-xl shadow-lg p-6 border-l-4 ${
                    event.highlight ? 'border-[#0fb0f0]' : 'border-[#0c5a7c]'
                  } hover:shadow-xl transition-shadow duration-300`}>
                    <div className="flex items-center mb-3">
                      <span className={`text-2xl font-bold ${
                        event.highlight ? 'text-[#0fb0f0]' : 'text-[#0c5a7c]'
                      }`}>
                        {event.year}
                      </span>
                      {event.highlight && (
                        <Award size={20} className="text-[#0fb0f0] ml-2" />
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;