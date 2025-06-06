
// import React, { useState } from 'react';

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState(null);

//   // EmailJS Configuration - Replace these with your actual values
//   const EMAILJS_CONFIG = {
//     serviceId: 'service_ogp55sb',     // Replace with your EmailJS Service ID
//     templateId: 'template_tdvbvsq',   // Replace with your EmailJS Template ID
//     publicKey: '46QbDP4d8fZhoY_Tq'      // Replace with your EmailJS Public Key
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitStatus(null);
    
//     try {
//       // EmailJS send parameters
//       const templateParams = {
//         from_name: formData.name,
//         from_email: formData.email,
//         subject: formData.subject,
//         message: formData.message,
//         to_email: 'I.Laity@yandex.com' // Your client's email
//       };

//       // Load EmailJS if not already loaded
//       if (typeof window.emailjs === 'undefined') {
//         const script = document.createElement('script');
//         script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
//         script.onload = () => {
//           window.emailjs.init(EMAILJS_CONFIG.publicKey);
//           sendEmail(templateParams);
//         };
//         document.head.appendChild(script);
//       } else {
//         sendEmail(templateParams);
//       }

//     } catch (error) {
//       console.error('Error sending message:', error);
//       setSubmitStatus({ 
//         success: false, 
//         message: 'The universe seems to have delayed your message. Please try again with patience.' 
//       });
//       setIsSubmitting(false);
//     }
//   };

//   const sendEmail = async (templateParams) => {
//     try {
//       const response = await window.emailjs.send(
//         EMAILJS_CONFIG.serviceId,
//         EMAILJS_CONFIG.templateId,
//         templateParams
//       );

//       console.log('Email sent successfully:', response);
      
//       setSubmitStatus({ 
//         success: true, 
//         message: 'Your sacred message has been received with gratitude 🙏' 
//       });
      
//       // Reset form
//       setFormData({ name: '', email: '', subject: '', message: '' });
//          setTimeout(() => {
//         setSubmitStatus(null);
//       }, 5000);
//     } catch (error) {
//       console.error('EmailJS Error:', error);
//       setSubmitStatus({ 
//         success: false, 
//         message: 'The universe seems to have delayed your message. Please try again with patience.' 
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="max-w-lg mx-auto p-6 rounded-xl bg-gradient-to-br from-white to-purple-50 shadow-lg border border-purple-100">
//       {/* Sacred Header */}
//       <div className="text-center mb-8 relative">
//         <div className="absolute top-0 left-0 right-0 flex justify-center">
//           <span className="text-yellow-300 text-xl animate-pulse">⭐</span>
//         </div>
//         <div className="mx-auto text-5xl text-purple-600 mb-3">📿</div>
//         <h2 className="text-3xl font-semibold text-purple-800 mb-2 font-serif">Sacred Connection Portal</h2>
//         <div className="flex justify-center items-center space-x-2">
//           <span className="text-green-500">🌿</span>
//           <p className="text-purple-600 italic">"Where divine messages find their home"</p>
//           <span className="text-blue-500">☮️</span>
//         </div>
//       </div>
// {/* 
//       Configuration Warning
//       {(EMAILJS_CONFIG.serviceId === 'YOUR_SERVICE_ID' || 
//         EMAILJS_CONFIG.templateId === 'YOUR_TEMPLATE_ID' || 
//         EMAILJS_CONFIG.publicKey === 'YOUR_PUBLIC_KEY') && (
//         <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
//           <div className="flex items-center space-x-2">
//             <span className="text-yellow-600">⚠️</span>
//             <p className="text-yellow-700 text-sm">
//               <strong>Setup Required:</strong> Please configure your EmailJS credentials in the code.
//             </p>
//           </div>
//         </div>
//       )} */}

//       {/* Spiritual Form */}
//       <div className="space-y-6">
//         {/* Name Field */}
//         <div className="relative">
//           <label htmlFor="name" className="block text-sm font-medium text-purple-700 mb-1 flex items-center">
//             <span className="mr-2 text-purple-500">👤</span> Your Blessed Name
//           </label>
//           <div className="relative">
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 pl-10 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-300 focus:border-purple-400 bg-white transition-all duration-300 placeholder-purple-300"
//               placeholder="Enter your name"
//             />
//             <div className="absolute left-3 top-3.5 text-purple-400">
//               👤
//             </div>
//           </div>
//         </div>
        
//         {/* Email Field */}
//         <div className="relative">
//           <label htmlFor="email" className="block text-sm font-medium text-purple-700 mb-1 flex items-center">
//             <span className="mr-2 text-purple-500">✉️</span> Email of Light
//           </label>
//           <div className="relative">
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 pl-10 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-300 focus:border-purple-400 bg-white transition-all duration-300 placeholder-purple-300"
//               placeholder="Your email"
//             />
//             <div className="absolute left-3 top-3.5 text-purple-400">
//               ✉️
//             </div>
//           </div>
//         </div>
        
//         {/* Subject Field */}
//         <div className="relative">
//           <label htmlFor="subject" className="block text-sm font-medium text-purple-700 mb-1 flex items-center">
//             <span className="mr-2 text-purple-500">❓</span> Divine Purpose
//           </label>
//           <div className="relative">
//             <select
//               id="subject"
//               name="subject"
//               value={formData.subject}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 pl-10 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-300 focus:border-purple-400 bg-white appearance-none transition-all duration-300"
//             >
//               <option value="">Select your sacred purpose</option>
//               <option value="General Inquiry">🌿 General Inquiry</option>
//               <option value="Prayer Request">🙏 Prayer Request</option>
//               <option value="Volunteer">🤲 Volunteer Opportunity</option>
//               <option value="Donation">💫 Donation Question</option>
//               <option value="Other">✨ Other Blessings</option>
//             </select>
//             <div className="absolute left-3 top-3.5 text-purple-400">
//               ❓
//             </div>
//           </div>
//         </div>
        
//         {/* Message Field */}
//         <div className="relative">
//           <label htmlFor="message" className="block text-sm font-medium text-purple-700 mb-1 flex items-center">
//             <span className="mr-2 text-purple-500">🙏</span> Sacred Message
//           </label>
//           <div className="relative">
//             <textarea
//               id="message"
//               name="message"
//               rows={5}
//               value={formData.message}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 pl-10 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-300 focus:border-purple-400 bg-white transition-all duration-300 placeholder-purple-300"
//               placeholder="Pour your heart's wisdom here..."
//             />
//             <div className="absolute left-3 top-3.5 text-purple-400">
//               🙏
//             </div>
//           </div>
//         </div>
        
//         {/* Submit Button */}
//         <div className="pt-2">
//           <button
//             onClick={handleSubmit}
//             disabled={isSubmitting}
//             className={`w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 ${
//               isSubmitting ? 'opacity-80 cursor-not-allowed' : ''
//             }`}
//           >
//             {isSubmitting ? (
//               <>
//                 <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                   <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                   <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                 </svg>
//                 <span>Sending to the Divine...</span>
//               </>
//             ) : (
//               <>
//                 <span className="text-yellow-200">✈️</span>
//                 <span>Release Your Blessing</span>
//               </>
//             )}
//           </button>
//         </div>
        
//         {/* Status Message */}
//         {submitStatus && (
//           <div 
//             className={`mt-4 p-4 rounded-xl text-center font-medium ${
//               submitStatus.success 
//                 ? 'bg-green-50 text-green-700 border border-green-200' 
//                 : 'bg-red-50 text-red-700 border border-red-200'
//             }`}
//           >
//             <div className="flex items-center justify-center space-x-2">
//               {submitStatus.success ? (
//                 <span className="text-xl">🙏</span>
//               ) : (
//                 <span className="text-xl">🌀</span>
//               )}
//               <span>{submitStatus.message}</span>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Sacred Footer */}
//       <div className="mt-8 text-center">
//         <div className="flex justify-center space-x-4 mb-3">
//           <span className="text-purple-400 text-xl">🔮</span>
//           <span className="text-yellow-300 text-xl">⭐</span>
//           <span className="text-purple-400 text-xl">🔮</span>
//         </div>
//         <p className="text-purple-400 text-sm italic">
//           "Messages sent to: I.Laity@yandex.com with love and confidentiality"
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;


import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // EmailJS Configuration - Replace these with your actual values
  const EMAILJS_CONFIG = {
    serviceId: 'service_ogp55sb',     // Replace with your EmailJS Service ID
    templateId: 'template_tdvbvsq',   // Replace with your EmailJS Template ID
    publicKey: '46QbDP4d8fZhoY_Tq'      // Replace with your EmailJS Public Key
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // EmailJS send parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'I.Laity@yandex.com' // Your client's email
      };

      // Load EmailJS if not already loaded
      if (typeof window.emailjs === 'undefined') {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
        script.onload = () => {
          window.emailjs.init(EMAILJS_CONFIG.publicKey);
          sendEmail(templateParams);
        };
        document.head.appendChild(script);
      } else {
        sendEmail(templateParams);
      }

    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus({ 
        success: false, 
        message: 'The universe seems to have delayed your message. Please try again with patience.' 
      });
      setIsSubmitting(false);
    }
  };

  const sendEmail = async (templateParams) => {
    try {
      const response = await window.emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams
      );

      console.log('Email sent successfully:', response);
      
      setSubmitStatus({ 
        success: true, 
        message: 'Your sacred message has been received with gratitude 🙏' 
      });
      
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
         setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus({ 
        success: false, 
        message: 'The universe seems to have delayed your message. Please try again with patience.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-lg mx-auto p-8 rounded-2xl bg-gradient-to-br from-white to-blue-50 shadow-2xl border border-blue-100 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 via-yellow-400 to-blue-600"></div>
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-300 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-600 rounded-full opacity-5 animate-pulse"></div>

        {/* Sacred Header */}
        <div className="text-center mb-10 relative">
          <div className="absolute top-0 left-0 right-0 flex justify-center">
            <span className="text-yellow-400 text-2xl animate-bounce">⭐</span>
          </div>
          <div className="mx-auto text-6xl text-blue-600 mb-4 animate-pulse">📿</div>
          <h2 className="text-4xl font-bold text-blue-800 mb-3 font-serif bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
            Sacred Connection Portal
          </h2>
          <div className="flex justify-center items-center space-x-3 mb-2">
            <span className="text-yellow-500 animate-pulse">🌿</span>
            <p className="text-blue-700 italic font-medium">"Where divine messages find their home"</p>
            <span className="text-blue-600 animate-pulse">☮️</span>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mt-4"></div>
        </div>

        {/* Spiritual Form */}
        <div className="space-y-8">
          {/* Name Field */}
          <div className="relative transform transition-all duration-300 hover:scale-105">
            <label htmlFor="name" className="block text-sm font-semibold text-blue-800 mb-2 flex items-center">
              <span className="mr-2 text-yellow-500">👤</span> Your Blessed Name
            </label>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-4 pl-12 border-2 border-blue-200 rounded-xl focus:ring-4 focus:ring-yellow-200 focus:border-blue-500 bg-white transition-all duration-300 placeholder-blue-300 text-blue-900 shadow-inner"
                placeholder="Enter your blessed name"
              />
              <div className="absolute left-4 top-4 text-yellow-500 text-lg">
                👤
              </div>
            </div>
          </div>
          
          {/* Email Field */}
          <div className="relative transform transition-all duration-300 hover:scale-105">
            <label htmlFor="email" className="block text-sm font-semibold text-blue-800 mb-2 flex items-center">
              <span className="mr-2 text-yellow-500">✉️</span> Email of Light
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-4 pl-12 border-2 border-blue-200 rounded-xl focus:ring-4 focus:ring-yellow-200 focus:border-blue-500 bg-white transition-all duration-300 placeholder-blue-300 text-blue-900 shadow-inner"
                placeholder="Your sacred email"
              />
              <div className="absolute left-4 top-4 text-yellow-500 text-lg">
                ✉️
              </div>
            </div>
          </div>
          
          {/* Subject Field */}
          <div className="relative transform transition-all duration-300 hover:scale-105">
            <label htmlFor="subject" className="block text-sm font-semibold text-blue-800 mb-2 flex items-center">
              <span className="mr-2 text-yellow-500">❓</span> Divine Purpose
            </label>
            <div className="relative">
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-4 pl-12 border-2 border-blue-200 rounded-xl focus:ring-4 focus:ring-yellow-200 focus:border-blue-500 bg-white appearance-none transition-all duration-300 text-blue-900 shadow-inner"
              >
                <option value="">Select your sacred purpose</option>
                <option value="General Inquiry">🌿 General Inquiry</option>
                <option value="Prayer Request">🙏 Prayer Request</option>
                <option value="Volunteer">🤲 Volunteer Opportunity</option>
                <option value="Donation">💫 Donation Question</option>
                <option value="Other">✨ Other Blessings</option>
              </select>
              <div className="absolute left-4 top-4 text-yellow-500 text-lg">
                ❓
              </div>
              <div className="absolute right-4 top-4 text-blue-500 pointer-events-none">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Message Field */}
          <div className="relative transform transition-all duration-300 hover:scale-105">
            <label htmlFor="message" className="block text-sm font-semibold text-blue-800 mb-2 flex items-center">
              <span className="mr-2 text-yellow-500">🙏</span> Sacred Message
            </label>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-4 pl-12 border-2 border-blue-200 rounded-xl focus:ring-4 focus:ring-yellow-200 focus:border-blue-500 bg-white transition-all duration-300 placeholder-blue-300 text-blue-900 shadow-inner resize-none"
                placeholder="Pour your heart's wisdom here..."
              />
              <div className="absolute left-4 top-4 text-yellow-500 text-lg">
                🙏
              </div>
            </div>
          </div>
          
          {/* Submit Button */}
          <div className="pt-4">
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`w-full py-5 px-8 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white font-bold rounded-xl transition-all duration-500 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-3 transform hover:scale-105 relative overflow-hidden ${
                isSubmitting ? 'opacity-80 cursor-not-allowed' : ''
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-20 animate-pulse"></div>
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span className="relative z-10">Sending to the Divine...</span>
                </>
              ) : (
                <>
                  <span className="text-yellow-300 text-xl relative z-10">✈️</span>
                  <span className="relative z-10 text-lg">Release Your Blessing</span>
                </>
              )}
            </button>
          </div>
          
          {/* Status Message */}
          {submitStatus && (
            <div 
              className={`mt-6 p-5 rounded-xl text-center font-semibold shadow-lg transform transition-all duration-500 ${
                submitStatus.success 
                  ? 'bg-gradient-to-r from-green-50 to-green-100 text-green-800 border-2 border-green-200' 
                  : 'bg-gradient-to-r from-yellow-50 to-orange-100 text-orange-800 border-2 border-orange-200'
              }`}
            >
              <div className="flex items-center justify-center space-x-3">
                {submitStatus.success ? (
                  <span className="text-2xl animate-bounce">🙏</span>
                ) : (
                  <span className="text-2xl animate-spin">🌀</span>
                )}
                <span className="text-lg">{submitStatus.message}</span>
              </div>
            </div>
          )}
        </div>

        {/* Sacred Footer */}
        <div className="mt-10 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <span className="text-blue-500 text-2xl animate-pulse">🔮</span>
            <span className="text-yellow-400 text-2xl animate-bounce">⭐</span>
            <span className="text-blue-500 text-2xl animate-pulse">🔮</span>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-3"></div>
          <p className="text-blue-600 text-sm italic font-medium">
            "Messages sent to: I.Laity@yandex.com with love and confidentiality"
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;