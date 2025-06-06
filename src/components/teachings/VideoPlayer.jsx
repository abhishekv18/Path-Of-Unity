import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize, SkipBack, SkipForward, Settings, Download, Share2, Heart, BookOpen } from 'lucide-react';

const VideoPlayer = ({ 
videoUrl,
  title = "Spiritual Teaching", 
  description = "", 
  instructor = "Path of Unity",
  thumbnail = "",
  chapters = [],
  transcript = "",
  relatedVideos = [],
  onVideoEnd = () => {},
  className = ""
}) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [showSettings, setShowSettings] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [quality, setQuality] = useState('auto');
  const [showTranscript, setShowTranscript] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  const [currentChapter, setCurrentChapter] = useState(0);
  
  const controlsTimeoutRef = useRef(null);

  // YouTube video ID extraction
  const getYouTubeVideoId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const isYouTubeVideo = videoUrl?.includes('youtube.com') || videoUrl?.includes('youtu.be');
  const youtubeVideoId = isYouTubeVideo ? getYouTubeVideoId(videoUrl) : null;

  useEffect(() => {
    if (videoRef.current && !isYouTubeVideo) {
      const video = videoRef.current;
      
      const handleLoadedMetadata = () => {
        setDuration(video.duration);
        setIsLoading(false);
      };
      
      const handleTimeUpdate = () => {
        setCurrentTime(video.currentTime);
        
        // Update current chapter based on time
        if (chapters.length > 0) {
          const chapter = chapters.findIndex((ch, index) => {
            const nextChapter = chapters[index + 1];
            return video.currentTime >= ch.time && (!nextChapter || video.currentTime < nextChapter.time);
          });
          if (chapter !== -1) setCurrentChapter(chapter);
        }
      };

      const handleEnded = () => {
        setIsPlaying(false);
        onVideoEnd();
      };

      video.addEventListener('loadedmetadata', handleLoadedMetadata);
      video.addEventListener('timeupdate', handleTimeUpdate);
      video.addEventListener('ended', handleEnded);

      return () => {
        video.removeEventListener('loadedmetadata', handleLoadedMetadata);
        video.removeEventListener('timeupdate', handleTimeUpdate);
        video.removeEventListener('ended', handleEnded);
      };
    }
  }, [videoUrl, chapters, onVideoEnd, isYouTubeVideo]);

  // Auto-hide controls
  useEffect(() => {
    if (showControls && isPlaying) {
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    }
    
    return () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, [showControls, isPlaying]);

  const togglePlay = () => {
    if (videoRef.current && !isYouTubeVideo) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleProgressClick = (e) => {
    if (videoRef.current && !isYouTubeVideo) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const newTime = (clickX / rect.width) * duration;
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
    if (videoRef.current && !isYouTubeVideo) {
      videoRef.current.volume = newVolume;
    }
  };

  const toggleMute = () => {
    if (videoRef.current && !isYouTubeVideo) {
      const newMuted = !isMuted;
      setIsMuted(newMuted);
      videoRef.current.muted = newMuted;
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      videoRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const skipTime = (seconds) => {
    if (videoRef.current && !isYouTubeVideo) {
      videoRef.current.currentTime += seconds;
    }
  };

  const changePlaybackRate = (rate) => {
    setPlaybackRate(rate);
    if (videoRef.current && !isYouTubeVideo) {
      videoRef.current.playbackRate = rate;
    }
    setShowSettings(false);
  };

  const jumpToChapter = (chapterTime) => {
    if (videoRef.current && !isYouTubeVideo) {
      videoRef.current.currentTime = chapterTime;
      setCurrentTime(chapterTime);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleShare = async () => {
    const shareData = {
      title: title,
      text: `Watch this spiritual teaching: ${title}`,
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className={`relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 rounded-2xl overflow-hidden shadow-2xl ${className}`}>
      {/* Video Container */}
      <div 
        className="relative aspect-video bg-black rounded-t-2xl overflow-hidden cursor-pointer"
        onMouseMove={() => setShowControls(true)}
        onMouseLeave={() => isPlaying && setTimeout(() => setShowControls(false), 1000)}
        onClick={togglePlay}
      >
        {isYouTubeVideo && youtubeVideoId ? (
          <iframe
            ref={videoRef}
            className="w-full h-full"
            src={videoUrl}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            poster={thumbnail}
            onLoadStart={() => setIsLoading(true)}
            onCanPlay={() => setIsLoading(false)}
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}

        {/* Loading Overlay */}
        {isLoading && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent"></div>
          </div>
        )}

        {/* Play/Pause Overlay */}
        {!isYouTubeVideo && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className={`bg-black bg-opacity-50 rounded-full p-4 transform transition-all duration-300 ${isPlaying ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}>
              <Play className="h-12 w-12 text-white ml-1" />
            </div>
          </div>
        )}

        {/* Controls Overlay */}
        {!isYouTubeVideo && (
          <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
            {/* Progress Bar */}
            <div className="mb-4">
              <div 
                className="w-full h-2 bg-white bg-opacity-30 rounded-full cursor-pointer relative overflow-hidden"
                onClick={handleProgressClick}
              >
                <div 
                  className="h-full bg-gradient-to-r from-purple-400 to-blue-400 rounded-full transition-all duration-150"
                  style={{ width: `${(currentTime / duration) * 100}%` }}
                />
                {/* Chapter markers */}
                {chapters.map((chapter, index) => (
                  <div
                    key={index}
                    className="absolute top-0 w-1 h-full bg-yellow-400 opacity-70"
                    style={{ left: `${(chapter.time / duration) * 100}%` }}
                    title={chapter.title}
                  />
                ))}
              </div>
            </div>

            {/* Control Buttons */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button onClick={() => skipTime(-10)} className="text-white hover:text-purple-300 transition-colors">
                  <SkipBack className="h-6 w-6" />
                </button>
                
                <button onClick={togglePlay} className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all">
                  {isPlaying ? <Pause className="h-6 w-6 text-white" /> : <Play className="h-6 w-6 text-white ml-1" />}
                </button>
                
                <button onClick={() => skipTime(10)} className="text-white hover:text-purple-300 transition-colors">
                  <SkipForward className="h-6 w-6" />
                </button>

                <div className="flex items-center space-x-2">
                  <button onClick={toggleMute} className="text-white hover:text-purple-300 transition-colors">
                    {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    className="w-20 accent-purple-400"
                  />
                </div>

                <span className="text-white text-sm">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <div className="relative">
                  <button 
                    onClick={() => setShowSettings(!showSettings)}
                    className="text-white hover:text-purple-300 transition-colors"
                  >
                    <Settings className="h-5 w-5" />
                  </button>
                  
                  {showSettings && (
                    <div className="absolute bottom-full right-0 mb-2 bg-black bg-opacity-90 rounded-lg p-4 min-w-48">
                      <div className="mb-3">
                        <h4 className="text-white text-sm font-semibold mb-2">Playback Speed</h4>
                        <div className="space-y-1">
                          {[0.5, 0.75, 1, 1.25, 1.5, 2].map(rate => (
                            <button
                              key={rate}
                              onClick={() => changePlaybackRate(rate)}
                              className={`block w-full text-left px-2 py-1 text-sm rounded transition-colors ${
                                playbackRate === rate ? 'text-purple-300 bg-purple-900' : 'text-white hover:bg-gray-700'
                              }`}
                            >
                              {rate}x
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <button onClick={toggleFullscreen} className="text-white hover:text-purple-300 transition-colors">
                  {isFullscreen ? <Minimize className="h-5 w-5" /> : <Maximize className="h-5 w-5" />}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Video Information */}
      <div className="p-6 bg-gradient-to-r from-purple-800/20 to-blue-800/20 backdrop-blur-sm">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
            <p className="text-purple-200 mb-2">Taught by {instructor}</p>
            {description && <p className="text-gray-300 text-sm">{description}</p>}
          </div>
          
          <div className="flex items-center space-x-3 ml-4">
            <button
              onClick={() => setIsFavorited(!isFavorited)}
              className={`p-2 rounded-full transition-colors ${
                isFavorited ? 'bg-red-500 text-white' : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <Heart className={`h-5 w-5 ${isFavorited ? 'fill-current' : ''}`} />
            </button>
            
            <button onClick={handleShare} className="p-2 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors">
              <Share2 className="h-5 w-5" />
            </button>
            
            <button className="p-2 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors">
              <Download className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Chapters */}
        {chapters.length > 0 && (
          <div className="mb-6">
            <h3 className="text-white font-semibold mb-3 flex items-center">
              <BookOpen className="h-5 w-5 mr-2" />
              Chapters
            </h3>
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {chapters.map((chapter, index) => (
                <button
                  key={index}
                  onClick={() => jumpToChapter(chapter.time)}
                  className={`w-full text-left p-3 rounded-lg transition-colors ${
                    currentChapter === index 
                      ? 'bg-purple-600/50 text-white' 
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{chapter.title}</span>
                    <span className="text-sm opacity-70">{formatTime(chapter.time)}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Transcript Toggle */}
        {transcript && (
          <div className="mb-4">
            <button
              onClick={() => setShowTranscript(!showTranscript)}
              className="text-purple-300 hover:text-white transition-colors text-sm font-medium"
            >
              {showTranscript ? 'Hide' : 'Show'} Transcript
            </button>
            
            {showTranscript && (
              <div className="mt-3 p-4 bg-black/20 rounded-lg max-h-40 overflow-y-auto">
                <p className="text-gray-300 text-sm leading-relaxed">{transcript}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;



// import React, { useState, useRef, useEffect } from 'react';
// import { Play, Pause, Volume2, VolumeX, Maximize, Minimize, SkipBack, SkipForward, Settings, Download, Share2, Heart, BookOpen } from 'lucide-react';

// const VideoPlayer = ({ 
//   videoUrl,
//   title = "Spiritual Teaching", 
//   description = "", 
//   instructor = "Path of Unity",
//   thumbnail = "",
//   chapters = [],
//   transcript = "",
//   relatedVideos = [],
//   onVideoEnd = () => {},
//   className = ""
// }) => {
//   const videoRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [duration, setDuration] = useState(0);
//   const [volume, setVolume] = useState(1);
//   const [isMuted, setIsMuted] = useState(false);
//   const [isFullscreen, setIsFullscreen] = useState(false);
//   const [showControls, setShowControls] = useState(true);
//   const [isLoading, setIsLoading] = useState(true);
//   const [showSettings, setShowSettings] = useState(false);
//   const [playbackRate, setPlaybackRate] = useState(1);
//   const [quality, setQuality] = useState('auto');
//   const [showTranscript, setShowTranscript] = useState(false);
//   const [isFavorited, setIsFavorited] = useState(false);
//   const [currentChapter, setCurrentChapter] = useState(0);
  
//   const controlsTimeoutRef = useRef(null);

//   // YouTube video ID extraction
//   const getYouTubeVideoId = (url) => {
//     const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
//     const match = url.match(regExp);
//     return (match && match[2].length === 11) ? match[2] : null;
//   };

//   const isYouTubeVideo = videoUrl?.includes('youtube.com') || videoUrl?.includes('youtu.be');
//   const youtubeVideoId = isYouTubeVideo ? getYouTubeVideoId(videoUrl) : null;

//   useEffect(() => {
//     if (videoRef.current && !isYouTubeVideo) {
//       const video = videoRef.current;
      
//       const handleLoadedMetadata = () => {
//         setDuration(video.duration);
//         setIsLoading(false);
//       };
      
//       const handleTimeUpdate = () => {
//         setCurrentTime(video.currentTime);
        
//         // Update current chapter based on time
//         if (chapters.length > 0) {
//           const chapter = chapters.findIndex((ch, index) => {
//             const nextChapter = chapters[index + 1];
//             return video.currentTime >= ch.time && (!nextChapter || video.currentTime < nextChapter.time);
//           });
//           if (chapter !== -1) setCurrentChapter(chapter);
//         }
//       };

//       const handleEnded = () => {
//         setIsPlaying(false);
//         onVideoEnd();
//       };

//       video.addEventListener('loadedmetadata', handleLoadedMetadata);
//       video.addEventListener('timeupdate', handleTimeUpdate);
//       video.addEventListener('ended', handleEnded);

//       return () => {
//         video.removeEventListener('loadedmetadata', handleLoadedMetadata);
//         video.removeEventListener('timeupdate', handleTimeUpdate);
//         video.removeEventListener('ended', handleEnded);
//       };
//     }
//   }, [videoUrl, chapters, onVideoEnd, isYouTubeVideo]);

//   // Auto-hide controls
//   useEffect(() => {
//     if (showControls && isPlaying) {
//       controlsTimeoutRef.current = setTimeout(() => {
//         setShowControls(false);
//       }, 3000);
//     }
    
//     return () => {
//       if (controlsTimeoutRef.current) {
//         clearTimeout(controlsTimeoutRef.current);
//       }
//     };
//   }, [showControls, isPlaying]);

//   const togglePlay = () => {
//     if (videoRef.current && !isYouTubeVideo) {
//       if (isPlaying) {
//         videoRef.current.pause();
//       } else {
//         videoRef.current.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   const handleProgressClick = (e) => {
//     if (videoRef.current && !isYouTubeVideo) {
//       const rect = e.currentTarget.getBoundingClientRect();
//       const clickX = e.clientX - rect.left;
//       const newTime = (clickX / rect.width) * duration;
//       videoRef.current.currentTime = newTime;
//       setCurrentTime(newTime);
//     }
//   };

//   const handleVolumeChange = (e) => {
//     const newVolume = parseFloat(e.target.value);
//     setVolume(newVolume);
//     setIsMuted(newVolume === 0);
//     if (videoRef.current && !isYouTubeVideo) {
//       videoRef.current.volume = newVolume;
//     }
//   };

//   const toggleMute = () => {
//     if (videoRef.current && !isYouTubeVideo) {
//       const newMuted = !isMuted;
//       setIsMuted(newMuted);
//       videoRef.current.muted = newMuted;
//     }
//   };

//   const toggleFullscreen = () => {
//     if (!document.fullscreenElement) {
//       videoRef.current?.requestFullscreen();
//       setIsFullscreen(true);
//     } else {
//       document.exitFullscreen();
//       setIsFullscreen(false);
//     }
//   };

//   const skipTime = (seconds) => {
//     if (videoRef.current && !isYouTubeVideo) {
//       videoRef.current.currentTime += seconds;
//     }
//   };

//   const changePlaybackRate = (rate) => {
//     setPlaybackRate(rate);
//     if (videoRef.current && !isYouTubeVideo) {
//       videoRef.current.playbackRate = rate;
//     }
//     setShowSettings(false);
//   };

//   const jumpToChapter = (chapterTime) => {
//     if (videoRef.current && !isYouTubeVideo) {
//       videoRef.current.currentTime = chapterTime;
//       setCurrentTime(chapterTime);
//     }
//   };

//   const formatTime = (time) => {
//     const minutes = Math.floor(time / 60);
//     const seconds = Math.floor(time % 60);
//     return `${minutes}:${seconds.toString().padStart(2, '0')}`;
//   };

//   const handleShare = async () => {
//     const shareData = {
//       title: title,
//       text: `Watch this spiritual teaching: ${title}`,
//       url: window.location.href
//     };

//     if (navigator.share) {
//       try {
//         await navigator.share(shareData);
//       } catch (err) {
//         console.log('Error sharing:', err);
//       }
//     } else {
//       navigator.clipboard.writeText(window.location.href);
//       alert('Link copied to clipboard!');
//     }
//   };

//   return (
//     <div className={`relative bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800 rounded-2xl overflow-hidden shadow-2xl border border-blue-200/20 ${className}`}>
//       {/* Video Container */}
//       <div 
//         className="relative aspect-video bg-black rounded-t-2xl overflow-hidden cursor-pointer"
//         onMouseMove={() => setShowControls(true)}
//         onMouseLeave={() => isPlaying && setTimeout(() => setShowControls(false), 1000)}
//         onClick={togglePlay}
//       >
//         {isYouTubeVideo && youtubeVideoId ? (
//           <iframe
//             ref={videoRef}
//             className="w-full h-full"
//             src={videoUrl}
//             title={title}
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           />
//         ) : (
//           <>
//             {/* Placeholder for demo - shows spiritual-themed gradient */}
//             <div className="w-full h-full bg-gradient-to-br from-blue-900 via-indigo-800 to-blue-700 flex items-center justify-center relative overflow-hidden">
//               {/* Decorative elements */}
//               <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-blue-600/20"></div>
//               <div className="absolute top-10 right-10 w-32 h-32 bg-yellow-300/10 rounded-full blur-2xl"></div>
//               <div className="absolute bottom-10 left-10 w-24 h-24 bg-blue-300/15 rounded-full blur-xl"></div>
//               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//                 <div className="text-center">
//                   <div className="text-8xl text-yellow-400/60 mb-4">🕉️</div>
//                   <p className="text-white/80 text-lg font-medium">Spiritual Teaching Video</p>
//                   <p className="text-blue-200/60 text-sm mt-2">Click to begin your journey</p>
//                 </div>
//               </div>
//             </div>
            
//             {/* Hidden video element for demo purposes */}
//             <video
//               ref={videoRef}
//              // className="hidden"
//               poster={thumbnail}
//               onLoadStart={() => setIsLoading(true)}
//               onCanPlay={() => setIsLoading(false)}
//             >
//               <source src={videoUrl} type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           </>
//         )}

//         {/* Loading Overlay */}
//         {isLoading && (
//           <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center backdrop-blur-sm">
//             <div className="text-center">
//               <div className="animate-spin rounded-full h-12 w-12 border-4 border-yellow-400 border-t-transparent mb-4 mx-auto"></div>
//               <p className="text-white/80 text-sm">Loading sacred content...</p>
//             </div>
//           </div>
//         )}

//         {/* Play/Pause Overlay */}
//         {!isYouTubeVideo && (
//           <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//             <div className={`bg-gradient-to-r from-blue-900/80 to-indigo-900/80 backdrop-blur-sm rounded-full p-6 transform transition-all duration-300 border border-yellow-400/30 ${isPlaying ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}>
//               <Play className="h-12 w-12 text-yellow-400 ml-1 drop-shadow-lg" />
//             </div>
//           </div>
//         )}

//         {/* Controls Overlay */}
//         {!isYouTubeVideo && (
//           <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/95 via-blue-900/80 to-transparent p-6 transition-opacity duration-300 backdrop-blur-sm ${showControls ? 'opacity-100' : 'opacity-0'}`}>
//             {/* Progress Bar */}
//             <div className="mb-4">
//               <div 
//                 className="w-full h-2 bg-white/20 rounded-full cursor-pointer relative overflow-hidden backdrop-blur-sm border border-white/10"
//                 onClick={handleProgressClick}
//               >
//                 <div 
//                   className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full transition-all duration-150 shadow-lg"
//                   style={{ width: `${(currentTime / duration) * 100}%` }}
//                 />
//                 {/* Chapter markers */}
//                 {chapters.map((chapter, index) => (
//                   <div
//                     key={index}
//                     className="absolute top-0 w-1 h-full bg-blue-300 opacity-80 shadow-sm"
//                     style={{ left: `${(chapter.time / duration) * 100}%` }}
//                     title={chapter.title}
//                   />
//                 ))}
//               </div>
//             </div>

//             {/* Control Buttons */}
//             <div className="flex items-center justify-between">
//               <div className="flex items-center space-x-4">
//                 <button onClick={() => skipTime(-10)} className="text-white hover:text-yellow-300 transition-colors p-2 rounded-lg hover:bg-white/10">
//                   <SkipBack className="h-6 w-6" />
//                 </button>
                
//                 <button onClick={togglePlay} className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 rounded-full p-3 transition-all shadow-lg border border-yellow-400/50">
//                   {isPlaying ? <Pause className="h-6 w-6 text-blue-900" /> : <Play className="h-6 w-6 text-blue-900 ml-1" />}
//                 </button>
                
//                 <button onClick={() => skipTime(10)} className="text-white hover:text-yellow-300 transition-colors p-2 rounded-lg hover:bg-white/10">
//                   <SkipForward className="h-6 w-6" />
//                 </button>

//                 <div className="flex items-center space-x-2">
//                   <button onClick={toggleMute} className="text-white hover:text-yellow-300 transition-colors p-2 rounded-lg hover:bg-white/10">
//                     {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
//                   </button>
//                   <input
//                     type="range"
//                     min="0"
//                     max="1"
//                     step="0.1"
//                     value={isMuted ? 0 : volume}
//                     onChange={handleVolumeChange}
//                     className="w-20 accent-yellow-400"
//                   />
//                 </div>

//                 <span className="text-white text-sm bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
//                   {formatTime(currentTime)} / {formatTime(duration)}
//                 </span>
//               </div>

//               <div className="flex items-center space-x-2">
//                 <div className="relative">
//                   <button 
//                     onClick={() => setShowSettings(!showSettings)}
//                     className="text-white hover:text-yellow-300 transition-colors p-2 rounded-lg hover:bg-white/10"
//                   >
//                     <Settings className="h-5 w-5" />
//                   </button>
                  
//                   {showSettings && (
//                     <div className="absolute bottom-full right-0 mb-2 bg-gradient-to-br from-blue-900/95 to-indigo-900/95 backdrop-blur-sm rounded-lg p-4 min-w-48 border border-blue-300/20 shadow-xl">
//                       <div className="mb-3">
//                         <h4 className="text-white text-sm font-semibold mb-2 flex items-center">
//                           <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
//                           Playback Speed
//                         </h4>
//                         <div className="space-y-1">
//                           {[0.5, 0.75, 1, 1.25, 1.5, 2].map(rate => (
//                             <button
//                               key={rate}
//                               onClick={() => changePlaybackRate(rate)}
//                               className={`block w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
//                                 playbackRate === rate 
//                                   ? 'text-yellow-300 bg-yellow-500/20 border border-yellow-400/30' 
//                                   : 'text-white hover:bg-blue-800/50'
//                               }`}
//                             >
//                               {rate}x {rate === 1 && '(Normal)'}
//                             </button>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </div>

//                 <button onClick={toggleFullscreen} className="text-white hover:text-yellow-300 transition-colors p-2 rounded-lg hover:bg-white/10">
//                   {isFullscreen ? <Minimize className="h-5 w-5" /> : <Maximize className="h-5 w-5" />}
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Video Information */}
//       <div className="p-6 bg-gradient-to-r from-blue-800/30 to-indigo-800/30 backdrop-blur-sm border-t border-blue-300/20">
//         <div className="flex justify-between items-start mb-4">
//           <div className="flex-1">
//             <h2 className="text-2xl font-bold text-white mb-2 leading-tight">{title}</h2>
//             <p className="text-yellow-200 mb-2 font-medium">Taught by {instructor}</p>
//             {description && <p className="text-blue-100 text-sm leading-relaxed">{description}</p>}
//           </div>
          
//           <div className="flex items-center space-x-3 ml-4">
//             <button
//               onClick={() => setIsFavorited(!isFavorited)}
//               className={`p-3 rounded-full transition-all transform hover:scale-110 ${
//                 isFavorited 
//                   ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg' 
//                   : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm border border-white/20'
//               }`}
//             >
//               <Heart className={`h-5 w-5 ${isFavorited ? 'fill-current' : ''}`} />
//             </button>
            
//             <button onClick={handleShare} className="p-3 bg-white/20 hover:bg-white/30 rounded-full text-white transition-all backdrop-blur-sm border border-white/20 transform hover:scale-110">
//               <Share2 className="h-5 w-5" />
//             </button>
            
//             <button className="p-3 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 hover:from-yellow-500/30 hover:to-yellow-600/30 rounded-full text-yellow-200 transition-all backdrop-blur-sm border border-yellow-400/30 transform hover:scale-110">
//               <Download className="h-5 w-5" />
//             </button>
//           </div>
//         </div>

//         {/* Chapters */}
//         {chapters.length > 0 && (
//           <div className="mb-6">
//             <h3 className="text-white font-semibold mb-3 flex items-center">
//               <BookOpen className="h-5 w-5 mr-2 text-yellow-400" />
//               Sacred Chapters
//             </h3>
//             <div className="space-y-2 max-h-40 overflow-y-auto">
//               {chapters.map((chapter, index) => (
//                 <button
//                   key={index}
//                   onClick={() => jumpToChapter(chapter.time)}
//                   className={`w-full text-left p-4 rounded-lg transition-all transform hover:scale-[1.02] ${
//                     currentChapter === index 
//                       ? 'bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 text-white border border-yellow-400/30 shadow-lg' 
//                       : 'bg-white/10 text-blue-100 hover:bg-white/20 backdrop-blur-sm border border-white/10'
//                   }`}
//                 >
//                   <div className="flex justify-between items-center">
//                     <span className="font-medium">{chapter.title}</span>
//                     <span className="text-sm opacity-70 bg-black/20 px-2 py-1 rounded-full">
//                       {formatTime(chapter.time)}
//                     </span>
//                   </div>
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Transcript Toggle */}
//         {transcript && (
//           <div className="mb-4">
//             <button
//               onClick={() => setShowTranscript(!showTranscript)}
//               className="text-yellow-300 hover:text-yellow-200 transition-colors text-sm font-medium flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 hover:bg-white/20"
//             >
//               <BookOpen className="h-4 w-4" />
//               {showTranscript ? 'Hide' : 'Show'} Sacred Transcript
//             </button>
            
//             {showTranscript && (
//               <div className="mt-3 p-4 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-lg max-h-40 overflow-y-auto backdrop-blur-sm border border-blue-300/20">
//                 <p className="text-blue-100 text-sm leading-relaxed">{transcript}</p>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };
// export default VideoPlayer;
