import React, { useState, useEffect } from 'react';
import { Heart, Globe, Users, Lightbulb, Filter, Search } from 'lucide-react';

const PrayerWall = ({ prayers = [], filters = [], onFilterChange }) => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [displayedPrayers, setDisplayedPrayers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Category icons mapping
  const categoryIcons = {
    'World Peace & Unity': Globe,
    'Compassion & Understanding': Heart,
    'Brotherhood & Sisterhood': Users,
    'Wisdom & Guidance': Lightbulb,
    'Healing & Hope': Heart
  };

  // Cultural color schemes for different traditions
  const culturalStyles = {
    buddhist: 'from-orange-400 to-red-500',
    christian: 'from-blue-400 to-purple-500',
    islamic: 'from-green-400 to-teal-500',
    hindu: 'from-yellow-400 to-orange-500',
    jewish: 'from-indigo-400 to-blue-500',
    universal: 'from-pink-400 to-purple-500'
  };

  // Simulate loading effect
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [prayers]);

  // Filter prayers based on category and search
  useEffect(() => {
    let filtered = prayers;

    if (selectedFilter !== 'all') {
      filtered = prayers.filter(prayer => prayer.category === selectedFilter);
    }

    if (searchTerm) {
      filtered = filtered.filter(prayer => 
        prayer.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prayer.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prayer.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setDisplayedPrayers(filtered);
  }, [prayers, selectedFilter, searchTerm]);

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    if (onFilterChange) {
      onFilterChange(filter);
    }
  };

  const PrayerCard = ({ prayer, index }) => {
    const IconComponent = categoryIcons[prayer.category] || Heart;
    const gradientClass = culturalStyles[prayer.tradition] || culturalStyles.universal;
    
    return (
      <div 
        className={`relative group transform hover:scale-105 transition-all duration-500 ease-out`}
        style={{
          animationDelay: `${index * 100}ms`,
          animation: isLoading ? 'none' : 'fadeInUp 0.8s ease-out forwards'
        }}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
        
        <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20">
          {/* Header with icon and country */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-full bg-gradient-to-br ${gradientClass} text-white shadow-md`}>
                <IconComponent size={20} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">{prayer.country}</p>
                <p className="text-xs text-gray-400">{prayer.category}</p>
              </div>
            </div>
            <div className="text-2xl opacity-60">
              {prayer.flag}
            </div>
          </div>

          {/* Prayer text */}
          <div className="mb-4">
            <p className="text-gray-700 leading-relaxed font-medium">
              {prayer.text}
            </p>
          </div>

          {/* Footer with timestamp and tradition */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <span className="text-xs text-gray-400 capitalize">
              {prayer.tradition} tradition
            </span>
            <div className="flex items-center space-x-1">
              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${gradientClass} animate-pulse`}></div>
              <span className="text-xs text-gray-400">Live</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform skew-y-1"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 tracking-tight">
              Global Prayer Wall
            </h1>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Unite in compassion across cultures and borders. Every prayer creates ripples of hope around the world.
            </p>
            
            {/* Live counter */}
            <div className="inline-flex items-center space-x-4 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-semibold">{prayers.length} Live Prayers</span>
              <Globe className="w-5 h-5 animate-spin" style={{animationDuration: '10s'}} />
            </div>
          </div>
        </div>
      </div>

      {/* Filter and Search Section */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleFilterChange('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedFilter === 'all'
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg'
                    : 'bg-white/50 text-gray-600 hover:bg-white/80'
                }`}
              >
                All Prayers
              </button>
              {filters.map((filter) => {
                const IconComponent = categoryIcons[filter] || Heart;
                return (
                  <button
                    key={filter}
                    onClick={() => handleFilterChange(filter)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedFilter === filter
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg'
                        : 'bg-white/50 text-gray-600 hover:bg-white/80'
                    }`}
                  >
                    <IconComponent size={16} />
                    <span>{filter}</span>
                  </button>
                );
              })}
            </div>

            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search prayers, countries..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full lg:w-64 rounded-full bg-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white/80 transition-all duration-300"
              />
            </div>
          </div>
        </div>

        {/* Prayer Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white/50 rounded-2xl p-6 animate-pulse">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                  <div className="space-y-2">
                    <div className="w-20 h-4 bg-gray-200 rounded"></div>
                    <div className="w-32 h-3 bg-gray-200 rounded"></div>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="w-full h-4 bg-gray-200 rounded"></div>
                  <div className="w-3/4 h-4 bg-gray-200 rounded"></div>
                </div>
                <div className="w-24 h-3 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        ) : displayedPrayers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedPrayers.map((prayer, index) => (
              <PrayerCard key={prayer.id || index} prayer={prayer} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto">
              <Filter className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No prayers found</h3>
              <p className="text-gray-500">Try adjusting your filters or search terms</p>
            </div>
          </div>
        )}
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default PrayerWall;