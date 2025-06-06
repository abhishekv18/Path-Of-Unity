// import React, { useState, useEffect } from 'react';
// import { Users, Globe, Heart, Star, TrendingUp, Clock, MapPin, Sparkles } from 'lucide-react';

// const UnityCounter = () => {
//   const [counters, setCounters] = useState({
//     totalPrayers: 0,
//     activeCountries: 0,
//     currentPraying: 0,
//     dailyGoal: 0,
//     weeklyMilestone: 0,
//     compassionIndex: 0
//   });

//   const [recentActivity, setRecentActivity] = useState([]);
//   const [animatingCounters, setAnimatingCounters] = useState(new Set());

//   // Target values for counters
//   const targetValues = {
//     totalPrayers: 124567,
//     activeCountries: 89,
//     currentPraying: 2847,
//     dailyGoal: 85,
//     weeklyMilestone: 67,
//     compassionIndex: 94
//   };

//   // Countries with recent prayer activity
//   const countries = [
//     { name: 'India', flag: '🇮🇳', prayers: 28456, trend: '+12%' },
//     { name: 'USA', flag: '🇺🇸', prayers: 15234, trend: '+8%' },
//     { name: 'Brazil', flag: '🇧🇷', prayers: 12890, trend: '+15%' },
//     { name: 'Japan', flag: '🇯🇵', prayers: 9876, trend: '+5%' },
//     { name: 'Germany', flag: '🇩🇪', prayers: 8765, trend: '+10%' },
//     { name: 'Egypt', flag: '🇪🇬', prayers: 7654, trend: '+18%' }
//   ];

//   // Animate counters on mount
//   useEffect(() => {
//     const animateCounter = (key, target) => {
//       const duration = 3000;
//       const steps = 60;
//       const increment = target / steps;
//       let current = 0;
//       let step = 0;

//       const timer = setInterval(() => {
//         step++;
//         current = Math.min(Math.floor(increment * step), target);
        
//         setCounters(prev => ({
//           ...prev,
//           [key]: current
//         }));

//         if (current >= target) {
//           clearInterval(timer);
//           setAnimatingCounters(prev => {
//             const newSet = new Set(prev);
//             newSet.delete(key);
//             return newSet;
//           });
//         }
//       }, duration / steps);
//     };

//     // Start animations with delays
//     Object.entries(targetValues).forEach(([key, value], index) => {
//       setAnimatingCounters(prev => new Set([...prev, key]));
//       setTimeout(() => {
//         animateCounter(key, value);
//       }, index * 200);
//     });

//     // Simulate real-time updates
//     const updateInterval = setInterval(() => {
//       setCounters(prev => ({
//         ...prev,
//         totalPrayers: prev.totalPrayers + Math.floor(Math.random() * 5),
//         currentPraying: Math.max(2000, prev.currentPraying + (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 10))
//       }));
//     }, 5000);

//     return () => clearInterval(updateInterval);
//   }, []);

//   // Simulate recent activity updates
//   useEffect(() => {
//     const activities = [
//       { type: 'prayer', country: 'India', action: 'lit a candle for world peace', time: '2 min ago' },
//       { type: 'milestone', country: 'Brazil', action: 'reached 1000 daily prayers', time: '5 min ago' },
//       { type: 'unity', country: 'Global', action: 'connected hearts across 89 countries', time: '8 min ago' },
//       { type: 'wisdom', country: 'Tibet', action: 'shared meditation for healing', time: '12 min ago' },
//       { type: 'compassion', country: 'USA', action: 'prayer circle for brotherhood', time: '15 min ago' }
//     ];

//     const activityInterval = setInterval(() => {
//       const randomActivity = activities[Math.floor(Math.random() * activities.length)];
//       setRecentActivity(prev => [
//         { ...randomActivity, id: Date.now(), time: 'just now' },
//         ...prev.slice(0, 3)
//       ]);
//     }, 8000);

//     // Initialize with some activities
//     setRecentActivity(activities.slice(0, 3).map((activity, index) => ({
//       ...activity,
//       id: Date.now() + index
//     })));

//     return () => clearInterval(activityInterval);
//   }, []);

//   const formatNumber = (num) => {
//     if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
//     if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
//     return num.toLocaleString();
//   };

//   const getActivityIcon = (type) => {
//     switch (type) {
//       case 'prayer': return <Heart className="w-4 h-4 text-red-400" />;
//       case 'milestone': return <Star className="w-4 h-4 text-yellow-400" />;
//       case 'unity': return <Users className="w-4 h-4 text-blue-400" />;
//       case 'wisdom': return <Sparkles className="w-4 h-4 text-purple-400" />;
//       case 'compassion': return <Globe className="w-4 h-4 text-green-400" />;
//       default: return <Heart className="w-4 h-4 text-pink-400" />;
//     }
//   };

//   return (
//     <div className="w-full max-w-6xl mx-auto p-6">
//       {/* Header */}
//       <div className="text-center mb-8">
//         <div className="flex items-center justify-center space-x-3 mb-4">
//           <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg">
//             <Globe className="w-8 h-8 text-white animate-pulse" />
//           </div>
//           <div>
//             <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
//               Global Unity Dashboard
//             </h2>
//             <p className="text-gray-600 mt-1">Connecting hearts and souls worldwide through prayer</p>
//           </div>
//         </div>
//       </div>

//       {/* Main Counter Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        
//         {/* Total Prayers */}
//         <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-6 shadow-xl border border-blue-200/50 hover:shadow-2xl transition-all duration-300">
//           <div className="flex items-center justify-between mb-4">
//             <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl shadow-lg">
//               <Heart className="w-6 h-6 text-white" />
//             </div>
//             <div className="text-right">
//               <div className="text-2xl md:text-3xl font-bold text-blue-800 font-mono">
//                 {formatNumber(counters.totalPrayers)}
//               </div>
//               <div className="text-blue-600 text-sm font-medium">Total Prayers</div>
//             </div>
//           </div>
//           <div className="flex items-center space-x-2">
//             <TrendingUp className="w-4 h-4 text-green-500" />
//             <span className="text-green-600 text-sm font-medium">+2.4K today</span>
//           </div>
//           <div className="mt-3 h-2 bg-blue-200 rounded-full overflow-hidden">
//             <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full animate-pulse" 
//                  style={{ width: '78%' }}></div>
//           </div>
//         </div>

//         {/* Active Countries */}
//         <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl p-6 shadow-xl border border-green-200/50 hover:shadow-2xl transition-all duration-300">
//           <div className="flex items-center justify-between mb-4">
//             <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl shadow-lg">
//               <MapPin className="w-6 h-6 text-white" />
//             </div>
//             <div className="text-right">
//               <div className="text-2xl md:text-3xl font-bold text-green-800 font-mono">
//                 {counters.activeCountries}
//               </div>
//               <div className="text-green-600 text-sm font-medium">Countries United</div>
//             </div>
//           </div>
//           <div className="flex items-center space-x-2">
//             <Globe className="w-4 h-4 text-green-500 animate-spin" style={{ animationDuration: '10s' }} />
//             <span className="text-green-600 text-sm font-medium">All continents</span>
//           </div>
//           <div className="mt-3 flex space-x-1">
//             {countries.slice(0, 6).map((country, index) => (
//               <div key={country.name} 
//                    className="text-lg animate-bounce" 
//                    style={{ animationDelay: `${index * 0.2}s` }}>
//                 {country.flag}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Currently Praying */}
//         <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-3xl p-6 shadow-xl border border-purple-200/50 hover:shadow-2xl transition-all duration-300">
//           <div className="flex items-center justify-between mb-4">
//             <div className="p-3 bg-gradient-to-r from-purple-500 to-violet-600 rounded-2xl shadow-lg">
//               <Users className="w-6 h-6 text-white" />
//             </div>
//             <div className="text-right">
//               <div className="text-2xl md:text-3xl font-bold text-purple-800 font-mono">
//                 {formatNumber(counters.currentPraying)}
//               </div>
//               <div className="text-purple-600 text-sm font-medium">Praying Now</div>
//             </div>
//           </div>
//           <div className="flex items-center space-x-2">
//             <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
//             <span className="text-purple-600 text-sm font-medium">Live connection</span>
//           </div>
//           <div className="mt-3 text-xs text-purple-500">
//             🌍 Real-time global prayer community
//           </div>
//         </div>

//         {/* Daily Goal Progress */}
//         <div className="bg-gradient-to-br from-orange-50 to-amber-100 rounded-3xl p-6 shadow-xl border border-orange-200/50 hover:shadow-2xl transition-all duration-300">
//           <div className="flex items-center justify-between mb-4">
//             <div className="p-3 bg-gradient-to-r from-orange-500 to-amber-600 rounded-2xl shadow-lg">
//               <Star className="w-6 h-6 text-white" />
//             </div>
//             <div className="text-right">
//               <div className="text-2xl md:text-3xl font-bold text-orange-800 font-mono">
//                 {counters.dailyGoal}%
//               </div>
//               <div className="text-orange-600 text-sm font-medium">Daily Goal</div>
//             </div>
//           </div>
//           <div className="mt-3 h-3 bg-orange-200 rounded-full overflow-hidden">
//             <div className="h-full bg-gradient-to-r from-orange-500 to-amber-600 rounded-full transition-all duration-1000" 
//                  style={{ width: `${counters.dailyGoal}%` }}></div>
//           </div>
//           <div className="mt-2 text-xs text-orange-600">Target: 10,000 prayers today</div>
//         </div>

//         {/* Weekly Milestone */}
//         <div className="bg-gradient-to-br from-pink-50 to-rose-100 rounded-3xl p-6 shadow-xl border border-pink-200/50 hover:shadow-2xl transition-all duration-300">
//           <div className="flex items-center justify-between mb-4">
//             <div className="p-3 bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl shadow-lg">
//               <TrendingUp className="w-6 h-6 text-white" />
//             </div>
//             <div className="text-right">
//               <div className="text-2xl md:text-3xl font-bold text-pink-800 font-mono">
//                 {counters.weeklyMilestone}%
//               </div>
//               <div className="text-pink-600 text-sm font-medium">Week Progress</div>
//             </div>
//           </div>
//           <div className="mt-3 h-3 bg-pink-200 rounded-full overflow-hidden">
//             <div className="h-full bg-gradient-to-r from-pink-500 to-rose-600 rounded-full transition-all duration-1000" 
//                  style={{ width: `${counters.weeklyMilestone}%` }}></div>
//           </div>
//           <div className="mt-2 text-xs text-pink-600">Weekly unity milestone</div>
//         </div>

//         {/* Compassion Index */}
//         <div className="bg-gradient-to-br from-teal-50 to-cyan-100 rounded-3xl p-6 shadow-xl border border-teal-200/50 hover:shadow-2xl transition-all duration-300">
//           <div className="flex items-center justify-between mb-4">
//             <div className="p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-2xl shadow-lg">
//               <Sparkles className="w-6 h-6 text-white animate-pulse" />
//             </div>
//             <div className="text-right">
//               <div className="text-2xl md:text-3xl font-bold text-teal-800 font-mono">
//                 {counters.compassionIndex}%
//               </div>
//               <div className="text-teal-600 text-sm font-medium">Compassion Index</div>
//             </div>
//           </div>
//           <div className="flex items-center space-x-2">
//             <Heart className="w-4 h-4 text-red-400 animate-pulse" />
//             <span className="text-teal-600 text-sm font-medium">Global kindness level</span>
//           </div>
//           <div className="mt-3 text-xs text-teal-500">
//             ✨ Measuring worldwide spiritual harmony
//           </div>
//         </div>
//       </div>

//       {/* Recent Activity Feed */}
//       <div className="bg-white rounded-3xl shadow-xl border border-gray-200/50 p-6">
//         <div className="flex items-center space-x-3 mb-6">
//           <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl">
//             <Clock className="w-5 h-5 text-white" />
//           </div>
//           <div>
//             <h3 className="text-xl font-bold text-gray-800">Live Prayer Activity</h3>
//             <p className="text-gray-600 text-sm">Real-time spiritual connections worldwide</p>
//           </div>
//         </div>

//         <div className="space-y-4">
//           {recentActivity.map((activity, index) => (
//             <div key={activity.id} 
//                  className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-200 animate-fade-in"
//                  style={{ animationDelay: `${index * 0.1}s` }}>
//               <div className="flex-shrink-0">
//                 {getActivityIcon(activity.type)}
//               </div>
//               <div className="flex-1">
//                 <div className="flex items-center space-x-2">
//                   <span className="font-medium text-gray-800">{activity.country}</span>
//                   <span className="text-gray-600">{activity.action}</span>
//                 </div>
//               </div>
//               <div className="text-xs text-gray-500 flex items-center space-x-1">
//                 <Clock className="w-3 h-3" />
//                 <span>{activity.time}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes fade-in {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
        
//         .animate-fade-in {
//           animation: fade-in 0.6s ease-out forwards;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default UnityCounter;


import React, { useState, useEffect } from 'react';
import { Users, Globe, Heart, Star, TrendingUp, Clock, MapPin, Sparkles } from 'lucide-react';

const UnityCounter = () => {
  const [counters, setCounters] = useState({
    totalPrayers: 0,
    activeCountries: 0,
    currentPraying: 0,
    dailyGoal: 0,
    weeklyMilestone: 0,
    compassionIndex: 0
  });

  const [recentActivity, setRecentActivity] = useState([]);
  const [animatingCounters, setAnimatingCounters] = useState(new Set());

  // Target values for counters
  const targetValues = {
    totalPrayers: 124567,
    activeCountries: 89,
    currentPraying: 2847,
    dailyGoal: 85,
    weeklyMilestone: 67,
    compassionIndex: 94
  };

  // Countries with recent prayer activity
  const countries = [
    { name: 'India', flag: '🇮🇳', prayers: 28456, trend: '+12%' },
    { name: 'USA', flag: '🇺🇸', prayers: 15234, trend: '+8%' },
    { name: 'Brazil', flag: '🇧🇷', prayers: 12890, trend: '+15%' },
    { name: 'Japan', flag: '🇯🇵', prayers: 9876, trend: '+5%' },
    { name: 'Germany', flag: '🇩🇪', prayers: 8765, trend: '+10%' },
    { name: 'Egypt', flag: '🇪🇬', prayers: 7654, trend: '+18%' }
  ];

  // Animate counters on mount
  useEffect(() => {
    const animateCounter = (key, target) => {
      const duration = 3000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        current = Math.min(Math.floor(increment * step), target);
        
        setCounters(prev => ({
          ...prev,
          [key]: current
        }));

        if (current >= target) {
          clearInterval(timer);
          setAnimatingCounters(prev => {
            const newSet = new Set(prev);
            newSet.delete(key);
            return newSet;
          });
        }
      }, duration / steps);
    };

    // Start animations with delays
    Object.entries(targetValues).forEach(([key, value], index) => {
      setAnimatingCounters(prev => new Set([...prev, key]));
      setTimeout(() => {
        animateCounter(key, value);
      }, index * 200);
    });

    // Simulate real-time updates
    const updateInterval = setInterval(() => {
      setCounters(prev => ({
        ...prev,
        totalPrayers: prev.totalPrayers + Math.floor(Math.random() * 5),
        currentPraying: Math.max(2000, prev.currentPraying + (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 10))
      }));
    }, 5000);

    return () => clearInterval(updateInterval);
  }, []);

  // Simulate recent activity updates
  useEffect(() => {
    const activities = [
      { type: 'prayer', country: 'India', action: 'lit a candle for world peace', time: '2 min ago' },
      { type: 'milestone', country: 'Brazil', action: 'reached 1000 daily prayers', time: '5 min ago' },
      { type: 'unity', country: 'Global', action: 'connected hearts across 89 countries', time: '8 min ago' },
      { type: 'wisdom', country: 'Tibet', action: 'shared meditation for healing', time: '12 min ago' },
      { type: 'compassion', country: 'USA', action: 'prayer circle for brotherhood', time: '15 min ago' }
    ];

    const activityInterval = setInterval(() => {
      const randomActivity = activities[Math.floor(Math.random() * activities.length)];
      setRecentActivity(prev => [
        { ...randomActivity, id: Date.now(), time: 'just now' },
        ...prev.slice(0, 3)
      ]);
    }, 8000);

    // Initialize with some activities
    setRecentActivity(activities.slice(0, 3).map((activity, index) => ({
      ...activity,
      id: Date.now() + index
    })));

    return () => clearInterval(activityInterval);
  }, []);

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toLocaleString();
  };

  const getActivityIcon = (type) => {
    switch (type) {
      case 'prayer': return <Heart className="w-4 h-4 text-amber-500" />;
      case 'milestone': return <Star className="w-4 h-4 text-amber-400" />;
      case 'unity': return <Users className="w-4 h-4 text-blue-500" />;
      case 'wisdom': return <Sparkles className="w-4 h-4 text-amber-300" />;
      case 'compassion': return <Globe className="w-4 h-4 text-blue-400" />;
      default: return <Heart className="w-4 h-4 text-amber-400" />;
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6 min-h-screen bg-gradient-to-br from-blue-50 via-white to-amber-50">
      {/* Spiritual Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-amber-300/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Header */}
      <div className="text-center mb-8 relative z-10">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <div className="p-3 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full shadow-lg border-2 border-amber-300/20">
            <Globe className="w-8 h-8 text-amber-200 animate-pulse" />
          </div>
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-800 via-blue-600 to-amber-600 bg-clip-text text-transparent drop-shadow-sm">
              Global Unity Dashboard
            </h2>
            <p className="text-blue-700/80 mt-1 font-medium">Connecting hearts and souls worldwide through prayer</p>
          </div>
        </div>
      </div>

      {/* Main Counter Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 relative z-10">
        
        {/* Total Prayers */}
        <div className="bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-3xl p-6 shadow-xl border-2 border-blue-200/50 hover:shadow-2xl transition-all duration-300 hover:border-amber-300/50">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-lg border border-amber-300/20">
              <Heart className="w-6 h-6 text-amber-200" />
            </div>
            <div className="text-right">
              <div className="text-2xl md:text-3xl font-bold text-blue-800 font-mono drop-shadow-sm">
                {formatNumber(counters.totalPrayers)}
              </div>
              <div className="text-blue-700 text-sm font-semibold">Total Prayers</div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-4 h-4 text-amber-600" />
            <span className="text-amber-700 text-sm font-semibold">+2.4K today</span>
          </div>
          <div className="mt-3 h-2 bg-blue-200/60 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 to-amber-500 rounded-full animate-pulse shadow-sm" 
                 style={{ width: '78%' }}></div>
          </div>
        </div>

        {/* Active Countries */}
        <div className="bg-gradient-to-br from-white via-amber-50 to-amber-100 rounded-3xl p-6 shadow-xl border-2 border-amber-200/50 hover:shadow-2xl transition-all duration-300 hover:border-blue-300/50">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-gradient-to-r from-amber-500 to-amber-700 rounded-2xl shadow-lg border border-blue-300/20">
              <MapPin className="w-6 h-6 text-blue-100" />
            </div>
            <div className="text-right">
              <div className="text-2xl md:text-3xl font-bold text-amber-800 font-mono drop-shadow-sm">
                {counters.activeCountries}
              </div>
              <div className="text-amber-700 text-sm font-semibold">Countries United</div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Globe className="w-4 h-4 text-blue-600 animate-spin" style={{ animationDuration: '10s' }} />
            <span className="text-blue-700 text-sm font-semibold">All continents</span>
          </div>
          <div className="mt-3 flex space-x-1">
            {countries.slice(0, 6).map((country, index) => (
              <div key={country.name} 
                   className="text-lg animate-bounce drop-shadow-sm" 
                   style={{ animationDelay: `${index * 0.2}s` }}>
                {country.flag}
              </div>
            ))}
          </div>
        </div>

        {/* Currently Praying */}
        <div className="bg-gradient-to-br from-white via-blue-50 to-amber-50 rounded-3xl p-6 shadow-xl border-2 border-blue-200/50 hover:shadow-2xl transition-all duration-300 hover:border-amber-300/50">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-gradient-to-r from-blue-600 to-amber-600 rounded-2xl shadow-lg border border-amber-300/20">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="text-right">
              <div className="text-2xl md:text-3xl font-bold text-blue-800 font-mono drop-shadow-sm">
                {formatNumber(counters.currentPraying)}
              </div>
              <div className="text-blue-700 text-sm font-semibold">Praying Now</div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse shadow-sm"></div>
            <span className="text-amber-700 text-sm font-semibold">Live connection</span>
          </div>
          <div className="mt-3 text-xs text-blue-600 font-medium">
            🌍 Real-time global prayer community
          </div>
        </div>

        {/* Daily Goal Progress */}
        <div className="bg-gradient-to-br from-white via-amber-50 to-blue-50 rounded-3xl p-6 shadow-xl border-2 border-amber-200/50 hover:shadow-2xl transition-all duration-300 hover:border-blue-300/50">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-gradient-to-r from-amber-500 to-blue-600 rounded-2xl shadow-lg border border-blue-300/20">
              <Star className="w-6 h-6 text-white" />
            </div>
            <div className="text-right">
              <div className="text-2xl md:text-3xl font-bold text-amber-800 font-mono drop-shadow-sm">
                {counters.dailyGoal}%
              </div>
              <div className="text-amber-700 text-sm font-semibold">Daily Goal</div>
            </div>
          </div>
          <div className="mt-3 h-3 bg-amber-200/60 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-amber-500 to-blue-500 rounded-full transition-all duration-1000 shadow-sm" 
                 style={{ width: `${counters.dailyGoal}%` }}></div>
          </div>
          <div className="mt-2 text-xs text-blue-700 font-medium">Target: 10,000 prayers today</div>
        </div>

        {/* Weekly Milestone */}
        <div className="bg-gradient-to-br from-white via-blue-50 to-amber-50 rounded-3xl p-6 shadow-xl border-2 border-blue-200/50 hover:shadow-2xl transition-all duration-300 hover:border-amber-300/50">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-amber-500 rounded-2xl shadow-lg border border-amber-300/20">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div className="text-right">
              <div className="text-2xl md:text-3xl font-bold text-blue-800 font-mono drop-shadow-sm">
                {counters.weeklyMilestone}%
              </div>
              <div className="text-blue-700 text-sm font-semibold">Week Progress</div>
            </div>
          </div>
          <div className="mt-3 h-3 bg-blue-200/60 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 to-amber-500 rounded-full transition-all duration-1000 shadow-sm" 
                 style={{ width: `${counters.weeklyMilestone}%` }}></div>
          </div>
          <div className="mt-2 text-xs text-amber-700 font-medium">Weekly unity milestone</div>
        </div>

        {/* Compassion Index */}
        <div className="bg-gradient-to-br from-white via-amber-50 to-blue-50 rounded-3xl p-6 shadow-xl border-2 border-amber-200/50 hover:shadow-2xl transition-all duration-300 hover:border-blue-300/50">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-gradient-to-r from-amber-600 to-blue-600 rounded-2xl shadow-lg border border-blue-300/20">
              <Sparkles className="w-6 h-6 text-white animate-pulse" />
            </div>
            <div className="text-right">
              <div className="text-2xl md:text-3xl font-bold text-amber-800 font-mono drop-shadow-sm">
                {counters.compassionIndex}%
              </div>
              <div className="text-amber-700 text-sm font-semibold">Compassion Index</div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Heart className="w-4 h-4 text-blue-500 animate-pulse" />
            <span className="text-blue-700 text-sm font-semibold">Global kindness level</span>
          </div>
          <div className="mt-3 text-xs text-amber-600 font-medium">
            ✨ Measuring worldwide spiritual harmony
          </div>
        </div>
      </div>

      {/* Recent Activity Feed */}
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border-2 border-blue-200/30 p-6 relative z-10">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2 bg-gradient-to-r from-blue-600 to-amber-600 rounded-xl border border-amber-300/20">
            <Clock className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue-800 drop-shadow-sm">Live Prayer Activity</h3>
            <p className="text-blue-700/80 text-sm font-medium">Real-time spiritual connections worldwide</p>
          </div>
        </div>

        {/* <div className="space-y-4">
          {recentActivity.map((activity, index) => (
            <div key={activity.id} 
                 className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50/80 to-amber-50/80 rounded-2xl hover:from-blue-100/80 hover:to-amber-100/80 transition-all duration-200 animate-fade-in border border-blue-200/30 shadow-sm"
                 style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex-shrink-0 p-2 bg-white/80 rounded-lg shadow-sm">
                {getActivityIcon(activity.type)}
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-blue-800">{activity.country}</span>
                  <span className="text-blue-700">{activity.action}</span>
                </div>
              </div>
              <div className="text-xs text-amber-700 flex items-center space-x-1 font-medium">
                <Clock className="w-3 h-3" />
                <span>{activity.time}</span>
              </div>
            </div>
          ))}
        </div> */}
        <div className="space-y-4">
  {recentActivity.map((activity, index) => (
    <div
      key={activity.id}
      className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0 p-4 bg-gradient-to-r from-blue-50/80 to-amber-50/80 rounded-2xl hover:from-blue-100/80 hover:to-amber-100/80 transition-all duration-200 animate-fade-in border border-blue-200/30 shadow-sm"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex-shrink-0 p-2 bg-white/80 rounded-lg shadow-sm self-start sm:self-auto">
        {getActivityIcon(activity.type)}
      </div>
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 text-sm sm:text-base">
          <span className="font-semibold text-blue-800">{activity.country}</span>
          <span className="text-blue-700">{activity.action}</span>
        </div>
      </div>
      <div className="text-xs text-amber-700 flex items-center space-x-1 font-medium sm:justify-end">
        <Clock className="w-3 h-3" />
        <span>{activity.time}</span>
      </div>
    </div>
  ))}
</div>

      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default UnityCounter;