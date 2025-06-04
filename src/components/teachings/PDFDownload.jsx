// import React, { useState } from 'react';
// import { Download, FileText, BookOpen, Heart, Star, Eye, Calendar } from 'lucide-react';

// const PDFDownload = () => {
//   const [downloadCounts, setDownloadCounts] = useState({});
//   const [isLoading, setIsLoading] = useState(null);

//   // Sample PDF resources data
//   const pdfResources = [
//     {
//       id: 1,
//       title: "Daily Meditation Guide",
//       description: "A comprehensive 30-day meditation journey with guided practices from various spiritual traditions.",
//       category: "Meditation",
//       author: "Path of Unity Founders",
//       pages: 45,
//       size: "2.3 MB",
//       downloadUrl: "/pdfs/daily-meditation-guide.pdf",
//       thumbnail: "/images/pdf-thumbs/meditation-guide.jpg",
//       tags: ["meditation", "daily practice", "mindfulness"],
//       publishDate: "2024-01-15",
//       featured: true
//     },
//     {
//       id: 2,
//       title: "Unity Prayer Collection",
//       description: "Beautiful prayers from Christianity, Islam, Hinduism, Buddhism, and Judaism promoting peace and understanding.",
//       category: "Prayers",
//       author: "Path of Unity Community",
//       pages: 32,
//       size: "1.8 MB",
//       downloadUrl: "/pdfs/unity-prayer-collection.pdf",
//       thumbnail: "/images/pdf-thumbs/prayer-collection.jpg",
//       tags: ["prayers", "interfaith", "unity"],
//       publishDate: "2024-02-01",
//       featured: true
//     },
//     {
//       id: 3,
//       title: "Interfaith Dialogue Handbook",
//       description: "Practical guidelines for meaningful conversations across religious boundaries with respect and understanding.",
//       category: "Education",
//       author: "Dr. Sarah Williams",
//       pages: 28,
//       size: "1.5 MB",
//       downloadUrl: "/pdfs/interfaith-dialogue-handbook.pdf",
//       thumbnail: "/images/pdf-thumbs/dialogue-handbook.jpg",
//       tags: ["dialogue", "education", "interfaith"],
//       publishDate: "2024-01-30",
//       featured: false
//     },
//     {
//       id: 4,
//       title: "Sacred Symbols Study Guide",
//       description: "Explore the meaning and significance of sacred symbols across different world religions.",
//       category: "Study Materials",
//       author: "Rev. Michael Chen",
//       pages: 52,
//       size: "3.1 MB",
//       downloadUrl: "/pdfs/sacred-symbols-guide.pdf",
//       thumbnail: "/images/pdf-thumbs/symbols-guide.jpg",
//       tags: ["symbols", "study", "religions"],
//       publishDate: "2024-01-20",
//       featured: false
//     },
//     {
//       id: 5,
//       title: "Seasonal Spiritual Practices",
//       description: "Celebrate the divine through seasonal rituals and practices from various faith traditions.",
//       category: "Practices",
//       author: "Path of Unity Founders",
//       pages: 38,
//       size: "2.7 MB",
//       downloadUrl: "/pdfs/seasonal-practices.pdf",
//       thumbnail: "/images/pdf-thumbs/seasonal-practices.jpg",
//       tags: ["seasons", "rituals", "practices"],
//       publishDate: "2024-02-10",
//       featured: true
//     },
//     {
//       id: 6,
//       title: "Young Seekers Workbook",
//       description: "Interactive activities and discussions for youth exploring spirituality and faith questions.",
//       category: "Youth",
//       author: "Youth Ministry Team",
//       pages: 64,
//       size: "4.2 MB",
//       downloadUrl: "/pdfs/young-seekers-workbook.pdf",
//       thumbnail: "/images/pdf-thumbs/youth-workbook.jpg",
//       tags: ["youth", "activities", "exploration"],
//       publishDate: "2024-01-25",
//       featured: false
//     }
//   ];

//   const categories = ["All", "Meditation", "Prayers", "Education", "Study Materials", "Practices", "Youth"];
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredPDFs = pdfResources.filter(pdf => {
//     const matchesCategory = selectedCategory === "All" || pdf.category === selectedCategory;
//     const matchesSearch = pdf.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          pdf.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          pdf.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
//     return matchesCategory && matchesSearch;
//   });

//   const handleDownload = async (pdf) => {
//     setIsLoading(pdf.id);
    
//     // Simulate download process
//     try {
//       // In a real app, you would trigger the actual download here
//       // For demo purposes, we'll just simulate a delay
//       await new Promise(resolve => setTimeout(resolve, 1500));
      
//       // Update download count
//       setDownloadCounts(prev => ({
//         ...prev,
//         [pdf.id]: (prev[pdf.id] || 0) + 1
//       }));
      
//       // In a real implementation, you would do:
//       // window.open(pdf.downloadUrl, '_blank');
      
//       alert(`"${pdf.title}" would be downloaded in a real implementation!`);
//     } catch (error) {
//       console.error('Download failed:', error);
//       alert('Download failed. Please try again.');
//     } finally {
//       setIsLoading(null);
//     }
//   };

//   const formatDate = (dateString) => {
//     return new Date(dateString).toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric'
//     });
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-8">
//       {/* Header Section */}
//       <div className="text-center mb-12">
//         <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6">
//           <FileText className="w-8 h-8 text-white" />
//         </div>
//         <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
//           Spiritual Resources
//         </h1>
//         <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//           Download our collection of spiritual guides, prayer books, and educational materials to deepen your faith journey.
//         </p>
//       </div>

//       {/* Search and Filter Section */}
//       <div className="mb-8 space-y-4">
//         <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
//           <input
//             type="text"
//             placeholder="Search resources..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
//           />
//           <div className="flex flex-wrap gap-2">
//             {categories.map(category => (
//               <button
//                 key={category}
//                 onClick={() => setSelectedCategory(category)}
//                 className={`px-4 py-2 rounded-full transition-all duration-300 ${
//                   selectedCategory === category
//                     ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
//                     : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                 }`}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Featured Resources */}
//       <div className="mb-12">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
//           <Star className="w-6 h-6 text-yellow-500 mr-2" />
//           Featured Resources
//         </h2>
//         <div className="grid md:grid-cols-3 gap-6">
//           {filteredPDFs.filter(pdf => pdf.featured).map(pdf => (
//             <div key={pdf.id} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100 shadow-lg hover:shadow-xl transition-all duration-300">
//               <div className="flex items-start justify-between mb-4">
//                 <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg">
//                   <BookOpen className="w-6 h-6 text-white" />
//                 </div>
//                 <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-semibold">
//                   Featured
//                 </span>
//               </div>
//               <h3 className="text-xl font-bold text-gray-800 mb-2">{pdf.title}</h3>
//               <p className="text-gray-600 text-sm mb-4 line-clamp-3">{pdf.description}</p>
//               <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
//                 <span>{pdf.pages} pages</span>
//                 <span>{pdf.size}</span>
//               </div>
//               <button
//                 onClick={() => handleDownload(pdf)}
//                 disabled={isLoading === pdf.id}
//                 className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl disabled:opacity-50"
//               >
//                 {isLoading === pdf.id ? (
//                   <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
//                 ) : (
//                   <>
//                     <Download className="w-5 h-5 mr-2" />
//                     Download Free
//                   </>
//                 )}
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* All Resources Grid */}
//       <div>
//         <h2 className="text-2xl font-bold text-gray-800 mb-6">All Resources</h2>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredPDFs.map(pdf => (
//             <div key={pdf.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
//               <div className="p-6">
//                 <div className="flex items-start justify-between mb-4">
//                   <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-lg">
//                     <FileText className="w-5 h-5 text-white" />
//                   </div>
//                   <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-semibold">
//                     {pdf.category}
//                   </span>
//                 </div>

//                 <h3 className="text-lg font-bold text-gray-800 mb-2">{pdf.title}</h3>
//                 <p className="text-gray-600 text-sm mb-3 line-clamp-2">{pdf.description}</p>
                
//                 <div className="text-xs text-gray-500 mb-4">
//                   <div className="flex items-center justify-between mb-1">
//                     <span>By {pdf.author}</span>
//                     <span className="flex items-center">
//                       <Calendar className="w-3 h-3 mr-1" />
//                       {formatDate(pdf.publishDate)}
//                     </span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <span>{pdf.pages} pages • {pdf.size}</span>
//                     {downloadCounts[pdf.id] && (
//                       <span className="flex items-center text-green-600">
//                         <Eye className="w-3 h-3 mr-1" />
//                         {downloadCounts[pdf.id]} downloads
//                       </span>
//                     )}
//                   </div>
//                 </div>

//                 <div className="flex flex-wrap gap-1 mb-4">
//                   {pdf.tags.map(tag => (
//                     <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
//                       #{tag}
//                     </span>
//                   ))}
//                 </div>

//                 <button
//                   onClick={() => handleDownload(pdf)}
//                   disabled={isLoading === pdf.id}
//                   className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center disabled:opacity-50"
//                 >
//                   {isLoading === pdf.id ? (
//                     <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
//                   ) : (
//                     <>
//                       <Download className="w-4 h-4 mr-2" />
//                       Download
//                     </>
//                   )}
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {filteredPDFs.length === 0 && (
//         <div className="text-center py-12">
//           <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
//           <h3 className="text-xl font-semibold text-gray-600 mb-2">No resources found</h3>
//           <p className="text-gray-500">Try adjusting your search terms or category filter.</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PDFDownload;



import React, { useState } from 'react';
import { Download, FileText, BookOpen, Heart, Star, Eye, Calendar } from 'lucide-react';

const PDFDownload = () => {
  const [downloadCounts, setDownloadCounts] = useState({});
  const [isLoading, setIsLoading] = useState(null);

  // Sample PDF resources data
  const pdfResources = [
    {
      id: 1,
      title: "Daily Meditation Guide",
      description: "A comprehensive 30-day meditation journey with guided practices from various spiritual traditions.",
      category: "Meditation",
      author: "Path of Unity Founders",
      pages: 45,
      size: "2.3 MB",
      downloadUrl: "/pdfs/daily-meditation-guide.pdf",
      thumbnail: "/images/pdf-thumbs/meditation-guide.jpg",
      tags: ["meditation", "daily practice", "mindfulness"],
      publishDate: "2024-01-15",
      featured: true
    },
    {
      id: 2,
      title: "Unity Prayer Collection",
      description: "Beautiful prayers from Christianity, Islam, Hinduism, Buddhism, and Judaism promoting peace and understanding.",
      category: "Prayers",
      author: "Path of Unity Community",
      pages: 32,
      size: "1.8 MB",
      downloadUrl: "/pdfs/unity-prayer-collection.pdf",
      thumbnail: "/images/pdf-thumbs/prayer-collection.jpg",
      tags: ["prayers", "interfaith", "unity"],
      publishDate: "2024-02-01",
      featured: true
    },
    {
      id: 3,
      title: "Interfaith Dialogue Handbook",
      description: "Practical guidelines for meaningful conversations across religious boundaries with respect and understanding.",
      category: "Education",
      author: "Dr. Sarah Williams",
      pages: 28,
      size: "1.5 MB",
      downloadUrl: "/pdfs/interfaith-dialogue-handbook.pdf",
      thumbnail: "/images/pdf-thumbs/dialogue-handbook.jpg",
      tags: ["dialogue", "education", "interfaith"],
      publishDate: "2024-01-30",
      featured: false
    },
    {
      id: 4,
      title: "Sacred Symbols Study Guide",
      description: "Explore the meaning and significance of sacred symbols across different world religions.",
      category: "Study Materials",
      author: "Rev. Michael Chen",
      pages: 52,
      size: "3.1 MB",
      downloadUrl: "/pdfs/sacred-symbols-guide.pdf",
      thumbnail: "/images/pdf-thumbs/symbols-guide.jpg",
      tags: ["symbols", "study", "religions"],
      publishDate: "2024-01-20",
      featured: false
    },
    {
      id: 5,
      title: "Seasonal Spiritual Practices",
      description: "Celebrate the divine through seasonal rituals and practices from various faith traditions.",
      category: "Practices",
      author: "Path of Unity Founders",
      pages: 38,
      size: "2.7 MB",
      downloadUrl: "/pdfs/seasonal-practices.pdf",
      thumbnail: "/images/pdf-thumbs/seasonal-practices.jpg",
      tags: ["seasons", "rituals", "practices"],
      publishDate: "2024-02-10",
      featured: true
    },
    {
      id: 6,
      title: "Young Seekers Workbook",
      description: "Interactive activities and discussions for youth exploring spirituality and faith questions.",
      category: "Youth",
      author: "Youth Ministry Team",
      pages: 64,
      size: "4.2 MB",
      downloadUrl: "/pdfs/young-seekers-workbook.pdf",
      thumbnail: "/images/pdf-thumbs/youth-workbook.jpg",
      tags: ["youth", "activities", "exploration"],
      publishDate: "2024-01-25",
      featured: false
    }
  ];

  const categories = ["All", "Meditation", "Prayers", "Education", "Study Materials", "Practices", "Youth"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPDFs = pdfResources.filter(pdf => {
    const matchesCategory = selectedCategory === "All" || pdf.category === selectedCategory;
    const matchesSearch = pdf.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pdf.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pdf.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleDownload = async (pdf) => {
    setIsLoading(pdf.id);
    
    // Simulate download process
    try {
      // In a real app, you would trigger the actual download here
      // For demo purposes, we'll just simulate a delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Update download count
      setDownloadCounts(prev => ({
        ...prev,
        [pdf.id]: (prev[pdf.id] || 0) + 1
      }));
      
      // In a real implementation, you would do:
      // window.open(pdf.downloadUrl, '_blank');
      
      alert(`"${pdf.title}" would be downloaded in a real implementation!`);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Download failed. Please try again.');
    } finally {
      setIsLoading(null);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full mb-6 shadow-lg transform hover:scale-105 transition-all duration-300">
            <Heart className="w-10 h-10 text-amber-300" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-800 via-blue-600 to-amber-600 bg-clip-text text-transparent mb-4">
            Sacred Resources
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover our collection of spiritual guides, prayer books, and devotional materials to enrich your sacred journey and deepen your connection with the divine.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search sacred resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 border-2 border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm shadow-lg"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <BookOpen className="w-5 h-5 text-blue-400" />
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 font-medium shadow-md hover:shadow-lg transform hover:scale-105 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-blue-300'
                      : 'bg-white/90 text-blue-700 hover:bg-blue-50 border border-blue-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Resources */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-blue-800 mb-8 flex items-center">
            <Star className="w-8 h-8 text-amber-500 mr-3 animate-pulse" />
            Featured Sacred Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {filteredPDFs.filter(pdf => pdf.featured).map(pdf => (
              <div key={pdf.id} className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 border border-blue-100 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 group">
                <div className="flex items-start justify-between mb-6">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-4 rounded-xl shadow-lg group-hover:from-blue-700 group-hover:to-blue-900 transition-all duration-300">
                    <BookOpen className="w-7 h-7 text-amber-300" />
                  </div>
                  <span className="bg-gradient-to-r from-amber-400 to-amber-500 text-amber-900 text-xs px-3 py-2 rounded-full font-bold shadow-md">
                    ✨ Featured
                  </span>
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-3 group-hover:text-blue-900 transition-colors">{pdf.title}</h3>
                <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">{pdf.description}</p>
                <div className="flex items-center justify-between text-sm text-blue-600 mb-6 font-medium">
                  <span className="flex items-center">
                    <FileText className="w-4 h-4 mr-1" />
                    {pdf.pages} pages
                  </span>
                  <span>{pdf.size}</span>
                </div>
                <button
                  onClick={() => handleDownload(pdf)}
                  disabled={isLoading === pdf.id}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-xl font-bold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl disabled:opacity-50 transform hover:scale-105"
                >
                  {isLoading === pdf.id ? (
                    <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Download className="w-5 h-5 mr-2" />
                      Download Sacred Guide
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* All Resources Grid */}
        <div>
          <h2 className="text-3xl font-bold text-blue-800 mb-8 flex items-center">
            <BookOpen className="w-8 h-8 text-blue-600 mr-3" />
            All Sacred Resources
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPDFs.map(pdf => (
              <div key={pdf.id} className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 overflow-hidden group hover:-translate-y-1">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-lg shadow-md group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300">
                      <FileText className="w-5 h-5 text-amber-300" />
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-semibold border border-blue-200">
                      {pdf.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-blue-800 mb-2 group-hover:text-blue-900 transition-colors">{pdf.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">{pdf.description}</p>
                  
                  <div className="text-xs text-gray-500 mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-blue-600 font-medium">By {pdf.author}</span>
                      <span className="flex items-center text-amber-600">
                        <Calendar className="w-3 h-3 mr-1" />
                        {formatDate(pdf.publishDate)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-600">{pdf.pages} pages • {pdf.size}</span>
                      {downloadCounts[pdf.id] && (
                        <span className="flex items-center text-green-600 font-medium">
                          <Eye className="w-3 h-3 mr-1" />
                          {downloadCounts[pdf.id]} downloads
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {pdf.tags.map(tag => (
                      <span key={tag} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full border border-blue-200 font-medium">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => handleDownload(pdf)}
                    disabled={isLoading === pdf.id}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center disabled:opacity-50 shadow-md hover:shadow-lg transform hover:scale-105"
                  >
                    {isLoading === pdf.id ? (
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {filteredPDFs.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-blue-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-12 h-12 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-blue-800 mb-3">No Sacred Resources Found</h3>
            <p className="text-gray-600 text-lg">Try adjusting your search terms or category filter to discover more spiritual content.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PDFDownload;