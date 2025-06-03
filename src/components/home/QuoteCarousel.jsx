import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Heart, Share2, Bookmark, Quote, Sparkles, Star } from 'lucide-react';

const QuoteCarousel = ({ quotes = [] }) => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);

  // Default quotes in case data isn't loaded
  const defaultQuotes = [
    {
      id: 1,
      text: "Love is the bridge between you and everything",
      author: "Rumi",
      tradition: "Universal",
      category: "Love",
      backgroundColor: "from-love-rose/20 to-divine-gold/20"
    },
    {
      id: 2,
      text: "Be still and know that I am God",
      author: "Psalm 46:10",
      tradition: "Christian",
      category: "Peace",
      backgroundColor: "from-peace-blue/20 to-unity-purple/20"
    },
    {
      id: 3,
      text: "The whole universe is your home, and all living beings are your family",
      author: "Atharva Veda",
      tradition: "Hindu",
      category: "Unity",
      backgroundColor: "from-earth-green/20 to-divine-gold/20"
    },
    {
      id: 4,
      text: "Let us love one another, for love comes from God",
      author: "1 John 4:7",
      tradition: "Christian",
      category: "Love",
      backgroundColor: "from-love-rose/20 to-peace-blue/20"
    },
    {
      id: 5,
      text: "Where there is dharma, there is victory",
      author: "Bhagavad Gita",
      tradition: "Hindu",
      category: "Wisdom",
      backgroundColor: "from-unity-purple/20 to-earth-green/20"
    }
  ];

  const quotesToShow = quotes.length > 0 ? quotes : defaultQuotes;

  // Auto-rotation effect
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentQuote((prev) => (prev + 1) % quotesToShow.length);
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [quotesToShow.length, isPaused]);

  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % quotesToShow.length);
  };

  const prevQuote = () => {
    setCurrentQuote((prev) => (prev - 1 + quotesToShow.length) % quotesToShow.length);
  };

  const toggleFavorite = (quoteId) => {
    setFavorites(prev => 
      prev.includes(quoteId) 
        ? prev.filter(id => id !== quoteId)
        : [...prev, quoteId]
    );
  };

  const shareQuote = async (quote) => {
    const shareText = `"${quote.text}" - ${quote.author}`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Path of Unity - Spiritual Wisdom',
          text: shareText,
          url: window.location.href
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(shareText);
      // You could add a toast notification here
    }
  };

  const currentQuoteData = quotesToShow[currentQuote];

  const FloatingWisdom = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-peaceful-float opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${5 + Math.random() * 3}s`
          }}
        >
          {i % 2 === 0 ? (
            <Quote className="w-6 h-6 text-divine-gold" />
          ) : (
            <Star className="w-4 h-4 text-unity-purple" />
          )}
        </div>
      ))}
    </div>
  );

  if (!currentQuoteData) return null;

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-white via-soft-cream/30 to-peace-blue/5"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Floating Wisdom Elements */}
      <FloatingWisdom />
      
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div 
          className={`w-full h-full transition-all duration-1000 bg-gradient-to-br ${currentQuoteData.backgroundColor || 'from-divine-gold/10 to-unity-purple/10'}`}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className={`text-center mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-divine-gold" />
            <span className="text-divine-gold font-semibold uppercase tracking-wider text-sm">
              Timeless Wisdom
            </span>
            <Sparkles className="w-5 h-5 text-divine-gold" />
          </div>
          
          <h2 className="font-spiritual text-3xl md:text-4xl font-bold text-deep-navy mb-4">
            Sacred Words from{' '}
            <span className="bg-gradient-to-r from-love-rose to-unity-purple bg-clip-text text-transparent">
              All Traditions
            </span>
          </h2>
        </div>

        {/* Main Quote Display */}
        <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/50 relative overflow-hidden">
            
            {/* Decorative Quote Marks */}
            <div className="absolute top-4 left-4 opacity-20">
              <Quote className="w-12 h-12 text-divine-gold transform rotate-180" />
            </div>
            <div className="absolute bottom-4 right-4 opacity-20">
              <Quote className="w-12 h-12 text-divine-gold" />
            </div>

            {/* Quote Content */}
            <div className="relative text-center">
              
              {/* Tradition Badge */}
              <div className="inline-flex items-center gap-2 mb-6">
                <div className={`px-4 py-2 rounded-full text-sm font-medium ${
                  currentQuoteData.tradition === 'Christian' ? 'bg-love-rose/20 text-love-rose border border-love-rose/30' :
                  currentQuoteData.tradition === 'Hindu' ? 'bg-earth-green/20 text-earth-green border border-earth-green/30' :
                  'bg-unity-purple/20 text-unity-purple border border-unity-purple/30'
                }`}>
                  {currentQuoteData.tradition} Wisdom
                </div>
              </div>

              {/* Quote Text */}
              <blockquote className="font-spiritual text-2xl md:text-3xl lg:text-4xl font-light text-deep-navy mb-8 leading-relaxed italic">
                "{currentQuoteData.text}"
              </blockquote>

              {/* Author */}
              <p className="text-lg md:text-xl text-deep-navy/70 mb-8 font-medium">
                — {currentQuoteData.author}
              </p>

              {/* Action Buttons */}
              <div className="flex justify-center items-center gap-4">
                <button
                  onClick={() => toggleFavorite(currentQuoteData.id)}
                  className={`p-3 rounded-full transition-all duration-300 ${
                    favorites.includes(currentQuoteData.id)
                      ? 'bg-love-rose text-white shadow-lg scale-110'
                      : 'bg-white/50 text-deep-navy hover:bg-love-rose/20 hover:text-love-rose'
                  }`}
                  title="Add to Favorites"
                >
                  <Heart className={`w-5 h-5 ${favorites.includes(currentQuoteData.id) ? 'fill-current' : ''}`} />
                </button>

                <button
                  onClick={() => shareQuote(currentQuoteData)}
                  className="p-3 rounded-full bg-white/50 text-deep-navy hover:bg-peace-blue/20 hover:text-peace-blue transition-all duration-300"
                  title="Share Quote"
                >
                  <Share2 className="w-5 h-5" />
                </button>

                <button
                  className="p-3 rounded-full bg-white/50 text-deep-navy hover:bg-divine-gold/20 hover:text-divine-gold transition-all duration-300"
                  title="Save Quote"
                >
                  <Bookmark className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className={`flex justify-center items-center mt-12 gap-8 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          
          {/* Previous Button */}
          <button
            onClick={prevQuote}
            className="group p-4 bg-white/50 backdrop-blur-sm rounded-full hover:bg-white/80 transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <ChevronLeft className="w-6 h-6 text-deep-navy group-hover:text-unity-purple transition-colors duration-300" />
          </button>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {quotesToShow.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuote(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentQuote 
                    ? 'bg-unity-purple scale-125' 
                    : 'bg-deep-navy/30 hover:bg-deep-navy/50'
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextQuote}
            className="group p-4 bg-white/50 backdrop-blur-sm rounded-full hover:bg-white/80 transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <ChevronRight className="w-6 h-6 text-deep-navy group-hover:text-unity-purple transition-colors duration-300" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mt-8 max-w-md mx-auto">
          <div className="h-1 bg-white/30 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-divine-gold to-unity-purple transition-all duration-300"
              style={{ width: `${((currentQuote + 1) / quotesToShow.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteCarousel;