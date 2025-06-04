import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const WhatsappFloatButton = () => {
  return (
  <motion.a
  href="https://wa.me/+79776235749"
  target="_blank"
  rel="noopener noreferrer"
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ type: 'spring', stiffness: 300 }}
  className="fixed bottom-5 right-5 z-[9999] bg-green-500 animate-bounce hover:bg-green-600 text-white p-3 md:p-4 rounded-full shadow-xl"
>
 

      <FaWhatsapp size={28} />
    </motion.a>
  );
};

export default WhatsappFloatButton;
// import React from 'react';
// import { MessageCircle, Sparkles } from 'lucide-react';

// const WhatsappFloatButton = () => {
//   return (
//     <div className="fixed bottom-5 right-5 z-[9999]">
//       <style jsx>{`
//         @keyframes divine-pulse {
//           0%, 100% { 
//             transform: scale(1);
//             box-shadow: 0 0 20px rgba(16, 185, 129, 0.4), 0 0 40px rgba(5, 150, 105, 0.2);
//           }
//           50% { 
//             transform: scale(1.05);
//             box-shadow: 0 0 30px rgba(16, 185, 129, 0.6), 0 0 60px rgba(5, 150, 105, 0.4);
//           }
//         }
        
//         @keyframes float-glow {
//           0%, 100% { opacity: 0.6; }
//           50% { opacity: 1; }
//         }
        
//         @keyframes sparkle-dance {
//           0% { transform: rotate(0deg) scale(0.8); opacity: 0.7; }
//           25% { transform: rotate(90deg) scale(1); opacity: 1; }
//           50% { transform: rotate(180deg) scale(0.9); opacity: 0.8; }
//           75% { transform: rotate(270deg) scale(1.1); opacity: 1; }
//           100% { transform: rotate(360deg) scale(0.8); opacity: 0.7; }
//         }
        
//         @keyframes gradient-shift {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }
        
//         @keyframes bounce-gentle {
//           0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
//           40% { transform: translateY(-8px); }
//           60% { transform: translateY(-4px); }
//         }
//       `}</style>
      
//       {/* Floating sparkle effects */}
//       <div className="absolute -top-2 -left-2 text-yellow-400">
//         <Sparkles 
//           size={16} 
//           style={{ animation: 'sparkle-dance 3s infinite ease-in-out' }}
//         />
//       </div>
//       <div className="absolute -bottom-1 -right-1 text-blue-400">
//         <Sparkles 
//           size={12} 
//           style={{ animation: 'sparkle-dance 4s infinite ease-in-out reverse' }}
//         />
//       </div>
      
//       {/* Outer glow ring */}
//       <div 
//         className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 opacity-30"
//         style={{ 
//           animation: 'divine-pulse 2s infinite ease-in-out',
//           transform: 'scale(1.2)'
//         }}
//       ></div>
      
//       <a
//         href="https://wa.me/+79776235749"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="relative block p-3 md:p-4 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-110 group"
//         style={{
//           background: 'linear-gradient(135deg, #10b981, #059669, #047857)',
//           backgroundSize: '300% 300%',
//           animation: 'bounce-gentle 2s infinite ease-in-out, gradient-shift 4s ease infinite, divine-pulse 3s infinite ease-in-out'
//         }}
//       >
//         {/* Inner highlight */}
//         <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/20 to-transparent opacity-50"></div>
        
//         {/* WhatsApp Icon with spiritual styling */}
//         <div className="relative z-10 flex items-center justify-center">
//           <MessageCircle 
//             size={28} 
//             className="text-white group-hover:text-yellow-100 transition-colors duration-300 drop-shadow-lg" 
//             strokeWidth={2.5}
//           />
//         </div>
        
//         {/* Hover glow effect */}
//         <div 
//           className="absolute inset-0 rounded-full bg-gradient-to-r from-green-300 to-emerald-400 opacity-0 group-hover:opacity-40 transition-opacity duration-300"
//           style={{ animation: 'float-glow 2s infinite ease-in-out' }}
//         ></div>
//       </a>
      
//       {/* Sacred connection text tooltip */}
//       <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
//         <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white text-xs px-3 py-2 rounded-lg shadow-lg whitespace-nowrap border border-green-300">
//           <div className="flex items-center space-x-1">
//             <span>Sacred Connection</span>
//             <Sparkles size={12} className="text-yellow-300" />
//           </div>
//           <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-green-600"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhatsappFloatButton;