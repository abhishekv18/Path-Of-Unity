// import React, { useState } from 'react';
// import { 
//   Play, 
//   Download, 
//   Clock, 
//   User, 
//   BookOpen, 
//   Video,
//   FileText,
//   Star,
//   Globe
// } from 'lucide-react';
// import teachingsData from '../../data/teachings.json'; // Assuming you have a JSON file with your teachings data
// import SearchFilter from './SearchFilter';
// // TeachingsGrid Component

// const TeachingsGrid = ({ 
//      teachings = [],
//   onTeachingClick = () => {},
//   className = "" 
// }) => {
//   if (teachings.length === 0) {
//     return (
//       <div className={`text-center py-16 ${className}`}>
//         <div className="text-gray-400 mb-4">
//           <BookOpen className="w-16 h-16 mx-auto mb-4" />
//           <p className="text-xl">No teachings found.</p>
//           <p className="text-gray-500">Try adjusting your search or filter options.</p>
//         </div>
//       </div>
//     );
//   }
//   const [filteredTeachings, setFilteredTeachings] = useState(teachings);

//   const handleFilterChange = (filtered) => {
//     setFilteredTeachings(filtered);
//   };
//   return (
//     <div>

//     <SearchFilter
//         teachings={teachings}
//         onFilterChange={handleFilterChange}
//         className="mb-8"
//     />
//  <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${className}`}>

        
//       {filteredTeachings.map((teaching) => (
//         <TeachingCard 
//           key={teaching.id} 
//           teaching={teaching} 
//           onClick={() => onTeachingClick(teaching)}
//         />
//       ))}
//     </div>
//     </div>
   
//   );
// };

// // Individual Teaching Card Component
// const TeachingCard = ({ teaching, onClick }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   const getTypeIcon = () => {
//     if (teaching.videoUrl) return <Video className="w-5 h-5" />;
//     if (teaching.content) return <FileText className="w-5 h-5" />;
//     if (teaching.type) return <Download className="w-5 h-5" />;
//     return <BookOpen className="w-5 h-5" />;
//   };

//   const getTypeColor = () => {
//     if (teaching.videoUrl) return 'text-red-600 bg-red-50';
//     if (teaching.content) return 'text-blue-600 bg-blue-50';
//     if (teaching.type) return 'text-green-600 bg-green-50';
//     return 'text-purple-600 bg-purple-50';
//   };

//   const getTypeLabel = () => {
//     if (teaching.videoUrl) return 'Video';
//     if (teaching.content) return 'Article';
//     if (teaching.type) return teaching.type;
//     return 'Teaching';
//   };

//   return (
//     <div
//       className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden border border-gray-100 ${
//         isHovered ? 'scale-105' : ''
//       }`}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       onClick={onClick}
//     >
//       {/* Image Container */}
//       <div className="relative h-48 overflow-hidden">
//         <img
//           src={teaching.thumbnail || teaching.image || 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop'}
//           alt={teaching.title}
//           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//           onError={(e) => {
//             e.target.src = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop';
//           }}
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        
//         {/* Type Badge */}
//         <div className={`absolute top-4 left-4 px-3 py-1 rounded-full ${getTypeColor()} flex items-center gap-1 backdrop-blur-sm`}>
//           {getTypeIcon()}
//           <span className="text-sm font-medium">
//             {getTypeLabel()}
//           </span>
//         </div>

//         {/* Duration/Read Time Badge */}
//         {(teaching.duration || teaching.readTime) && (
//           <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1 backdrop-blur-sm">
//             <Clock className="w-3 h-3" />
//             <span>{teaching.duration || teaching.readTime}</span>
//           </div>
//         )}

//         {/* Play Button Overlay for Videos */}
//         {teaching.videoUrl && (
//           <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//             <div className="bg-white/95 rounded-full p-4 shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
//               <Play className="w-8 h-8 text-purple-600 fill-current ml-1" />
//             </div>
//           </div>
//         )}

//         {/* Download Icon for Resources */}
//         {teaching.type && !teaching.videoUrl && (
//           <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//             <div className="bg-white/95 rounded-full p-4 shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
//               <Download className="w-8 h-8 text-green-600" />
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Card Content */}
//       <div className="p-6">
//         {/* Category and Difficulty Tags */}
//         <div className="flex items-center gap-2 mb-3 flex-wrap">
//           <span className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-full text-sm font-medium">
//             {teaching.category || 'Spiritual'}
//           </span>
//           {teaching.difficulty && (
//             <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
//               {teaching.difficulty}
//             </span>
//           )}
//         </div>

//         {/* Title */}
//         <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300 line-clamp-2">
//           {teaching.title}
//         </h3>

//         {/* Description/Excerpt */}
//         <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
//           {teaching.description || teaching.excerpt || 'Discover profound wisdom and spiritual insights that guide us toward peace, unity, and understanding.'}
//         </p>

//         {/* Instructor/Author */}
//         {(teaching.instructor || teaching.author) && (
//           <div className="flex items-center gap-2 mb-4 text-gray-500">
//             <User className="w-4 h-4" />
//             <span className="text-sm font-medium">{teaching.instructor || teaching.author}</span>
//           </div>
//         )}

//         {/* Footer Stats */}
//         <div className="flex items-center justify-between pt-4 border-t border-gray-100">
//           {/* Left side - Views/Downloads */}
//           <div className="flex items-center gap-4 text-sm text-gray-500">
//             {teaching.views && (
//               <div className="flex items-center gap-1">
//                 <Globe className="w-4 h-4" />
//                 <span>{teaching.views}</span>
//               </div>
//             )}
//             {teaching.downloads && (
//               <div className="flex items-center gap-1">
//                 <Download className="w-4 h-4" />
//                 <span>{teaching.downloads}</span>
//               </div>
//             )}
//             {teaching.publishDate && (
//               <div className="flex items-center gap-1">
//                 <Clock className="w-4 h-4" />
//                 <span>{new Date(teaching.publishDate).toLocaleDateString()}</span>
//               </div>
//             )}
//           </div>

//           {/* Right side - Rating */}
//           {teaching.rating && (
//             <div className="flex items-center gap-1">
//               <Star className="w-4 h-4 text-yellow-400 fill-current" />
//               <span className="text-sm font-medium text-gray-700">{teaching.rating}</span>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Hover Glow Effect */}
//       <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/0 to-blue-600/0 group-hover:from-purple-600/5 group-hover:to-blue-600/5 transition-all duration-500 pointer-events-none"></div>
//     </div>
//   );
// };

// export default TeachingsGrid;


import React, { useState } from 'react';
import { 
  Play, 
  Download, 
  Clock, 
  User, 
  BookOpen, 
  Video,
  FileText,
  Star,
  Globe,
  Sparkles,
  Heart,
  Eye,
  Calendar,
  Award,
  Zap
} from 'lucide-react';
import teachingsData from '../../data/teachings.json'; // Assuming you have a JSON file with your teachings data
import SearchFilter from './SearchFilter';

// Enhanced TeachingsGrid Component with Spiritual Design
const TeachingsGrid = ({ 
  teachings = [],
  onTeachingClick = () => {},
  className = "" 
}) => {
  const [filteredTeachings, setFilteredTeachings] = useState(teachings);
  const [viewMode, setViewMode] = useState('grid'); // grid or list
  const [favorites, setFavorites] = useState(new Set());

  const handleFilterChange = (filtered) => {
    setFilteredTeachings(filtered);
  };

  const toggleFavorite = (teachingId, e) => {
    e.stopPropagation();
    const newFavorites = new Set(favorites);
    if (newFavorites.has(teachingId)) {
      newFavorites.delete(teachingId);
    } else {
      newFavorites.add(teachingId);
    }
    setFavorites(newFavorites);
  };

  if (teachings.length === 0) {
    return (
      <div className={`text-center py-20 ${className}`}>
        <div className="relative">
          {/* Floating Elements */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <div className="w-2 h-2 bg-purple-300 rounded-full animate-ping opacity-60"></div>
          </div>
          <div className="absolute -top-4 left-1/3 transform -translate-x-1/2">
            <div className="w-1 h-1 bg-indigo-300 rounded-full animate-pulse opacity-40"></div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-12 border border-purple-100 shadow-lg">
            <div className="text-gray-400 mb-4">
              <div className="relative inline-block">
                <BookOpen className="w-20 h-20 mx-auto mb-6 text-purple-300" />
                <Sparkles className="w-6 h-6 absolute -top-2 -right-2 text-purple-400 animate-pulse" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-600 mb-2">No Sacred Teachings Found</h3>
              <p className="text-gray-500 mb-4">The wisdom you seek is not yet revealed.</p>
              <p className="text-sm text-gray-400">Try adjusting your search or explore different spiritual paths.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Floating Spiritual Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-20 w-1 h-1 bg-purple-300 rounded-full animate-pulse opacity-30"></div>
        <div className="absolute top-32 right-16 w-2 h-2 bg-indigo-300 rounded-full animate-bounce opacity-20"></div>
        <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-pink-300 rounded-full animate-ping opacity-40"></div>
      </div>

      {/* Enhanced SearchFilter */}
      <div className="mb-12">
        <SearchFilter
          teachings={teachings}
          onFilterChange={handleFilterChange}
          className="mb-8"
        />
        
        {/* Results Summary with Spiritual Touch */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 p-6 bg-gradient-to-r from-purple-50 via-white to-indigo-50 rounded-2xl border border-purple-100 shadow-sm">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white animate-pulse" />
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-800">
                <span className="text-purple-600">{filteredTeachings.length}</span> Sacred Teaching{filteredTeachings.length !== 1 ? 's' : ''} Found
              </p>
              <p className="text-sm text-gray-500">Wisdom curated for your spiritual journey</p>
            </div>
          </div>
          
          {/* View Mode Toggle */}
          <div className="flex items-center space-x-2 mt-4 sm:mt-0">
            <span className="text-sm text-gray-600">View:</span>
            <div className="flex bg-white rounded-lg border border-purple-200 p-1">
              {/* <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1 rounded text-sm transition-all duration-200 ${
                  viewMode === 'grid' 
                    ? 'bg-purple-500 text-white shadow-sm' 
                    : 'text-gray-600 hover:bg-purple-50'
                }`}
              >
                Grid
              </button> */}
              <button
                onClick={() => setViewMode('list')}
                className={`px-3 py-1 rounded text-sm transition-all duration-200 ${
                  viewMode === 'list' 
                    ? 'bg-purple-500 text-white shadow-sm' 
                    : 'text-gray-600 hover:bg-purple-50'
                }`}
              >
                List
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Grid Layout */}
      <div className={`
        ${viewMode === 'grid' 
          ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' 
          : 'space-y-6'
        } 
        ${className}
      `}>
        {filteredTeachings.map((teaching, index) => (
          <TeachingCard 
            key={teaching.id} 
            teaching={teaching} 
            onClick={() => onTeachingClick(teaching)}
            isFavorite={favorites.has(teaching.id)}
            onToggleFavorite={(e) => toggleFavorite(teaching.id, e)}
            viewMode={viewMode}
            index={index}
          />
        ))}
      </div>

      {/* Inspirational Footer */}
      {filteredTeachings.length > 0 && (
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full border border-purple-200">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="text-sm font-medium text-gray-700">Continue exploring the path of wisdom</span>
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
          </div>
        </div>
      )}
    </div>
  );
};

// Enhanced Individual Teaching Card Component
const TeachingCard = ({ teaching, onClick, isFavorite, onToggleFavorite, viewMode, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const getTypeIcon = () => {
    if (teaching.videoUrl) return <Video className="w-5 h-5" />;
    if (teaching.content) return <FileText className="w-5 h-5" />;
    if (teaching.type) return <Download className="w-5 h-5" />;
    return <BookOpen className="w-5 h-5" />;
  };

  const getTypeColor = () => {
    if (teaching.videoUrl) return 'text-red-600 bg-gradient-to-r from-red-50 to-pink-50 border-red-200';
    if (teaching.content) return 'text-blue-600 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200';
    if (teaching.type) return 'text-green-600 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200';
    return 'text-purple-600 bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200';
  };

  const getTypeLabel = () => {
    if (teaching.videoUrl) return 'Video';
    if (teaching.content) return 'Article';
    if (teaching.type) return teaching.type;
    return 'Teaching';
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty?.toLowerCase()) {
      case 'beginner': return 'bg-green-100 text-green-800 border-green-200';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'advanced': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-blue-100 text-blue-800 border-blue-200';
    }
  };

  if (viewMode === 'list') {
    return (
      <div
        className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden border border-purple-100 p-6 ${
          isHovered ? 'scale-[1.02] shadow-purple-200/50' : ''
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
        style={{ animationDelay: `${index * 100}ms` }}
      >
        <div className="flex gap-6">
          {/* Image */}
          <div className="relative w-32 h-32 flex-shrink-0">
            <img
              src={teaching.thumbnail || teaching.image || 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=150&h=150&fit=crop'}
              alt={teaching.title}
              className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
              onLoad={() => setImageLoaded(true)}
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=150&h=150&fit=crop';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2 flex-wrap">
                <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getTypeColor()}`}>
                  {getTypeIcon()}
                  <span className="ml-1">{getTypeLabel()}</span>
                </span>
                {teaching.difficulty && (
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getDifficultyColor(teaching.difficulty)}`}>
                    {teaching.difficulty}
                  </span>
                )}
              </div>
              
              <button
                onClick={onToggleFavorite}
                className={`p-2 rounded-full transition-all duration-300 ${
                  isFavorite 
                    ? 'bg-red-100 text-red-600 hover:bg-red-200' 
                    : 'bg-gray-100 text-gray-400 hover:bg-red-100 hover:text-red-600'
                }`}
              >
                <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
              </button>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
              {teaching.title}
            </h3>

            <p className="text-gray-600 mb-4 line-clamp-2">
              {teaching.description || teaching.excerpt || 'Discover profound wisdom and spiritual insights.'}
            </p>

            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center gap-4">
                {(teaching.instructor || teaching.author) && (
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{teaching.instructor || teaching.author}</span>
                  </div>
                )}
                {(teaching.duration || teaching.readTime) && (
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{teaching.duration || teaching.readTime}</span>
                  </div>
                )}
              </div>
              
              {teaching.rating && (
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="font-medium">{teaching.rating}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Grid View (Enhanced)
  return (
    <div
      className={`group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 cursor-pointer overflow-hidden border border-purple-100 ${
        isHovered ? 'scale-105 shadow-purple-200/50' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      style={{ 
        animationDelay: `${index * 150}ms`,
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)'
      }}
    >
      {/* Spiritual Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 via-indigo-600/0 to-blue-600/0 group-hover:from-purple-600/5 group-hover:via-indigo-600/3 group-hover:to-blue-600/5 transition-all duration-700 pointer-events-none rounded-3xl"></div>

      {/* Enhanced Image Container */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={teaching.thumbnail || teaching.image || 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop'}
          alt={teaching.title}
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop';
          }}
        />
        
        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        
        {/* Favorite Button */}
        <button
          onClick={onToggleFavorite}
          className={`absolute top-4 right-4 p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
            isFavorite 
              ? 'bg-red-500/90 text-white hover:bg-red-600/90' 
              : 'bg-white/90 text-gray-600 hover:bg-red-500/90 hover:text-white'
          }`}
        >
          <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
        </button>
        
        {/* Enhanced Type Badge */}
        <div className={`absolute top-4 left-4 px-4 py-2 rounded-full border backdrop-blur-sm ${getTypeColor()} flex items-center gap-2 shadow-lg`}>
          {getTypeIcon()}
          <span className="text-sm font-semibold">
            {getTypeLabel()}
          </span>
        </div>

        {/* Duration/Read Time Badge */}
        {(teaching.duration || teaching.readTime) && (
          <div className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1 backdrop-blur-sm">
            <Clock className="w-3 h-3" />
            <span className="font-medium">{teaching.duration || teaching.readTime}</span>
          </div>
        )}

        {/* Enhanced Play Button Overlay for Videos */}
        {teaching.videoUrl && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
            <div className="bg-white/95 rounded-full p-6 shadow-2xl transform scale-75 group-hover:scale-100 transition-all duration-500 backdrop-blur-sm">
              <Play className="w-10 h-10 text-purple-600 fill-current ml-1" />
            </div>
          </div>
        )}

        {/* Enhanced Download Icon for Resources */}
        {teaching.type && !teaching.videoUrl && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
            <div className="bg-white/95 rounded-full p-6 shadow-2xl transform scale-75 group-hover:scale-100 transition-all duration-500 backdrop-blur-sm">
              <Download className="w-10 h-10 text-green-600" />
            </div>
          </div>
        )}
      </div>

      {/* Enhanced Card Content */}
      <div className="p-8">
        {/* Category and Difficulty Tags */}
        <div className="flex items-center gap-2 mb-4 flex-wrap">
          <span className="px-4 py-2 bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 rounded-full text-sm font-semibold border border-purple-200">
            {teaching.category || 'Spiritual Wisdom'}
          </span>
          {teaching.difficulty && (
            <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getDifficultyColor(teaching.difficulty)}`}>
              <Award className="w-3 h-3 inline mr-1" />
              {teaching.difficulty}
            </span>
          )}
        </div>

        {/* Enhanced Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300 line-clamp-2 leading-tight">
          {teaching.title}
        </h3>

        {/* Enhanced Description */}
        <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
          {teaching.description || teaching.excerpt || 'Discover profound wisdom and spiritual insights that guide us toward peace, unity, and understanding.'}
        </p>

        {/* Enhanced Instructor/Author */}
        {(teaching.instructor || teaching.author) && (
          <div className="flex items-center gap-2 mb-6 text-gray-600">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-purple-600" />
            </div>
            <span className="text-sm font-medium">{teaching.instructor || teaching.author}</span>
          </div>
        )}

        {/* Enhanced Footer Stats */}
        <div className="flex items-center justify-between pt-6 border-t border-gray-100">
          {/* Left side - Enhanced Stats */}
          <div className="flex items-center gap-4 text-sm text-gray-500">
            {teaching.views && (
              <div className="flex items-center gap-1 hover:text-purple-600 transition-colors">
                <Eye className="w-4 h-4" />
                <span className="font-medium">{teaching.views}</span>
              </div>
            )}
            {teaching.downloads && (
              <div className="flex items-center gap-1 hover:text-green-600 transition-colors">
                <Download className="w-4 h-4" />
                <span className="font-medium">{teaching.downloads}</span>
              </div>
            )}
            {teaching.publishDate && (
              <div className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                <Calendar className="w-4 h-4" />
                <span className="font-medium">{new Date(teaching.publishDate).toLocaleDateString()}</span>
              </div>
            )}
          </div>

          {/* Right side - Enhanced Rating */}
          {teaching.rating && (
            <div className="flex items-center gap-1 bg-gradient-to-r from-yellow-50 to-orange-50 px-3 py-1 rounded-full border border-yellow-200">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="text-sm font-bold text-yellow-700">{teaching.rating}</span>
            </div>
          )}
        </div>
      </div>

      {/* Animated Border Effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"></div>
    </div>
  );
};

export default TeachingsGrid;