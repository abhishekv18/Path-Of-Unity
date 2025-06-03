
// // components/prayer/VirtualCandle.jsx
// import React, { useState, useEffect } from 'react';

// const VirtualCandle = ({ isLit, onLight, disabled = false }) => {
//   const [flame, setFlame] = useState(isLit);
//   const [flickering, setFlickering] = useState(false);

//   useEffect(() => {
//     setFlame(isLit);
//     if (isLit) {
//       setFlickering(true);
//     }
//   }, [isLit]);

//   const handleClick = () => {
//     if (!disabled && !flame) {
//       onLight();
//       setFlame(true);
//       setFlickering(true);
//     }
//   };

//   return (
//     <div 
//       className={`relative cursor-pointer transform transition-all duration-300 ${
//         !disabled && !flame ? 'hover:scale-110' : ''
//       }`}
//       onClick={handleClick}
//     >
//       {/* Candle Base */}
//       <div className="relative w-8 h-16 bg-gradient-to-b from-yellow-100 to-yellow-200 rounded-lg shadow-lg border border-yellow-300">
        
//         {/* Wax Drips */}
//         <div className="absolute -left-1 top-2 w-2 h-8 bg-gradient-to-b from-yellow-200 to-transparent rounded-full opacity-70"></div>
//         <div className="absolute -right-1 top-4 w-1 h-6 bg-gradient-to-b from-yellow-200 to-transparent rounded-full opacity-50"></div>
        
//         {/* Wick */}
//         <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-0.5 h-2 bg-gray-800 rounded-full"></div>
        
//         {/* Flame */}
//         {flame && (
//           <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
//             <div className={`w-4 h-6 bg-gradient-to-t from-yellow-400 via-orange-500 to-red-500 rounded-full ${
//               flickering ? 'animate-pulse' : ''
//             }`}>
//               {/* Inner flame */}
//               <div className="absolute inset-1 bg-gradient-to-t from-yellow-300 to-orange-400 rounded-full"></div>
              
//               {/* Flame core */}
//               <div className="absolute inset-2 bg-gradient-to-t from-white to-yellow-200 rounded-full opacity-80"></div>
//             </div>
            
//             {/* Glow effect */}
//             <div className="absolute -inset-2 bg-orange-400 rounded-full opacity-20 blur-md"></div>
//           </div>
//         )}
        
//         {/* Smoke effect when not lit */}
//         {!flame && !disabled && (
//           <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
//             <div className="w-px h-4 bg-gradient-to-t from-gray-400 to-transparent opacity-50 animate-pulse"></div>
//           </div>
//         )}
//       </div>
      
//       {/* Click instruction */}
//       {!flame && !disabled && (
//         <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
//           Click to light
//         </div>
//       )}
//     </div>
//   );
// };

// export default VirtualCandle;

// Virtual Candle Component
const VirtualCandle = ({ isLit, size = 'md', onLight }) => {
  const sizes = {
    sm: 'w-8 h-12',
    md: 'w-12 h-16',
    lg: 'w-16 h-20'
  };

  return (
    <div className="flex flex-col items-center space-y-2">
      <div 
        className={`relative ${sizes[size]} cursor-pointer transition-all duration-300 hover:scale-110`}
        onClick={onLight}
      >
        {/* Candle Body */}
        <div className="absolute bottom-0 w-full h-3/4 bg-gradient-to-b from-yellow-200 to-yellow-600 rounded-b-lg shadow-lg"></div>
        
        {/* Wick */}
        <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-0.5 h-2 bg-gray-800"></div>
        
        {/* Flame */}
        {isLit && (
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
            <div className="w-3 h-6 bg-gradient-to-t from-orange-500 via-yellow-400 to-yellow-200 rounded-full opacity-90 animate-pulse shadow-lg shadow-orange-300/50"></div>
            {/* Glow effect */}
            <div className="absolute inset-0 w-6 h-6 bg-orange-300/30 rounded-full blur-md -translate-x-1.5 -translate-y-1"></div>
          </div>
        )}
      </div>
      
      <span className="text-white/60 text-xs">
        {isLit ? 'Burning' : 'Light Me'}
      </span>
    </div>
  );
};

export default VirtualCandle;