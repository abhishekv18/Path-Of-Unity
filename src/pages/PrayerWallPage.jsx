
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
//   const [isMobile, setIsMobile] = useState(false);

//   // Check for mobile viewport on mount and resize
//   useEffect(() => {
//     const checkIfMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
    
//     checkIfMobile();
//     window.addEventListener('resize', checkIfMobile);
    
//     return () => window.removeEventListener('resize', checkIfMobile);
//   }, []);

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
        
//         {/* Subtle overlay pattern - reduced on mobile */}
//         <div className="absolute inset-0 opacity-5 md:opacity-10">
//           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-200 to-transparent transform rotate-12"></div>
//           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-200 to-transparent transform -rotate-12"></div>
//         </div>
        
//         {/* Gentle sacred geometry - simplified on mobile */}
//         {!isMobile && (
//           <div className="absolute inset-0 opacity-8">
//             <div className="absolute top-32 left-32 w-48 h-48 border border-indigo-200 rounded-full animate-spin-slow"></div>
//             <div className="absolute top-64 right-64 w-24 h-24 border border-purple-200 rounded-full animate-pulse-slow"></div>
//             <div className="absolute bottom-48 left-1/4 w-36 h-36 border border-blue-200 rounded-full animate-spin-reverse"></div>
//           </div>
//         )}
        
//         {/* Soft floating elements - fewer on mobile */}
//         <div className="absolute inset-0">
//           {[...Array(isMobile ? 6 : 12)].map((_, i) => (
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
//         {/* Sacred Header - adjusted for mobile */}
//         <div className="relative overflow-hidden bg-white/70 backdrop-blur-sm border-b border-indigo-100">
//           <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12 text-center">
//             <div className="mb-4 md:mb-6">
//               {/* Sacred symbol - smaller on mobile */}
//               <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 mb-3 md:mb-4 shadow-lg">
//                 <div className="relative">
//                   <Circle className="w-4 h-4 md:w-6 md:h-6 text-white animate-spin-slow" />
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-white rounded-full animate-pulse"></div>
//                   </div>
//                 </div>
//               </div>
              
//               {/* Time-based greeting - adjusted for mobile */}
//               <div className="flex items-center justify-center space-x-2 mb-3 md:mb-4">
//                 <TimeIcon className="w-4 h-4 md:w-5 md:h-5 text-indigo-600 animate-pulse" />
//                 <span className="text-indigo-700 text-sm md:text-base font-medium tracking-wide">
//                   {timeTheme.greeting}
//                 </span>
//                 <TimeIcon className="w-4 h-4 md:w-5 md:h-5 text-indigo-600 animate-pulse" />
//               </div>
//             </div>

//             <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-gray-800 tracking-tight">
//               Global Prayer Unity
//             </h1>
            
//             <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 md:mb-6 max-w-2xl mx-auto leading-relaxed px-2">
//               Connect hearts worldwide through sacred prayers. Experience unity beyond borders 
//               as we share compassion, wisdom, and hope together.
//             </p>
            
//             {/* Live spiritual counter - adjusted for mobile */}
//             <div className="inline-flex items-center space-x-2 sm:space-x-4 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 sm:px-6 sm:py-3 border border-indigo-200 shadow-md">
//               <div className="flex items-center space-x-1 sm:space-x-2">
//                 <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-pulse"></div>
//                 <span className="text-xs sm:text-sm text-gray-700 font-medium">{allPrayers.length} Active Prayers</span>
//               </div>
//               <div className="w-px h-3 sm:h-4 bg-gray-300"></div>
//               <div className="flex items-center space-x-1 sm:space-x-2">
//                 <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-indigo-600 animate-spin-slow" />
//                 <span className="text-xs sm:text-sm text-gray-600">Worldwide Unity</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Sacred Components Section */}
//         <div className="relative py-6 md:py-8">
//           <div className="max-w-6xl mx-auto px-4 sm:px-6">
//             {/* Elegant divider - simplified on mobile */}
//             <div className="flex items-center justify-center mb-6 md:mb-8">
//               <div className="flex items-center space-x-2 md:space-x-3">
//                 <div className="w-8 md:w-16 h-px bg-gradient-to-r from-transparent via-indigo-300 to-indigo-300"></div>
//                 <Star className="w-3 h-3 md:w-4 md:h-4 text-indigo-500 animate-pulse" />
//                 <div className="w-3 md:w-6 h-px bg-indigo-300"></div>
//                 <Heart className="w-3 h-3 md:w-4 md:h-4 text-purple-500 animate-pulse" />
//                 <div className="w-3 md:w-6 h-px bg-indigo-300"></div>
//                 <Star className="w-3 h-3 md:w-4 md:h-4 text-indigo-500 animate-pulse" />
//                 <div className="w-8 md:w-16 h-px bg-gradient-to-r from-indigo-300 via-indigo-300 to-transparent"></div>
//               </div>
//             </div>

//             {/* Responsive Component Grid */}
//             <div className="space-y-6 md:space-y-8">
//               {/* First Row - World Map (Full Width) */}
//               <div className="transform hover:scale-[1.01] md:hover:scale-[1.02] transition-all duration-500 ease-out">
//                 <div className="bg-white/60 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300">
//                   <WorldPrayerMap />
//                 </div>
//               </div>

//               {/* Second Row - Unity & Wisdom (Stack on mobile) */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
//                 <div className="transform hover:scale-[1.01] md:hover:scale-[1.02] transition-all duration-500 ease-out">
//                   <div className="bg-white/60 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
//                     <UnityCounter />
//                   </div>
//                 </div>
//                 <div className="transform hover:scale-[1.01] md:hover:scale-[1.02] transition-all duration-500 ease-out">
//                   <div className="bg-white/60 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
//                     <WisdomCorner />
//                   </div>
//                 </div>
//               </div>

//               {/* Third Row - Prayer Intentions (Full Width) */}
//               <div className="transform hover:scale-[1.01] md:hover:scale-[1.02] transition-all duration-500 ease-out">
//                 <div className="bg-white/60 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300">
//                   <PrayerIntentions 
//                     activePrayers={activePrayers}
//                     onCategoryChange={handleFilter}
//                     isMobile={isMobile}
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Elegant Transition to Prayer Wall - adjusted for mobile */}
//             <div className="flex items-center justify-center my-8 md:my-12">
//               <div className="flex items-center space-x-2 md:space-x-4">
//                 <div className="w-12 md:w-24 h-px bg-gradient-to-r from-transparent via-indigo-200 to-indigo-300"></div>
//                 <div className="bg-white/70 backdrop-blur-sm rounded-full p-2 md:p-3 border border-indigo-200 shadow-md">
//                   <Heart className="w-4 h-4 md:w-6 md:h-6 text-indigo-600 animate-pulse" />
//                 </div>
//                 <div className="w-12 md:w-24 h-px bg-gradient-to-r from-indigo-300 via-indigo-200 to-transparent"></div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Prayer Wall Section */}
//         <div className="relative bg-gradient-to-t from-indigo-50/50 to-transparent pt-2 md:pt-4">
//           <PrayerWall 
//             prayers={activePrayers}
//             filters={filterCategories}
//             onFilterChange={handleFilter}
//             isMobile={isMobile}
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
//       `}</style>
//     </div>
//   );
// };

// export default PrayerPage;


// import React, { useState, useEffect } from 'react';
// import { Heart, Globe, Users, Lightbulb, Star, Sun, Moon, Sparkles, Circle } from 'lucide-react';

// import WorldPrayerMap from '../components/prayer/WorldPrayerMap';
// import UnityCounter from '../components/prayer/UnityCounter';
// import WisdomCorner from '../components/prayer/WisdomCorner';
// import PrayerIntentions from '../components/prayer/PrayerIntentions';
// import PrayerWall from '../components/prayer/PrayerWall';
// import { prayerDatabase } from '../data/samplePrayers';

// const PrayerWallPage = () => {
//   const [allPrayers, setAllPrayers] = useState(prayerDatabase);
//   const [activePrayers, setActivePrayers] = useState(allPrayers);
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [isMobile, setIsMobile] = useState(false);

//   // Check for mobile viewport on mount and resize
//   useEffect(() => {
//     const checkIfMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
    
//     checkIfMobile();
//     window.addEventListener('resize', checkIfMobile);
    
//     return () => window.removeEventListener('resize', checkIfMobile);
//   }, []);

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
//         gradient: "from-yellow-400 via-amber-500 to-yellow-600",
//         accent: "from-amber-400 to-yellow-500"
//       };
//     } else if (hour >= 12 && hour < 18) {
//       return {
//         greeting: "Midday Devotions", 
//         icon: Sun,
//         gradient: "from-blue-400 via-blue-600 to-blue-800",
//         accent: "from-blue-500 to-blue-700"
//       };
//     } else {
//       return {
//         greeting: "Evening Reflections",
//         icon: Moon,
//         gradient: "from-blue-800 via-blue-900 to-indigo-900",
//         accent: "from-blue-600 to-indigo-700"
//       };
//     }
//   };

//   const timeTheme = getTimeBasedTheme();
//   const TimeIcon = timeTheme.icon;

//   return (
//     <div className="min-h-screen relative overflow-hidden">
//       {/* Sacred Background with Blue & Gold Theme */}
//       <div className="fixed inset-0 z-0">
//         {/* Pure white base with subtle blue undertones */}
//         <div className="absolute inset-0 bg-white"></div>
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-blue-50/20"></div>
        
//         {/* Sacred geometry overlay with blue and gold accents */}
//         <div className="absolute inset-0 opacity-5 md:opacity-8">
//           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-200/40 to-transparent transform rotate-12"></div>
//           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-200/30 to-transparent transform -rotate-12"></div>
//         </div>
        
//         {/* Spiritual sacred geometry - blue and gold circles */}
//         {!isMobile && (
//           <div className="absolute inset-0 opacity-6">
//             <div className="absolute top-32 left-32 w-48 h-48 border border-blue-300/50 rounded-full animate-spin-slow"></div>
//             <div className="absolute top-64 right-64 w-24 h-24 border border-yellow-400/50 rounded-full animate-pulse-slow"></div>
//             <div className="absolute bottom-48 left-1/4 w-36 h-36 border border-blue-400/40 rounded-full animate-spin-reverse"></div>
//           </div>
//         )}
        
//         {/* Floating spiritual elements in blue and gold */}
//         <div className="absolute inset-0">
//           {[...Array(isMobile ? 6 : 12)].map((_, i) => (
//             <div
//               key={i}
//               className={`absolute w-1 h-1 rounded-full opacity-20 animate-float ${
//                 i % 2 === 0 ? 'bg-blue-400' : 'bg-yellow-400'
//               }`}
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
//         {/* Sacred Header with Blue & Gold Design */}
//         <div className="relative overflow-hidden bg-white/90 backdrop-blur-sm border-b border-blue-200/50">
//           <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12 text-center">
//             <div className="mb-4 md:mb-6">
//               {/* Sacred symbol with blue to gold gradient */}
//               <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-blue-600 to-yellow-500 mb-3 md:mb-4 shadow-lg">
//                 <div className="relative">
//                   <Circle className="w-4 h-4 md:w-6 md:h-6 text-white animate-spin-slow" />
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-white rounded-full animate-pulse"></div>
//                   </div>
//                 </div>
//               </div>
              
//               {/* Time-based greeting with gold accents */}
//               <div className="flex items-center justify-center space-x-2 mb-3 md:mb-4">
//                 <TimeIcon className="w-4 h-4 md:w-5 md:h-5 text-yellow-600 animate-pulse" />
//                 <span className="text-blue-800 text-sm md:text-base font-medium tracking-wide">
//                   {timeTheme.greeting}
//                 </span>
//                 <TimeIcon className="w-4 h-4 md:w-5 md:h-5 text-yellow-600 animate-pulse" />
//               </div>
//             </div>

//             <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-blue-800 via-blue-700 to-yellow-600 bg-clip-text text-transparent tracking-tight">
//               Global Prayer Unity
//             </h1>
            
//             <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4 md:mb-6 max-w-2xl mx-auto leading-relaxed px-2">
//               Connect hearts worldwide through sacred prayers. Experience unity beyond borders 
//               as we share compassion, wisdom, and hope together.
//             </p>
            
//             {/* Live spiritual counter with blue/gold theme */}
//             <div className="inline-flex items-center space-x-2 sm:space-x-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 sm:px-6 sm:py-3 border border-blue-200 shadow-lg">
//               <div className="flex items-center space-x-1 sm:space-x-2">
//                 <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-gradient-to-r from-blue-500 to-yellow-500 rounded-full animate-pulse"></div>
//                 <span className="text-xs sm:text-sm text-gray-800 font-medium">{allPrayers.length} Active Prayers</span>
//               </div>
//               <div className="w-px h-3 sm:h-4 bg-blue-300"></div>
//               <div className="flex items-center space-x-1 sm:space-x-2">
//                 <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 animate-spin-slow" />
//                 <span className="text-xs sm:text-sm text-gray-700">Worldwide Unity</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Sacred Components Section */}
//         <div className="relative py-6 md:py-8">
//           <div className="max-w-6xl mx-auto px-4 sm:px-6">
//             {/* Elegant divider with blue and gold */}
//             <div className="flex items-center justify-center mb-6 md:mb-8">
//               <div className="flex items-center space-x-2 md:space-x-3">
//                 <div className="w-8 md:w-16 h-px bg-gradient-to-r from-transparent via-blue-400 to-blue-500"></div>
//                 <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-500 animate-pulse" />
//                 <div className="w-3 md:w-6 h-px bg-yellow-400"></div>
//                 <Heart className="w-3 h-3 md:w-4 md:h-4 text-blue-600 animate-pulse" />
//                 <div className="w-3 md:w-6 h-px bg-yellow-400"></div>
//                 <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-500 animate-pulse" />
//                 <div className="w-8 md:w-16 h-px bg-gradient-to-r from-blue-500 via-blue-400 to-transparent"></div>
//               </div>
//             </div>

//             {/* Responsive Component Grid with Blue/Gold Cards */}
//             <div className="space-y-6 md:space-y-8">
//               {/* First Row - World Map (Full Width) */}
//               <div className="transform hover:scale-[1.01] md:hover:scale-[1.02] transition-all duration-500 ease-out">
//                 <div className="bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-blue-200/60 shadow-lg hover:shadow-xl hover:border-yellow-300/60 transition-all duration-300">
//                   <WorldPrayerMap />
//                 </div>
//               </div>

//               {/* Second Row - Unity & Wisdom (Stack on mobile) */}
//               <div className="grid grid-cols-1 md:grid-cols-1 gap-4 md:gap-6">
//                 <div className="transform hover:scale-[1.01] md:hover:scale-[1.02] transition-all duration-500 ease-out">
//                   <div className="bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-blue-200/60 shadow-lg hover:shadow-xl hover:border-yellow-300/60 transition-all duration-300 h-full">
//                     <UnityCounter />
//                   </div>
//                 </div>
//                 <div className="transform hover:scale-[1.01] md:hover:scale-[1.02] transition-all duration-500 ease-out">
//                   <div className="bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-blue-200/60 shadow-lg hover:shadow-xl hover:border-yellow-300/60 transition-all duration-300 h-full">
//                     <WisdomCorner />
//                   </div>
//                 </div>
//               </div>

//               {/* Third Row - Prayer Intentions (Full Width) */}
//               <div className="transform hover:scale-[1.01] md:hover:scale-[1.02] transition-all duration-500 ease-out">
//                 <div className="bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-blue-200/60 shadow-lg hover:shadow-xl hover:border-yellow-300/60 transition-all duration-300">
//                   <PrayerIntentions 
//                     activePrayers={activePrayers}
//                     onCategoryChange={handleFilter}
//                     isMobile={isMobile}
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Elegant Transition to Prayer Wall with Blue/Gold Theme */}
//             <div className="flex items-center justify-center my-8 md:my-12">
//               <div className="flex items-center space-x-2 md:space-x-4">
//                 <div className="w-12 md:w-24 h-px bg-gradient-to-r from-transparent via-blue-300 to-blue-400"></div>
//                 <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 md:p-3 border border-yellow-300 shadow-lg">
//                   <Heart className="w-4 h-4 md:w-6 md:h-6 text-blue-600 animate-pulse" />
//                 </div>
//                 <div className="w-12 md:w-24 h-px bg-gradient-to-r from-blue-400 via-blue-300 to-transparent"></div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Prayer Wall Section with Blue Gradient */}
//         <div className="relative bg-gradient-to-t from-blue-50/40 to-transparent pt-2 md:pt-4">
//           <PrayerWall 
//             prayers={activePrayers}
//             filters={filterCategories}
//             onFilterChange={handleFilter}
//             isMobile={isMobile}
//           />
//         </div>
//       </div>

//       {/* Custom Sacred Animations - Enhanced for Blue/Gold Theme */}
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
        
//         @keyframes glow {
//           0%, 100% { box-shadow: 0 0 5px rgba(59, 130, 246, 0.3); }
//           50% { box-shadow: 0 0 20px rgba(251, 191, 36, 0.4), 0 0 30px rgba(59, 130, 246, 0.2); }
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
        
//         .animate-glow {
//           animation: glow 3s ease-in-out infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default PrayerWallPage




import React, { useState, useEffect } from 'react';
import { Heart, Globe, Users, Lightbulb, Star, Sun, Moon, Sparkles, Circle } from 'lucide-react';

import WorldPrayerMap from '../components/prayer/WorldPrayerMap';
import UnityCounter from '../components/prayer/UnityCounter';
import WisdomCorner from '../components/prayer/WisdomCorner';
import PrayerIntentions from '../components/prayer/PrayerIntentions';
import PrayerWall from '../components/prayer/PrayerWall';
import { prayerDatabase } from '../data/samplePrayers';

const PrayerWallPage = () => {
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
        gradient: "from-yellow-400 via-amber-500 to-yellow-600",
        accent: "from-amber-400 to-yellow-500"
      };
    } else if (hour >= 12 && hour < 18) {
      return {
        greeting: "Midday Devotions", 
        icon: Sun,
        gradient: "from-blue-400 via-blue-600 to-blue-800",
        accent: "from-blue-500 to-blue-700"
      };
    } else {
      return {
        greeting: "Evening Reflections",
        icon: Moon,
        gradient: "from-blue-800 via-blue-900 to-indigo-900",
        accent: "from-blue-600 to-indigo-700"
      };
    }
  };

  const timeTheme = getTimeBasedTheme();
  const TimeIcon = timeTheme.icon;

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Sacred Background with Blue & Gold Theme */}
      <div className="fixed inset-0 z-0">
        {/* Pure white base with subtle blue undertones */}
        <div className="absolute inset-0 bg-white"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-blue-50/20"></div>
        
        {/* Sacred geometry overlay with blue and gold accents */}
        <div className="absolute inset-0 opacity-5 md:opacity-8">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-200/40 to-transparent transform rotate-12"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-200/30 to-transparent transform -rotate-12"></div>
        </div>
        
        {/* Spiritual sacred geometry - blue and gold circles */}
        {!isMobile && (
          <div className="absolute inset-0 opacity-6">
            <div className="absolute top-32 left-32 w-48 h-48 border border-blue-300/50 rounded-full animate-spin-slow"></div>
            <div className="absolute top-64 right-64 w-24 h-24 border border-yellow-400/50 rounded-full animate-pulse-slow"></div>
            <div className="absolute bottom-48 left-1/4 w-36 h-36 border border-blue-400/40 rounded-full animate-spin-reverse"></div>
          </div>
        )}
        
        {/* Floating spiritual elements in blue and gold */}
        <div className="absolute inset-0">
          {[...Array(isMobile ? 6 : 12)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 rounded-full opacity-20 animate-float ${
                i % 2 === 0 ? 'bg-blue-400' : 'bg-yellow-400'
              }`}
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
      <div className="relative z-10 mt-1">
        {/* Sacred Header with Blue & Gold Design */}
       <div className="relative overflow-hidden bg-white/10 backdrop-blur-sm border-b border-blue-200/50">
  {/* Background Image with Overlay */}
  <div className="absolute inset-0 z-0">
    <img 
      src="/images/pray-8955502_1920.jpg" 
      alt="Sacred mountain background"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-blue-800/50 to-blue-900/70"></div>
  </div>
  
  <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12 text-center">
    <div className="mb-4 md:mb-6">
      {/* Sacred symbol with blue to gold gradient */}
      <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-blue-600 to-yellow-500 mb-3 md:mb-4 shadow-lg backdrop-blur-sm">
        <div className="relative">
          <Circle className="w-4 h-4 md:w-6 md:h-6 text-white animate-spin-slow" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
      
      {/* Time-based greeting with gold accents */}
      <div className="flex items-center justify-center space-x-2 mb-3 md:mb-4">
        <TimeIcon className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 animate-pulse" />
        <span className="text-white/90 text-sm md:text-base font-medium tracking-wide drop-shadow-sm">
          {timeTheme.greeting}
        </span>
        <TimeIcon className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 animate-pulse" />
      </div>
    </div>

    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-white via-amber-100 to-yellow-300 bg-clip-text text-transparent tracking-tight drop-shadow-md">
      Global Prayer Unity
    </h1>
    
    <p className="text-sm sm:text-base md:text-lg text-white/90 mb-4 md:mb-6 max-w-2xl mx-auto leading-relaxed px-2 drop-shadow-sm">
      Connect hearts worldwide through sacred prayers. Experience unity beyond borders 
      as we share compassion, wisdom, and hope together.
    </p>
    
    {/* Live spiritual counter with blue/gold theme */}
    <div className="inline-flex items-center space-x-2 sm:space-x-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 sm:px-6 sm:py-3 border border-blue-200/50 shadow-lg">
      <div className="flex items-center space-x-1 sm:space-x-2">
        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-gradient-to-r from-blue-500 to-yellow-500 rounded-full animate-pulse"></div>
        <span className="text-xs sm:text-sm text-gray-800 font-medium">{allPrayers.length} Active Prayers</span>
      </div>
      <div className="w-px h-3 sm:h-4 bg-blue-300/70"></div>
      <div className="flex items-center space-x-1 sm:space-x-2">
        <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 animate-spin-slow" />
        <span className="text-xs sm:text-sm text-gray-700">Worldwide Unity</span>
      </div>
    </div>
  </div>
</div>

        {/* Sacred Components Section */}
        <div className="relative py-6 md:py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            {/* Elegant divider with blue and gold */}
            <div className="flex items-center justify-center mb-6 md:mb-8">
              <div className="flex items-center space-x-2 md:space-x-3">
                <div className="w-8 md:w-16 h-px bg-gradient-to-r from-transparent via-blue-400 to-blue-500"></div>
                <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-500 animate-pulse" />
                <div className="w-3 md:w-6 h-px bg-yellow-400"></div>
                <Heart className="w-3 h-3 md:w-4 md:h-4 text-blue-600 animate-pulse" />
                <div className="w-3 md:w-6 h-px bg-yellow-400"></div>
                <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-500 animate-pulse" />
                <div className="w-8 md:w-16 h-px bg-gradient-to-r from-blue-500 via-blue-400 to-transparent"></div>
              </div>
            </div>

            {/* Responsive Component Grid with Blue/Gold Cards */}
            <div className="space-y-6 md:space-y-8">
              {/* First Row - World Map (Full Width) */}
              <div className="transform hover:scale-[1.01] md:hover:scale-[1.02] transition-all duration-500 ease-out">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-blue-200/60 shadow-lg hover:shadow-xl hover:border-yellow-300/60 transition-all duration-300">
                  <WorldPrayerMap />
                </div>
              </div>

              {/* Second Row - Unity & Wisdom (Stack on mobile) */}
              <div className="grid grid-cols-1 md:grid-cols-1 gap-4 md:gap-6">
                <div className="transform hover:scale-[1.01] md:hover:scale-[1.02] transition-all duration-500 ease-out">
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-blue-200/60 shadow-lg hover:shadow-xl hover:border-yellow-300/60 transition-all duration-300 h-full">
                    <UnityCounter />
                  </div>
                </div>
                <div className="transform hover:scale-[1.01] md:hover:scale-[1.02] transition-all duration-500 ease-out">
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-blue-200/60 shadow-lg hover:shadow-xl hover:border-yellow-300/60 transition-all duration-300 h-full">
                    <WisdomCorner />
                  </div>
                </div>
              </div>

              {/* Third Row - Prayer Intentions (Full Width) */}
              <div className="transform hover:scale-[1.01] md:hover:scale-[1.02] transition-all duration-500 ease-out">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-blue-200/60 shadow-lg hover:shadow-xl hover:border-yellow-300/60 transition-all duration-300">
                  <PrayerIntentions 
                    activePrayers={activePrayers}
                    onCategoryChange={handleFilter}
                    isMobile={isMobile}
                  />
                </div>
              </div>
            </div>

            {/* Elegant Transition to Prayer Wall with Blue/Gold Theme */}
            <div className="flex items-center justify-center my-8 md:my-12">
              <div className="flex items-center space-x-2 md:space-x-4">
                <div className="w-12 md:w-24 h-px bg-gradient-to-r from-transparent via-blue-300 to-blue-400"></div>
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 md:p-3 border border-yellow-300 shadow-lg">
                  <Heart className="w-4 h-4 md:w-6 md:h-6 text-blue-600 animate-pulse" />
                </div>
                <div className="w-12 md:w-24 h-px bg-gradient-to-r from-blue-400 via-blue-300 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Prayer Wall Section with Blue Gradient */}
        <div className="relative bg-gradient-to-t from-blue-50/40 to-transparent pt-2 md:pt-4">
          <PrayerWall 
            prayers={activePrayers}
            filters={filterCategories}
            onFilterChange={handleFilter}
            isMobile={isMobile}
          />
        </div>
      </div>

      {/* Custom Sacred Animations - Enhanced for Blue/Gold Theme */}
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
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 5px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 20px rgba(251, 191, 36, 0.4), 0 0 30px rgba(59, 130, 246, 0.2); }
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
        
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default PrayerWallPage;