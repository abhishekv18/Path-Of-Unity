
// import React, { useState } from 'react';

// import WorldPrayerMap from '../components/prayer/WorldPrayerMap';
// import UnityCounter from '../components/prayer/UnityCounter';
// import WisdomCorner from '../components/prayer/WisdomCorner';
// import PrayerIntentions from '../components/prayer/PrayerIntentions';
// import PrayerWall from '../components/prayer/PrayerWall'; // Add this import
// import { prayerDatabase } from '../data/samplePrayers';

// const PrayerPage = () => {
//   const [allPrayers, setAllPrayers] = useState(prayerDatabase);
//   const [activePrayers, setActivePrayers] = useState(allPrayers);
//   const [selectedCategory, setSelectedCategory] = useState('all');

//   // Define your 5 prayer categories for filtering
//   const filterCategories = [
//     'world-peace',
//     'healing',
//     'gratitude',
//     'family',
//     'guidance',
//     'general',
//     'all' // Include an "All" category to show all prayers
//   ];

//   // Handle category filtering
//   const handleFilter = (categoryId) => {
//     setSelectedCategory(categoryId);
    
//     if (categoryId === 'all') {
//       // Show all prayers
//       setActivePrayers(allPrayers);
//     } else {
//       // Filter by specific category
//       const filtered = allPrayers.filter(prayer => prayer.category === categoryId);
//       setActivePrayers(filtered);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
//       {/* Top Components Section */}
//       <div className="space-y-8 pb-8">
//         <WorldPrayerMap />
//         <UnityCounter />
//         <WisdomCorner />
        
//         {/* Prayer Intentions Component (can be used as additional filter UI) */}
//         <PrayerIntentions 
//           activePrayers={activePrayers}
//           onCategoryChange={handleFilter}
//         />
//       </div>

//       {/* Main Prayer Wall - Replace the basic prayer display */}
//       <PrayerWall 
//         prayers={activePrayers}
//         filters={filterCategories}
//         onFilterChange={handleFilter}
//       />

//     </div>
//   );
// };

// // export default PrayerPage;
// import React, { useState, useEffect } from 'react';
// import { Heart, Globe, Users, Lightbulb, Star, Sun, Moon, Sparkles, Circle } from 'lucide-react';

// import WorldPrayerMap from '../components/prayer/WorldPrayerMap';
// import UnityCounter from '../components/prayer/UnityCounter';
// import WisdomCorner from '../components/prayer/WisdomCorner';
// import PrayerIntentions from '../components/prayer/PrayerIntentions';
// import PrayerWall from '../components/prayer/PrayerWall';
// import { prayerDatabase } from '../data/samplePrayers';

// const PrayerPage = () => {
//   const [allPrayers, setAllPrayers] = useState(prayerDatabase);
//   const [activePrayers, setActivePrayers] = useState(allPrayers);
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [currentTime, setCurrentTime] = useState(new Date());

//   // Define your prayer categories for filtering
//   const filterCategories = [
//     'world-peace',
//     'healing',
//     'gratitude',
//     'family',
//     'guidance',
//     'general',
//     'all'
//   ];

//   // Update time every minute for spiritual timing
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 60000);
//     return () => clearInterval(timer);
//   }, []);

//   // Handle category filtering
//   const handleFilter = (categoryId) => {
//     setSelectedCategory(categoryId);
    
//     if (categoryId === 'all') {
//       setActivePrayers(allPrayers);
//     } else {
//       const filtered = allPrayers.filter(prayer => prayer.category === categoryId);
//       setActivePrayers(filtered);
//     }
//   };

//   // Get time-based greeting and theme
//   const getTimeBasedTheme = () => {
//     const hour = currentTime.getHours();
//     if (hour >= 5 && hour < 12) {
//       return {
//         greeting: "Dawn Prayers",
//         icon: Sun,
//         gradient: "from-amber-300 via-orange-400 to-pink-500",
//         accent: "from-yellow-400 to-orange-500"
//       };
//     } else if (hour >= 12 && hour < 18) {
//       return {
//         greeting: "Midday Devotions", 
//         icon: Sun,
//         gradient: "from-blue-400 via-indigo-500 to-purple-600",
//         accent: "from-blue-500 to-indigo-600"
//       };
//     } else {
//       return {
//         greeting: "Evening Reflections",
//         icon: Moon,
//         gradient: "from-indigo-600 via-purple-700 to-pink-800",
//         accent: "from-purple-500 to-pink-600"
//       };
//     }
//   };

//   const timeTheme = getTimeBasedTheme();
//   const TimeIcon = timeTheme.icon;

//   return (
//     <div className="min-h-screen relative overflow-hidden">
//       {/* Serene Sacred Background */}
//       <div className="fixed inset-0 z-0">
//         {/* Soft gradient base */}
//         <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"></div>
        
//         {/* Subtle overlay pattern */}
//         <div className="absolute inset-0 opacity-5">
//           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-200 to-transparent transform rotate-12"></div>
//           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-200 to-transparent transform -rotate-12"></div>
//         </div>
        
//         {/* Gentle sacred geometry */}
//         <div className="absolute inset-0 opacity-8">
//           <div className="absolute top-32 left-32 w-48 h-48 border border-indigo-200 rounded-full animate-spin-slow"></div>
//           <div className="absolute top-64 right-64 w-24 h-24 border border-purple-200 rounded-full animate-pulse-slow"></div>
//           <div className="absolute bottom-48 left-1/4 w-36 h-36 border border-blue-200 rounded-full animate-spin-reverse"></div>
//         </div>
        
//         {/* Soft floating elements */}
//         <div className="absolute inset-0">
//           {[...Array(12)].map((_, i) => (
//             <div
//               key={i}
//               className="absolute w-1 h-1 bg-indigo-300 rounded-full opacity-20 animate-float"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//                 animationDelay: `${Math.random() * 8}s`,
//                 animationDuration: `${12 + Math.random() * 8}s`
//               }}
//             ></div>
//           ))}
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10">
//         {/* Sacred Header */}
//         <div className="relative overflow-hidden bg-white/70 backdrop-blur-sm border-b border-indigo-100">
//           <div className="max-w-6xl mx-auto px-6 py-12 text-center">
//             <div className="mb-6">
//               {/* Sacred symbol */}
//               <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 mb-4 shadow-lg">
//                 <div className="relative">
//                   <Circle className="w-6 h-6 text-white animate-spin-slow" />
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
//                   </div>
//                 </div>
//               </div>
              
//               {/* Time-based greeting */}
//               <div className="flex items-center justify-center space-x-2 mb-4">
//                 <TimeIcon className="w-5 h-5 text-indigo-600 animate-pulse" />
//                 <span className="text-indigo-700 text-base font-medium tracking-wide">
//                   {timeTheme.greeting}
//                 </span>
//                 <TimeIcon className="w-5 h-5 text-indigo-600 animate-pulse" />
//               </div>
//             </div>

//             <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 tracking-tight">
//               Global Prayer Unity
//             </h1>
            
//             <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
//               Connect hearts worldwide through sacred prayers. Experience unity beyond borders 
//               as we share compassion, wisdom, and hope together.
//             </p>
            
//             {/* Live spiritual counter */}
//             <div className="inline-flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-indigo-200 shadow-md">
//               <div className="flex items-center space-x-2">
//                 <div className="w-2.5 h-2.5 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-pulse"></div>
//                 <span className="text-gray-700 font-medium text-sm">{allPrayers.length} Active Prayers</span>
//               </div>
//               <div className="w-px h-4 bg-gray-300"></div>
//               <div className="flex items-center space-x-2">
//                 <Globe className="w-4 h-4 text-indigo-600 animate-spin-slow" />
//                 <span className="text-gray-600 text-sm">Worldwide Unity</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Sacred Components Section */}
//         <div className="relative py-8">
//           <div className="max-w-6xl mx-auto px-6">
//             {/* Elegant divider */}
//             <div className="flex items-center justify-center mb-8">
//               <div className="flex items-center space-x-3">
//                 <div className="w-16 h-px bg-gradient-to-r from-transparent via-indigo-300 to-indigo-300"></div>
//                 <Star className="w-4 h-4 text-indigo-500 animate-pulse" />
//                 <div className="w-6 h-px bg-indigo-300"></div>
//                 <Heart className="w-4 h-4 text-purple-500 animate-pulse" />
//                 <div className="w-6 h-px bg-indigo-300"></div>
//                 <Star className="w-4 h-4 text-indigo-500 animate-pulse" />
//                 <div className="w-16 h-px bg-gradient-to-r from-indigo-300 via-indigo-300 to-transparent"></div>
//               </div>
//             </div>

//             {/* Optimized Component Grid */}
//             <div className="space-y-8">
//               {/* First Row - World Map (Full Width) */}
//               <div className="transform hover:scale-[1.02] transition-all duration-500 ease-out">
//                 <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300">
//                   <WorldPrayerMap />
//                 </div>
//               </div>

//               {/* Second Row - Unity & Wisdom (Better Spacing) */}
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div className="transform hover:scale-[1.02] transition-all duration-500 ease-out">
//                   <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
//                     <UnityCounter />
//                   </div>
//                 </div>
//                 <div className="transform hover:scale-[1.02] transition-all duration-500 ease-out">
//                   <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
//                     <WisdomCorner />
//                   </div>
//                 </div>
//               </div>

//               {/* Third Row - Prayer Intentions (Full Width) */}
//               <div className="transform hover:scale-[1.02] transition-all duration-500 ease-out">
//                 <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300">
//                   <PrayerIntentions 
//                     activePrayers={activePrayers}
//                     onCategoryChange={handleFilter}
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Elegant Transition to Prayer Wall */}
//             <div className="flex items-center justify-center my-12">
//               <div className="flex items-center space-x-4">
//                 <div className="w-24 h-px bg-gradient-to-r from-transparent via-indigo-200 to-indigo-300"></div>
//                 <div className="bg-white/70 backdrop-blur-sm rounded-full p-3 border border-indigo-200 shadow-md">
//                   <Heart className="w-6 h-6 text-indigo-600 animate-pulse" />
//                 </div>
//                 <div className="w-24 h-px bg-gradient-to-r from-indigo-300 via-indigo-200 to-transparent"></div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Prayer Wall Section */}
//         <div className="relative bg-gradient-to-t from-indigo-50/50 to-transparent pt-4">
//           <PrayerWall 
//             prayers={activePrayers}
//             filters={filterCategories}
//             onFilterChange={handleFilter}
//           />
//         </div>
//       </div>

//       {/* Custom Sacred Animations */}
//       <style jsx>{`
//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
        
//         @keyframes spin-reverse {
//           from { transform: rotate(360deg); }
//           to { transform: rotate(0deg); }
//         }
        
//         @keyframes pulse-slow {
//           0%, 100% { opacity: 0.6; }
//           50% { opacity: 1; }
//         }
        
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           25% { transform: translateY(-20px) rotate(90deg); }
//           50% { transform: translateY(-40px) rotate(180deg); }
//           75% { transform: translateY(-20px) rotate(270deg); }
//         }
        
//         .animate-spin-slow {
//           animation: spin-slow 20s linear infinite;
//         }
        
//         .animate-spin-reverse {
//           animation: spin-reverse 25s linear infinite;
//         }
        
//         .animate-pulse-slow {
//           animation: pulse-slow 4s ease-in-out infinite;
//         }
        
//         .animate-float {
//           animation: float 15s ease-in-out infinite;
//         }
        
//         .shadow-3xl {
//           box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
//         }
//       `}</style>
//     </div>
//   );
// };

// export default PrayerPage;

import React, { useState, useEffect } from 'react';
import { Heart, Globe, Users, Lightbulb, Star, Sun, Moon, Sparkles, Circle } from 'lucide-react';

import WorldPrayerMap from '../components/prayer/WorldPrayerMap';
import UnityCounter from '../components/prayer/UnityCounter';
import WisdomCorner from '../components/prayer/WisdomCorner';
import PrayerIntentions from '../components/prayer/PrayerIntentions';
import PrayerWall from '../components/prayer/PrayerWall';
import { prayerDatabase } from '../data/samplePrayers';

const PrayerPage = () => {
  const [allPrayers, setAllPrayers] = useState(prayerDatabase);
  const [activePrayers, setActivePrayers] = useState(allPrayers);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile viewport on mount and resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Define your prayer categories for filtering
  const filterCategories = [
    'world-peace',
    'healing',
    'gratitude',
    'family',
    'guidance',
    'general',
    'all'
  ];

  // Update time every minute for spiritual timing
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  // Handle category filtering
  const handleFilter = (categoryId) => {
    setSelectedCategory(categoryId);
    
    if (categoryId === 'all') {
      setActivePrayers(allPrayers);
    } else {
      const filtered = allPrayers.filter(prayer => prayer.category === categoryId);
      setActivePrayers(filtered);
    }
  };

  // Get time-based greeting and theme
  const getTimeBasedTheme = () => {
    const hour = currentTime.getHours();
    if (hour >= 5 && hour < 12) {
      return {
        greeting: "Dawn Prayers",
        icon: Sun,
        gradient: "from-amber-300 via-orange-400 to-pink-500",
        accent: "from-yellow-400 to-orange-500"
      };
    } else if (hour >= 12 && hour < 18) {
      return {
        greeting: "Midday Devotions", 
        icon: Sun,
        gradient: "from-blue-400 via-indigo-500 to-purple-600",
        accent: "from-blue-500 to-indigo-600"
      };
    } else {
      return {
        greeting: "Evening Reflections",
        icon: Moon,
        gradient: "from-indigo-600 via-purple-700 to-pink-800",
        accent: "from-purple-500 to-pink-600"
      };
    }
  };

  const timeTheme = getTimeBasedTheme();
  const TimeIcon = timeTheme.icon;

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Serene Sacred Background */}
      <div className="fixed inset-0 z-0">
        {/* Soft gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"></div>
        
        {/* Subtle overlay pattern - reduced on mobile */}
        <div className="absolute inset-0 opacity-5 md:opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-200 to-transparent transform rotate-12"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-200 to-transparent transform -rotate-12"></div>
        </div>
        
        {/* Gentle sacred geometry - simplified on mobile */}
        {!isMobile && (
          <div className="absolute inset-0 opacity-8">
            <div className="absolute top-32 left-32 w-48 h-48 border border-indigo-200 rounded-full animate-spin-slow"></div>
            <div className="absolute top-64 right-64 w-24 h-24 border border-purple-200 rounded-full animate-pulse-slow"></div>
            <div className="absolute bottom-48 left-1/4 w-36 h-36 border border-blue-200 rounded-full animate-spin-reverse"></div>
          </div>
        )}
        
        {/* Soft floating elements - fewer on mobile */}
        <div className="absolute inset-0">
          {[...Array(isMobile ? 6 : 12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-indigo-300 rounded-full opacity-20 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${12 + Math.random() * 8}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Sacred Header - adjusted for mobile */}
        <div className="relative overflow-hidden bg-white/70 backdrop-blur-sm border-b border-indigo-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12 text-center">
            <div className="mb-4 md:mb-6">
              {/* Sacred symbol - smaller on mobile */}
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 mb-3 md:mb-4 shadow-lg">
                <div className="relative">
                  <Circle className="w-4 h-4 md:w-6 md:h-6 text-white animate-spin-slow" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
              
              {/* Time-based greeting - adjusted for mobile */}
              <div className="flex items-center justify-center space-x-2 mb-3 md:mb-4">
                <TimeIcon className="w-4 h-4 md:w-5 md:h-5 text-indigo-600 animate-pulse" />
                <span className="text-indigo-700 text-sm md:text-base font-medium tracking-wide">
                  {timeTheme.greeting}
                </span>
                <TimeIcon className="w-4 h-4 md:w-5 md:h-5 text-indigo-600 animate-pulse" />
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-gray-800 tracking-tight">
              Global Prayer Unity
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 md:mb-6 max-w-2xl mx-auto leading-relaxed px-2">
              Connect hearts worldwide through sacred prayers. Experience unity beyond borders 
              as we share compassion, wisdom, and hope together.
            </p>
            
            {/* Live spiritual counter - adjusted for mobile */}
            <div className="inline-flex items-center space-x-2 sm:space-x-4 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 sm:px-6 sm:py-3 border border-indigo-200 shadow-md">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm text-gray-700 font-medium">{allPrayers.length} Active Prayers</span>
              </div>
              <div className="w-px h-3 sm:h-4 bg-gray-300"></div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-indigo-600 animate-spin-slow" />
                <span className="text-xs sm:text-sm text-gray-600">Worldwide Unity</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sacred Components Section */}
        <div className="relative py-6 md:py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            {/* Elegant divider - simplified on mobile */}
            <div className="flex items-center justify-center mb-6 md:mb-8">
              <div className="flex items-center space-x-2 md:space-x-3">
                <div className="w-8 md:w-16 h-px bg-gradient-to-r from-transparent via-indigo-300 to-indigo-300"></div>
                <Star className="w-3 h-3 md:w-4 md:h-4 text-indigo-500 animate-pulse" />
                <div className="w-3 md:w-6 h-px bg-indigo-300"></div>
                <Heart className="w-3 h-3 md:w-4 md:h-4 text-purple-500 animate-pulse" />
                <div className="w-3 md:w-6 h-px bg-indigo-300"></div>
                <Star className="w-3 h-3 md:w-4 md:h-4 text-indigo-500 animate-pulse" />
                <div className="w-8 md:w-16 h-px bg-gradient-to-r from-indigo-300 via-indigo-300 to-transparent"></div>
              </div>
            </div>

            {/* Responsive Component Grid */}
            <div className="space-y-6 md:space-y-8">
              {/* First Row - World Map (Full Width) */}
              <div className="transform hover:scale-[1.01] md:hover:scale-[1.02] transition-all duration-500 ease-out">
                <div className="bg-white/60 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300">
                  <WorldPrayerMap />
                </div>
              </div>

              {/* Second Row - Unity & Wisdom (Stack on mobile) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="transform hover:scale-[1.01] md:hover:scale-[1.02] transition-all duration-500 ease-out">
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    <UnityCounter />
                  </div>
                </div>
                <div className="transform hover:scale-[1.01] md:hover:scale-[1.02] transition-all duration-500 ease-out">
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    <WisdomCorner />
                  </div>
                </div>
              </div>

              {/* Third Row - Prayer Intentions (Full Width) */}
              <div className="transform hover:scale-[1.01] md:hover:scale-[1.02] transition-all duration-500 ease-out">
                <div className="bg-white/60 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300">
                  <PrayerIntentions 
                    activePrayers={activePrayers}
                    onCategoryChange={handleFilter}
                    isMobile={isMobile}
                  />
                </div>
              </div>
            </div>

            {/* Elegant Transition to Prayer Wall - adjusted for mobile */}
            <div className="flex items-center justify-center my-8 md:my-12">
              <div className="flex items-center space-x-2 md:space-x-4">
                <div className="w-12 md:w-24 h-px bg-gradient-to-r from-transparent via-indigo-200 to-indigo-300"></div>
                <div className="bg-white/70 backdrop-blur-sm rounded-full p-2 md:p-3 border border-indigo-200 shadow-md">
                  <Heart className="w-4 h-4 md:w-6 md:h-6 text-indigo-600 animate-pulse" />
                </div>
                <div className="w-12 md:w-24 h-px bg-gradient-to-r from-indigo-300 via-indigo-200 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Prayer Wall Section */}
        <div className="relative bg-gradient-to-t from-indigo-50/50 to-transparent pt-2 md:pt-4">
          <PrayerWall 
            prayers={activePrayers}
            filters={filterCategories}
            onFilterChange={handleFilter}
            isMobile={isMobile}
          />
        </div>
      </div>

      {/* Custom Sacred Animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-20px) rotate(90deg); }
          50% { transform: translateY(-40px) rotate(180deg); }
          75% { transform: translateY(-20px) rotate(270deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-spin-reverse {
          animation: spin-reverse 25s linear infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 15s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default PrayerPage;