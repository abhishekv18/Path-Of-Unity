
// import React, { useState, useEffect } from 'react';
// import { ChevronDown, Heart, Star, Sun, Moon, Sparkles, Eye, Infinity, Zap } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const Hero = () => {
//   const [currentQuote, setCurrentQuote] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);
//   const [particles, setParticles] = useState([]);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   const spiritualQuotes = [
//     { text: "Unity in diversity is the highest form of spiritual evolution", author: "Path of Unity" },
//     { text: "In the silence between breaths, we find the divine", author: "Ancient Wisdom" },
//     { text: "Love is the bridge between souls across all traditions", author: "Universal Truth" },
//     { text: "Where many paths converge, enlightenment awaits", author: "Sacred Teaching" }
//   ];

//   const floatingSymbols = ['🕉️', '✝️', '☪️', '🔯', '☯️', '🕎', '☸️', '🌸', '🕊️'];

//   useEffect(() => {
//     setIsVisible(true);
    
//     // Initialize floating particles
//     const newParticles = Array.from({ length: 25 }, (_, i) => ({
//       id: i,
//       x: Math.random() * 100,
//       y: Math.random() * 100,
//       symbol: floatingSymbols[Math.floor(Math.random() * floatingSymbols.length)],
//       delay: Math.random() * 5,
//       duration: 12 + Math.random() * 8,
//       size: 0.8 + Math.random() * 0.4
//     }));
//     setParticles(newParticles);

//     // Rotate quotes
//     const quoteInterval = setInterval(() => {
//       setCurrentQuote((prev) => (prev + 1) % spiritualQuotes.length);
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
//     <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-rose-900">
//       {/* Dynamic Background Layers */}
//       <div className="absolute inset-0">
//         {/* Base gradient overlay */}
//         <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-purple-800/30 to-pink-900/40"></div>
        
//         {/* Animated aurora effect */}
//         <div className="absolute inset-0 opacity-30">
//           <div 
//             className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-pink-400/20 animate-pulse"
//             style={{
//               transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
//               transition: 'transform 0.3s ease-out'
//             }}
//           ></div>
//         </div>
        
//         {/* Radial gradient spotlight */}
//         <div 
//           className="absolute inset-0 opacity-40"
//           style={{
//             background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)`
//           }}
//         ></div>
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
//               transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
//             }}
//           >
//             {particle.symbol}
//           </div>
//         ))}
//       </div>

//       {/* Sacred Geometry */}
//       <div className="absolute inset-0 opacity-10">
//         <div 
//           className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full border border-white/30"
//           style={{ 
//             animation: 'spin 30s linear infinite',
//             transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px)`
//           }}
//         >
//           <div className="absolute inset-4 rounded-full border border-white/20" style={{ animation: 'spin 20s linear infinite reverse' }}></div>
//           <div className="absolute inset-8 rounded-full border border-white/10" style={{ animation: 'spin 15s linear infinite' }}></div>
//         </div>
        
//         <div 
//           className="absolute bottom-1/4 right-1/4 w-64 h-64 rotate-45 border border-white/30"
//           style={{ 
//             animation: 'pulse 4s ease-in-out infinite',
//             transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`
//           }}
//         >
//           <div className="absolute inset-4 rotate-45 border border-white/20 animate-pulse"></div>
//         </div>
        
//         <div 
//           className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-white/20"
//           style={{ animation: 'ping 6s ease-in-out infinite' }}
//         ></div>
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        
//         {/* Enhanced Logo/Symbol */}
//         <div className={`mb-8 transform transition-all duration-2000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//           <div className="relative group">
//             <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 p-1 shadow-2xl shadow-purple-500/50">
//               <div className="w-full h-full rounded-full bg-slate-900/60 backdrop-blur-xl flex items-center justify-center relative overflow-hidden">
//                 {/* Inner glow effect */}
//                 <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-400/20 via-pink-400/20 to-cyan-400/20 animate-pulse"></div>
                
//                 {/* Main symbol */}
//                 <div className="text-5xl relative z-10" style={{ animation: 'float 6s ease-in-out infinite' }}>🕉️</div>
                
//                 {/* Orbiting elements */}
//                 <div className="absolute inset-0">
//                   <div className="absolute top-2 left-1/2 transform -translate-x-1/2" style={{ animation: 'orbit 8s linear infinite' }}>
//                     <Sparkles className="w-4 h-4 text-cyan-400" />
//                   </div>
//                   <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2" style={{ animation: 'orbit 8s linear infinite reverse' }}>
//                     <Zap className="w-4 h-4 text-violet-400" />
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             {/* Floating icons around logo */}
//             <div className="absolute -top-4 -right-4 animate-bounce" style={{ animationDelay: '0s' }}>
//               <Star className="w-8 h-8 text-yellow-400 drop-shadow-lg" />
//             </div>
//             <div className="absolute -bottom-4 -left-4 animate-bounce" style={{ animationDelay: '1s' }}>
//               <Heart className="w-8 h-8 text-pink-400 drop-shadow-lg" />
//             </div>
//             <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 animate-bounce" style={{ animationDelay: '2s' }}>
//               <Eye className="w-6 h-6 text-purple-400 drop-shadow-lg" />
//             </div>
//             <div className="absolute top-1/2 -left-8 transform -translate-y-1/2 animate-bounce" style={{ animationDelay: '3s' }}>
//               <Infinity className="w-6 h-6 text-cyan-400 drop-shadow-lg" />
//             </div>
//           </div>
//         </div>

//         {/* Enhanced Main Heading */}
//         <h1 className={`text-6xl md:text-8xl lg:text-9xl font-bold mb-6 transform transition-all duration-2000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//           <span className="relative">
//             <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent font-extrabold tracking-tight">
//               Path of Unity
//             </span>
//             {/* Text glow effect */}
//             <span className="absolute inset-0 bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent blur-sm opacity-50 animate-pulse">
//               Path of Unity
//             </span>
//           </span>
//         </h1>

//         {/* Enhanced Subtitle */}
//         <p className={`text-xl md:text-3xl lg:text-4xl text-slate-200 mb-12 max-w-5xl font-light leading-relaxed transform transition-all duration-2000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//           <span className="bg-gradient-to-r from-slate-300 to-slate-100 bg-clip-text text-transparent">
//             Where All Spiritual Paths Converge in Love and Understanding
//           </span>
//         </p>

//         {/* Enhanced Rotating Quotes */}
//         <div className={`mb-16 h-24 flex items-center justify-center transform transition-all duration-2000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//           <div className="text-center max-w-4xl relative">
//             <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"></div>
//             <div className="relative p-8">
//               <p className="text-lg md:text-2xl text-slate-200 italic mb-3 transition-all duration-1000 leading-relaxed">
//                 "{spiritualQuotes[currentQuote].text}"
//               </p>
//               <p className="text-sm md:text-base text-slate-400 font-medium">
//                 — {spiritualQuotes[currentQuote].author}
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Enhanced Call to Action Buttons */}
//         <div className={`flex flex-col sm:flex-row gap-8 mb-20 transform transition-all duration-2000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//             <Link to='/contact'>
//           <button className="group relative px-10 py-5 bg-gradient-to-r from-violet-500 to-pink-500 text-white font-bold text-lg rounded-2xl overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-violet-500/50 transform-gpu">
//             <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//             <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//             <span className="relative flex items-center gap-3 font-semibold">
//               <Sun className="w-6 h-6 group-hover:rotate-180 transition-transform duration-500" />
//               Begin Your Journey
//               <Sparkles className="w-5 h-5 group-hover:scale-125 transition-transform duration-300" />
//             </span>
//           </button>
//             </Link>
//             <Link to='/teachings'>
//           <button className="group relative px-10 py-5 bg-white/10 backdrop-blur-md text-white font-bold text-lg rounded-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:scale-110 hover:bg-white/20 hover:shadow-2xl hover:shadow-white/20">
//             <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//             <span className="relative flex items-center gap-3 font-semibold">
//               <Moon className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
//               Explore Teachings
//               <Eye className="w-5 h-5 group-hover:scale-125 transition-transform duration-300" />
//             </span>
//           </button>
//             </Link>
//         </div>

//         {/* Enhanced Coming Soon Badge */}
//         <div className={`mb-12 transform transition-all duration-2000 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//           <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 backdrop-blur-md rounded-full border border-emerald-400/30 shadow-lg">
//             <div className="relative">
//               <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
//               <div className="absolute inset-0 w-3 h-3 bg-emerald-400 rounded-full animate-ping"></div>
//             </div>
//             <span className="text-slate-200 font-semibold text-lg">Temple Opening 2025</span>
//             <Sparkles className="w-5 h-5 text-emerald-400 animate-pulse" />
//           </div>
//         </div>

//         {/* Enhanced Scroll Indicator */}
//         <button 
//           onClick={scrollToContent}
//           className={`group transform transition-all duration-2000 delay-1500 hover:scale-125 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
//           style={{ animation: 'bounce 2s infinite' }}
//         >
//           <div className="relative p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 group-hover:bg-white/20 transition-colors duration-300">
//             <ChevronDown className="w-8 h-8 text-slate-300 group-hover:text-white transition-colors duration-300" />
//             <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//           </div>
//         </button>
//       </div>

//       {/* Enhanced Bottom Gradient */}
//       <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent"></div>

//       {/* Custom CSS Animations */}
//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-20px) rotate(180deg); }
//         }
        
//         @keyframes orbit {
//           from { transform: rotate(0deg) translateX(60px) rotate(0deg); }
//           to { transform: rotate(360deg) translateX(60px) rotate(-360deg); }
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
import { ChevronDown, Heart, Star, Sun, Moon, Sparkles, Eye, Infinity, Cross } from 'lucide-react';

const Hero = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const christianQuotes = [
    { text: "For God so loved the world that he gave his one and only Son", author: "John 3:16" },
    { text: "Be still and know that I am God", author: "Psalm 46:10" },
    { text: "Trust in the Lord with all your heart", author: "Proverbs 3:5" },
    { text: "I can do all things through Christ who strengthens me", author: "Philippians 4:13" }
  ];

  const christianSymbols = ['✝️', '🙏', '🕊️', '⛪', '📿', '🌟', '💒', '🔔', '👼'];

  useEffect(() => {
    setIsVisible(true);
    
    // Initialize floating particles
    const newParticles = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      symbol: christianSymbols[Math.floor(Math.random() * christianSymbols.length)],
      delay: Math.random() * 5,
      duration: 12 + Math.random() * 8,
      size: 0.8 + Math.random() * 0.4
    }));
    setParticles(newParticles);

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
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-amber-900 via-blue-900 to-yellow-800">
      {/* Dynamic Background Layers */}
      <div className="absolute inset-0">
        {/* Base gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/40 via-blue-800/30 to-amber-900/40"></div>
        
        {/* Animated aurora effect */}
        <div className="absolute inset-0 opacity-30">
          <div 
            className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-blue-500/20 to-amber-400/20 animate-pulse"
            style={{
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
              transition: 'transform 0.3s ease-out'
            }}
          ></div>
        </div>
        
        {/* Radial gradient spotlight */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(251, 191, 36, 0.3) 0%, transparent 50%)`
          }}
        ></div>

        {/* Divine light rays */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-b from-yellow-300/40 via-transparent to-transparent transform rotate-12 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-yellow-300/40 via-transparent to-transparent transform -rotate-12 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute inset-0 bg-gradient-to-b from-yellow-300/40 via-transparent to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute opacity-40 hover:opacity-70 transition-opacity duration-300"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              fontSize: `${particle.size * 1.5}rem`,
              animation: `float ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`,
              transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
            }}
          >
            {particle.symbol}
          </div>
        ))}
      </div>

      {/* Sacred Geometry - Christian themed */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full border border-yellow-300/30"
          style={{ 
            animation: 'spin 30s linear infinite',
            transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px)`
          }}
        >
          <div className="absolute inset-4 rounded-full border border-amber-300/20" style={{ animation: 'spin 20s linear infinite reverse' }}></div>
          <div className="absolute inset-8 rounded-full border border-yellow-200/10" style={{ animation: 'spin 15s linear infinite' }}></div>
        </div>
        
        {/* Cross pattern */}
        <div 
          className="absolute bottom-1/4 right-1/4 w-64 h-64"
          style={{ 
            animation: 'pulse 4s ease-in-out infinite',
            transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`
          }}
        >
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-yellow-300/30 transform -translate-y-1/2"></div>
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-yellow-300/30 transform -translate-x-1/2"></div>
        </div>
        
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-amber-300/20"
          style={{ animation: 'ping 6s ease-in-out infinite' }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        
        {/* Enhanced Logo/Symbol - Christian Cross */}
        <div className={`mb-8 transform transition-all duration-2000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="relative group">
            <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-r from-yellow-400 via-amber-400 to-blue-400 p-1 shadow-2xl shadow-yellow-500/50">
              <div className="w-full h-full rounded-full bg-amber-900/60 backdrop-blur-xl flex items-center justify-center relative overflow-hidden">
                {/* Inner glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/20 via-amber-400/20 to-blue-400/20 animate-pulse"></div>
                
                {/* Christian Cross with glowing effect */}
                <div className="relative z-10 w-16 h-20">
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-1 h-12 bg-gradient-to-b from-yellow-200 to-amber-200 rounded-full shadow-lg shadow-yellow-400/50" style={{ animation: 'crossGlow 3s ease-in-out infinite' }}></div>
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-1 bg-gradient-to-r from-yellow-200 to-amber-200 rounded-full shadow-lg shadow-yellow-400/50" style={{ animation: 'crossGlow 3s ease-in-out infinite' }}></div>
                  {/* Radiant glow behind cross */}
                  <div className="absolute inset-0 bg-yellow-300/30 rounded-full blur-md animate-pulse"></div>
                </div>
                
                {/* Orbiting elements */}
                <div className="absolute inset-0">
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2" style={{ animation: 'orbit 8s linear infinite' }}>
                    <Sparkles className="w-4 h-4 text-yellow-400" />
                  </div>
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2" style={{ animation: 'orbit 8s linear infinite reverse' }}>
                    <Star className="w-4 h-4 text-amber-400" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating icons around logo */}
            <div className="absolute -top-4 -right-4 animate-bounce" style={{ animationDelay: '0s' }}>
              <Star className="w-8 h-8 text-yellow-400 drop-shadow-lg" />
            </div>
            <div className="absolute -bottom-4 -left-4 animate-bounce" style={{ animationDelay: '1s' }}>
              <Heart className="w-8 h-8 text-amber-400 drop-shadow-lg" />
            </div>
            <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 animate-bounce" style={{ animationDelay: '2s' }}>
              <div className="text-2xl">🕊️</div>
            </div>
            <div className="absolute top-1/2 -left-8 transform -translate-y-1/2 animate-bounce" style={{ animationDelay: '3s' }}>
              <div className="text-2xl">🙏</div>
            </div>
          </div>
        </div>

        {/* Enhanced Main Heading */}
        <h1 className={`text-6xl md:text-8xl lg:text-9xl font-bold mb-6 transform transition-all duration-2000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <span className="relative">
            <span className="bg-gradient-to-r from-yellow-400 via-amber-400 to-blue-400 bg-clip-text text-transparent font-extrabold tracking-tight">
              Path of Faith
            </span>
            {/* Text glow effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-amber-400 to-blue-400 bg-clip-text text-transparent blur-sm opacity-50 animate-pulse">
              Path of Faith
            </span>
          </span>
        </h1>

        {/* Enhanced Subtitle */}
        <p className={`text-xl md:text-3xl lg:text-4xl text-amber-100 mb-12 max-w-5xl font-light leading-relaxed transform transition-all duration-2000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <span className="bg-gradient-to-r from-amber-200 to-yellow-100 bg-clip-text text-transparent">
            Walking in God's Love, Growing in His Grace
          </span>
        </p>

        {/* Enhanced Rotating Quotes */}
        <div className={`mb-16 h-24 flex items-center justify-center transform transition-all duration-2000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center max-w-4xl relative">
            <div className="absolute inset-0 bg-amber-900/20 backdrop-blur-sm rounded-2xl border border-yellow-400/20"></div>
            <div className="relative p-8">
              <p className="text-lg md:text-2xl text-amber-100 italic mb-3 transition-all duration-1000 leading-relaxed">
                "{christianQuotes[currentQuote].text}"
              </p>
              <p className="text-sm md:text-base text-yellow-300 font-medium">
                — {christianQuotes[currentQuote].author}
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Call to Action Buttons */}
        <div className={`flex flex-col sm:flex-row gap-8 mb-20 transform transition-all duration-2000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <button className="group relative px-10 py-5 bg-gradient-to-r from-yellow-500 to-amber-500 text-amber-900 font-bold text-lg rounded-2xl overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-yellow-500/50 transform-gpu">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative flex items-center gap-3 font-semibold">
              <Sun className="w-6 h-6 group-hover:rotate-180 transition-transform duration-500" />
              Begin Your Journey
              <Sparkles className="w-5 h-5 group-hover:scale-125 transition-transform duration-300" />
            </span>
          </button>
          
          <button className="group relative px-10 py-5 bg-amber-900/20 backdrop-blur-md text-amber-100 font-bold text-lg rounded-2xl border border-yellow-400/30 overflow-hidden transition-all duration-500 hover:scale-110 hover:bg-amber-900/30 hover:shadow-2xl hover:shadow-amber-400/20">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative flex items-center gap-3 font-semibold">
              <div className="text-xl">📖</div>
              Explore Scripture
              <Eye className="w-5 h-5 group-hover:scale-125 transition-transform duration-300" />
            </span>
          </button>
        </div>

        {/* Enhanced Coming Soon Badge */}
        <div className={`mb-12 transform transition-all duration-2000 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500/20 to-yellow-500/20 backdrop-blur-md rounded-full border border-yellow-400/30 shadow-lg">
            <div className="relative">
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
            </div>
            <span className="text-amber-100 font-semibold text-lg">Church Opening 2025</span>
            <div className="text-xl">⛪</div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <button 
          onClick={scrollToContent}
          className={`group transform transition-all duration-2000 delay-1500 hover:scale-125 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          style={{ animation: 'bounce 2s infinite' }}
        >
          <div className="relative p-4 rounded-full bg-amber-900/20 backdrop-blur-sm border border-yellow-400/30 group-hover:bg-amber-900/30 transition-colors duration-300">
            <ChevronDown className="w-8 h-8 text-amber-200 group-hover:text-yellow-200 transition-colors duration-300" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </button>
      </div>

      {/* Enhanced Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-amber-900/80 via-amber-900/40 to-transparent"></div>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(60px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(60px) rotate(-360deg); }
        }
        
        @keyframes crossGlow {
          0%, 100% { 
            box-shadow: 0 0 10px rgba(251, 191, 36, 0.5), 0 0 20px rgba(251, 191, 36, 0.3), 0 0 30px rgba(251, 191, 36, 0.1);
          }
          50% { 
            box-shadow: 0 0 20px rgba(251, 191, 36, 0.8), 0 0 40px rgba(251, 191, 36, 0.6), 0 0 60px rgba(251, 191, 36, 0.3);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;