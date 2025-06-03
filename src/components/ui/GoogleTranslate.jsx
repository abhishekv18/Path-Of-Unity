// src/components/ui/GoogleTranslate.jsx
import React, { useEffect, useState, useRef } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';

const GoogleTranslate = ({ className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('English');
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
   const[isMobile, setIsMobile] = useState(false);
  const translateElementRef = useRef(null);
 
  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'ko', name: '한국어', flag: '🇰🇷' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'th', name: 'ไทย', flag: '🇹🇭' },
    { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
    { code: 'ta', name: 'தமிழ்', flag: '🇮🇳' },
    { code: 'te', name: 'తెలుగు', flag: '🇮🇳' },
    { code: 'bn', name: 'বাংলা', flag: '🇧🇩' },
    { code: 'gu', name: 'ગુજરાતી', flag: '🇮🇳' },
    { code: 'mr', name: 'मराठी', flag: '🇮🇳' },
    { code: 'pa', name: 'ਪੰਜਾਬੀ', flag: '🇮🇳' },
    { code: 'ur', name: 'اردو', flag: '🇵🇰' },
    { code: 'ne', name: 'नेपाली', flag: '🇳🇵' },
  ];

  useEffect(() => {
    let timeoutId;

    // Function to hide Google Translate elements
    const hideGoogleTranslateElements = () => {
      // Hide the top banner
      const banners = document.querySelectorAll('.goog-te-banner-frame, .goog-te-banner-frame.skiptranslate');
      banners.forEach(banner => {
        banner.style.display = 'none';
        banner.style.visibility = 'hidden';
      });

      // Reset body positioning
      if (document.body) {
        document.body.style.top = '0px';
        document.body.style.position = 'static';
      }

      // Hide other Google Translate UI elements
      const elementsToHide = [
        '.goog-te-spinner-pos',
        '.goog-tooltip',
        '#goog-gt-tt'
      ];
      
      elementsToHide.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
          el.style.display = 'none';
        });
      });
    };

    // Initialize Google Translate
    const initializeGoogleTranslate = () => {
      if (window.google && window.google.translate) {
        try {
          new window.google.translate.TranslateElement({
            pageLanguage: 'en',
            includedLanguages: languages.map(lang => lang.code).join(','),
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
            multilanguagePage: true,
            gaTrack: false,
            gaId: null
          }, 'google_translate_element');

          setIsScriptLoaded(true);
          
          // Hide elements after a short delay
          timeoutId = setTimeout(() => {
            hideGoogleTranslateElements();
          }, 500);

        } catch (error) {
          console.log('Google Translate initialization error:', error);
        }
      }
    };

    // Load Google Translate script
    const loadGoogleTranslateScript = () => {
      // Check if script already exists
      if (document.getElementById('google-translate-script')) {
        if (window.google && window.google.translate) {
          initializeGoogleTranslate();
        }
        return;
      }

      // Create and load the script
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.type = 'text/javascript';
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      script.defer = true;

      // Set up the callback function
      window.googleTranslateElementInit = initializeGoogleTranslate;

      script.onload = () => {
        console.log('Google Translate script loaded');
      };

      script.onerror = () => {
        console.error('Failed to load Google Translate script');
      };

      document.head.appendChild(script);
    };

    loadGoogleTranslateScript();

    // Set up mutation observer to hide translate elements
    const observer = new MutationObserver((mutations) => {
      let shouldHide = false;
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length > 0) {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === 1) { // Element node
              if (node.classList && (
                node.classList.contains('goog-te-banner-frame') ||
                node.classList.contains('skiptranslate') ||
                node.id === 'goog-gt-tt'
              )) {
                shouldHide = true;
              }
            }
          });
        }
      });
      
      if (shouldHide) {
        setTimeout(hideGoogleTranslateElements, 100);
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Cleanup
    return () => {
      observer.disconnect();
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const translatePage = (langCode, langName) => {
    if (!isScriptLoaded) {
      console.log('Google Translate not ready yet');
      return;
    }

    try {
      // Method 1: Try to find and trigger the select element
      const selectElement = document.querySelector('.goog-te-combo');
      if (selectElement) {
        selectElement.value = langCode;
        selectElement.dispatchEvent(new Event('change', { bubbles: true }));
        setCurrentLang(langName);
        setIsOpen(false);
        return;
      }

      // Method 2: Try to trigger translation using Google Translate API directly
      if (window.google && window.google.translate && window.google.translate.TranslateElement) {
        // Force refresh of the translate element
        const element = document.getElementById('google_translate_element');
        if (element) {
          element.innerHTML = '';
          setTimeout(() => {
            new window.google.translate.TranslateElement({
              pageLanguage: 'en',
              includedLanguages: languages.map(lang => lang.code).join(','),
              layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
              autoDisplay: false,
              multilanguagePage: true
            }, 'google_translate_element');

            setTimeout(() => {
              const newSelectElement = document.querySelector('.goog-te-combo');
              if (newSelectElement) {
                newSelectElement.value = langCode;
                newSelectElement.dispatchEvent(new Event('change', { bubbles: true }));
                setCurrentLang(langName);
                setIsOpen(false);
              }
            }, 1000);
          }, 100);
        }
      }

      // Method 3: Try using cookie method (fallback)
      if (langCode !== 'en') {
        document.cookie = `googtrans=/en/${langCode}; domain=${window.location.hostname}; path=/`;
        window.location.reload();
      } else {
        // Reset to English
        document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; domain=${window.location.hostname}; path=/`;
        window.location.reload();
      }

    } catch (error) {
      console.error('Translation error:', error);
      // Fallback: reload with cookie
      if (langCode !== 'en') {
        document.cookie = `googtrans=/en/${langCode}; domain=${window.location.hostname}; path=/`;
      } else {
        document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; domain=${window.location.hostname}; path=/`;
      }
      window.location.reload();
    }
  };

  // Check for existing translation on load
  useEffect(() => {
    const checkExistingTranslation = () => {
      const cookies = document.cookie.split(';');
      const googleTransCookie = cookies.find(cookie => 
        cookie.trim().startsWith('googtrans=')
      );
      
      if (googleTransCookie) {
        const langCode = googleTransCookie.split('/')[2];
        const language = languages.find(lang => lang.code === langCode);
        if (language) {
          setCurrentLang(language.name);
        }
      }
    };

    checkExistingTranslation();
  }, []);
 return (
    <div className={`relative ${className}`}>
      {/* Hidden Google Translate Element */}
      <div 
        id="google_translate_element" 
        ref={translateElementRef}
        style={{ 
          position: 'absolute', 
          left: '-9999px', 
          visibility: 'hidden',
          opacity: 0,
          height: 0,
          overflow: 'hidden',
          pointerEvents: 'none'
        }}
      />

      {/* Custom Language Selector */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`
            flex items-center space-x-2 px-3 py-2 rounded-lg
            bg-white/80 backdrop-blur-sm border border-gray-200
            hover:bg-white hover:shadow-sm transition-all duration-200
            text-gray-800 hover:text-gray-900
            dark:bg-gray-800/80 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-700
            ${isOpen ? 'bg-white shadow-sm dark:bg-gray-700' : ''}
          `}
          title="Select Language"
          aria-label="Language selector"
          aria-expanded={isOpen}
        >
          <Globe className="w-4 h-4 text-current" />
          <span className="text-sm font-medium hidden sm:inline">
            {currentLang}
          </span>
          <ChevronDown className={`
            w-4 h-4 transition-transform duration-200 text-current
            ${isOpen ? 'rotate-180' : ''}
          `} />
        </button>

        {/* Language Dropdown */}
        {isOpen && (
          <>
            {/* Backdrop - Only show on mobile */}
            <div 
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden" 
              onClick={() => setIsOpen(false)}
            />
            
            {/* Dropdown - Narrower on mobile */}
            <div className={`
              absolute right-0 mt-2 w-56 rounded-xl shadow-xl
              bg-white/95 backdrop-blur-lg border border-gray-200
              max-h-[70vh] overflow-y-auto z-50
              dark:bg-gray-800/95 dark:border-gray-700
              ${isMobile ? 'fixed inset-x-4 bottom-4 w-[calc(100vw-2rem)] max-w-xs mx-auto' : ''}
            `}>
              <div className="sticky top-0 px-4 py-3 bg-white/80 backdrop-blur-sm border-b border-gray-200 dark:bg-gray-800/80 dark:border-gray-700">
                <div className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                  Select Language
                </div>
              </div>
              <div className="py-1">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => translatePage(lang.code, lang.name)}
                    className={`
                      w-full px-4 py-3 text-left transition-colors duration-150
                      flex items-center space-x-3 text-sm
                      hover:bg-purple-50 hover:text-purple-700
                      dark:hover:bg-gray-700/80 dark:hover:text-purple-300
                      ${currentLang === lang.name 
                        ? 'bg-purple-50 text-purple-700 font-medium dark:bg-gray-700/50 dark:text-purple-300' 
                        : 'text-gray-700 dark:text-gray-300'
                      }
                    `}
                    aria-current={currentLang === lang.name ? 'true' : 'false'}
                  >
                    <span className="text-lg flex-shrink-0">{lang.flag}</span>
                    <span className="truncate">{lang.name}</span>
                    {currentLang === lang.name && (
                      <span className="ml-auto text-purple-600 dark:text-purple-400">
                        <Check className="w-4 h-4" />
                      </span>
                    )}
                  </button>
                ))}
              </div>
              
              {/* Mobile close button */}
              {isMobile && (
                <div className="sticky bottom-0 p-2 bg-white/80 backdrop-blur-sm border-t border-gray-200 dark:bg-gray-800/80 dark:border-gray-700">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-full py-2 px-4 rounded-lg bg-gray-100 text-gray-800 text-sm font-medium hover:bg-gray-200 transition-colors dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );

// return (
//   <div className={`relative ${className}`}>
//     {/* Hidden Google Translate Element */}
//     <div 
//       id="google_translate_element" 
//       ref={translateElementRef}
//       style={{ 
//         position: 'absolute', 
//         left: '-9999px', 
//         visibility: 'hidden',
//         opacity: 0,
//         height: 0,
//         overflow: 'hidden',
//         pointerEvents: 'none'
//       }}
//     />

//     {/* Custom Language Selector */}
//     <div className="relative">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className={`
//           flex items-center space-x-2 px-3 py-2 rounded-lg
//           bg-white/80 backdrop-blur-sm border border-gray-200
//           hover:bg-white hover:shadow-sm transition-all duration-200
//           text-gray-800 hover:text-gray-900
//           dark:bg-gray-800/80 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-700
//           ${isOpen ? 'bg-white shadow-sm dark:bg-gray-700' : ''}
//         `}
//         title="Select Language"
//         aria-label="Language selector"
//         aria-expanded={isOpen}
//       >
//         <Globe className="w-4 h-4 text-current" />
//         <span className="text-sm font-medium hidden sm:inline">
//           {currentLang}
//         </span>
//         <ChevronDown className={`
//           w-4 h-4 transition-transform duration-200 text-current
//           ${isOpen ? 'rotate-180' : ''}
//         `} />
//       </button>

//       {/* Language Dropdown */}
//       {isOpen && (
//         <>
//           {/* Backdrop - Only show on mobile */}
//           <div 
//             className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden" 
//             onClick={() => setIsOpen(false)}
//           />
          
//           {/* Dropdown */}
//           <div className={`
//             absolute right-0 mt-2 w-56 rounded-xl shadow-xl
//             bg-white/95 backdrop-blur-lg border border-gray-200
//             max-h-[70vh] overflow-y-auto z-50
//             dark:bg-gray-800/95 dark:border-gray-700
//             ${isMobile ? 'fixed inset-x-3 bottom-4 w-[calc(90vw-2rem)] max-w-xs mx-auto' : ''}
//           `}>
//             <div className="sticky top-0 px-4 py-3 bg-white/80 backdrop-blur-sm border-b border-gray-200 dark:bg-gray-800/80 dark:border-gray-700">
//               <div className="text-sm font-semibold text-gray-600 dark:text-gray-300">
//                 Select Language
//               </div>
//             </div>
//             <div className="py-1">
//               {languages.map((lang) => (
//                 <button
//                   key={lang.code}
//                   onClick={() => translatePage(lang.code, lang.name)}
//                   className={`
//                     w-full px-4 py-3 text-left transition-colors duration-150
//                     flex items-center space-x-3 text-sm
//                     hover:bg-purple-50 hover:text-purple-700
//                     dark:hover:bg-gray-700/80 dark:hover:text-purple-300
//                     ${currentLang === lang.name 
//                       ? 'bg-purple-50 text-purple-700 font-medium dark:bg-gray-700/50 dark:text-purple-300' 
//                       : 'text-gray-700 dark:text-gray-300'
//                     }
//                   `}
//                   aria-current={currentLang === lang.name ? 'true' : 'false'}
//                 >
//                   <span className="text-lg flex-shrink-0">{lang.flag}</span>
//                   <span className="truncate">{lang.name}</span>
//                   {currentLang === lang.name && (
//                     <span className="ml-auto text-purple-600 dark:text-purple-400">
//                       <Check className="w-4 h-4" />
//                     </span>
//                   )}
//                 </button>
//               ))}
//             </div>
            
//             {/* Mobile close button */}
//             {isMobile && (
//               <div className="sticky bottom-0 p-2 bg-white/80 backdrop-blur-sm border-t border-gray-200 dark:bg-gray-800/80 dark:border-gray-700">
//                 <button
//                   onClick={() => setIsOpen(false)}
//                   className="w-full py-2 px-4 rounded-lg bg-gray-100 text-gray-800 text-sm font-medium hover:bg-gray-200 transition-colors dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
//                 >
//                   Close
//                 </button>
//               </div>
//             )}
//           </div>
//         </>
//       )}
//     </div>
//   </div>
// );
};

export default GoogleTranslate;