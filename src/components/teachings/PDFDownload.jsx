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
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6">
          <FileText className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
          Spiritual Resources
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Download our collection of spiritual guides, prayer books, and educational materials to deepen your faith journey.
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <input
            type="text"
            placeholder="Search resources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
          />
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <Star className="w-6 h-6 text-yellow-500 mr-2" />
          Featured Resources
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {filteredPDFs.filter(pdf => pdf.featured).map(pdf => (
            <div key={pdf.id} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-semibold">
                  Featured
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{pdf.title}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">{pdf.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span>{pdf.pages} pages</span>
                <span>{pdf.size}</span>
              </div>
              <button
                onClick={() => handleDownload(pdf)}
                disabled={isLoading === pdf.id}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl disabled:opacity-50"
              >
                {isLoading === pdf.id ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Download className="w-5 h-5 mr-2" />
                    Download Free
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* All Resources Grid */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">All Resources</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPDFs.map(pdf => (
            <div key={pdf.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-lg">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-semibold">
                    {pdf.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-800 mb-2">{pdf.title}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{pdf.description}</p>
                
                <div className="text-xs text-gray-500 mb-4">
                  <div className="flex items-center justify-between mb-1">
                    <span>By {pdf.author}</span>
                    <span className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {formatDate(pdf.publishDate)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>{pdf.pages} pages • {pdf.size}</span>
                    {downloadCounts[pdf.id] && (
                      <span className="flex items-center text-green-600">
                        <Eye className="w-3 h-3 mr-1" />
                        {downloadCounts[pdf.id]} downloads
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {pdf.tags.map(tag => (
                    <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => handleDownload(pdf)}
                  disabled={isLoading === pdf.id}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center disabled:opacity-50"
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
        <div className="text-center py-12">
          <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No resources found</h3>
          <p className="text-gray-500">Try adjusting your search terms or category filter.</p>
        </div>
      )}
    </div>
  );
};

export default PDFDownload;