// import React from 'react';
// import { Play, Book, Download, Clock, Heart, Share2, Eye } from 'lucide-react';

// const TeachingCard = ({ 
//   teaching, 
//   onPlay, 
//   onDownload, 
//   onShare, 
//   onFavorite, 
//   isFavorited = false 
// }) => {
//   const {
//     id,
//     title,
//     description,
//     type, // 'video', 'blog', 'pdf', 'audio'
//     thumbnail,
//     duration,
//     author,
//     date,
//     category,
//     views,
//     tags,
//     excerpt
//   } = teaching;

//   const getTypeIcon = () => {
//     switch (type) {
//       case 'video':
//         return <Play className="w-4 h-4" />;
//       case 'blog':
//         return <Book className="w-4 h-4" />;
//       case 'pdf':
//         return <Download className="w-4 h-4" />;
//       case 'audio':
//         return <Play className="w-4 h-4" />;
//       default:
//         return <Book className="w-4 h-4" />;
//     }
//   };

//   const getTypeColor = () => {
//     switch (type) {
//       case 'video':
//         return 'bg-red-100 text-red-600 border-red-200';
//       case 'blog':
//         return 'bg-blue-100 text-blue-600 border-blue-200';
//       case 'pdf':
//         return 'bg-green-100 text-green-600 border-green-200';
//       case 'audio':
//         return 'bg-purple-100 text-purple-600 border-purple-200';
//       default:
//         return 'bg-gray-100 text-gray-600 border-gray-200';
//     }
//   };

//   const formatDate = (dateString) => {
//     return new Date(dateString).toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'short',
//       day: 'numeric'
//     });
//   };

//   const formatDuration = (duration) => {
//     if (type === 'video' || type === 'audio') {
//       const minutes = Math.floor(duration / 60);
//       const seconds = duration % 60;
//       return `${minutes}:${seconds.toString().padStart(2, '0')}`;
//     }
//     return `${duration} min read`;
//   };

//   return (
//     <div className="group relative bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
//       {/* Thumbnail/Header */}
//       <div className="relative overflow-hidden">
//         {thumbnail ? (
//           <img 
//             src={thumbnail} 
//             alt={title}
//             className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
//           />
//         ) : (
//           <div className="w-full h-48 bg-gradient-to-br from-divine-gold/20 to-peace-blue/20 flex items-center justify-center">
//             <div className="text-6xl text-divine-gold/40">
//               {getTypeIcon()}
//             </div>
//           </div>
//         )}
        
//         {/* Overlay with play button for videos */}
//         {type === 'video' && (
//           <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
//             <button
//               onClick={() => onPlay && onPlay(teaching)}
//               className="opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg hover:bg-white hover:shadow-xl"
//             >
//               <Play className="w-6 h-6 text-divine-gold ml-1" />
//             </button>
//           </div>
//         )}

//         {/* Type Badge */}
//         <div className="absolute top-3 left-3">
//           <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${getTypeColor()}`}>
//             {getTypeIcon()}
//             {type.charAt(0).toUpperCase() + type.slice(1)}
//           </span>
//         </div>

//         {/* Duration Badge */}
//         {duration && (
//           <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
//             <Clock className="w-3 h-3" />
//             {formatDuration(duration)}
//           </div>
//         )}

//         {/* Favorite Button */}
//         <button
//           onClick={() => onFavorite && onFavorite(teaching)}
//           className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-white hover:shadow-lg transform hover:scale-110"
//         >
//           <Heart 
//             className={`w-4 h-4 transition-colors duration-200 ${
//               isFavorited ? 'text-red-500 fill-current' : 'text-gray-600'
//             }`}
//           />
//         </button>
//       </div>

//       {/* Content */}
//       <div className="p-6">
//         {/* Category */}
//         {category && (
//           <div className="mb-2">
//             <span className="inline-block px-3 py-1 bg-unity-purple/10 text-unity-purple text-xs font-medium rounded-full">
//               {category}
//             </span>
//           </div>
//         )}

//         {/* Title */}
//         <h3 className="text-xl font-spiritual font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-divine-gold transition-colors duration-300">
//           {title}
//         </h3>

//         {/* Description/Excerpt */}
//         <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
//           {excerpt || description}
//         </p>

//         {/* Tags */}
//         {tags && tags.length > 0 && (
//           <div className="mb-4">
//             <div className="flex flex-wrap gap-2">
//               {tags.slice(0, 3).map((tag, index) => (
//                 <span 
//                   key={index}
//                   className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md hover:bg-gray-200 transition-colors duration-200"
//                 >
//                   #{tag}
//                 </span>
//               ))}
//               {tags.length > 3 && (
//                 <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
//                   +{tags.length - 3} more
//                 </span>
//               )}
//             </div>
//           </div>
//         )}

//         {/* Footer */}
//         <div className="flex items-center justify-between pt-4 border-t border-gray-100">
//           {/* Author & Date */}
//           <div className="flex flex-col">
//             {author && (
//               <span className="text-sm font-medium text-gray-900">{author}</span>
//             )}
//             <div className="flex items-center gap-2 text-xs text-gray-500">
//               <span>{formatDate(date)}</span>
//               {views && (
//                 <>
//                   <span>•</span>
//                   <div className="flex items-center gap-1">
//                     <Eye className="w-3 h-3" />
//                     <span>{views.toLocaleString()} views</span>
//                   </div>
//                 </>
//               )}
//             </div>
//           </div>

//           {/* Action Buttons */}
//           <div className="flex items-center gap-2">
//             {type === 'pdf' && onDownload && (
//               <button
//                 onClick={() => onDownload(teaching)}
//                 className="p-2 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200 transform hover:scale-110"
//                 title="Download PDF"
//               >
//                 <Download className="w-4 h-4" />
//               </button>
//             )}
            
//             {onShare && (
//               <button
//                 onClick={() => onShare(teaching)}
//                 className="p-2 text-gray-500 hover:text-peace-blue hover:bg-blue-50 rounded-lg transition-all duration-200 transform hover:scale-110"
//                 title="Share"
//               >
//                 <Share2 className="w-4 h-4" />
//               </button>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Hover Glow Effect */}
//       <div className="absolute inset-0 bg-gradient-to-r from-divine-gold/0 via-divine-gold/5 to-divine-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
//     </div>
//   );
// };

// export default TeachingCard;



import React from 'react';
import { Play, Book, Download, Clock, Heart, Share2, Eye } from 'lucide-react';

const TeachingCard = ({ 
  teaching, 
  onPlay, 
  onDownload, 
  onShare, 
  onFavorite, 
  isFavorited = false 
}) => {
  const {
    id,
    title,
    description,
    type, // 'video', 'blog', 'pdf', 'audio'
    thumbnail,
    duration,
    author,
    date,
    category,
    views,
    tags,
    excerpt
  } = teaching;

  const getTypeIcon = () => {
    switch (type) {
      case 'video':
        return <Play className="w-4 h-4" />;
      case 'blog':
        return <Book className="w-4 h-4" />;
      case 'pdf':
        return <Download className="w-4 h-4" />;
      case 'audio':
        return <Play className="w-4 h-4" />;
      default:
        return <Book className="w-4 h-4" />;
    }
  };

  const getTypeColor = () => {
    switch (type) {
      case 'video':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'blog':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'pdf':
        return 'bg-yellow-50 text-yellow-700 border-yellow-200';
      case 'audio':
        return 'bg-indigo-50 text-indigo-700 border-indigo-200';
      default:
        return 'bg-gray-50 text-gray-600 border-gray-200';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatDuration = (duration) => {
    if (type === 'video' || type === 'audio') {
      const minutes = Math.floor(duration / 60);
      const seconds = duration % 60;
      return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }
    return `${duration} min read`;
  };

  return (
    <div className="group relative bg-white rounded-xl shadow-md border border-blue-100 overflow-hidden hover:shadow-2xl hover:shadow-blue-200/30 transition-all duration-500 transform hover:-translate-y-3 hover:border-blue-200">
      {/* Thumbnail/Header */}
      <div className="relative overflow-hidden">
        {thumbnail ? (
          <img 
            src={thumbnail} 
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-48 bg-gradient-to-br from-yellow-100 via-blue-50 to-indigo-100 flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-blue-600/10"></div>
            <div className="text-6xl text-yellow-500 relative z-10 drop-shadow-lg">
              {getTypeIcon()}
            </div>
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-16 h-16 bg-blue-200/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 bg-yellow-200/20 rounded-full blur-lg"></div>
          </div>
        )}
        
        {/* Overlay with play button for videos */}
        {type === 'video' && (
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
            <button
              onClick={() => onPlay && onPlay(teaching)}
              className="opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 bg-white/95 backdrop-blur-sm rounded-full p-4 shadow-xl hover:bg-white hover:shadow-2xl border border-yellow-200/50"
            >
              <Play className="w-6 h-6 text-yellow-600 ml-1" />
            </button>
          </div>
        )}

        {/* Type Badge */}
        <div className="absolute top-3 left-3">
          <span className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold border backdrop-blur-sm ${getTypeColor()}`}>
            {getTypeIcon()}
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </span>
        </div>

        {/* Duration Badge */}
        {duration && (
          <div className="absolute top-3 right-3 bg-blue-900/80 text-white px-3 py-1.5 rounded-full text-xs flex items-center gap-1 backdrop-blur-sm">
            <Clock className="w-3 h-3" />
            {formatDuration(duration)}
          </div>
        )}

        {/* Favorite Button */}
        <button
          onClick={() => onFavorite && onFavorite(teaching)}
          className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/95 backdrop-blur-sm rounded-full p-2.5 shadow-lg hover:bg-white hover:shadow-xl transform hover:scale-110 border border-yellow-200/50"
        >
          <Heart 
            className={`w-4 h-4 transition-colors duration-200 ${
              isFavorited ? 'text-red-500 fill-current' : 'text-blue-600'
            }`}
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-6 relative">
        {/* Category */}
        {category && (
          <div className="mb-3">
            <span className="inline-block px-3 py-1.5 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 text-xs font-semibold rounded-full border border-blue-200/50">
              {category}
            </span>
          </div>
        )}

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-700 transition-colors duration-300 leading-relaxed">
          {title}
        </h3>

        {/* Description/Excerpt */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {excerpt || description}
        </p>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {tags.slice(0, 3).map((tag, index) => (
                <span 
                  key={index}
                  className="px-2.5 py-1 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 text-xs rounded-lg hover:from-blue-100 hover:to-blue-200 transition-all duration-200 border border-blue-200/50 font-medium"
                >
                  #{tag}
                </span>
              ))}
              {tags.length > 3 && (
                <span className="px-2.5 py-1 bg-gradient-to-r from-yellow-50 to-yellow-100 text-yellow-700 text-xs rounded-lg border border-yellow-200/50 font-medium">
                  +{tags.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-blue-100">
          {/* Author & Date */}
          <div className="flex flex-col">
            {author && (
              <span className="text-sm font-semibold text-gray-900">{author}</span>
            )}
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span>{formatDate(date)}</span>
              {views && (
                <>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    <span>{views.toLocaleString()} views</span>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            {type === 'pdf' && onDownload && (
              <button
                onClick={() => onDownload(teaching)}
                className="p-2.5 text-gray-500 hover:text-yellow-600 hover:bg-yellow-50 rounded-xl transition-all duration-200 transform hover:scale-110 border border-transparent hover:border-yellow-200"
                title="Download PDF"
              >
                <Download className="w-4 h-4" />
              </button>
            )}
            
            {onShare && (
              <button
                onClick={() => onShare(teaching)}
                className="p-2.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200 transform hover:scale-110 border border-transparent hover:border-blue-200"
                title="Share"
              >
                <Share2 className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-300/0 via-yellow-300/5 to-blue-300/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl" />
      
      {/* Subtle Border Glow */}
      <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-gradient-to-r group-hover:from-yellow-200/50 group-hover:to-blue-200/50 transition-all duration-500 pointer-events-none" />
    </div>
  );
};

// Demo Component with Sample Data
const SpiritualPlatformDemo = () => {
  const sampleTeachings = [
    {
      id: 1,
      title: "Finding Inner Peace Through Meditation",
      description: "A comprehensive guide to discovering tranquility within yourself through mindful meditation practices.",
      type: "video",
      thumbnail: null,
      duration: 1800, // 30 minutes
      author: "Sarah Johnson",
      date: "2024-01-15",
      category: "Meditation",
      views: 2547,
      tags: ["meditation", "peace", "mindfulness", "spirituality"],
      excerpt: "Discover the transformative power of meditation and learn practical techniques to cultivate inner peace in your daily life."
    },
    {
      id: 2,
      title: "The Power of Gratitude in Daily Life",
      description: "Exploring how gratitude can transform your perspective and bring more joy to everyday moments.",
      type: "blog",
      thumbnail: null,
      duration: 8, // 8 minute read
      author: "Michael Chen",
      date: "2024-01-12",
      category: "Gratitude",
      views: 1832,
      tags: ["gratitude", "joy", "mindset", "happiness"],
      excerpt: "Learn how practicing gratitude can shift your mindset and open your heart to the abundance that surrounds you."
    },
    {
      id: 3,
      title: "Sacred Texts Study Guide",
      description: "A comprehensive study guide for understanding ancient wisdom and spiritual teachings.",
      type: "pdf",
      thumbnail: null,
      duration: 45, // 45 minute read
      author: "Dr. Rebecca Williams",
      date: "2024-01-10",
      category: "Study",
      views: 3421,
      tags: ["study", "wisdom", "texts", "learning"],
      excerpt: "Dive deep into timeless spiritual texts with guided questions and reflective exercises for personal growth."
    }
  ];

  const handlePlay = (teaching) => {
    console.log('Playing:', teaching.title);
  };

  const handleDownload = (teaching) => {
    console.log('Downloading:', teaching.title);
  };

  const handleShare = (teaching) => {
    console.log('Sharing:', teaching.title);
  };

  const handleFavorite = (teaching) => {
    console.log('Favoriting:', teaching.title);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-yellow-50/20 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Spiritual Teaching Platform
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover wisdom, find peace, and grow spiritually through our collection of teachings, meditations, and sacred resources.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {sampleTeachings.map((teaching) => (
            <TeachingCard
              key={teaching.id}
              teaching={teaching}
              onPlay={handlePlay}
              onDownload={handleDownload}
              onShare={handleShare}
              onFavorite={handleFavorite}
              isFavorited={teaching.id === 2} // Demo: second card is favorited
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpiritualPlatformDemo;