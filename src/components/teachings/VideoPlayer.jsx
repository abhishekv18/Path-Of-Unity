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