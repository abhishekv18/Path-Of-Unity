import React, { useState } from 'react';
import { Globe, Heart, Users, Lightbulb, Bird } from 'lucide-react';

const PrayerIntentions = ({ onCategoryChange, activePrayers }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredCategory, setHoveredCategory] = useState(null);

  // Mock prayer data for demonstration
  const mockPrayers = [
    {
      id: 1,
      category: 'world-peace',
      text: 'May all nations find harmony and understanding, letting go of conflicts that divide us.',
      country: 'India',
      timestamp: new Date('2024-12-01T10:30:00'),
      author: 'Priya'
    },
    {
      id: 2,
      category: 'compassion',
      text: 'Grant us the strength to show kindness to those who hurt us, and wisdom to heal wounded hearts.',
      country: 'Japan',
      timestamp: new Date('2024-12-01T15:45:00'),
      author: 'Kenji'
    },
    {
      id: 3,
      category: 'brotherhood',
      text: 'Help us see beyond our differences and recognize the sacred thread that connects all humanity.',
      country: 'Brazil',
      timestamp: new Date('2024-12-01T08:20:00'),
      author: 'Maria'
    },
    {
      id: 4,
      category: 'wisdom',
      text: 'Guide our leaders with clear vision and pure intentions for the wellbeing of all people.',
      country: 'Kenya',
      timestamp: new Date('2024-12-01T14:15:00'),
      author: 'Amara'
    },
    {
      id: 5,
      category: 'healing',
      text: 'Bring comfort to those suffering from illness and loss, and restore hope in their hearts.',
      country: 'Canada',
      timestamp: new Date('2024-12-01T11:00:00'),
      author: 'Sarah'
    },
    {
      id: 6,
      category: 'world-peace',
      text: 'Let the weapons of war be transformed into tools of peace, and may children grow up without fear.',
      country: 'Germany',
      timestamp: new Date('2024-12-01T16:30:00'),
      author: 'Hans'
    },
    {
      id: 7,
      category: 'compassion',
      text: 'Open our hearts to the suffering of strangers, that we may act with love instead of indifference.',
      country: 'Morocco',
      timestamp: new Date('2024-12-01T12:45:00'),
      author: 'Fatima'
    },
    {
      id: 8,
      category: 'brotherhood',
      text: 'Unite us across all boundaries of race, religion, and nationality in our shared humanity.',
      country: 'Australia',
      timestamp: new Date('2024-12-01T09:10:00'),
      author: 'James'
    },
    {
      id: 9,
      category: 'wisdom',
      text: 'Grant us discernment to choose love over fear, and courage to stand for what is right.',
      country: 'Mexico',
      timestamp: new Date('2024-12-01T13:25:00'),
      author: 'Carlos'
    },
    {
      id: 10,
      category: 'healing',
      text: 'Heal the divisions in our communities and restore trust between neighbors and friends.',
      country: 'South Korea',
      timestamp: new Date('2024-12-01T17:00:00'),
      author: 'Min-jun'
    },
    {
      id: 11,
      category: 'world-peace',
      text: 'May dialogue replace conflict, and may understanding bloom where hatred once grew.',
      country: 'Norway',
      timestamp: new Date('2024-12-01T07:40:00'),
      author: 'Erik'
    },
    {
      id: 12,
      category: 'healing',
      text: 'Bring healing to our planet Earth, that future generations may inherit a world of beauty.',
      country: 'New Zealand',
      timestamp: new Date('2024-12-01T18:20:00'),
      author: 'Aroha'
    }
  ];

  // Use provided prayers or fall back to mock data
  const prayers = activePrayers || mockPrayers;

  const categories = [
    {
      id: 'world-peace',
      name: 'World Peace & Unity',
      icon: Globe,
      emoji: '🌍',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-700',
      description: 'Prayers for global harmony and understanding'
    },
    {
      id: 'compassion',
      name: 'Compassion & Understanding',
      icon: Heart,
      emoji: '❤️',
      color: 'from-red-400 to-pink-500',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      textColor: 'text-red-700',
      description: 'Prayers for empathy and kindness'
    },
    {
      id: 'brotherhood',
      name: 'Brotherhood & Sisterhood',
      icon: Users,
      emoji: '🤝',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-700',
      description: 'Prayers for unity and togetherness'
    },
    {
      id: 'wisdom',
      name: 'Wisdom & Guidance',
      icon: Lightbulb,
      emoji: '💡',
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      textColor: 'text-yellow-700',
      description: 'Prayers for insight and direction'
    },
    {
      id: 'healing',
      name: 'Healing & Hope',
      icon: Bird,
      emoji: '🕊️',
      color: 'from-purple-500 to-violet-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      textColor: 'text-purple-700',
      description: 'Prayers for recovery and renewal'
    }
  ];

  // Count prayers by category
  const getCategoryCount = (categoryId) => {
    if (categoryId === 'all') return activePrayers.length;
    return activePrayers.filter(prayer => prayer.category === categoryId).length;
  };

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    onCategoryChange?.(categoryId);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
          Prayer Intentions
        </h2>
        <p className="text-gray-600 text-lg">
          Filter prayers by their sacred purpose and intention
        </p>
      </div>

      {/* All Categories Button */}
      <div className="mb-6">
        <button
          onClick={() => handleCategorySelect('all')}
          onMouseEnter={() => setHoveredCategory('all')}
          onMouseLeave={() => setHoveredCategory(null)}
          className={`
            w-full p-4 rounded-xl border-2 transition-all duration-300 transform
            ${selectedCategory === 'all' 
              ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-transparent shadow-lg scale-105' 
              : 'bg-white hover:bg-gray-50 border-gray-200 hover:border-indigo-300'
            }
            ${hoveredCategory === 'all' ? 'shadow-xl transform scale-105' : ''}
          `}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`
                p-2 rounded-lg transition-colors duration-300
                ${selectedCategory === 'all' ? 'bg-white/20' : 'bg-indigo-100'}
              `}>
                <Globe className={`w-6 h-6 ${selectedCategory === 'all' ? 'text-white' : 'text-indigo-600'}`} />
              </div>
              <div>
                <h3 className={`font-semibold text-lg ${selectedCategory === 'all' ? 'text-white' : 'text-gray-800'}`}>
                  All Prayers
                </h3>
                <p className={`text-sm ${selectedCategory === 'all' ? 'text-white/80' : 'text-gray-500'}`}>
                  View prayers from all intentions
                </p>
              </div>
            </div>
            <div className={`
              px-3 py-1 rounded-full text-sm font-medium
              ${selectedCategory === 'all' 
                ? 'bg-white/20 text-white' 
                : 'bg-indigo-100 text-indigo-700'
              }
            `}>
              {getCategoryCount('all')} prayers
            </div>
          </div>
        </button>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category) => {
          const Icon = category.icon;
          const isSelected = selectedCategory === category.id;
          const isHovered = hoveredCategory === category.id;
          const count = getCategoryCount(category.id);

          return (
            <button
              key={category.id}
              onClick={() => handleCategorySelect(category.id)}
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
              className={`
                relative p-6 rounded-xl border-2 transition-all duration-300 transform text-left
                ${isSelected 
                  ? `bg-gradient-to-br ${category.color} text-white border-transparent shadow-lg scale-105` 
                  : `${category.bgColor} hover:shadow-lg ${category.borderColor} hover:${category.borderColor.replace('200', '300')}`
                }
                ${isHovered && !isSelected ? 'transform scale-105 shadow-xl' : ''}
              `}
            >
              {/* Background Pattern */}
              <div className={`
                absolute inset-0 opacity-10 rounded-xl
                ${isSelected ? 'bg-white' : 'bg-gradient-to-br ' + category.color}
              `} />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon and Emoji */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`
                    p-3 rounded-lg transition-colors duration-300
                    ${isSelected ? 'bg-white/20' : 'bg-white'}
                  `}>
                    <Icon className={`w-6 h-6 ${isSelected ? 'text-white' : category.textColor}`} />
                  </div>
                  <span className="text-2xl">{category.emoji}</span>
                </div>

                {/* Title and Description */}
                <h3 className={`font-semibold text-lg mb-2 ${isSelected ? 'text-white' : 'text-gray-800'}`}>
                  {category.name}
                </h3>
                <p className={`text-sm mb-4 ${isSelected ? 'text-white/80' : 'text-gray-600'}`}>
                  {category.description}
                </p>

                {/* Prayer Count */}
                <div className="flex items-center justify-between">
                  <div className={`
                    px-3 py-1 rounded-full text-sm font-medium
                    ${isSelected 
                      ? 'bg-white/20 text-white' 
                      : `bg-white ${category.textColor}`
                    }
                  `}>
                    {count} {count === 1 ? 'prayer' : 'prayers'}
                  </div>
                  
                  {/* Active Indicator */}
                  {count > 0 && (
                    <div className={`
                      w-3 h-3 rounded-full animate-pulse
                      ${isSelected ? 'bg-white' : 'bg-gradient-to-r ' + category.color}
                    `} />
                  )}
                </div>
              </div>

              {/* Selection Indicator */}
              {isSelected && (
                <div className="absolute top-2 right-2">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full" />
                  </div>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Active Filter Display */}
      {selectedCategory !== 'all' && (
        <div className="mt-6 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border border-indigo-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full animate-pulse" />
              <span className="text-gray-700 font-medium">
                Showing prayers for: {categories.find(c => c.id === selectedCategory)?.name}
              </span>
            </div>
            <button
              onClick={() => handleCategorySelect('all')}
              className="text-sm text-indigo-600 hover:text-indigo-800 font-medium transition-colors duration-200"
            >
              Clear filter
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrayerIntentions;