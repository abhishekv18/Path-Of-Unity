
// import React, { useState } from 'react';
// import { HeartHandshake, Sparkles, Gift, Leaf, HandCoins } from 'lucide-react';
// import { motion } from 'framer-motion';

// const DonationButton = () => {
//   const [isBlessingVisible, setIsBlessingVisible] = useState(false);
//   const [isProcessing, setIsProcessing] = useState(false);

//   const handleDonateClick = () => {
//     setIsProcessing(true);
//     setIsBlessingVisible(true);
    
//     // Simulate processing delay before redirecting
//     setTimeout(() => {
//       // PayPal integration
//       window.open(
//         'https://www.paypal.com/donate/?hosted_button_id=YOUR_BUTTON_ID',
//         '_blank'
//       );
//       setIsProcessing(false);
//     }, 1500);
//   };

//   // Floating particles animation
//   const FloatingParticle = ({ icon, initialX, initialY, size, duration }) => {
//     return (
//       <motion.div
//         className="absolute text-purple-300 text-opacity-40"
//         initial={{ x: initialX, y: initialY, rotate: -15, opacity: 0 }}
//         animate={{
//           x: initialX + 20,
//           y: initialY + 20,
//           rotate: [0, 45, 90, 135, 180],
//           opacity: [0, 0.4, 0.6, 0.4, 0]
//         }}
//         transition={{
//           duration: duration,
//           repeat: Infinity,
//           repeatType: "loop",
//           ease: "linear"
//         }}
//       >
//         {icon === 'sparkle' && <Sparkles size={size} />}
//         {icon === 'heart' && <HeartHandshake size={size} />}
//         {icon === 'leaf' && <Leaf size={size} />}
//       </motion.div>
//     );
//   };

//   return (
//     <motion.div 
//       className="max-w-md mx-auto text-center p-4"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       <motion.h2 
//         className="text-2xl md:text-3xl font-semibold text-purple-800 mb-4 md:mb-6"
//         initial={{ y: -20 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.4 }}
//       >
//         <span className="inline-flex items-center">
//           Sacred Giving Circle
//           <HeartHandshake className="ml-2 w-6 h-6 text-purple-600" />
//         </span>
//       </motion.h2>
      
//       <motion.div 
//         className="bg-gradient-to-br from-white to-purple-50 rounded-2xl p-6 md:p-8 shadow-lg border border-purple-100 relative overflow-hidden"
//         initial={{ scale: 0.98 }}
//         animate={{ scale: 1 }}
//         transition={{ duration: 0.3 }}
//       >
//         {/* Floating background elements */}
//         <FloatingParticle icon="sparkle" initialX={10} initialY={20} size={16} duration={8} />
//         <FloatingParticle icon="heart" initialX={80} initialY={40} size={14} duration={10} />
//         <FloatingParticle icon="leaf" initialX={30} initialY={70} size={18} duration={12} />
//         <FloatingParticle icon="sparkle" initialX={70} initialY={10} size={12} duration={9} />

//         <div className="relative z-10">
//           <motion.div
//             className="flex justify-center mb-4 md:mb-6"
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 400 }}
//           >
//             <Gift className="w-12 h-12 text-purple-600" strokeWidth={1.5} />
//           </motion.div>
          
//           <motion.p 
//             className="text-purple-700 mb-5 md:mb-6 text-base md:text-lg leading-relaxed"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//           >
//             Your <span className="font-medium text-purple-800">generous gift</span> sustains our spiritual mission and{" "}
//             <span className="font-medium text-purple-800">spreads blessings</span> to those in need.
//           </motion.p>
          
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//           >
//             <motion.button
//               onClick={handleDonateClick}
//               disabled={isProcessing}
//               whileHover={{ 
//                 scale: 1.02,
//                 boxShadow: "0 10px 20px -5px rgba(124, 58, 237, 0.3)"
//               }}
//               whileTap={{ scale: 0.98 }}
//               className={`w-full py-3 md:py-4 px-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg md:rounded-xl shadow-md transition-all duration-300 flex items-center justify-center space-x-2 relative overflow-hidden ${isProcessing ? 'opacity-90' : ''}`}
//             >
//               {isProcessing ? (
//                 <motion.span 
//                   className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
//                   transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//                 />
//               ) : (
//                 <>
//                   <span>Donate with PayPal</span>
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
//                     <path d="M10.13 12.19v.03c0 .06.02.13.04.19.06.27.18.52.36.73l-1.38.96c-.08.06-.13.16-.13.26v.31c0 .17.14.31.31.31h2.29c.12 0 .23-.05.31-.14l6.14-8.52c.05-.07.08-.16.08-.25v-.31c0-.17-.14-.31-.31-.31h-2.29c-.12 0-.23.05-.31.14l-4.29 5.97zm-1.38-3.89c-.06-.27-.18-.52-.36-.73l1.38-.96c.08-.06.13-.16.13-.26v-.31c0-.17-.14-.31-.31-.31H5.31c-.12 0-.23.05-.31.14L.08 12.52c-.05.07-.08.16-.08.25v.31c0 .17.14.31.31.31h2.29c.12 0 .23-.05.31-.14l4.29-5.97v-.03c0-.06-.02-.13-.04-.19zM20.5 7h-2.29c-.12 0-.23.05-.31.14l-4.29 5.97v.03c0 .06.02.13.04.19.06.27.18.52.36.73l-1.38.96c-.08.06-.13.16-.13.26v.31c0 .17.14.31.31.31h2.29c.12 0 .23-.05.31-.14l6.14-8.52c.05-.07.08-.16.08-.25v-.31c0-.17-.14-.31-.31-.31z"/>
//                   </svg>
//                 </>
//               )}
//             </motion.button>
//           </motion.div>
          
//           {isBlessingVisible && (
//             <motion.div 
//               className="mt-4 p-3 bg-green-50 text-green-700 rounded-lg border border-green-200 flex items-center justify-center space-x-2"
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: 'auto' }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <HandCoins className="text-green-600" />
//               <span>Thank you for your sacred offering</span>
//             </motion.div>
//           )}

//           <motion.div 
//             className="mt-4 md:mt-6 flex flex-wrap items-center justify-center gap-2 text-xs md:text-sm text-purple-400"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4 }}
//           >
//             <div className="flex items-center">
//               <svg className="w-3 h-3 mr-1 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//               </svg>
//               Secure payments
//             </div>
//             <div className="flex items-center">
//               <svg className="w-3 h-3 mr-1 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//               </svg>
//               Encrypted data
//             </div>
//             <div className="flex items-center">
//               <svg className="w-3 h-3 mr-1 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//               </svg>
//               Tax deductible
//             </div>
//           </motion.div>
//         </div>
//       </motion.div>

//       <motion.div 
//         className="mt-4 text-purple-300 text-xs md:text-sm italic"
//         animate={{ 
//           opacity: [0.7, 1, 0.7],
//         }}
//         transition={{ 
//           duration: 4,
//           repeat: Infinity 
//         }}
//       >
//         "Generosity is the seed of abundance"
//       </motion.div>
//     </motion.div>
//   );
// };

// export default DonationButton;


import React, { useState } from 'react';
import { HeartHandshake, Sparkles, Gift, Leaf, HandCoins, MessageCircle } from 'lucide-react';

const DonationButton = () => {
  const [isBlessingVisible, setIsBlessingVisible] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  // Replace with your WhatsApp number (include country code without + sign)
  const whatsappNumber = "+79776235749"; // Example: "919876543210" for Indian number
  const donationMessage = "Hello! I would like to make a donation to support your spiritual mission. Please guide me on how to proceed.";

  const handleDonateClick = () => {
    setIsProcessing(true);
    setIsBlessingVisible(true);
    
    // Simulate processing delay before redirecting to WhatsApp
    setTimeout(() => {
      // WhatsApp integration
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(donationMessage)}`;
      window.open(whatsappUrl, '_blank');
      setIsProcessing(false);
    }, 1500);
  };

  // Floating particles animation
  const FloatingParticle = ({ icon, initialX, initialY, size, duration }) => {
    return (
      <div
        className="absolute text-purple-300 text-opacity-40"
        style={{
          animation: `float-${duration} ${duration}s infinite linear`,
          left: `${initialX}px`,
          top: `${initialY}px`,
        }}
      >
        {icon === 'sparkle' && <Sparkles size={size} />}
        {icon === 'heart' && <HeartHandshake size={size} />}
        {icon === 'leaf' && <Leaf size={size} />}
      </div>
    );
  };

  return (
    <div className="max-w-md mx-auto text-center p-4">
      <style jsx>{`
        @keyframes float-8 {
          0% { transform: translate(0, 0) rotate(-15deg); opacity: 0; }
          25% { transform: translate(5px, 5px) rotate(45deg); opacity: 0.4; }
          50% { transform: translate(10px, 10px) rotate(90deg); opacity: 0.6; }
          75% { transform: translate(15px, 15px) rotate(135deg); opacity: 0.4; }
          100% { transform: translate(20px, 20px) rotate(180deg); opacity: 0; }
        }
        @keyframes float-10 {
          0% { transform: translate(0, 0) rotate(-15deg); opacity: 0; }
          25% { transform: translate(5px, 5px) rotate(45deg); opacity: 0.4; }
          50% { transform: translate(10px, 10px) rotate(90deg); opacity: 0.6; }
          75% { transform: translate(15px, 15px) rotate(135deg); opacity: 0.4; }
          100% { transform: translate(20px, 20px) rotate(180deg); opacity: 0; }
        }
        @keyframes float-12 {
          0% { transform: translate(0, 0) rotate(-15deg); opacity: 0; }
          25% { transform: translate(5px, 5px) rotate(45deg); opacity: 0.4; }
          50% { transform: translate(10px, 10px) rotate(90deg); opacity: 0.6; }
          75% { transform: translate(15px, 15px) rotate(135deg); opacity: 0.4; }
          100% { transform: translate(20px, 20px) rotate(180deg); opacity: 0; }
        }
        @keyframes float-9 {
          0% { transform: translate(0, 0) rotate(-15deg); opacity: 0; }
          25% { transform: translate(5px, 5px) rotate(45deg); opacity: 0.4; }
          50% { transform: translate(10px, 10px) rotate(90deg); opacity: 0.6; }
          75% { transform: translate(15px, 15px) rotate(135deg); opacity: 0.4; }
          100% { transform: translate(20px, 20px) rotate(180deg); opacity: 0; }
        }
        @keyframes pulse-quote {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
      `}</style>
      
      <h2 className="text-2xl md:text-3xl font-semibold text-purple-800 mb-4 md:mb-6">
        <span className="inline-flex items-center">
          Sacred Giving Circle
          <HeartHandshake className="ml-2 w-6 h-6 text-purple-600" />
        </span>
      </h2>
      
      <div className="bg-gradient-to-br from-white to-purple-50 rounded-2xl p-6 md:p-8 shadow-lg border border-purple-100 relative overflow-hidden">
        {/* Floating background elements */}
        <FloatingParticle icon="sparkle" initialX={10} initialY={20} size={16} duration={8} />
        <FloatingParticle icon="heart" initialX={80} initialY={40} size={14} duration={10} />
        <FloatingParticle icon="leaf" initialX={30} initialY={70} size={18} duration={12} />
        <FloatingParticle icon="sparkle" initialX={70} initialY={10} size={12} duration={9} />

        <div className="relative z-10">
          <div className="flex justify-center mb-4 md:mb-6">
            <Gift className="w-12 h-12 text-purple-600" strokeWidth={1.5} />
          </div>
          
          <p className="text-purple-700 mb-5 md:mb-6 text-base md:text-lg leading-relaxed">
            Your <span className="font-medium text-purple-800">generous gift</span> sustains our spiritual mission and{" "}
            <span className="font-medium text-purple-800">spreads blessings</span> to those in need.
          </p>
          
          <div>
            <button
              onClick={handleDonateClick}
              disabled={isProcessing}
              className={`w-full py-3 md:py-4 px-6 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-medium rounded-lg md:rounded-xl shadow-md transition-all duration-300 flex items-center justify-center space-x-2 relative overflow-hidden transform hover:scale-105 hover:shadow-lg ${isProcessing ? 'opacity-90' : ''}`}
            >
              {isProcessing ? (
                <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <span>Donate via WhatsApp</span>
                  <MessageCircle className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
          
          {isBlessingVisible && (
            <div className="mt-4 p-3 bg-green-50 text-green-700 rounded-lg border border-green-200 flex items-center justify-center space-x-2 animate-pulse">
              <HandCoins className="text-green-600" />
              <span>Thank you for your sacred offering</span>
            </div>
          )}

          <div className="mt-4 md:mt-6 flex flex-wrap items-center justify-center gap-2 text-xs md:text-sm text-purple-400">
            <div className="flex items-center">
              <svg className="w-3 h-3 mr-1 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Direct contact
            </div>
            <div className="flex items-center">
              <svg className="w-3 h-3 mr-1 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Personal guidance
            </div>
            <div className="flex items-center">
              <svg className="w-3 h-3 mr-1 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Blessed transaction
            </div>
          </div>
        </div>
      </div>

      <div 
        className="mt-4 text-purple-300 text-xs md:text-sm italic"
        style={{ animation: 'pulse-quote 4s infinite' }}
      >
        "Generosity is the seed of abundance"
      </div>
    </div>
  );
};

export default DonationButton;