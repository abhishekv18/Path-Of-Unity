// // In EventsPage.jsx or EventsCalendar.jsx
// import eventData from '../data/events.js';
// import EventCard from '../components/events/EventCard';
// import { useState } from 'react';
// import EventsCalendar from '../components/events/EventsCalendar.jsx';

// const EventsPage = () => {
//   const [events, setEvents] = useState(eventData);
  
//   return (
//     <div>
//       <EventsCalendar/>
//    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//       {events.map(event => (
//         <EventCard 
//           key={event.id} 
//           event={event}
       
//         />
//       ))}
//     </div>
//     </div>
 
//   );
// };

// export default EventsPage;


// In EventsPage.jsx or EventsCalendar.jsx
import eventData from '../data/events.js';
import EventCard from '../components/events/EventCard';
import { useState } from 'react';
import EventsCalendar from '../components/events/EventsCalendar.jsx';
import { Calendar, Sparkles, Sun, Heart, Search, Filter, Star, Flower } from 'lucide-react';

const EventsPage = () => {
  const [events, setEvents] = useState(eventData);
  const [searchTerm, setSearchTerm] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const filteredEvents = events.filter(event =>
    event.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-amber-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-orange-300 rounded-full opacity-20 animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-yellow-300 rounded-full opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Sun className="w-8 h-8 text-amber-600 animate-spin-slow" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-800 via-orange-700 to-yellow-700 bg-clip-text text-transparent">
              Spiritual Events
            </h1>
            <Sparkles className="w-8 h-8 text-amber-600 animate-pulse" />
          </div>
          <p className="text-amber-700 text-lg max-w-2xl mx-auto leading-relaxed">
            Discover transformative experiences that nourish your soul and connect you with the divine
          </p>
          
          {/* Decorative Line */}
          <div className="flex items-center justify-center space-x-2 mt-6">
            <Star className="w-4 h-4 text-amber-500" />
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
            <Flower className="w-5 h-5 text-amber-600" />
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
            <Star className="w-4 h-4 text-amber-500" />
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
          <div className="max-w-2xl mx-auto">
            <div className="relative mb-4">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-600" />
              <input
                type="text"
                placeholder="Search for spiritual events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-2xl border-2 border-amber-200 focus:border-amber-400 focus:outline-none bg-white/80 backdrop-blur-sm text-amber-900 placeholder-amber-500 transition-all duration-300 shadow-lg hover:shadow-xl"
              />
            </div>
            
            <div className="flex justify-center">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center space-x-2 px-6 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Filter className="w-4 h-4" />
                <span>Filters</span>
              </button>
            </div>
          </div>
        </div>

        {/* Calendar Section */}
        <div className="mb-12 animate-slide-up" style={{animationDelay: '0.3s'}}>
          <div className="bg-gradient-to-r from-amber-100 via-orange-100 to-yellow-100 rounded-3xl shadow-2xl border border-amber-200 overflow-hidden">
            <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-4">
              <div className="flex items-center justify-center space-x-3">
                <Calendar className="w-6 h-6 text-white animate-bounce" />
                <h2 className="text-xl font-semibold text-white">Events Calendar</h2>
                <Heart className="w-6 h-6 text-white animate-pulse" />
              </div>
            </div>
            <div className="p-2">
              <EventsCalendar />
            </div>
          </div>
        </div>

        {/* Events Grid Header */}
        <div className="mb-8 animate-slide-up" style={{animationDelay: '0.4s'}}>
          <div className="flex items-center justify-center space-x-3">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-amber-400"></div>
            <Sparkles className="w-6 h-6 text-amber-600 animate-spin-slow" />
            <h2 className="text-2xl font-bold text-amber-800">Upcoming Events</h2>
            <Sparkles className="w-6 h-6 text-amber-600 animate-spin-slow" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-amber-400"></div>
          </div>
        </div>

        {/* Events Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up"
          style={{animationDelay: '0.5s'}}
        >
          {filteredEvents.map((event, index) => (
            <div
              key={event.id}
              className="transform transition-all duration-500 hover:scale-105"
              style={{
                animationDelay: `${0.1 * index}s`,
                animation: 'slideInUp 0.6s ease-out forwards'
              }}
            >
              <EventCard 
                event={event}
              />
            </div>
          ))}
        </div>

        {/* No Events Found */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-16 animate-fade-in">
            <div className="mb-4">
              <Search className="w-16 h-16 text-amber-400 mx-auto animate-pulse" />
            </div>
            <h3 className="text-xl font-semibold text-amber-800 mb-2">No Events Found</h3>
            <p className="text-amber-600">Try adjusting your search or check back later for new spiritual events.</p>
          </div>
        )}

        {/* Floating Action Elements */}
        <div className="fixed bottom-8 right-8 z-20">
          <div className="flex flex-col space-y-4">
            {/* <button className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center group">
              <Heart className="w-6 h-6 text-white group-hover:animate-pulse" />
            </button> */}
            {/* <button className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center group">
              <Star className="w-6 h-6 text-white group-hover:animate-spin" />
            </button> */}
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slideUp 0.6s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .animate-spin-slow {
          animation: spinSlow 4s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default EventsPage;