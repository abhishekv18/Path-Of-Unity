
// components/prayer/PrayerCategories.jsx
import React from 'react';
import { Heart, Stethoscope, Sun, Users, Compass, Globe, Pentagon } from 'lucide-react';

const PrayerCategories = ({ selectedCategory, onCategoryChange }) => {
  const categories = [
    { id: 'all', label: 'All Prayers', icon: Globe, color: 'text-gray-600' },
    { id: 'healing', label: 'Healing', icon: Stethoscope, color: 'text-green-600' },
    { id: 'peace', label: 'Peace', icon: Pentagon, color: 'text-blue-600' },
    { id: 'gratitude', label: 'Gratitude', icon: Sun, color: 'text-yellow-600' },
    { id: 'family', label: 'Family', icon: Users, color: 'text-pink-600' },
    { id: 'guidance', label: 'Guidance', icon: Compass, color: 'text-purple-600' },
    { id: 'general', label: 'General', icon: Heart, color: 'text-red-600' }
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => {
        const Icon = category.icon;
        return (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
              selectedCategory === category.id
                ? 'bg-divine-gold text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Icon className={`w-4 h-4 ${selectedCategory === category.id ? 'text-white' : category.color}`} />
            {category.label}
          </button>
        );
      })}
    </div>
  );
};

export default PrayerCategories;