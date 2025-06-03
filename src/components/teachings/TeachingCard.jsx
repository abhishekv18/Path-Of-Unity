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
        return 'bg-red-100 text-red-600 border-red-200';
      case 'blog':
        return 'bg-blue-100 text-blue-600 border-blue-200';
      case 'pdf':
        return 'bg-green-100 text-green-600 border-green-200';
      case 'audio':
        return 'bg-purple-100 text-purple-600 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-600 border-gray-200';
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
    <div className="group relative bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
      {/* Thumbnail/Header */}
      <div className="relative overflow-hidden">
        {thumbnail ? (
          <img 
            src={thumbnail} 
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-48 bg-gradient-to-br from-divine-gold/20 to-peace-blue/20 flex items-center justify-center">
            <div className="text-6xl text-divine-gold/40">
              {getTypeIcon()}
            </div>
          </div>
        )}
        
        {/* Overlay with play button for videos */}
        {type === 'video' && (
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
            <button
              onClick={() => onPlay && onPlay(teaching)}
              className="opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg hover:bg-white hover:shadow-xl"
            >
              <Play className="w-6 h-6 text-divine-gold ml-1" />
            </button>
          </div>
        )}

        {/* Type Badge */}
        <div className="absolute top-3 left-3">
          <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${getTypeColor()}`}>
            {getTypeIcon()}
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </span>
        </div>

        {/* Duration Badge */}
        {duration && (
          <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {formatDuration(duration)}
          </div>
        )}

        {/* Favorite Button */}
        <button
          onClick={() => onFavorite && onFavorite(teaching)}
          className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-white hover:shadow-lg transform hover:scale-110"
        >
          <Heart 
            className={`w-4 h-4 transition-colors duration-200 ${
              isFavorited ? 'text-red-500 fill-current' : 'text-gray-600'
            }`}
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category */}
        {category && (
          <div className="mb-2">
            <span className="inline-block px-3 py-1 bg-unity-purple/10 text-unity-purple text-xs font-medium rounded-full">
              {category}
            </span>
          </div>
        )}

        {/* Title */}
        <h3 className="text-xl font-spiritual font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-divine-gold transition-colors duration-300">
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
                  className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md hover:bg-gray-200 transition-colors duration-200"
                >
                  #{tag}
                </span>
              ))}
              {tags.length > 3 && (
                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                  +{tags.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          {/* Author & Date */}
          <div className="flex flex-col">
            {author && (
              <span className="text-sm font-medium text-gray-900">{author}</span>
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
                className="p-2 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200 transform hover:scale-110"
                title="Download PDF"
              >
                <Download className="w-4 h-4" />
              </button>
            )}
            
            {onShare && (
              <button
                onClick={() => onShare(teaching)}
                className="p-2 text-gray-500 hover:text-peace-blue hover:bg-blue-50 rounded-lg transition-all duration-200 transform hover:scale-110"
                title="Share"
              >
                <Share2 className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-divine-gold/0 via-divine-gold/5 to-divine-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
};

export default TeachingCard;