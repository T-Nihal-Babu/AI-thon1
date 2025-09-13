import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Dashboard from './components/Dashboard';

function App() {
  const [showDashboard, setShowDashboard] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAuraClick = () => {
    setShowDashboard(true);
  };

  const handleBackToHome = () => {
    setShowDashboard(false);
  };

  if (showDashboard) {
    return <Dashboard onBack={handleBackToHome} />;
  }

  return (
    <div className="relative overflow-x-hidden">
      {/* Particle Transition Layer */}
      <div 
        className="fixed inset-0 pointer-events-none z-10"
        style={{
          background: scrollY > 100 ? 'radial-gradient(circle at center, transparent 0%, rgba(0,255,255,0.1) 50%, transparent 100%)' : 'transparent',
          transition: 'all 1s ease-in-out'
        }}
      >
        {/* Transitional particles */}
        {scrollY > 50 && [...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.min(scrollY / 10 + Math.random() * 100, 100)}%`,
              animation: `particleFlow ${2 + Math.random() * 3}s ease-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <Hero onAuraClick={handleAuraClick} />
      <Features />

      {/* Global Styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', sans-serif;
          background: #0a0a0a;
          color: white;
          overflow-x: hidden;
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          line-height: 1.2;
        }

        p {
          line-height: 1.6;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #00FFFF, #0080FF);
          border-radius: 3px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #00FFFF, #0060FF);
        }

        @keyframes particleFlow {
          0% {
            transform: translateY(0) scale(0);
            opacity: 0;
          }
          50% {
            transform: translateY(50px) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateY(100px) scale(0);
            opacity: 0;
          }
        }

        /* Glassmorphism utilities */
        .glass {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .glass-strong {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(30px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        /* Animation utilities */
        .animate-glow {
          animation: glow 2s ease-in-out infinite alternate;
        }

        @keyframes glow {
          from {
            filter: brightness(1) saturate(1);
          }
          to {
            filter: brightness(1.2) saturate(1.3);
          }
        }
      `}</style>
    </div>
  );
}

export default App;