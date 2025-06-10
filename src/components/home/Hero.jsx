
// import React, { useState, useEffect } from 'react';
// import { ChevronDown, BookOpen, Heart, Star, Sun, Sparkles, Eye, DivideIcon } from 'lucide-react';
// import { Link } from 'react-router-dom';
// const Hero = () => {
//   const [currentQuote, setCurrentQuote] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   const christianQuotes = [
//     { text: "He leads me beside quiet waters, he refreshes my soul", author: "Psalm 23:2-3" },
//     { text: "For God so loved the world that he gave his one and only Son", author: "John 3:16" },
//     { text: "Be still and know that I am God", author: "Psalm 46:10" },
//     { text: "Peace I leave with you; my peace I give you", author: "John 14:27" }
//   ];

//   useEffect(() => {
//     setIsVisible(true);

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
//         {/* Calming Water Video Background */}
//         <div className="absolute inset-0 w-full h-full bg-black overflow-hidden">
//           <video
//             className="w-full h-full object-cover opacity-100"
//             autoPlay
//             muted
//             loop
//             playsInline
//           >
//             <source src="/images/215128_small.mp4" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
          
//           {/* Video Overlay - Blue and Gold Gradient */}
//           <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-blue-800/15 to-blue-700/20"></div>
//           <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/10 via-transparent to-yellow-300/10"></div>
//         </div>
        
//         {/* White overlay for predominantly white background */}
//         <div className="absolute inset-0 bg-white/40"></div>
//       </div>

//       {/* Water Surface Effects */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         {/* Light reflections */}
//         <div 
//           className="absolute top-0 left-0 right-0 h-1/2 opacity-20"
//           style={{
//             background: `linear-gradient(to bottom, rgba(255,255,255,0.3) 0%, transparent 100%)`,
//             transform: `translateX(${mousePosition.x * 0.02}px)`
//           }}
//         ></div>
        
//         {/* Subtle water ripples */}
//         {[...Array(3)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute bottom-0 left-0 right-0 h-32"
//             style={{
//               background: `linear-gradient(to top, rgba(59, 130, 246, ${0.05 + i * 0.02}) 0%, transparent 100%)`,
//               animation: `ripple ${15 + i * 5}s linear infinite`,
//               animationDelay: `${i * 2}s`,
//               transform: `translateY(${i * 5}px)`
//             }}
//           ></div>
//         ))}
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
//         {/* Enhanced Main Heading with Water Symbolism */}
//         <div className={`mb-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//           <h1 className="text-5xl mt-1 md:text-6xl lg:text-8xl font-bold mb-4">
//             <span className="relative">
//               <span className="bg-gradient-to-r  from-blue-600 via-blue-700 to-yellow-600 bg-clip-text text-transparent font-extrabold tracking-tight">
//                 Path of Faith
//               </span>
//               <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-yellow-600 bg-clip-text text-transparent blur-sm opacity-30 animate-pulse">
//                 Path of Faith
//               </span>
//             </span>
//           </h1>
//           <div className="flex justify-center items-center gap-2">
//             <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-yellow-400 rounded-full"></div>
//             <DivideIcon className="w-6 h-6 text-blue-500 animate-float" />
//             <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-blue-400 rounded-full"></div>
//           </div>
//         </div>

//         {/* Enhanced Subtitle */}
//         <p className={`text-xl md:text-2xl lg:text-3xl text-gray-800 drop-shadow-md mb-12 max-w-3xl mx-auto font-light leading-relaxed transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//           <span className="bg-gradient-to-r from-blue-800 to-gray-800 bg-clip-text text-transparent">
//             Finding peace in the presence of the Divine
//           </span>
//         </p>

//         {/* Enhanced Rotating Quotes */}
//         <div className={`mb-16 max-w-2xl mx-auto transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//           <div className="relative bg-white/90 backdrop-blur-sm rounded-xl border border-blue-200/50 shadow-lg p-6">
//             <div className="absolute -top-3 -left-3 text-3xl text-blue-400/50">“</div>
//             <div className="absolute -bottom-3 -right-3 text-3xl text-blue-400/50">”</div>
//             <p className="text-lg md:text-xl text-gray-800 drop-shadow-md italic mb-3 transition-all duration-1000 leading-relaxed">
//               {christianQuotes[currentQuote].text}
//             </p>
//             <p className="text-sm md:text-base text-blue-600 font-medium">
//               — {christianQuotes[currentQuote].author}
//             </p>
//           </div>
//         </div>

//         {/* Enhanced Call to Action Buttons */}
//         <div className={`flex flex-col sm:flex-row gap-6 mb-16 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//           <Link to='/contact'>
//             <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium text-lg rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
//             <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//             <span className="relative flex items-center justify-center gap-2">
//               <BookOpen className="w-5 h-5 group-hover:rotate-6 transition-transform" />
//               Begin Devotional
//             </span>
//           </button>
//           </Link>
        
//           <Link to='/contact'>
//            <button className="group relative px-8 py-4 bg-white/90 backdrop-blur-sm text-blue-700 font-medium text-lg rounded-xl border border-blue-300/50 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-400/10">
//             <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//             <span className="relative flex items-center justify-center gap-2">
//               <Heart className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
//               Join Our Community
//             </span>
//           </button>
//           </Link>
         
//         </div>

//         {/* Enhanced Features Grid */}
//         <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//           {[
//             { icon: <BookOpen className="w-6 h-6 text-blue-600" />, text: "Daily Devotionals" },
//             { icon: <DivideIcon className="w-6 h-6 text-blue-500" />, text: "Spiritual Guidance" },
//             { icon: <Star className="w-6 h-6 text-yellow-500" />, text: "Bible Studies" },
//             { icon: <Heart className="w-6 h-6 text-red-500" />, text: "Prayer Community" }
//           ].map((item, index) => (
//             <div key={index} className="bg-white/70 backdrop-blur-sm p-4 rounded-lg border border-blue-200/40 shadow-sm hover:shadow-md transition-shadow">
//               <div className="flex flex-col items-center gap-2">
//                 <div className="p-3 bg-blue-50 rounded-full">{item.icon}</div>
//                 <span className="text-sm font-medium text-gray-700">{item.text}</span>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Enhanced Scroll Indicator */}
//         <div className={`transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//           <button 
//             onClick={scrollToContent}
//             className="group flex flex-col items-center text-blue-600 hover:text-blue-700 transition-colors"
//           >
//             <span className="text-sm font-medium mb-2">Explore More</span>
//             <div className="relative p-3 rounded-full bg-white/90 backdrop-blur-sm border border-blue-300/50 group-hover:bg-white transition-colors shadow-sm group-hover:shadow">
//               <ChevronDown className="w-6 h-6 animate-bounce" />
//             </div>
//           </button>
//         </div>
//       </div>

//       {/* Bottom Gradient */}
//       <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-blue-50/30 to-transparent pointer-events-none"></div>

//       {/* Custom Animations */}
//       <style jsx>{`
//         @keyframes ripple {
//           0% { opacity: 0.8; transform: translateY(0) scale(1); }
//           100% { opacity: 0; transform: translateY(-20px) scale(1.2); }
//         }
//         @keyframes bounce {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-8px); }
//         }
//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
//         @keyframes float {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-10px); }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Hero;

// import React, { useState, useEffect } from 'react';
// import { ChevronDown, Heart, Star, Sun, Moon, Sparkles, Eye, Infinity } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const Hero = () => {
//   const [currentQuote, setCurrentQuote] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);
//   const [particles, setParticles] = useState([]);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   const interfaithQuotes = [
//     { text: "For God so loved the world that he gave his one and only Son", author: "John 3:16" },
//     { text: "Be still and know that I am God", author: "Psalm 46:10" },
//     { text: "Trust in the Lord with all your heart", author: "Proverbs 3:5" },
//     { text: "I can do all things through Christ who strengthens me", author: "Philippians 4:13" }
//   ];

//   // Interfaith symbols matching the logo
//   const interfaithSymbols = ['✝️', '☪️', '🕎', '☸️', '🔯', '☮️', '⭐', '🌟', '💫'];

//   useEffect(() => {
//     setIsVisible(true);
    
//     // Initialize floating particles with gentle movement
//     const newParticles = Array.from({ length: 20 }, (_, i) => ({
//       id: i,
//       x: Math.random() * 100,
//       y: Math.random() * 100,
//       symbol: interfaithSymbols[Math.floor(Math.random() * interfaithSymbols.length)],
//       delay: Math.random() * 5,
//       duration: 15 + Math.random() * 10,
//       size: 0.9 + Math.random() * 0.3
//     }));
//     setParticles(newParticles);

//     // Rotate quotes
//     const quoteInterval = setInterval(() => {
//       setCurrentQuote((prev) => (prev + 1) % interfaithQuotes.length);
//     }, 5000);

//     // Mouse move handler for subtle parallax effect
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
//     <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-yellow-50 via-amber-25 to-orange-50">
//       {/* Background Video Container with golden tint */}
//       <div className="absolute inset-0 w-full h-full">
//         <div className="absolute inset-0 w-full h-full bg-black">
//           <video
//             className="w-full h-full object-cover opacity-80"
//             autoPlay
//             muted
//             loop
//             playsInline
//           >
//             <source src="/images/215128_small.mp4" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
          
//           {/* Golden overlay matching the logo background */}
//           <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/60 via-amber-300/40 to-orange-300/50"></div>
//         </div>
        
//         {/* Light spiritual overlay */}
//         <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/90 via-amber-50/85 to-orange-50/90"></div>
//       </div>

//       {/* Dynamic Background Layers with Golden Theme */}
//       <div className="absolute inset-0">
//         {/* Base gradient overlay - Golden spiritual theme */}
//         <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/70 via-amber-50/60 to-orange-100/70"></div>
        
//         {/* Animated aurora effect - Golden and Blue */}
//         <div className="absolute inset-0 opacity-15">
//           <div 
//             className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-yellow-400/25 to-blue-600/20"
//             style={{
//               transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`,
//               transition: 'transform 0.5s ease-out',
//               animation: 'gentleWave 12s ease-in-out infinite'
//             }}
//           ></div>
//         </div>
        
//         {/* Radial gradient spotlight - Warm golden */}
//         <div 
//           className="absolute inset-0 opacity-25"
//           style={{
//             background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(251, 191, 36, 0.15) 0%, transparent 70%)`
//           }}
//         ></div>

//         {/* Divine light rays - Subtle golden */}
//         <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 opacity-10">
//           <div className="absolute inset-0 bg-gradient-to-b from-yellow-300/20 via-transparent to-transparent transform rotate-15" style={{ animation: 'gentlePulse 8s ease-in-out infinite' }}></div>
//           <div className="absolute inset-0 bg-gradient-to-b from-amber-400/15 via-transparent to-transparent transform -rotate-15" style={{ animation: 'gentlePulse 8s ease-in-out infinite', animationDelay: '2s' }}></div>
//           <div className="absolute inset-0 bg-gradient-to-b from-blue-400/10 via-transparent to-transparent" style={{ animation: 'gentlePulse 8s ease-in-out infinite', animationDelay: '4s' }}></div>
//         </div>
//       </div>

//       {/* Gentle Floating Particles */}
//       <div className="absolute inset-0 pointer-events-none">
//         {particles.map((particle) => (
//           <div
//             key={particle.id}
//             className="absolute opacity-30 transition-opacity duration-500"
//             style={{
//               left: `${particle.x}%`,
//               top: `${particle.y}%`,
//               fontSize: `${particle.size * 1.3}rem`,
//               animation: `gentleFloat ${particle.duration}s ease-in-out infinite`,
//               animationDelay: `${particle.delay}s`,
//               transform: `translate(${mousePosition.x * 0.008}px, ${mousePosition.y * 0.008}px)`,
//               color: particle.id % 3 === 0 ? '#1e40af' : particle.id % 3 === 1 ? '#d97706' : '#7c2d12'
//             }}
//           >
//             {particle.symbol}
//           </div>
//         ))}
//       </div>

//       {/* Sacred Geometry - Blue and Golden themed */}
//       <div className="absolute inset-0 opacity-6">
//         <div 
//           className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full border border-blue-400/15"
//           style={{ 
//             animation: 'slowSpin 40s linear infinite',
//             transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
//           }}
//         >
//           <div className="absolute inset-6 rounded-full border border-amber-400/12" style={{ animation: 'slowSpin 30s linear infinite reverse' }}></div>
//           <div className="absolute inset-12 rounded-full border border-blue-300/8" style={{ animation: 'slowSpin 25s linear infinite' }}></div>
//         </div>
        
//         {/* Interfaith symbol pattern */}
//         <div 
//           className="absolute bottom-1/4 right-1/4 w-64 h-64"
//           style={{ 
//             animation: 'gentlePulse 6s ease-in-out infinite',
//             transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`
//           }}
//         >
//           <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-blue-500/15 transform -translate-y-1/2"></div>
//           <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-500/15 transform -translate-x-1/2"></div>
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-amber-400/20"></div>
//         </div>
        
//         <div 
//           className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-amber-300/10"
//           style={{ animation: 'gentleExpand 10s ease-in-out infinite' }}
//         ></div>
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        
//         {/* Enhanced Logo/Symbol - Blue and Golden Interfaith */}
//         <div className={`mb-8 transform transition-all duration-2000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//           <div className="relative group">
//             <div className="w-44 h-44 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-600 via-amber-400 to-blue-700 p-1.5 shadow-2xl shadow-amber-500/20">
//               <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-50/95 to-amber-50/95 backdrop-blur-xl flex items-center justify-center relative overflow-hidden border border-amber-200/30">
//                 {/* Inner glow effect */}
//                 <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/8 via-amber-400/12 to-blue-400/8" style={{ animation: 'gentlePulse 4s ease-in-out infinite' }}></div>
                
//                 {/* Central Interfaith Symbol */}
//                 <div className="relative z-10 w-20 h-24 flex items-center justify-center">
//                   {/* Christian Cross */}
//                   <div className="absolute w-2 h-16 bg-gradient-to-b from-blue-700 to-blue-900 rounded-full shadow-lg"></div>
//                   <div className="absolute w-10 h-2 bg-gradient-to-r from-blue-700 to-blue-900 rounded-full shadow-lg"></div>
//                   {/* Radiant glow behind cross */}
//                   <div className="absolute inset-0 bg-amber-300/15 rounded-full blur-lg" style={{ animation: 'gentlePulse 5s ease-in-out infinite' }}></div>
//                 </div>
                
//                 {/* Orbiting interfaith symbols */}
//                 <div className="absolute inset-0">
//                   <div className="absolute top-3 left-1/2 transform -translate-x-1/2 text-blue-600" style={{ animation: 'gentleOrbit 12s linear infinite' }}>
//                     <div className="text-lg">☪️</div>
//                   </div>
//                   <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-amber-600" style={{ animation: 'gentleOrbit 12s linear infinite reverse' }}>
//                     <div className="text-lg">🕎</div>
//                   </div>
//                   <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-700" style={{ animation: 'gentleOrbit 15s linear infinite', animationDelay: '3s' }}>
//                     <div className="text-lg">☸️</div>
//                   </div>
//                   <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-amber-700" style={{ animation: 'gentleOrbit 15s linear infinite reverse', animationDelay: '3s' }}>
//                     <div className="text-lg">🔯</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             {/* Floating icons around logo with gentle movement */}
//             <div className="absolute -top-4 -right-4" style={{ animation: 'gentleFloat 4s ease-in-out infinite' }}>
//               <Star className="w-8 h-8 text-amber-500 drop-shadow-lg" />
//             </div>
//             <div className="absolute -bottom-4 -left-4" style={{ animation: 'gentleFloat 4s ease-in-out infinite', animationDelay: '1s' }}>
//               <Heart className="w-8 h-8 text-blue-600 drop-shadow-lg" />
//             </div>
//             <div className="absolute top-1/2 -right-8 transform -translate-y-1/2" style={{ animation: 'gentleFloat 5s ease-in-out infinite', animationDelay: '2s' }}>
//               <div className="text-2xl">☮️</div>
//             </div>
//             <div className="absolute top-1/2 -left-8 transform -translate-y-1/2" style={{ animation: 'gentleFloat 5s ease-in-out infinite', animationDelay: '3s' }}>
//               <div className="text-2xl">🙏</div>
//             </div>
//           </div>
//         </div>

//         {/* Enhanced Main Heading - Blue and Golden */}
//         <h1 className={`text-6xl md:text-8xl lg:text-9xl font-bold mb-6 transform transition-all duration-2000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//           <span className="relative">
//             <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-yellow-600 bg-clip-text text-transparent font-extrabold tracking-tight">
//               Path of Faith
//             </span>
//             {/* Text glow effect */}
//             <span className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-800 to-yellow-600 bg-clip-text text-transparent blur-sm opacity-10" style={{ animation: 'gentlePulse 3s ease-in-out infinite' }}>
//               Path of Faith
//             </span>
//           </span>
//         </h1>

//         {/* Enhanced Subtitle */}
//         <p className={`text-xl md:text-3xl lg:text-4xl text-gray-800 mb-12 max-w-5xl font-light leading-relaxed transform transition-all duration-2000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//           <span className="bg-gradient-to-r from-blue-800 to-amber-800 bg-clip-text text-transparent">
//             Walking in God's Love, Growing in His Grace
//           </span>
//         </p>

//         {/* Enhanced Rotating Quotes */}
//         <div className={`mb-16 h-24 flex items-center justify-center transform transition-all duration-2000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//           <div className="text-center max-w-4xl relative">
//             <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/90 to-amber-50/90 backdrop-blur-sm rounded-2xl border border-amber-200/40 shadow-lg"></div>
//             <div className="relative p-8">
//               <p className="text-lg md:text-2xl text-gray-800 italic mb-3 transition-all duration-1000 leading-relaxed">
//                 "{interfaithQuotes[currentQuote].text}"
//               </p>
//               <p className="text-sm md:text-base text-blue-700 font-medium">
//                 — {interfaithQuotes[currentQuote].author}
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Enhanced Call to Action Buttons */}
//         <div className={`flex flex-col sm:flex-row gap-8 mb-20 transform transition-all duration-2000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//           <Link to='/contact'>
//               <button className="group relative px-10 py-5 bg-gradient-to-r from-blue-700 to-blue-800 text-white font-bold text-lg rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 transform-gpu">
//             <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//             <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//             <span className="relative flex items-center gap-3 font-semibold">
//               <Sun className="w-6 h-6 group-hover:rotate-90 transition-transform duration-500" />
//               Begin Your Journey
//               <Sparkles className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
//             </span>
//           </button>
//           </Link>
      
//           <Link to='/teachings'>
//             <button className="group relative px-10 py-5 bg-gradient-to-br from-yellow-50/90 to-amber-50/90 backdrop-blur-md text-blue-800 font-bold text-lg rounded-2xl border border-amber-300/50 overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-400/20">
//             <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//             <span className="relative flex items-center gap-3 font-semibold">
//               <div className="text-xl">📖</div>
//               Explore Scripture
//               <Eye className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
//             </span>
//           </button>
//           </Link>
        
//         </div>

//         {/* Enhanced Coming Soon Badge */}
//         <div className={`mb-12 transform transition-all duration-2000 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//           <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-br from-yellow-50/90 to-amber-50/90 backdrop-blur-md rounded-full border border-amber-300/50 shadow-lg">
//             <div className="relative">
//               <div className="w-3 h-3 bg-amber-500 rounded-full" style={{ animation: 'gentlePulse 2s ease-in-out infinite' }}></div>
//               <div className="absolute inset-0 w-3 h-3 bg-amber-500 rounded-full opacity-50" style={{ animation: 'gentleExpand 2s ease-in-out infinite' }}></div>
//             </div>
//             <span className="text-blue-800 font-semibold text-lg">Church Opening 2027</span>
//             <div className="text-xl">⛪</div>
//           </div>
//         </div>

//         {/* Enhanced Scroll Indicator */}
//         <button 
//           onClick={scrollToContent}
//           className={`group transform transition-all duration-2000 delay-1500 hover:scale-110 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
//           style={{ animation: 'gentleFloat 3s ease-in-out infinite' }}
//         >
//           <div className="relative p-4 rounded-full bg-gradient-to-br from-yellow-50/90 to-amber-50/90 backdrop-blur-sm border border-amber-300/50 group-hover:bg-amber-50/95 transition-colors duration-300 shadow-lg">
//             <ChevronDown className="w-8 h-8 text-blue-700 group-hover:text-blue-800 transition-colors duration-300" />
//             <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//           </div>
//         </button>
//       </div>

//       {/* Enhanced Bottom Gradient */}
//       <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-amber-50 via-yellow-50/50 to-transparent"></div>

//       {/* Custom CSS Animations */}
//       <style jsx>{`
//         @keyframes gentleFloat {
//           0%, 100% { 
//             transform: translateY(0px) rotate(0deg); 
//             opacity: 0.7;
//           }
//           50% { 
//             transform: translateY(-12px) rotate(2deg); 
//             opacity: 1;
//           }
//         }
        
//         @keyframes gentleOrbit {
//           from { 
//             transform: rotate(0deg) translateX(50px) rotate(0deg); 
//             opacity: 0.6;
//           }
//           to { 
//             transform: rotate(360deg) translateX(50px) rotate(-360deg); 
//             opacity: 0.8;
//           }
//         }
        
//         @keyframes gentlePulse {
//           0%, 100% { 
//             opacity: 0.4;
//             transform: scale(1);
//           }
//           50% { 
//             opacity: 0.8;
//             transform: scale(1.02);
//           }
//         }
        
//         @keyframes gentleWave {
//           0%, 100% { 
//             transform: translateX(0) translateY(0) rotate(0deg);
//             opacity: 0.1;
//           }
//           33% { 
//             transform: translateX(10px) translateY(-5px) rotate(1deg);
//             opacity: 0.15;
//           }
//           66% { 
//             transform: translateX(-5px) translateY(8px) rotate(-1deg);
//             opacity: 0.12;
//           }
//         }
        
//         @keyframes slowSpin {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
        
//         @keyframes gentleExpand {
//           0%, 100% { 
//             transform: scale(1);
//             opacity: 0.1;
//           }
//           50% { 
//             transform: scale(1.05);
//             opacity: 0.2;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Hero;


import React, { useState, useEffect } from 'react';
import { ChevronDown, Heart, Star, Sun, Moon, Sparkles, Eye, Infinity } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const interfaithQuotes = [
    { text: "For God so loved the world that he gave his one and only Son", author: "John 3:16" },
    { text: "Be still and know that I am God", author: "Psalm 46:10" },
    { text: "Trust in the Lord with all your heart", author: "Proverbs 3:5" },
    { text: "I can do all things through Christ who strengthens me", author: "Philippians 4:13" }
  ];

  // Interfaith symbols matching the logo
  const interfaithSymbols = ['✝️', '☪️', '🕎', '☸️', '🔯', '☮️', '⭐', '🌟', '💫'];

  useEffect(() => {
    setIsVisible(true);
    
    // Initialize floating particles with gentle movement
    const newParticles = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      symbol: interfaithSymbols[Math.floor(Math.random() * interfaithSymbols.length)],
      delay: Math.random() * 8,
      duration: 20 + Math.random() * 15,
      size: 0.8 + Math.random() * 0.5
    }));
    setParticles(newParticles);

    // Rotate quotes
    const quoteInterval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % interfaithQuotes.length);
    }, 6000);

    // Mouse move handler for subtle parallax effect
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
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-yellow-50 via-amber-25 to-orange-50">
      {/* Background Video Container with golden tint */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 w-full h-full bg-black">
          <div className="w-full h-full bg-gradient-to-br from-yellow-400/80 via-amber-300/60 to-orange-300/70 opacity-90"></div>
          {/* Golden overlay matching the logo background */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/40 via-amber-300/30 to-orange-300/40"></div>
        </div>
        
        {/* Light spiritual overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/85 via-amber-50/80 to-orange-50/85"></div>
      </div>

      {/* Dynamic Background Layers with Golden Theme */}
      <div className="absolute inset-0">
        {/* Base gradient overlay - Golden spiritual theme */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/60 via-amber-50/50 to-orange-100/60"></div>
        
        {/* Animated aurora effect - Golden and Blue */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0 bg-gradient-to-r from-blue-500/15 via-yellow-400/20 to-blue-600/15"
            style={{
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
              transition: 'transform 0.8s ease-out',
              animation: 'enhancedWave 15s ease-in-out infinite'
            }}
          ></div>
        </div>
        
        {/* Radial gradient spotlight - Warm golden */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(251, 191, 36, 0.2) 0%, transparent 60%)`
          }}
        ></div>

        {/* Enhanced Divine light rays */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] opacity-15">
          <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/25 via-transparent to-transparent transform rotate-12" style={{ animation: 'enhancedPulse 10s ease-in-out infinite' }}></div>
          <div className="absolute inset-0 bg-gradient-to-b from-amber-400/20 via-transparent to-transparent transform -rotate-12" style={{ animation: 'enhancedPulse 10s ease-in-out infinite', animationDelay: '3s' }}></div>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-400/15 via-transparent to-transparent" style={{ animation: 'enhancedPulse 10s ease-in-out infinite', animationDelay: '6s' }}></div>
        </div>
      </div>

      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute opacity-40 transition-opacity duration-700"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              fontSize: `${particle.size * 1.5}rem`,
              animation: `enhancedFloat ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`,
              transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
              color: particle.id % 3 === 0 ? '#1e40af' : particle.id % 3 === 1 ? '#d97706' : '#7c2d12'
            }}
          >
            {particle.symbol}
          </div>
        ))}
      </div>

      {/* Enhanced Sacred Geometry */}
      <div className="absolute inset-0 opacity-8">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full border border-blue-400/20"
          style={{ 
            animation: 'slowSpin 50s linear infinite',
            transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px)`
          }}
        >
          <div className="absolute inset-8 rounded-full border border-amber-400/15" style={{ animation: 'slowSpin 35s linear infinite reverse' }}></div>
          <div className="absolute inset-16 rounded-full border border-blue-300/12" style={{ animation: 'slowSpin 25s linear infinite' }}></div>
        </div>
        
        <div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80"
          style={{ 
            animation: 'enhancedPulse 8s ease-in-out infinite',
            transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`
          }}
        >
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-blue-500/20 transform -translate-y-1/2"></div>
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-500/20 transform -translate-x-1/2"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-amber-400/25"></div>
        </div>
        
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-amber-300/15"
          style={{ animation: 'enhancedExpand 12s ease-in-out infinite' }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center pt-20">
        
        {/* Enhanced ILA Logo - Centered */}
        <div className={`mb-12 transform transition-all duration-2500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
          <div className="relative group">
            <div className="w-56 h-56 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-600 via-amber-400 to-blue-700 p-2 shadow-2xl shadow-amber-500/30">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-50/98 to-amber-50/98 backdrop-blur-xl flex items-center justify-center relative overflow-hidden border border-amber-200/40">
                {/* Inner glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/10 via-amber-400/15 to-blue-400/10" style={{ animation: 'enhancedPulse 5s ease-in-out infinite' }}></div>
                
                {/* International Laity Association Logo */}
                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-4">
                  {/* Religious Symbols arranged around central book */}
                  <div className="relative w-32 h-32 mb-2">
                    {/* Central Open Book */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                      <div className="w-16 h-10 relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-900 rounded-sm transform -rotate-2 shadow-lg"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 rounded-sm transform rotate-2 shadow-lg"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-8 bg-amber-300"></div>
                      </div>
                    </div>
                    
                    {/* Interfaith Symbols positioned around */}
                    {/* Khanda (Sikh) - Top Left */}
                    <div className="absolute top-0 left-2 text-blue-700 text-xl" style={{ animation: 'gentleFloat 6s ease-in-out infinite' }}>🗡️</div>
                    
                    {/* Christian Cross - Top Center */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                      <div className="w-1.5 h-8 bg-gradient-to-b from-blue-700 to-blue-900 rounded-full shadow-md"></div>
                      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-6 h-1.5 bg-gradient-to-r from-blue-700 to-blue-900 rounded-full shadow-md"></div>
                    </div>
                    
                    {/* Crescent and Star (Islam) - Top Right */}
                    <div className="absolute top-0 right-2 text-blue-700 text-xl" style={{ animation: 'gentleFloat 6s ease-in-out infinite', animationDelay: '1s' }}>☪️</div>
                    
                    {/* Om (Hinduism) - Bottom Left */}
                    <div className="absolute bottom-0 left-0 text-blue-700 text-lg" style={{ animation: 'gentleFloat 6s ease-in-out infinite', animationDelay: '2s' }}>🕉️</div>
                    
                    {/* Dharma Wheel (Buddhism) - Bottom Right */}
                    <div className="absolute bottom-0 right-0 text-blue-700 text-lg" style={{ animation: 'gentleFloat 6s ease-in-out infinite', animationDelay: '3s' }}>☸️</div>
                  </div>
                  
                  {/* Organization Name */}
                  <div className="text-xs font-bold text-blue-800 text-center leading-tight">
                    <div>INTERNATIONAL</div>
                    <div>LAITY</div>
                    <div>ASSOCIATION</div>
                  </div>
                </div>
                
                {/* Orbiting light effects */}
                <div className="absolute inset-0">
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-amber-400 rounded-full blur-sm" style={{ animation: 'enhancedOrbit 15s linear infinite' }}></div>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full blur-sm" style={{ animation: 'enhancedOrbit 15s linear infinite reverse' }}></div>
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-amber-500 rounded-full blur-sm" style={{ animation: 'enhancedOrbit 18s linear infinite', animationDelay: '4s' }}></div>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full blur-sm" style={{ animation: 'enhancedOrbit 18s linear infinite reverse', animationDelay: '4s' }}></div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Floating icons around logo */}
            <div className="absolute -top-6 -right-6" style={{ animation: 'enhancedFloat 5s ease-in-out infinite' }}>
              <Star className="w-10 h-10 text-amber-500 drop-shadow-2xl" />
            </div>
            <div className="absolute -bottom-6 -left-6" style={{ animation: 'enhancedFloat 5s ease-in-out infinite', animationDelay: '1.5s' }}>
              <Heart className="w-10 h-10 text-blue-600 drop-shadow-2xl" />
            </div>
            <div className="absolute top-1/2 -right-10 transform -translate-y-1/2" style={{ animation: 'enhancedFloat 6s ease-in-out infinite', animationDelay: '3s' }}>
              <div className="text-3xl drop-shadow-lg">☮️</div>
            </div>
            <div className="absolute top-1/2 -left-10 transform -translate-y-1/2" style={{ animation: 'enhancedFloat 6s ease-in-out infinite', animationDelay: '4.5s' }}>
              <div className="text-3xl drop-shadow-lg">🙏</div>
            </div>
          </div>
        </div>

        {/* Enhanced Main Heading */}
        <h1 className={`text-6xl md:text-8xl lg:text-9xl font-bold mb-8 transform transition-all duration-3000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
          <span className="relative">
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-yellow-600 bg-clip-text text-transparent font-extrabold tracking-tight">
              Path of Faith
            </span>
            {/* Enhanced text glow effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-800 to-yellow-600 bg-clip-text text-transparent blur-sm opacity-15" style={{ animation: 'enhancedPulse 4s ease-in-out infinite' }}>
              Path of Faith
            </span>
          </span>
        </h1>

        {/* Enhanced Subtitle */}
        <p className={`text-xl md:text-3xl lg:text-4xl text-gray-800 mb-16 max-w-6xl font-light leading-relaxed transform transition-all duration-3000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
          <span className="bg-gradient-to-r from-blue-800 to-amber-800 bg-clip-text text-transparent">
            Walking in God's Love, Growing in His Grace
          </span>
        </p>

        {/* Enhanced Rotating Quotes */}
        <div className={`mb-20 h-28 flex items-center justify-center transform transition-all duration-3000 delay-1100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
          <div className="text-center max-w-5xl relative">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/95 to-amber-50/95 backdrop-blur-md rounded-3xl border border-amber-200/50 shadow-xl"></div>
            <div className="relative p-10">
              <p className="text-lg md:text-2xl lg:text-3xl text-gray-800 italic mb-4 transition-all duration-1200 leading-relaxed">
                "{interfaithQuotes[currentQuote].text}"
              </p>
              <p className="text-base md:text-lg text-blue-700 font-semibold">
                — {interfaithQuotes[currentQuote].author}
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Call to Action Buttons */}
        <div className={`flex flex-col sm:flex-row gap-10 mb-24 transform transition-all duration-3000 delay-1400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
          <Link to='/contact'>
          <button className="group relative px-12 py-6 bg-gradient-to-r from-blue-700 to-blue-800 text-white font-bold text-xl rounded-3xl overflow-hidden transition-all duration-600 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/30 transform-gpu">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-600"></div>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
            <span className="relative flex items-center gap-4 font-semibold">
              <Sun className="w-7 h-7 group-hover:rotate-180 transition-transform duration-700" />
              Begin Your Journey
              <Sparkles className="w-6 h-6 group-hover:scale-125 transition-transform duration-400" />
            </span>
          </button>
          </Link>
          <Link to='/teachings'>
          <button className="group relative px-12 py-6 bg-gradient-to-br from-yellow-50/95 to-amber-50/95 backdrop-blur-md text-blue-800 font-bold text-xl rounded-3xl border border-amber-300/60 overflow-hidden transition-all duration-600 hover:scale-110 hover:shadow-2xl hover:shadow-amber-400/25">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400/15 to-blue-400/15 opacity-0 group-hover:opacity-100 transition-opacity duration-600"></div>
            <span className="relative flex items-center gap-4 font-semibold">
              <div className="text-2xl">📖</div>
              Explore Scripture
              <Eye className="w-6 h-6 group-hover:scale-125 transition-transform duration-400" />
            </span>
          </button>
          </Link>
        </div>

        {/* Enhanced Coming Soon Badge */}
        <div className={`mb-16 transform transition-all duration-3000 delay-1700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
          <div className="inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-br from-yellow-50/95 to-amber-50/95 backdrop-blur-md rounded-full border border-amber-300/60 shadow-xl">
            <div className="relative">
              <div className="w-4 h-4 bg-amber-500 rounded-full" style={{ animation: 'enhancedPulse 2.5s ease-in-out infinite' }}></div>
              <div className="absolute inset-0 w-4 h-4 bg-amber-500 rounded-full opacity-50" style={{ animation: 'enhancedExpand 2.5s ease-in-out infinite' }}></div>
            </div>
            <span className="text-blue-800 font-bold text-xl">Church Opening 2027</span>
            <div className="text-2xl">⛪</div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <button 
          onClick={scrollToContent}
          className={`group transform transition-all duration-3000 delay-2000 hover:scale-125 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
          style={{ animation: 'enhancedFloat 4s ease-in-out infinite' }}
        >
          <div className="relative p-5 rounded-full bg-gradient-to-br from-yellow-50/95 to-amber-50/95 backdrop-blur-md border border-amber-300/60 group-hover:bg-amber-50/98 transition-colors duration-400 shadow-xl">
            <ChevronDown className="w-10 h-10 text-blue-700 group-hover:text-blue-800 transition-colors duration-400" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400/15 to-blue-400/15 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
          </div>
        </button>
      </div>

      {/* Enhanced Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-amber-50 via-yellow-50/60 to-transparent"></div>

      {/* Enhanced Custom CSS Animations */}
      <style jsx>{`
        @keyframes enhancedFloat {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1); 
            opacity: 0.8;
          }
          33% { 
            transform: translateY(-15px) rotate(2deg) scale(1.05); 
            opacity: 1;
          }
          66% { 
            transform: translateY(-8px) rotate(-1deg) scale(0.98); 
            opacity: 0.9;
          }
        }
        
        @keyframes enhancedOrbit {
          0% { 
            transform: rotate(0deg) translateX(70px) rotate(0deg); 
            opacity: 0.6;
            scale: 1;
          }
          50% { 
            opacity: 1;
            scale: 1.2;
          }
          100% { 
            transform: rotate(360deg) translateX(70px) rotate(-360deg); 
            opacity: 0.6;
            scale: 1;
          }
        }
        
        @keyframes enhancedPulse {
          0%, 100% { 
            opacity: 0.4;
            transform: scale(1);
          }
          50% { 
            opacity: 0.9;
            transform: scale(1.08);
          }
        }
        
        @keyframes enhancedWave {
          0%, 100% { 
            transform: translateX(0) translateY(0) rotate(0deg);
            opacity: 0.15;
          }
          25% { 
            transform: translateX(15px) translateY(-8px) rotate(1.5deg);
            opacity: 0.25;
          }
          50% { 
            transform: translateX(8px) translateY(12px) rotate(-0.5deg);
            opacity: 0.2;
          }
          75% { 
            transform: translateX(-10px) translateY(-5px) rotate(-1deg);
            opacity: 0.18;
          }
        }
        
        @keyframes slowSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes enhancedExpand {
          0%, 100% { 
            transform: scale(1);
            opacity: 0.15;
          }
          50% { 
            transform: scale(1.12);
            opacity: 0.3;
          }
        }

        @keyframes gentleFloat {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.7;
          }
          50% { 
            transform: translateY(-8px) rotate(1deg); 
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;