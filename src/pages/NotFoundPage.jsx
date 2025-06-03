import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Heart } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-300">404</h1>
          <h2 className="text-3xl font-spiritual font-bold text-gray-700 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            The spiritual path you're looking for doesn't exist, but we can guide you home.
          </p>
        </div>
        
        <Link
          to="/"
          className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-blue-800 via-divine-gold to-blue-600 text-white font-medium rounded-full hover:shadow-lg transition-all duration-300"
        >
          <Home className="w-5 h-5" />
          <span>Return Home</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;