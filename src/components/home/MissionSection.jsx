
// import React, { useState, useEffect, useRef } from 'react';
// import { Heart, Star, Globe, Users, Lightbulb, Shield, Sparkles, Sun } from 'lucide-react';
// import { Link } from 'react-router-dom';
// const MissionSection = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [activeCard, setActiveCard] = useState(null);
//   const sectionRef = useRef(null);

//   // Mission cards data
//   const missionCards = [
//     {
//       id: 1,
//       icon: Heart,
//       title: "Unity in Love",
//       description: "Bridging the gap between Christianity and Hinduism through the universal language of divine love and compassion.",
//       color: "from-pink-400 to-rose-500"
//     },
//     {
//       id: 2,
//       icon: Globe,
//       title: "Global Harmony",
//       description: "Creating a worldwide community where different spiritual paths converge in mutual respect and understanding.",
//       color: "from-green-400 to-emerald-500"
//     },
//     {
//       id: 3,
//       icon: Lightbulb,
//       title: "Spiritual Wisdom",
//       description: "Sharing ancient wisdom and modern insights that illuminate the common truths found in all spiritual traditions.",
//       color: "from-yellow-400 to-amber-500"
//     },
//     {
//       id: 4,
//       icon: Users,
//       title: "Sacred Community",
//       description: "Building a supportive family where seekers from all backgrounds can grow together in faith and fellowship.",
//       color: "from-purple-400 to-violet-500"
//     }
//   ];

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   const FloatingElements = () => (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       {[...Array(8)].map((_, i) => (
//         <div
//           key={i}
//           className="absolute animate-pulse opacity-10"
//           style={{
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//             animationDelay: `${Math.random() * 3}s`,
//             animationDuration: `${4 + Math.random() * 2}s`
//           }}
//         >
//           {i % 3 === 0 && <Sparkles className="w-4 h-4 text-yellow-400" />}
//           {i % 3 === 1 && <Star className="w-3 h-3 text-purple-400" />}
//           {i % 3 === 2 && <Sun className="w-4 h-4 text-blue-400" />}
//         </div>
//       ))}
//     </div>
//   );

//   return (
//     <section 
//       ref={sectionRef}
//       className="relative py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-br from-orange-50 via-white to-blue-50 overflow-hidden min-h-screen"
//     >
//       {/* Floating Elements - Hidden on mobile for performance */}
//       <div className="hidden md:block">
//         <FloatingElements />
//       </div>
      
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div 
//           className="w-full h-full bg-gradient-to-br from-yellow-200 to-purple-200"
//         />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        
//         {/* Section Header */}
//         <div className="text-center mb-12 sm:mb-16">
//           <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
//             <div className="inline-flex items-center gap-2 mb-4">
//               <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600" />
//               <span className="text-yellow-600 font-semibold uppercase tracking-wider text-xs sm:text-sm">Our Sacred Mission</span>
//               <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600" />
//             </div>
            
//             <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
//               <span className="bg-gradient-to-r from-yellow-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
//                 Building Bridges of Faith
//               </span>
//             </h2>
            
//             <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-2">
//               We believe that all paths to the Divine are sacred. Our mission is to create a harmonious space 
//               where the wisdom of Christianity and Hinduism illuminates the journey for all seekers.
//             </p>
//           </div>
//         </div>

//         {/* Mission Cards Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
//           {missionCards.map((card, index) => {
//             const IconComponent = card.icon;
//             return (
//               <div
//                 key={card.id}
//                 className={`group relative bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer transform hover:scale-105 border border-gray-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
//                 style={{ 
//                   transitionDelay: `${index * 100}ms`
//                 }}
//                 onMouseEnter={() => setActiveCard(card.id)}
//                 onMouseLeave={() => setActiveCard(null)}
//               >
//                 {/* Card Background Effect */}
//                 <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`} />
                
//                 {/* Icon */}
//                 <div className="relative mb-4 sm:mb-6">
//                   <div className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-full bg-gradient-to-br ${card.color} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
//                     <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
//                       <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-gray-700" />
//                     </div>
//                   </div>
                  
//                   {/* Floating effect when active */}
//                   {activeCard === card.id && (
//                     <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2">
//                       <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-yellow-500 animate-spin" />
//                     </div>
//                   )}
//                 </div>

//                 {/* Content */}
//                 <div className="relative text-center">
//                   <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-yellow-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
//                     {card.title}
//                   </h3>
//                   <p className="text-gray-600 leading-relaxed text-sm sm:text-base group-hover:text-gray-700 transition-colors duration-300">
//                     {card.description}
//                   </p>
//                 </div>

//                 {/* Hover Glow Effect */}
//                 <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
//               </div>
//             );
//           })}
//         </div>

//         {/* Call to Action */}
//         <div className={`text-center transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
//           <div className="bg-gradient-to-r from-yellow-50 via-purple-50 to-blue-50 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-gray-200 shadow-xl">
//             <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-gray-800">
//               Join Our Sacred Journey
//             </h3>
//             <p className="text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base px-2">
//               Whether you come from a Christian background, Hindu tradition, or are simply seeking spiritual truth, 
//               you are welcome in our community of love and understanding.
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//                 <Link to="/contact">
//               <button className="w-full sm:w-auto group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-yellow-500 to-purple-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
//                 <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                 <span className="relative flex items-center justify-center gap-2">
//                   <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
//                   Start Your Journey
//                 </span>
//               </button>
//               </Link>
//                 <Link to="/about">
//               <button className="w-full sm:w-auto group px-6 sm:px-8 py-3 sm:py-4 bg-white/70 backdrop-blur-sm text-gray-800 font-semibold rounded-full border border-gray-300 transition-all duration-300 hover:scale-105 hover:bg-white/90">
//                 <span className="flex items-center justify-center gap-2">
//                   <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
//                   Learn More
//                 </span>
//               </button>
//                 </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Decorative Element */}
//       <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 via-purple-600 to-blue-600 opacity-30"></div>
//     </section>
//   );
// };

// export default MissionSection;


import React, { useState, useEffect, useRef } from 'react';
import { Heart, Star, Globe, Users, Lightbulb, Shield, Sparkles, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
const MissionSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const sectionRef = useRef(null);

  // Mission cards data with blue and gold theme
  const missionCards = [
    {
      id: 1,
      icon: Heart,
      title: "Unity in Love",
      description: "Bridging the gap between Christianity, Hinduism, Islam, Sikhism, and Buddhism through the universal language of divine love, compassion, and unity.",
      color: "from-blue-400 to-blue-600"
    },
    {
      id: 2,
      icon: Globe,
      title: "Global Harmony",
      description: "Creating a worldwide community where different spiritual paths converge in mutual respect and understanding.",
      color: "from-yellow-400 to-amber-500"
    },
    {
      id: 3,
      icon: Lightbulb,
      title: "Spiritual Wisdom",
      description: "Sharing ancient wisdom and modern insights that illuminate the common truths found in all spiritual traditions.",
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: 4,
      icon: Users,
      title: "Sacred Community",
      description: "Building a supportive family where seekers from all backgrounds can grow together in faith and fellowship.",
      color: "from-amber-400 to-yellow-500"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const FloatingElements = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-pulse opacity-10"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${4 + Math.random() * 2}s`
          }}
        >
          {i % 3 === 0 && <Sparkles className="w-4 h-4 text-yellow-400" />}
          {i % 3 === 1 && <Star className="w-3 h-3 text-blue-400" />}
          {i % 3 === 2 && <Sun className="w-4 h-4 text-amber-400" />}
        </div>
      ))}
    </div>
  );

  return (
    <section 
      ref={sectionRef}
      className="relative py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-yellow-50 overflow-hidden min-h-screen"
    >
      {/* Floating Elements - Hidden on mobile for performance */}
      <div className="hidden md:block">
        <FloatingElements />
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full bg-gradient-to-br from-blue-200 to-yellow-200"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="inline-flex items-center gap-2 mb-4">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600" />
              <span className="text-yellow-600 font-semibold uppercase tracking-wider text-xs sm:text-sm">Our Sacred Mission</span>
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600" />
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 font-serif">
              <span className="bg-gradient-to-r from-blue-600 via-blue-800 to-yellow-500 bg-clip-text text-transparent">
                Building Bridges of Faith
              </span>
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-blue-800 max-w-3xl mx-auto leading-relaxed px-2">
We believe that all paths to the Divine are sacred. In our space, the wisdom of Sikhism, Islam, Hinduism, Christianity, and Buddhism comes together in harmony—honoring the oneness beyond differences. Each tradition offers unique light: Sikhism’s service, Islam’s devotion, Hinduism’s spiritual depth, Christianity’s love, and Buddhism’s path to inner peace. Together, they guide seekers toward truth, compassion, and unity.
            </p>
          </div>
        </div>

        {/* Mission Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {missionCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.id}
                className={`group relative bg-white backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer transform hover:scale-105 border border-blue-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                style={{ 
                  transitionDelay: `${index * 100}ms`
                }}
                onMouseEnter={() => setActiveCard(card.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Card Background Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`} />
                
                {/* Icon */}
                <div className="relative mb-4 sm:mb-6">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-full bg-gradient-to-br ${card.color} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-blue-700" />
                    </div>
                  </div>
                  
                  {/* Floating effect when active */}
                  {activeCard === card.id && (
                    <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2">
                      <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-yellow-500 animate-spin" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="relative text-center">
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-blue-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-yellow-500 group-hover:bg-clip-text transition-all duration-300">
                    {card.title}
                  </h3>
                  <p className="text-blue-700 leading-relaxed text-sm sm:text-base group-hover:text-blue-800 transition-colors duration-300">
                    {card.description}
                  </p>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className={`text-center transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <div className="bg-gradient-to-r from-blue-50 via-white to-yellow-50 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-blue-200 shadow-xl">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-blue-900 font-serif">
              Join Our Sacred Journey
            </h3>
            <p className="text-blue-700 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base px-2">
           Whether you come from a Christian, Hindu, Muslim, Sikh, or Buddhist background—or are simply seeking spiritual truth—you are welcome in our community of love, compassion, and understanding.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to='/contact'>
                <button className="w-full sm:w-auto group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center justify-center gap-2">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                  Start Your Journey
                </span>
              </button>
              </Link>
            
              <Link to='/about'>
              <button className="w-full sm:w-auto group px-6 sm:px-8 py-3 sm:py-4 bg-white backdrop-blur-sm text-blue-800 font-semibold rounded-full border border-blue-300 transition-all duration-300 hover:scale-105 hover:bg-yellow-50">
                <span className="flex items-center justify-center gap-2">
                  <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
                  Learn More
                </span>
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-yellow-500 opacity-50"></div>
    </section>
  );
};

export default MissionSection;