import React, { useRef, useEffect, useState } from 'react';
import { TrendingUp, Zap, DollarSign, Activity } from 'lucide-react';

const Features: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Activity,
      title: 'Predictive Cash Flow',
      description: 'See your financial future as a flowing river of light. Wide streams = healthy finances, narrow turbulence = upcoming challenges.',
      color: '#00FF9D',
      gradient: 'from-green-400 to-emerald-600'
    },
    {
      icon: Zap,
      title: 'Subscription Drains',
      description: 'Visualize where your money disappears with interactive drain plugs. Each subscription shows its true impact on your financial bathtub.',
      color: '#FFD166',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      icon: TrendingUp,
      title: 'Side Hustle Planner',
      description: 'Watch potential earnings grow like crystalline structures. Compare gig opportunities with real-time local data and hourly projections.',
      color: '#FF6B6B',
      gradient: 'from-red-400 to-pink-600'
    },
    {
      icon: DollarSign,
      title: 'Smart Budgeting AI',
      description: 'Your personal financial advisor that learns your patterns and suggests optimizations in real-time with beautiful visual feedback.',
      color: '#00FFFF',
      gradient: 'from-cyan-400 to-blue-600'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden"
    >
      {/* Flowing Particles Background */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `flowDown ${5 + Math.random() * 5}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Financial Intelligence
            </span>{' '}
            <br />
            Beyond Numbers
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Transform complex financial data into intuitive visual experiences that guide your decisions and accelerate your growth.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-700 transform hover:scale-105 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ 
                transitionDelay: `${index * 150}ms`,
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              {/* Glassmorphic Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
              
              {/* Hover Glow Effect */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at center, ${feature.color}20 0%, transparent 70%)`
                }}
              />

              <div className="relative p-8">
                {/* Icon */}
                <div className="mb-6">
                  <div 
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-2xl`}
                    style={{
                      boxShadow: `0 20px 40px ${feature.color}40`
                    }}
                  >
                    <feature.icon size={28} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Interactive Element */}
                <div className="mt-6">
                  <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${feature.gradient} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left`}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Data Visualization Showcase */}
        <div className="mt-20 text-center">
          <div className="relative max-w-4xl mx-auto">
            <div 
              className="rounded-3xl p-12"
              style={{
                background: 'rgba(0, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                border: '2px solid rgba(0, 255, 255, 0.3)'
              }}
            >
              <h3 className="text-3xl font-bold text-white mb-8">
                Your Financial Command Center
              </h3>
              
              {/* Mock Dashboard Preview */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-xl p-6 border border-green-500/30">
                  <div className="text-green-400 text-2xl font-bold mb-2">$2,847</div>
                  <div className="text-gray-300 text-sm">Monthly Savings</div>
                  <div className="w-full bg-gray-700 rounded-full h-2 mt-3">
                    <div className="bg-green-400 h-2 rounded-full w-3/4"></div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-xl p-6 border border-yellow-500/30">
                  <div className="text-yellow-400 text-2xl font-bold mb-2">73%</div>
                  <div className="text-gray-300 text-sm">Budget Used</div>
                  <div className="w-full bg-gray-700 rounded-full h-2 mt-3">
                    <div className="bg-yellow-400 h-2 rounded-full w-3/4"></div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl p-6 border border-cyan-500/30">
                  <div className="text-cyan-400 text-2xl font-bold mb-2">+$485</div>
                  <div className="text-gray-300 text-sm">Side Hustle</div>
                  <div className="w-full bg-gray-700 rounded-full h-2 mt-3">
                    <div className="bg-cyan-400 h-2 rounded-full w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes flowDown {
          0% {
            transform: translateY(-100vh) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) translateX(100px);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Features;