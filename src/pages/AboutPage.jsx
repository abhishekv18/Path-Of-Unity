

import React, { useState, useEffect } from 'react';
import { Heart, Users, Globe, BookOpen, Plane, Cross, Star, ArrowRight, Target, Eye, HandHeart, Award, Calendar, Map } from 'lucide-react';
import { Link } from 'react-router';

const AboutPage = () => {
  const [activeSection, setActiveSection] = useState('story');
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const founders = [
    {
      name: "Captain Matinunina Natalia",
      role: "Founder & President",
      background: "20 years with international airlines",
      faith: "Anglican Christian",
      story: "Inspired by encounters with diverse passengers from all faiths during transcontinental flights"
    },
    {
      name: "Raj Patel",
      role: "Co-Founder & VP",
      background: "Aviation ministry coordinator",
      faith: "Hindu Scholar", 
      story: "Witnessed the power of prayer across cultures during emergency situations at 30,000 feet"
    }
  ];

  const milestones = [
    { year: "2020", event: "Vision born during pandemic grounding", icon: Plane },
    { year: "2021", event: "First interfaith aviation prayer circle", icon: Heart },
    { year: "2022", event: "International Laity Association founded", icon: Globe },
    { year: "2023", event: "10,000+ members across 50 countries", icon: Users },
    { year: "2024", event: "Unity Temple construction begins", icon: Target }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Organization Logo */}
      <div className="relative overflow-hidden py-20 bg-gradient-to-br from-blue-50 via-white to-yellow-50">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-200 rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-200 rounded-full opacity-10 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-yellow-100 to-blue-100 rounded-full opacity-20 animate-spin" style={{ animationDuration: '30s' }}></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Organization Logo */}
          <div className="mb-12 flex justify-center">
            <div className="relative w-64 h-80 bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-500 rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-700 hover:shadow-3xl">
              {/* Divine Light Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-400 via-transparent to-transparent opacity-80"></div>
              <div className="absolute inset-0 bg-gradient-radial from-transparent via-yellow-200 to-transparent opacity-30 animate-pulse"></div>
              
              {/* Religious Symbols with Enhanced Animation */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 flex space-x-8">
                <div className="text-blue-900 text-2xl animate-pulse filter drop-shadow-lg">✡</div>
                <Cross className="w-6 h-6 text-blue-900 animate-pulse delay-300 filter drop-shadow-lg" />
                <div className="text-blue-900 text-2xl animate-pulse delay-500 filter drop-shadow-lg">☪</div>
              </div>
              <div className="absolute top-16 left-1/2 transform -translate-x-1/2 flex space-x-8">
                <div className="text-blue-900 text-2xl animate-pulse delay-700 filter drop-shadow-lg">🕉</div>
                <div className="text-blue-900 text-2xl animate-pulse delay-1000 filter drop-shadow-lg">☸</div>
              </div>

              {/* Enhanced Open Book with Divine Light */}
              <div className="absolute top-24 left-1/2 transform -translate-x-1/2">
                <div className="w-16 h-12 bg-blue-900 rounded-t-lg relative shadow-lg">
                  <div className="absolute inset-x-2 top-1 h-px bg-yellow-300"></div>
                  <div className="absolute inset-x-2 top-3 h-px bg-yellow-300"></div>
                  <div className="absolute inset-x-2 top-5 h-px bg-yellow-300"></div>
                  {/* Enhanced light rays from book */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-px h-8 bg-yellow-300 opacity-80 animate-pulse"></div>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 rotate-12 w-px h-6 bg-yellow-300 opacity-60 animate-pulse delay-200"></div>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 -rotate-12 w-px h-6 bg-yellow-300 opacity-60 animate-pulse delay-400"></div>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 rotate-24 w-px h-4 bg-yellow-300 opacity-40 animate-pulse delay-600"></div>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 -rotate-24 w-px h-4 bg-yellow-300 opacity-40 animate-pulse delay-800"></div>
                </div>
              </div>

              {/* Organization Name with Enhanced Typography */}
              <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center">
                <h2 className="text-blue-900 font-bold text-lg leading-tight tracking-wide filter drop-shadow-md">
                  INTERNATIONAL<br />
                  LAITY<br />
                  ASSOCIATION
                </h2>
              </div>

              {/* Enhanced Meditation Figure */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-16 bg-blue-900 rounded-t-full relative shadow-lg">
                  <div className="absolute -left-3 top-8 w-6 h-4 bg-blue-900 rounded-full transform rotate-45"></div>
                  <div className="absolute -right-3 top-8 w-6 h-4 bg-blue-900 rounded-full transform -rotate-45"></div>
                  <div className="absolute -bottom-2 -left-4 w-8 h-4 bg-blue-900 rounded-full"></div>
                  <div className="absolute -bottom-2 -right-4 w-8 h-4 bg-blue-900 rounded-full"></div>
                  {/* Aura effect */}
                  <div className="absolute -top-2 -left-2 -right-2 -bottom-2 border-2 border-yellow-300 rounded-full opacity-30 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-light text-gray-800 mb-6">
            <span className="block text-2xl md:text-3xl text-yellow-600 mb-2 font-medium">Welcome to the</span>
            <span className="bg-gradient-to-r from-blue-800 via-yellow-600 to-blue-600 bg-clip-text text-transparent font-semibold tracking-tight">
              International Laity Association
            </span>
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
            Born from the skies above, grounded in Christian faith, and dedicated to uniting all souls 
            in divine love. Founded by aviation professionals who witnessed God's universal presence 
            across cultures and continents.
          </p>
        </div>
      </div>
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-gradient-to-br from-blue-50 via-white to-yellow-50 rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 overflow-hidden relative">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-200 rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-200 rounded-full opacity-10 animate-pulse delay-1000"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">
                <span className="text-yellow-600 font-medium">Meet Our</span> Visionary
              </h2>
              <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
                Discover the heart and soul behind our mission through this personal message from our founder
              </p>
            </div>
            
            <div className="relative max-w-4xl mx-auto">
              {/* Video Container with Divine Styling */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-900 to-blue-800 p-1">
                {/* Golden border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 opacity-80 rounded-2xl"></div>
                <div className="relative bg-black rounded-xl overflow-hidden">
                  <div className="aspect-video relative">
                    <video 
                      className="w-full h-full object-cover"
                      controls
                    //  poster="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=450&fit=crop&crop=face"
                      preload="metadata"
                    >
                      <source src="/images/WhatsApp Video 2025-06-17 at 1.07.54 AM.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    
                    {/* Overlay with spiritual elements */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
                    
                    {/* Corner decorative elements */}
                    <div className="absolute top-4 left-4 text-yellow-300 opacity-20">
                      <Cross className="w-6 h-6" />
                    </div>
                    <div className="absolute top-4 right-4 text-yellow-300 opacity-20">
                      <Heart className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Video Caption */}
              <div className="mt-8 text-center">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 max-w-2xl mx-auto">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-yellow-500 rounded-full flex items-center justify-center mr-4">
                      <Plane className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-semibold text-gray-800">Captain Sarah Mitchell</h3>
                      <p className="text-yellow-600 font-medium">Founder & President</p>
                    </div>
                  </div>
                  <p className="text-gray-600 font-light leading-relaxed italic">
                    "Join me as I share the divine inspiration that led to the creation of our International Laity Association, 
                    and discover how our aviation experiences opened our hearts to God's universal love."
                  </p>
                </div>
              </div>
              
              {/* Floating spiritual symbols */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center opacity-20 animate-bounce">
                <Star className="w-4 h-4 text-blue-900" />
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center opacity-20 animate-bounce delay-500">
                <Heart className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Navigation Tabs */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: 'story', label: 'Our Story', icon: BookOpen },
            { id: 'founders', label: 'Founders', icon: Plane },
            { id: 'mission', label: 'Mission & Vision', icon: Target },
            { id: 'journey', label: 'Our Journey', icon: Map }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveSection(tab.id)}
              className={`flex items-center px-8 py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                activeSection === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-yellow-500 text-white shadow-xl'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-lg hover:shadow-xl border border-gray-100'
              }`}
            >
              <tab.icon className="w-5 h-5 mr-2" />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Core Values Cards */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 ">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {[
            { icon: Heart, title: "Divine Unity", desc: "Bringing hearts together across all faiths in Christian love", color: "from-red-500 to-pink-500" },
            { icon: Users, title: "Sacred Community", desc: "Building bridges of understanding through shared worship", color: "from-blue-600 to-blue-700" },
            { icon: Globe, title: "Global Mission", desc: "Reaching souls worldwide with Christ's message of unity", color: "from-green-500 to-teal-500" },
            { icon: BookOpen, title: "Shared Wisdom", desc: "Learning from all traditions while rooted in Christian faith", color: "from-yellow-500 to-yellow-600" }
          ].map((item, index) => (
            <div 
              key={index} 
              id={`value-${index}`}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 text-center transform hover:scale-105 border border-yellow-500 ${
                isVisible[`value-${index}`] ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg transform hover:rotate-12 transition-transform duration-300`}>
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
              <p className="text-gray-600 font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Dynamic Content Sections */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
          
          {activeSection === 'story' && (
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-gray-800">
                <span className="text-yellow-600 font-medium">Our Sacred</span> Story
              </h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Plane className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Born in the Skies</h3>
                      <p className="text-gray-600 font-light leading-relaxed">
                        Our story began at 35,000 feet, where Christian aviators witnessed the universal 
                        yearning for divine connection across all cultures and faiths during their global journeys.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Cross className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Rooted in Faith</h3>
                      <p className="text-gray-600 font-light leading-relaxed">
                        While firmly grounded in Christian faith and values, we embrace Christ's teaching 
                        to love all people and recognize the divine spark present in every human soul.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">United in Love</h3>
                      <p className="text-gray-600 font-light leading-relaxed">
                        Through interfaith dialogue, community service, and shared spiritual experiences, 
                        we demonstrate that love transcends all boundaries and brings unity to diversity.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-yellow-50 to-blue-50 rounded-2xl p-8 text-center border border-gray-100 shadow-inner">
                  <div className="text-6xl mb-6 filter drop-shadow-lg">✈️</div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">From Sky to Soul</h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    "As we soared through clouds and crossed continents, we realized that the same 
                    divine light that guided our aircraft also illuminates the hearts of all people, 
                    regardless of their religious path."
                  </p>
                  <div className="mt-6 text-yellow-600 font-medium">- Our Founding Vision</div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'founders' && (
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-gray-800">
                <span className="text-yellow-600 font-medium">Our</span> Founders
              </h2>
              <div className="grid md:grid-cols-2 gap-12">
                {founders.map((founder, index) => (
                  <div key={index} className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300 shadow-lg border border-gray-100">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                      <Plane className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">{founder.name}</h3>
                    <div className="text-yellow-600 font-medium mb-6">{founder.role}</div>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-center space-x-2">
                        <Plane className="w-4 h-4 text-blue-600" />
                        <span className="text-gray-600 text-sm">{founder.background}</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <Cross className="w-4 h-4 text-yellow-600" />
                        <span className="text-gray-600 text-sm">{founder.faith}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 font-light italic leading-relaxed">"{founder.story}"</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'mission' && (
            <div className="animate-fade-in">
              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Mission</h2>
                  <p className="text-gray-600 font-light leading-relaxed">
                    To foster unity among all faiths through Christian love, creating bridges of understanding 
                    and respect. We serve as catalysts for interfaith dialogue, community service, and 
                    spiritual growth while remaining true to our Christian foundation.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                    <Eye className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Vision</h2>
                  <p className="text-gray-600 font-light leading-relaxed">
                    A world where people of all faiths can walk together in mutual respect and understanding, 
                    guided by the universal principles of love, compassion, and service to humanity that 
                    Christ exemplified.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-yellow-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="text-2xl font-semibold text-center text-gray-800 mb-8">Our Core Commitments</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    { icon: HandHeart, title: "Compassionate Service", desc: "Serving all communities with Christ's love" },
                    { icon: Users, title: "Interfaith Dialogue", desc: "Building bridges through respectful conversation" },
                    { icon: Heart, title: "Spiritual Growth", desc: "Growing together in faith and understanding" }
                  ].map((commitment, index) => (
                    <div key={index} className="text-center transform hover:scale-105 transition-transform duration-300">
                      <commitment.icon className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">{commitment.title}</h4>
                      <p className="text-gray-600 font-light">{commitment.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeSection === 'journey' && (
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-gray-800">
                <span className="text-yellow-600 font-medium">Our</span> Journey
              </h2>
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-center space-x-6 group">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-yellow-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <milestone.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="bg-gradient-to-r from-blue-50 to-yellow-50 rounded-xl p-6 group-hover:shadow-xl transition-all duration-300 border border-gray-100">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-2xl font-bold text-yellow-600">{milestone.year}</span>
                          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-yellow-600 transition-colors duration-300" />
                        </div>
                        <p className="text-gray-700 font-medium">{milestone.event}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-gradient-to-r from-blue-600 to-yellow-500 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-light mb-6">Join Our Sacred Mission</h2>
          <p className="text-xl mb-8 opacity-90 font-light">
            Be part of a movement that bridges faith communities through Christian love and understanding.
          </p>
          <Link to='/contact'>
             <button className="bg-white text-blue-600 font-semibold py-4 px-8 rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Get Involved Today
          </button>
          </Link>
       
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        .animate-fade-in {
          animation: fade-in-up 0.8s ease-out;
        }
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
};

export default AboutPage;