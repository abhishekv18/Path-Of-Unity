// // // App.js - Main Application Structure
// // import React, { useState } from 'react';
// // import './App.css';

// // // Import components (we'll build these step by step)
// // import Header from './components/layout/Header';
// // import Hero from './components/home/Hero';
// // import QuoteCarousel from './components/home/QuoteCarousel';
// // import MissionSection from './components/home/MissionSection';
// // import FoundersPreview from './components/home/FoundersPreview';
// // import Footer from './components/layout/Footer';

// // // Import data
// // import { quotes } from './data/quotes';
// // import { foundersData } from './data/founders';

// // function App() {
// //   const [currentPage, setCurrentPage] = useState('home');
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);

// //   // Navigation function
// //   const navigateTo = (page) => {
// //     setCurrentPage(page);
// //     setIsMenuOpen(false);
// //   };

// //   return (
// //     <div className="App min-h-screen bg-gradient-to-br from-soft-cream via-white to-peace-blue/10">
// //       {/* Header/Navigation */}
// //       <Header 
// //         currentPage={currentPage}
// //         navigateTo={navigateTo}
// //         isMenuOpen={isMenuOpen}
// //         setIsMenuOpen={setIsMenuOpen}
// //       />

// //       {/* Main Content - We'll build this page by page */}
// //       <main className="relative">
// //         {currentPage === 'home' && (
// //           <>
// //             <Hero />
// //             <QuoteCarousel quotes={quotes} />
// //             <MissionSection />
// //             <FoundersPreview founders={foundersData} />
// //           </>
// //         )}
        
// //         {currentPage === 'about' && (
// //           <div className="min-h-screen flex items-center justify-center">
// //             <h1 className="text-4xl font-spiritual text-divine-gold">About Page - Coming Soon!</h1>
// //           </div>
// //         )}
        
// //         {currentPage === 'prayer' && (
// //           <div className="min-h-screen flex items-center justify-center">
// //             <h1 className="text-4xl font-spiritual text-unity-purple">Prayer Wall - Coming Soon!</h1>
// //           </div>
// //         )}
        
// //         {currentPage === 'teachings' && (
// //           <div className="min-h-screen flex items-center justify-center">
// //             <h1 className="text-4xl font-spiritual text-earth-green">Teachings - Coming Soon!</h1>
// //           </div>
// //         )}
        
// //         {currentPage === 'quotes' && (
// //           <div className="min-h-screen flex items-center justify-center">
// //             <h1 className="text-4xl font-spiritual text-love-rose">Wisdom Quotes - Coming Soon!</h1>
// //           </div>
// //         )}
        
// //         {currentPage === 'events' && (
// //           <div className="min-h-screen flex items-center justify-center">
// //             <h1 className="text-4xl font-spiritual text-peace-blue">Events - Coming Soon!</h1>
// //           </div>
// //         )}
        
// //         {currentPage === 'contact' && (
// //           <div className="min-h-screen flex items-center justify-center">
// //             <h1 className="text-4xl font-spiritual text-divine-gold">Contact - Coming Soon!</h1>
// //           </div>
// //         )}
// //       </main>

// //       {/* Footer */}
// //       <Footer />
// //     </div>
// //   );
// // }

// // export default App;

// // App.js - Main Application Structure
// import React, { useState } from 'react';
// import './App.css';

// // Import components (we'll build these step by step)
// import Header from './components/layout/Header';
// import Hero from './components/home/Hero';
// import QuoteCarousel from './components/home/QuoteCarousel';
// import MissionSection from './components/home/MissionSection';
// import FoundersPreview from './components/home/FoundersPreview';
// import FeaturedContent from './components/home/FeaturedContent';  // ✅ Add this
// import CallToAction from './components/home/CallToAction';        // ✅ Add this
// import Footer from './components/layout/Footer';

// // Import data
// import { quotes } from './data/quotes';
// import { foundersData } from './data/founders';
// import Layout from './components/layout/Layout';

// function App() {
//   const [currentPage, setCurrentPage] = useState('home');
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   // Navigation function
//   const navigateTo = (page) => {
//     setCurrentPage(page);
//     setIsMenuOpen(false);
//   };

//   return (
//   <Layout>
//       <div className="App min-h-screen bg-gradient-to-br from-soft-cream via-white to-peace-blue/10">
//       {/* Header/Navigation */}
//       <Header 
//         currentPage={currentPage}
//         navigateTo={navigateTo}
//         isMenuOpen={isMenuOpen}
//         setIsMenuOpen={setIsMenuOpen}
//       />

//       {/* Main Content - We'll build this page by page */}
//       <main className="relative">
//         {currentPage === 'home' && (
//           <>
//             <Hero />
//             <MissionSection />           {/* Move after Hero for better flow */}
//             <FeaturedContent />          {/* ✅ Add here - showcase teachings/content */}
//             <FoundersPreview founders={foundersData} />
//             <QuoteCarousel quotes={quotes} />  {/* Move later for variety */}
//             <CallToAction />             {/* ✅ Add here - final conversion point */}
//           </>
//         )}
        
//         {currentPage === 'about' && (
//           <div className="min-h-screen flex items-center justify-center">
//             <h1 className="text-4xl font-spiritual text-divine-gold">About Page - Coming Soon!</h1>
//           </div>
//         )}
        
//         {currentPage === 'prayer' && (
//           <div className="min-h-screen flex items-center justify-center">
//             <h1 className="text-4xl font-spiritual text-unity-purple">Prayer Wall - Coming Soon!</h1>
//           </div>
//         )}
        
//         {currentPage === 'teachings' && (
//           <div className="min-h-screen flex items-center justify-center">
//             <h1 className="text-4xl font-spiritual text-earth-green">Teachings - Coming Soon!</h1>
//           </div>
//         )}
        
//         {currentPage === 'quotes' && (
//           <div className="min-h-screen flex items-center justify-center">
//             <h1 className="text-4xl font-spiritual text-love-rose">Wisdom Quotes - Coming Soon!</h1>
//           </div>
//         )}
        
//         {currentPage === 'events' && (
//           <div className="min-h-screen flex items-center justify-center">
//             <h1 className="text-4xl font-spiritual text-peace-blue">Events - Coming Soon!</h1>
//           </div>
//         )}
        
//         {currentPage === 'contact' && (
//           <div className="min-h-screen flex items-center justify-center">
//             <h1 className="text-4xl font-spiritual text-divine-gold">Contact - Coming Soon!</h1>
//           </div>
//         )}
//       </main>

//       {/* Footer */}
//       {/* <Footer /> */}
//     </div>
//   </Layout>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

// Import page components
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TeachingsPage from './pages/TeachingsPage';


import PrayerWallPage from './pages/PrayerWallPage';
import EventsPage from './pages/EventsPage';

import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import './styles/globals.css'; // Import global styles
// Import your existing styles
import './App.css';
import ScrollToTop from './ScrollToTop';

import WhatsappFloatButton from './WhatsappFloatButton';


function App() {
  return (
   

<Router>
      <div className="App">
        <Layout>
          {/* <GoogleTranslate/> */}
          <ScrollToTop/>
          <WhatsappFloatButton/>
          <Routes>
            {/* Main Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/teachings" element={<TeachingsPage />} />
            <Route path="/prayers" element={<PrayerWallPage />} />
            <Route path="/events" element={<EventsPage />} />
           
            <Route path="/contact" element={<ContactPage />} />
            
            {/* Additional Routes for specific sections */}
            <Route path="/about/:section" element={<AboutPage />} />
            <Route path="/teachings/:category" element={<TeachingsPage />} />
            <Route path="/contact/:action" element={<ContactPage />} />
            
            {/* Catch-all route for 404 */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </div>
    </Router>
   
    
  );
}

export default App;