
// // components/prayer/PrayerCard.jsx
// import React, { useState } from 'react';
// import { Heart, Clock, User, Flame, Share2 } from 'lucide-react';
// import VirtualCandle from './VirtualCandle';

// const PrayerCard = ({ prayer={}, onLightCandle }) => {
//   const [isLighting, setIsLighting] = useState(false);

//   const formatTimeAgo = (timestamp) => {
//     const now = new Date();
//     const time = new Date(timestamp);
//     const diffInHours = Math.floor((now - time) / (1000 * 60 * 60));
    
//     if (diffInHours < 1) return 'Just now';
//     if (diffInHours < 24) return `${diffInHours}h ago`;
//     if (diffInHours < 168) return `${Math.floor(diffInHours / 24)}d ago`;
//     return `${Math.floor(diffInHours / 168)}w ago`;
//   };

//   const getCategoryColor = (category) => {
//     const colors = {
//       healing: 'bg-green-100 text-green-800',
//       peace: 'bg-blue-100 text-blue-800',
//       gratitude: 'bg-yellow-100 text-yellow-800',
//       family: 'bg-pink-100 text-pink-800',
//       guidance: 'bg-purple-100 text-purple-800',
//       general: 'bg-gray-100 text-gray-800'
//     };
//     return colors[category] || colors.general;
//   };

//   const handleLightCandle = async () => {
//     if (prayer.hasLitCandle || isLighting) return;
    
//     setIsLighting(true);
//     setTimeout(() => {
//       onLightCandle(prayer.id);
//       setIsLighting(false);
//     }, 1000);
//   };

//   const handleShare = () => {
//     if (navigator.share) {
//       navigator.share({
//         title: 'Prayer from Path of Unity',
//         text: prayer.text,
//         url: window.location.href
//       });
//     } else {
//       // Fallback - copy to clipboard
//       navigator.clipboard.writeText(`"${prayer.text}" - Shared from Path of Unity Prayer Wall`);
//     }
//   };

//   return (
//     <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 group">
      
//       {/* Header */}
//       <div className="flex items-start justify-between mb-4">
//         <div className="flex items-center gap-3">
//           <div className="w-10 h-10 bg-gradient-to-r from-divine-gold to-peace-blue rounded-full flex items-center justify-center">
//             <Heart className="w-5 h-5 text-white" />
//           </div>
//           <div>
//             <div className="flex items-center gap-2">
//               <User className="w-4 h-4 text-gray-400" />
//               <span className="text-sm font-medium text-gray-700">
//                 {prayer.author || 'Anonymous'}
//               </span>
//             </div>
//             <div className="flex items-center gap-2 mt-1">
//               <Clock className="w-4 h-4 text-gray-400" />
//               <span className="text-xs text-gray-500">
//                 {formatTimeAgo(prayer.timestamp)}
//               </span>
//             </div>
//           </div>
//         </div>
        
//         {/* Category Badge */}
//         <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${getCategoryColor(prayer.category)}`}>
//           {prayer.category}
//         </span>
//       </div>

//       {/* Prayer Text */}
//       <div className="mb-6">
//         <p className="text-gray-700 leading-relaxed font-medium">
//           {prayer.text}
//         </p>
//       </div>

//       {/* Virtual Candle */}
//       <div className="flex items-center justify-center mb-4">
//         <VirtualCandle 
//           isLit={prayer.hasLitCandle || isLighting}
//           onLight={handleLightCandle}
//           disabled={prayer.hasLitCandle}
//         />
//       </div>

//       {/* Actions */}
//       <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        
//         {/* Candle Count */}
//         <div className="flex items-center gap-2">
//           <Flame className="w-4 h-4 text-orange-500" />
//           <span className="text-sm font-medium text-gray-700">
//             {prayer.candles} {prayer.candles === 1 ? 'candle' : 'candles'} lit
//           </span>
//         </div>

//         {/* Action Buttons */}
//         <div className="flex items-center gap-2">
          
//           {/* Light Candle Button */}
//           <button
//             onClick={handleLightCandle}
//             disabled={prayer.hasLitCandle || isLighting}
//             className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
//               prayer.hasLitCandle
//                 ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
//                 : 'bg-gradient-to-r from-orange-400 to-red-500 text-white hover:shadow-lg hover:scale-105'
//             }`}
//           >
//             {isLighting ? (
//               <div className="flex items-center gap-2">
//                 <div className="animate-spin w-3 h-3 border border-white border-t-transparent rounded-full"></div>
//                 Lighting...
//               </div>
//             ) : prayer.hasLitCandle ? (
//               'Lit ✓'
//             ) : (
//               <>
//                 <Flame className="w-3 h-3 inline mr-1" />
//                 Light
//               </>
//             )}
//           </button>

//           {/* Share Button */}
//           <button
//             onClick={handleShare}
//             className="p-2 text-gray-500 hover:text-divine-gold hover:bg-gray-100 rounded-lg transition-colors"
//             title="Share this prayer"
//           >
//             <Share2 className="w-4 h-4" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PrayerCard;
import React, { useState, useEffect } from 'react';
import { Heart, Flame, Send, Filter, X, Plus, Sparkles } from 'lucide-react';

// Prayer Card Component
const PrayerCard = ({ prayer = {}, onLight }) => {
  // Add safety checks for prayer object
  if (!prayer || typeof prayer !== 'object') {
    return (
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
        <p className="text-white/60">Unable to load prayer</p>
      </div>
    );
  }

  const [isLit, setIsLit] = useState(false);
  const [likes, setLikes] = useState(prayer.likes || 0);

  const handleLight = () => {
    setIsLit(true);
    setLikes(prev => prev + 1);
    if (onLight && prayer.id) {
      onLight(prayer.id);
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 group">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
            {(prayer.author && prayer.author[0]) || 'A'}
          </div>
          <div>
            <p className="text-white font-medium">{prayer.author || 'Anonymous'}</p>
            <p className="text-white/60 text-sm">{prayer.category || 'General'}</p>
          </div>
        </div>
        <span className="text-white/50 text-xs">{prayer.timeAgo || 'Recently'}</span>
      </div>
      
      <p className="text-white/90 mb-4 leading-relaxed">{prayer.text || 'No prayer text available'}</p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={handleLight}
            disabled={isLit}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
              isLit 
                ? 'bg-orange-500/30 text-orange-300 cursor-default' 
                : 'bg-white/10 hover:bg-orange-500/20 text-white hover:text-orange-300'
            }`}
          >
            <Flame className={`w-4 h-4 ${isLit ? 'animate-pulse' : ''}`} />
            <span className="text-sm">{isLit ? 'Lit' : 'Light Candle'}</span>
          </button>
          
          <div className="flex items-center space-x-1 text-white/60">
            <Heart className="w-4 h-4" />
            <span className="text-sm">{likes}</span>
          </div>
        </div>
        
        {prayer.isUrgent && (
          <div className="flex items-center space-x-1 text-red-400">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs">Urgent</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PrayerCard;