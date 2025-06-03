import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Upload, Save, X, Eye, Image, Tag, Clock, User, BookOpen, Calendar } from 'lucide-react';

const BlogPost = ({ existingBlog = null, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: '',
    category: '',
    tags: [],
    readTime: '',
    image: '',
    excerpt: ''
  });
  const [tagInput, setTagInput] = useState('');
  const [isPreview, setIsPreview] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState('');

  // Storage keys to match BlogPost component
  const POSTS_STORAGE_KEY = 'pathOfUnity_blogPosts';

  // Predefined categories
  const categories = [
    'Meditation',
    'Love & Compassion',
    'Spirituality',
    'Mindfulness',
    'Inner Peace',
    'Prayer',
    'Wisdom',
    'Unity',
    'Self-Discovery',
    'Sacred Teachings'
  ];

  // Load existing blog data for editing
  useEffect(() => {
    if (existingBlog) {
      setFormData({
        title: existingBlog.title || '',
        content: existingBlog.content || '',
        author: existingBlog.author || '',
        category: existingBlog.category || '',
        tags: existingBlog.tags || [],
        readTime: existingBlog.readTime || '',
        image: existingBlog.image || '',
        excerpt: existingBlog.excerpt || ''
      });
      setImagePreview(existingBlog.image || '');
    }
  }, [existingBlog]);

  // Auto-generate excerpt from content
  useEffect(() => {
    if (formData.content && !formData.excerpt) {
      const autoExcerpt = formData.content.substring(0, 200).trim();
      const lastSentence = autoExcerpt.lastIndexOf('.');
      const excerpt = lastSentence > 100 ? 
        autoExcerpt.substring(0, lastSentence + 1) : 
        autoExcerpt + (autoExcerpt.length === 200 ? '...' : '');
      
      setFormData(prev => ({ ...prev, excerpt }));
    }
  }, [formData.content]);

  // Auto-calculate read time
  useEffect(() => {
    if (formData.content) {
      const wordCount = formData.content.split(' ').length;
      const readTime = Math.ceil(wordCount / 200); // Average reading speed
      setFormData(prev => ({ 
        ...prev, 
        readTime: `${readTime} min read`
      }));
    }
  }, [formData.content]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageUrl = event.target.result;
        setFormData(prev => ({ ...prev, image: imageUrl }));
        setImagePreview(imageUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim().toLowerCase())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim().toLowerCase()]
      }));
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddTag();
    }
  };

  const validateForm = () => {
    const errors = [];
    if (!formData.title.trim()) errors.push('Title is required');
    if (!formData.content.trim()) errors.push('Content is required');
    if (!formData.author.trim()) errors.push('Author is required');
    if (!formData.category) errors.push('Category is required');
    // if (formData.tags.length === 0) errors.push('At least one tag is required');
    
    if (errors.length > 0) {
      alert('Please fix the following errors:\n' + errors.join('\n'));
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      // Get existing posts
      const storedPosts = localStorage.getItem(POSTS_STORAGE_KEY);
      const posts = storedPosts ? JSON.parse(storedPosts) : [];
      
      const blogPost = {
        id: existingBlog ? existingBlog.id : Date.now(),
        ...formData,
        date: existingBlog ? existingBlog.date : new Date().toISOString().split('T')[0],
        likes: existingBlog ? existingBlog.likes || 0 : 0,
        timestamp: existingBlog ? existingBlog.timestamp : Date.now()
      };

      let updatedPosts;
      if (existingBlog) {
        // Update existing post
        updatedPosts = posts.map(post => 
          post.id === existingBlog.id ? blogPost : post
        );
      } else {
        // Add new post
        updatedPosts = [blogPost, ...posts];
      }

      // Save to localStorage
      localStorage.setItem(POSTS_STORAGE_KEY, JSON.stringify(updatedPosts));
      
      // Reset form if creating new post
      if (!existingBlog) {
        setFormData({
          title: '',
          content: '',
          author: '',
          category: '',
          tags: [],
          readTime: '',
          image: '',
          excerpt: ''
        });
        setImagePreview('');
        setTagInput('');
      }

      // Notify parent component
      if (onSave) onSave(blogPost);
      
      alert(existingBlog ? 'Blog post updated successfully!' : 'Blog post saved successfully!');
      
    } catch (error) {
      console.error('Error saving blog post:', error);
      alert('Error saving blog post. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const PreviewComponent = () => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {imagePreview && (
        <div className="h-64 bg-gradient-to-r from-purple-600 to-blue-600 relative">
          <img 
            src={imagePreview} 
            alt={formData.title}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>
      )}
      
      <div className="p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center text-sm text-gray-500 space-x-4">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-1" />
              <span>{formData.author || 'Author Name'}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              <span>{new Date().toLocaleDateString()}</span>
            </div>
            <div className="flex items-center">
              <BookOpen className="w-4 h-4 mr-1" />
              <span>{formData.readTime || 'X min read'}</span>
            </div>
          </div>
        </div>
        
        <h1 className="text-4xl font-bold text-gray-800 mb-6 leading-tight">
          {formData.title || 'Blog Post Title'}
        </h1>
        
        <div className="flex items-center mb-8">
          <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mr-4">
            {formData.category || 'Category'}
          </span>
          <div className="flex items-center text-sm text-gray-500">
            <Tag className="w-4 h-4 mr-1" />
            <span>{formData.tags.join(', ') || 'tags'}</span>
          </div>
        </div>
        
        <div className="prose max-w-none text-gray-700 leading-relaxed">
          {formData.content ? (
            formData.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 text-lg">
                {paragraph.trim()}
              </p>
            ))
          ) : (
            <p className="mb-6 text-lg text-gray-400">Blog content will appear here...</p>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            {existingBlog ? 'Edit Blog Post' : 'Create New Blog Post'}
          </h1>
          <p className="text-gray-600 text-lg">
            {existingBlog ? 'Update your spiritual teaching' : 'Share your spiritual insights with the world'}
          </p>
        </motion.div>

        {/* Toggle View */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-1 shadow-lg">
            <button
              onClick={() => setIsPreview(false)}
              className={`px-6 py-2 rounded-md transition-all ${
                !isPreview 
                  ? 'bg-purple-600 text-white shadow-md' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Edit
            </button>
            <button
              onClick={() => setIsPreview(true)}
              className={`px-6 py-2 rounded-md transition-all ${
                isPreview 
                  ? 'bg-purple-600 text-white shadow-md' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Eye className="w-4 h-4 inline mr-2" />
              Preview
            </button>
          </div>
        </div>

        {isPreview ? (
          <motion.div
            key="preview"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <PreviewComponent />
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="space-y-8">
              {/* Main Content */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                {/* Title */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Blog Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Enter an inspiring title for your blog post..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-lg"
                    required
                  />
                </div>

                {/* Author and Category Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Author *
                    </label>
                    <input
                      type="text"
                      name="author"
                      value={formData.author}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Category *
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                      required
                    >
                      <option value="">Select a category</option>
                      {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Content */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Content *
                  </label>
                  <textarea
                    name="content"
                    value={formData.content}
                    onChange={handleInputChange}
                    placeholder="Write your spiritual insights here... Use double line breaks to separate paragraphs."
                    rows="15"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none resize-none"
                    required
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    Words: {formData.content.split(' ').filter(word => word.length > 0).length} | 
                    Estimated read time: {formData.readTime}
                  </p>
                </div>

                {/* Excerpt */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Excerpt
                  </label>
                  <textarea
                    name="excerpt"
                    value={formData.excerpt}
                    onChange={handleInputChange}
                    placeholder="Brief description of your blog post (auto-generated from content)"
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none resize-none"
                  />
                </div>
              </div>

              {/* Meta Information */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Additional Information</h3>
                
                {/* Image Upload */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Featured Image
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-purple-400 transition-colors">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="imageUpload"
                    />
                    {imagePreview ? (
                      <div className="relative">
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="max-w-full h-48 object-cover rounded-lg mx-auto"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            setImagePreview('');
                            setFormData(prev => ({ ...prev, image: '' }));
                          }}
                          className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <label htmlFor="imageUpload" className="cursor-pointer">
                        <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                        <p className="text-gray-600">Click to upload featured image</p>
                        <p className="text-sm text-gray-400">PNG, JPG up to 5MB</p>
                      </label>
                    )}
                  </div>
                </div>

                {/* Tags */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Tags * (Press Enter to add)
                  </label>
                  <div className="flex gap-2 mb-3 flex-wrap">
                    {formData.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm flex items-center gap-2"
                      >
                        {tag}
                        <button
                          type="button"
                          onClick={() => handleRemoveTag(tag)}
                          className="text-purple-600 hover:text-purple-800"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                  <input
                    type="text"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Add tags (e.g., meditation, peace, spirituality)"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center gap-4">
                {onCancel && (
                  <button
                    type="button"
                    onClick={onCancel}
                    className="px-8 py-3 border border-gray-300 rounded-xl text-gray-700 font-semibold hover:bg-gray-50 transition-all"
                  >
                    Cancel
                  </button>
                )}
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="w-5 h-5" />
                      {existingBlog ? 'Update Post' : 'Publish Post'}
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default BlogPost;