

// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Menu, X, Heart, Flame, BookOpen, Calendar, Phone, Home, Globe, UserPlus } from 'lucide-react';
// import GoogleTranslate from '../ui/GoogleTranslate';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isFullScreenMenuOpen, setIsFullScreenMenuOpen] = useState(false);
//   const location = useLocation();

//   // Handle scroll effect for header background
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Close menus when route changes
//   useEffect(() => {
//     setIsMenuOpen(false);
//     setIsFullScreenMenuOpen(false);
//   }, [location]);

//   const navigationItems = [
//     { name: 'Home', href: '/', icon: Home },
//     { name: 'About', href: '/about', icon: Heart },
//     { name: 'Teachings', href: '/teachings', icon: BookOpen },
//     { name: 'Prayer Wall', href: '/prayers', icon: Flame },
//     { name: 'Events', href: '/events', icon: Calendar },
//     { name: 'Contact', href: '/contact', icon: Phone },
//   ];

//   const isActivePath = (path) => {
//     return location.pathname === path;
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//     // Close full screen menu if open
//     if (isFullScreenMenuOpen) setIsFullScreenMenuOpen(false);
//   };

//   const toggleFullScreenMenu = () => {
//     setIsFullScreenMenuOpen(!isFullScreenMenuOpen);
//     // Close regular menu if open
//     if (isMenuOpen) setIsMenuOpen(false);
//   };

//   // Remove Google Translate banner
//   useEffect(() => {
//     function removeGoogleTranslateBar() {
//       const selectors = [
//         '.goog-te-banner-frame',
//         'iframe.goog-te-banner-frame', 
//         'iframe[name="goog-te-banner-frame"]',
//         '.skiptranslate.goog-te-banner-frame'
//       ];
      
//       selectors.forEach(selector => {
//         const elements = document.querySelectorAll(selector);
//         elements.forEach(element => element.remove());
//       });
      
//       document.body.style.top = '0';
//       document.body.style.marginTop = '0';
//       document.body.style.position = 'static';
//     }
    
//     removeGoogleTranslateBar();
//     const interval = setInterval(removeGoogleTranslateBar, 1000);
    
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//   isScrolled 
//     ? 'bg-transparent backdrop-blur-md shadow-lg border-b border-white/10' 
//     : 'bg-transparent'
// }`}>
//         {/* Spiritual glow effect */}
//         <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-indigo-500/5 to-purple-500/5 opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
        
//         <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16 md:h-20">
//             {/* Logo Section */}
//             <Link to="/" className="flex items-center space-x-3 group z-50">
//               <div className="flex items-center space-x-3">
//                 <div className="relative">
//                   {/* Divine aura around logo */}
//                   <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-400 opacity-20 animate-pulse scale-150 blur-md"></div>
//                   <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-300 to-indigo-300 opacity-30 animate-ping"></div>
                  
//                   <img 
//                     src="/images/WhatsApp Image 2025-06-01 at 16.15.50_f639350b.jpg" 
//                     alt="International Laity Association Logo" 
//                     className="relative w-10 h-10 md:w-12 md:h-12 object-contain group-hover:scale-110 transition-transform duration-500 rounded-full shadow-lg"
//                   />
                  
//                   {/* Sacred light dots */}
//                   <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full animate-pulse shadow-lg"></div>
//                   <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-gradient-to-r from-indigo-300 to-purple-300 rounded-full animate-pulse delay-500"></div>
//                 </div>
                
//                 <div className="hidden sm:block">
//                   <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-800 via-indigo-600 to-purple-700 bg-clip-text text-transparent group-hover:from-purple-700 group-hover:via-indigo-500 group-hover:to-purple-600 transition-all duration-500">
//                     International Laity Association
//                   </h1>
//                   <p className="text-xs bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent font-medium tracking-wide">
//                     Unity Through Faith & Service
//                   </p>
//                 </div>
//               </div>
//             </Link>

//             {/* Desktop Navigation */}
//             <div className="hidden md:flex items-center space-x-2">
//               {navigationItems.slice(1).map((item, index) => {
//                 const IconComponent = item.icon;
//                 const isActive = isActivePath(item.href);
//                 return (
//                   <Link
//                     key={item.name}
//                     to={item.href}
//                     className={`group relative px-5 py-3 rounded-2xl transition-all duration-500 hover:shadow-lg ${
//                       isActive 
//                         ? 'bg-gradient-to-r from-purple-100 via-indigo-50 to-purple-100 shadow-inner border border-purple-200/50' 
//                         : 'hover:bg-gradient-to-r hover:from-purple-50 hover:via-indigo-25 hover:to-purple-50 hover:shadow-md'
//                     }`}
//                     style={{ animationDelay: `${index * 100}ms` }}
//                   >
//                     <div className="flex items-center space-x-2 relative z-10">
//                       <IconComponent className={`w-4 h-4 transition-all duration-500 ${
//                         isActive 
//                           ? 'text-purple-700 drop-shadow-sm scale-110' 
//                           : 'text-gray-600 group-hover:text-purple-600 group-hover:scale-110 group-hover:drop-shadow-sm'
//                       }`} />
//                       <span className={`text-sm font-medium transition-all duration-500 ${
//                         isActive 
//                           ? 'text-purple-800 font-semibold' 
//                           : 'text-gray-700 group-hover:text-purple-700 group-hover:font-semibold'
//                       }`}>
//                         {item.name}
//                       </span>
//                     </div>
                    
//                     {/* Sacred underline effect */}
//                     <div className={`absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500 rounded-full transition-all duration-500 ${
//                       isActive 
//                         ? 'w-full left-0 shadow-lg' 
//                         : 'w-0 group-hover:w-full group-hover:left-0 group-hover:shadow-md'
//                     }`}></div>
                    
//                     {/* Divine glow on hover */}
//                     <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400/10 via-indigo-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                   </Link>
//                 );
//               })}
//             </div>

//             {/* Desktop Utility Buttons */}
//             <div className="hidden md:flex items-center space-x-3">
//               <button 
//                 onClick={toggleFullScreenMenu}
//                 className="p-3 rounded-2xl bg-gradient-to-r from-purple-100/80 to-indigo-100/80 backdrop-blur-md hover:from-purple-200/80 hover:to-indigo-200/80 transition-all duration-500 shadow-lg flex items-center justify-center"
//                 aria-label="Language selector"
//               >
//                 <Globe className="w-5 h-5 text-purple-700" />
//               </button>
              
            
//             </div>

//             {/* Mobile Menu Button */}
//             <div className="md:hidden flex items-center space-x-3">
//               <button 
//                 onClick={toggleFullScreenMenu}
//                 className="p-2.5 rounded-2xl bg-gradient-to-r from-purple-100/80 to-indigo-100/80 backdrop-blur-md hover:from-purple-200/80 hover:to-indigo-200/80 transition-all duration-500 shadow-lg"
//                 aria-label="Language selector"
//               >
//                 <Globe className="w-5 h-5 text-purple-700" />
//               </button>
              
//               <button
//                 onClick={toggleMenu}
//                 className="p-3 rounded-2xl bg-gradient-to-r from-purple-100/80 to-indigo-100/80 backdrop-blur-md hover:from-purple-200/80 hover:to-indigo-200/80 transition-all duration-500 shadow-lg"
//                 aria-label="Menu"
//               >
//                 {isMenuOpen ? (
//                   <X className="w-6 h-6 text-purple-700" />
//                 ) : (
//                   <Menu className="w-6 h-6 text-purple-700" />
//                 )}
//               </button>
//             </div>
//           </div>

//           {/* Mobile Navigation Menu (Dropdown) */}
//           <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
//             isMenuOpen 
//               ? 'max-h-screen opacity-100 py-4' 
//               : 'max-h-0 opacity-0'
//           }`}>
//             <div className="relative bg-gradient-to-br from-white/95 via-purple-50/95 to-indigo-50/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-purple-200/30 p-6 space-y-3">
//               {navigationItems.map((item, index) => {
//                 const IconComponent = item.icon;
//                 const isActive = isActivePath(item.href);
//                 return (
//                   <Link
//                     key={item.name}
//                     to={item.href}
//                     className={`relative flex items-center space-x-4 p-4 rounded-2xl transition-all duration-300 group ${
//                       isActive 
//                         ? 'bg-gradient-to-r from-purple-100 via-indigo-50 to-purple-100 shadow-lg border border-purple-200/50' 
//                         : 'hover:bg-gradient-to-r hover:from-purple-50 hover:to-indigo-50 hover:shadow-md'
//                     }`}
//                   >
//                     <div className={`p-2 rounded-xl transition-all duration-300 ${
//                       isActive 
//                         ? 'bg-gradient-to-r from-purple-200 to-indigo-200 shadow-inner' 
//                         : 'group-hover:bg-gradient-to-r group-hover:from-purple-100 group-hover:to-indigo-100'
//                     }`}>
//                       <IconComponent className={`w-5 h-5 transition-all duration-300 ${
//                         isActive 
//                           ? 'text-purple-700 scale-110' 
//                           : 'text-purple-600 group-hover:text-purple-700 group-hover:scale-110'
//                       }`} />
//                     </div>
//                     <span className={`font-medium transition-all duration-300 ${
//                       isActive 
//                         ? 'text-purple-800 font-semibold' 
//                         : 'text-gray-700 group-hover:text-purple-700 group-hover:font-semibold'
//                     }`}>
//                       {item.name}
//                     </span>
                    
//                     {isActive && (
//                       <div className="absolute right-4 w-2 h-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full animate-pulse"></div>
//                     )}
//                   </Link>
//                 );
//               })}
              
//               {/* Mobile CTA Button */}
//               <div className="pt-4 mt-4 border-t border-purple-200">
//                 <button 
//                   onClick={() => window.location.href = '/contact'}
//                   className="relative group w-full py-4 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 overflow-hidden"
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
//                   <span className="relative z-10 flex items-center justify-center space-x-2">
//                     <UserPlus className="w-5 h-5" />
//                     <span>Join Our Community</span>
//                   </span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </nav>
//       </header>

//       {/* Full Screen Menu */}
//       <div className={`fixed inset-0 z-50 bg-gradient-to-br from-white to-purple-50 transition-all duration-300 ease-in-out ${
//         isFullScreenMenuOpen 
//           ? 'opacity-100 pointer-events-auto' 
//           : 'opacity-0 pointer-events-none'
//       }`}>
//         <div className="relative h-full w-full flex flex-col items-center justify-center p-6 overflow-y-auto">
//           {/* Close Button */}
//           <button 
//             onClick={toggleFullScreenMenu}
//             className="absolute top-6 right-6 p-3 rounded-full bg-gradient-to-r from-purple-100 to-indigo-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
//             aria-label="Close menu"
//           >
//             <X className="w-6 h-6 text-purple-700" />
//           </button>
          
//           {/* Logo */}
//           <div className="mb-8 sm:mb-12 flex flex-col items-center">
//             <div className="relative mb-4">
//               <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-400 opacity-20 animate-pulse scale-150 blur-md"></div>
//               <img 
//                 src="/images/WhatsApp Image 2025-06-01 at 16.15.50_f639350b.jpg" 
//                 alt="Logo" 
//                 className="relative w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-full shadow-xl"
//               />
//             </div>
//             <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-800 to-indigo-700 bg-clip-text text-transparent text-center">
//               International Laity Association
//             </h2>
//           </div>
          
//           {/* Google Translate Component */}
//           <div className="w-full max-w-md mb-8 sm:mb-12 p-6 bg-white rounded-2xl shadow-lg border border-purple-100">
//             <div className="flex items-center justify-center mb-4">
//               <Globe className="w-6 h-6 text-purple-600 mr-2" />
//               <h3 className="text-lg font-semibold text-purple-800">Select Language</h3>
//             </div>
//             <div className="flex justify-center">
//               <GoogleTranslate />
//             </div>
//           </div>
          
//           {/* Join Button */}
//           <div className="w-full max-w-md">
//             <button 
//               onClick={() => window.location.href = '/contact'}
//               className="relative group w-full px-8 py-4 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 overflow-hidden"
//             >
//               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
//               <span className="relative z-10 flex items-center justify-center space-x-3 text-lg">
//                 <UserPlus className="w-5 h-5 sm:w-6 sm:h-6" />
//                 <span>Join Our Community</span>
//               </span>
//             </button>
//           </div>
          
//           {/* Social Links or Additional Info */}
//           <div className="mt-8 sm:mt-12 text-center text-purple-600">
//             <p className="text-sm sm:text-base">Connect with us on social media</p>
//             <div className="flex justify-center space-x-4 mt-4">
//               {/* Add your social media icons here */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Flame, BookOpen, Calendar, Phone, Home, Globe, UserPlus } from 'lucide-react';
import GoogleTranslate from '../ui/GoogleTranslate';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFullScreenMenuOpen, setIsFullScreenMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsFullScreenMenuOpen(false);
  }, [location]);

  const navigationItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Heart },
    { name: 'Teachings', href: '/teachings', icon: BookOpen },
    { name: 'Prayer Wall', href: '/prayers', icon: Flame },
    { name: 'Events', href: '/events', icon: Calendar },
    { name: 'Contact', href: '/contact', icon: Phone },
  ];

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Close full screen menu if open
    if (isFullScreenMenuOpen) setIsFullScreenMenuOpen(false);
  };

  const toggleFullScreenMenu = () => {
    setIsFullScreenMenuOpen(!isFullScreenMenuOpen);
    // Close regular menu if open
    if (isMenuOpen) setIsMenuOpen(false);
  };

  // Remove Google Translate banner
  useEffect(() => {
    function removeGoogleTranslateBar() {
      const selectors = [
        '.goog-te-banner-frame',
        'iframe.goog-te-banner-frame', 
        'iframe[name="goog-te-banner-frame"]',
        '.skiptranslate.goog-te-banner-frame'
      ];
      
      selectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => element.remove());
      });
      
      document.body.style.top = '0';
      document.body.style.marginTop = '0';
      document.body.style.position = 'static';
    }
    
    removeGoogleTranslateBar();
    const interval = setInterval(removeGoogleTranslateBar, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
  isScrolled 
    ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-yellow-200/30' 
    : 'bg-white/90 backdrop-blur-sm'
}`}>
        {/* Spiritual glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-yellow-400/5 to-blue-600/5 opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
        
        <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo Section */}
            <Link to="/" className="flex items-center space-x-3 group z-50">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  {/* Divine aura around logo */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 via-blue-400 to-yellow-400 opacity-20 animate-pulse scale-150 blur-md"></div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-300 to-blue-300 opacity-30 animate-ping"></div>
                  
                  <img 
                    src="/images/WhatsApp Image 2025-06-01 at 16.15.50_f639350b.jpg" 
                    alt="International Laity Association Logo" 
                    className="relative w-10 h-10 md:w-12 md:h-12 object-contain group-hover:scale-110 transition-transform duration-500 rounded-full shadow-lg ring-2 ring-yellow-400/30"
                  />
                  
                  {/* Sacred light dots */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-yellow-400 to-blue-500 rounded-full animate-pulse shadow-lg"></div>
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-gradient-to-r from-blue-400 to-yellow-400 rounded-full animate-pulse delay-500"></div>
                </div>
                
                <div className="hidden sm:block">
                  <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:via-blue-500 group-hover:to-blue-700 transition-all duration-500">
                    International Laity Association
                  </h1>
                  <p className="text-xs bg-gradient-to-r from-yellow-600 to-blue-600 bg-clip-text text-transparent font-medium tracking-wide">
                    Unity Through Faith & Service
                  </p>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navigationItems.slice(1).map((item, index) => {
                const IconComponent = item.icon;
                const isActive = isActivePath(item.href);
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`group relative px-5 py-3 rounded-2xl transition-all duration-500 hover:shadow-lg ${
                      isActive 
                        ? 'bg-gradient-to-r from-yellow-100 via-blue-50 to-yellow-100 shadow-inner border border-yellow-300/50' 
                        : 'hover:bg-gradient-to-r hover:from-yellow-50 hover:via-blue-25 hover:to-yellow-50 hover:shadow-md'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center space-x-2 relative z-10">
                      <IconComponent className={`w-4 h-4 transition-all duration-500 ${
                        isActive 
                          ? 'text-blue-700 drop-shadow-sm scale-110' 
                          : 'text-gray-600 group-hover:text-blue-600 group-hover:scale-110 group-hover:drop-shadow-sm'
                      }`} />
                      <span className={`text-sm font-medium transition-all duration-500 ${
                        isActive 
                          ? 'text-blue-800 font-semibold' 
                          : 'text-gray-700 group-hover:text-blue-700 group-hover:font-semibold'
                      }`}>
                        {item.name}
                      </span>
                    </div>
                    
                    {/* Sacred underline effect */}
                    <div className={`absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-yellow-500 via-blue-500 to-yellow-500 rounded-full transition-all duration-500 ${
                      isActive 
                        ? 'w-full left-0 shadow-lg' 
                        : 'w-0 group-hover:w-full group-hover:left-0 group-hover:shadow-md'
                    }`}></div>
                    
                    {/* Divine glow on hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/10 via-blue-400/10 to-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </Link>
                );
              })}
            </div>

            {/* Desktop Utility Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <button 
                onClick={toggleFullScreenMenu}
                className="p-3 rounded-2xl bg-gradient-to-r from-yellow-100/80 to-blue-100/80 backdrop-blur-md hover:from-yellow-200/80 hover:to-blue-200/80 transition-all duration-500 shadow-lg flex items-center justify-center border border-yellow-200/30"
                aria-label="Language selector"
              >
                <Globe className="w-5 h-5 text-blue-700" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-3">
              <button 
                onClick={toggleFullScreenMenu}
                className="p-2.5 rounded-2xl bg-gradient-to-r from-yellow-100/80 to-blue-100/80 backdrop-blur-md hover:from-yellow-200/80 hover:to-blue-200/80 transition-all duration-500 shadow-lg border border-yellow-200/30"
                aria-label="Language selector"
              >
                <Globe className="w-5 h-5 text-blue-700" />
              </button>
              
              <button
                onClick={toggleMenu}
                className="p-3 rounded-2xl bg-gradient-to-r from-yellow-100/80 to-blue-100/80 backdrop-blur-md hover:from-yellow-200/80 hover:to-blue-200/80 transition-all duration-500 shadow-lg border border-yellow-200/30"
                aria-label="Menu"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-blue-700" />
                ) : (
                  <Menu className="w-6 h-6 text-blue-700" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu (Dropdown) */}
          <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen 
              ? 'max-h-screen opacity-100 py-4' 
              : 'max-h-0 opacity-0'
          }`}>
            <div className="relative bg-gradient-to-br from-white/95 via-yellow-50/95 to-blue-50/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-yellow-200/50 p-6 space-y-3">
              {navigationItems.map((item, index) => {
                const IconComponent = item.icon;
                const isActive = isActivePath(item.href);
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`relative flex items-center space-x-4 p-4 rounded-2xl transition-all duration-300 group ${
                      isActive 
                        ? 'bg-gradient-to-r from-yellow-100 via-blue-50 to-yellow-100 shadow-lg border border-yellow-300/50' 
                        : 'hover:bg-gradient-to-r hover:from-yellow-50 hover:to-blue-50 hover:shadow-md'
                    }`}
                  >
                    <div className={`p-2 rounded-xl transition-all duration-300 ${
                      isActive 
                        ? 'bg-gradient-to-r from-yellow-200 to-blue-200 shadow-inner' 
                        : 'group-hover:bg-gradient-to-r group-hover:from-yellow-100 group-hover:to-blue-100'
                    }`}>
                      <IconComponent className={`w-5 h-5 transition-all duration-300 ${
                        isActive 
                          ? 'text-blue-700 scale-110' 
                          : 'text-blue-600 group-hover:text-blue-700 group-hover:scale-110'
                      }`} />
                    </div>
                    <span className={`font-medium transition-all duration-300 ${
                      isActive 
                        ? 'text-blue-800 font-semibold' 
                        : 'text-gray-700 group-hover:text-blue-700 group-hover:font-semibold'
                    }`}>
                      {item.name}
                    </span>
                    
                    {isActive && (
                      <div className="absolute right-4 w-2 h-2 bg-gradient-to-r from-yellow-500 to-blue-500 rounded-full animate-pulse"></div>
                    )}
                  </Link>
                );
              })}
              
              {/* Mobile CTA Button */}
              <div className="pt-4 mt-4 border-t border-yellow-200">
                <button 
                  onClick={() => window.location.href = '/contact'}
                  className="relative group w-full py-4 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 overflow-hidden border border-yellow-300/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <UserPlus className="w-5 h-5" />
                    <span>Join Our Community</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Full Screen Menu */}
      <div className={`fixed inset-0 z-50 bg-gradient-to-br from-white to-blue-50 transition-all duration-300 ease-in-out ${
        isFullScreenMenuOpen 
          ? 'opacity-100 pointer-events-auto' 
          : 'opacity-0 pointer-events-none'
      }`}>
        <div className="relative h-full w-full flex flex-col items-center justify-center p-6 overflow-y-auto">
          {/* Close Button */}
          <button 
            onClick={toggleFullScreenMenu}
            className="absolute top-6 right-6 p-3 rounded-full bg-gradient-to-r from-yellow-100 to-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-yellow-200/30"
            aria-label="Close menu"
          >
            <X className="w-6 h-6 text-blue-700" />
          </button>
          
          {/* Logo */}
          <div className="mb-8 sm:mb-12 flex flex-col items-center">
            <div className="relative mb-4">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 via-blue-400 to-yellow-400 opacity-20 animate-pulse scale-150 blur-md"></div>
              <img 
                src="/images/WhatsApp Image 2025-06-01 at 16.15.50_f639350b.jpg" 
                alt="Logo" 
                className="relative w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-full shadow-xl ring-4 ring-yellow-300/50"
              />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-800 to-blue-700 bg-clip-text text-transparent text-center">
              International Laity Association
            </h2>
          </div>
          
          {/* Google Translate Component */}
          <div className="w-full max-w-md mb-8 sm:mb-12 p-6 bg-white rounded-2xl shadow-lg border border-yellow-200/50">
            <div className="flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-blue-600 mr-2" />
              <h3 className="text-lg font-semibold text-blue-800">Select Language</h3>
            </div>
            <div className="flex justify-center">
              <GoogleTranslate />
            </div>
          </div>
          
          {/* Join Button */}
          <div className="w-full max-w-md">
            <button 
              onClick={() => window.location.href = '/contact'}
              className="relative group w-full px-8 py-4 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 overflow-hidden border border-yellow-300/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="relative z-10 flex items-center justify-center space-x-3 text-lg">
                <UserPlus className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>Join Our Community</span>
              </span>
            </button>
          </div>
          
          {/* Social Links or Additional Info */}
          <div className="mt-8 sm:mt-12 text-center text-blue-600">
            <p className="text-sm sm:text-base">Connect with us on social media</p>
            <div className="flex justify-center space-x-4 mt-4">
              {/* Add your social media icons here */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;