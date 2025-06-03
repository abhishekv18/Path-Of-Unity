import React, { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Clock, MapPin, Users, Star, Flower, Sun, Moon } from 'lucide-react';

const EventsCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState('month'); // 'month' or 'list'
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Future planned spiritual events (2027-2028)
  const events = [
    {
      id: 1,
      title: "World Interfaith Harmony Week Celebration",
      date: new Date(2027, 1, 5), // February 5, 2027
      time: "6:00 PM - 8:30 PM",
      location: "Main Sanctuary",
      type: "ceremony",
      description: "Annual celebration bringing together multiple faith traditions in unity and understanding. Features music, prayers, and shared wisdom from various spiritual paths.",
      status: "planned",
      isUpcoming: true
    },
    {
      id: 2,
      title: "Tu B'Shevat Tree Blessing Ceremony",
      date: new Date(2027, 1, 12), // February 12, 2027
      time: "10:00 AM - 12:00 PM",
      location: "Sacred Gardens",
      type: "ceremony",
      description: "Jewish New Year for Trees celebration with interfaith participation. Plant trees, share fruits, and honor our connection to nature.",
      status: "planned",
      isUpcoming: true
    },
    {
      id: 3,
      title: "Spring Equinox Meditation Retreat",
      date: new Date(2027, 2, 20), // March 20, 2027
      time: "9:00 AM - 5:00 PM",
      location: "Retreat Center",
      type: "meditation",
      description: "Day-long silent retreat marking the spring equinox. Guided meditations, walking meditation, and contemplative practices in nature.",
      status: "planned",
      isUpcoming: true
    },
    {
      id: 4,
      title: "Mystic Poetry & Sacred Music Evening",
      date: new Date(2027, 3, 15), // April 15, 2027
      time: "7:00 PM - 9:00 PM",
      location: "Arts Hall",
      type: "cultural",
      description: "Evening of spiritual poetry from Rumi, Hafez, and other mystic poets, accompanied by sacred music from various traditions.",
      status: "planned",
      isUpcoming: true
    },
    {
      id: 5,
      title: "Sacred Geometry & Mandala Workshop",
      date: new Date(2027, 4, 10), // May 10, 2027
      time: "1:00 PM - 4:00 PM",
      location: "Art Studio",
      type: "teaching",
      description: "Explore the spiritual significance of sacred geometry through hands-on mandala creation. All materials provided.",
      status: "planned",
      isUpcoming: true
    },
    {
      id: 6,
      title: "Summer Solstice Fire Ceremony",
      date: new Date(2027, 5, 21), // June 21, 2027
      time: "8:00 PM - 10:00 PM",
      location: "Outdoor Amphitheater",
      type: "ceremony",
      description: "Ancient fire ceremony honoring the longest day of the year. Community prayers, intentions, and sacred fire ritual.",
      status: "planned",
      isUpcoming: true
    },
    {
      id: 7,
      title: "Interfaith Youth Leadership Summit",
      date: new Date(2027, 6, 15), // July 15, 2027
      time: "9:00 AM - 6:00 PM",
      location: "Conference Center",
      type: "discussion",
      description: "Empowering young leaders from different faith backgrounds to build bridges and create positive change in their communities.",
      status: "planned",
      isUpcoming: true
    },
    {
      id: 8,
      title: "Harvest Moon Gratitude Circle",
      date: new Date(2027, 8, 25), // September 25, 2027
      time: "7:30 PM - 9:00 PM",
      location: "Garden Pavilion",
      type: "ceremony",
      description: "Traditional harvest moon ceremony with gratitude practices, sharing of seasonal foods, and community blessing circle.",
      status: "planned",
      isUpcoming: true
    },
    {
      id: 9,
      title: "Meditation Teacher Training Intensive",
      date: new Date(2027, 9, 8), // October 8, 2027
      time: "9:00 AM - 5:00 PM",
      location: "Training Hall",
      type: "teaching",
      description: "Comprehensive training for aspiring meditation teachers. Learn various techniques, teaching methods, and how to create safe spaces.",
      status: "planned",
      isUpcoming: true
    },
    {
      id: 10,
      title: "Festival of Lights Unity Celebration",
      date: new Date(2027, 10, 20), // November 20, 2027
      time: "5:00 PM - 8:00 PM",
      location: "Main Hall",
      type: "cultural",
      description: "Celebrating Diwali, Hanukkah, and other festivals of light with interfaith participation. Candle lighting, prayers, and cultural performances.",
      status: "planned",
      isUpcoming: true
    },
    {
      id: 11,
      title: "Winter Solstice Candlelight Vigil",
      date: new Date(2027, 11, 21), // December 21, 2027
      time: "6:00 PM - 8:00 PM",
      location: "Sanctuary",
      type: "ceremony",
      description: "Contemplative ceremony marking the return of light. Silent meditation, candle lighting, and prayers for peace and renewal.",
      status: "planned",
      isUpcoming: true
    },
    {
      id: 12,
      title: "New Year Intention Setting Circle",
      date: new Date(2028, 0, 7), // January 7, 2028
      time: "2:00 PM - 4:00 PM",
      location: "Prayer Circle",
      type: "ceremony",
      description: "Begin the new year with intention and purpose. Guided meditation, personal reflection, and community sharing of hopes and dreams.",
      status: "planned",
      isUpcoming: true
    }
  ];

  const eventTypeIcons = {
    meditation: Sun,
    prayer: Star,
    teaching: Flower,
    ceremony: Moon,
    discussion: Users,
    cultural: Star
  };

  const eventTypeColors = {
    meditation: "from-amber-400 to-orange-500",
    prayer: "from-purple-400 to-indigo-500",
    teaching: "from-emerald-400 to-teal-500",
    ceremony: "from-blue-400 to-cyan-500",
    discussion: "from-rose-400 to-pink-500",
    cultural: "from-violet-400 to-purple-500"
  };

  // Calendar calculations
  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const navigateMonth = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  const getEventsForDate = (date) => {
    return events.filter(event => 
      event.date.toDateString() === date.toDateString()
    );
  };

  const calendarDays = useMemo(() => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    // Previous month's trailing days
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    // Current month's days
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
      const dayEvents = getEventsForDate(date);
      days.push({
        date,
        day,
        events: dayEvents,
        isToday: date.toDateString() === new Date().toDateString()
      });
    }

    return days;
  }, [currentDate, events]);

  const upcomingEvents = events
    .filter(event => event.date >= new Date())
    .sort((a, b) => a.date - b.date)
    .slice(0, 6);

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gradient-to-br from-slate-50 via-white to-indigo-50 min-h-screen">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 bg-clip-text text-transparent mb-2">
          Future Sacred Events Calendar
        </h1>
        <p className="text-slate-600 text-lg">Our planned spiritual journey and community gatherings (2027-2028)</p>
        <div className="mt-4 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200">
          <p className="text-amber-800 font-medium flex items-center justify-center gap-2">
            <Star className="w-5 h-5" />
            These are our planned future events. To join or get updates, please contact us!
          </p>
        </div>
      </div>

      {/* View Toggle */}
      <div className="flex justify-center mb-6">
        <div className="bg-white/70 backdrop-blur-sm rounded-full p-1 shadow-lg border border-white/20">
          <button
            onClick={() => setViewMode('month')}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              viewMode === 'month'
                ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg'
                : 'text-slate-600 hover:text-indigo-600'
            }`}
          >
            <Calendar className="w-4 h-4 inline mr-2" />
            Calendar View
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              viewMode === 'list'
                ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg'
                : 'text-slate-600 hover:text-indigo-600'
            }`}
          >
            <Users className="w-4 h-4 inline mr-2" />
            List View
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Calendar/List View */}
        <div className="lg:col-span-3">
          {viewMode === 'month' ? (
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden">
              {/* Calendar Header */}
              <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-500 p-6 text-white">
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => navigateMonth(-1)}
                    className="p-2 rounded-full hover:bg-white/20 transition-colors duration-200"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <h2 className="text-2xl font-bold">
                    {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                  </h2>
                  <button
                    onClick={() => navigateMonth(1)}
                    className="p-2 rounded-full hover:bg-white/20 transition-colors duration-200"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="p-6">
                {/* Day Names */}
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {dayNames.map(day => (
                    <div key={day} className="text-center font-semibold text-slate-600 py-2">
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar Days */}
                <div className="grid grid-cols-7 gap-2">
                  {calendarDays.map((dayData, index) => (
                    <div
                      key={index}
                      className={`min-h-[100px] p-2 rounded-xl border-2 transition-all duration-200 ${
                        dayData
                          ? dayData.isToday
                            ? 'bg-gradient-to-br from-indigo-100 to-purple-100 border-indigo-300 shadow-md'
                            : 'bg-gradient-to-br from-slate-50 to-white border-slate-200 hover:border-indigo-200 hover:shadow-md'
                          : 'border-transparent'
                      }`}
                    >
                      {dayData && (
                        <>
                          <div className={`text-sm font-semibold mb-1 ${
                            dayData.isToday ? 'text-indigo-700' : 'text-slate-700'
                          }`}>
                            {dayData.day}
                          </div>
                          <div className="space-y-1">
                            {dayData.events.slice(0, 2).map(event => {
                              const IconComponent = eventTypeIcons[event.type];
                              return (
                                <div
                                  key={event.id}
                                  onClick={() => setSelectedEvent(event)}
                                  className={`text-xs p-1 rounded-md cursor-pointer transition-all duration-200 bg-gradient-to-r ${eventTypeColors[event.type]} text-white hover:scale-105 hover:shadow-md`}
                                >
                                  <div className="flex items-center gap-1">
                                    <IconComponent className="w-3 h-3" />
                                    <span className="truncate">{event.title}</span>
                                  </div>
                                </div>
                              );
                            })}
                            {dayData.events.length > 2 && (
                              <div className="text-xs text-slate-500 text-center">
                                +{dayData.events.length - 2} more
                              </div>
                            )}
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* List View */
            <div className="space-y-4">
              {upcomingEvents.map(event => {
                const IconComponent = eventTypeIcons[event.type];
                return (
                  <div
                    key={event.id}
                    onClick={() => setSelectedEvent(event)}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-full bg-gradient-to-r ${eventTypeColors[event.type]}`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-800 mb-2">{event.title}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-slate-600">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {event.date.toLocaleDateString()}
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {event.time}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {event.location}
                          </div>
                        </div>
                        <p className="text-slate-700 mt-2">{event.description}</p>
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center gap-2 text-sm">
                            <div className="px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-full text-xs font-medium">
                              Planned Event
                            </div>
                          </div>
                          <button 
                            onClick={() => window.location.href = '/contact'}
                            className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-semibold rounded-full hover:shadow-lg transition-all duration-200 hover:scale-105"
                          >
                            Contact to Join
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Sidebar - Upcoming Events */}
        <div className="lg:col-span-1">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6 sticky top-6">
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Star className="w-5 h-5 text-amber-500" />
              Planned Events
            </h3>
            <div className="space-y-3 mb-6">
              {upcomingEvents.map(event => {
                const IconComponent = eventTypeIcons[event.type];
                return (
                  <div
                    key={event.id}
                    onClick={() => setSelectedEvent(event)}
                    className="p-3 rounded-xl bg-gradient-to-r from-slate-50 to-white border border-slate-200 cursor-pointer hover:shadow-md transition-all duration-200 hover:scale-[1.02]"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-full bg-gradient-to-r ${eventTypeColors[event.type]}`}>
                        <IconComponent className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-slate-800 text-sm truncate">
                          {event.title}
                        </h4>
                        <p className="text-xs text-slate-600">
                          {event.date.toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="border-t border-slate-200 pt-4">
              <button 
                onClick={() => window.location.href = '/contact'}
                className="w-full py-3 px-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-200 hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <Users className="w-4 h-4" />
                Contact Us to Join
              </button>
              <p className="text-xs text-slate-500 text-center mt-2">
                Get notified when registration opens
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-auto">
            <div className={`p-6 bg-gradient-to-r ${eventTypeColors[selectedEvent.type]} text-white rounded-t-2xl`}>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  {React.createElement(eventTypeIcons[selectedEvent.type], { className: "w-8 h-8" })}
                  <div>
                    <h2 className="text-2xl font-bold">{selectedEvent.title}</h2>
                    <p className="text-white/90">{selectedEvent.type.charAt(0).toUpperCase() + selectedEvent.type.slice(1)}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="p-2 rounded-full hover:bg-white/20 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3 text-slate-700">
                  <Calendar className="w-5 h-5 text-indigo-500" />
                  <span>{selectedEvent.date.toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <Clock className="w-5 h-5 text-purple-500" />
                  <span>{selectedEvent.time}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <MapPin className="w-5 h-5 text-teal-500" />
                  <span>{selectedEvent.location}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <Users className="w-5 h-5 text-rose-500" />
                  <span>{selectedEvent.attendees}/{selectedEvent.maxAttendees} attending</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Description</h3>
                <p className="text-slate-700 leading-relaxed">{selectedEvent.description}</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Event Status</h3>
                <div className="flex items-center gap-2">
                  <div className="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-full text-sm font-medium flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Planned Future Event
                  </div>
                </div>
                <p className="text-sm text-slate-600 mt-2">
                  This event is in our planning phase. Contact us to express interest and receive updates when registration opens.
                </p>
              </div>
              
              <div className="flex gap-3">
                <button 
                  onClick={() => window.location.href = '/contact'}
                  className={`flex-1 py-3 px-6 rounded-xl bg-gradient-to-r ${eventTypeColors[selectedEvent.type]} text-white font-semibold hover:shadow-lg transition-all duration-200 hover:scale-[1.02] flex items-center justify-center gap-2`}
                >
                  <Users className="w-4 h-4" />
                  Contact to Join
                </button>
                <button className="px-6 py-3 rounded-xl border-2 border-slate-300 text-slate-700 font-semibold hover:border-indigo-300 hover:text-indigo-600 transition-all duration-200">
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsCalendar;