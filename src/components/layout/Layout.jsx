import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, className = "" }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Header with fixed positioning */}
      <Header />
      
      {/* Main Content Area */}
      <main className={`pt-16 md:pt-20 ${className}`}>
        {children}
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Floating spiritual symbols */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-divine-gold/5 to-transparent rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-br from-peace-blue/5 to-transparent rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-3/4 w-20 h-20 bg-gradient-to-br from-unity-purple/5 to-transparent rounded-full animate-pulse delay-1000"></div>
        
        {/* Subtle light rays */}
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-divine-gold/10 to-transparent transform -translate-x-1/2"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-peace-blue/10 to-transparent transform -translate-y-1/2"></div>
      </div>
    </div>
  );
};

export default Layout;
