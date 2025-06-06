// import React from 'react';
// import { Calendar, Clock, MapPin, Users, Sparkles } from 'lucide-react';

// const EventCard = ({ event, onRSVP, onViewDetails }) => {
//   // Format date for display
//   const formatDate = (date) => {
//     return new Intl.DateTimeFormat('en-US', {
//       weekday: 'long',
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric'
//     }).format(date);
//   };

//   // Get event type styling
//   const getEventTypeStyle = (type) => {
//     const styles = {
//       ceremony: 'bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border-purple-300',
//       meditation: 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-blue-300',
//       teaching: 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-green-300',
//       cultural: 'bg-gradient-to-r from-orange-500/20 to-pink-500/20 border-orange-300',
//       discussion: 'bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border-amber-300'
//     };
//     return styles[type] || 'bg-gradient-to-r from-gray-500/20 to-slate-500/20 border-gray-300';
//   };

//   // Get event type icon
//   const getEventTypeIcon = (type) => {
//     const icons = {
//       ceremony: '🕯️',
//       meditation: '🧘',
//       teaching: '📚',
//       cultural: '🎭',
//       discussion: '💬'
//     };
//     return icons[type] || '✨';
//   };

//   // Check if event is soon (within 7 days)
//   const isEventSoon = () => {
//     const now = new Date();
//     const eventDate = event.date; // Already a Date object
//     const diffTime = eventDate - now;
//     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
//     return diffDays <= 7 && diffDays > 0;
//   };

//   // Check if event is today
//   const isEventToday = () => {
//     const today = new Date();
//     const eventDate = event.date; // Already a Date object
//     return today.toDateString() === eventDate.toDateString();
//   };

//   return (
//     <div className={`relative group overflow-hidden rounded-2xl border-2 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl ${getEventTypeStyle(event.type)}`}>
//       {/* Floating sparkles effect */}
//       <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//         <Sparkles className="w-6 h-6 text-white animate-pulse" />
//       </div>

//       {/* Event status badges */}
//       <div className="absolute top-4 left-4 flex gap-2">
//         {isEventToday() && (
//           <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full animate-pulse">
//             TODAY
//           </span>
//         )}
//         {isEventSoon() && !isEventToday() && (
//           <span className="px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
//             SOON
//           </span>
//         )}
//         <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full capitalize">
//           {event.type}
//         </span>
//       </div>

//       {/* Card content */}
//       <div className="p-6 pt-16">
//         {/* Event type icon and title */}
//         <div className="flex items-start gap-3 mb-4">
//           <span className="text-3xl flex-shrink-0">{getEventTypeIcon(event.type)}</span>
//           <h3 className="text-xl font-bold text-gray-800 leading-tight group-hover:text-gray-900 transition-colors">
//             {event.title}
//           </h3>
//         </div>

//         {/* Event details */}
//         <div className="space-y-3 mb-6">
//           <div className="flex items-center gap-3 text-gray-700">
//             <Calendar className="w-5 h-5 text-purple-600" />
//             <span className="font-medium">{formatDate(event.date)}</span>
//           </div>
          
//           <div className="flex items-center gap-3 text-gray-700">
//             <Clock className="w-5 h-5 text-blue-600" />
//             <span>{event.time}</span>
//           </div>
          
//           <div className="flex items-center gap-3 text-gray-700">
//             <MapPin className="w-5 h-5 text-green-600" />
//             <span>{event.location}</span>
//           </div>
//         </div>

//         {/* Event description */}
//         <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
//           {event.description}
//         </p>

//         {/* Action buttons */}
//         {/* <div className="flex gap-3">
//           <button
//             onClick={() => onViewDetails && onViewDetails(event)}
//             className="flex-1 px-4 py-2 bg-white/30 backdrop-blur-sm border border-white/50 text-gray-800 font-medium rounded-lg hover:bg-white/50 hover:shadow-lg transition-all duration-200"
//           >
//             View Details
//           </button>
          
//           <button
//             onClick={() => onRSVP && onRSVP(event)}
//             className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-indigo-700 hover:shadow-lg transform hover:scale-105 transition-all duration-200"
//           >
//             <Users className="w-4 h-4" />
//             RSVP
//           </button>
//         </div> */}
//       </div>

//       {/* Animated border glow effect */}
//       <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
//         <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-indigo-400/20 animate-pulse"></div>
//       </div>
//     </div>
//   );
// };

// export default EventCard;


import React from 'react';
import { Calendar, Clock, MapPin, Users, Sparkles } from 'lucide-react';

const EventCard = ({ event, onRSVP, onViewDetails }) => {
  // Format date for display
  const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  // Get event type styling with spiritual blue and gold theme
  const getEventTypeStyle = (type) => {
    const styles = {
      ceremony: 'bg-gradient-to-br from-blue-50 via-white to-yellow-50 border-blue-300',
      meditation: 'bg-gradient-to-br from-blue-50 via-white to-blue-50 border-blue-400',
      teaching: 'bg-gradient-to-br from-yellow-50 via-white to-blue-50 border-yellow-400',
      cultural: 'bg-gradient-to-br from-blue-100 via-white to-yellow-100 border-blue-300',
      discussion: 'bg-gradient-to-br from-yellow-50 via-white to-yellow-50 border-yellow-300'
    };
    return styles[type] || 'bg-gradient-to-br from-blue-50 via-white to-white border-blue-200';
  };

  // Get event type icon
  const getEventTypeIcon = (type) => {
    const icons = {
      ceremony: '🕯️',
      meditation: '🧘',
      teaching: '📚',
      cultural: '🎭',
      discussion: '💬'
    };
    return icons[type] || '✨';
  };

  // Check if event is soon (within 7 days)
  const isEventSoon = () => {
    const now = new Date();
    const eventDate = event.date; // Already a Date object
    const diffTime = eventDate - now;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 7 && diffDays > 0;
  };

  // Check if event is today
  const isEventToday = () => {
    const today = new Date();
    const eventDate = event.date; // Already a Date object
    return today.toDateString() === eventDate.toDateString();
  };

  return (
    <div className={`relative group overflow-hidden rounded-2xl border-2 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl ${getEventTypeStyle(event.type)}`}>
      {/* Floating sparkles effect */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Sparkles className="w-6 h-6 text-yellow-500 animate-pulse" />
      </div>

      {/* Event status badges */}
      <div className="absolute top-4 left-4 flex gap-2">
        {isEventToday() && (
          <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full animate-pulse">
            TODAY
          </span>
        )}
        {isEventSoon() && !isEventToday() && (
          <span className="px-3 py-1 bg-yellow-500 text-white text-xs font-bold rounded-full">
            SOON
          </span>
        )}
        <span className="px-3 py-1 bg-blue-100/80 backdrop-blur-sm text-blue-800 text-xs font-medium rounded-full capitalize">
          {event.type}
        </span>
      </div>

      {/* Card content */}
      <div className="p-6 pt-16">
        {/* Event type icon and title */}
        <div className="flex items-start gap-3 mb-4">
          <span className="text-3xl flex-shrink-0">{getEventTypeIcon(event.type)}</span>
          <h3 className="text-xl font-bold text-blue-900 leading-tight group-hover:text-blue-800 transition-colors">
            {event.title}
          </h3>
        </div>

        {/* Event details */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3 text-blue-800">
            <Calendar className="w-5 h-5 text-blue-600" />
            <span className="font-medium">{formatDate(event.date)}</span>
          </div>
          
          <div className="flex items-center gap-3 text-blue-800">
            <Clock className="w-5 h-5 text-yellow-600" />
            <span>{event.time}</span>
          </div>
          
          <div className="flex items-center gap-3 text-blue-800">
            <MapPin className="w-5 h-5 text-blue-600" />
            <span>{event.location}</span>
          </div>
        </div>

        {/* Event description */}
        <p className="text-blue-700 text-sm leading-relaxed mb-6 line-clamp-3">
          {event.description}
        </p>

        {/* Action buttons */}
        {/* <div className="flex gap-3">
          <button
            onClick={() => onViewDetails && onViewDetails(event)}
            className="flex-1 px-4 py-2 bg-white/30 backdrop-blur-sm border border-white/50 text-gray-800 font-medium rounded-lg hover:bg-white/50 hover:shadow-lg transition-all duration-200"
          >
            View Details
          </button>
          
          <button
            onClick={() => onRSVP && onRSVP(event)}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-indigo-700 hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            <Users className="w-4 h-4" />
            RSVP
          </button>
        </div> */}
      </div>

      {/* Animated border glow effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 via-yellow-400/20 to-blue-400/20 animate-pulse"></div>
      </div>
    </div>
  );
};

export default EventCard;