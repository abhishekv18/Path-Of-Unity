
// import React, { useState, useEffect } from 'react';
// import { Calendar, Heart, Users, ArrowRight, Sparkles, Clock, Sun, X } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import DonationButton from '../contact/DonationButton'; // Your existing DonationButton component

// const CallToAction = () => {
//   const [timeLeft, setTimeLeft] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0
//   });

//   const [showDonateModal, setShowDonateModal] = useState(false);

//   // Temple launch date - set to 6 months from now
//   const launchDate = new Date('2025-12-01T00:00:00');

//   useEffect(() => {
//     const timer = setInterval(() => {
//       const now = new Date().getTime();
//       const distance = launchDate.getTime() - now;

//       if (distance > 0) {
//         setTimeLeft({
//           days: Math.floor(distance / (1000 * 60 * 60 * 24)),
//           hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//           minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
//           seconds: Math.floor((distance % (1000 * 60)) / 1000)
//         });
//       }
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const handleDonate = () => {
//     setShowDonateModal(true);
//   };

//   const closeModal = () => {
//     setShowDonateModal(false);
//   };

//   return (
//     <section className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-br from-amber-50 via-white to-blue-50">
//       {/* Donation Modal */}
//       {showDonateModal && (
//         <div className="fixed inset-0 z-50 overflow-y-auto">
//           <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
//             {/* Background overlay */}
//             <div 
//               className="fixed inset-0 transition-opacity" 
//               aria-hidden="true"
//               onClick={closeModal}
//             >
//               <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"></div>
//             </div>

//             {/* Modal content */}
//             <div className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full">
//               <div className="bg-white p-6 relative">
//                 {/* Close button */}
//                 <button
//                   onClick={closeModal}
//                   className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 focus:outline-none"
//                 >
//                   <X className="h-6 w-6" />
//                 </button>

//                 {/* Modal header */}
//                 <div className="text-center mb-6">
//                   <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-amber-100 mb-4">
//                     <Heart className="h-6 w-6 text-amber-600" />
//                   </div>
//                   <h3 className="text-lg leading-6 font-medium text-gray-900">
//                     Sacred Offering
//                   </h3>
//                   <p className="mt-2 text-sm text-gray-500">
//                     Your generous gift supports our spiritual mission
//                   </p>
//                 </div>

//                 {/* Donation component */}
//                 <div className="mt-4">
//                   <DonationButton />
//                 </div>

//                 {/* Additional info */}
//                 <div className="mt-6 border-t border-gray-200 pt-4">
//                   <div className="flex items-center text-sm text-gray-500">
//                     <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
//                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                     </svg>
//                     All donations are tax deductible
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Rest of your existing content */}
//       <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Spiritual Header */}
//         <div className="text-center mb-12 md:mb-16">
//           <div className="flex justify-center mb-6">
//             <div className="relative">
//               <Sun className="w-12 h-12 md:w-16 md:h-16 text-amber-500 animate-spin" style={{ animationDuration: '20s' }} />
//               <div className="absolute inset-0 w-12 h-12 md:w-16 md:h-16 border-2 border-amber-300 rounded-full animate-ping opacity-20"></div>
//             </div>
//           </div>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-700 mb-4 md:mb-6 leading-tight">
//             <span className="block text-xl md:text-2xl lg:text-3xl text-gray-500 mb-2 font-normal">Join Our Sacred</span>
//             <span className="bg-gradient-to-r from-amber-600 via-purple-600 to-blue-600 bg-clip-text text-transparent font-semibold">
//               Journey of Unity
//             </span>
//           </h2>
//           <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
//             In the spirit of divine love and universal harmony, we invite you to be part of a sacred community 
//             where all hearts unite in faith, hope, and compassion.
//           </p>
//         </div>

//         {/* Temple Countdown */}
//         <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-12 md:mb-16 border border-amber-100 shadow-lg max-w-4xl mx-auto">
//           <div className="flex items-center justify-center mb-6 md:mb-8">
//             <Clock className="w-5 h-5 md:w-6 md:h-6 text-amber-600 mr-2 md:mr-3" />
//             <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-gray-700">Sacred Temple Opening</h3>
//           </div>
          
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
//             {Object.entries(timeLeft).map(([unit, value], index) => (
//               <div 
//                 key={unit} 
//                 className="text-center group cursor-default"
//                 style={{ animationDelay: `${index * 0.2}s` }}
//               >
//                 <div className="bg-gradient-to-br from-white to-amber-50 rounded-xl p-4 md:p-6 border border-amber-100 shadow-sm hover:shadow-md transition-all duration-300 group-hover:scale-105">
//                   <div className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-700 mb-1 md:mb-2">{value}</div>
//                   <div className="text-amber-600 text-xs md:text-sm font-medium uppercase tracking-wider">{unit}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
          
//           <p className="text-gray-600 text-center text-sm md:text-base font-light">
//             Until our Unity Temple opens its doors to welcome souls from all paths
//           </p>
//         </div>

//         {/* Sacred Action Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
//           {/* Join Community */}
//           <div className="group bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-blue-100 hover:bg-white/80 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-xl">
//             <div className="flex justify-center mb-4 md:mb-6">
//               <div className="relative">
//                 <Users className="w-10 h-10 md:w-12 md:h-12 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
//                 <div className="absolute -inset-1 md:-inset-2 bg-blue-100 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
//               </div>
//             </div>
//             <h3 className="text-lg md:text-xl font-medium text-gray-700 mb-3 md:mb-4 text-center">Sacred Community</h3>
//             <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base text-center font-light leading-relaxed">
//               Connect with kindred spirits on their spiritual journey. Share wisdom, find support, and grow together in divine love.
//             </p>
//             <Link to='/contact'>
//               <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium py-2 md:py-3 px-4 md:px-6 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group shadow-md">
//                 Begin Journey
//                 <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
//               </button>
//             </Link>
//           </div>

//           {/* Prayer Wall */}
//           <div className="group bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-purple-100 hover:bg-white/80 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-xl">
//             <div className="flex justify-center mb-4 md:mb-6">
//               <div className="relative">
//                 <Heart className="w-10 h-10 md:w-12 md:h-12 text-purple-500 group-hover:scale-110 transition-transform duration-300" />
//                 <div className="absolute -inset-1 md:-inset-2 bg-purple-100 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
//               </div>
//             </div>
//             <h3 className="text-lg md:text-xl font-medium text-gray-700 mb-3 md:mb-4 text-center">Light of Prayer</h3>
//             <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base text-center font-light leading-relaxed">
//               Kindle a sacred flame of hope. Share prayers, light virtual candles, and join in collective meditation.
//             </p>
//             <Link to='/prayers'>
//               <button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white font-medium py-2 md:py-3 px-4 md:px-6 rounded-xl hover:from-purple-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-md">
//                 Light Candle
//                 <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
//               </button>
//             </Link>
//           </div>

//           {/* Support Mission */}
//           <div className="group bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-amber-100 hover:bg-white/80 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-xl">
//             <div className="flex justify-center mb-4 md:mb-6">
//               <div className="relative">
//                 <Calendar className="w-10 h-10 md:w-12 md:h-12 text-amber-500 group-hover:scale-110 transition-transform duration-300" />
//                 <div className="absolute -inset-1 md:-inset-2 bg-amber-100 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
//               </div>
//             </div>
//             <h3 className="text-lg md:text-xl font-medium text-gray-700 mb-3 md:mb-4 text-center">Sacred Offering</h3>
//             <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base text-center font-light leading-relaxed">
//               Support our divine mission to build the Unity Temple—a sanctuary where all faiths unite in harmony.
//             </p>
//             <button
//               onClick={handleDonate}
//               className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium py-2 md:py-3 px-4 md:px-6 rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all duration-300 flex items-center justify-center group shadow-md"
//             >
//               Give Blessing
//               <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
//             </button>
//           </div>
//         </div>

//         {/* Final Sacred Call */}
//         <div className="relative max-w-4xl mx-auto">
//           <div className="bg-gradient-to-r from-amber-50 via-white to-blue-50 rounded-2xl md:rounded-3xl p-8 md:p-12 border border-amber-100 shadow-lg">
//             <div className="text-center">
//               <div className="flex justify-center mb-4 md:mb-6">
//                 <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-amber-500 animate-pulse" />
//               </div>
//               <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-700 mb-4 md:mb-6">
//                 In Unity, We Find
//                 <span className="block text-amber-600 font-medium">Divine Purpose</span>
//               </h3>
//               <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-8 md:mb-10 max-w-2xl mx-auto font-light leading-relaxed">
//                 Every soul, regardless of faith or path, has a sacred place in our community. 
//                 Together, we transcend divisions and embrace the divine love that unites us all.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
//                 <Link to='/contact'>
//                   <button className="bg-gradient-to-r from-amber-600 to-purple-600 text-white font-medium py-3 md:py-4 px-6 md:px-8 rounded-xl hover:from-amber-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center shadow-lg">
//                     Embrace Your Path
//                     <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
//                   </button>
//                 </Link>
//                 <div className="text-gray-500 text-xs md:text-sm">
//                   <span className="block font-medium">10,000+ souls united</span>
//                   <span className="text-gray-400">in divine harmony</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CallToAction;



import React, { useState, useEffect } from 'react';
import { Calendar, Heart, Users, ArrowRight, Sparkles, Clock, Sun, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import DonationButton from '../contact/DonationButton'; // Your existing DonationButton component

const CallToAction = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [showDonateModal, setShowDonateModal] = useState(false);

  // Temple launch date - set to 6 months from now
  const launchDate = new Date('2025-12-01T00:00:00');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleDonate = () => {
    setShowDonateModal(true);
  };

  const closeModal = () => {
    setShowDonateModal(false);
  };

  return (
    <section className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-yellow-50">
      {/* Donation Modal */}
      {showDonateModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div 
              className="fixed inset-0 transition-opacity" 
              aria-hidden="true"
              onClick={closeModal}
            >
              <div className="absolute inset-0 bg-blue-900 bg-opacity-50 backdrop-blur-sm"></div>
            </div>

            {/* Modal content */}
            <div className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full border border-yellow-200">
              <div className="bg-white p-6 relative">
                {/* Close button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-gray-400 hover:text-blue-600 focus:outline-none transition-colors duration-200"
                >
                  <X className="h-6 w-6" />
                </button>

                {/* Modal header */}
                <div className="text-center mb-6">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-yellow-100 to-blue-100 mb-4">
                    <Heart className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg leading-6 font-semibold text-blue-900">
                    Sacred Offering
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Your generous gift supports our spiritual mission
                  </p>
                </div>

                {/* Donation component */}
                <div className="mt-4">
                  <DonationButton />
                </div>

                {/* Additional info */}
                <div className="mt-6 border-t border-yellow-200 pt-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    All donations are tax deductible
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Decorative spiritual elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-blue-200 to-yellow-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-r from-yellow-200 to-blue-200 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-blue-100 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-yellow-100 rounded-full opacity-25 animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Spiritual Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Sun className="w-12 h-12 md:w-16 md:h-16 text-yellow-500 animate-spin" style={{ animationDuration: '20s' }} />
              <div className="absolute inset-0 w-12 h-12 md:w-16 md:h-16 border-2 border-yellow-300 rounded-full animate-ping opacity-20"></div>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-blue-900 mb-4 md:mb-6 leading-tight">
            <span className="block text-xl md:text-2xl lg:text-3xl text-blue-700 mb-2 font-normal">Join Our Sacred</span>
            <span className="bg-gradient-to-r from-blue-600 via-yellow-500 to-blue-800 bg-clip-text text-transparent font-semibold">
              Journey of Unity
            </span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-light">
            In the spirit of divine love and universal harmony, we invite you to be part of a sacred community 
            where all hearts unite in faith, hope, and compassion.
          </p>
        </div>

        {/* Temple Countdown */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-12 md:mb-16 border-2 border-blue-200 shadow-xl max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6 md:mb-8">
            <Clock className="w-5 h-5 md:w-6 md:h-6 text-blue-600 mr-2 md:mr-3" />
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-blue-900">Sacred Temple Opening</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
            {Object.entries(timeLeft).map(([unit, value], index) => (
              <div 
                key={unit} 
                className="text-center group cursor-default"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-gradient-to-br from-white to-yellow-50 rounded-xl p-4 md:p-6 border-2 border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 hover:border-yellow-300">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-800 mb-1 md:mb-2">{value}</div>
                  <div className="text-yellow-600 text-xs md:text-sm font-semibold uppercase tracking-wider">{unit}</div>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-blue-700 text-center text-sm md:text-base font-medium">
            Until our Unity Temple opens its doors to welcome souls from all paths
          </p>
        </div>

        {/* Sacred Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {/* Join Community */}
          <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 md:p-8 border-2 border-blue-200 hover:bg-white/90 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:border-yellow-300">
            <div className="flex justify-center mb-4 md:mb-6">
              <div className="relative">
                <Users className="w-10 h-10 md:w-12 md:h-12 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute -inset-1 md:-inset-2 bg-blue-100 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-blue-900 mb-3 md:mb-4 text-center">Sacred Community</h3>
            <p className="text-gray-700 mb-6 md:mb-8 text-sm md:text-base text-center font-light leading-relaxed">
              Connect with kindred spirits on their spiritual journey. Share wisdom, find support, and grow together in divine love.
            </p>
            <Link to='/contact'>
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-2 md:py-3 px-4 md:px-6 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl">
                Begin Journey
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
          </div>

          {/* Prayer Wall */}
          <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 md:p-8 border-2 border-yellow-200 hover:bg-white/90 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:border-yellow-300">
            <div className="flex justify-center mb-4 md:mb-6">
              <div className="relative">
                <Heart className="w-10 h-10 md:w-12 md:h-12 text-yellow-600 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute -inset-1 md:-inset-2 bg-yellow-100 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-blue-900 mb-3 md:mb-4 text-center">Light of Prayer</h3>
            <p className="text-gray-700 mb-6 md:mb-8 text-sm md:text-base text-center font-light leading-relaxed">
              Kindle a sacred flame of hope. Share prayers, light virtual candles, and join in collective meditation.
            </p>
            <Link to='/prayers'>
              <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold py-2 md:py-3 px-4 md:px-6 rounded-xl hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl">
                Light Candle
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
          </div>

          {/* Support Mission */}
          <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 md:p-8 border-2 border-blue-200 hover:bg-white/90 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:border-yellow-300">
            <div className="flex justify-center mb-4 md:mb-6">
              <div className="relative">
                <Calendar className="w-10 h-10 md:w-12 md:h-12 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute -inset-1 md:-inset-2 bg-blue-100 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-blue-900 mb-3 md:mb-4 text-center">Sacred Offering</h3>
            <p className="text-gray-700 mb-6 md:mb-8 text-sm md:text-base text-center font-light leading-relaxed">
              Support our divine mission to build the Unity Temple—a sanctuary where all faiths unite in harmony.
            </p>
            <button
              onClick={handleDonate}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-2 md:py-3 px-4 md:px-6 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl">
            
              Give Blessing
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Final Sacred Call */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 via-white to-yellow-50 rounded-2xl md:rounded-3xl p-8 md:p-12 border-2 border-blue-200 shadow-2xl">
            <div className="text-center">
              <div className="flex justify-center mb-4 md:mb-6">
                <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-yellow-500 animate-pulse" />
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-blue-900 mb-4 md:mb-6">
                In Unity, We Find
                <span className="block text-yellow-600 font-bold">Divine Purpose</span>
              </h3>
              <p className="text-sm md:text-base lg:text-lg text-gray-700 mb-8 md:mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                Every soul, regardless of faith or path, has a sacred place in our community. 
                Together, we transcend divisions and embrace the divine love that unites us all.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
                <Link to='/contact'>
                  <button className="bg-gradient-to-r from-blue-600 to-yellow-500 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-xl hover:from-blue-700 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 flex items-center shadow-xl hover:shadow-2xl">
                    Embrace Your Path
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                  </button>
                </Link>
                <div className="text-blue-700 text-xs md:text-sm">
                  <span className="block font-semibold">10,000+ souls united</span>
                  <span className="text-blue-600">in divine harmony</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;