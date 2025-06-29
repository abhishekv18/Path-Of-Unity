
// import React from 'react';
// import { BookOpen, Video, Download, Search, Sparkles, Heart, Users, Clock, Star } from 'lucide-react';
// import TeachingsGrid from '../components/teachings/TeachingsGrid';
// import teachingsData from '../data/teachings.json'; // Assuming you have a JSON file with your teachings data
// import { useState, useEffect } from 'react';
// import VideoPlayer from '../components/teachings/VideoPlayer';
// import PDFDownload from '../components/teachings/PDFDownload';
// import { Link } from 'react-router-dom';

// const TeachingsPage = () => {
//   const [teachings, setTeachings] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Combine all content types with loading simulation
//     setTimeout(() => {
//       const allTeachings = [
//         ...teachingsData.videos,
//         ...teachingsData.articles,
//         ...teachingsData.resources
//       ];
//       setTeachings(allTeachings);
//       setIsLoading(false);
//     }, 800);
//   }, []);

//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center">
//         <div className="text-center">
//           <div className="relative">
//             <div className="w-16 h-16 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin mx-auto mb-4"></div>
//             <Sparkles className="w-6 h-6 text-purple-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
//           </div>
//           <p className="text-lg font-medium text-gray-700 animate-pulse">Loading Sacred Teachings...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="relative mt-14 md:mt-16 min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
//       {/* Floating Spiritual Elements */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
//         <div className="absolute top-20 left-10 w-2 h-2 bg-purple-300 rounded-full animate-pulse opacity-60"></div>
//         <div className="absolute top-40 right-20 w-3 h-3 bg-indigo-300 rounded-full animate-bounce opacity-40"></div>
//         <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-pink-300 rounded-full animate-ping opacity-50"></div>
//         <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-blue-300 rounded-full animate-pulse opacity-30"></div>
//         <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-purple-400 rounded-full animate-bounce opacity-40"></div>
//       </div>

//       {/* Hero Section */}
//       <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white py-20 px-4 z-10">
//         <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        
//         {/* Animated Background Pattern */}
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-10 left-10 w-20 h-20 border border-white rounded-full animate-spin-slow"></div>
//           <div className="absolute top-20 right-20 w-16 h-16 border border-white rounded-full animate-spin-reverse"></div>
//           <div className="absolute bottom-20 left-1/3 w-12 h-12 border border-white rounded-full animate-pulse"></div>
//         </div>

//         <div className="relative max-w-6xl mx-auto text-center z-20">
//           <div className="inline-flex items-center justify-center w-20 h-18 bg-white bg-opacity-20 rounded-full mb-8 animate-pulse backdrop-blur-sm">
//             <BookOpen className="w-10 h-10 text-white" />
//           </div>
          
//           <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-100 to-indigo-100 bg-clip-text text-transparent animate-fade-in font-serif">
//             Sacred Teachings
//           </h1>
          
//           <p className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed mb-8 animate-fade-in-delay font-light">
//             Discover timeless wisdom and spiritual guidance to illuminate your path toward inner peace, unity, and divine understanding
//           </p>

//           {/* Stats Row */}
//           <div className="flex justify-center items-center space-x-8 text-purple-200 animate-fade-in-delay-2">
//             <div className="flex items-center space-x-2">
//               <Video className="w-5 h-5" />
//               <span className="text-sm font-medium">Videos</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <BookOpen className="w-5 h-5" />
//               <span className="text-sm font-medium">Articles</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <Download className="w-5 h-5" />
//               <span className="text-sm font-medium">Resources</span>
//             </div>
//           </div>

//           {/* Scroll Indicator */}
//           <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//             <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
//               <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Inspirational Quote Section */}
//       <section className="relative py-16 px-4 bg-gradient-to-r from-purple-50 to-indigo-50 z-10">
//         <div className="max-w-4xl mx-auto text-center">
//           <div className="relative">
//             <div className="absolute -top-4 -left-4 text-6xl text-purple-200 font-serif">"</div>
//             <blockquote className="text-xl md:text-2xl font-light text-gray-700 italic leading-relaxed animate-fade-in">
//               The light of wisdom shines brightest when shared with others seeking truth
//             </blockquote>
//             <div className="absolute -bottom-4 -right-4 text-6xl text-purple-200 font-serif">"</div>
//           </div>
//           <div className="mt-6 flex justify-center items-center space-x-2 animate-fade-in-delay">
//             <Star className="w-4 h-4 text-yellow-500 fill-current" />
//             <Star className="w-4 h-4 text-yellow-500 fill-current" />
//             <Star className="w-4 h-4 text-yellow-500 fill-current" />
//           </div>
//         </div>
//       </section>

//       {/* Main Content Section */}
//       <main className="relative z-10 py-12">
//         {/* Enhanced TeachingsGrid Container */}
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="bg-white rounded-3xl shadow-xl shadow-purple-100/50 border border-purple-100 overflow-hidden">
//             {/* Content Header */}
//             <div className="bg-gradient-to-r from-purple-50 to-indigo-50 px-8 py-6 border-b border-purple-100">
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center space-x-4">
//                   <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
//                     <Search className="w-6 h-6 text-white" />
//                   </div>
//                   <div>
//                     <h2 className="text-2xl font-bold text-gray-800">Explore Teachings</h2>
//                     <p className="text-gray-600">Find wisdom that resonates with your spiritual journey</p>
//                   </div>
//                 </div>
//                 <div className="hidden md:flex items-center space-x-4 text-sm text-gray-500">
//                   <div className="flex items-center space-x-1">
//                     <Users className="w-4 h-4" />
//                     <span>Community Curated</span>
//                   </div>
//                   <div className="flex items-center space-x-1">
//                     <Heart className="w-4 h-4" />
//                     <span>Loved by Seekers</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* TeachingsGrid Component */}
//             <div className="p-8">
//               <TeachingsGrid teachings={teachings} />
//             </div>
//           </div>
//         </div>

//         {/* Enhanced VideoPlayer Section */}
//         <div className="max-w-7xl mx-auto px-4 mt-16">
//           <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl shadow-xl shadow-indigo-100/50 border border-indigo-100 overflow-hidden">
//             <div className="bg-gradient-to-r from-indigo-500 to-purple-500 px-8 py-6 text-white">
//               <div className="flex items-center space-x-4">
//                 <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
//                   <Video className="w-6 h-6 text-white" />
//                 </div>
//                 <div>
//                   <h2 className="text-2xl font-bold">Featured Video</h2>
//                   <p className="text-indigo-100">Immerse yourself in visual wisdom</p>
//                 </div>
//               </div>
//             </div>
//             <div className="p-8">
//               <VideoPlayer videoUrl={ '/images/206257_medium.mp4'} />
//             </div>
//           </div>
//         </div>

//         {/* Enhanced PDFDownload Section */}
//         <div className="max-w-7xl mx-auto px-4 mt-16">
//           <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl shadow-xl shadow-green-100/50 border border-green-100 overflow-hidden">
//             <div className="bg-gradient-to-r from-green-500 to-emerald-500 px-8 py-6 text-white">
//               <div className="flex items-center space-x-4">
//                 <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
//                   <Download className="w-6 h-6 text-white" />
//                 </div>
//                 <div>
//                   <h2 className="text-2xl font-bold">Sacred Resources</h2>
//                   <p className="text-green-100">Download guides for your spiritual practice</p>
//                 </div>
//               </div>
//             </div>
//             <div className="p-8">
//               <PDFDownload />
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Call to Action Section */}
//       <section className="relative py-20 px-4 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white mt-20 z-10">
//         <div className="max-w-4xl mx-auto text-center">
//           <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-6 animate-pulse backdrop-blur-sm">
//             <Sparkles className="w-8 h-8 text-white" />
//           </div>
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">Continue Your Journey</h2>
//           <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
//             Join our community of seekers and share in the collective wisdom of spiritual growth
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//             <Link to='/contact'>
//              <button className="px-8 py-3 bg-white text-purple-600 rounded-full font-semibold hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
//               Join Community
//             </button>
//             </Link>
           
//             <button className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105">
//               Subscribe to Updates
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Custom Animations */}
//       <style jsx>{`
//         @keyframes fade-in {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes fade-in-delay {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes fade-in-delay-2 {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
//         @keyframes spin-reverse {
//           from { transform: rotate(360deg); }
//           to { transform: rotate(0deg); }
//         }
        
//         .animate-fade-in {
//           animation: fade-in 1s ease-out forwards;
//         }
//         .animate-fade-in-delay {
//           animation: fade-in-delay 1s ease-out 0.3s forwards;
//           opacity: 0;
//         }
//         .animate-fade-in-delay-2 {
//           animation: fade-in-delay-2 1s ease-out 0.6s forwards;
//           opacity: 0;
//         }
//         .animate-spin-slow {
//           animation: spin-slow 8s linear infinite;
//         }
//         .animate-spin-reverse {
//           animation: spin-reverse 6s linear infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default TeachingsPage;



import React from 'react';
import { BookOpen, Video, Download, Search, Sparkles, Heart, Users, Clock, Star } from 'lucide-react';
import TeachingsGrid from '../components/teachings/TeachingsGrid';
import teachingsData from '../data/teachings.json'; // Assuming you have a JSON file with your teachings data
import { useState, useEffect } from 'react';
import VideoPlayer from '../components/teachings/VideoPlayer';
import PDFDownload from '../components/teachings/PDFDownload';
import { Link } from 'react-router-dom';

const TeachingsPage = () => {
  const [teachings, setTeachings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Combine all content types with loading simulation
    setTimeout(() => {
      const allTeachings = [
        ...teachingsData.videos,
        ...teachingsData.articles,
        ...teachingsData.resources
      ];
      setTeachings(allTeachings);
      setIsLoading(false);
    }, 800);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-amber-50 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-amber-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
            <Sparkles className="w-6 h-6 text-amber-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
          </div>
          <p className="text-lg font-medium text-gray-700 animate-pulse">Loading Sacred Teachings...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative mt-6 md:mt-8 min-h-screen bg-gradient-to-br from-blue-50 via-white to-amber-50">
      {/* Floating Spiritual Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-amber-400 rounded-full animate-bounce opacity-40"></div>
        <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-blue-300 rounded-full animate-ping opacity-50"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-amber-300 rounded-full animate-pulse opacity-30"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-blue-400 rounded-full animate-bounce opacity-40"></div>
      </div>

      {/* Hero Section */}
      


<section className="relative min-h-screen overflow-hidden bg-gradient-to-r from-blue-900/70 via-blue-800/70 to-blue-900/70 text-white py-16 px-4 z-10">
  {/* Background Image with Overlay */}
  <div className="absolute inset-0 z-0">
    <img 
      src="/images/buddhism-2214532_1920.jpg" 
      alt="Sacred mountain landscape"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-800/80 to-blue-900/90"></div>
  </div>
  
  {/* Animated Background Pattern */}
  <div className="absolute inset-0 opacity-20 z-10">
    <div className="absolute top-10 left-10 w-20 h-20 border-2 border-amber-300 rounded-full animate-spin-slow"></div>
    <div className="absolute top-20 right-20 w-16 h-16 border-2 border-amber-300 rounded-full animate-spin-reverse"></div>
    <div className="absolute bottom-20 left-1/3 w-12 h-12 border-2 border-amber-300 rounded-full animate-pulse"></div>
    <div className="absolute bottom-1/4 right-1/4 w-14 h-14 border border-amber-200 rounded-full animate-ping opacity-30"></div>
  </div>

  <div className="relative max-w-6xl mx-auto text-center z-20 pt-32">
    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full mb-8 animate-pulse backdrop-blur-sm shadow-lg hover:scale-105 transition-transform duration-300">
      <BookOpen className="w-10 h-10 text-blue-900" />
    </div>
    
    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-amber-100 to-yellow-200 bg-clip-text text-transparent animate-fade-in font-serif tracking-tight">
      Sacred Teachings
    </h1>
    
    <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8 animate-fade-in-delay font-light">
      Discover timeless wisdom and spiritual guidance to illuminate your path toward inner peace, unity, and divine understanding
    </p>

    {/* CTA Button */}
    <div className="animate-fade-in-delay-2">
      <Link to='/contact'>
            <button className="px-8 py-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-blue-900 font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-amber-400 hover:to-yellow-400 mb-12">
        Begin Your Journey
      </button>
      </Link>

    </div>

    {/* Stats Row */}
    <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 text-amber-200 animate-fade-in-delay-2 backdrop-blur-sm bg-white/10 rounded-full px-8 py-4 max-w-md mx-auto">
      <div className="flex items-center space-x-2 group">
        <div className="p-2 bg-amber-500/20 rounded-full group-hover:bg-amber-500/30 transition-colors">
          <Video className="w-5 h-5" />
        </div>
        <span className="text-sm font-medium">250+ Videos</span>
      </div>
      <div className="flex items-center space-x-2 group">
        <div className="p-2 bg-amber-500/20 rounded-full group-hover:bg-amber-500/30 transition-colors">
          <BookOpen className="w-5 h-5" />
        </div>
        <span className="text-sm font-medium">120+ Articles</span>
      </div>
      <div className="flex items-center space-x-2 group">
        <div className="p-2 bg-amber-500/20 rounded-full group-hover:bg-amber-500/30 transition-colors">
          <Download className="w-5 h-5" />
        </div>
        <span className="text-sm font-medium">Free Resources</span>
      </div>
    </div>

    {/* Scroll Indicator */}
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div className="w-6 h-10 border-2 border-amber-300 rounded-full flex justify-center hover:border-amber-200 transition-colors cursor-pointer">
        <div className="w-1 h-3 bg-amber-300 rounded-full mt-2 animate-pulse"></div>
      </div>
    </div>
  </div>
</section>

      {/* Inspirational Quote Section */}
      <section className="relative py-16 px-4 bg-gradient-to-r from-amber-50 to-blue-50 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 text-6xl text-amber-300 font-serif">"</div>
            <blockquote className="text-xl md:text-2xl font-light text-gray-700 italic leading-relaxed animate-fade-in">
              The light of wisdom shines brightest when shared with others seeking truth
            </blockquote>
            <div className="absolute -bottom-4 -right-4 text-6xl text-amber-300 font-serif">"</div>
          </div>
          <div className="mt-6 flex justify-center items-center space-x-2 animate-fade-in-delay">
            <Star className="w-4 h-4 text-amber-500 fill-current" />
            <Star className="w-4 h-4 text-amber-500 fill-current" />
            <Star className="w-4 h-4 text-amber-500 fill-current" />
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <main className="relative z-10 py-12">
        {/* Enhanced TeachingsGrid Container */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-xl shadow-blue-100/50 border border-amber-200 overflow-hidden">
            {/* Content Header */}
            <div className="bg-gradient-to-r from-blue-50 to-amber-50 px-8 py-6 border-b border-amber-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-amber-500 rounded-full flex items-center justify-center shadow-lg">
                    <Search className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">Explore Teachings</h2>
                    <p className="text-gray-600">Find wisdom that resonates with your spiritual journey</p>
                  </div>
                </div>
                <div className="hidden md:flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4 text-blue-600" />
                    <span>Community Curated</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Heart className="w-4 h-4 text-amber-500" />
                    <span>Loved by Seekers</span>
                  </div>
                </div>
              </div>
            </div>

            {/* TeachingsGrid Component */}
            <div className="p-8">
              <TeachingsGrid teachings={teachings} />
            </div>
          </div>
        </div>

        {/* Enhanced VideoPlayer Section */}
        <div className="max-w-7xl mx-auto px-4 mt-16">
          <div className="bg-gradient-to-br from-blue-50 to-amber-50 rounded-3xl shadow-xl shadow-blue-100/50 border border-blue-200 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-700 to-blue-800 px-8 py-6 text-white">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full flex items-center justify-center backdrop-blur-sm shadow-lg">
                  <Video className="w-6 h-6 text-blue-900" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Featured Video</h2>
                  <p className="text-blue-100">Immerse yourself in visual wisdom</p>
                </div>
              </div>
            </div>
            <div className="p-8">
              <VideoPlayer videoUrl={'/images/206257_medium.mp4'} />
            </div>
          </div>
        </div>

        {/* Enhanced PDFDownload Section */}
        <div className="max-w-7xl mx-auto px-4 mt-16">
          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-3xl shadow-xl shadow-amber-100/50 border border-amber-200 overflow-hidden">
            <div className="bg-gradient-to-r from-amber-600 to-yellow-600 px-8 py-6 text-white">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center backdrop-blur-sm shadow-lg">
                  <Download className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Sacred Resources</h2>
                  <p className="text-amber-100">Download guides for your spiritual practice</p>
                </div>
              </div>
            </div>
            <div className="p-8">
              <PDFDownload />
            </div>
          </div>
        </div>
      </main>

      {/* Call to Action Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-blue-800 via-blue-700 to-blue-900 text-white mt-20 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full mb-6 animate-pulse backdrop-blur-sm shadow-lg">
            <Sparkles className="w-8 h-8 text-blue-900" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Continue Your Journey</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our community of seekers and share in the collective wisdom of spiritual growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to='/contact'>
              <button className="px-8 py-3 bg-gradient-to-r from-amber-400 to-yellow-400 text-blue-900 rounded-full font-semibold hover:from-amber-300 hover:to-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Join Community
              </button>
            </Link>
           
            <button className="px-8 py-3 border-2 border-amber-300 text-amber-200 rounded-full font-semibold hover:bg-amber-400 hover:text-blue-900 hover:border-amber-400 transition-all duration-300 transform hover:scale-105">
              Subscribe to Updates
            </button>
          </div>
        </div>
      </section>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-delay {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-delay-2 {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .animate-fade-in-delay {
          animation: fade-in-delay 1s ease-out 0.3s forwards;
          opacity: 0;
        }
        .animate-fade-in-delay-2 {
          animation: fade-in-delay-2 1s ease-out 0.6s forwards;
          opacity: 0;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 6s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default TeachingsPage;