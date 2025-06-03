import React, { useState } from 'react';
import { ChevronRight, Heart, Users, Globe, Cross, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

// Founders data (normally imported from data/founders.js)
const foundersData = {
  christian: {
    name: " Matiunina Natalia",
    background: "Christian theologian and interfaith advocate",
    image: "/images/6833591.png",
    bio: "Sarah brings 15 years of Christian ministry experience and a passion for building bridges between different faith communities.",
    quote: "In Christ's love, we find the strength to embrace all humanity."
  },
  hindu: {
    name: "Raj Patel", 
    background: "Hindu scholar and spiritual teacher",
    image: "/images/male-avatar-portrait-of-a-young-man-with-a-beard-illustration-of-male-character-in-modern-color-style-vector.jpg",
    bio: "Raj combines ancient Vedantic wisdom with modern interfaith dialogue, believing in the universal truth found in all religions.",
    quote: "सर्वे भवन्तु सुखिनः - May all beings be happy and free."
  },
  mission: "To create a sacred space where all faiths unite in love, understanding, and shared spiritual growth.",
  vision: "A world where religious diversity is celebrated as a path to deeper divine connection.",
  story: "Sarah and Raj met during an interfaith conference in 2019, discovering their shared vision of unity despite different religious backgrounds. Their love story became a testament to the beauty of interfaith harmony."
};

const FoundersPreview = () => {
  const [hoveredFounder, setHoveredFounder] = useState(null);

  const founders = [
    {
      id: 1,
      name: foundersData.christian.name,
      title: "Christian Theologian & Co-Founder",
      image: foundersData.christian.image,
      background: foundersData.christian.background,
      bio: foundersData.christian.bio,
      philosophy: foundersData.christian.quote,
      gradient: "from-blue-400 to-purple-400",
      icon: Cross
    },
    {
      id: 2,
      name: foundersData.hindu.name,
      title: "Hindu Scholar & Co-Founder",
      image: foundersData.hindu.image,
      background: foundersData.hindu.background,
      bio: foundersData.hindu.bio,
      philosophy: foundersData.hindu.quote,
      gradient: "from-orange-400 to-red-400",
      icon: Star
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-pink-200 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 px-6 py-2 rounded-full mb-6">
            <Heart className="w-5 h-5 text-purple-600" />
            <span className="text-purple-800 font-medium">Meet Our Founders</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Guided by
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-orange-600 bg-clip-text text-transparent">
              {" "}Unity & Love
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {foundersData.story}
          </p>
        </div>

        {/* Founders Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {founders.map((founder) => (
            <div
              key={founder.id}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredFounder(founder.id)}
              onMouseLeave={() => setHoveredFounder(null)}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${founder.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-br ${founder.gradient} p-1`}>
                  <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                    {/* <founder.icon className="w-10 h-10 text-gray-500" /> */}
                    {/* Replace with actual image */}
                    <img src={founder.image} alt={founder.name} className="w-full h-full rounded-full object-cover" />
                  </div>
                </div>
                
                {/* Floating animation */}
                {hoveredFounder === founder.id && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-bounce flex items-center justify-center">
                    <Heart className="w-3 h-3 text-white" />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {founder.name}
                </h3>
                <p className={`text-sm font-medium mb-4 bg-gradient-to-r ${founder.gradient} bg-clip-text text-transparent`}>
                  {founder.title}
                </p>
                <p className="text-gray-600 text-sm mb-3">
                  {founder.background}
                </p>
                <div className="bg-gray-50 rounded-xl p-4 mb-4">
                  <p className="text-gray-700 text-sm italic">
                    "{founder.philosophy}"
                  </p>
                </div>
                {/* Bio section */}
                <div className="text-xs text-gray-500 leading-relaxed">
                  {founder.bio}
                </div>
              </div>

              {/* Hover effect indicators */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <ChevronRight className="w-4 h-4 text-gray-600" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mission & Vision Section */}
        <div className="bg-white rounded-3xl p-8 shadow-lg mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Sacred Mission</h3>
            <p className="text-lg text-gray-700 mb-6 italic">
              "{foundersData.mission}"
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-orange-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="text-center">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Our Vision</h4>
            <p className="text-gray-600 leading-relaxed">
              {foundersData.vision}
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Cross className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-3xl font-bold text-gray-900 mb-2">15+</h4>
              <p className="text-gray-600">Years Ministry Experience</p>
            </div>
            
            <div className="group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-400 to-red-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-3xl font-bold text-gray-900 mb-2">2019</h4>
              <p className="text-gray-600">Unity Journey Began</p>
            </div>
            
            <div className="group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-3xl font-bold text-gray-900 mb-2">∞</h4>
              <p className="text-gray-600">Faiths United in Love</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
            <Link to='/about'>
          <button className="group bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <span className="flex items-center gap-2">
              Learn Our Full Story
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
        </Link>
        </div>
      </div>
    </section>
  );
};

export default FoundersPreview;