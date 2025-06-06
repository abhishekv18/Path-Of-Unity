// import React from 'react';
// import { MapPin, Phone, Mail, Clock, Heart, MessageCircle, Gift, Sunrise } from 'lucide-react';
// import { motion } from 'framer-motion';

// const ContactInfo = () => {
//   // Smooth fade-in animation for container
//   const container = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.2
//       }
//     }
//   };

//   // Subtle fade + slide up animation for items
//   const item = {
//     hidden: { y: 10, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "tween",
//         ease: "easeOut",
//         duration: 0.5
//       }
//     }
//   };

//   // Gentle pulse animation for interactive elements
//   const pulse = {
//     hover: { 
//       scale: 1.02,
//       transition: { 
//         type: "spring", 
//         stiffness: 300,
//         damping: 10 
//       } 
//     },
//     tap: { scale: 0.98 }
//   };

//   return (
//     <motion.div 
//       className="w-full max-w-md mx-auto p-4 sm:p-6 md:p-8 rounded-2xl bg-gradient-to-br from-white to-purple-50 shadow-lg border border-purple-100"
//       initial="hidden"
//       animate="visible"
//       variants={container}
//     >
//       <div className="text-center mb-6 md:mb-8">
//         <motion.div 
//           className="inline-flex items-center justify-center p-3 sm:p-4 bg-purple-100 rounded-full mb-3 sm:mb-4"
//           animate={{
//             rotate: [0, 5, -5, 0],
//           }}
//           transition={{
//             duration: 6,
//             repeat: Infinity,
//             repeatType: "reverse",
//             ease: "linear"
//           }}
//         >
//           <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 fill-purple-600" />
//         </motion.div>
//         <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-purple-800 mb-1 sm:mb-2">Sacred Connections</h2>
//         <p className="text-purple-600 text-xs sm:text-sm md:text-base">Reach us through these divine channels</p>
//       </div>

//       <motion.div className="space-y-4 sm:space-y-5" variants={container}>
//         {/* Address - Now with better text handling */}
//         <motion.div 
//           className="flex items-start bg-white bg-opacity-80 p-3 sm:p-4 rounded-xl shadow-sm border border-purple-50"
//           variants={item}
//           whileHover="hover"
//           whileTap="tap"
//         //  variants={pulse}
//         >
//           <div className="flex-shrink-0 p-2 bg-purple-100 rounded-lg text-purple-600">
//             <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
//           </div>
//           <div className="ml-3 sm:ml-4 overflow-hidden">
//             <h3 className="text-base sm:text-lg font-medium text-purple-800 flex flex-wrap items-center">
//               <span className="mr-2">Sanctuary Location</span>
//               <span className="text-xs bg-purple-100 text-purple-600 px-2 py-0.5 rounded-full">Sacred Ground</span>
//             </h3>
//             <p className="text-gray-600 mt-1 text-xs sm:text-sm leading-relaxed break-words">
//               123 Enlightenment Path<br />
//               Harmony Valley, HV 12345<br />
//               <span className="text-purple-500 font-medium">United States of Consciousness</span>
//             </p>
//           </div>
//         </motion.div>

//         {/* Phone */}
//         <motion.div 
//           className="flex items-start bg-white bg-opacity-80 p-3 sm:p-4 rounded-xl shadow-sm border border-purple-50"
//           variants={item}
//           whileHover="hover"
//           whileTap="tap"
//         //  variants={pulse}
//         >
//           <div className="flex-shrink-0 p-2 bg-blue-100 rounded-lg text-blue-600">
//             <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
//           </div>
//           <div className="ml-3 sm:ml-4">
//             <h3 className="text-base sm:text-lg font-medium text-blue-800">Divine Communication</h3>
//             <p className="text-gray-600 mt-1 text-xs sm:text-sm leading-relaxed">
//               <span className="font-medium">Main Temple:</span> +79776235749 <br />
//               <span className="font-medium">Prayer Line:</span> +79776235749 <br />
//               <span className="text-xs text-blue-500">All calls are blessed</span>
//             </p>
//           </div>
//         </motion.div>

//         {/* Email */}
//         <motion.div 
//           className="flex items-start bg-white bg-opacity-80 p-3 sm:p-4 rounded-xl shadow-sm border border-purple-50"
//           variants={item}
//           whileHover="hover"
//           whileTap="tap"
//         //  variants={pulse}
//         >
//           <div className="flex-shrink-0 p-2 bg-green-100 rounded-lg text-green-600">
//             <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
//           </div>
//           <div className="ml-3 sm:ml-4">
//             <h3 className="text-base sm:text-lg font-medium text-green-800">Sacred Messages</h3>
//             <p className="text-gray-600 mt-1 text-xs sm:text-sm leading-relaxed break-all">
//               <span className="font-medium">General:</span> I.Laity@yandex.com<br />
//               <span className="font-medium">Prayers:</span> I.Laity@yandex.com<br />
//               <span className="font-medium">Donations:</span> I.Laity@yandex.com
//             </p>
//           </div>
//         </motion.div>

//         {/* Hours */}
//         <motion.div 
//           className="flex items-start bg-white bg-opacity-80 p-3 sm:p-4 rounded-xl shadow-sm border border-purple-50"
//           variants={item}
//           whileHover="hover"
//           whileTap="tap"
//         //  variants={pulse}
//         >
//           <div className="flex-shrink-0 p-2 bg-amber-100 rounded-lg text-amber-600">
//             <Sunrise className="w-4 h-4 sm:w-5 sm:h-5" />
//           </div>
//           <div className="ml-3 sm:ml-4">
//             <h3 className="text-base sm:text-lg font-medium text-amber-800">Sacred Hours</h3>
//             <p className="text-gray-600 mt-1 text-xs sm:text-sm leading-relaxed">
//               <span className="font-medium">Mon-Fri:</span> 9AM - 5PM<br />
//               <span className="font-medium">Sat:</span> 10AM - 2PM<br />
//               <span className="font-medium">Sun:</span> Closed
//             </p>
//           </div>
//         </motion.div>
//       </motion.div>

//       <motion.div 
//         className="mt-6 sm:mt-8 text-center"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1 }}
//       >
//         <motion.div 
//           className="w-12 sm:w-16 h-1 bg-purple-200 rounded-full mx-auto mb-2 sm:mb-3"
//           animate={{
//             scaleX: [1, 1.5, 1],
//           }}
//           transition={{
//             duration: 3,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         />
//         <p className="text-purple-400 text-xxs sm:text-xs">All connections are sacred. We respond within 48 hours.</p>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default ContactInfo;
import React from 'react';
import { MapPin, Phone, Mail, Clock, Heart, MessageCircle, Gift, Sunrise } from 'lucide-react';

const ContactInfo = () => {
  // Smooth fade-in animation for container
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  // Subtle fade + slide up animation for items
  const item = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: 0.5
      }
    }
  };

  // Gentle pulse animation for interactive elements
  const pulse = {
    hover: { 
      scale: 1.02,
      transition: { 
        type: "spring", 
        stiffness: 300,
        damping: 10 
      } 
    },
    tap: { scale: 0.98 }
  };

  return (
    <div 
      className="w-full max-w-md mx-auto p-4 sm:p-6 md:p-8 rounded-2xl bg-gradient-to-br from-white via-blue-50 to-amber-50 shadow-xl border border-blue-100 backdrop-blur-sm"
      style={{
        background: 'linear-gradient(135deg, #ffffff 0%, #dbeafe 30%, #fef3c7 100%)',
        boxShadow: '0 20px 40px rgba(30, 58, 138, 0.1), 0 0 0 1px rgba(59, 130, 246, 0.1)'
      }}
    >
      <div className="text-center mb-6 md:mb-8">
        <div 
          className="inline-flex items-center justify-center p-3 sm:p-4 rounded-full mb-3 sm:mb-4 relative overflow-hidden"
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
          <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-white fill-white relative z-10" />
        </div>
        <h2 
          className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2"
          style={{ 
            background: 'linear-gradient(135deg, #1e3a8a, #3b82f6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          Sacred Connections
        </h2>
        <p className="text-blue-600 text-xs sm:text-sm md:text-base font-medium">Reach us through these divine channels</p>
      </div>

      <div className="space-y-4 sm:space-y-5">
        {/* Address */}
        <div 
          className="flex items-start p-3 sm:p-4 rounded-xl shadow-sm border transition-all duration-300 hover:shadow-lg cursor-pointer group"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderColor: 'rgba(59, 130, 246, 0.2)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <div 
            className="flex-shrink-0 p-2 rounded-lg transition-all duration-300 group-hover:scale-110"
            style={{
              background: 'linear-gradient(135deg, #dbeafe, #bfdbfe)',
              color: '#1e3a8a'
            }}
          >
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="ml-3 sm:ml-4 overflow-hidden">
            <h3 className="text-base sm:text-lg font-semibold text-blue-800 flex flex-wrap items-center">
              <span className="mr-2">Sanctuary Location</span>
              <span 
                className="text-xs px-2 py-0.5 rounded-full font-medium"
                style={{
                  backgroundColor: '#fbbf24',
                  color: '#1e3a8a'
                }}
              >
                Sacred Ground
              </span>
            </h3>
            <p className="text-gray-700 mt-1 text-xs sm:text-sm leading-relaxed break-words">
              123 Enlightenment Path<br />
              Harmony Valley, HV 12345<br />
              <span className="font-semibold" style={{ color: '#3b82f6' }}>United States of Consciousness</span>
            </p>
          </div>
        </div>

        {/* Phone */}
        <div 
          className="flex items-start p-3 sm:p-4 rounded-xl shadow-sm border transition-all duration-300 hover:shadow-lg cursor-pointer group"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderColor: 'rgba(59, 130, 246, 0.2)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <div 
            className="flex-shrink-0 p-2 rounded-lg transition-all duration-300 group-hover:scale-110"
            style={{
              background: 'linear-gradient(135deg, #1e3a8a, #3b82f6)',
              color: 'white'
            }}
          >
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="ml-3 sm:ml-4">
            <h3 className="text-base sm:text-lg font-semibold text-blue-800">Divine Communication</h3>
            <p className="text-gray-700 mt-1 text-xs sm:text-sm leading-relaxed">
              <span className="font-semibold">Main Temple:</span> +79776235749 <br />
              <span className="font-semibold">Prayer Line:</span> +79776235749 <br />
              <span className="text-xs font-medium" style={{ color: '#fbbf24' }}>All calls are blessed</span>
            </p>
          </div>
        </div>

        {/* Email */}
        <div 
          className="flex items-start p-3 sm:p-4 rounded-xl shadow-sm border transition-all duration-300 hover:shadow-lg cursor-pointer group"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderColor: 'rgba(59, 130, 246, 0.2)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <div 
            className="flex-shrink-0 p-2 rounded-lg transition-all duration-300 group-hover:scale-110"
            style={{
              background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
              color: '#1e3a8a'
            }}
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="ml-3 sm:ml-4">
            <h3 className="text-base sm:text-lg font-semibold text-blue-800">Sacred Messages</h3>
            <p className="text-gray-700 mt-1 text-xs sm:text-sm leading-relaxed break-all">
              <span className="font-semibold">General:</span> I.Laity@yandex.com<br />
              <span className="font-semibold">Prayers:</span> I.Laity@yandex.com<br />
              <span className="font-semibold">Donations:</span> I.Laity@yandex.com
            </p>
          </div>
        </div>

        {/* Hours */}
        <div 
          className="flex items-start p-3 sm:p-4 rounded-xl shadow-sm border transition-all duration-300 hover:shadow-lg cursor-pointer group"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderColor: 'rgba(59, 130, 246, 0.2)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <div 
            className="flex-shrink-0 p-2 rounded-lg transition-all duration-300 group-hover:scale-110"
            style={{
              background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
              color: '#1e3a8a'
            }}
          >
            <Sunrise className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="ml-3 sm:ml-4">
            <h3 className="text-base sm:text-lg font-semibold text-blue-800">Sacred Hours</h3>
            <p className="text-gray-700 mt-1 text-xs sm:text-sm leading-relaxed">
              <span className="font-semibold">Mon-Fri:</span> 9AM - 5PM<br />
              <span className="font-semibold">Sat:</span> 10AM - 2PM<br />
              <span className="font-semibold">Sun:</span> Closed
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 sm:mt-8 text-center">
        <div 
          className="w-12 sm:w-16 h-1 rounded-full mx-auto mb-2 sm:mb-3"
          style={{
            background: 'linear-gradient(90deg, #3b82f6, #fbbf24, #3b82f6)',
            animation: 'pulse 3s ease-in-out infinite'
          }}
        />
        <p className="text-blue-500 text-xs sm:text-sm font-medium">All connections are sacred. We respond within 48 hours.</p>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.6; transform: scaleX(1); }
          50% { opacity: 1; transform: scaleX(1.2); }
        }
      `}</style>
    </div>
  );
};

export default ContactInfo;