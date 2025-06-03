import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, MapPin, Users, Heart, Send, Check, AlertCircle, Loader } from 'lucide-react';

/*
EmailJS Setup Instructions:
1. Install EmailJS: npm install emailjs-com
2. Create account at https://www.emailjs.com/
3. Set up email service (Gmail, Outlook, etc.)
4. Create two email templates:
   - Client Confirmation Template (ID: client_confirmation_template)
   - Organizer Notification Template (ID: organizer_notification_template)
5. Replace YOUR_SERVICE_ID, YOUR_PUBLIC_KEY with actual values
6. Add EmailJS script to public/index.html:
   <script src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"></script>
7. Initialize EmailJS in your main App.js:
   window.emailjs.init('YOUR_PUBLIC_KEY');
*/

const RSVPForm = ({ event, isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    attendeeCount: 1,
    dietaryRestrictions: '',
    specialAccommodations: '',
    hearAboutEvent: '',
    spiritualBackground: '',
    prayerRequests: '',
    volunteerInterest: false,
    emergencyContact: '',
    ageGroup: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Reset form when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        attendeeCount: 1,
        dietaryRestrictions: '',
        specialAccommodations: '',
        hearAboutEvent: '',
        spiritualBackground: '',
        prayerRequests: '',
        volunteerInterest: false,
        emergencyContact: '',
        ageGroup: ''
      });
      setErrors({});
      setIsSubmitted(false);
      setShowSuccess(false);
    }
  }, [isOpen]);

  // Sample event data for demo
  const defaultEvent = {
    id: 1,
    title: "Morning Meditation Circle",
    date: "2025-06-15",
    time: "7:00 AM - 8:30 AM",
    location: "Unity Garden",
    capacity: 25,
    registered: 8,
    hasFood: true
  };

  const currentEvent = event || defaultEvent;

  const validateForm = () => {
    const newErrors = {};

    // Required fields
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (formData.phone && !/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (formData.attendeeCount < 1 || formData.attendeeCount > 10) {
      newErrors.attendeeCount = 'Please select between 1-10 attendees';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare data for EmailJS
      const rsvpData = {
        ...formData,
        eventId: currentEvent.id,
        eventTitle: currentEvent.title,
        eventDate: currentEvent.date,
        eventTime: currentEvent.time,
        eventLocation: currentEvent.location,
        submittedAt: new Date().toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      // Send confirmation email to the client
      const clientEmailParams = {
        to_name: formData.fullName,
        to_email: formData.email,
        event_title: currentEvent.title,
        event_date: currentEvent.date,
        event_time: currentEvent.time,
        event_location: currentEvent.location,
        attendee_count: formData.attendeeCount,
        dietary_restrictions: formData.dietaryRestrictions || 'None specified',
        special_accommodations: formData.specialAccommodations || 'None requested',
        prayer_requests: formData.prayerRequests || 'None shared',
        submission_date: rsvpData.submittedAt
      };

      // Send notification email to organizers
      const organizerEmailParams = {
        event_title: currentEvent.title,
        attendee_name: formData.fullName,
        attendee_email: formData.email,
        attendee_phone: formData.phone || 'Not provided',
        attendee_count: formData.attendeeCount,
        dietary_restrictions: formData.dietaryRestrictions || 'None',
        special_accommodations: formData.specialAccommodations || 'None',
        spiritual_background: formData.spiritualBackground || 'Not specified',
        prayer_requests: formData.prayerRequests || 'None',
        volunteer_interest: formData.volunteerInterest ? 'Yes' : 'No',
        hear_about_event: formData.hearAboutEvent || 'Not specified',
        emergency_contact: formData.emergencyContact || 'Not provided',
        age_group: formData.ageGroup || 'Not specified',
        submission_date: rsvpData.submittedAt
      };

      // Note: Replace these with your actual EmailJS service ID, template IDs, and public key
      // You'll need to set up two email templates in EmailJS:
      // 1. Client confirmation template
      // 2. Organizer notification template

      // Send client confirmation email
      await window.emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'client_confirmation_template', // Replace with your client template ID
        clientEmailParams,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      // Send organizer notification email
      await window.emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'organizer_notification_template', // Replace with your organizer template ID
        organizerEmailParams,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      setIsSubmitted(true);
      setShowSuccess(true);

      // Call parent component's submit handler
      if (onSubmit) {
        onSubmit(rsvpData);
      }

      // Auto-close after success message
      setTimeout(() => {
        onClose();
      }, 3000);

    } catch (error) {
      console.error('RSVP submission error:', error);
      setErrors({ submit: 'Failed to send RSVP confirmation. Please try again or contact us directly.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-purple-50 via-white to-blue-50 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-t-2xl">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
                <Heart className="w-6 h-6 text-pink-200" />
                Join Our Sacred Gathering
              </h2>
              <div className="space-y-1 text-purple-100">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span className="font-medium">{currentEvent.title}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{currentEvent.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{currentEvent.location}</span>
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-400">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-full">
                <Check className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-green-800">RSVP Confirmed! 🙏</h3>
                <p className="text-green-700">
                  Thank you for joining us. Confirmation emails have been sent to both you and our organizers.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Form */}
        {!isSubmitted && (
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Personal Information Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-600" />
                Personal Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all ${
                      errors.fullName ? 'border-red-500 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all ${
                      errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all ${
                      errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="+1 (555) 123-4567"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Attendees *
                  </label>
                  <select
                    name="attendeeCount"
                    value={formData.attendeeCount}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  >
                    {[...Array(10)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1} {i === 0 ? 'Person' : 'People'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Age Group
                  </label>
                  <select
                    name="ageGroup"
                    value={formData.ageGroup}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select age group</option>
                    <option value="18-25">18-25</option>
                    <option value="26-35">26-35</option>
                    <option value="36-45">36-45</option>
                    <option value="46-55">46-55</option>
                    <option value="56-65">56-65</option>
                    <option value="65+">65+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Emergency Contact
                  </label>
                  <input
                    type="text"
                    name="emergencyContact"
                    value={formData.emergencyContact}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="Name and phone number"
                  />
                </div>
              </div>
            </div>

            {/* Event-Specific Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-purple-600" />
                Event Details
              </h3>

              {currentEvent.hasFood && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Dietary Restrictions or Preferences
                  </label>
                  <input
                    type="text"
                    name="dietaryRestrictions"
                    value={formData.dietaryRestrictions}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="Vegetarian, vegan, gluten-free, allergies, etc."
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Special Accommodations
                </label>
                <textarea
                  name="specialAccommodations"
                  value={formData.specialAccommodations}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                  placeholder="Wheelchair access, hearing assistance, childcare needs, etc."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  How did you hear about this event?
                </label>
                <select
                  name="hearAboutEvent"
                  value={formData.hearAboutEvent}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                >
                  <option value="">Please select</option>
                  <option value="website">Our website</option>
                  <option value="social-media">Social media</option>
                  <option value="friend">Friend or family</option>
                  <option value="newsletter">Newsletter</option>
                  <option value="community-board">Community board</option>
                  <option value="search-engine">Search engine</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Spiritual & Community Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <Heart className="w-5 h-5 text-purple-600" />
                Spiritual & Community
              </h3>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Spiritual Background (Optional)
                </label>
                <input
                  type="text"
                  name="spiritualBackground"
                  value={formData.spiritualBackground}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="Christian, Buddhist, Hindu, Muslim, Jewish, Other, or Interfaith"
                />
                <p className="mt-1 text-xs text-gray-500">
                  This helps us prepare inclusive activities for everyone
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Prayer Requests or Intentions (Optional)
                </label>
                <textarea
                  name="prayerRequests"
                  value={formData.prayerRequests}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                  placeholder="Share any prayer requests or intentions you'd like our community to hold in their hearts..."
                />
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="volunteerInterest"
                  name="volunteerInterest"
                  checked={formData.volunteerInterest}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                />
                <label htmlFor="volunteerInterest" className="text-sm text-gray-700 cursor-pointer">
                  I'm interested in volunteering at future events
                </label>
              </div>
            </div>

            {/* Error Message */}
            {errors.submit && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  {errors.submit}
                </p>
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-end gap-4 pt-4 border-t">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors"
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin" />
                    Sending RSVP...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send RSVP
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default RSVPForm;