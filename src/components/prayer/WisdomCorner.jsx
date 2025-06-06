// import React, { useState, useEffect } from 'react';
// import { BookOpen, Heart, Star, Sunrise, Moon, Quote, ArrowRight, Eye, Sparkles, Lightbulb, Flower } from 'lucide-react';

// const WisdomCorner = () => {
//   const [currentWisdom, setCurrentWisdom] = useState(0);
//   const [activeCategory, setActiveCategory] = useState('compassion');
//   const [showReflection, setShowReflection] = useState(false);
//   const [dailyWisdom, setDailyWisdom] = useState(null);

//   // Mentor wisdom teachings organized by spiritual themes
//   const wisdomTeachings = {
//     compassion: [
//       {
//         id: 1,
//         quote: "In every human heart lies the seed of divine compassion. Water it with understanding, and watch love bloom across all boundaries.",
//         reflection: "How can you show kindness to someone who thinks differently than you today?",
//         context: "Teaching on Universal Love",
//         icon: "❤️",
//         color: "from-rose-400 to-pink-600"
//       },
//       {
//         id: 2,
//         quote: "When we see pain in others, we see the mirror of our own humanity. Compassion is the bridge that connects all souls.",
//         reflection: "What suffering around you calls for your gentle attention?",
//         context: "Meditation on Empathy",
//         icon: "🤲",
//         color: "from-pink-400 to-rose-500"
//       },
//       {
//         id: 3,
//         quote: "True compassion begins within. Be gentle with your own mistakes, for this gentleness will naturally extend to others.",
//         reflection: "How can you practice self-forgiveness today?",
//         context: "Inner Peace Teaching",
//         icon: "🌸",
//         color: "from-rose-300 to-pink-400"
//       }
//     ],
//     unity: [
//       {
//         id: 4,
//         quote: "We are drops in the same ocean of consciousness. When one drop vibrates with love, the entire ocean feels the resonance.",
//         reflection: "How does your inner peace contribute to world harmony?",
//         context: "Unity Consciousness",
//         icon: "🌊",
//         color: "from-blue-400 to-indigo-600"
//       },
//       {
//         id: 5,
//         quote: "Diversity is the symphony of creation. Each soul plays a unique note, but together we create divine music.",
//         reflection: "What unique gift do you bring to humanity's song?",
//         context: "Celebrating Differences",
//         icon: "🎵",
//         color: "from-indigo-400 to-purple-600"
//       }
//     ],
//     wisdom: [
//       {
//         id: 6,
//         quote: "Wisdom is not in knowing all answers, but in asking the right questions with a humble heart.",
//         reflection: "What question is your soul asking you right now?",
//         context: "Path of Inquiry",
//         icon: "🔍",
//         color: "from-amber-400 to-orange-600"
//       },
//       {
//         id: 7,
//         quote: "The greatest teacher lives within you. External guidance points the way, but inner knowing lights the path.",
//         reflection: "When did you last listen deeply to your inner voice?",
//         context: "Inner Guidance",
//         icon: "💡",
//         color: "from-yellow-400 to-amber-500"
//       }
//     ],
//     peace: [
//       {
//         id: 8,
//         quote: "Peace is not the absence of storms, but the presence of calm within them. Cultivate this inner sanctuary daily.",
//         reflection: "Where do you find your inner sanctuary of peace?",
//         context: "Cultivating Tranquility",
//         icon: "🕊️",
//         color: "from-green-400 to-teal-600"
//       },
//       {
//         id: 9,
//         quote: "Every breath is an opportunity to return to peace. In breathing consciously, we touch the eternal now.",
//         reflection: "Can you take three conscious breaths right now?",
//         context: "Mindful Breathing",
//         icon: "🍃",
//         color: "from-teal-400 to-green-500"
//       }
//     ],
//     healing: [
//       {
//         id: 10,
//         quote: "Healing happens in the space between heartbeats, in the silence between thoughts, in the love between souls.",
//         reflection: "What part of your heart is ready for gentle healing?",
//         context: "Sacred Healing",
//         icon: "✨",
//         color: "from-purple-400 to-violet-600"
//       },
//       {
//         id: 11,
//         quote: "We heal not only for ourselves, but for all who came before us and all who will come after. Healing is a gift to eternity.",
//         reflection: "How does your healing serve the greater good?",
//         context: "Generational Healing",
//         icon: "🌟",
//         color: "from-violet-400 to-purple-500"
//       }
//     ]
//   };

//   const categories = [
//     { key: 'compassion', name: 'Compassion', icon: Heart, color: 'text-rose-500 bg-rose-100' },
//     { key: 'unity', name: 'Unity', icon: Star, color: 'text-blue-500 bg-blue-100' },
//     { key: 'wisdom', name: 'Wisdom', icon: Lightbulb, color: 'text-amber-500 bg-amber-100' },
//     { key: 'peace', name: 'Peace', icon: Flower, color: 'text-green-500 bg-green-100' },
//     { key: 'healing', name: 'Healing', icon: Sparkles, color: 'text-purple-500 bg-purple-100' }
//   ];

//   // Auto-rotate wisdom teachings
//   useEffect(() => {
//     const interval = setInterval(() => {
//       const teachings = wisdomTeachings[activeCategory];
//       setCurrentWisdom((prev) => (prev + 1) % teachings.length);
//     }, 8000);

//     return () => clearInterval(interval);
//   }, [activeCategory]);

//   // Set daily wisdom on component mount
//   useEffect(() => {
//     const today = new Date().getDate();
//     const allTeachings = Object.values(wisdomTeachings).flat();
//     const dailyIndex = today % allTeachings.length;
//     setDailyWisdom(allTeachings[dailyIndex]);
//   }, []);

//   const handleCategoryChange = (categoryKey) => {
//     setActiveCategory(categoryKey);
//     setCurrentWisdom(0);
//     setShowReflection(false);
//   };

//   const getCurrentTeaching = () => {
//     return wisdomTeachings[activeCategory][currentWisdom];
//   };

//   const handleNext = () => {
//     const teachings = wisdomTeachings[activeCategory];
//     setCurrentWisdom((prev) => (prev + 1) % teachings.length);
//     setShowReflection(false);
//   };

//   const handlePrevious = () => {
//     const teachings = wisdomTeachings[activeCategory];
//     setCurrentWisdom((prev) => (prev - 1 + teachings.length) % teachings.length);
//     setShowReflection(false);
//   };

//   const currentTeaching = getCurrentTeaching();

//   return (
//     <div className="w-full max-w-5xl mx-auto p-6">
//       {/* Header */}
//       <div className="text-center mb-8">
//         <div className="flex items-center justify-center space-x-3 mb-4">
//           <div className="p-3 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full shadow-lg">
//             <BookOpen className="w-8 h-8 text-white" />
//           </div>
//           <div>
//             <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
//               Wisdom Corner
//             </h2>
//             <p className="text-gray-600 mt-1">Divine teachings for the seeking soul</p>
//           </div>
//         </div>
//       </div>

//       {/* Daily Wisdom Card */}
//       {dailyWisdom && (
//         <div className="mb-8">
//           <div className="bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 rounded-3xl p-6 shadow-xl border border-amber-200/50">
//             <div className="flex items-center space-x-3 mb-4">
//               <Sunrise className="w-6 h-6 text-amber-600" />
//               <h3 className="text-lg font-bold text-amber-800">Today's Divine Guidance</h3>
//             </div>
//             <div className="text-amber-900 italic text-lg leading-relaxed">
//               "{dailyWisdom.quote}"
//             </div>
//             <div className="mt-3 text-amber-700 text-sm">
//               — {dailyWisdom.context}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Category Selector */}
//       <div className="flex flex-wrap justify-center gap-3 mb-8">
//         {categories.map((category) => {
//           const IconComponent = category.icon;
//           return (
//             <button
//               key={category.key}
//               onClick={() => handleCategoryChange(category.key)}
//               className={`flex items-center space-x-2 px-4 py-3 rounded-2xl transition-all duration-300 shadow-md hover:shadow-lg ${
//                 activeCategory === category.key
//                   ? `${category.color} scale-105 shadow-lg`
//                   : 'bg-white text-gray-600 hover:bg-gray-50'
//               }`}
//             >
//               <IconComponent className="w-5 h-5" />
//               <span className="font-medium">{category.name}</span>
//             </button>
//           );
//         })}
//       </div>

//       {/* Main Wisdom Display */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
//         {/* Main Teaching Card */}
//         <div className="lg:col-span-2">
//           <div className={`bg-gradient-to-br ${currentTeaching.color} rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden`}>
            
//             {/* Background Pattern */}
//             <div className="absolute inset-0 opacity-10">
//               <div className="absolute top-4 right-4 text-6xl">{currentTeaching.icon}</div>
//               <div className="absolute bottom-4 left-4 text-4xl opacity-50">🙏</div>
//               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl opacity-5">
//                 ✨
//               </div>
//             </div>

//             {/* Content */}
//             <div className="relative z-10">
//               <div className="flex items-center space-x-3 mb-6">
//                 <Quote className="w-8 h-8 text-white/80" />
//                 <div>
//                   <h3 className="text-2xl font-bold">Sacred Teaching</h3>
//                   <p className="text-white/80">{currentTeaching.context}</p>
//                 </div>
//               </div>

//               <div className="text-xl leading-relaxed font-light mb-6 italic">
//                 "{currentTeaching.quote}"
//               </div>

//               {/* Navigation */}
//               <div className="flex items-center justify-between">
//                 <button
//                   onClick={handlePrevious}
//                   className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300"
//                 >
//                   <ArrowRight className="w-5 h-5 transform rotate-180" />
//                 </button>

//                 <div className="flex space-x-2">
//                   {wisdomTeachings[activeCategory].map((_, index) => (
//                     <div
//                       key={index}
//                       className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                         index === currentWisdom ? 'bg-white' : 'bg-white/40'
//                       }`}
//                     />
//                   ))}
//                 </div>

//                 <button
//                   onClick={handleNext}
//                   className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300"
//                 >
//                   <ArrowRight className="w-5 h-5" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Reflection Panel */}
//         <div className="space-y-6">
          
//           {/* Reflection Card */}
//           <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-200/50">
//             <div className="flex items-center space-x-3 mb-4">
//               <Eye className="w-6 h-6 text-indigo-600" />
//               <h4 className="text-lg font-bold text-gray-800">Soul Reflection</h4>
//             </div>
            
//             <div className="text-gray-700 mb-4 leading-relaxed">
//               {currentTeaching.reflection}
//             </div>

//             <button
//               onClick={() => setShowReflection(!showReflection)}
//               className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-3 rounded-2xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 font-medium shadow-lg"
//             >
//               {showReflection ? 'Hide Reflection' : 'Contemplate Deeply'}
//             </button>

//             {showReflection && (
//               <div className="mt-4 p-4 bg-indigo-50 rounded-2xl border border-indigo-200 animate-fade-in">
//                 <div className="text-indigo-800 text-sm leading-relaxed">
//                   <p className="font-medium mb-2">Meditation Guidance:</p>
//                   <p>Sit quietly for a moment. Breathe deeply and let this question resonate within your heart. There's no right or wrong answer - only your authentic truth waiting to emerge.</p>
//                   <div className="mt-3 text-indigo-600 text-xs">
//                     🧘‍♀️ Take 3 deep breaths before reflecting
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Prayer Connection */}
//           <div className="bg-gradient-to-br from-teal-50 to-cyan-100 rounded-3xl p-6 shadow-xl border border-teal-200/50">
//             <div className="flex items-center space-x-3 mb-4">
//               <Heart className="w-6 h-6 text-teal-600 animate-pulse" />
//               <h4 className="text-lg font-bold text-teal-800">Prayer Connection</h4>
//             </div>
            
//             <div className="text-teal-700 text-sm leading-relaxed mb-4">
//               Let this wisdom inspire your prayers. Send love and light to all beings who are seeking the same truth you are.
//             </div>

//             <div className="flex items-center space-x-2 text-teal-600 text-sm">
//               <Sparkles className="w-4 h-4" />
//               <span>Connected to {Math.floor(Math.random() * 500 + 200)} hearts worldwide</span>
//             </div>
//           </div>

//           {/* Evening Wisdom */}
//           <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-3xl p-6 shadow-xl text-white">
//             <div className="flex items-center space-x-3 mb-4">
//               <Moon className="w-6 h-6 text-blue-400" />
//               <h4 className="text-lg font-bold">Evening Contemplation</h4>
//             </div>
            
//             <div className="text-blue-100 text-sm leading-relaxed">
//               "As the day closes, carry this wisdom into your dreams. Let it plant seeds of transformation that will blossom in tomorrow's light."
//             </div>
            
//             <div className="mt-3 text-blue-300 text-xs">
//               🌙 Reflect before sleep for deeper integration
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes fade-in {
//           from { opacity: 0; transform: translateY(10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
        
//         .animate-fade-in {
//           animation: fade-in 0.4s ease-out forwards;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default WisdomCorner;


import React, { useState, useEffect } from 'react';
import { BookOpen, Heart, Star, Sunrise, Moon, Quote, ArrowRight, Eye, Sparkles, Lightbulb, Flower } from 'lucide-react';

const WisdomCorner = () => {
  const [currentWisdom, setCurrentWisdom] = useState(0);
  const [activeCategory, setActiveCategory] = useState('compassion');
  const [showReflection, setShowReflection] = useState(false);
  const [dailyWisdom, setDailyWisdom] = useState(null);

  // Mentor wisdom teachings organized by spiritual themes
  const wisdomTeachings = {
    compassion: [
      {
        id: 1,
        quote: "In every human heart lies the seed of divine compassion. Water it with understanding, and watch love bloom across all boundaries.",
        reflection: "How can you show kindness to someone who thinks differently than you today?",
        context: "Teaching on Universal Love",
        icon: "❤️",
        color: "from-blue-400 to-indigo-500"
      },
      {
        id: 2,
        quote: "When we see pain in others, we see the mirror of our own humanity. Compassion is the bridge that connects all souls.",
        reflection: "What suffering around you calls for your gentle attention?",
        context: "Meditation on Empathy",
        icon: "🤲",
        color: "from-blue-500 to-blue-600"
      },
      {
        id: 3,
        quote: "True compassion begins within. Be gentle with your own mistakes, for this gentleness will naturally extend to others.",
        reflection: "How can you practice self-forgiveness today?",
        context: "Inner Peace Teaching",
        icon: "🌸",
        color: "from-blue-300 to-indigo-400"
      }
    ],
    unity: [
      {
        id: 4,
        quote: "We are drops in the same ocean of consciousness. When one drop vibrates with love, the entire ocean feels the resonance.",
        reflection: "How does your inner peace contribute to world harmony?",
        context: "Unity Consciousness",
        icon: "🌊",
        color: "from-indigo-400 to-blue-600"
      },
      {
        id: 5,
        quote: "Diversity is the symphony of creation. Each soul plays a unique note, but together we create divine music.",
        reflection: "What unique gift do you bring to humanity's song?",
        context: "Celebrating Differences",
        icon: "🎵",
        color: "from-blue-500 to-indigo-600"
      }
    ],
    wisdom: [
      {
        id: 6,
        quote: "Wisdom is not in knowing all answers, but in asking the right questions with a humble heart.",
        reflection: "What question is your soul asking you right now?",
        context: "Path of Inquiry",
        icon: "🔍",
        color: "from-yellow-400 to-amber-500"
      },
      {
        id: 7,
        quote: "The greatest teacher lives within you. External guidance points the way, but inner knowing lights the path.",
        reflection: "When did you last listen deeply to your inner voice?",
        context: "Inner Guidance",
        icon: "💡",
        color: "from-amber-400 to-yellow-500"
      }
    ],
    peace: [
      {
        id: 8,
        quote: "Peace is not the absence of storms, but the presence of calm within them. Cultivate this inner sanctuary daily.",
        reflection: "Where do you find your inner sanctuary of peace?",
        context: "Cultivating Tranquility",
        icon: "🕊️",
        color: "from-blue-400 to-indigo-500"
      },
      {
        id: 9,
        quote: "Every breath is an opportunity to return to peace. In breathing consciously, we touch the eternal now.",
        reflection: "Can you take three conscious breaths right now?",
        context: "Mindful Breathing",
        icon: "🍃",
        color: "from-indigo-400 to-blue-500"
      }
    ],
    healing: [
      {
        id: 10,
        quote: "Healing happens in the space between heartbeats, in the silence between thoughts, in the love between souls.",
        reflection: "What part of your heart is ready for gentle healing?",
        context: "Sacred Healing",
        icon: "✨",
        color: "from-blue-500 to-indigo-600"
      },
      {
        id: 11,
        quote: "We heal not only for ourselves, but for all who came before us and all who will come after. Healing is a gift to eternity.",
        reflection: "How does your healing serve the greater good?",
        context: "Generational Healing",
        icon: "🌟",
        color: "from-indigo-500 to-blue-600"
      }
    ]
  };

  const categories = [
    { key: 'compassion', name: 'Compassion', icon: Heart, color: 'text-blue-600 bg-blue-50 border-blue-200' },
    { key: 'unity', name: 'Unity', icon: Star, color: 'text-indigo-600 bg-indigo-50 border-indigo-200' },
    { key: 'wisdom', name: 'Wisdom', icon: Lightbulb, color: 'text-amber-600 bg-amber-50 border-amber-200' },
    { key: 'peace', name: 'Peace', icon: Flower, color: 'text-blue-600 bg-blue-50 border-blue-200' },
    { key: 'healing', name: 'Healing', icon: Sparkles, color: 'text-indigo-600 bg-indigo-50 border-indigo-200' }
  ];

  // Auto-rotate wisdom teachings
  useEffect(() => {
    const interval = setInterval(() => {
      const teachings = wisdomTeachings[activeCategory];
      setCurrentWisdom((prev) => (prev + 1) % teachings.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [activeCategory]);

  // Set daily wisdom on component mount
  useEffect(() => {
    const today = new Date().getDate();
    const allTeachings = Object.values(wisdomTeachings).flat();
    const dailyIndex = today % allTeachings.length;
    setDailyWisdom(allTeachings[dailyIndex]);
  }, []);

  const handleCategoryChange = (categoryKey) => {
    setActiveCategory(categoryKey);
    setCurrentWisdom(0);
    setShowReflection(false);
  };

  const getCurrentTeaching = () => {
    return wisdomTeachings[activeCategory][currentWisdom];
  };

  const handleNext = () => {
    const teachings = wisdomTeachings[activeCategory];
    setCurrentWisdom((prev) => (prev + 1) % teachings.length);
    setShowReflection(false);
  };

  const handlePrevious = () => {
    const teachings = wisdomTeachings[activeCategory];
    setCurrentWisdom((prev) => (prev - 1 + teachings.length) % teachings.length);
    setShowReflection(false);
  };

  const currentTeaching = getCurrentTeaching();

  return (
    <div className="w-full max-w-5xl mx-auto p-6 bg-white min-h-screen">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center space-x-4 mb-6">
          <div className="p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full shadow-lg animate-pulse">
            <BookOpen className="w-10 h-10 text-white" />
          </div>
          <div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 bg-clip-text text-transparent mb-2">
              Wisdom Corner
            </h2>
            <p className="text-gray-600 text-lg">Divine teachings for the seeking soul</p>
          </div>
        </div>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-amber-400 mx-auto rounded-full"></div>
      </div>

      {/* Daily Wisdom Card */}
      {dailyWisdom && (
        <div className="mb-10">
          <div className="bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100 rounded-3xl p-8 shadow-xl border-2 border-amber-200/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-200/30 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
            <div className="relative z-10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full shadow-lg">
                  <Sunrise className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-amber-800">Today's Divine Guidance</h3>
              </div>
              <div className="text-amber-900 italic text-xl leading-relaxed mb-4 font-medium">
                "{dailyWisdom.quote}"
              </div>
              <div className="text-amber-700 text-base font-medium">
                — {dailyWisdom.context}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Category Selector */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((category) => {
          const IconComponent = category.icon;
          return (
            <button
              key={category.key}
              onClick={() => handleCategoryChange(category.key)}
              className={`flex items-center space-x-3 px-6 py-4 rounded-2xl transition-all duration-300 shadow-md hover:shadow-lg border-2 transform hover:scale-105 ${
                activeCategory === category.key
                  ? `${category.color} scale-105 shadow-lg font-semibold`
                  : 'bg-white text-gray-600 hover:bg-gray-50 border-gray-200'
              }`}
            >
              <IconComponent className="w-6 h-6" />
              <span className="font-medium text-lg">{category.name}</span>
            </button>
          );
        })}
      </div>

      {/* Main Wisdom Display */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Teaching Card */}
        <div className="lg:col-span-2">
          <div className={`bg-gradient-to-br ${currentTeaching.color} rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden transform hover:scale-102 transition-all duration-500`}>
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-6 right-6 text-8xl animate-pulse">{currentTeaching.icon}</div>
              <div className="absolute bottom-6 left-6 text-5xl opacity-50">🙏</div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl opacity-5">
                ✨
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -translate-x-20 -translate-y-20"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-16 translate-y-16"></div>

            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center space-x-4 mb-8">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full">
                  <Quote className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-1">Sacred Teaching</h3>
                  <p className="text-white/90 text-lg">{currentTeaching.context}</p>
                </div>
              </div>

              <div className="text-2xl leading-relaxed font-light mb-8 italic text-white/95">
                "{currentTeaching.quote}"
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <button
                  onClick={handlePrevious}
                  className="p-4 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110 shadow-lg"
                >
                  <ArrowRight className="w-6 h-6 transform rotate-180" />
                </button>

                <div className="flex space-x-3">
                  {wisdomTeachings[activeCategory].map((_, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentWisdom ? 'bg-white scale-125' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  className="p-4 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110 shadow-lg"
                >
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Reflection Panel */}
        <div className="space-y-8">
          
          {/* Reflection Card */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-blue-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-100/50 to-transparent rounded-full -translate-y-12 translate-x-12"></div>
            <div className="relative z-10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full shadow-lg">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-800">Soul Reflection</h4>
              </div>
              
              <div className="text-gray-700 mb-6 leading-relaxed text-lg">
                {currentTeaching.reflection}
              </div>

              <button
                onClick={() => setShowReflection(!showReflection)}
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-4 rounded-2xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 font-semibold shadow-lg transform hover:scale-105"
              >
                {showReflection ? 'Hide Reflection' : 'Contemplate Deeply'}
              </button>

              {showReflection && (
                <div className="mt-6 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border-2 border-blue-200 animate-fade-in">
                  <div className="text-blue-800 leading-relaxed">
                    <p className="font-semibold mb-3 text-lg">Meditation Guidance:</p>
                    <p className="mb-4">Sit quietly for a moment. Breathe deeply and let this question resonate within your heart. There's no right or wrong answer - only your authentic truth waiting to emerge.</p>
                    <div className="mt-4 text-blue-600 text-sm bg-blue-100 rounded-xl p-3">
                      🧘‍♀️ Take 3 deep breaths before reflecting
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Prayer Connection */}
          <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 rounded-3xl p-8 shadow-xl border-2 border-blue-200/50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-transparent rounded-full -translate-x-16 -translate-y-16"></div>
            <div className="relative z-10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full shadow-lg">
                  <Heart className="w-6 h-6 text-white animate-pulse" />
                </div>
                <h4 className="text-xl font-bold text-blue-800">Prayer Connection</h4>
              </div>
              
              <div className="text-blue-700 leading-relaxed mb-6 text-lg">
                Let this wisdom inspire your prayers. Send love and light to all beings who are seeking the same truth you are.
              </div>

              <div className="flex items-center space-x-3 text-blue-600 bg-blue-100 rounded-xl p-4">
                <Sparkles className="w-5 h-5 animate-pulse" />
                <span className="font-medium">Connected to {Math.floor(Math.random() * 500 + 200)} hearts worldwide</span>
              </div>
            </div>
          </div>

          {/* Evening Wisdom */}
          <div className="bg-gradient-to-br from-indigo-900 via-blue-900 to-indigo-800 rounded-3xl p-8 shadow-xl text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-full -translate-y-20 translate-x-20"></div>
            <div className="relative z-10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full shadow-lg">
                  <Moon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold">Evening Contemplation</h4>
              </div>
              
              <div className="text-blue-100 leading-relaxed mb-4 text-lg">
                "As the day closes, carry this wisdom into your dreams. Let it plant seeds of transformation that will blossom in tomorrow's light."
              </div>
              
              <div className="text-blue-300 bg-blue-800/50 rounded-xl p-3">
                🌙 Reflect before sleep for deeper integration
              </div>
            </div>
          </div>
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

        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
};

export default WisdomCorner;