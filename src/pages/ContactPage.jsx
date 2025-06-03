
// import React from 'react';
// import ContactForm from '../components/contact/ContactForm';
// import DonationButton from '../components/contact/DonationButton';
// import ContactInfo from '../components/contact/ContactInfo';
// import SocialLinks from '../components/contact/SocialLinks';
// import Newsletter from '../components/contact/Newsletter';
// import { motion } from 'framer-motion';
// import { 
//   FaPrayingHands, 
//   FaDove, 
//   FaChurch, 
//   FaHandHoldingHeart,
//   FaStar,
//   FaCross,
//   FaLeaf,
//   FaWater
// } from 'react-icons/fa';
// import { 
//   FiMail, 
//   FiPhone, 
//   FiMapPin,
//   FiMessageSquare,
//   FiUsers,
//   FiBookOpen,
//   FiGift
// } from 'react-icons/fi';
// import { 
//   BookOpen,
//   Heart,
//   Sparkles,
//   Leaf,
//   Waves
// } from 'lucide-react';

// // Animation variants
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15,
//       delayChildren: 0.2
//     }
//   }
// };

// const itemVariants = {
//   hidden: { y: 15, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.6,
//       ease: "easeOut"
//     }
//   }
// };

// const floatingItem = {
//   hidden: { y: 20, opacity: 0 },
//   visible: (i) => ({
//     y: 0,
//     opacity: 1,
//     transition: {
//       delay: i * 0.1,
//       duration: 0.8,
//       ease: "easeOut"
//     }
//   })
// };

// const ContactPage = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
//       {/* Sacred background elements */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           className="absolute top-0 left-0 w-full h-full"
//         >
//           <motion.div 
//             custom={1}
//             variants={floatingItem}
//             className="absolute top-20 left-10 text-purple-200/30 text-4xl md:text-6xl"
//           >
//             <FaDove className="rotate-12" />
//           </motion.div>
//           <motion.div 
//             custom={2}
//             variants={floatingItem}
//             className="absolute bottom-40 right-10 text-blue-200/30 text-4xl md:text-6xl"
//           >
//             <FaChurch className="-rotate-12" />
//           </motion.div>
//           <motion.div 
//             custom={3}
//             variants={floatingItem}
//             className="absolute top-1/3 left-1/4 text-indigo-200/20 text-3xl md:text-5xl"
//           >
//             <FaCross />
//           </motion.div>
//           <motion.div 
//             custom={4}
//             variants={floatingItem}
//             className="absolute bottom-1/4 right-1/5 text-purple-200/20 text-3xl md:text-4xl"
//           >
//             <FaStar />
//           </motion.div>
//         </motion.div>
//       </div>
      
//       <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 z-10">
//         {/* Animated header */}
//         <motion.div 
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-8 md:mb-12"
//         >
//           <motion.div 
//             className="flex justify-center mb-4"
//             whileHover={{ scale: 1.1 }}
//             transition={{ type: "spring", stiffness: 400 }}
//           >
//             <div className="relative">
//               <FaPrayingHands className="relative z-10 text-purple-600 text-4xl md:text-5xl" />
//               <motion.div 
//                 className="absolute inset-0 rounded-full bg-purple-200/30"
//                 animate={{
//                   scale: [1, 1.4, 1],
//                   opacity: [0.8, 0, 0.8]
//                 }}
//                 transition={{
//                   duration: 3,
//                   repeat: Infinity,
//                   ease: "easeInOut"
//                 }}
//               />
//             </div>
//           </motion.div>
//           <h1 className="text-3xl md:text-4xl font-bold text-purple-800 mb-3 font-serif">
//             Sacred Connection
//           </h1>
//           <motion.div 
//             className="flex justify-center mb-4"
//             initial={{ scaleX: 0 }}
//             animate={{ scaleX: 1 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//           >
//             <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full" />
//           </motion.div>
//           <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
//             We welcome your prayers, questions, and fellowship. Reach out and let us walk together in faith.
//           </p>
//         </motion.div>

//         {/* Main content grid */}
//         <motion.div 
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="grid grid-cols-1 lg:grid-cols-2 gap-6"
//         >
//           {/* Left Column */}
//           <div className="space-y-6">
//             {/* Contact Form */}
//             <motion.div 
//               variants={itemVariants}
//               className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-5 md:p-6 border-l-4 border-purple-500 hover:shadow-xl transition-all duration-300"
//             >
//               <div className="flex items-center mb-5 space-x-3">
//                 <div className="p-2 bg-purple-100 rounded-lg">
//                   <FiMail className="text-purple-600 text-xl" />
//                 </div>
//                 <h2 className="text-lg md:text-xl font-semibold text-gray-800">Send a Sacred Message</h2>
//               </div>
//               <ContactForm />
//             </motion.div>
            
//             {/* Social Community */}
//             <motion.div 
//               variants={itemVariants}
//               className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-5 md:p-6 border-l-4 border-indigo-500 hover:shadow-xl transition-all duration-300"
//             >
//               <div className="flex items-center mb-5 space-x-3">
//                 <div className="p-2 bg-indigo-100 rounded-lg">
//                   <FiUsers className="text-indigo-600 text-xl" />
//                 </div>
//                 <h2 className="text-lg md:text-xl font-semibold text-gray-800">Join Our Spiritual Family</h2>
//               </div>
//               <SocialLinks />
//               <p className="mt-4 text-gray-600 text-sm flex items-center">
//                 <FiMessageSquare className="mr-2" />
//                 Follow us for daily inspiration and prayer reminders
//               </p>
//             </motion.div>
//           </div>

//           {/* Right Column */}
//           <div className="space-y-6">
//             {/* Contact Information */}
//             <motion.div 
//               variants={itemVariants}
//               className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-5 md:p-6 border-l-4 border-blue-500 hover:shadow-xl transition-all duration-300"
//             >
//               <div className="flex items-center mb-5 space-x-3">
//                 <div className="p-2 bg-blue-100 rounded-lg">
//                   <FiMapPin className="text-blue-600 text-xl" />
//                 </div>
//                 <h2 className="text-lg md:text-xl font-semibold text-gray-800">Find Our Sanctuary</h2>
//               </div>
//               <ContactInfo />
//             </motion.div>

//             {/* Donation */}
//             <motion.div 
//               variants={itemVariants}
//               className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl shadow-lg p-5 md:p-6 border-l-4 border-blue-400 hover:shadow-xl transition-all duration-300"
//             >
//               <div className="flex items-center mb-5 space-x-3">
//                 <div className="p-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg">
//                   <FiGift className="text-purple-600 text-xl" />
//                 </div>
//                 <h2 className="text-lg md:text-xl font-semibold text-gray-800">Support Our Sacred Work</h2>
//               </div>
//               <DonationButton />
//               <p className="mt-4 text-gray-600 italic text-sm">
//                 "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver." - 2 Corinthians 9:7
//               </p>
//             </motion.div>

        
//           </div>
//         </motion.div>

//         {/* Prayer blessing */}
//         <motion.div 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1 }}
//           className="mt-8 md:mt-12 text-center p-5 md:p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-inner border border-purple-100"
//         >
//           <p className="text-base md:text-lg text-purple-800 font-medium">
//             "Rejoice always, pray continually, give thanks in all circumstances; for this is God's will for you in Christ Jesus." - 1 Thessalonians 5:16-18
//           </p>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default ContactPage;


// import React, { useState, useEffect } from 'react';
// import ContactForm from '../components/contact/ContactForm';
// import DonationButton from '../components/contact/DonationButton';
// import ContactInfo from '../components/contact/ContactInfo';
// import SocialLinks from '../components/contact/SocialLinks';
// import { 
//   Heart, 
//   Sparkles, 
//   Star,
//   Moon,
//   Sun,
//   Flame,
//   Feather,
//   Crown,
//   Shield,
//   Compass,
//   Cross,
//   Users,
//   Mail,
//   MapPin,
//   Gift,
//   MessageSquare,
//   Phone,
//   Calendar,
//   BookOpen,
//   Zap
// } from 'lucide-react';

// const ContactPage = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };
    
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   // Floating spiritual elements
//   const SacredElement = ({ icon: Icon, className, delay = 0, duration = 20 }) => (
//     <div 
//       className={`absolute pointer-events-none opacity-20 ${className}`}
//       style={{
//         animation: `float ${duration}s infinite ease-in-out`,
//         animationDelay: `${delay}s`
//       }}
//     >
//       <Icon size={32} />
//     </div>
//   );

//   // Glowing orb effect
//   const GlowingOrb = ({ size = "w-32 h-32", color = "from-purple-400 to-blue-400", className = "" }) => (
//     <div className={`absolute rounded-full bg-gradient-to-r ${color} opacity-10 blur-2xl ${size} ${className}`}
//          style={{ animation: 'pulse 4s infinite' }} />
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 relative overflow-hidden">
//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           25% { transform: translateY(-20px) rotate(90deg); }
//           50% { transform: translateY(-10px) rotate(180deg); }
//           75% { transform: translateY(-30px) rotate(270deg); }
//         }
        
//         @keyframes pulse {
//           0%, 100% { opacity: 0.1; transform: scale(1); }
//           50% { opacity: 0.3; transform: scale(1.1); }
//         }
        
//         @keyframes shimmer {
//           0% { transform: translateX(-100%); }
//           100% { transform: translateX(100%); }
//         }
        
//         @keyframes breathe {
//           0%, 100% { transform: scale(1); opacity: 0.8; }
//           50% { transform: scale(1.05); opacity: 1; }
//         }
        
//         @keyframes divine-glow {
//           0%, 100% { box-shadow: 0 0 20px rgba(147, 51, 234, 0.3); }
//           50% { box-shadow: 0 0 40px rgba(147, 51, 234, 0.6), 0 0 60px rgba(59, 130, 246, 0.4); }
//         }
        
//         .divine-card {
//           background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
//           backdrop-filter: blur(20px);
//           border: 1px solid rgba(255, 255, 255, 0.2);
//           animation: divine-glow 3s infinite ease-in-out;
//         }
        
//         .sacred-shimmer::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: -100%;
//           width: 100%;
//           height: 100%;
//           background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
//           animation: shimmer 3s infinite;
//         }
        
//         .mystical-text {
//           background: linear-gradient(45deg, #a855f7, #3b82f6, #8b5cf6, #06b6d4);
//           background-size: 300% 300%;
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           animation: gradient-shift 4s ease-in-out infinite;
//         }
        
//         @keyframes gradient-shift {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }
//       `}</style>

//       {/* Divine Background Elements */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         {/* Glowing orbs */}
//         <GlowingOrb className="top-20 left-20" />
//         <GlowingOrb className="bottom-32 right-16" size="w-40 h-40" color="from-blue-400 to-indigo-400" />
//         <GlowingOrb className="top-1/2 left-1/3" size="w-24 h-24" color="from-purple-400 to-pink-400" />
        
//         {/* Floating sacred elements */}
//         <SacredElement icon={Cross} className="top-16 left-16 text-purple-300" delay={0} duration={25} />
//         <SacredElement icon={Star} className="top-32 right-20 text-blue-300" delay={2} duration={22} />
//         <SacredElement icon={Heart} className="bottom-40 left-20 text-pink-300" delay={4} duration={28} />
//         <SacredElement icon={Crown} className="top-1/3 right-1/4 text-yellow-300" delay={1} duration={30} />
//         <SacredElement icon={Feather} className="bottom-1/3 right-1/3 text-indigo-300" delay={3} duration={24} />
//         <SacredElement icon={Flame} className="top-2/3 left-1/4 text-orange-300" delay={5} duration={26} />
        
//         {/* Mystical cursor follower */}
//         <div 
//           className="fixed w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 opacity-30 blur-sm pointer-events-none mix-blend-screen"
//           style={{
//             left: mousePosition.x - 16,
//             top: mousePosition.y - 16,
//             transition: 'all 0.1s ease-out'
//           }}
//         />
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 z-10">
//         {/* Celestial Header */}
//         <div className="text-center mb-16">
//           <div className="flex justify-center items-center mb-8">
//             <div className="relative">
//               <div className="absolute inset-0 animate-ping">
//                 <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 opacity-20"></div>
//               </div>
//               <div className="relative w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center shadow-2xl"
//                    style={{ animation: 'breathe 3s infinite ease-in-out' }}>
//                 <Cross size={32} className="text-white" />
//               </div>
//             </div>
//           </div>
          
//           <h1 className="text-5xl md:text-7xl font-bold mb-6 mystical-text font-serif tracking-wide">
//             Sacred Communion
//           </h1>
          
//           <div className="flex justify-center mb-6">
//             <div className="flex items-center space-x-2">
//               <Sparkles className="text-purple-400 animate-pulse" size={20} />
//               <div className="w-32 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent rounded-full"></div>
//               <Sparkles className="text-blue-400 animate-pulse" size={20} />
//             </div>
//           </div>
          
//           <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto leading-relaxed font-light">
//             Step into our sacred space where prayers ascend, hearts connect, and divine love flows freely
//           </p>
//         </div>

//         {/* Divine Grid Layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
//           {/* Contact Form - Sacred Message */}
//           <div className="lg:col-span-7">
//             <div className="divine-card rounded-2xl p-8 h-full relative overflow-hidden sacred-shimmer">
//               <div className="flex items-center mb-8">
//                 <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mr-4 shadow-lg">
//                   <Mail className="text-white" size={24} />
//                 </div>
//                 <div>
//                   <h2 className="text-2xl font-bold text-white mb-2">Sacred Message</h2>
//                   <p className="text-purple-200">Share your heart with our spiritual family</p>
//                 </div>
//               </div>
//               <ContactForm />
//             </div>
//           </div>

//           {/* Contact Info - Sacred Location */}
//           <div className="lg:col-span-5">
//             <div className="divine-card rounded-2xl p-8 h-full relative overflow-hidden sacred-shimmer">
//               <div className="flex items-center mb-8">
//                 <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center mr-4 shadow-lg">
//                   <MapPin className="text-white" size={24} />
//                 </div>
//                 <div>
//                   <h2 className="text-2xl font-bold text-white mb-2">Holy Sanctuary</h2>
//                   <p className="text-blue-200">Find us in prayer and worship</p>
//                 </div>
//               </div>
//               <ContactInfo />
//             </div>
//           </div>
//         </div>

//         {/* Second Row - Donation & Community */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
//           {/* Donation */}
//           <div className="divine-card rounded-2xl p-8 relative overflow-hidden sacred-shimmer">
//             <div className="flex items-center mb-8">
//               <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center mr-4 shadow-lg">
//                 <Gift className="text-white" size={24} />
//               </div>
//               <div>
//                 <h2 className="text-2xl font-bold text-white mb-2">Sacred Offering</h2>
//                 <p className="text-green-200">Support our divine mission</p>
//               </div>
//             </div>
//             <DonationButton />
//             <div className="mt-6 p-4 bg-gradient-to-r from-green-900/30 to-teal-900/30 rounded-lg border border-green-400/20">
//               <p className="text-green-200 text-sm italic flex items-center">
//                 <Heart className="mr-2 text-green-400" size={16} />
//                 "Give, and it will be given to you. A good measure, pressed down, shaken together and running over." - Luke 6:38
//               </p>
//             </div>
//           </div>

//           {/* Social Links - Spiritual Community */}
//           <div className="divine-card rounded-2xl p-8 relative overflow-hidden sacred-shimmer">
//             <div className="flex items-center mb-8">
//               <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center mr-4 shadow-lg">
//                 <Users className="text-white" size={24} />
//               </div>
//               <div>
//                 <h2 className="text-2xl font-bold text-white mb-2">Divine Fellowship</h2>
//                 <p className="text-pink-200">Join our spiritual community</p>
//               </div>
//             </div>
//             <SocialLinks />
//             <div className="mt-6 grid grid-cols-2 gap-4">
//               <div className="text-center p-4 bg-purple-900/30 rounded-lg border border-purple-400/20">
//                 <Users className="mx-auto mb-2 text-purple-400" size={24} />
//                 <p className="text-purple-200 text-sm">Connect</p>
//               </div>
//               <div className="text-center p-4 bg-blue-900/30 rounded-lg border border-blue-400/20">
//                 <MessageSquare className="mx-auto mb-2 text-blue-400" size={24} />
//                 <p className="text-blue-200 text-sm">Fellowship</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Additional Sacred Services */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
//           <div className="divine-card rounded-xl p-6 text-center relative overflow-hidden sacred-shimmer">
//             <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center mx-auto mb-4">
//               <Sun className="text-white" size={20} />
//             </div>
//             <h3 className="text-lg font-semibold text-white mb-2">Morning Prayers</h3>
//             <p className="text-yellow-200 text-sm">Join us at sunrise for sacred communion</p>
//           </div>
          
//           <div className="divine-card rounded-xl p-6 text-center relative overflow-hidden sacred-shimmer">
//             <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center mx-auto mb-4">
//               <BookOpen className="text-white" size={20} />
//             </div>
//             <h3 className="text-lg font-semibold text-white mb-2">Sacred Study</h3>
//             <p className="text-indigo-200 text-sm">Deepen your spiritual understanding</p>
//           </div>
          
//           <div className="divine-card rounded-xl p-6 text-center relative overflow-hidden sacred-shimmer">
//             <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
//               <Zap className="text-white" size={20} />
//             </div>
//             <h3 className="text-lg font-semibold text-white mb-2">Healing Circle</h3>
//             <p className="text-teal-200 text-sm">Experience divine restoration</p>
//           </div>
//         </div>

//         {/* Sacred Blessing Quote */}
//         <div className="divine-card rounded-2xl p-8 text-center relative overflow-hidden sacred-shimmer">
//           <div className="flex justify-center mb-6">
//             <div className="flex items-center space-x-4">
//               <Star className="text-yellow-400 animate-pulse" size={24} />
//               <Crown className="text-yellow-300" size={32} />
//               <Star className="text-yellow-400 animate-pulse" size={24} />
//             </div>
//           </div>
//           <blockquote className="text-2xl md:text-3xl font-light text-white mb-6 leading-relaxed font-serif">
//             "The Lord bless you and keep you; the Lord make his face shine on you and be gracious to you"
//           </blockquote>
//           <cite className="text-purple-300 text-lg">— Numbers 6:24-25</cite>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactPage;



import React, { useState, useEffect } from 'react';
import ContactForm from '../components/contact/ContactForm';
import DonationButton from '../components/contact/DonationButton';
import ContactInfo from '../components/contact/ContactInfo';
import SocialLinks from '../components/contact/SocialLinks';
import { 
  Heart, 
  Sparkles, 
  Star,
  Moon,
  Sun,
  Flame,
  Feather,
  Crown,
  Shield,
  Compass,
  Cross,
  Users,
  Mail,
  MapPin,
  Gift,
  MessageSquare,
  Phone,
  Calendar,
  BookOpen,
  Zap
} from 'lucide-react';

const ContactPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Floating spiritual elements
  const SacredElement = ({ icon: Icon, className, delay = 0, duration = 20 }) => (
    <div 
      className={`absolute pointer-events-none opacity-20 ${className}`}
      style={{
        animation: `float ${duration}s infinite ease-in-out`,
        animationDelay: `${delay}s`
      }}
    >
      <Icon size={32} />
    </div>
  );

  // Glowing orb effect
  const GlowingOrb = ({ size = "w-32 h-32", color = "from-purple-400 to-blue-400", className = "" }) => (
    <div className={`absolute rounded-full bg-gradient-to-r ${color} opacity-10 blur-2xl ${size} ${className}`}
         style={{ animation: 'pulse 4s infinite' }} />
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50 relative overflow-hidden">
      <style jsx>{`
        @keyframes breathe {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.05); opacity: 1; }
        }
        
        @keyframes gentle-glow {
          0%, 100% { box-shadow: 0 4px 20px rgba(147, 51, 234, 0.1); }
          50% { box-shadow: 0 8px 30px rgba(147, 51, 234, 0.2); }
        }
        
        .divine-card {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(147, 51, 234, 0.1);
          animation: gentle-glow 4s infinite ease-in-out;
        }
        
        .mystical-text {
          background: linear-gradient(45deg, #7c3aed, #3b82f6);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-shift 3s ease-in-out infinite;
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>

      {/* Subtle Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Simple geometric shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-purple-100 opacity-30 blur-xl"></div>
        <div className="absolute bottom-32 right-20 w-40 h-40 rounded-full bg-blue-100 opacity-20 blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-indigo-100 opacity-25 blur-xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 z-10">
        {/* Celestial Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 animate-ping">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 opacity-20"></div>
              </div>
              <div className="relative w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center shadow-2xl"
                   style={{ animation: 'breathe 3s infinite ease-in-out' }}>
                <Cross size={32} className="text-white" />
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 mystical-text font-serif tracking-wide">
            Sacred Connection
          </h1>
          
          <div className="flex justify-center mb-6">
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
          </div>
          
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We welcome your prayers, questions, and fellowship. Reach out and let us walk together in faith.
          </p>
        </div>

        {/* Divine Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Contact Form - Sacred Message */}
          <div className="lg:col-span-7">
            <div className="divine-card rounded-2xl p-8 h-full relative overflow-hidden">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mr-4 shadow-md">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-1">Send a Sacred Message</h2>
                  <p className="text-gray-600 text-sm">Share your heart with our spiritual family</p>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>

          {/* Contact Info - Sacred Location */}
          <div className="lg:col-span-5">
            <div className="divine-card rounded-2xl p-8 h-full relative overflow-hidden">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center mr-4 shadow-md">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-1">Find Our Sanctuary</h2>
                  <p className="text-gray-600 text-sm">Visit us in prayer and worship</p>
                </div>
              </div>
              <ContactInfo />
            </div>
          </div>
        </div>

        {/* Second Row - Donation & Community */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Donation */}
          <div className="divine-card rounded-2xl p-8 relative overflow-hidden">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center mr-4 shadow-md">
                <Gift className="text-white" size={20} />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-1">Support Our Mission</h2>
                <p className="text-gray-600 text-sm">Your generosity makes a difference</p>
              </div>
            </div>
            <DonationButton />
            <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
              <p className="text-green-700 text-sm italic flex items-center">
                <Heart className="mr-2 text-green-500" size={16} />
                "Give, and it will be given to you" - Luke 6:38
              </p>
            </div>
          </div>

          {/* Social Links - Spiritual Community */}
          <div className="divine-card rounded-2xl p-8 relative overflow-hidden">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center mr-4 shadow-md">
                <Users className="text-white" size={20} />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-1">Join Our Community</h2>
                <p className="text-gray-600 text-sm">Connect with fellow believers</p>
              </div>
            </div>
            <SocialLinks />
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
                <Users className="mx-auto mb-2 text-purple-500" size={20} />
                <p className="text-purple-700 text-sm font-medium">Connect</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                <MessageSquare className="mx-auto mb-2 text-blue-500" size={20} />
                <p className="text-blue-700 text-sm font-medium">Fellowship</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Sacred Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="divine-card rounded-xl p-6 text-center relative overflow-hidden">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center mx-auto mb-4">
              <Sun className="text-white" size={20} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Morning Prayers</h3>
            <p className="text-gray-600 text-sm">Join us at sunrise for communion</p>
          </div>
          
          <div className="divine-card rounded-xl p-6 text-center relative overflow-hidden">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center mx-auto mb-4">
              <BookOpen className="text-white" size={20} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Bible Study</h3>
            <p className="text-gray-600 text-sm">Deepen your spiritual understanding</p>
          </div>
          
          <div className="divine-card rounded-xl p-6 text-center relative overflow-hidden">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
              <Heart className="text-white" size={20} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Prayer Circle</h3>
            <p className="text-gray-600 text-sm">Experience divine fellowship</p>
          </div>
        </div>

        {/* Sacred Blessing Quote */}
        <div className="divine-card rounded-2xl p-8 text-center relative overflow-hidden">
          <div className="flex justify-center mb-6">
            <Star className="text-purple-500" size={32} />
          </div>
          <blockquote className="text-xl md:text-2xl font-light text-gray-800 mb-4 leading-relaxed font-serif">
            "The Lord bless you and keep you; the Lord make his face shine on you and be gracious to you"
          </blockquote>
          <cite className="text-purple-600 text-base">— Numbers 6:24-25</cite>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;