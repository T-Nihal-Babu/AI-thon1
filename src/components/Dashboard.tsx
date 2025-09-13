import React, { useState } from 'react';
import { ArrowLeft, TrendingUp, TrendingDown, DollarSign, CreditCard, Target, Zap } from 'lucide-react';

interface DashboardProps {
  onBack: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: TrendingUp },
    { id: 'budgets', label: 'Budgets', icon: Target },
    { id: 'subscriptions', label: 'Subscriptions', icon: CreditCard },
    { id: 'hustle', label: 'Side Hustle', icon: Zap }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Header */}
      <header className="relative z-20 p-6 bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={onBack}
              className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-colors duration-300"
            >
              <ArrowLeft size={20} />
            </button>
            <h1 className="text-2xl font-bold">
              <span className="text-cyan-400">Aura</span> Command Center
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div className="text-2xl font-bold text-green-400">$2,847.32</div>
              <div className="text-sm text-gray-400">Available Balance</div>
            </div>
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
              <span className="text-sm font-bold">JD</span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex space-x-1 bg-black/30 rounded-2xl p-2 backdrop-blur-sm">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg'
                    : 'hover:bg-white/5'
                }`}
              >
                <tab.icon size={18} />
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Dashboard Content */}
      <main className="p-6">
        <div className="max-w-7xl mx-auto">
          {activeTab === 'overview' && <OverviewTab />}
          {activeTab === 'budgets' && <BudgetsTab />}
          {activeTab === 'subscriptions' && <SubscriptionsTab />}
          {activeTab === 'hustle' && <SideHustleTab />}
        </div>
      </main>
    </div>
  );
};

const OverviewTab: React.FC = () => (
  <div className="space-y-8">
    {/* Financial Health Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { title: 'Monthly Income', value: '$3,200', change: '+12%', color: 'green', icon: TrendingUp },
        { title: 'Total Expenses', value: '$2,156', change: '-3%', color: 'blue', icon: DollarSign },
        { title: 'Savings Rate', value: '32.6%', change: '+8%', color: 'cyan', icon: Target },
        { title: 'Emergency Fund', value: '$1,250', change: '+15%', color: 'purple', icon: TrendingUp }
      ].map((stat, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-2xl p-6"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <div className="flex items-start justify-between mb-4">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${stat.color}-400 to-${stat.color}-600 flex items-center justify-center`}>
              <stat.icon size={24} className="text-white" />
            </div>
            <span className="text-green-400 text-sm font-medium">{stat.change}</span>
          </div>
          <h3 className="text-gray-400 text-sm mb-2">{stat.title}</h3>
          <p className="text-2xl font-bold text-white">{stat.value}</p>
        </div>
      ))}
    </div>

    {/* Cash Flow Visualization */}
    <div
      className="rounded-3xl p-8"
      style={{
        background: 'rgba(0, 255, 255, 0.1)',
        backdropFilter: 'blur(20px)',
        border: '2px solid rgba(0, 255, 255, 0.3)'
      }}
    >
      <h2 className="text-2xl font-bold text-white mb-6">Predictive Cash Flow River</h2>
      <div className="relative h-64 overflow-hidden rounded-2xl bg-gradient-to-r from-gray-900 to-black">
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00FF9D" stopOpacity="0.8" />
              <stop offset="30%" stopColor="#FFD166" stopOpacity="0.6" />
              <stop offset="60%" stopColor="#00FFFF" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#00FF9D" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <path
            d="M0,150 Q100,120 200,140 T400,130 T600,120 T800,110 T1000,100"
            fill="none"
            stroke="url(#flowGradient)"
            strokeWidth="8"
            className="animate-pulse"
          />
          <path
            d="M0,150 Q100,120 200,140 T400,130 T600,120 T800,110 T1000,100 L1000,250 L0,250 Z"
            fill="url(#flowGradient)"
            opacity="0.3"
          />
        </svg>
        <div className="absolute top-4 left-4 text-white">
          <div className="text-sm opacity-80">Next 6 Months</div>
          <div className="text-lg font-bold">Healthy Flow Predicted</div>
        </div>
      </div>
    </div>
  </div>
);

const BudgetsTab: React.FC = () => (
  <div className="space-y-8">
    <h2 className="text-3xl font-bold text-white">Smart Budget Control</h2>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {[
        { category: 'Food & Dining', spent: 420, budget: 600, color: '#00FF9D' },
        { category: 'Transportation', spent: 180, budget: 250, color: '#FFD166' },
        { category: 'Entertainment', spent: 280, budget: 300, color: '#FF6B6B' },
        { category: 'Shopping', spent: 350, budget: 400, color: '#00FFFF' }
      ].map((budget, index) => {
        const percentage = (budget.spent / budget.budget) * 100;
        return (
          <div
            key={index}
            className="relative overflow-hidden rounded-2xl p-6"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-white">{budget.category}</h3>
              <span className="text-gray-400">{percentage.toFixed(0)}%</span>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">Spent: ${budget.spent}</span>
                <span className="text-gray-400">Budget: ${budget.budget}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div
                  className="h-3 rounded-full transition-all duration-1000"
                  style={{
                    width: `${Math.min(percentage, 100)}%`,
                    backgroundColor: budget.color,
                    boxShadow: `0 0 20px ${budget.color}50`
                  }}
                />
              </div>
            </div>
            
            <div className="text-right">
              <span className="text-2xl font-bold" style={{ color: budget.color }}>
                ${budget.budget - budget.spent}
              </span>
              <div className="text-sm text-gray-400">Remaining</div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

const SubscriptionsTab: React.FC = () => (
  <div className="space-y-8">
    <h2 className="text-3xl font-bold text-white">Subscription Drain Analysis</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { name: 'Netflix', cost: 15.99, impact: 'Low', color: '#FF6B6B' },
        { name: 'Spotify Premium', cost: 9.99, impact: 'Low', color: '#00FF9D' },
        { name: 'Adobe Creative Cloud', cost: 52.99, impact: 'High', color: '#FFD166' },
        { name: 'Amazon Prime', cost: 12.99, impact: 'Medium', color: '#00FFFF' },
        { name: 'Gym Membership', cost: 35.00, impact: 'Medium', color: '#FF6B6B' },
        { name: 'Microsoft 365', cost: 9.99, impact: 'Low', color: '#00FF9D' }
      ].map((subscription, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-2xl p-6 group hover:scale-105 transition-transform duration-300"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white">{subscription.name}</h3>
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: subscription.color }}
            />
          </div>
          
          <div className="text-2xl font-bold text-white mb-2">
            ${subscription.cost}/mo
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">Impact: {subscription.impact}</span>
            <button className="text-red-400 hover:text-red-300 text-sm font-medium">
              Cancel
            </button>
          </div>
          
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent opacity-50" />
        </div>
      ))}
    </div>
  </div>
);

const SideHustleTab: React.FC = () => (
  <div className="space-y-8">
    <h2 className="text-3xl font-bold text-white">Side Hustle Optimizer</h2>
    
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {[
        { 
          title: 'Food Delivery', 
          hourly: 18, 
          hours: 15, 
          potential: 270,
          color: '#00FF9D',
          demand: 'High'
        },
        { 
          title: 'Tutoring', 
          hourly: 25, 
          hours: 8, 
          potential: 200,
          color: '#00FFFF',
          demand: 'Medium'
        },
        { 
          title: 'Freelance Design', 
          hourly: 35, 
          hours: 10, 
          potential: 350,
          color: '#FFD166',
          demand: 'High'
        }
      ].map((hustle, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-2xl p-6"
          style={{
            background: `linear-gradient(135deg, ${hustle.color}10 0%, rgba(255,255,255,0.05) 100%)`,
            backdropFilter: 'blur(20px)',
            border: `1px solid ${hustle.color}30`
          }}
        >
          <h3 className="text-xl font-bold text-white mb-4">{hustle.title}</h3>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Hourly Rate</span>
              <span className="text-white font-bold">${hustle.hourly}/hr</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Weekly Hours</span>
              <span className="text-white font-bold">{hustle.hours}h</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Demand</span>
              <span 
                className="font-bold"
                style={{ color: hustle.color }}
              >
                {hustle.demand}
              </span>
            </div>
            
            <div className="border-t border-gray-700 pt-4">
              <div className="flex justify-between items-center">
                <span className="text-lg text-gray-400">Weekly Potential</span>
                <span 
                  className="text-2xl font-bold"
                  style={{ color: hustle.color }}
                >
                  ${hustle.potential}
                </span>
              </div>
            </div>
          </div>
          
          <button 
            className="w-full mt-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
            style={{
              background: `linear-gradient(135deg, ${hustle.color} 0%, ${hustle.color}80 100%)`,
              color: '#000'
            }}
          >
            Start Earning
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default Dashboard;