import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onAuraClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onAuraClick }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [financialHealth, setFinancialHealth] = useState(85); // 0-100 scale

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const getAuraColor = () => {
    if (financialHealth >= 70) return '#00FF9D'; // Vibrant Green
    if (financialHealth >= 40) return '#FFD166'; // Electric Yellow
    return '#FF6B6B'; // Hot Coral
  };

  const getAuraSize = () => {
    if (financialHealth >= 70) return 'scale-110';
    if (financialHealth >= 40) return 'scale-100';
    return 'scale-90';
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden flex items-center justify-center">
      {/* Background Particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Financial Aura Visualization */}
        <div className="relative mb-12">
          <div
            className={`relative mx-auto w-80 h-80 ${getAuraSize()} transition-all duration-1000 cursor-pointer group`}
            onClick={onAuraClick}
            style={{
              transform: `translate(${mousePosition.x * 20 - 10}px, ${mousePosition.y * 20 - 10}px)`
            }}
          >
            {/* Main Aura Orb */}
            <div 
              className="absolute inset-0 rounded-full animate-pulse"
              style={{
                background: `radial-gradient(circle, ${getAuraColor()}40 0%, ${getAuraColor()}20 40%, transparent 70%)`,
                filter: 'blur(20px)'
              }}
            />
            <div 
              className="absolute inset-4 rounded-full animate-spin"
              style={{
                background: `conic-gradient(from 0deg, ${getAuraColor()}, transparent, ${getAuraColor()})`,
                filter: 'blur(10px)'
              }}
            />
            <div 
              className="absolute inset-8 rounded-full flex items-center justify-center text-white font-bold text-xl"
              style={{
                background: `radial-gradient(circle, ${getAuraColor()}60 0%, ${getAuraColor()}30 70%, transparent)`,
                backdropFilter: 'blur(10px)'
              }}
            >
              <div className="text-center">
                <div className="text-3xl mb-2">${(financialHealth * 15).toFixed(0)}</div>
                <div className="text-sm opacity-80">Available</div>
              </div>
            </div>
            
            {/* Floating Particles */}
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 rounded-full opacity-80"
                style={{
                  backgroundColor: getAuraColor(),
                  left: `${50 + Math.cos(i * 30 * Math.PI / 180) * 40}%`,
                  top: `${50 + Math.sin(i * 30 * Math.PI / 180) * 40}%`,
                  animation: `orbit ${8 + i}s linear infinite`,
                  filter: 'blur(1px)'
                }}
              />
            ))}
          </div>
        </div>

        {/* Hero Text */}
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Command
          </span>{' '}
          <br />
          Your Cash Flow
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          <span className="text-cyan-400 font-semibold">Aura:</span> Stop Tracking. Start Understanding Your Money.
        </p>

        <div className="text-sm text-gray-400 mb-12">
          Financial Health Score: {financialHealth}/100
        </div>

        {/* CTA Button */}
        <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105">
          <span className="relative z-10">Enter Your Financial Command Center</span>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg" />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cyan-400 animate-bounce">
        <ChevronDown size={32} />
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(150px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(150px) rotate(-360deg); }
        }
      `}</style>
    </section>
  );
};

export default Hero;