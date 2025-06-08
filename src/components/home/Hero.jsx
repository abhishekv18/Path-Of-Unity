
// import React, { useState, useEffect } from 'react';
// import { ChevronDown, Heart, Star, Sun, Moon, Sparkles, Eye, Infinity, Cross } from 'lucide-react';

// const Hero = () => {
//   const [currentQuote, setCurrentQuote] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);
//   const [particles, setParticles] = useState([]);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   const christianQuotes = [
//     { text: "For God so loved the world that he gave his one and only Son", author: "John 3:16" },
//     { text: "Be still and know that I am God", author: "Psalm 46:10" },
//     { text: "Trust in the Lord with all your heart", author: "Proverbs 3:5" },
//     { text: "I can do all things through Christ who strengthens me", author: "Philippians 4:13" }
//   ];

//   const christianSymbols = ['✝️', '🙏', '🕊️', '⛪', '📿', '🌟', '💒', '🔔', '👼'];

//   useEffect(() => {
//     setIsVisible(true);
    
//     // Initialize floating particles
//     const newParticles = Array.from({ length: 25 }, (_, i) => ({
//       id: i,
//       x: Math.random() * 100,
//       y: Math.random() * 100,
//       symbol: christianSymbols[Math.floor(Math.random() * christianSymbols.length)],
//       delay: Math.random() * 5,
//       duration: 12 + Math.random() * 8,
//       size: 0.8 + Math.random() * 0.4
//     }));
//     setParticles(newParticles);

//     // Rotate quotes
//     const quoteInterval = setInterval(() => {
//       setCurrentQuote((prev) => (prev + 1) % christianQuotes.length);
//     }, 5000);

//     // Mouse move handler for parallax effect
//     const handleMouseMove = (e) => {
//       setMousePosition({
//         x: (e.clientX / window.innerWidth) * 100,
//         y: (e.clientY / window.innerHeight) * 100
//       });
//     };

//     window.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       clearInterval(quoteInterval);
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   const scrollToContent = () => {
//     window.scrollTo({
//       top: window.innerHeight,
//       behavior: 'smooth'
//     });
//   };

//   return (
//     <div className="relative min-h-screen overflow-hidden bg-white">
//       {/* Background Video Container */}
//       <div className="absolute inset-0 w-full h-full">
//         {/* Video Background */}
//         <div className="absolute inset-0 w-full h-full bg-black">
//           <video
//             className="w-full h-full object-cover opacity-30"
//             autoPlay
//             muted
//             loop
//             playsInline
//           >
//             <source src="/images/215128_small.mp4" type="video/mp4" />
           
//             {/* Fallback for browsers that don't support video */}
//             Your browser does not support the video tag.
//           </video>
          
//           {/* Video Overlay - Blue and Gold Gradient */}
//           <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/60 to-blue-700/70"></div>
//           <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/20 via-transparent to-yellow-300/30"></div>
//         </div>
        
//         {/* White overlay for predominantly white background */}
//         <div className="absolute inset-0 bg-white/85"></div>
//       </div>

//       {/* Dynamic Background Layers with Blue/Gold Theme */}
//       <div className="absolute inset-0">
//         {/* Base gradient overlay - Blue and Gold */}
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-white/40 to-yellow-50/60"></div>
        
//         {/* Animated aurora effect - Blue and Gold */}
//         <div className="absolute inset-0 opacity-20">
//           <div 
//             className="absolute inset-0 bg-gradient-to-r from-blue-400/30 via-yellow-400/20 to-blue-500/30 animate-pulse"
//             style={{
//               transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
//               transition: 'transform 0.3s ease-out'
//             }}
//           ></div>
//         </div>
        
//         {/* Radial gradient spotlight - Gold */}
//         <div 
//           className="absolute inset-0 opacity-30"
//           style={{
//             background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(251, 191, 36, 0.2) 0%, transparent 60%)`
//           }}
//         ></div>

//         {/* Divine light rays - Gold */}
//         <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 opacity-15">
//           <div className="absolute inset-0 bg-gradient-to-b from-yellow-300/30 via-transparent to-transparent transform rotate-12 animate-pulse"></div>
//           <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/25 via-transparent to-transparent transform -rotate-12 animate-pulse" style={{ animationDelay: '1s' }}></div>
//           <div className="absolute inset-0 bg-gradient-to-b from-blue-400/20 via-transparent to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
//         </div>
//       </div>

//       {/* Enhanced Floating Particles */}
//       <div className="absolute inset-0 pointer-events-none">
//         {particles.map((particle) => (
//           <div
//             key={particle.id}
//             className="absolute opacity-40 hover:opacity-70 transition-opacity duration-300"
//             style={{
//               left: `${particle.x}%`,
//               top: `${particle.y}%`,
//               fontSize: `${particle.size * 1.5}rem`,
//               animation: `float ${particle.duration}s ease-in-out infinite`,
//               animationDelay: `${particle.delay}s`,
//               transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
//               color: particle.id % 2 === 0 ? '#3b82f6' : '#fbbf24'
//             }}
//           >
//             {particle.symbol}
//           </div>
//         ))}
//       </div>

//       {/* Sacred Geometry - Blue and Gold themed */}
//       <div className="absolute inset-0 opacity-8">
//         <div 
//           className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full border border-blue-300/20"
//           style={{ 
//             animation: 'spin 30s linear infinite',
//             transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px)`
//           }}
//         >
//           <div className="absolute inset-4 rounded-full border border-yellow-300/15" style={{ animation: 'spin 20s linear infinite reverse' }}></div>
//           <div className="absolute inset-8 rounded-full border border-blue-200/10" style={{ animation: 'spin 15s linear infinite' }}></div>
//         </div>
        
//         {/* Cross pattern - Blue */}
//         <div 
//           className="absolute bottom-1/4 right-1/4 w-64 h-64"
//           style={{ 
//             animation: 'pulse 4s ease-in-out infinite',
//             transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`
//           }}
//         >
//           <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-blue-400/20 transform -translate-y-1/2"></div>
//           <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-400/20 transform -translate-x-1/2"></div>
//         </div>
        
//         <div 
//           className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-yellow-300/15"
//           style={{ animation: 'ping 6s ease-in-out infinite' }}
//         ></div>
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        
//         {/* Enhanced Logo/Symbol - Blue and Gold Christian Cross */}
//         <div className={`mb-8 transform transition-all duration-2000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//           <div className="relative group">
//             <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 via-yellow-400 to-blue-600 p-1 shadow-2xl shadow-blue-500/30">
//               <div className="w-full h-full rounded-full bg-white/90 backdrop-blur-xl flex items-center justify-center relative overflow-hidden border border-blue-200/50">
//                 {/* Inner glow effect - Blue and Gold */}
//                 <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/15 via-yellow-400/15 to-blue-400/15 animate-pulse"></div>
                
//                 {/* Christian Cross with Blue and Gold glowing effect */}
//                 <div className="relative z-10 w-16 h-20">
//                   <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-1 h-12 bg-gradient-to-b from-blue-600 to-blue-800 rounded-full shadow-lg shadow-blue-400/50" style={{ animation: 'crossGlow 3s ease-in-out infinite' }}></div>
//                   <div className="absolute top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full shadow-lg shadow-blue-400/50" style={{ animation: 'crossGlow 3s ease-in-out infinite' }}></div>
//                   {/* Radiant glow behind cross - Gold */}
//                   <div className="absolute inset-0 bg-yellow-300/20 rounded-full blur-md animate-pulse"></div>
//                 </div>
                
//                 {/* Orbiting elements */}
//                 <div className="absolute inset-0">
//                   <div className="absolute top-2 left-1/2 transform -translate-x-1/2" style={{ animation: 'orbit 8s linear infinite' }}>
//                     <Sparkles className="w-4 h-4 text-yellow-500" />
//                   </div>
//                   <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2" style={{ animation: 'orbit 8s linear infinite reverse' }}>
//                     <Star className="w-4 h-4 text-blue-500" />
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             {/* Floating icons around logo - Blue and Gold */}
//             <div className="absolute -top-4 -right-4 animate-bounce" style={{ animationDelay: '0s' }}>
//               <Star className="w-8 h-8 text-yellow-500 drop-shadow-lg" />
//             </div>
//             <div className="absolute -bottom-4 -left-4 animate-bounce" style={{ animationDelay: '1s' }}>
//               <Heart className="w-8 h-8 text-blue-500 drop-shadow-lg" />
//             </div>
//             <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 animate-bounce" style={{ animationDelay: '2s' }}>
//               <div className="text-2xl">🕊️</div>
//             </div>
//             <div className="absolute top-1/2 -left-8 transform -translate-y-1/2 animate-bounce" style={{ animationDelay: '3s' }}>
//               <div className="text-2xl">🙏</div>
//             </div>
//           </div>
//         </div>

//         {/* Enhanced Main Heading - Blue and Gold */}
//         <h1 className={`text-6xl md:text-8xl lg:text-9xl font-bold mb-6 transform transition-all duration-2000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//           <span className="relative">
//             <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-yellow-600 bg-clip-text text-transparent font-extrabold tracking-tight">
//               Path of Faith
//             </span>
//             {/* Text glow effect */}
//             <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-yellow-600 bg-clip-text text-transparent blur-sm opacity-30 animate-pulse">
//               Path of Faith
//             </span>
//           </span>
//         </h1>

//         {/* Enhanced Subtitle - Darker for better contrast on white */}
//         <p className={`text-xl md:text-3xl lg:text-4xl text-gray-700 mb-12 max-w-5xl font-light leading-relaxed transform transition-all duration-2000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//           <span className="bg-gradient-to-r from-blue-800 to-gray-800 bg-clip-text text-transparent">
//             Walking in God's Love, Growing in His Grace
//           </span>
//         </p>

//         {/* Enhanced Rotating Quotes - White background with blue/gold accents */}
//         <div className={`mb-16 h-24 flex items-center justify-center transform transition-all duration-2000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//           <div className="text-center max-w-4xl relative">
//             <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-2xl border border-blue-200/50 shadow-lg"></div>
//             <div className="relative p-8">
//               <p className="text-lg md:text-2xl text-gray-700 italic mb-3 transition-all duration-1000 leading-relaxed">
//                 "{christianQuotes[currentQuote].text}"
//               </p>
//               <p className="text-sm md:text-base text-blue-600 font-medium">
//                 — {christianQuotes[currentQuote].author}
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Enhanced Call to Action Buttons - Blue and Gold */}
//         <div className={`flex flex-col sm:flex-row gap-8 mb-20 transform transition-all duration-2000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//           <button className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-lg rounded-2xl overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/30 transform-gpu">
//             <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//             <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//             <span className="relative flex items-center gap-3 font-semibold">
//               <Sun className="w-6 h-6 group-hover:rotate-180 transition-transform duration-500" />
//               Begin Your Journey
//               <Sparkles className="w-5 h-5 group-hover:scale-125 transition-transform duration-300" />
//             </span>
//           </button>
          
//           <button className="group relative px-10 py-5 bg-white/80 backdrop-blur-md text-blue-700 font-bold text-lg rounded-2xl border border-blue-300/50 overflow-hidden transition-all duration-500 hover:scale-110 hover:bg-white/90 hover:shadow-2xl hover:shadow-blue-400/20">
//             <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//             <span className="relative flex items-center gap-3 font-semibold">
//               <div className="text-xl">📖</div>
//               Explore Scripture
//               <Eye className="w-5 h-5 group-hover:scale-125 transition-transform duration-300" />
//             </span>
//           </button>
//         </div>

//         {/* Enhanced Coming Soon Badge - Blue and Gold */}
//         <div className={`mb-12 transform transition-all duration-2000 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//           <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/80 backdrop-blur-md rounded-full border border-blue-300/50 shadow-lg">
//             <div className="relative">
//               <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
//               <div className="absolute inset-0 w-3 h-3 bg-yellow-500 rounded-full animate-ping"></div>
//             </div>
//             <span className="text-blue-700 font-semibold text-lg">Church Opening 2025</span>
//             <div className="text-xl">⛪</div>
//           </div>
//         </div>

//         {/* Enhanced Scroll Indicator - Blue */}
//         <button 
//           onClick={scrollToContent}
//           className={`group transform transition-all duration-2000 delay-1500 hover:scale-125 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
//           style={{ animation: 'bounce 2s infinite' }}
//         >
//           <div className="relative p-4 rounded-full bg-white/80 backdrop-blur-sm border border-blue-300/50 group-hover:bg-white/90 transition-colors duration-300 shadow-lg">
//             <ChevronDown className="w-8 h-8 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
//             <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//           </div>
//         </button>
//       </div>

//       {/* Enhanced Bottom Gradient - White with blue tint */}
//       <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-blue-50/30 to-transparent"></div>

//       {/* Custom CSS Animations */}
//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-20px) rotate(5deg); }
//         }
        
//         @keyframes orbit {
//           from { transform: rotate(0deg) translateX(60px) rotate(0deg); }
//           to { transform: rotate(360deg) translateX(60px) rotate(-360deg); }
//         }
        
//         @keyframes crossGlow {
//           0%, 100% { 
//             box-shadow: 0 0 10px rgba(59, 130, 246, 0.4), 0 0 20px rgba(59, 130, 246, 0.2), 0 0 30px rgba(251, 191, 36, 0.1);
//           }
//           50% { 
//             box-shadow: 0 0 20px rgba(59, 130, 246, 0.6), 0 0 40px rgba(59, 130, 246, 0.4), 0 0 60px rgba(251, 191, 36, 0.2);
//           }
//         }
        
//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Hero;


import React, { useState, useEffect } from 'react';
import { ChevronDown, BookOpen, Heart, Star, Sun, Sparkles, Eye, DivideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
const Hero = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const christianQuotes = [
    { text: "He leads me beside quiet waters, he refreshes my soul", author: "Psalm 23:2-3" },
    { text: "For God so loved the world that he gave his one and only Son", author: "John 3:16" },
    { text: "Be still and know that I am God", author: "Psalm 46:10" },
    { text: "Peace I leave with you; my peace I give you", author: "John 14:27" }
  ];

  useEffect(() => {
    setIsVisible(true);

    // Rotate quotes
    const quoteInterval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % christianQuotes.length);
    }, 5000);

    // Mouse move handler for parallax effect
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearInterval(quoteInterval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      {/* Background Video Container */}
      <div className="absolute inset-0 w-full h-full">
        {/* Calming Water Video Background */}
        <div className="absolute inset-0 w-full h-full bg-black overflow-hidden">
          <video
            className="w-full h-full object-cover opacity-100"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/images/215128_small.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Video Overlay - Blue and Gold Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-blue-800/15 to-blue-700/20"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/10 via-transparent to-yellow-300/10"></div>
        </div>
        
        {/* White overlay for predominantly white background */}
        <div className="absolute inset-0 bg-white/40"></div>
      </div>

      {/* Water Surface Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Light reflections */}
        <div 
          className="absolute top-0 left-0 right-0 h-1/2 opacity-20"
          style={{
            background: `linear-gradient(to bottom, rgba(255,255,255,0.3) 0%, transparent 100%)`,
            transform: `translateX(${mousePosition.x * 0.02}px)`
          }}
        ></div>
        
        {/* Subtle water ripples */}
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute bottom-0 left-0 right-0 h-32"
            style={{
              background: `linear-gradient(to top, rgba(59, 130, 246, ${0.05 + i * 0.02}) 0%, transparent 100%)`,
              animation: `ripple ${15 + i * 5}s linear infinite`,
              animationDelay: `${i * 2}s`,
              transform: `translateY(${i * 5}px)`
            }}
          ></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        {/* Enhanced Main Heading with Water Symbolism */}
        <div className={`mb-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl mt-1 md:text-6xl lg:text-8xl font-bold mb-4">
            <span className="relative">
              <span className="bg-gradient-to-r  from-blue-600 via-blue-700 to-yellow-600 bg-clip-text text-transparent font-extrabold tracking-tight">
                Path of Faith
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-yellow-600 bg-clip-text text-transparent blur-sm opacity-30 animate-pulse">
                Path of Faith
              </span>
            </span>
          </h1>
          <div className="flex justify-center items-center gap-2">
            <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-yellow-400 rounded-full"></div>
            <DivideIcon className="w-6 h-6 text-blue-500 animate-float" />
            <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-blue-400 rounded-full"></div>
          </div>
        </div>

        {/* Enhanced Subtitle */}
        <p className={`text-xl md:text-2xl lg:text-3xl text-gray-800 drop-shadow-md mb-12 max-w-3xl mx-auto font-light leading-relaxed transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <span className="bg-gradient-to-r from-blue-800 to-gray-800 bg-clip-text text-transparent">
            Finding peace in the presence of the Divine
          </span>
        </p>

        {/* Enhanced Rotating Quotes */}
        <div className={`mb-16 max-w-2xl mx-auto transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="relative bg-white/90 backdrop-blur-sm rounded-xl border border-blue-200/50 shadow-lg p-6">
            <div className="absolute -top-3 -left-3 text-3xl text-blue-400/50">“</div>
            <div className="absolute -bottom-3 -right-3 text-3xl text-blue-400/50">”</div>
            <p className="text-lg md:text-xl text-gray-800 drop-shadow-md italic mb-3 transition-all duration-1000 leading-relaxed">
              {christianQuotes[currentQuote].text}
            </p>
            <p className="text-sm md:text-base text-blue-600 font-medium">
              — {christianQuotes[currentQuote].author}
            </p>
          </div>
        </div>

        {/* Enhanced Call to Action Buttons */}
        <div className={`flex flex-col sm:flex-row gap-6 mb-16 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Link to='/contact'>
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium text-lg rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative flex items-center justify-center gap-2">
              <BookOpen className="w-5 h-5 group-hover:rotate-6 transition-transform" />
              Begin Devotional
            </span>
          </button>
          </Link>
        
          <Link to='/contact'>
           <button className="group relative px-8 py-4 bg-white/90 backdrop-blur-sm text-blue-700 font-medium text-lg rounded-xl border border-blue-300/50 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-400/10">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative flex items-center justify-center gap-2">
              <Heart className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
              Join Our Community
            </span>
          </button>
          </Link>
         
        </div>

        {/* Enhanced Features Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {[
            { icon: <BookOpen className="w-6 h-6 text-blue-600" />, text: "Daily Devotionals" },
            { icon: <DivideIcon className="w-6 h-6 text-blue-500" />, text: "Spiritual Guidance" },
            { icon: <Star className="w-6 h-6 text-yellow-500" />, text: "Bible Studies" },
            { icon: <Heart className="w-6 h-6 text-red-500" />, text: "Prayer Community" }
          ].map((item, index) => (
            <div key={index} className="bg-white/70 backdrop-blur-sm p-4 rounded-lg border border-blue-200/40 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center gap-2">
                <div className="p-3 bg-blue-50 rounded-full">{item.icon}</div>
                <span className="text-sm font-medium text-gray-700">{item.text}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className={`transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <button 
            onClick={scrollToContent}
            className="group flex flex-col items-center text-blue-600 hover:text-blue-700 transition-colors"
          >
            <span className="text-sm font-medium mb-2">Explore More</span>
            <div className="relative p-3 rounded-full bg-white/90 backdrop-blur-sm border border-blue-300/50 group-hover:bg-white transition-colors shadow-sm group-hover:shadow">
              <ChevronDown className="w-6 h-6 animate-bounce" />
            </div>
          </button>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-blue-50/30 to-transparent pointer-events-none"></div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes ripple {
          0% { opacity: 0.8; transform: translateY(0) scale(1); }
          100% { opacity: 0; transform: translateY(-20px) scale(1.2); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
};

export default Hero;