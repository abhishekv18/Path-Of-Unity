
// import eventData from '../data/events.js';
// import EventCard from '../components/events/EventCard';
// import { useState } from 'react';
// import EventsCalendar from '../components/events/EventsCalendar.jsx';
// import { Calendar, Sparkles, Sun, Heart, Search, Filter, Star, Flower } from 'lucide-react';

// const EventsPage = () => {
//   const [events, setEvents] = useState(eventData);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [isFilterOpen, setIsFilterOpen] = useState(false);
  
//   const filteredEvents = events.filter(event =>
//     event.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     event.description?.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
//       {/* Decorative Background Elements */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-20 left-10 w-32 h-32 bg-amber-200 rounded-full opacity-20 animate-pulse"></div>
//         <div className="absolute top-40 right-20 w-24 h-24 bg-orange-300 rounded-full opacity-20 animate-bounce" style={{animationDelay: '1s'}}></div>
//         <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-yellow-300 rounded-full opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
//       </div>

//       <div className="relative z-10 container mx-auto px-4 py-8">
//         {/* Header Section */}
//         <div className="text-center mb-12 animate-fade-in">
//           <div className="flex items-center justify-center space-x-3 mb-4">
//             <Sun className="w-8 h-8 text-amber-600 animate-spin-slow" />
//             <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-800 via-orange-700 to-yellow-700 bg-clip-text text-transparent">
//               Spiritual Events
//             </h1>
//             <Sparkles className="w-8 h-8 text-amber-600 animate-pulse" />
//           </div>
//           <p className="text-amber-700 text-lg max-w-2xl mx-auto leading-relaxed">
//             Discover transformative experiences that nourish your soul and connect you with the divine
//           </p>
          
//           {/* Decorative Line */}
//           <div className="flex items-center justify-center space-x-2 mt-6">
//             <Star className="w-4 h-4 text-amber-500" />
//             <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
//             <Flower className="w-5 h-5 text-amber-600" />
//             <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
//             <Star className="w-4 h-4 text-amber-500" />
//           </div>
//         </div>

//         {/* Search and Filter Section */}
//         <div className="mb-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
//           <div className="max-w-2xl mx-auto">
//             <div className="relative mb-4">
//               <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-600" />
//               <input
//                 type="text"
//                 placeholder="Search for spiritual events..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full pl-12 pr-4 py-3 rounded-2xl border-2 border-amber-200 focus:border-amber-400 focus:outline-none bg-white/80 backdrop-blur-sm text-amber-900 placeholder-amber-500 transition-all duration-300 shadow-lg hover:shadow-xl"
//               />
//             </div>
            
//             <div className="flex justify-center">
//               <button
//                 onClick={() => setIsFilterOpen(!isFilterOpen)}
//                 className="flex items-center space-x-2 px-6 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
//               >
//                 <Filter className="w-4 h-4" />
//                 <span>Filters</span>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Calendar Section */}
//         <div className="mb-12 animate-slide-up" style={{animationDelay: '0.3s'}}>
//           <div className="bg-gradient-to-r from-amber-100 via-orange-100 to-yellow-100 rounded-3xl shadow-2xl border border-amber-200 overflow-hidden">
//             <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-4">
//               <div className="flex items-center justify-center space-x-3">
//                 <Calendar className="w-6 h-6 text-white animate-bounce" />
//                 <h2 className="text-xl font-semibold text-white">Events Calendar</h2>
//                 <Heart className="w-6 h-6 text-white animate-pulse" />
//               </div>
//             </div>
//             <div className="p-2">
//               <EventsCalendar />
//             </div>
//           </div>
//         </div>

//         {/* Events Grid Header */}
//         <div className="mb-8 animate-slide-up" style={{animationDelay: '0.4s'}}>
//           <div className="flex items-center justify-center space-x-3">
//             <div className="w-12 h-px bg-gradient-to-r from-transparent to-amber-400"></div>
//             <Sparkles className="w-6 h-6 text-amber-600 animate-spin-slow" />
//             <h2 className="text-2xl font-bold text-amber-800">Upcoming Events</h2>
//             <Sparkles className="w-6 h-6 text-amber-600 animate-spin-slow" />
//             <div className="w-12 h-px bg-gradient-to-l from-transparent to-amber-400"></div>
//           </div>
//         </div>

//         {/* Events Grid */}
//         <div 
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up"
//           style={{animationDelay: '0.5s'}}
//         >
//           {filteredEvents.map((event, index) => (
//             <div
//               key={event.id}
//               className="transform transition-all duration-500 hover:scale-105"
//               style={{
//                 animationDelay: `${0.1 * index}s`,
//                 animation: 'slideInUp 0.6s ease-out forwards'
//               }}
//             >
//               <EventCard 
//                 event={event}
//               />
//             </div>
//           ))}
//         </div>

//         {/* No Events Found */}
//         {filteredEvents.length === 0 && (
//           <div className="text-center py-16 animate-fade-in">
//             <div className="mb-4">
//               <Search className="w-16 h-16 text-amber-400 mx-auto animate-pulse" />
//             </div>
//             <h3 className="text-xl font-semibold text-amber-800 mb-2">No Events Found</h3>
//             <p className="text-amber-600">Try adjusting your search or check back later for new spiritual events.</p>
//           </div>
//         )}

//         {/* Floating Action Elements */}
//         <div className="fixed bottom-8 right-8 z-20">
//           <div className="flex flex-col space-y-4">
//             {/* <button className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center group">
//               <Heart className="w-6 h-6 text-white group-hover:animate-pulse" />
//             </button> */}
//             {/* <button className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center group">
//               <Star className="w-6 h-6 text-white group-hover:animate-spin" />
//             </button> */}
//           </div>
//         </div>
//       </div>

//       {/* Custom Styles */}
//       <style jsx>{`
//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
        
//         @keyframes slideUp {
//           from { opacity: 0; transform: translateY(50px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
        
//         @keyframes slideInUp {
//           from { opacity: 0; transform: translateY(60px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
        
//         @keyframes spinSlow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
        
//         .animate-fade-in {
//           animation: fadeIn 0.8s ease-out forwards;
//         }
        
//         .animate-slide-up {
//           animation: slideUp 0.6s ease-out forwards;
//         }
        
//         .animate-fade-in-up {
//           animation: fadeIn 1s ease-out forwards;
//         }
        
//         .animate-spin-slow {
//           animation: spinSlow 4s linear infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default EventsPage;


import eventData from '../data/events.js';
import EventCard from '../components/events/EventCard';
import { useState } from 'react';
import EventsCalendar from '../components/events/EventsCalendar.jsx';
import { Calendar, Sparkles, Sun, Heart, Search, Filter, Star, Flower, Moon, Wind, Waves } from 'lucide-react';

const EventsPage = () => {
  const [events, setEvents] = useState(eventData);
  const [searchTerm, setSearchTerm] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const filteredEvents = events.filter(event =>
    event.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-blue-50 to-yellow-50 relative overflow-hidden">
      {/* Enhanced Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Floating orbs with enhanced animations */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-amber-300 to-yellow-400 rounded-full opacity-20 animate-float-1"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-blue-300 to-indigo-400 rounded-full opacity-25 animate-float-2"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full opacity-20 animate-float-3"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-br from-blue-400 to-teal-400 rounded-full opacity-15 animate-float-4"></div>
        
        {/* Geometric patterns */}
        <div className="absolute top-1/4 left-1/2 w-64 h-64 border border-amber-200 rounded-full opacity-10 animate-spin-very-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border-2 border-blue-200 rounded-full opacity-15 animate-spin-reverse-slow"></div>
        
        {/* Particle effects */}
        <div className="absolute top-32 left-1/3 w-2 h-2 bg-amber-400 rounded-full opacity-60 animate-twinkle-1"></div>
        <div className="absolute top-64 right-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-twinkle-2"></div>
        <div className="absolute bottom-32 left-1/2 w-2 h-2 bg-yellow-400 rounded-full opacity-60 animate-twinkle-3"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Enhanced Header Section */}
        <div className="text-center mb-12 animate-fade-in-down">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="relative">
              <Sun className="w-10 h-10 text-amber-600 animate-spin-slow" />
              <div className="absolute inset-0 w-10 h-10 border-2 border-amber-300 rounded-full animate-ping opacity-20"></div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-800 via-blue-700 to-yellow-700 bg-clip-text text-transparent drop-shadow-lg">
              Spiritual Events
            </h1>
            <div className="relative">
              <Sparkles className="w-10 h-10 text-blue-600 animate-pulse" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full animate-bounce"></div>
            </div>
          </div>
          
          <p className="text-slate-700 text-xl max-w-3xl mx-auto leading-relaxed mb-8 animate-fade-in-up">
            Discover transformative experiences that nourish your soul and connect you with the divine
          </p>
          
          {/* Enhanced Decorative Line */}
          <div className="flex items-center justify-center space-x-3 mt-8 animate-scale-in">
            <Star className="w-5 h-5 text-amber-500 animate-twinkle-slow" />
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-400 to-blue-400 animate-shimmer"></div>
            <Moon className="w-6 h-6 text-blue-600 animate-float-gentle" />
            <div className="w-32 h-px bg-gradient-to-r from-blue-400 via-amber-400 to-transparent animate-shimmer-reverse"></div>
            <Star className="w-5 h-5 text-blue-500 animate-twinkle-slow" />
          </div>
        </div>

        {/* Enhanced Search and Filter Section */}
        <div className="mb-12 animate-slide-up-delayed">
          <div className="max-w-2xl mx-auto">
            <div className="relative mb-6 group">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-blue-400 to-yellow-400 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative">
                <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 w-6 h-6 text-amber-600 animate-pulse" />
                <input
                  type="text"
                  placeholder="Search for spiritual events..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-14 pr-6 py-4 rounded-3xl border-2 border-amber-200 focus:border-blue-400 focus:outline-none bg-white/90 backdrop-blur-md text-slate-800 placeholder-slate-500 transition-all duration-500 shadow-xl hover:shadow-2xl focus:shadow-2xl transform hover:-translate-y-1 focus:-translate-y-1"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <Wind className="w-5 h-5 text-blue-400 animate-sway" />
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="group relative flex items-center space-x-3 px-8 py-3 rounded-2xl bg-gradient-to-r from-amber-500 via-blue-500 to-yellow-500 text-white hover:from-amber-600 hover:via-blue-600 hover:to-yellow-600 transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Filter className="w-5 h-5 relative z-10 group-hover:animate-spin" />
                <span className="relative z-10 font-semibold">Advanced Filters</span>
                <Sparkles className="w-4 h-4 relative z-10 animate-twinkle-fast" />
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Calendar Section */}
        <div className="mb-16 animate-slide-up-stagger">
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-400 via-blue-400 to-yellow-400 rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
            
            <div className="relative bg-gradient-to-br from-amber-50/80 via-blue-50/80 to-yellow-50/80 rounded-3xl shadow-2xl border border-amber-200/50 backdrop-blur-sm overflow-hidden">
              <div className="bg-gradient-to-r from-amber-600 via-blue-600 to-yellow-600 p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent animate-shimmer-slow"></div>
                <div className="flex items-center justify-center space-x-4 relative z-10">
                  <Calendar className="w-7 h-7 text-white animate-bounce" />
                  <h2 className="text-2xl font-bold text-white drop-shadow-lg">Events Calendar</h2>
                  <div className="relative">
                    <Heart className="w-7 h-7 text-white animate-pulse" />
                    <div className="absolute inset-0 w-7 h-7 border border-white/50 rounded-full animate-ping"></div>
                  </div>
                </div>
                
                {/* Floating elements in header */}
                <div className="absolute top-2 left-8 w-3 h-3 bg-white/30 rounded-full animate-float-tiny"></div>
                <div className="absolute bottom-2 right-12 w-2 h-2 bg-white/40 rounded-full animate-float-tiny-delayed"></div>
              </div>
              
              <div className="p-4 relative">
                <div className="absolute top-2 right-4">
                  <Waves className="w-6 h-6 text-blue-300 animate-wave" />
                </div>
                <EventsCalendar />
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Events Grid Header */}
        <div className="mb-12 animate-slide-up-final">
          <div className="flex items-center justify-center space-x-4 group">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-400 to-blue-400 animate-expand"></div>
            <div className="relative">
              <Sparkles className="w-8 h-8 text-amber-600 animate-spin-slow group-hover:animate-spin" />
              <div className="absolute inset-0 w-8 h-8 border border-amber-300 rounded-full animate-pulse opacity-50"></div>
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-800 via-blue-700 to-yellow-700 bg-clip-text text-transparent">
              Upcoming Events
            </h2>
            <div className="relative">
              <Flower className="w-8 h-8 text-blue-600 animate-spin-slow group-hover:animate-spin-reverse" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
            </div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent via-blue-400 to-amber-400 animate-expand-reverse"></div>
          </div>
        </div>

        {/* Enhanced Events Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 animate-cascade"
        >
          {filteredEvents.map((event, index) => (
            <div
              key={event.id}
              className="group transform transition-all duration-700 hover:scale-105 hover:-translate-y-2"
              style={{
                animationDelay: `${0.15 * index}s`,
                animation: 'slideInUp 0.8s ease-out forwards'
              }}
            >
              <div className="relative">
                {/* Card glow effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-amber-400/30 via-blue-400/30 to-yellow-400/30 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500"></div>
                <EventCard 
                  event={event}
                  className="relative z-10"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced No Events Found */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-20 animate-fade-in-gentle">
            <div className="mb-6 relative">
              <Search className="w-20 h-20 text-amber-400 mx-auto animate-pulse" />
              <div className="absolute inset-0 w-20 h-20 border-2 border-amber-300/30 rounded-full mx-auto animate-ping"></div>
            </div>
            <h3 className="text-2xl font-bold text-amber-800 mb-3">No Events Found</h3>
            <p className="text-slate-600 text-lg max-w-md mx-auto">Try adjusting your search or check back later for new spiritual events.</p>
            
            {/* Decorative elements */}
            <div className="flex items-center justify-center space-x-2 mt-6">
              <Star className="w-4 h-4 text-blue-400 animate-twinkle-1" />
              <Star className="w-3 h-3 text-amber-400 animate-twinkle-2" />
              <Star className="w-4 h-4 text-yellow-400 animate-twinkle-3" />
            </div>
          </div>
        )}

        {/* Enhanced Floating Action Elements */}
        <div className="fixed bottom-8 right-8 z-20">
          <div className="flex flex-col space-y-4">
            {/* Uncomment and enhance if needed */}
            {/* <button className="relative w-14 h-14 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-500 flex items-center justify-center group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Heart className="w-7 h-7 text-white group-hover:animate-pulse relative z-10" />
            </button> */}
          </div>
        </div>
      </div>

      {/* Enhanced Custom Styles */}
      <style jsx>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(80px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spinReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes float1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes float2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-3deg); }
        }
        
        @keyframes float3 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(8deg); }
        }
        
        @keyframes float4 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-18px) rotate(-5deg); }
        }
        
        @keyframes floatGentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes floatTiny {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
        
        @keyframes twinkle1 {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes twinkle2 {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          33% { opacity: 0.8; transform: scale(1.1); }
          66% { opacity: 1; transform: scale(1.3); }
        }
        
        @keyframes twinkle3 {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          25% { opacity: 0.9; transform: scale(1.15); }
          75% { opacity: 0.7; transform: scale(1.05); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(5deg); }
          75% { transform: rotate(-5deg); }
        }
        
        @keyframes sway {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(3px); }
        }
        
        @keyframes expand {
          0% { width: 0; }
          100% { width: 4rem; }
        }
        
        @keyframes scaleIn {
          0% { opacity: 0; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }
        
        .animate-fade-in-down {
          animation: fadeInDown 1s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          animation-delay: 0.3s;
          opacity: 0;
        }
        
        .animate-slide-up-delayed {
          animation: slideUp 0.8s ease-out forwards;
          animation-delay: 0.4s;
          opacity: 0;
        }
        
        .animate-slide-up-stagger {
          animation: slideUp 0.8s ease-out forwards;
          animation-delay: 0.6s;
          opacity: 0;
        }
        
        .animate-slide-up-final {
          animation: slideUp 0.8s ease-out forwards;
          animation-delay: 0.8s;
          opacity: 0;
        }
        
        .animate-cascade {
          animation: fadeInUp 1s ease-out forwards;
          animation-delay: 1s;
          opacity: 0;
        }
        
        .animate-fade-in-gentle {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-spin-slow {
          animation: spinSlow 6s linear infinite;
        }
        
        .animate-spin-reverse {
          animation: spinReverse 4s linear infinite;
        }
        
        .animate-spin-very-slow {
          animation: spinSlow 20s linear infinite;
        }
        
        .animate-spin-reverse-slow {
          animation: spinReverse 15s linear infinite;
        }
        
        .animate-float-1 {
          animation: float1 6s ease-in-out infinite;
        }
        
        .animate-float-2 {
          animation: float2 8s ease-in-out infinite;
          animation-delay: 1s;
        }
        
        .animate-float-3 {
          animation: float3 7s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        .animate-float-4 {
          animation: float4 9s ease-in-out infinite;
          animation-delay: 0.5s;
        }
        
        .animate-float-gentle {
          animation: floatGentle 4s ease-in-out infinite;
        }
        
        .animate-float-tiny {
          animation: floatTiny 3s ease-in-out infinite;
        }
        
        .animate-float-tiny-delayed {
          animation: floatTiny 3s ease-in-out infinite;
          animation-delay: 1.5s;
        }
        
        .animate-twinkle-1 {
          animation: twinkle1 2s ease-in-out infinite;
        }
        
        .animate-twinkle-2 {
          animation: twinkle2 3s ease-in-out infinite;
          animation-delay: 0.5s;
        }
        
        .animate-twinkle-3 {
          animation: twinkle3 2.5s ease-in-out infinite;
          animation-delay: 1s;
        }
        
        .animate-twinkle-slow {
          animation: twinkle1 4s ease-in-out infinite;
        }
        
        .animate-twinkle-fast {
          animation: twinkle2 1.5s ease-in-out infinite;
        }
        
        .animate-shimmer {
          position: relative;
          overflow: hidden;
        }
        
        .animate-shimmer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          animation: shimmer 3s ease-in-out infinite;
        }
        
        .animate-shimmer-reverse::before {
          animation-direction: reverse;
        }
        
        .animate-shimmer-slow::before {
          animation-duration: 5s;
        }
        
        .animate-wave {
          animation: wave 3s ease-in-out infinite;
        }
        
        .animate-sway {
          animation: sway 2s ease-in-out infinite;
        }
        
        .animate-expand {
          animation: expand 2s ease-out infinite alternate;
        }
        
        .animate-expand-reverse {
          animation: expand 2s ease-out infinite alternate-reverse;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.8s ease-out forwards;
          animation-delay: 0.5s;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default EventsPage;