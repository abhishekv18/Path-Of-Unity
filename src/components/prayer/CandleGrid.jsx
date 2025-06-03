
// // components/prayer/CandleGrid.jsx
// import React from 'react';
// import VirtualCandle from './VirtualCandle';

import { useState } from "react";
import VirtualCandle from "./VirtualCandle";

// const CandleGrid = ({ prayers }) => {
//   const totalCandles = prayers.reduce((sum, prayer) => sum + prayer.candles, 0);
//   const maxCandles = 50; // Maximum candles to display

//   const renderCandles = () => {
//     const candles = [];
//     const candlesToShow = Math.min(totalCandles, maxCandles);
    
//     for (let i = 0; i < candlesToShow; i++) {
//       candles.push(
//         <VirtualCandle
//           key={i}
//           isLit={true}
//           onLight={() => {}}
//           disabled={true}
//         />
//       );
//     }
    
//     return candles;
//   };

//   return (
//     <div className="bg-gradient-to-b from-indigo-900 via-purple-900 to-black rounded-3xl p-8 mb-8 relative overflow-hidden">
      
//       {/* Background stars */}
//       <div className="absolute inset-0">
//         {[...Array(20)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 3}s`
//             }}
//           ></div>
//         ))}
//       </div>

//       {/* Header */}
//       <div className="text-center mb-8 relative z-10">
//         <h2 className="text-2xl md:text-3xl font-spiritual font-bold text-white mb-2">
//           Sacred Light
//         </h2>
//         <p className="text-blue-200">
//           {totalCandles} candles lit by our community
//         </p>
//       </div>

//       {/* Candles Grid */}
//       <div className="grid grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-4 justify-items-center relative z-10">
//         {renderCandles()}
//       </div>

//       {/* More candles indicator */}
//       {totalCandles > maxCandles && (
//         <div className="text-center mt-6 relative z-10">
//           <p className="text-blue-200 text-sm">
//             ...and {totalCandles - maxCandles} more candles burning bright
//           </p>
//         </div>
//       )}

//       {/* Empty state */}
//       {totalCandles === 0 && (
//         <div className="text-center py-8 relative z-10">
//           <p className="text-blue-200 text-lg">
//             Be the first to light a candle with your prayer
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CandleGrid;


// Candle Grid Component
const CandleGrid = ({ prayers = [], onCandleLight }) => {
  const [litCandles, setLitCandles] = useState(new Set());

  const handleCandleLight = (prayerId) => {
    setLitCandles(prev => new Set([...prev, prayerId]));
    if (onCandleLight) {
      onCandleLight(prayerId);
    }
  };

  // Safety check for prayers array
  const safePrayers = Array.isArray(prayers) ? prayers : [];

  return (
    <div className="bg-gradient-to-b from-indigo-900/50 to-purple-900/50 rounded-2xl p-8 backdrop-blur-md border border-white/10">
      <h3 className="text-2xl font-bold text-white mb-6 text-center">Virtual Prayer Candles</h3>
      <div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-4 max-h-64 overflow-y-auto">
        {safePrayers.slice(0, 48).map((prayer, index) => (
          <VirtualCandle
            key={prayer?.id || index}
            isLit={litCandles.has(prayer?.id)}
            size="sm"
            onLight={() => prayer?.id && handleCandleLight(prayer.id)}
          />
        ))}
      </div>
      <div className="text-center mt-6">
        <p className="text-white/70 text-sm">
          {litCandles.size} candles lit • {safePrayers.length} prayers posted
        </p>
      </div>
    </div>
  );
};

// Prayer Categories Component
const PrayerCategories = ({ selectedCategory = 'all', onCategoryChange, categories = [] }) => {
  // Safety check for categories array
  const safeCategories = Array.isArray(categories) ? categories : [];

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <button
        onClick={() => onCategoryChange && onCategoryChange('all')}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
          selectedCategory === 'all'
            ? 'bg-white text-purple-900'
            : 'bg-white/10 text-white hover:bg-white/20'
        }`}
      >
        All Prayers
      </button>
      {safeCategories.map(category => (
        <button
          key={category}
          onClick={() => onCategoryChange && onCategoryChange(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            selectedCategory === category
              ? 'bg-white text-purple-900'
              : 'bg-white/10 text-white hover:bg-white/20'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CandleGrid;