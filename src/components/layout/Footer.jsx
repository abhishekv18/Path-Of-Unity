

// import React from 'react';
// import { 
//   Heart, Mail, Phone, MapPin, 
//   Facebook, Twitter, Youtube, Instagram, 
//   Star, Sparkles, Cross, Church, Scroll, 
//   BookAIcon,
//   Calendar,
//   Users,
//   HandHeart,
//   MessageCircle,
//   Gift,
//   HelpCircle
// } from 'lucide-react';
// import { FaDove, FaOm } from 'react-icons/fa';
// import { GiDove, GiLotus, GiPrayer } from 'react-icons/gi';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();
// const handleBlessing=()=>{
    
// }
//   const footerSections = {
//     about: {
//       title: "Divine Mission",
//       icon: Cross,
//       links: [
//         { name: "Sacred Origins", href: "/about", icon: Scroll },
//         { name: "Holy Founders", href: "/about#founders", icon: GiPrayer },
//         { name: "Divine Vision", href: "/about#vision", icon: Star },
//         { name: "Interfaith Harmony", href: "/about#interfaith", icon: FaOm }
//       ]
//     },
//     resources: {
//       title: "Sacred Resources",
//       icon: GiPrayer,
//       links: [
//         { name: "Daily Scriptures", href: "/teachings", icon: Scroll },
//         { name: "Prayer Sanctuary", href: "/prayers", icon: GiPrayer },
//         { name: "Wisdom Pearls", href: "/quotes", icon: Sparkles },
//         { name: "Holy Texts", href: "/teachings#texts", icon: BookAIcon }
//       ]
//     },
//     community: {
//       title: "Holy Community",
//       icon: Church,
//       links: [
//         { name: "Sacred Gatherings", href: "/events", icon: Calendar },
//         { name: "Join Our Sangha", href: "/contact#join", icon: Users },
//         { name: "Seva Opportunities", href: "/contact#volunteer", icon: HandHeart },
//         { name: "Divine Testimonies", href: "/about#testimonials", icon: MessageCircle }
//       ]
//     },
//     connect: {
//       title: "Sacred Connection",
//       icon: FaDove,
//       links: [
//         { name: "Holy Newsletter", href: "/contact#newsletter", icon: Mail },
//         { name: "Contact the Temple", href: "/contact", icon: Phone },
//         { name: "Divine Offerings", href: "/contact#donate", icon: Gift },
//         { name: "Spiritual Guidance", href: "/contact#faq", icon: HelpCircle }
//       ]
//     }
//   };

//   const socialLinks = [
//     { icon: Facebook, href: "#facebook", name: "Facebook", color: "from-blue-600 to-blue-800", bg: "bg-blue-600/20" },
//     { icon: Twitter, href: "#twitter", name: "Twitter", color: "from-sky-500 to-blue-600", bg: "bg-sky-600/20" },
//     { icon: Youtube, href: "#youtube", name: "YouTube", color: "from-red-600 to-red-800", bg: "bg-red-600/20" },
//     { icon: Instagram, href: "#instagram", name: "Instagram", color: "from-pink-600 to-purple-600", bg: "bg-pink-600/20" }
//   ];

//   return (
//     <footer className="relative bg-gradient-to-b from-slate-900 via-purple-900/90 to-indigo-950 text-white overflow-hidden">
//       {/* Divine golden border */}
//       <div className="relative h-1.5 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-[shimmer_3s_infinite]"></div>
//       </div>
      
//       {/* Sacred mandala background */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute inset-0 bg-[url('/images/sacred-mandala-pattern.svg')] bg-center bg-repeat opacity-20"></div>
//         <div className="absolute inset-0 bg-gradient-radial from-purple-500/10 via-transparent to-transparent"></div>
//       </div>
      
//       {/* Floating spiritual elements */}
//       <div className="absolute inset-0 pointer-events-none">
//         <Cross className="absolute top-20 left-10 text-purple-400/10 w-24 h-24 animate-float-slow" />
//         <GiLotus className="absolute bottom-32 right-12 text-indigo-400/10 w-20 h-20 animate-float-slower rotate-45" />
//         <GiDove className="absolute top-1/3 left-1/4 text-white/10 w-16 h-16 animate-float-delayed" />
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Main Footer Content */}
//         <div className="py-16 lg:py-20">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            
//             {/* Divine Organization Info */}
//             <div className="lg:col-span-1">
//               <div className="flex items-center space-x-3 mb-8 group">
//                 <div className="relative">
//                   {/* Holy aura */}
//                   <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-300 via-purple-300 to-indigo-300 opacity-20 animate-pulse scale-150 blur-lg"></div>
//                   <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-300 to-indigo-300 opacity-30 animate-ping"></div>
                  
//                   <img 
//                     src="/images/WhatsApp Image 2025-06-01 at 16.15.50_f639350b.jpg" 
//                     alt="Divine Temple Logo" 
//                     className="relative w-14 h-14 object-contain rounded-lg group-hover:scale-110 transition-transform duration-500"
//                   />
                  
//                   {/* Sacred blessings */}
//                   <Sparkles className="absolute -top-2 -right-2 w-5 h-5 text-yellow-300 animate-pulse" />
//                   <Star className="absolute -bottom-1 -left-1 w-4 h-4 text-purple-300 animate-pulse delay-700" />
//                 </div>
                
//                 <div>
//                   <h3 className="font-serif text-2xl font-bold bg-gradient-to-r from-yellow-300 via-purple-200 to-indigo-200 bg-clip-text text-transparent group-hover:from-yellow-200 group-hover:via-purple-100 group-hover:to-indigo-100 transition-all duration-500">
//                     International Laity Association
//                   </h3>
//                   <p className="text-xs bg-gradient-to-r from-yellow-200 to-purple-200 bg-clip-text text-transparent font-medium tracking-wider mt-1">
//                     Where All Faiths Unite
//                   </p>
//                 </div>
//               </div>
              
//               <div className="relative p-6 bg-gradient-to-br from-slate-800/40 via-purple-900/30 to-indigo-900/30 rounded-2xl border border-purple-500/30 mb-8 backdrop-blur-sm">
//                 <div className="absolute inset-0 bg-[url('/images/cross-texture.png')] opacity-5 rounded-2xl"></div>
//                 <p className="relative text-gray-100 text-sm leading-relaxed font-serif italic">
//                   "We walk together on the sacred path, honoring all traditions, 
//                   united in divine love and service to humanity."
//                 </p>
//                 <div className="absolute bottom-4 right-4 text-yellow-300/30">
//                   <GiPrayer className="w-8 h-8" />
//                 </div>
//               </div>
              
//               {/* Blessed Contact Info */}
//               <div className="space-y-4 text-sm">
//                 {[
//                   { icon: MapPin, text: "Sacred Grounds, Varanasi", color: "text-yellow-300" },
//                   { icon: Mail, text: "blessings@divinelight.org", color: "text-purple-300" },
//                   { icon: Phone, text: "+91 98765 43210", color: "text-indigo-300" }
//                 ].map((contact, index) => (
//                   <div key={index} className="flex items-center space-x-3 group hover:bg-purple-900/20 p-2 rounded-lg transition-all duration-300">
//                     <div className="p-2 bg-gradient-to-r from-yellow-500/70 to-purple-500/70 rounded-lg group-hover:from-yellow-400/70 group-hover:to-purple-400/70 transition-all duration-300">
//                       <contact.icon className={`w-4 h-4 ${contact.color} group-hover:scale-110 transition-transform duration-300`} />
//                     </div>
//                     <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{contact.text}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Sacred Links */}
//             {Object.entries(footerSections).map(([key, section], sectionIndex) => {
//               const SectionIcon = section.icon;
//               return (
//                 <div key={key} className="group">
//                   <div className="flex items-center space-x-2 mb-4">
//                     <SectionIcon className="w-5 h-5 text-yellow-300 group-hover:animate-pulse" />
//                     <h4 className="font-serif text-lg font-semibold bg-gradient-to-r from-yellow-300 to-purple-300 bg-clip-text text-transparent relative">
//                       {section.title}
//                       <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-purple-400 group-hover:w-full transition-all duration-500"></div>
//                     </h4>
//                   </div>
//                   <ul className="space-y-3">
//                     {section.links.map((link, index) => {
//                       const LinkIcon = link.icon;
//                       return (
//                         <li key={link.name} className="group/link">
//                           <a
//                             href={link.href}
//                             className="relative flex items-center space-x-2 text-gray-200 hover:text-white transition-all duration-300 text-sm py-1 px-2 rounded-lg hover:bg-purple-800/20"
//                           >
//                             <LinkIcon className="w-3.5 h-3.5 text-yellow-300/70 group-hover/link:text-yellow-300 transition-colors duration-300" />
//                             <span className="group-hover/link:translate-x-1 transition-transform duration-300">{link.name}</span>
                            
//                             {/* Hover glow */}
//                             <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-purple-500/5 rounded-lg opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></div>
//                           </a>
//                         </li>
//                       );
//                     })}
//                   </ul>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Divine Social & Newsletter */}
//         <div className="border-t border-gradient-to-r from-yellow-500/20 via-purple-500/20 to-indigo-500/20 py-10">
//           <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
            
//             {/* Blessed Social Links */}
//             <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
//               <div className="flex items-center space-x-2">
//                 <GiDove className="w-5 h-5 text-yellow-300 animate-float-slow" />
//                 <span className="text-gray-100 font-serif">Follow Our Divine Journey:</span>
//               </div>
//               <div className="flex space-x-4">
//                 {socialLinks.map((social) => {
//                   const IconComponent = social.icon;
//                   return (
//                     <a
//                       key={social.name}
//                       href={social.href}
//                       className={`relative w-12 h-12 ${social.bg} border border-yellow-300/20 rounded-xl flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-500 group overflow-hidden`}
//                       aria-label={social.name}
//                     >
//                       {/* Divine shimmer */}
//                       <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-300/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      
//                       <IconComponent className="relative z-10 w-5 h-5 text-yellow-300 group-hover:scale-110 transition-transform duration-300" />
//                     </a>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* Sacred Newsletter */}
//             <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
//               <div className="flex items-center space-x-2">
//                 <Scroll className="w-5 h-5 text-yellow-300 animate-pulse" />
//                 <span className="text-gray-100 font-serif">Receive Holy Messages:</span>
//               </div>
//               <div className="relative group">
//                 <input
//                   type="email"
//                   placeholder="Your email"
//                   className="px-6 py-3 bg-slate-800/60 border border-yellow-300/30 text-white placeholder-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-yellow-300 focus:border-transparent text-sm min-w-[200px] transition-all duration-300 font-serif"
//                 />
//                 <button onClick={handleBlessing} className="absolute right-1 top-1 bottom-1 px-4 bg-gradient-to-r from-yellow-500/80 to-yellow-600/80 text-slate-900 rounded-lg hover:from-yellow-400 hover:to-yellow-500 hover:shadow-lg transition-all duration-300 text-sm font-serif font-medium">
//                   Receive Blessings
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Holy Bottom Bar */}
//         <div className="border-t border-gradient-to-r from-yellow-500/20 via-purple-500/20 to-indigo-500/20 py-6">
//           <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
//             {/* Divine Copyright */}
//             <div className="flex items-center space-x-3 text-gray-300 text-sm font-serif">
//               <span>© {currentYear} Divine Light Temple.</span>
//               <div className="flex items-center space-x-1">
//                 <span>Blessed with</span>
//                 <Heart className="w-4 h-4 text-yellow-300 animate-pulse" />
//                 <span>for all beings.</span>
//               </div>
//             </div>

//             {/* Sacred Legal Links */}
//             <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-gray-400 text-sm font-serif">
//               {[
//                 { name: "Sacred Vows", href: "/privacy" },
//                 { name: "Temple Guidelines", href: "/terms" },
//                 { name: "Divine Accessibility", href: "/accessibility" },
//                 { name: "Offerings", href: "/donate" }
//               ].map((link) => (
//                 <a 
//                   key={link.name}
//                   href={link.href} 
//                   className="relative hover:text-yellow-300 transition-all duration-300 group"
//                 >
//                   {link.name}
//                   <div className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-yellow-300 to-purple-300 group-hover:w-full transition-all duration-300"></div>
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Final Divine Glow */}
//       <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-purple-400 to-indigo-400 opacity-30"></div>

//       {/* Sacred Animations */}
//       <style jsx>{`
//         @keyframes shimmer {
//           0% { transform: translateX(-100%); }
//           100% { transform: translateX(100%); }
//         }
        
//         @keyframes float-slow {
//           0%, 100% { transform: translateY(0) rotate(0deg); }
//           50% { transform: translateY(-20px) rotate(5deg); }
//         }
        
//         @keyframes float-slower {
//           0%, 100% { transform: translateY(0) rotate(45deg); }
//           50% { transform: translateY(-15px) rotate(50deg); }
//         }
        
//         @keyframes float-delayed {
//           0%, 100% { transform: translateY(0) rotate(0deg); }
//           25% { transform: translateY(-10px) rotate(-5deg); }
//           75% { transform: translateY(-15px) rotate(5deg); }
//         }
        
//         .animate-float-slow {
//           animation: float-slow 8s ease-in-out infinite;
//         }
        
//         .animate-float-slower {
//           animation: float-slower 10s ease-in-out infinite;
//         }
        
//         .animate-float-delayed {
//           animation: float-delayed 7s ease-in-out infinite 2s;
//         }
//       `}</style>
//     </footer>
//   );
// };

// export default Footer;


import React, { useState } from 'react';
import { 
  Heart, Mail, Phone, MapPin, 
  Facebook, Twitter, Youtube, Instagram, 
  Star, Sparkles, Cross, Church, Scroll, 
  BookAIcon,
  Calendar,
  Users,
  HandHeart,
  MessageCircle,
  Gift,
  HelpCircle,
  X
} from 'lucide-react';
import { FaDove, FaOm } from 'react-icons/fa';
import { GiDove, GiLotus, GiPrayer } from 'react-icons/gi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showBlessing, setShowBlessing] = useState(false);
  const [email, setEmail] = useState('');
  
  const handleBlessing = () => {
    if (email.trim() === '') {
      return; // Don't show blessing if email is empty
    }
    setShowBlessing(true);
  };

  const closeBlessing = () => {
    setShowBlessing(false);
    setEmail('');
  };

  const blessings = [
    "May divine light illuminate your path and fill your heart with peace.",
    "May you be blessed with wisdom, compassion, and joy in all your days.",
    "May the sacred energy of the universe guide and protect you always.",
    "May your life be filled with love, your heart with gratitude, and your soul with peace.",
    "May all beings be happy. May all beings be free from suffering.",
    "May you walk in beauty, surrounded by blessings on all sides.",
    "May the divine spark within you shine brightly and touch all you meet.",
    "May you find stillness within, and from that stillness, may peace radiate outward.",
  ];

  const randomBlessing = blessings[Math.floor(Math.random() * blessings.length)];

  const footerSections = {
    about: {
      title: "Divine Mission",
      icon: Cross,
      links: [
        { name: "Sacred Origins", href: "/about", icon: Scroll },
        { name: "Holy Founders", href: "/about#founders", icon: GiPrayer },
        { name: "Divine Vision", href: "/about#vision", icon: Star },
        { name: "Interfaith Harmony", href: "/about#interfaith", icon: FaOm }
      ]
    },
    resources: {
      title: "Sacred Resources",
      icon: GiPrayer,
      links: [
        { name: "Daily Scriptures", href: "/teachings", icon: Scroll },
        { name: "Prayer Sanctuary", href: "/prayers", icon: GiPrayer },
        { name: "Wisdom Pearls", href: "/quotes", icon: Sparkles },
        { name: "Holy Texts", href: "/teachings#texts", icon: BookAIcon }
      ]
    },
    community: {
      title: "Holy Community",
      icon: Church,
      links: [
        { name: "Sacred Gatherings", href: "/events", icon: Calendar },
        { name: "Join Our Sangha", href: "/contact#join", icon: Users },
        { name: "Seva Opportunities", href: "/contact#volunteer", icon: HandHeart },
        { name: "Divine Testimonies", href: "/about#testimonials", icon: MessageCircle }
      ]
    },
    connect: {
      title: "Sacred Connection",
      icon: FaDove,
      links: [
        { name: "Holy Newsletter", href: "/contact#newsletter", icon: Mail },
        { name: "Contact the Temple", href: "/contact", icon: Phone },
        { name: "Divine Offerings", href: "/contact#donate", icon: Gift },
        { name: "Spiritual Guidance", href: "/contact#faq", icon: HelpCircle }
      ]
    }
  };

  const socialLinks = [
    { icon: Facebook, href: "#facebook", name: "Facebook", color: "from-blue-600 to-blue-800", bg: "bg-blue-600/20" },
    { icon: Twitter, href: "#twitter", name: "Twitter", color: "from-sky-500 to-blue-600", bg: "bg-sky-600/20" },
    { icon: Youtube, href: "#youtube", name: "YouTube", color: "from-red-600 to-red-800", bg: "bg-red-600/20" },
    { icon: Instagram, href: "#instagram", name: "Instagram", color: "from-pink-600 to-purple-600", bg: "bg-pink-600/20" }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 via-purple-900/90 to-indigo-950 text-white overflow-hidden">
      {/* Divine golden border */}
      <div className="relative h-1.5 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-[shimmer_3s_infinite]"></div>
      </div>
      
      {/* Sacred mandala background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/images/sacred-mandala-pattern.svg')] bg-center bg-repeat opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-radial from-purple-500/10 via-transparent to-transparent"></div>
      </div>
      
      {/* Floating spiritual elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Cross className="absolute top-20 left-10 text-purple-400/10 w-24 h-24 animate-float-slow" />
        <GiLotus className="absolute bottom-32 right-12 text-indigo-400/10 w-20 h-20 animate-float-slower rotate-45" />
        <GiDove className="absolute top-1/3 left-1/4 text-white/10 w-16 h-16 animate-float-delayed" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            
            {/* Divine Organization Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-8 group">
                <div className="relative">
                  {/* Holy aura */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-300 via-purple-300 to-indigo-300 opacity-20 animate-pulse scale-150 blur-lg"></div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-300 to-indigo-300 opacity-30 animate-ping"></div>
                  
                  <img 
                    src="/images/WhatsApp Image 2025-06-01 at 16.15.50_f639350b.jpg" 
                    alt="Divine Temple Logo" 
                    className="relative w-14 h-14 object-contain rounded-lg group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Sacred blessings */}
                  <Sparkles className="absolute -top-2 -right-2 w-5 h-5 text-yellow-300 animate-pulse" />
                  <Star className="absolute -bottom-1 -left-1 w-4 h-4 text-purple-300 animate-pulse delay-700" />
                </div>
                
                <div>
                  <h3 className="font-serif text-2xl font-bold bg-gradient-to-r from-yellow-300 via-purple-200 to-indigo-200 bg-clip-text text-transparent group-hover:from-yellow-200 group-hover:via-purple-100 group-hover:to-indigo-100 transition-all duration-500">
                    International Laity Association
                  </h3>
                  <p className="text-xs bg-gradient-to-r from-yellow-200 to-purple-200 bg-clip-text text-transparent font-medium tracking-wider mt-1">
                    Where All Faiths Unite
                  </p>
                </div>
              </div>
              
              <div className="relative p-6 bg-gradient-to-br from-slate-800/40 via-purple-900/30 to-indigo-900/30 rounded-2xl border border-purple-500/30 mb-8 backdrop-blur-sm">
                <div className="absolute inset-0 bg-[url('/images/cross-texture.png')] opacity-5 rounded-2xl"></div>
                <p className="relative text-gray-100 text-sm leading-relaxed font-serif italic">
                  "We walk together on the sacred path, honoring all traditions, 
                  united in divine love and service to humanity."
                </p>
                <div className="absolute bottom-4 right-4 text-yellow-300/30">
                  <GiPrayer className="w-8 h-8" />
                </div>
              </div>
              
              {/* Blessed Contact Info */}
              <div className="space-y-4 text-sm">
                {[
                  { icon: MapPin, text: "International Latily Association", color: "text-yellow-300" },
                  { icon: Mail, text: "I.Laity@yandex.com", color: "text-purple-300" },
                  { icon: Phone, text: "+79776235749", color: "text-indigo-300" }
                ].map((contact, index) => (
                  <div key={index} className="flex items-center space-x-3 group hover:bg-purple-900/20 p-2 rounded-lg transition-all duration-300">
                    <div className="p-2 bg-gradient-to-r from-yellow-500/70 to-purple-500/70 rounded-lg group-hover:from-yellow-400/70 group-hover:to-purple-400/70 transition-all duration-300">
                      <contact.icon className={`w-4 h-4 ${contact.color} group-hover:scale-110 transition-transform duration-300`} />
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{contact.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sacred Links */}
            {Object.entries(footerSections).map(([key, section], sectionIndex) => {
              const SectionIcon = section.icon;
              return (
                <div key={key} className="group">
                  <div className="flex items-center space-x-2 mb-4">
                    <SectionIcon className="w-5 h-5 text-yellow-300 group-hover:animate-pulse" />
                    <h4 className="font-serif text-lg font-semibold bg-gradient-to-r from-yellow-300 to-purple-300 bg-clip-text text-transparent relative">
                      {section.title}
                      <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-purple-400 group-hover:w-full transition-all duration-500"></div>
                    </h4>
                  </div>
                  <ul className="space-y-3">
                    {section.links.map((link, index) => {
                      const LinkIcon = link.icon;
                      return (
                        <li key={link.name} className="group/link">
                          <a
                            href={link.href}
                            className="relative flex items-center space-x-2 text-gray-200 hover:text-white transition-all duration-300 text-sm py-1 px-2 rounded-lg hover:bg-purple-800/20"
                          >
                            <LinkIcon className="w-3.5 h-3.5 text-yellow-300/70 group-hover/link:text-yellow-300 transition-colors duration-300" />
                            <span className="group-hover/link:translate-x-1 transition-transform duration-300">{link.name}</span>
                            
                            {/* Hover glow */}
                            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-purple-500/5 rounded-lg opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></div>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Divine Social & Newsletter */}
        <div className="border-t border-gradient-to-r from-yellow-500/20 via-purple-500/20 to-indigo-500/20 py-10">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
            
            {/* Blessed Social Links */}
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <div className="flex items-center space-x-2">
                <GiDove className="w-5 h-5 text-yellow-300 animate-float-slow" />
                <span className="text-gray-100 font-serif">Follow Our Divine Journey:</span>
              </div>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className={`relative w-12 h-12 ${social.bg} border border-yellow-300/20 rounded-xl flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-500 group overflow-hidden`}
                      aria-label={social.name}
                    >
                      {/* Divine shimmer */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-300/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      
                      <IconComponent className="relative z-10 w-5 h-5 text-yellow-300 group-hover:scale-110 transition-transform duration-300" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Sacred Newsletter */}
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="flex items-center space-x-2">
                <Scroll className="w-5 h-5 text-yellow-300 animate-pulse" />
                <span className="text-gray-100 font-serif">Receive Holy Messages:</span>
              </div>
              <div className="relative group">
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-6 py-3 bg-slate-800/60 border border-yellow-300/30 text-white placeholder-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-yellow-300 focus:border-transparent text-sm min-w-[200px] transition-all duration-300 font-serif"
                />
                <button 
                  onClick={handleBlessing}
                  className="absolute right-1 top-1 bottom-1 px-4 bg-gradient-to-r from-yellow-500/80 to-yellow-600/80 text-slate-900 rounded-lg hover:from-yellow-400 hover:to-yellow-500 hover:shadow-lg transition-all duration-300 text-sm font-serif font-medium"
                >
                  Receive Blessings
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Holy Bottom Bar */}
        <div className="border-t border-gradient-to-r from-yellow-500/20 via-purple-500/20 to-indigo-500/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Divine Copyright */}
            <div className="flex items-center space-x-3 text-gray-300 text-sm font-serif">
              <span>© {currentYear} Divine Light Temple.</span>
              <div className="flex items-center space-x-1">
                <span>Blessed with</span>
                <Heart className="w-4 h-4 text-yellow-300 animate-pulse" />
                <span>for all beings.</span>
              </div>
            </div>

            {/* Sacred Legal Links */}
            <div className="flex justify-center gap-y-2 md:mr-14 text-gray-400 text-sm font-serif">
              {[
                // { name: "Sacred Vows", href: "/privacy" },
                // { name: "Temple Guidelines", href: "/terms" },
                // { name: "Divine Accessibility", href: "/accessibility" },
                { name: "Offerings", href: "/contact" }
              ].map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="relative hover:text-yellow-300 transition-all duration-300 group"
                >
                  {link.name}
                  <div className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-yellow-300 to-purple-300 group-hover:w-full transition-all duration-300"></div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Final Divine Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-purple-400 to-indigo-400 opacity-30"></div>

      {/* Blessing Popup */}
      {showBlessing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="relative max-w-md w-full bg-gradient-to-br from-yellow-50 via-purple-50 to-indigo-50 rounded-2xl overflow-hidden shadow-2xl">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-purple-400 to-indigo-400"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-purple-400 to-indigo-400"></div>
            
            <div className="relative p-8 text-center">
              <button 
                onClick={closeBlessing}
                className="absolute top-4 right-4 p-1 rounded-full hover:bg-purple-100 transition-colors duration-300"
                aria-label="Close blessing"
              >
                <X className="w-5 h-5 text-purple-800" />
              </button>
              
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-300 via-purple-300 to-indigo-300 opacity-20 animate-pulse scale-150 blur-lg"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-r from-yellow-300 to-purple-300 rounded-full flex items-center justify-center">
                    <GiPrayer className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-serif font-bold text-purple-900 mb-4">
                Divine Blessing for You
              </h3>
              
              <div className="relative mb-6">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-300/50 to-transparent"></div>
                <p className="text-lg text-slate-700 italic font-serif py-4">
                  "{randomBlessing}"
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-300/50 to-transparent"></div>
              </div>
              
              <p className="text-sm text-slate-600 mb-6">
                Your email <span className="font-medium text-purple-800">{email}</span> has been added to our sacred mailing list. 
                May you receive divine wisdom in your inbox.
              </p>
              
              <button
                onClick={closeBlessing}
                className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-purple-400 text-white rounded-lg hover:from-yellow-500 hover:to-purple-500 transition-all duration-300 font-serif"
              >
                Receive This Blessing
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sacred Animations */}
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes float-slower {
          0%, 100% { transform: translateY(0) rotate(45deg); }
          50% { transform: translateY(-15px) rotate(50deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(-5deg); }
          75% { transform: translateY(-15px) rotate(5deg); }
        }
        
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        
        .animate-float-slower {
          animation: float-slower 10s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 7s ease-in-out infinite 2s;
        }
      `}</style>
    </footer>
  );
};

export default Footer;