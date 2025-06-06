// import React, { useState, useEffect } from 'react';
// import { Heart, Globe, Users, Lightbulb, Filter, Search } from 'lucide-react';

// const PrayerWall = ({ prayers = [], filters = [], onFilterChange }) => {
//   const [selectedFilter, setSelectedFilter] = useState('all');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [displayedPrayers, setDisplayedPrayers] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   // Category icons mapping
//   const categoryIcons = {
//     'World Peace & Unity': Globe,
//     'Compassion & Understanding': Heart,
//     'Brotherhood & Sisterhood': Users,
//     'Wisdom & Guidance': Lightbulb,
//     'Healing & Hope': Heart
//   };

//   // Cultural color schemes for different traditions
//   const culturalStyles = {
//     buddhist: 'from-orange-400 to-red-500',
//     christian: 'from-blue-400 to-purple-500',
//     islamic: 'from-green-400 to-teal-500',
//     hindu: 'from-yellow-400 to-orange-500',
//     jewish: 'from-indigo-400 to-blue-500',
//     universal: 'from-pink-400 to-purple-500'
//   };

//   // Simulate loading effect
//   useEffect(() => {
//     setIsLoading(true);
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 1000);
//     return () => clearTimeout(timer);
//   }, [prayers]);

//   // Filter prayers based on category and search
//   useEffect(() => {
//     let filtered = prayers;

//     if (selectedFilter !== 'all') {
//       filtered = prayers.filter(prayer => prayer.category === selectedFilter);
//     }

//     if (searchTerm) {
//       filtered = filtered.filter(prayer => 
//         prayer.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         prayer.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         prayer.category.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }

//     setDisplayedPrayers(filtered);
//   }, [prayers, selectedFilter, searchTerm]);

//   const handleFilterChange = (filter) => {
//     setSelectedFilter(filter);
//     if (onFilterChange) {
//       onFilterChange(filter);
//     }
//   };

//   const PrayerCard = ({ prayer, index }) => {
//     const IconComponent = categoryIcons[prayer.category] || Heart;
//     const gradientClass = culturalStyles[prayer.tradition] || culturalStyles.universal;
    
//     return (
//       <div 
//         className={`relative group transform hover:scale-105 transition-all duration-500 ease-out`}
//         style={{
//           animationDelay: `${index * 100}ms`,
//           animation: isLoading ? 'none' : 'fadeInUp 0.8s ease-out forwards'
//         }}
//       >
//         <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
        
//         <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20">
//           {/* Header with icon and country */}
//           <div className="flex items-center justify-between mb-4">
//             <div className="flex items-center space-x-3">
//               <div className={`p-2 rounded-full bg-gradient-to-br ${gradientClass} text-white shadow-md`}>
//                 <IconComponent size={20} />
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-600">{prayer.country}</p>
//                 <p className="text-xs text-gray-400">{prayer.category}</p>
//               </div>
//             </div>
//             <div className="text-2xl opacity-60">
//               {prayer.flag}
//             </div>
//           </div>

//           {/* Prayer text */}
//           <div className="mb-4">
//             <p className="text-gray-700 leading-relaxed font-medium">
//               {prayer.text}
//             </p>
//           </div>

//           {/* Footer with timestamp and tradition */}
//           <div className="flex items-center justify-between pt-4 border-t border-gray-100">
//             <span className="text-xs text-gray-400 capitalize">
//               {prayer.tradition} tradition
//             </span>
//             <div className="flex items-center space-x-1">
//               <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${gradientClass} animate-pulse`}></div>
//               <span className="text-xs text-gray-400">Live</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
//       {/* Header Section */}
//       <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
//         <div className="absolute inset-0 bg-black/20"></div>
//         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform skew-y-1"></div>
        
//         <div className="relative max-w-7xl mx-auto px-6 py-16">
//           <div className="text-center">
//             <h1 className="text-5xl font-bold mb-4 tracking-tight">
//               Global Prayer Wall
//             </h1>
//             <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
//               Unite in compassion across cultures and borders. Every prayer creates ripples of hope around the world.
//             </p>
            
//             {/* Live counter */}
//             <div className="inline-flex items-center space-x-4 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
//               <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
//               <span className="font-semibold">{prayers.length} Live Prayers</span>
//               <Globe className="w-5 h-5 animate-spin" style={{animationDuration: '10s'}} />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Filter and Search Section */}
//       <div className="max-w-7xl mx-auto px-6 py-8">
//         <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 mb-8">
//           <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
//             {/* Category Filters */}
//             <div className="flex flex-wrap gap-2">
//               <button
//                 onClick={() => handleFilterChange('all')}
//                 className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
//                   selectedFilter === 'all'
//                     ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg'
//                     : 'bg-white/50 text-gray-600 hover:bg-white/80'
//                 }`}
//               >
//                 All Prayers
//               </button>
//               {filters.map((filter) => {
//                 const IconComponent = categoryIcons[filter] || Heart;
//                 return (
//                   <button
//                     key={filter}
//                     onClick={() => handleFilterChange(filter)}
//                     className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
//                       selectedFilter === filter
//                         ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg'
//                         : 'bg-white/50 text-gray-600 hover:bg-white/80'
//                     }`}
//                   >
//                     <IconComponent size={16} />
//                     <span>{filter}</span>
//                   </button>
//                 );
//               })}
//             </div>

//             {/* Search Bar */}
//             <div className="relative">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//               <input
//                 type="text"
//                 placeholder="Search prayers, countries..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="pl-10 pr-4 py-2 w-full lg:w-64 rounded-full bg-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white/80 transition-all duration-300"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Prayer Grid */}
//         {isLoading ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {[...Array(6)].map((_, i) => (
//               <div key={i} className="bg-white/50 rounded-2xl p-6 animate-pulse">
//                 <div className="flex items-center space-x-3 mb-4">
//                   <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
//                   <div className="space-y-2">
//                     <div className="w-20 h-4 bg-gray-200 rounded"></div>
//                     <div className="w-32 h-3 bg-gray-200 rounded"></div>
//                   </div>
//                 </div>
//                 <div className="space-y-2 mb-4">
//                   <div className="w-full h-4 bg-gray-200 rounded"></div>
//                   <div className="w-3/4 h-4 bg-gray-200 rounded"></div>
//                 </div>
//                 <div className="w-24 h-3 bg-gray-200 rounded"></div>
//               </div>
//             ))}
//           </div>
//         ) : displayedPrayers.length > 0 ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {displayedPrayers.map((prayer, index) => (
//               <PrayerCard key={prayer.id || index} prayer={prayer} index={index} />
//             ))}
//           </div>
//         ) : (
//           <div className="text-center py-16">
//             <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto">
//               <Filter className="w-16 h-16 text-gray-400 mx-auto mb-4" />
//               <h3 className="text-xl font-semibold text-gray-600 mb-2">No prayers found</h3>
//               <p className="text-gray-500">Try adjusting your filters or search terms</p>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Custom animations */}
//       <style jsx>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default PrayerWall;


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

  // Cultural color schemes for different traditions - Updated to blue and gold theme
  const culturalStyles = {
    buddhist: 'from-blue-400 to-indigo-500',
    christian: 'from-indigo-400 to-blue-600',
    islamic: 'from-blue-500 to-indigo-600',
    hindu: 'from-amber-400 to-yellow-500',
    jewish: 'from-blue-600 to-indigo-700',
    universal: 'from-blue-500 to-amber-500'
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
        <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} rounded-3xl opacity-15 group-hover:opacity-25 transition-opacity duration-300`}></div>
        
        <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-blue-100/50 group-hover:border-blue-200">
          {/* Header with icon and country */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className={`p-3 rounded-full bg-gradient-to-br ${gradientClass} text-white shadow-lg`}>
                <IconComponent size={24} />
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-700">{prayer.country}</p>
                <p className="text-sm text-blue-600 font-medium">{prayer.category}</p>
              </div>
            </div>
            <div className="text-3xl opacity-70">
              {prayer.flag}
            </div>
          </div>

          {/* Prayer text */}
          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed font-medium text-lg">
              {prayer.text}
            </p>
          </div>

          {/* Footer with timestamp and tradition */}
          <div className="flex items-center justify-between pt-6 border-t-2 border-blue-100">
            <span className="text-sm text-blue-600 capitalize font-medium bg-blue-50 px-3 py-1 rounded-full">
              {prayer.tradition} tradition
            </span>
            <div className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${gradientClass} animate-pulse`}></div>
              <span className="text-sm text-gray-500 font-medium">Live</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-700 to-blue-800 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-transparent to-indigo-900/30"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-amber-400/20 to-transparent rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-blue-400/20 to-transparent rounded-full translate-x-40 translate-y-40"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="p-4 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full shadow-lg animate-pulse">
                <Globe className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-6xl font-bold mb-6 tracking-tight bg-gradient-to-r from-white via-blue-100 to-amber-200 bg-clip-text text-transparent">
              Global Prayer Wall
            </h1>
            <p className="text-2xl opacity-90 mb-10 max-w-3xl mx-auto leading-relaxed">
              Unite in compassion across cultures and borders. Every prayer creates ripples of hope around the world.
            </p>
            
            {/* Live counter */}
            <div className="inline-flex items-center space-x-5 bg-white/15 backdrop-blur-sm rounded-full px-8 py-4 border border-white/20">
              <div className="w-4 h-4 bg-amber-400 rounded-full animate-pulse shadow-lg"></div>
              <span className="font-semibold text-xl">{prayers.length} Live Prayers</span>
              <Globe className="w-6 h-6 animate-spin text-amber-300" style={{animationDuration: '10s'}} />
            </div>
          </div>
        </div>
      </div>

      {/* Filter and Search Section */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="bg-gradient-to-r from-blue-50 via-white to-amber-50 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-2 border-blue-100/50 mb-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-6 lg:space-y-0">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => handleFilterChange('all')}
                className={`px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 border-2 transform hover:scale-105 ${
                  selectedFilter === 'all'
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg border-blue-500'
                    : 'bg-white text-blue-600 hover:bg-blue-50 border-blue-200'
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
                    className={`flex items-center space-x-3 px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 border-2 transform hover:scale-105 ${
                      selectedFilter === filter
                        ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg border-blue-500'
                        : 'bg-white text-blue-600 hover:bg-blue-50 border-blue-200'
                    }`}
                  >
                    <IconComponent size={18} />
                    <span>{filter}</span>
                  </button>
                );
              })}
            </div>

            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400 w-6 h-6" />
              <input
                type="text"
                placeholder="Search prayers, countries..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-6 py-4 w-full lg:w-80 rounded-full bg-white border-2 border-blue-200 focus:outline-none focus:ring-4 focus:ring-blue-300/50 focus:border-blue-500 transition-all duration-300 text-base font-medium"
              />
            </div>
          </div>
        </div>

        {/* Prayer Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 animate-pulse border-2 border-blue-100">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-blue-200 rounded-full"></div>
                  <div className="space-y-3">
                    <div className="w-24 h-5 bg-blue-200 rounded-full"></div>
                    <div className="w-32 h-4 bg-blue-200 rounded-full"></div>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="w-full h-5 bg-blue-200 rounded-full"></div>
                  <div className="w-3/4 h-5 bg-blue-200 rounded-full"></div>
                </div>
                <div className="w-28 h-4 bg-blue-200 rounded-full"></div>
              </div>
            ))}
          </div>
        ) : displayedPrayers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedPrayers.map((prayer, index) => (
              <PrayerCard key={prayer.id || index} prayer={prayer} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 backdrop-blur-sm rounded-3xl p-12 max-w-lg mx-auto border-2 border-blue-100">
              <div className="p-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full w-fit mx-auto mb-6">
                <Filter className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-800 mb-4">No prayers found</h3>
              <p className="text-blue-600 text-lg">Try adjusting your filters or search terms</p>
            </div>
          </div>
        )}
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
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