

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
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50 relative overflow-hidden">
//       <style jsx>{`
//         @keyframes breathe {
//           0%, 100% { transform: scale(1); opacity: 0.8; }
//           50% { transform: scale(1.05); opacity: 1; }
//         }
        
//         @keyframes gentle-glow {
//           0%, 100% { box-shadow: 0 4px 20px rgba(147, 51, 234, 0.1); }
//           50% { box-shadow: 0 8px 30px rgba(147, 51, 234, 0.2); }
//         }
        
//         .divine-card {
//           background: rgba(255, 255, 255, 0.9);
//           backdrop-filter: blur(10px);
//           border: 1px solid rgba(147, 51, 234, 0.1);
//           animation: gentle-glow 4s infinite ease-in-out;
//         }
        
//         .mystical-text {
//           background: linear-gradient(45deg, #7c3aed, #3b82f6);
//           background-size: 200% 200%;
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           animation: gradient-shift 3s ease-in-out infinite;
//         }
        
//         @keyframes gradient-shift {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }
//       `}</style>

//       {/* Subtle Background Elements */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         {/* Simple geometric shapes */}
//         <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-purple-100 opacity-30 blur-xl"></div>
//         <div className="absolute bottom-32 right-20 w-40 h-40 rounded-full bg-blue-100 opacity-20 blur-2xl"></div>
//         <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-indigo-100 opacity-25 blur-xl"></div>
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
          
//           <h1 className="text-4xl md:text-6xl font-bold mb-6 mystical-text font-serif tracking-wide">
//             Sacred Connection
//           </h1>
          
//           <div className="flex justify-center mb-6">
//             <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
//           </div>
          
//           <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
//             We welcome your prayers, questions, and fellowship. Reach out and let us walk together in faith.
//           </p>
//         </div>

//         {/* Divine Grid Layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
//           {/* Contact Form - Sacred Message */}
//           <div className="lg:col-span-7">
//             <div className="divine-card rounded-2xl p-8 h-full relative overflow-hidden">
//               <div className="flex items-center mb-8">
//                 <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mr-4 shadow-md">
//                   <Mail className="text-white" size={20} />
//                 </div>
//                 <div>
//                   <h2 className="text-xl font-semibold text-gray-800 mb-1">Send a Sacred Message</h2>
//                   <p className="text-gray-600 text-sm">Share your heart with our spiritual family</p>
//                 </div>
//               </div>
//               <ContactForm />
//             </div>
//           </div>

//           {/* Contact Info - Sacred Location */}
//           <div className="lg:col-span-5">
//             <div className="divine-card rounded-2xl p-8 h-full relative overflow-hidden">
//               <div className="flex items-center mb-8">
//                 <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center mr-4 shadow-md">
//                   <MapPin className="text-white" size={20} />
//                 </div>
//                 <div>
//                   <h2 className="text-xl font-semibold text-gray-800 mb-1">Find Our Sanctuary</h2>
//                   <p className="text-gray-600 text-sm">Visit us in prayer and worship</p>
//                 </div>
//               </div>
//               <ContactInfo />
//             </div>
//           </div>
//         </div>

//         {/* Second Row - Donation & Community */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
//           {/* Donation */}
//           <div className="divine-card rounded-2xl p-8 relative overflow-hidden">
//             <div className="flex items-center mb-8">
//               <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center mr-4 shadow-md">
//                 <Gift className="text-white" size={20} />
//               </div>
//               <div>
//                 <h2 className="text-xl font-semibold text-gray-800 mb-1">Support Our Mission</h2>
//                 <p className="text-gray-600 text-sm">Your generosity makes a difference</p>
//               </div>
//             </div>
//             <DonationButton />
//             <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
//               <p className="text-green-700 text-sm italic flex items-center">
//                 <Heart className="mr-2 text-green-500" size={16} />
//                 "Give, and it will be given to you" - Luke 6:38
//               </p>
//             </div>
//           </div>

//           {/* Social Links - Spiritual Community */}
//           <div className="divine-card rounded-2xl p-8 relative overflow-hidden">
//             <div className="flex items-center mb-8">
//               <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center mr-4 shadow-md">
//                 <Users className="text-white" size={20} />
//               </div>
//               <div>
//                 <h2 className="text-xl font-semibold text-gray-800 mb-1">Join Our Community</h2>
//                 <p className="text-gray-600 text-sm">Connect with fellow believers</p>
//               </div>
//             </div>
//             <SocialLinks />
//             <div className="mt-6 grid grid-cols-2 gap-4">
//               <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
//                 <Users className="mx-auto mb-2 text-purple-500" size={20} />
//                 <p className="text-purple-700 text-sm font-medium">Connect</p>
//               </div>
//               <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
//                 <MessageSquare className="mx-auto mb-2 text-blue-500" size={20} />
//                 <p className="text-blue-700 text-sm font-medium">Fellowship</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Additional Sacred Services */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
//           <div className="divine-card rounded-xl p-6 text-center relative overflow-hidden">
//             <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center mx-auto mb-4">
//               <Sun className="text-white" size={20} />
//             </div>
//             <h3 className="text-lg font-semibold text-gray-800 mb-2">Morning Prayers</h3>
//             <p className="text-gray-600 text-sm">Join us at sunrise for communion</p>
//           </div>
          
//           <div className="divine-card rounded-xl p-6 text-center relative overflow-hidden">
//             <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center mx-auto mb-4">
//               <BookOpen className="text-white" size={20} />
//             </div>
//             <h3 className="text-lg font-semibold text-gray-800 mb-2">Bible Study</h3>
//             <p className="text-gray-600 text-sm">Deepen your spiritual understanding</p>
//           </div>
          
//           <div className="divine-card rounded-xl p-6 text-center relative overflow-hidden">
//             <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
//               <Heart className="text-white" size={20} />
//             </div>
//             <h3 className="text-lg font-semibold text-gray-800 mb-2">Prayer Circle</h3>
//             <p className="text-gray-600 text-sm">Experience divine fellowship</p>
//           </div>
//         </div>

//         {/* Sacred Blessing Quote */}
//         <div className="divine-card rounded-2xl p-8 text-center relative overflow-hidden">
//           <div className="flex justify-center mb-6">
//             <Star className="text-purple-500" size={32} />
//           </div>
//           <blockquote className="text-xl md:text-2xl font-light text-gray-800 mb-4 leading-relaxed font-serif">
//             "The Lord bless you and keep you; the Lord make his face shine on you and be gracious to you"
//           </blockquote>
//           <cite className="text-purple-600 text-base">— Numbers 6:24-25</cite>
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
  const GlowingOrb = ({ size = "w-32 h-32", color = "from-blue-400 to-yellow-400", className = "" }) => (
    <div className={`absolute rounded-full bg-gradient-to-r ${color} opacity-10 blur-2xl ${size} ${className}`}
         style={{ animation: 'pulse 4s infinite' }} />
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-yellow-50 relative overflow-hidden">
      <style jsx>{`
        @keyframes breathe {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.05); opacity: 1; }
        }
        
        @keyframes gentle-glow {
          0%, 100% { box-shadow: 0 4px 20px rgba(30, 58, 138, 0.1); }
          50% { box-shadow: 0 8px 30px rgba(30, 58, 138, 0.2); }
        }
        
        .divine-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(30, 58, 138, 0.1);
          animation: gentle-glow 4s infinite ease-in-out;
        }
        
        .mystical-text {
          background: linear-gradient(45deg, #1e3a8a, #3b82f6, #fbbf24);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-shift 4s ease-in-out infinite;
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
      `}</style>

      {/* Sacred Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Blue and gold geometric shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-blue-100 opacity-30 blur-xl"></div>
        <div className="absolute bottom-32 right-20 w-40 h-40 rounded-full bg-yellow-100 opacity-20 blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-blue-200 opacity-25 blur-xl"></div>
        <div className="absolute top-1/4 right-1/4 w-28 h-28 rounded-full bg-yellow-200 opacity-20 blur-xl"></div>
        
        {/* Floating sacred symbols */}
        <SacredElement icon={Cross} className="top-32 left-1/4 text-blue-300" delay={0} />
        <SacredElement icon={Star} className="bottom-40 right-1/3 text-yellow-400" delay={2} />
        <SacredElement icon={Heart} className="top-2/3 left-1/6 text-blue-400" delay={4} />
        <SacredElement icon={Sun} className="top-1/5 right-1/5 text-yellow-300" delay={1} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 z-10">
        {/* Celestial Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 animate-ping">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-400 to-yellow-400 opacity-20"></div>
              </div>
              <div className="relative w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center shadow-2xl"
                   style={{ animation: 'breathe 3s infinite ease-in-out' }}>
                <Cross size={32} className="text-white" />
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 mystical-text font-serif tracking-wide">
            Sacred Connection
          </h1>
          
          <div className="flex justify-center mb-6">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-500 rounded-full"></div>
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
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center mr-4 shadow-md">
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
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-700 to-blue-900 flex items-center justify-center mr-4 shadow-md">
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
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 flex items-center justify-center mr-4 shadow-md">
                <Gift className="text-white" size={20} />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-1">Support Our Mission</h2>
                <p className="text-gray-600 text-sm">Your generosity makes a difference</p>
              </div>
            </div>
            <DonationButton />
            <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <p className="text-yellow-700 text-sm italic flex items-center">
                <Heart className="mr-2 text-yellow-500" size={16} />
                "Give, and it will be given to you" - Luke 6:38
              </p>
            </div>
          </div>

          {/* Social Links - Spiritual Community */}
          <div className="divine-card rounded-2xl p-8 relative overflow-hidden">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center mr-4 shadow-md">
                <Users className="text-white" size={20} />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-1">Join Our Community</h2>
                <p className="text-gray-600 text-sm">Connect with fellow believers</p>
              </div>
            </div>
            <SocialLinks />
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                <Users className="mx-auto mb-2 text-blue-600" size={20} />
                <p className="text-blue-700 text-sm font-medium">Connect</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                <MessageSquare className="mx-auto mb-2 text-blue-600" size={20} />
                <p className="text-blue-700 text-sm font-medium">Fellowship</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Sacred Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="divine-card rounded-xl p-6 text-center relative overflow-hidden">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 flex items-center justify-center mx-auto mb-4">
              <Sun className="text-white" size={20} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Morning Prayers</h3>
            <p className="text-gray-600 text-sm">Join us at sunrise for communion</p>
          </div>
          
          <div className="divine-card rounded-xl p-6 text-center relative overflow-hidden">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center mx-auto mb-4">
              <BookOpen className="text-white" size={20} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Bible Study</h3>
            <p className="text-gray-600 text-sm">Deepen your spiritual understanding</p>
          </div>
          
          <div className="divine-card rounded-xl p-6 text-center relative overflow-hidden">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-yellow-500 flex items-center justify-center mx-auto mb-4">
              <Heart className="text-white" size={20} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Prayer Circle</h3>
            <p className="text-gray-600 text-sm">Experience divine fellowship</p>
          </div>
        </div>

        {/* Sacred Blessing Quote */}
        <div className="divine-card rounded-2xl p-8 text-center relative overflow-hidden">
          <div className="flex justify-center mb-6">
            <Star className="text-yellow-500" size={32} />
          </div>
          <blockquote className="text-xl md:text-2xl font-light text-gray-800 mb-4 leading-relaxed font-serif">
            "The Lord bless you and keep you; the Lord make his face shine on you and be gracious to you"
          </blockquote>
          <cite className="text-blue-600 text-base">— Numbers 6:24-25</cite>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;