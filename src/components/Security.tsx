import React, { useState } from 'react';
import { Shield, AlertTriangle, CheckCircle, Lock } from 'lucide-react';

const Security: React.FC = () => {
  const [completedChecks, setCompletedChecks] = useState<number[]>([]);

  const risks = [
    {
      name: 'Vulnérabilités du logiciel',
      description: 'Failles exploitables dans ESXi ou vCenter',
      severity: 'critical',
    },
    {
      name: 'Accès non autorisé',
      description: 'Intrusion via mots de passe faibles ou comptes par défaut',
      severity: 'high',
    },
    {
      name: 'Attaques réseau',
      description:
        'Exploitation de services non sécurisés ou trafic non chiffré',
      severity: 'high',
    },
  
  ];

  const bestPractices = [
    {
      id: 1,
      title: 'Mises à jour régulières',
      description: 'Patches sécurité ESXi et vCenter',
      priority: 'Critique',
    },
    {
      id: 2,
      title: 'Isolation réseau management',
      description: "Réseau dédié pour l'administration",
      priority: 'Élevée',
    },
    {
      id: 3,
      title: 'Authentification 2FA',
      description: 'Authentification multi-facteurs obligatoire',
      priority: 'Élevée',
    },
    {
      id: 4,
      title: 'Chiffrement VMs',
      description: 'Chiffrement au repos et en transit',
      priority: 'Moyenne',
    },
    {
      id: 5,
      title: 'Backup réguliers',
      description: 'Sauvegarde configuration et VMs',
      priority: 'Élevée',
    },
    {
      id: 6,
      title: 'Monitoring sécurité',
      description: 'Surveillance logs et événements',
      priority: 'Moyenne',
    },
  ];

  const securityFeatures = [
    {
      name: 'Secure Boot',
      description: 'Vérification intégrité au démarrage',
      enabled: true,
    },
    {
      name: 'TPM 2.0',
      description: 'Chiffrement hardware et attestation',
      enabled: true,
    },
    {
      name: 'Audit Logging',
      description: 'Traçabilité complète des actions',
      enabled: true,
    },
    {
      name: 'Certificate Management',
      description: 'Gestion centralisée des certificats',
      enabled: true,
    },
  ];

  const toggleCheck = (id: number) => {
    setCompletedChecks((prev) =>
      prev.includes(id)
        ? prev.filter((checkId) => checkId !== id)
        : [...prev, id]
    );
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'from-red-500 to-red-700';
      case 'high':
        return 'from-orange-500 to-orange-700';
      case 'medium':
        return 'from-yellow-500 to-yellow-700';
      default:
        return 'from-gray-500 to-gray-700';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Critique':
        return 'text-red-600 bg-red-50';
      case 'Élevée':
        return 'text-orange-600 bg-orange-50';
      case 'Moyenne':
        return 'text-yellow-600 bg-yellow-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <section id="security" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Shield size={32} className="text-[#0fb0f0] mr-3" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Sécurité ESXi
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Protection complète contre les menaces et bonnes pratiques de
            sécurité
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Security Risks */}
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <AlertTriangle size={24} className="text-red-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">
                Risques de Sécurité
              </h3>
            </div>

            <div className="space-y-4">
              {risks.map((risk, index) => (
                <div
                  key={risk.name}
                  className="bg-white rounded-xl p-4 border-l-4 border-red-500 shadow-sm"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">{risk.name}</h4>
                    <span
                      className={`text-xs px-2 py-1 rounded-full text-white bg-gradient-to-r ${getSeverityColor(
                        risk.severity
                      )}`}
                    >
                      {risk.severity.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    {risk.description}
                  </p>
                  <div className="bg-gray-50 rounded-lg p-2">
                    <span className="text-xs text-gray-700 font-medium">
                      Mitigation:{' '}
                    </span>
                    <span className="text-xs text-gray-600">
                      {risk.mitigation}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Security Features */}
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <Lock size={24} className="text-green-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">
                Mesures Intégrées
              </h3>
            </div>

            <div className="space-y-4">
              {securityFeatures.map((feature, index) => (
                <div
                  key={feature.name}
                  className="bg-white rounded-xl p-4 shadow-sm flex items-center justify-between"
                >
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {feature.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                  <div
                    className={`w-3 h-3 rounded-full ${
                      feature.enabled ? 'bg-green-500' : 'bg-gray-300'
                    }`}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Security  Checklist  */}
      </div>
    </section>
  );
};

export default Security;
