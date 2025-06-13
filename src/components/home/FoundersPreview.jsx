
// import React, { useState } from 'react';
// import { ChevronRight, Heart, Users, Globe, Cross, Star } from 'lucide-react';
// import { Link } from 'react-router-dom';

// // Founders data (normally imported from data/founders.js)
// const foundersData = {
//   christian: {
//     name: " Matiunina Natalia",
//     background: "Christian theologian and interfaith advocate",
//     image: "/images/6833591.png",
//     bio: "Sarah brings 15 years of Christian ministry experience and a passion for building bridges between different faith communities.",
//     quote: "In Christ's love, we find the strength to embrace all humanity."
//   },
//   hindu: {
//     name: "Raj Patel", 
//     background: "Hindu scholar and spiritual teacher",
//     image: "/images/male-avatar-portrait-of-a-young-man-with-a-beard-illustration-of-male-character-in-modern-color-style-vector.jpg",
//     bio: "Raj combines ancient Vedantic wisdom with modern interfaith dialogue, believing in the universal truth found in all religions.",
//     quote: "सर्वे भवन्तु सुखिनः - May all beings be happy and free."
//   },
//   mission: "To create a sacred space where all faiths unite in love, understanding, and shared spiritual growth.",
//   vision: "A world where religious diversity is celebrated as a path to deeper divine connection.",
//   story: "Sarah and Raj met during an interfaith conference in 2019, discovering their shared vision of unity despite different religious backgrounds. Their love story became a testament to the beauty of interfaith harmony."
// };

// const FoundersPreview = () => {
//   const [hoveredFounder, setHoveredFounder] = useState(null);

//   const founders = [
//     {
//       id: 1,
//       name: foundersData.christian.name,
//       title: "Christian Theologian & Co-Founder",
//       image: foundersData.christian.image,
//       background: foundersData.christian.background,
//       bio: foundersData.christian.bio,
//       philosophy: foundersData.christian.quote,
//       gradient: "from-blue-500 to-blue-700",
//       shadowColor: "shadow-blue-200",
//       icon: Cross
//     },
//     {
//       id: 2,
//       name: foundersData.hindu.name,
//       title: "Hindu Scholar & Co-Founder",
//       image: foundersData.hindu.image,
//       background: foundersData.hindu.background,
//       bio: foundersData.hindu.bio,
//       philosophy: foundersData.hindu.quote,
//       gradient: "from-yellow-400 to-amber-500",
//       shadowColor: "shadow-yellow-200",
//       icon: Star
//     }
//   ];

//   return (
//     <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-amber-50 relative overflow-hidden">
//       {/* Background decorative elements */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-400 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-300 rounded-full blur-3xl animate-pulse"></div>
//       </div>

//       {/* Floating spiritual symbols */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-32 right-20 text-blue-200 opacity-30 animate-float">
//           <Cross className="w-12 h-12" />
//         </div>
//         <div className="absolute bottom-32 left-20 text-yellow-300 opacity-30 animate-float-delayed">
//           <Star className="w-12 h-12" />
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-yellow-100 px-6 py-3 rounded-full mb-6 shadow-lg border border-blue-200">
//             <Heart className="w-5 h-5 text-blue-600 animate-pulse" />
//             <span className="text-blue-800 font-semibold">Meet Our Spiritual Guides</span>
//           </div>
          
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//             Guided by
//             <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-yellow-500 bg-clip-text text-transparent">
//               {" "}Divine Unity
//             </span>
//           </h2>
          
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             {foundersData.story}
//           </p>
//         </div>

//         {/* Founders Grid */}
//         <div className="grid md:grid-cols-2 gap-8 mb-12">
//           {founders.map((founder) => (
//             <div
//               key={founder.id}
//               className={`group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl ${founder.shadowColor} hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 hover:scale-105 border border-gray-100`}
//               onMouseEnter={() => setHoveredFounder(founder.id)}
//               onMouseLeave={() => setHoveredFounder(null)}
//             >
//               {/* Gradient overlay */}
//               <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${founder.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}></div>
              
//               {/* Spiritual glow effect */}
//               <div className={`absolute -inset-1 rounded-3xl bg-gradient-to-r ${founder.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-700`}></div>
              
//               {/* Profile Image */}
//               <div className="relative mb-6">
//                 <div className={`w-28 h-28 mx-auto rounded-full bg-gradient-to-br ${founder.gradient} p-1 shadow-lg group-hover:shadow-xl transition-all duration-500`}>
//                   <div className="w-full h-full rounded-full bg-white p-1">
//                     <img src={founder.image} alt={founder.name} className="w-full h-full rounded-full object-cover" />
//                   </div>
//                 </div>
                
//                 {/* Divine blessing animation */}
//                 {hoveredFounder === founder.id && (
//                   <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full animate-bounce flex items-center justify-center shadow-lg">
//                     <Heart className="w-4 h-4 text-white" />
//                   </div>
//                 )}
//               </div>

//               {/* Content */}
//               <div className="text-center relative z-10">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-2">
//                   {founder.name}
//                 </h3>
//                 <p className={`text-sm font-semibold mb-4 bg-gradient-to-r ${founder.gradient} bg-clip-text text-transparent`}>
//                   {founder.title}
//                 </p>
//                 <p className="text-gray-600 text-sm mb-4 font-medium">
//                   {founder.background}
//                 </p>
//                 <div className="bg-gradient-to-r from-blue-50 to-yellow-50 rounded-xl p-5 mb-4 border border-blue-100">
//                   <p className="text-gray-700 text-sm italic font-medium leading-relaxed">
//                     "{founder.philosophy}"
//                   </p>
//                 </div>
//                 {/* Bio section */}
//                 <div className="text-xs text-gray-600 leading-relaxed">
//                   {founder.bio}
//                 </div>
//               </div>

//               {/* Hover effect indicators */}
//               <div className={`absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500`}>
//                 <div className={`w-10 h-10 bg-gradient-to-r ${founder.gradient} rounded-full shadow-lg flex items-center justify-center`}>
//                   <ChevronRight className="w-5 h-5 text-white" />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Mission & Vision Section */}
//         <div className="bg-white rounded-3xl p-10 shadow-xl mb-12 border border-blue-100 relative overflow-hidden">
//           {/* Background decoration */}
//           <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100 to-yellow-100 rounded-full opacity-30 transform translate-x-16 -translate-y-16"></div>
          
//           <div className="text-center mb-8 relative z-10">
//             <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent mb-4">Our Sacred Mission</h3>
//             <p className="text-lg text-gray-700 mb-6 italic font-medium leading-relaxed">
//               "{foundersData.mission}"
//             </p>
//             <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 mx-auto rounded-full"></div>
//           </div>
          
//           <div className="text-center relative z-10">
//             <h4 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-yellow-600 bg-clip-text text-transparent mb-3">Our Divine Vision</h4>
//             <p className="text-gray-600 leading-relaxed font-medium">
//               {foundersData.vision}
//             </p>
//           </div>
//         </div>

//         {/* Stats Section */}
//         <div className="bg-white rounded-3xl p-10 shadow-xl border border-blue-100">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
//             <div className="group">
//               <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-blue-300">
//                 <Cross className="w-10 h-10 text-white" />
//               </div>
//               <h4 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-2">15+</h4>
//               <p className="text-gray-600 font-medium">Years Ministry Experience</p>
//             </div>
            
//             <div className="group">
//               <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-yellow-300">
//                 <Star className="w-10 h-10 text-white" />
//               </div>
//               <h4 className="text-4xl font-bold bg-gradient-to-r from-yellow-500 to-amber-600 bg-clip-text text-transparent mb-2">2019</h4>
//               <p className="text-gray-600 font-medium">Unity Journey Began</p>
//             </div>
            
//             <div className="group">
//               <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-yellow-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-blue-200">
//                 <Heart className="w-10 h-10 text-white" />
//               </div>
//               <h4 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-yellow-500 bg-clip-text text-transparent mb-2">∞</h4>
//               <p className="text-gray-600 font-medium">Faiths United in Love</p>
//             </div>
//           </div>
//         </div>

//         {/* Call to Action */}
//         <div className="text-center mt-12">
//           <Link to='/about'>
//             <button className="group bg-gradient-to-r from-blue-600 via-blue-700 to-yellow-500 text-white px-10 py-5 rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-300 transition-all duration-500 transform hover:scale-105 border-2 border-transparent hover:border-blue-300">
//               <span className="flex items-center gap-3">
//                 Learn Our Divine Story
//                 <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-500" />
//               </span>
//             </button>
//           </Link>
//         </div>
//       </div>

//       {/* Add custom CSS for floating animations */}
//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-20px) rotate(5deg); }
//         }
        
//         @keyframes float-delayed {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-15px) rotate(-5deg); }
//         }
        
//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
        
//         .animate-float-delayed {
//           animation: float-delayed 8s ease-in-out infinite;
//           animation-delay: 2s;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default FoundersPreview;



import React, { useState } from 'react';
import { ChevronRight, Heart, Users, Globe, Cross, Star } from 'lucide-react';

// Founders data (normally imported from data/founders.js)
const foundersData = {
  christian: {
    name: " Matiunina Natalia",
    background: "Christian theologian and interfaith advocate",
    image: "/images/00b0c653-3a51-4693-be64-3e7ab0fb602d.jpg",
    bio: "Sarah brings 15 years of Christian ministry experience and a passion for building bridges between different faith communities.",
    quote: "In Christ's love, we find the strength to embrace all humanity."
  },
  mission: "To create a sacred space where all faiths unite in love, understanding, and shared spiritual growth.",
  vision: "A world where religious diversity is celebrated as a path to deeper divine connection.",
  story: "Matiunina Natalia discovered her calling for interfaith ministry in 2019, developing a vision of unity that transcends religious boundaries. Her spiritual journey became a testament to the beauty of inclusive faith and divine love."
};

const FoundersPreview = () => {
  const [hoveredFounder, setHoveredFounder] = useState(null);

  const founder = {
    id: 1,
    name: foundersData.christian.name,
    title: "Christian Theologian & Founder",
    image: foundersData.christian.image,
    background: foundersData.christian.background,
    bio: foundersData.christian.bio,
    philosophy: foundersData.christian.quote,
    gradient: "from-blue-500 to-blue-700",
    shadowColor: "shadow-blue-200",
    icon: Cross
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-amber-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-300 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Floating spiritual symbols */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 right-20 text-blue-200 opacity-30 animate-float">
          <Cross className="w-12 h-12" />
        </div>
        <div className="absolute bottom-32 left-20 text-yellow-300 opacity-30 animate-float-delayed">
          <Star className="w-12 h-12" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-yellow-100 px-6 py-3 rounded-full mb-6 shadow-lg border border-blue-200">
            <Heart className="w-5 h-5 text-blue-600 animate-pulse" />
            <span className="text-blue-800 font-semibold">Meet Our Spiritual Guide</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Guided by
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-yellow-500 bg-clip-text text-transparent">
              {" "}Divine Unity
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {foundersData.story}
          </p>
        </div>

        {/* Single Founder Card */}
        <div className="max-w-2xl mx-auto mb-12">
          <div
            className={`group relative bg-white rounded-3xl p-12 shadow-xl hover:shadow-2xl ${founder.shadowColor} hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 hover:scale-105 border border-gray-100`}
            onMouseEnter={() => setHoveredFounder(founder.id)}
            onMouseLeave={() => setHoveredFounder(null)}
          >
            {/* Gradient overlay */}
            <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${founder.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}></div>
            
            {/* Spiritual glow effect */}
            <div className={`absolute -inset-1 rounded-3xl bg-gradient-to-r ${founder.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-700`}></div>
            
            {/* Profile Image - Much Larger */}
            <div className="relative mb-8">
              <div className={`w-48 h-48 mx-auto rounded-full bg-gradient-to-br ${founder.gradient} p-2 shadow-lg group-hover:shadow-xl transition-all duration-500`}>
                <div className="w-full h-full rounded-full bg-white p-2">
                  <img src={founder.image} alt={founder.name} className="w-full h-full rounded-full object-cover" />
                </div>
              </div>
              
              {/* Divine blessing animation */}
              {hoveredFounder === founder.id && (
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full animate-bounce flex items-center justify-center shadow-lg">
                  <Heart className="w-6 h-6 text-white" />
                </div>
              )}
            </div>

            {/* Content */}
            <div className="text-center relative z-10">
              <h3 className="text-3xl font-bold text-gray-900 mb-3">
                {founder.name}
              </h3>
              <p className={`text-lg font-semibold mb-6 bg-gradient-to-r ${founder.gradient} bg-clip-text text-transparent`}>
                {founder.title}
              </p>
              <p className="text-gray-600 text-base mb-6 font-medium">
                {founder.background}
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-yellow-50 rounded-xl p-6 mb-6 border border-blue-100">
                <p className="text-gray-700 text-base italic font-medium leading-relaxed">
                  "{founder.philosophy}"
                </p>
              </div>
              {/* Bio section */}
              <div className="text-sm text-gray-600 leading-relaxed">
                {founder.bio}
              </div>
            </div>

            {/* Hover effect indicators */}
            <div className={`absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500`}>
              <div className={`w-10 h-10 bg-gradient-to-r ${founder.gradient} rounded-full shadow-lg flex items-center justify-center`}>
                <ChevronRight className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="bg-white rounded-3xl p-10 shadow-xl mb-12 border border-blue-100 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100 to-yellow-100 rounded-full opacity-30 transform translate-x-16 -translate-y-16"></div>
          
          <div className="text-center mb-8 relative z-10">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent mb-4">Our Sacred Mission</h3>
            <p className="text-lg text-gray-700 mb-6 italic font-medium leading-relaxed">
              "{foundersData.mission}"
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="text-center relative z-10">
            <h4 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-yellow-600 bg-clip-text text-transparent mb-3">Our Divine Vision</h4>
            <p className="text-gray-600 leading-relaxed font-medium">
              {foundersData.vision}
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-3xl p-10 shadow-xl border border-blue-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-blue-300">
                <Cross className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-2">15+</h4>
              <p className="text-gray-600 font-medium">Years Ministry Experience</p>
            </div>
            
            <div className="group">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-yellow-300">
                <Star className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-4xl font-bold bg-gradient-to-r from-yellow-500 to-amber-600 bg-clip-text text-transparent mb-2">2019</h4>
              <p className="text-gray-600 font-medium">Unity Journey Began</p>
            </div>
            
            <div className="group">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-yellow-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-blue-200">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-yellow-500 bg-clip-text text-transparent mb-2">∞</h4>
              <p className="text-gray-600 font-medium">Faiths United in Love</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="group bg-gradient-to-r from-blue-600 via-blue-700 to-yellow-500 text-white px-10 py-5 rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-300 transition-all duration-500 transform hover:scale-105 border-2 border-transparent hover:border-blue-300">
            <span className="flex items-center gap-3">
              Learn Our Divine Story
              <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-500" />
            </span>
          </button>
        </div>
      </div>

      {/* Add custom CSS for floating animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-5deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default FoundersPreview;