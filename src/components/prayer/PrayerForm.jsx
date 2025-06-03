

// components/prayer/PrayerForm.jsx
// import React, { useState } from 'react';
// import { X, Send, Heart } from 'lucide-react';


// const PrayerForm = ({ onSubmit, onClose }) => {
//   const [formData, setFormData] = useState({
//     text: '',
//     author: '',
//     category: 'general'
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const categories = [
//     { id: 'general', label: 'General', color: 'bg-gray-100' },
//     { id: 'healing', label: 'Healing', color: 'bg-green-100' },
//     { id: 'peace', label: 'Peace', color: 'bg-blue-100' },
//     { id: 'gratitude', label: 'Gratitude', color: 'bg-yellow-100' },
//     { id: 'family', label: 'Family', color: 'bg-pink-100' },
//     { id: 'guidance', label: 'Guidance', color: 'bg-purple-100' }
//   ];

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!formData.text.trim()) return;

//     setIsSubmitting(true);
    
//     // Simulate API call
//     setTimeout(() => {
//       onSubmit(formData);
//       setIsSubmitting(false);
//     }, 1000);
//   };

//   const handleChange = (field, value) => {
//     setFormData(prev => ({ ...prev, [field]: value }));
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//       <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md transform transition-all">
        
//         {/* Header */}
//         <div className="flex items-center justify-between p-6 border-b border-gray-100">
//           <div className="flex items-center gap-3">
//             <div className="w-10 h-10 bg-gradient-to-r from-divine-gold to-peace-blue rounded-full flex items-center justify-center">
//               <Heart className="w-5 h-5 text-white" />
//             </div>
//             <h2 className="text-xl font-spiritual font-bold text-gray-800">Share Your Prayer</h2>
//           </div>
//           <button
//             onClick={onClose}
//             className="p-2 hover:bg-gray-100 rounded-full transition-colors"
//           >
//             <X className="w-5 h-5 text-gray-500" />
//           </button>
//         </div>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="p-6">
          
//           {/* Prayer Text */}
//           <div className="mb-6">
//             <label className="block text-sm font-semibold text-gray-700 mb-2">
//               Your Prayer
//             </label>
//             <textarea
//               value={formData.text}
//               onChange={(e) => handleChange('text', e.target.value)}
//               placeholder="Share your prayer, intention, or request..."
//               rows={4}
//               className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-divine-gold focus:border-transparent outline-none resize-none"
//               required
//             />
//             <p className="text-xs text-gray-500 mt-1">
//               Your prayer will be visible to others on the prayer wall
//             </p>
//           </div>

//           {/* Author */}
//           <div className="mb-6">
//             <label className="block text-sm font-semibold text-gray-700 mb-2">
//               Your Name (Optional)
//             </label>
//             <input
//               type="text"
//               value={formData.author}
//               onChange={(e) => handleChange('author', e.target.value)}
//               placeholder="Anonymous"
//               className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-divine-gold focus:border-transparent outline-none"
//             />
//           </div>

//           {/* Category */}
//           <div className="mb-6">
//             <label className="block text-sm font-semibold text-gray-700 mb-2">
//               Category
//             </label>
//             <div className="grid grid-cols-2 gap-2">
//               {categories.map((category) => (
//                 <button
//                   key={category.id}
//                   type="button"
//                   onClick={() => handleChange('category', category.id)}
//                   className={`p-3 rounded-lg border text-sm font-medium transition-all ${
//                     formData.category === category.id
//                       ? 'border-divine-gold bg-divine-gold text-white'
//                       : 'border-gray-200 bg-gray-50 text-gray-700 hover:bg-gray-100'
//                   }`}
//                 >
//                   {category.label}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             disabled={isSubmitting || !formData.text.trim()}
//             className="w-full bg-gradient-to-r from-divine-gold to-peace-blue text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             {isSubmitting ? (
//               <>
//                 <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></div>
//                 Sharing...
//               </>
//             ) : (
//               <>
//                 <Send className="w-4 h-4" />
//                 Share Prayer
//               </>
//             )}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default PrayerForm;

import React, { useState, useEffect } from 'react';
import { Heart, Flame, Send, Filter, X, Plus, Sparkles } from 'lucide-react';

// Prayer Card Component
const PrayerCard = ({ prayer = {}, onLight }) => {
  if (!prayer || typeof prayer !== 'object') {
    return (
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
        <p className="text-white/60">Unable to load prayer</p>
      </div>
    );
  }

  const [isLit, setIsLit] = useState(false);
  const [likes, setLikes] = useState(prayer.likes || 0);

  const handleLight = () => {
    setIsLit(true);
    setLikes(prev => prev + 1);
    if (onLight && prayer.id) {
      onLight(prayer.id);
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 group">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
            {(prayer.author && prayer.author[0]) || 'A'}
          </div>
          <div>
            <p className="text-white font-medium">{prayer.author || 'Anonymous'}</p>
            <p className="text-white/60 text-sm">{prayer.category || 'General'}</p>
          </div>
        </div>
        <span className="text-white/50 text-xs">{prayer.timeAgo || 'Recently'}</span>
      </div>
      
      <p className="text-white/90 mb-4 leading-relaxed">{prayer.text || 'No prayer text available'}</p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={handleLight}
            disabled={isLit}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
              isLit 
                ? 'bg-orange-500/30 text-orange-300 cursor-default' 
                : 'bg-white/10 hover:bg-orange-500/20 text-white hover:text-orange-300'
            }`}
          >
            <Flame className={`w-4 h-4 ${isLit ? 'animate-pulse' : ''}`} />
            <span className="text-sm">{isLit ? 'Lit' : 'Light Candle'}</span>
          </button>
          
          <div className="flex items-center space-x-1 text-white/60">
            <Heart className="w-4 h-4" />
            <span className="text-sm">{likes}</span>
          </div>
        </div>
        
        {prayer.isUrgent && (
          <div className="flex items-center space-x-1 text-red-400">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs">Urgent</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PrayerCard;

// // Prayer Form Component
// const PrayerForm = ({ onSubmit, onClose }) => {
//   const [formData, setFormData] = useState({
//     text: '',
//     author: '',
//     category: 'General',
//     isAnonymous: false,
//     isUrgent: false
//   });

//   const categories = ['General', 'Health', 'Family', 'Peace', 'Gratitude', 'Guidance', 'Strength'];

//   const handleSubmit = () => {
//     if (formData.text.trim()) {
//       onSubmit({
//         ...formData,
//         author: formData.isAnonymous ? 'Anonymous' : formData.author || 'Anonymous',
//         id: Date.now(),
//         timeAgo: 'just now',
//         likes: 0
//       });
//       setFormData({ text: '', author: '', category: 'General', isAnonymous: false, isUrgent: false });
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
//       <div className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-2xl p-8 max-w-md w-full backdrop-blur-md border border-white/20">
//         <div className="flex justify-between items-center mb-6">
//           <h3 className="text-2xl font-bold text-white">Share Your Prayer</h3>
//           <button
//             onClick={onClose}
//             className="text-white/60 hover:text-white transition-colors"
//           >
//             <X className="w-6 h-6" />
//           </button>
//         </div>

//         <div className="space-y-4">
//           <div>
//             <textarea
//               value={formData.text}
//               onChange={(e) => setFormData(prev => ({ ...prev, text: e.target.value }))}
//               placeholder="Share your prayer request or gratitude..."
//               className="w-full h-32 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 resize-none focus:outline-none focus:border-white/40"
//             />
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <input
//                 type="text"
//                 value={formData.author}
//                 onChange={(e) => setFormData(prev => ({ ...prev, author: e.target.value }))}
//                 placeholder="Your name (optional)"
//                 className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:border-white/40"
//                 disabled={formData.isAnonymous}
//               />
//             </div>
//             <div>
//               <select
//                 value={formData.category}
//                 onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
//                 className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-white/40"
//               >
//                 {categories.map(cat => (
//                   <option key={cat} value={cat} className="bg-purple-900">{cat}</option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           <div className="flex items-center space-x-4 text-sm">
//             <label className="flex items-center space-x-2 text-white cursor-pointer">
//               <input
//                 type="checkbox"
//                 checked={formData.isAnonymous}
//                 onChange={(e) => setFormData(prev => ({ ...prev, isAnonymous: e.target.checked }))}
//                 className="rounded"
//               />
//               <span>Post anonymously</span>
//             </label>
//             <label className="flex items-center space-x-2 text-white cursor-pointer">
//               <input
//                 type="checkbox"
//                 checked={formData.isUrgent}
//                 onChange={(e) => setFormData(prev => ({ ...prev, isUrgent: e.target.checked }))}
//                 className="rounded"
//               />
//               <span>Urgent prayer</span>
//             </label>
//           </div>

//           <button
//             onClick={handleSubmit}
//             className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center space-x-2"
//           >
//             <Send className="w-4 h-4" />
//             <span>Share Prayer</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PrayerForm;