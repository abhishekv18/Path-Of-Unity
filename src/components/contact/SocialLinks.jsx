// import React from 'react';
// import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';
// import { motion } from 'framer-motion';
// import { FaDove, FaPrayingHands, FaHandsHelping } from 'react-icons/fa';

// const SocialLinks = () => {
//   const socialPlatforms = [
//     { 
//       name: 'Facebook', 
//       icon: Facebook, 
//       url: 'https://facebook.com/laity',
//       color: 'bg-blue-100 hover:bg-blue-200 text-blue-600'
//     },
//     { 
//       name: 'Twitter', 
//       icon: Twitter, 
//       url: 'https://twitter.com/laity',
//       color: 'bg-sky-100 hover:bg-sky-200 text-sky-600'
//     },
//     { 
//       name: 'Instagram', 
//       icon: Instagram, 
//       url: 'https://instagram.com/laity',
//       color: 'bg-pink-100 hover:bg-pink-200 text-pink-600'
//     },
//     { 
//       name: 'YouTube', 
//       icon: Youtube, 
//       url: 'https://youtube.com/laity',
//       color: 'bg-red-100 hover:bg-red-200 text-red-600'
//     },
//     { 
//       name: 'LinkedIn', 
//       icon: Linkedin, 
//       url: 'https://linkedin.com/company/laity',
//       color: 'bg-blue-200 hover:bg-blue-300 text-blue-700'
//     },
//   ];

//   // Animation variants
//   const container = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const item = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100
//       }
//     }
//   };

//   return (
//     <motion.div 
//       className="max-w-md mx-auto text-center"
//       initial="hidden"
//       animate="visible"
//       variants={container}
//     >
//       <motion.div className="mb-10" variants={item}>
//         <div className="inline-flex items-center justify-center p-4 bg-purple-100 rounded-full mb-4">
//           <FaDove className="text-3xl text-purple-600" />
//         </div>
//         <h2 className="text-3xl font-semibold text-purple-800 mb-2 font-serif">Sacred Connections</h2>
//         <p className="text-purple-600">Join our spiritual community across the digital realm</p>
//       </motion.div>

//       <motion.div 
//         className="flex flex-wrap justify-center gap-5 mb-10"
//         variants={container}
//       >
//         {socialPlatforms.map((platform) => (
//           <motion.a
//             key={platform.name}
//             href={platform.url}
//             target="_blank"
//             rel="noopener noreferrer"
//             className={`p-5 rounded-full transition-all duration-300 group relative overflow-hidden ${platform.color}`}
//             aria-label={`Follow us on ${platform.name}`}
//             variants={item}
//             whileHover={{ 
//               y: -5,
//               scale: 1.1,
//               boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
//             }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <platform.icon 
//               className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" 
//               strokeWidth={1.5} 
//             />
//             <motion.div 
//               className="absolute inset-0 bg-white bg-opacity-20"
//               initial={{ width: 0 }}
//               whileHover={{ width: '100%' }}
//               transition={{ duration: 0.3 }}
//             />
//           </motion.a>
//         ))}
//       </motion.div>

//       <motion.div className="mt-8" variants={item}>
//         <div className="flex justify-center space-x-3 mb-4">
//           <FaPrayingHands className="text-purple-400" />
//           <FaHandsHelping className="text-purple-400" />
//           <FaPrayingHands className="text-purple-400" />
//         </div>
//         <p className="text-purple-700 mb-2">Follow us for daily spiritual nourishment</p>
//         <motion.p 
//           className="text-sm text-purple-400 inline-block px-3 py-1 bg-purple-50 rounded-full"
//           animate={{
//             scale: [1, 1.05, 1],
//           }}
//           transition={{
//             duration: 4,
//             repeat: Infinity
//           }}
//         >
//           #SacredCommunity #DivineConnections
//         </motion.p>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default SocialLinks;


import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

const SocialLinks = () => {
  const socialPlatforms = [
    { 
      name: 'Facebook', 
      icon: Facebook, 
      url: 'https://facebook.com/laity',
      primaryColor: '#1e3a8a',
      secondaryColor: '#3b82f6'
    },
    { 
      name: 'Twitter', 
      icon: Twitter, 
      url: 'https://twitter.com/laity',
      primaryColor: '#1e3a8a',
      secondaryColor: '#3b82f6'
    },
    { 
      name: 'Instagram', 
      icon: Instagram, 
      url: 'https://instagram.com/laity',
      primaryColor: '#fbbf24',
      secondaryColor: '#f59e0b'
    },
    { 
      name: 'YouTube', 
      icon: Youtube, 
      url: 'https://youtube.com/laity',
      primaryColor: '#fbbf24',
      secondaryColor: '#f59e0b'
    },
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      url: 'https://linkedin.com/company/laity',
      primaryColor: '#1e3a8a',
      secondaryColor: '#3b82f6'
    },
  ];

  // Dove SVG component for spiritual icon
  const DoveIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C10.9 2 10 2.9 10 4s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 8c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2s2-.9 2-2v-6c0-1.1-.9-2-2-2zm-4 0c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2s2-.9 2-2v-6c0-1.1-.9-2-2-2zm-4 0c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2s2-.9 2-2v-6c0-1.1-.9-2-2-2z"/>
    </svg>
  );

  // Praying hands SVG
  const PrayingHands = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 8.5c-.8 0-1.5-.7-1.5-1.5S11.2 5.5 12 5.5s1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm0 2c.8 0 1.5.7 1.5 1.5v8c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5v-8c0-.8.7-1.5 1.5-1.5z"/>
    </svg>
  );

  // Helping hands SVG
  const HelpingHands = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm8 12c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
    </svg>
  );

  return (
    <div className="max-w-md mx-auto text-center">
      <div className="mb-10">
        <div 
          className="inline-flex items-center justify-center p-4 rounded-full mb-4 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #1e3a8a, #3b82f6)',
            boxShadow: '0 8px 25px rgba(30, 58, 138, 0.3)'
          }}
        >
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              background: 'radial-gradient(circle at 30% 30%, #fbbf24, transparent 50%)'
            }}
          />
          <DoveIcon />
        </div>
        <h2 
          className="text-3xl font-bold mb-2 font-serif"
          style={{ 
            background: 'linear-gradient(135deg, #1e3a8a, #3b82f6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          Sacred Connections
        </h2>
        <p className="text-blue-600 font-medium">Join our spiritual community across the digital realm</p>
      </div>

      <div className="flex flex-wrap justify-center gap-5 mb-10">
        {socialPlatforms.map((platform, index) => (
          <a
            key={platform.name}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-full transition-all duration-300 group relative overflow-hidden transform hover:scale-110 hover:-translate-y-1"
            aria-label={`Follow us on ${platform.name}`}
            style={{
              background: `linear-gradient(135deg, ${platform.primaryColor}15, ${platform.secondaryColor}15)`,
              border: `2px solid ${platform.primaryColor}20`,
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
              animation: `float ${3 + index * 0.5}s ease-in-out infinite`
            }}
            onMouseEnter={(e) => {
              e.target.style.boxShadow = `0 10px 25px ${platform.primaryColor}30`;
              e.target.style.background = `linear-gradient(135deg, ${platform.primaryColor}, ${platform.secondaryColor})`;
            }}
            onMouseLeave={(e) => {
              e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
              e.target.style.background = `linear-gradient(135deg, ${platform.primaryColor}15, ${platform.secondaryColor}15)`;
            }}
          >
            <platform.icon 
              className="w-6 h-6 transition-all duration-300 group-hover:scale-110" 
              strokeWidth={1.5}
              style={{ color: platform.primaryColor }}
            />
            <div 
              className="absolute inset-0 bg-white bg-opacity-20 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
            />
          </a>
        ))}
      </div>

      <div className="mt-8">
        <div className="flex justify-center space-x-3 mb-4">
          <div style={{ color: '#3b82f6' }}>
            <PrayingHands />
          </div>
          <div style={{ color: '#fbbf24' }}>
            <HelpingHands />
          </div>
          <div style={{ color: '#3b82f6' }}>
            <PrayingHands />
          </div>
        </div>
        <p className="text-blue-800 mb-2 font-semibold">Follow us for daily spiritual nourishment</p>
        <p 
          className="text-sm inline-block px-4 py-2 rounded-full font-medium"
          style={{
            background: 'linear-gradient(135deg, #dbeafe, #fef3c7)',
            color: '#1e3a8a',
            border: '1px solid rgba(59, 130, 246, 0.2)',
            animation: 'pulse 4s ease-in-out infinite'
          }}
        >
          #SacredCommunity #DivineConnections
        </p>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.05); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default SocialLinks;