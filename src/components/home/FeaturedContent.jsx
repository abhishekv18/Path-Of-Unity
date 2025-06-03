import React, { useState } from 'react';
import { Play, BookOpen, Calendar, Download, ExternalLink, Clock, Users, Heart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedContent = () => {
  const [activeTab, setActiveTab] = useState('teachings');

  // Featured content data
  const featuredTeachings = [
    {
      id: 1,
      title: "Unity in Diversity: Finding Common Ground",
      type: "video",
      duration: "24:15",
      thumbnail: "/images/Unity.jpg",
      description: "Discover how different faith traditions share universal truths about love, compassion, and spiritual growth.",
      author: "Sarah Johnson & Raj Patel",
      views: "2.1K",
      category: "Interfaith Dialogue",
      link:"https://www.youtube.com/watch?v=jKpwoR6n1kY&t=112s&ab_channel=Kirkiem"
    },
    {
      id: 2,
      title: "The Sacred Art of Prayer Across Traditions",
      type: "blog",
      readTime: "8 min read",
      thumbnail: "/images/images.jpg",
      description: "Explore how prayer manifests in Christianity, Hinduism, and other spiritual paths, revealing our shared devotion.",
      author: "Raj Patel",
      date: "March 15, 2024",
      category: "Spiritual Practice",
      link:"https://www.americamagazine.org/issue/5128/faith-focus/art-prayer"
    },
    {
      id: 3,
      title: "Building Bridges: A Practical Guide to Interfaith Harmony",
      type: "pdf",
      pages: "32 pages",
      thumbnail: "/images/faith.jpg",
      description: "A comprehensive guide for creating understanding and respect between different religious communities.",
      author: "Sarah Johnson",
      downloads: "847",
      category: "Resource Guide",
      link:"public/images/building-interfaith-report-fin-rev.pdf"
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "World Interfaith Harmony Week Celebration",
      date: "2027-01-05", // February 5, 2027
      time: "6:00 PM - 8:30 PM",
      location: "Main Sanctuary",
      type: "ceremony",
      description: "Annual celebration bringing together multiple faith traditions in unity and understanding. Features music, prayers, and shared wisdom from various spiritual paths.",
      participants: 120,
    },
    {
      id: 2,
      title: "Tu B'Shevat Tree Blessing Ceremony",
      date: "2027-01-12", // February 12, 2027
      time: "10:00 AM - 12:00 PM",
      location: "Sacred Gardens",
      type: "ceremony",
      description: "Jewish New Year for Trees celebration with interfaith participation. Plant trees, share fruits, and honor our connection to nature.",
      participants: 80
    },
    {
      id: 3,
      title: "Spring Equinox Meditation Retreat",
      date: "2027-02-20", // March 20, 2027
      time: "9:00 AM - 5:00 PM",
      location: "Retreat Center",
      type: "meditation",
      description: "Day-long silent retreat marking the spring equinox. Guided meditations, walking meditation, and contemplative practices in nature.",
      participants: 50
    }
    // {
    //   id: 1,
    //   title: "Interfaith Prayer Circle",
    //   date: "2024-06-15",
    //   time: "7:00 PM",
    //   type: "Weekly Gathering",
    //   location: "Virtual & In-Person",
    //   participants: 45,
    //   description: "Join hearts across traditions in our weekly prayer circle where all faiths unite in sacred intention."
    // },
    // {
    //   id: 2,
    //   title: "Sacred Texts Study Group",
    //   date: "2024-06-20",
    //   time: "6:30 PM",
    //   type: "Monthly Study",
    //   location: "Community Center",
    //   participants: 28,
    //   description: "Explore wisdom from the Bible, Vedas, and other sacred texts to find universal spiritual truths."
    // },
    // {
    //   id: 3,
    //   title: "Festival of Unity Celebration",
    //   date: "2024-07-04",
    //   time: "2:00 PM",
    //   type: "Special Event",
    //   location: "Unity Gardens",
    //   participants: 150,
    //   description: "A joyous celebration bringing together music, food, and traditions from multiple faith communities."
    // }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Maria Rodriguez",
      role: "Community Member",
      text: "Path of Unity has transformed my understanding of spirituality. I've found peace in embracing all traditions.",
      image: "/images/testimonials/maria.jpg",
      rating: 5
    },
    {
      id: 2,
      name: "Dr. Ahmad Hassan",
      role: "Interfaith Advocate",
      text: "Sarah and Raj have created something truly special - a space where all souls feel welcomed and valued.",
      image: "/images/testimonials/ahmad.jpg",
      rating: 5
    }
  ];

  const getContentIcon = (type) => {
    switch (type) {
      case 'video': return Play;
      case 'blog': return BookOpen;
      case 'pdf': return Download;
      default: return BookOpen;
    }
  };

  const getContentBadge = (item) => {
    switch (item.type) {
      case 'video': return { text: item.duration, color: 'bg-red-100 text-red-800' };
      case 'blog': return { text: item.readTime, color: 'bg-blue-100 text-blue-800' };
      case 'pdf': return { text: item.pages, color: 'bg-green-100 text-green-800' };
      default: return { text: 'New', color: 'bg-purple-100 text-purple-800' };
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white via-purple-50 to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-20 w-40 h-40 bg-purple-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-blue-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-10 w-24 h-24 bg-pink-300 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 px-6 py-2 rounded-full mb-6">
            <Star className="w-5 h-5 text-purple-600" />
            <span className="text-purple-800 font-medium">Featured Content</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              {" "}Sacred Wisdom
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our carefully curated collection of teachings, events, and resources 
            designed to nurture your spiritual journey and deepen interfaith understanding.
          </p>
        </div>

        {/* Content Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: 'teachings', label: 'Featured Teachings', icon: BookOpen },
            { id: 'events', label: 'Upcoming Events', icon: Calendar },
            { id: 'testimonials', label: 'Community Stories', icon: Heart }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Featured Teachings Tab */}
        {activeTab === 'teachings' && (
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredTeachings.map((teaching) => {
              const Icon = getContentIcon(teaching.type);
              const badge = getContentBadge(teaching);
              
              return (
                <div
                  key={teaching.id}
                  className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  {/* Thumbnail */}
                  <div className="relative h-48 bg-gradient-to-br from-purple-200 to-blue-200 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      {/* <Icon className="w-16 h-16 text-white opacity-50" /> */}
                      <img
                        src={teaching.thumbnail}
                        alt={teaching.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    
                    {/* Badge */}
                    <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${badge.color}`}>
                      {badge.text}
                    </div>
                    
                    {/* Category */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                      {teaching.category}
                    </div>
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-purple-600" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                      {teaching.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {teaching.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>By {teaching.author}</span>
                      <span>
                        {teaching.views && `${teaching.views} views`}
                        {teaching.date && teaching.date}
                        {teaching.downloads && `${teaching.downloads} downloads`}
                      </span>
                    </div>
                   {
                      teaching.link ? (
                        <a 
                          href={teaching.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                        >
                          <ExternalLink className="w-5 h-5" />
                          {teaching.type === 'video' && 'Watch Now'}
                          {teaching.type === 'blog' && 'Read Article'}
                          {teaching.type === 'pdf' && 'Download PDF'}
                        </a>
                      ) : null
                   }
                     {/* <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                   
                      <Icon className="w-5 h-5" />
        
                      {teaching.type === 'video' && 'Watch Now'}
                      {teaching.type === 'blog' && 'Read Article'}
                      {teaching.type === 'pdf' && 'Download PDF'}
                    </button> */}
                  
                   
                    
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Upcoming Events Tab */}
        {activeTab === 'events' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-purple-600 font-medium">{event.type}</div>
                    <div className="text-xs text-gray-500">{event.location}</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {event.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {event.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {event.date} • {event.time}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {event.participants} attending
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  Join Event
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Testimonials Tab */}
        {activeTab === 'testimonials' && (
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-purple-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
            
            {/* Call to share story */}
            <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl p-8 flex flex-col items-center justify-center text-center">
              <Heart className="w-16 h-16 text-purple-600 mb-4" />
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Share Your Story</h4>
              <p className="text-gray-600 mb-6">
                Your journey matters. Share how Path of Unity has touched your spiritual life.
              </p>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Submit Testimony
              </button>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Begin Your Spiritual Journey?
            </h3>
            <p className="text-gray-600 mb-6">
              Join our growing community of souls seeking unity, wisdom, and divine connection.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                <Link to="/teachings">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Explore All Teachings
              </button>
                </Link>
                
             
              <Link to="/events">
              <button className="bg-white text-purple-600 border-2 border-purple-600 px-8 py-3 rounded-full font-medium hover:bg-purple-50 transition-all duration-300 flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                View All Events
              </button>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedContent;