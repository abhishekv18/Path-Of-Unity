

// import React, { useState } from 'react';
// import { HeartHandshake, Sparkles, Gift, Leaf, HandCoins, MessageCircle } from 'lucide-react';

// const DonationButton = () => {
//   const [isBlessingVisible, setIsBlessingVisible] = useState(false);
//   const [isProcessing, setIsProcessing] = useState(false);

//   // Replace with your WhatsApp number (include country code without + sign)
//   const whatsappNumber = "+79776235749"; // Example: "919876543210" for Indian number
//   const donationMessage = "Hello! I would like to make a donation to support your spiritual mission. Please guide me on how to proceed.";

//   const handleDonateClick = () => {
//     setIsProcessing(true);
//     setIsBlessingVisible(true);
    
//     // Simulate processing delay before redirecting to WhatsApp
//     setTimeout(() => {
//       // WhatsApp integration
//       const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(donationMessage)}`;
//       window.open(whatsappUrl, '_blank');
//       setIsProcessing(false);
//     }, 1500);
//   };

//   // Floating particles animation
//   const FloatingParticle = ({ icon, initialX, initialY, size, duration }) => {
//     return (
//       <div
//         className="absolute text-purple-300 text-opacity-40"
//         style={{
//           animation: `float-${duration} ${duration}s infinite linear`,
//           left: `${initialX}px`,
//           top: `${initialY}px`,
//         }}
//       >
//         {icon === 'sparkle' && <Sparkles size={size} />}
//         {icon === 'heart' && <HeartHandshake size={size} />}
//         {icon === 'leaf' && <Leaf size={size} />}
//       </div>
//     );
//   };

//   return (
//     <div className="max-w-md mx-auto text-center p-4">
//       <style jsx>{`
//         @keyframes float-8 {
//           0% { transform: translate(0, 0) rotate(-15deg); opacity: 0; }
//           25% { transform: translate(5px, 5px) rotate(45deg); opacity: 0.4; }
//           50% { transform: translate(10px, 10px) rotate(90deg); opacity: 0.6; }
//           75% { transform: translate(15px, 15px) rotate(135deg); opacity: 0.4; }
//           100% { transform: translate(20px, 20px) rotate(180deg); opacity: 0; }
//         }
//         @keyframes float-10 {
//           0% { transform: translate(0, 0) rotate(-15deg); opacity: 0; }
//           25% { transform: translate(5px, 5px) rotate(45deg); opacity: 0.4; }
//           50% { transform: translate(10px, 10px) rotate(90deg); opacity: 0.6; }
//           75% { transform: translate(15px, 15px) rotate(135deg); opacity: 0.4; }
//           100% { transform: translate(20px, 20px) rotate(180deg); opacity: 0; }
//         }
//         @keyframes float-12 {
//           0% { transform: translate(0, 0) rotate(-15deg); opacity: 0; }
//           25% { transform: translate(5px, 5px) rotate(45deg); opacity: 0.4; }
//           50% { transform: translate(10px, 10px) rotate(90deg); opacity: 0.6; }
//           75% { transform: translate(15px, 15px) rotate(135deg); opacity: 0.4; }
//           100% { transform: translate(20px, 20px) rotate(180deg); opacity: 0; }
//         }
//         @keyframes float-9 {
//           0% { transform: translate(0, 0) rotate(-15deg); opacity: 0; }
//           25% { transform: translate(5px, 5px) rotate(45deg); opacity: 0.4; }
//           50% { transform: translate(10px, 10px) rotate(90deg); opacity: 0.6; }
//           75% { transform: translate(15px, 15px) rotate(135deg); opacity: 0.4; }
//           100% { transform: translate(20px, 20px) rotate(180deg); opacity: 0; }
//         }
//         @keyframes pulse-quote {
//           0%, 100% { opacity: 0.7; }
//           50% { opacity: 1; }
//         }
//       `}</style>
      
//       <h2 className="text-2xl md:text-3xl font-semibold text-purple-800 mb-4 md:mb-6">
//         <span className="inline-flex items-center">
//           Sacred Giving Circle
//           <HeartHandshake className="ml-2 w-6 h-6 text-purple-600" />
//         </span>
//       </h2>
      
//       <div className="bg-gradient-to-br from-white to-purple-50 rounded-2xl p-6 md:p-8 shadow-lg border border-purple-100 relative overflow-hidden">
//         {/* Floating background elements */}
//         <FloatingParticle icon="sparkle" initialX={10} initialY={20} size={16} duration={8} />
//         <FloatingParticle icon="heart" initialX={80} initialY={40} size={14} duration={10} />
//         <FloatingParticle icon="leaf" initialX={30} initialY={70} size={18} duration={12} />
//         <FloatingParticle icon="sparkle" initialX={70} initialY={10} size={12} duration={9} />

//         <div className="relative z-10">
//           <div className="flex justify-center mb-4 md:mb-6">
//             <Gift className="w-12 h-12 text-purple-600" strokeWidth={1.5} />
//           </div>
          
//           <p className="text-purple-700 mb-5 md:mb-6 text-base md:text-lg leading-relaxed">
//             Your <span className="font-medium text-purple-800">generous gift</span> sustains our spiritual mission and{" "}
//             <span className="font-medium text-purple-800">spreads blessings</span> to those in need.
//           </p>
          
//           <div>
//             <button
//               onClick={handleDonateClick}
//               disabled={isProcessing}
//               className={`w-full py-3 md:py-4 px-6 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-medium rounded-lg md:rounded-xl shadow-md transition-all duration-300 flex items-center justify-center space-x-2 relative overflow-hidden transform hover:scale-105 hover:shadow-lg ${isProcessing ? 'opacity-90' : ''}`}
//             >
//               {isProcessing ? (
//                 <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
//               ) : (
//                 <>
//                   <span>Donate via WhatsApp</span>
//                   <MessageCircle className="w-5 h-5" />
//                 </>
//               )}
//             </button>
//           </div>
          
//           {isBlessingVisible && (
//             <div className="mt-4 p-3 bg-green-50 text-green-700 rounded-lg border border-green-200 flex items-center justify-center space-x-2 animate-pulse">
//               <HandCoins className="text-green-600" />
//               <span>Thank you for your sacred offering</span>
//             </div>
//           )}

//           <div className="mt-4 md:mt-6 flex flex-wrap items-center justify-center gap-2 text-xs md:text-sm text-purple-400">
//             <div className="flex items-center">
//               <svg className="w-3 h-3 mr-1 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//               </svg>
//               Direct contact
//             </div>
//             <div className="flex items-center">
//               <svg className="w-3 h-3 mr-1 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//               </svg>
//               Personal guidance
//             </div>
//             <div className="flex items-center">
//               <svg className="w-3 h-3 mr-1 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//               </svg>
//               Blessed transaction
//             </div>
//           </div>
//         </div>
//       </div>

//       <div 
//         className="mt-4 text-purple-300 text-xs md:text-sm italic"
//         style={{ animation: 'pulse-quote 4s infinite' }}
//       >
//         "Generosity is the seed of abundance"
//       </div>
//     </div>
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
        className="absolute text-blue-300 text-opacity-40"
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
        @keyframes divine-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 30px rgba(251, 191, 36, 0.4); }
        }
        @keyframes sacred-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
      `}</style>
      
      <h2 className="text-2xl md:text-3xl font-semibold text-blue-800 mb-4 md:mb-6">
        <span className="inline-flex items-center">
          Sacred Giving Circle
          <HeartHandshake className="ml-2 w-6 h-6 text-yellow-500" />
        </span>
      </h2>
      
      <div 
        className="bg-gradient-to-br from-white via-blue-50 to-yellow-50 rounded-2xl p-6 md:p-8 shadow-xl border-2 border-blue-100 relative overflow-hidden"
        style={{ animation: 'divine-glow 4s infinite ease-in-out' }}
      >
        {/* Floating background elements */}
        <FloatingParticle icon="sparkle" initialX={10} initialY={20} size={16} duration={8} />
        <FloatingParticle icon="heart" initialX={80} initialY={40} size={14} duration={10} />
        <FloatingParticle icon="leaf" initialX={30} initialY={70} size={18} duration={12} />
        <FloatingParticle icon="sparkle" initialX={70} initialY={10} size={12} duration={9} />

        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-gradient-to-r from-blue-600 via-yellow-400 to-blue-600"></div>
        </div>

        <div className="relative z-10">
          <div className="flex justify-center mb-4 md:mb-6">
            <div 
              className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-yellow-400 shadow-lg"
              style={{ animation: 'sacred-pulse 3s infinite ease-in-out' }}
            >
              <Gift className="w-12 h-12 text-white" strokeWidth={1.5} />
            </div>
          </div>
          
          <p className="text-blue-700 mb-5 md:mb-6 text-base md:text-lg leading-relaxed">
            Your <span className="font-semibold text-yellow-600 bg-yellow-50 px-2 py-1 rounded">generous gift</span> sustains our spiritual mission and{" "}
            <span className="font-semibold text-blue-800 bg-blue-50 px-2 py-1 rounded">spreads blessings</span> to those in need.
          </p>
          
          <div>
            {/* <button
              onClick={handleDonateClick}
              disabled={isProcessing}
              className={`w-full py-3 md:py-4 px-6 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white font-semibold rounded-lg md:rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 relative overflow-hidden transform hover:scale-105 hover:shadow-2xl border border-blue-500 ${isProcessing ? 'opacity-90' : ''}`}
              style={{ 
                backgroundImage: 'linear-gradient(45deg, #1e3a8a, #3b82f6, #fbbf24)',
                backgroundSize: '200% 200%',
                animation: isProcessing ? 'none' : 'gradient-shift 3s ease infinite'
              }}
            >
              <style jsx>{`
                @keyframes gradient-shift {
                  0% { background-position: 0% 50%; }
                  50% { background-position: 100% 50%; }
                  100% { background-position: 0% 50%; }
                }
              `}</style>
              
              {isProcessing ? (
                <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <span>Donate via WhatsApp</span>
                  <MessageCircle className="w-5 h-5" />
                </>
              )}
            </button> */}
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
            <div className="mt-4 p-4 bg-gradient-to-r from-yellow-50 to-blue-50 text-blue-700 rounded-lg border-2 border-yellow-300 flex items-center justify-center space-x-2 shadow-md">
              <HandCoins className="text-yellow-600 w-5 h-5" />
              <span className="font-medium">Thank you for your sacred offering</span>
              <Sparkles className="text-yellow-500 w-4 h-4 animate-pulse" />
            </div>
          )}

          <div className="mt-4 md:mt-6 flex flex-wrap items-center justify-center gap-3 text-xs md:text-sm text-blue-600">
            <div className="flex items-center bg-white rounded-full px-3 py-1 shadow-sm border border-blue-200">
              <svg className="w-3 h-3 mr-1 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Direct contact
            </div>
            <div className="flex items-center bg-white rounded-full px-3 py-1 shadow-sm border border-blue-200">
              <svg className="w-3 h-3 mr-1 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Personal guidance
            </div>
            <div className="flex items-center bg-white rounded-full px-3 py-1 shadow-sm border border-blue-200">
              <svg className="w-3 h-3 mr-1 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Blessed transaction
            </div>
          </div>
        </div>
      </div>

      <div 
        className="mt-4 text-blue-400 text-xs md:text-sm italic font-medium"
        style={{ animation: 'pulse-quote 4s infinite' }}
      >
        "Generosity is the seed of abundance"
      </div>
    </div>
  );
};

export default DonationButton;