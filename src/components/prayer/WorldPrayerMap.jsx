// import React, { useState, useEffect } from 'react';
// import { Globe, Heart, Star, Sun, Moon, MapPin } from 'lucide-react';

// const WorldPrayerMap = () => {
//   const [activePrayers, setActivePrayers] = useState([]);
//   const [selectedRegion, setSelectedRegion] = useState(null);
//   const [glowingDots, setGlowingDots] = useState([]);

//   // Sample prayer locations with spiritual data
//   const prayerLocations = [
//     { id: 1, country: 'India', city: 'Varanasi', lat: 25.3, lng: 83.0, prayers: 1247, culture: 'hindu', timezone: 'IST' },
//     { id: 2, country: 'Japan', city: 'Kyoto', lat: 35.0, lng: 135.8, prayers: 892, culture: 'buddhist', timezone: 'JST' },
//     { id: 3, country: 'Vatican', city: 'Vatican City', lat: 41.9, lng: 12.5, prayers: 2341, culture: 'christian', timezone: 'CET' },
//     { id: 4, country: 'Saudi Arabia', city: 'Mecca', lat: 21.4, lng: 39.8, prayers: 3456, culture: 'islamic', timezone: 'AST' },
//     { id: 5, country: 'Israel', city: 'Jerusalem', lat: 31.8, lng: 35.2, prayers: 1876, culture: 'jewish', timezone: 'IST' },
//     { id: 6, country: 'Tibet', city: 'Lhasa', lat: 29.7, lng: 91.1, prayers: 567, culture: 'tibetan', timezone: 'CST' },
//     { id: 7, country: 'USA', city: 'Salt Lake City', lat: 40.8, lng: -111.9, prayers: 743, culture: 'interfaith', timezone: 'MST' },
//     { id: 8, country: 'Brazil', city: 'São Paulo', lat: -23.6, lng: -46.7, prayers: 1234, culture: 'catholic', timezone: 'BRT' },
//     { id: 9, country: 'Egypt', city: 'Cairo', lat: 30.0, lng: 31.2, prayers: 987, culture: 'islamic', timezone: 'EET' },
//     { id: 10, country: 'Thailand', city: 'Bangkok', lat: 13.8, lng: 100.5, prayers: 654, culture: 'buddhist', timezone: 'ICT' }
//   ];

//   // Cultural color themes
//   const cultureColors = {
//     hindu: 'from-orange-400 via-red-500 to-pink-500',
//     buddhist: 'from-yellow-400 via-orange-500 to-red-500',
//     christian: 'from-blue-400 via-purple-500 to-indigo-600',
//     islamic: 'from-green-400 via-emerald-500 to-teal-600',
//     jewish: 'from-blue-300 via-blue-500 to-indigo-700',
//     tibetan: 'from-purple-400 via-violet-500 to-purple-600',
//     interfaith: 'from-rainbow-400 via-pink-500 to-purple-500',
//     catholic: 'from-gold-400 via-yellow-500 to-amber-600'
//   };

//   // Initialize glowing animations
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setGlowingDots(prev => {
//         const newDots = [...prev];
//         // Add random glowing effect to prayer locations
//         const randomLocation = prayerLocations[Math.floor(Math.random() * prayerLocations.length)];
//         if (!newDots.includes(randomLocation.id)) {
//           newDots.push(randomLocation.id);
//           setTimeout(() => {
//             setGlowingDots(current => current.filter(id => id !== randomLocation.id));
//           }, 3000);
//         }
//         return newDots.slice(-3); // Keep only last 3 glowing
//       });
//     }, 2000);

//     return () => clearInterval(interval);
//   }, []);

//   // Simulate real-time prayer updates
//   useEffect(() => {
//     const prayerInterval = setInterval(() => {
//       const newPrayer = {
//         id: Date.now(),
//         location: prayerLocations[Math.floor(Math.random() * prayerLocations.length)],
//         timestamp: new Date(),
//         intention: ['World Peace', 'Healing', 'Compassion', 'Unity', 'Wisdom'][Math.floor(Math.random() * 5)]
//       };
      
//       setActivePrayers(prev => [newPrayer, ...prev.slice(0, 4)]);
//     }, 4000);

//     return () => clearInterval(prayerInterval);
//   }, []);

//   const handleRegionClick = (location) => {
//     setSelectedRegion(location);
//   };

//   return (
//     <div className="relative w-full h-96 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 rounded-3xl overflow-hidden shadow-2xl">
//       {/* Animated Background Stars */}
//       <div className="absolute inset-0">
//         {[...Array(50)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 3}s`,
//               animationDuration: `${2 + Math.random() * 3}s`
//             }}
//           />
//         ))}
//       </div>

//       {/* Header */}
//       <div className="absolute top-4 left-6 z-20">
//         <div className="flex items-center space-x-3">
//           <div className="p-2 bg-white/10 backdrop-blur-md rounded-full">
//             <Globe className="w-6 h-6 text-white animate-spin" style={{ animationDuration: '20s' }} />
//           </div>
//           <div>
//             <h3 className="text-white font-bold text-lg">Global Prayer Network</h3>
//             <p className="text-white/70 text-sm">Unity Through Divine Connection</p>
//           </div>
//         </div>
//       </div>

//       {/* World Map Container */}
//       <div className="absolute inset-6 top-16">
//         <div className="relative w-full h-full bg-gradient-to-r from-blue-800/20 to-purple-800/20 rounded-2xl border border-white/10 backdrop-blur-sm">
          
//           {/* Prayer Location Dots */}
//           {prayerLocations.map((location) => (
//             <div
//               key={location.id}
//               className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
//               style={{
//                 left: `${((location.lng + 180) / 360) * 100}%`,
//                 top: `${((90 - location.lat) / 180) * 100}%`
//               }}
//               onClick={() => handleRegionClick(location)}
//             >
//               {/* Glowing Prayer Dot */}
//               <div className={`relative w-4 h-4 rounded-full bg-gradient-to-r ${cultureColors[location.culture] || 'from-white to-yellow-300'} 
//                 ${glowingDots.includes(location.id) ? 'animate-ping scale-150' : ''} 
//                 group-hover:scale-125 transition-all duration-300 shadow-lg`}>
                
//                 {/* Pulsing Ring */}
//                 <div className="absolute inset-0 rounded-full bg-white/30 animate-pulse"></div>
                
//                 {/* Prayer Count Badge */}
//                 <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <div className="bg-black/80 text-white text-xs px-2 py-1 rounded-lg whitespace-nowrap">
//                     <div className="font-bold">{location.city}</div>
//                     <div className="text-yellow-300">{location.prayers} prayers</div>
//                   </div>
//                 </div>
//               </div>

//               {/* Ripple Effect for Active Prayers */}
//               {glowingDots.includes(location.id) && (
//                 <div className="absolute inset-0 w-4 h-4 rounded-full border-2 border-white/50 animate-ping"></div>
//               )}
//             </div>
//           ))}

//           {/* Connection Lines */}
//           <svg className="absolute inset-0 w-full h-full pointer-events-none">
//             {prayerLocations.map((location, index) => {
//               if (index === 0) return null;
//               const prevLocation = prayerLocations[index - 1];
//               return (
//                 <line
//                   key={`line-${location.id}`}
//                   x1={`${((prevLocation.lng + 180) / 360) * 100}%`}
//                   y1={`${((90 - prevLocation.lat) / 180) * 100}%`}
//                   x2={`${((location.lng + 180) / 360) * 100}%`}
//                   y2={`${((90 - location.lat) / 180) * 100}%`}
//                   stroke="rgba(255,255,255,0.1)"
//                   strokeWidth="1"
//                   strokeDasharray="2,2"
//                   className="animate-pulse"
//                 />
//               );
//             })}
//           </svg>
//         </div>
//       </div>

//       {/* Live Prayer Feed */}
//       <div className="absolute bottom-4 right-6 w-80 z-20">
//         <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
//           <div className="flex items-center space-x-2 mb-3">
//             <Heart className="w-4 h-4 text-red-400 animate-pulse" />
//             <span className="text-white font-semibold text-sm">Live Prayers</span>
//           </div>
          
//           <div className="space-y-2 max-h-32 overflow-hidden">
//             {activePrayers.slice(0, 3).map((prayer, index) => (
//               <div 
//                 key={prayer.id}
//                 className="flex items-center space-x-3 text-white/80 text-xs animate-fade-in"
//                 style={{ animationDelay: `${index * 0.2}s` }}
//               >
//                 <MapPin className="w-3 h-3 text-yellow-400 flex-shrink-0" />
//                 <div className="flex-1">
//                   <span className="font-medium">{prayer.location.city}</span>
//                   <span className="text-white/60"> • {prayer.intention}</span>
//                 </div>
//                 <div className="text-white/40 text-xs">
//                   {prayer.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Selected Region Details */}
//       {selectedRegion && (
//         <div className="absolute top-20 left-6 z-30">
//           <div className="bg-white/15 backdrop-blur-md rounded-2xl p-4 border border-white/20 min-w-64">
//             <div className="flex items-center justify-between mb-3">
//               <h4 className="text-white font-bold">{selectedRegion.city}</h4>
//               <button 
//                 onClick={() => setSelectedRegion(null)}
//                 className="text-white/60 hover:text-white"
//               >
//                 ✕
//               </button>
//             </div>
            
//             <div className="space-y-2 text-white/80 text-sm">
//               <div className="flex items-center space-x-2">
//                 <Star className="w-4 h-4 text-yellow-400" />
//                 <span>{selectedRegion.prayers} Active Prayers</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Sun className="w-4 h-4 text-orange-400" />
//                 <span>Culture: {selectedRegion.culture}</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <MapPin className="w-4 h-4 text-blue-400" />
//                 <span>{selectedRegion.country}</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Floating Spiritual Elements */}
//       <div className="absolute inset-0 pointer-events-none">
//         {[...Array(8)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute text-white/20 animate-float"
//             style={{
//               left: `${Math.random() * 90}%`,
//               top: `${Math.random() * 80}%`,
//               animationDelay: `${Math.random() * 5}s`,
//               animationDuration: `${6 + Math.random() * 4}s`
//             }}
//           >
//             {['🕊️', '🙏', '✨', '💫', '🌟', '❤️'][Math.floor(Math.random() * 6)]}
//           </div>
//         ))}
//       </div>

//       <style jsx>{`
//         @keyframes fade-in {
//           from { opacity: 0; transform: translateY(10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
        
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-20px) rotate(180deg); }
//         }
        
//         .animate-fade-in {
//           animation: fade-in 0.6s ease-out forwards;
//         }
        
//         .animate-float {
//           animation: float 8s ease-in-out infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default WorldPrayerMap;


import React, { useState, useEffect } from 'react';
import { Globe, Heart, Star, Sun, Moon, MapPin } from 'lucide-react';

const WorldPrayerMap = () => {
  const [activePrayers, setActivePrayers] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [glowingDots, setGlowingDots] = useState([]);

  // Sample prayer locations with spiritual data
  const prayerLocations = [
    { id: 1, country: 'India', city: 'Varanasi', lat: 25.3, lng: 83.0, prayers: 1247, culture: 'hindu', timezone: 'IST' },
    { id: 2, country: 'Japan', city: 'Kyoto', lat: 35.0, lng: 135.8, prayers: 892, culture: 'buddhist', timezone: 'JST' },
    { id: 3, country: 'Vatican', city: 'Vatican City', lat: 41.9, lng: 12.5, prayers: 2341, culture: 'christian', timezone: 'CET' },
    { id: 4, country: 'Saudi Arabia', city: 'Mecca', lat: 21.4, lng: 39.8, prayers: 3456, culture: 'islamic', timezone: 'AST' },
    { id: 5, country: 'Israel', city: 'Jerusalem', lat: 31.8, lng: 35.2, prayers: 1876, culture: 'jewish', timezone: 'IST' },
    { id: 6, country: 'Tibet', city: 'Lhasa', lat: 29.7, lng: 91.1, prayers: 567, culture: 'tibetan', timezone: 'CST' },
    { id: 7, country: 'USA', city: 'Salt Lake City', lat: 40.8, lng: -111.9, prayers: 743, culture: 'interfaith', timezone: 'MST' },
    { id: 8, country: 'Brazil', city: 'São Paulo', lat: -23.6, lng: -46.7, prayers: 1234, culture: 'catholic', timezone: 'BRT' },
    { id: 9, country: 'Egypt', city: 'Cairo', lat: 30.0, lng: 31.2, prayers: 987, culture: 'islamic', timezone: 'EET' },
    { id: 10, country: 'Thailand', city: 'Bangkok', lat: 13.8, lng: 100.5, prayers: 654, culture: 'buddhist', timezone: 'ICT' }
  ];

  // Cultural color themes with blue and gold spiritual palette
  const cultureColors = {
    hindu: 'from-amber-400 via-yellow-500 to-orange-500',
    buddhist: 'from-yellow-400 via-amber-500 to-yellow-600',
    christian: 'from-blue-400 via-blue-600 to-blue-800',
    islamic: 'from-blue-500 via-blue-700 to-indigo-800',
    jewish: 'from-blue-300 via-blue-500 to-blue-700',
    tibetan: 'from-amber-300 via-yellow-500 to-amber-600',
    interfaith: 'from-blue-400 via-amber-500 to-blue-600',
    catholic: 'from-amber-400 via-yellow-500 to-amber-600'
  };

  // Initialize glowing animations
  useEffect(() => {
    const interval = setInterval(() => {
      setGlowingDots(prev => {
        const newDots = [...prev];
        // Add random glowing effect to prayer locations
        const randomLocation = prayerLocations[Math.floor(Math.random() * prayerLocations.length)];
        if (!newDots.includes(randomLocation.id)) {
          newDots.push(randomLocation.id);
          setTimeout(() => {
            setGlowingDots(current => current.filter(id => id !== randomLocation.id));
          }, 3000);
        }
        return newDots.slice(-3); // Keep only last 3 glowing
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Simulate real-time prayer updates
  useEffect(() => {
    const prayerInterval = setInterval(() => {
      const newPrayer = {
        id: Date.now(),
        location: prayerLocations[Math.floor(Math.random() * prayerLocations.length)],
        timestamp: new Date(),
        intention: ['World Peace', 'Healing', 'Compassion', 'Unity', 'Wisdom'][Math.floor(Math.random() * 5)]
      };
      
      setActivePrayers(prev => [newPrayer, ...prev.slice(0, 4)]);
    }, 4000);

    return () => clearInterval(prayerInterval);
  }, []);

  const handleRegionClick = (location) => {
    setSelectedRegion(location);
  };

  return (
    <div className="relative w-full h-96 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 rounded-3xl overflow-hidden shadow-2xl border border-blue-200/20">
      {/* Animated Background Stars with golden glow */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-amber-300 rounded-full animate-pulse shadow-sm shadow-amber-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Divine Light Rays */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-amber-500/5 to-transparent opacity-30"></div>

      {/* Header with spiritual theme */}
      <div className="absolute top-4 left-6 z-20">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-white/15 backdrop-blur-md rounded-full border border-amber-300/20 shadow-lg shadow-blue-900/20">
            <Globe className="w-6 h-6 text-amber-300 animate-spin drop-shadow-md" style={{ animationDuration: '20s' }} />
          </div>
          <div>
            <h3 className="text-white font-bold text-lg drop-shadow-md">Global Prayer Network</h3>
            <p className="text-amber-200/80 text-sm">Unity Through Divine Connection</p>
          </div>
        </div>
      </div>

      {/* World Map Container with spiritual styling */}
      <div className="absolute inset-6 top-16">
        <div className="relative w-full h-full bg-gradient-to-r from-blue-800/30 to-blue-700/20 rounded-2xl border border-amber-300/20 backdrop-blur-sm shadow-inner">
          
          {/* Prayer Location Dots with enhanced spiritual glow */}
          {prayerLocations.map((location) => (
            <div
              key={location.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              style={{
                left: `${((location.lng + 180) / 360) * 100}%`,
                top: `${((90 - location.lat) / 180) * 100}%`
              }}
              onClick={() => handleRegionClick(location)}
            >
              {/* Enhanced Glowing Prayer Dot */}
              <div className={`relative w-4 h-4 rounded-full bg-gradient-to-r ${cultureColors[location.culture] || 'from-amber-300 to-yellow-400'} 
                ${glowingDots.includes(location.id) ? 'animate-ping scale-150 shadow-lg shadow-amber-400/50' : ''} 
                group-hover:scale-125 transition-all duration-300 shadow-md shadow-amber-400/30 border border-amber-200/30`}>
                
                {/* Divine Pulsing Ring */}
                <div className="absolute inset-0 rounded-full bg-amber-300/40 animate-pulse"></div>
                
                {/* Prayer Count Badge with spiritual styling */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-blue-900/90 text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap border border-amber-300/20 shadow-lg backdrop-blur-sm">
                    <div className="font-bold text-amber-200">{location.city}</div>
                    <div className="text-amber-300">{location.prayers} prayers</div>
                  </div>
                </div>
              </div>

              {/* Enhanced Ripple Effect for Active Prayers */}
              {glowingDots.includes(location.id) && (
                <div className="absolute inset-0 w-4 h-4 rounded-full border-2 border-amber-300/60 animate-ping shadow-md shadow-amber-400/40"></div>
              )}
            </div>
          ))}

          {/* Connection Lines with spiritual glow */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {prayerLocations.map((location, index) => {
              if (index === 0) return null;
              const prevLocation = prayerLocations[index - 1];
              return (
                <line
                  key={`line-${location.id}`}
                  x1={`${((prevLocation.lng + 180) / 360) * 100}%`}
                  y1={`${((90 - prevLocation.lat) / 180) * 100}%`}
                  x2={`${((location.lng + 180) / 360) * 100}%`}
                  y2={`${((90 - location.lat) / 180) * 100}%`}
                  stroke="rgba(251, 191, 36, 0.2)"
                  strokeWidth="1"
                  strokeDasharray="2,2"
                  className="animate-pulse drop-shadow-sm"
                />
              );
            })}
          </svg>
        </div>
      </div>

      {/* Live Prayer Feed with spiritual styling */}
      <div className="absolute bottom-4 right-6 w-80 z-20">
        <div className="bg-white/15 backdrop-blur-md rounded-2xl p-4 border border-amber-300/20 shadow-xl shadow-blue-900/20">
          <div className="flex items-center space-x-2 mb-3">
            <Heart className="w-4 h-4 text-amber-400 animate-pulse drop-shadow-sm" />
            <span className="text-white font-semibold text-sm drop-shadow-sm">Live Prayers</span>
            <div className="ml-auto w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
          </div>
          
          <div className="space-y-2 max-h-32 overflow-hidden">
            {activePrayers.slice(0, 3).map((prayer, index) => (
              <div 
                key={prayer.id}
                className="flex items-center space-x-3 text-white/90 text-xs animate-fade-in bg-blue-800/20 rounded-lg p-2 border border-blue-700/20"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <MapPin className="w-3 h-3 text-amber-400 flex-shrink-0 drop-shadow-sm" />
                <div className="flex-1">
                  <span className="font-medium text-amber-200">{prayer.location.city}</span>
                  <span className="text-white/70"> • {prayer.intention}</span>
                </div>
                <div className="text-amber-300/70 text-xs">
                  {prayer.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Selected Region Details with enhanced spiritual styling */}
      {selectedRegion && (
        <div className="absolute top-20 left-6 z-30">
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 border border-amber-300/30 min-w-64 shadow-xl shadow-blue-900/30">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-white font-bold drop-shadow-sm">{selectedRegion.city}</h4>
              <button 
                onClick={() => setSelectedRegion(null)}
                className="text-amber-300/80 hover:text-amber-200 transition-colors duration-200"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-2 text-white/90 text-sm">
              <div className="flex items-center space-x-2 bg-blue-800/20 rounded-lg p-2">
                <Star className="w-4 h-4 text-amber-400 drop-shadow-sm" />
                <span>{selectedRegion.prayers} Active Prayers</span>
              </div>
              <div className="flex items-center space-x-2 bg-blue-800/20 rounded-lg p-2">
                <Sun className="w-4 h-4 text-amber-400 drop-shadow-sm" />
                <span>Culture: <span className="text-amber-200 capitalize">{selectedRegion.culture}</span></span>
              </div>
              <div className="flex items-center space-x-2 bg-blue-800/20 rounded-lg p-2">
                <MapPin className="w-4 h-4 text-amber-400 drop-shadow-sm" />
                <span>{selectedRegion.country}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Spiritual Elements with enhanced styling */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-amber-300/30 animate-float drop-shadow-lg text-lg"
            style={{
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 80}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          >
            {['🕊️', '🙏', '✨', '💫', '🌟', '❤️'][Math.floor(Math.random() * 6)]}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default WorldPrayerMap;