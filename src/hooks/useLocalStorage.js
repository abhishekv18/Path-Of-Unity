// // ============================================================================
// // localStorage Service for Path of Unity Website
// // ============================================================================

// // Storage Keys Constants
// export const STORAGE_KEYS = {
//   BLOG_POSTS: 'pathOfUnity_blogPosts',
//   BLOG_LIKES: 'pathOfUnity_blogLikes',
//   BLOG_COMMENTS: 'pathOfUnity_blogComments',
//   PRAYERS: 'pathOfUnity_prayers',
//   FAVORITE_QUOTES: 'pathOfUnity_favoriteQuotes',
//   USER_PREFERENCES: 'pathOfUnity_userPreferences',
//   EVENT_RSVP: 'pathOfUnity_eventRSVP',
//   NEWSLETTER_SIGNUP: 'pathOfUnity_newsletterSignup',
//   DONATION_HISTORY: 'pathOfUnity_donationHistory',
//   VISIT_COUNT: 'pathOfUnity_visitCount',
//   LAST_VISIT: 'pathOfUnity_lastVisit'
// };

// // ============================================================================
// // Core localStorage Utility Functions
// // ============================================================================

// /**
//  * Safely get data from localStorage
//  * @param {string} key - Storage key
//  * @param {*} defaultValue - Default value if key doesn't exist
//  * @returns {*} Parsed data or default value
//  */
// export const getFromStorage = (key, defaultValue = null) => {
//   try {
//     if (typeof window === 'undefined') return defaultValue;
    
//     const item = localStorage.getItem(key);
//     if (item === null) return defaultValue;
    
//     return JSON.parse(item);
//   } catch (error) {
//     console.error(`Error reading from localStorage (${key}):`, error);
//     return defaultValue;
//   }
// };

// /**
//  * Safely set data to localStorage
//  * @param {string} key - Storage key
//  * @param {*} value - Value to store
//  * @returns {boolean} Success status
//  */
// export const setToStorage = (key, value) => {
//   try {
//     if (typeof window === 'undefined') return false;
    
//     localStorage.setItem(key, JSON.stringify(value));
//     return true;
//   } catch (error) {
//     console.error(`Error writing to localStorage (${key}):`, error);
//     return false;
//   }
// };

// /**
//  * Remove item from localStorage
//  * @param {string} key - Storage key
//  * @returns {boolean} Success status
//  */
// export const removeFromStorage = (key) => {
//   try {
//     if (typeof window === 'undefined') return false;
    
//     localStorage.removeItem(key);
//     return true;
//   } catch (error) {
//     console.error(`Error removing from localStorage (${key}):`, error);
//     return false;
//   }
// };

// /**
//  * Clear all Path of Unity data from localStorage
//  * @returns {boolean} Success status
//  */
// export const clearAllData = () => {
//   try {
//     Object.values(STORAGE_KEYS).forEach(key => {
//       localStorage.removeItem(key);
//     });
//     return true;
//   } catch (error) {
//     console.error('Error clearing localStorage:', error);
//     return false;
//   }
// };

// /**
//  * Check if localStorage is available
//  * @returns {boolean} Availability status
//  */
// export const isStorageAvailable = () => {
//   try {
//     if (typeof window === 'undefined') return false;
    
//     const test = '__localStorage_test__';
//     localStorage.setItem(test, 'test');
//     localStorage.removeItem(test);
//     return true;
//   } catch (error) {
//     return false;
//   }
// };

// // ============================================================================
// // Blog Posts Storage Service
// // ============================================================================

// // Sample blog posts data
// const SAMPLE_BLOG_POSTS = [
//   {
//     id: 1,
//     title: "Finding Inner Peace Through Meditation",
//     content: `Meditation has been practiced for thousands of years across various spiritual traditions. It offers a path to inner peace and self-discovery that transcends religious boundaries.

// In our modern world filled with constant distractions, meditation provides a sanctuary for the mind. Through regular practice, we learn to observe our thoughts without judgment, finding the stillness that exists within us all.

// The benefits of meditation extend far beyond the moments we spend in quiet contemplation. Regular practice can reduce stress, improve focus, and enhance our overall sense of well-being. It teaches us to respond rather than react to life's challenges.

// Whether you follow the Buddhist tradition of mindfulness, the Hindu practice of mantra meditation, or simply sit in silence, the goal remains the same: to connect with the deeper essence of who you are.

// Remember, meditation is not about achieving a perfect state of mind. It's about accepting whatever arises with compassion and returning to the present moment, again and again.`,
//     author: "Sarah Johnson",
//     date: "2024-03-15",
//     category: "Meditation",
//     tags: ["meditation", "inner peace", "mindfulness", "spirituality"],
//     readTime: "5 min read",
//     image: "/images/meditation-blog.jpg",
//     excerpt: "Discover how meditation can transform your daily life and lead you to a deeper sense of inner peace.",
//     likes: 42,
//     views: 256,
//     featured: true,
//     published: true,
//     createdAt: "2024-03-15T10:30:00Z",
//     updatedAt: "2024-03-15T10:30:00Z"
//   },
//   {
//     id: 2,
//     title: "The Universal Language of Love",
//     content: `Love transcends all boundaries - cultural, religious, and personal. It is the one force that unites humanity across all differences and divisions.

// Every major spiritual tradition speaks of love as the highest virtue. Christianity teaches us to "love thy neighbor," Islam emphasizes compassion and mercy, Buddhism speaks of loving-kindness, and Hinduism celebrates divine love in all its forms.

// But what does it mean to truly love? It begins with self-acceptance and extends outward to embrace all beings. Love is not just an emotion but a way of being, a choice we make in each moment.

// When we approach life with an open heart, we begin to see the divine spark in everyone we meet. Challenges become opportunities for growth, and differences become chances to learn and expand our understanding.

// The path of love is not always easy, but it is always transformative. It asks us to be vulnerable, to forgive, and to see beyond the surface to the soul that lies within.`,
//     author: "Michael Chen",
//     date: "2024-03-10",
//     category: "Love & Compassion",
//     tags: ["love", "compassion", "unity", "relationships"],
//     readTime: "4 min read",
//     image: "/images/love-blog.jpg",
//     excerpt: "Explore how love serves as the universal language that connects all spiritual traditions and human hearts.",
//     likes: 38,
//     views: 189,
//     featured: true,
//     published: true,
//     createdAt: "2024-03-10T14:20:00Z",
//     updatedAt: "2024-03-10T14:20:00Z"
//   },
//   {
//     id: 3,
//     title: "Sacred Wisdom from Ancient Texts",
//     content: `Throughout history, spiritual seekers have found guidance in sacred texts that offer timeless wisdom for navigating life's journey.

// The Bhagavad Gita teaches us about duty and devotion, the Bible speaks of faith and love, the Quran emphasizes surrender and compassion, while Buddhist texts guide us toward enlightenment and liberation from suffering.

// These ancient teachings, though arising from different cultures and times, share common threads that speak to the universal human experience. They remind us of our interconnectedness and the importance of living with purpose and meaning.

// In studying these texts, we discover that wisdom is not confined to any single tradition but flows like a river through all authentic spiritual paths. Each offers unique insights while pointing toward the same ultimate truth.

// By approaching these teachings with an open heart and mind, we can integrate their wisdom into our modern lives, finding practical guidance for contemporary challenges while honoring the profound truths they contain.`,
//     author: "Dr. Priya Sharma",
//     date: "2024-03-05",
//     category: "Sacred Texts",
//     tags: ["wisdom", "sacred texts", "ancient teachings", "spirituality"],
//     readTime: "6 min read",
//     image: "/images/sacred-texts-blog.jpg",
//     excerpt: "Explore the universal wisdom found in sacred texts from various spiritual traditions around the world.",
//     likes: 29,
//     views: 142,
//     featured: false,
//     published: true,
//     createdAt: "2024-03-05T09:15:00Z",
//     updatedAt: "2024-03-05T09:15:00Z"
//   }
// ];

// export const BlogStorageService = {
//   /**
//    * Initialize blog posts in localStorage
//    */
//   initializeBlogPosts: () => {
//     const existingPosts = getFromStorage(STORAGE_KEYS.BLOG_POSTS, []);
//     if (existingPosts.length === 0) {
//       setToStorage(STORAGE_KEYS.BLOG_POSTS, SAMPLE_BLOG_POSTS);
//       return SAMPLE_BLOG_POSTS;
//     }
//     return existingPosts;
//   },

//   /**
//    * Get all blog posts
//    */
//   getAllPosts: () => {
//     return getFromStorage(STORAGE_KEYS.BLOG_POSTS, []);
//   },

//   /**
//    * Get a single blog post by ID
//    */
//   getPostById: (id) => {
//     const posts = getFromStorage(STORAGE_KEYS.BLOG_POSTS, []);
//     return posts.find(post => post.id === parseInt(id));
//   },

//   /**
//    * Get featured blog posts
//    */
//   getFeaturedPosts: () => {
//     const posts = getFromStorage(STORAGE_KEYS.BLOG_POSTS, []);
//     return posts.filter(post => post.featured && post.published);
//   },

//   /**
//    * Get posts by category
//    */
//   getPostsByCategory: (category) => {
//     const posts = getFromStorage(STORAGE_KEYS.BLOG_POSTS, []);
//     return posts.filter(post => 
//       post.category.toLowerCase() === category.toLowerCase() && post.published
//     );
//   },

//   /**
//    * Search posts by title, content, or tags
//    */
//   searchPosts: (query) => {
//     const posts = getFromStorage(STORAGE_KEYS.BLOG_POSTS, []);
//     const searchTerm = query.toLowerCase();
    
//     return posts.filter(post => 
//       post.published && (
//         post.title.toLowerCase().includes(searchTerm) ||
//         post.content.toLowerCase().includes(searchTerm) ||
//         post.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
//         post.excerpt.toLowerCase().includes(searchTerm)
//       )
//     );
//   },

//   /**
//    * Add a new blog post
//    */
//   addPost: (postData) => {
//     const posts = getFromStorage(STORAGE_KEYS.BLOG_POSTS, []);
//     const newPost = {
//       ...postData,
//       id: Date.now(),
//       likes: 0,
//       views: 0,
//       createdAt: new Date().toISOString(),
//       updatedAt: new Date().toISOString(),
//       published: postData.published || false
//     };
    
//     posts.unshift(newPost);
//     setToStorage(STORAGE_KEYS.BLOG_POSTS, posts);
//     return newPost;
//   },

//   /**
//    * Update a blog post
//    */
//   updatePost: (id, updates) => {
//     const posts = getFromStorage(STORAGE_KEYS.BLOG_POSTS, []);
//     const postIndex = posts.findIndex(post => post.id === parseInt(id));
    
//     if (postIndex !== -1) {
//       posts[postIndex] = {
//         ...posts[postIndex],
//         ...updates,
//         updatedAt: new Date().toISOString()
//       };
//       setToStorage(STORAGE_KEYS.BLOG_POSTS, posts);
//       return posts[postIndex];
//     }
//     return null;
//   },

//   /**
//    * Delete a blog post
//    */
//   deletePost: (id) => {
//     const posts = getFromStorage(STORAGE_KEYS.BLOG_POSTS, []);
//     const filteredPosts = posts.filter(post => post.id !== parseInt(id));
//     setToStorage(STORAGE_KEYS.BLOG_POSTS, filteredPosts);
//     return filteredPosts;
//   },

//   /**
//    * Increment post views
//    */
//   incrementViews: (id) => {
//     const post = BlogStorageService.getPostById(id);
//     if (post) {
//       return BlogStorageService.updatePost(id, { views: (post.views || 0) + 1 });
//     }
//     return null;
//   }
// };

// // ============================================================================
// // Blog Likes Storage Service
// // ============================================================================

// export const BlogLikesService = {
//   /**
//    * Check if user has liked a post
//    */
//   isPostLiked: (postId) => {
//     const likes = getFromStorage(STORAGE_KEYS.BLOG_LIKES, {});
//     return likes[postId] || false;
//   },

//   /**
//    * Toggle like for a post
//    */
//   toggleLike: (postId) => {
//     const likes = getFromStorage(STORAGE_KEYS.BLOG_LIKES, {});
//     const isCurrentlyLiked = likes[postId] || false;
//     const newLikedState = !isCurrentlyLiked;
    
//     likes[postId] = newLikedState;
//     setToStorage(STORAGE_KEYS.BLOG_LIKES, likes);
    
//     // Update post like count
//     const post = BlogStorageService.getPostById(postId);
//     if (post) {
//       const newLikeCount = newLikedState ? 
//         (post.likes || 0) + 1 : 
//         Math.max((post.likes || 0) - 1, 0);
      
//       BlogStorageService.updatePost(postId, { likes: newLikeCount });
//     }
    
//     return newLikedState;
//   },

//   /**
//    * Get all liked posts
//    */
//   getLikedPosts: () => {
//     const likes = getFromStorage(STORAGE_KEYS.BLOG_LIKES, {});
//     return Object.keys(likes).filter(postId => likes[postId]);
//   }
// };

// // ============================================================================
// // Blog Comments Storage Service
// // ============================================================================

// export const BlogCommentsService = {
//   /**
//    * Get comments for a post
//    */
//   getComments: (postId) => {
//     const allComments = getFromStorage(STORAGE_KEYS.BLOG_COMMENTS, {});
//     return allComments[postId] || [];
//   },

//   /**
//    * Add a comment to a post
//    */
//   addComment: (postId, commentData) => {
//     const allComments = getFromStorage(STORAGE_KEYS.BLOG_COMMENTS, {});
    
//     const newComment = {
//       id: Date.now(),
//       postId: parseInt(postId),
//       author: commentData.author || 'Anonymous',
//       email: commentData.email || '',
//       text: commentData.text,
//       date: new Date().toISOString(),
//       timestamp: Date.now(),
//       approved: true // In a real app, you might have moderation
//     };
    
//     if (!allComments[postId]) {
//       allComments[postId] = [];
//     }
    
//     allComments[postId].unshift(newComment);
//     setToStorage(STORAGE_KEYS.BLOG_COMMENTS, allComments);
    
//     return newComment;
//   },

//   /**
//    * Delete a comment
//    */
//   deleteComment: (postId, commentId) => {
//     const allComments = getFromStorage(STORAGE_KEYS.BLOG_COMMENTS, {});
    
//     if (allComments[postId]) {
//       allComments[postId] = allComments[postId].filter(
//         comment => comment.id !== parseInt(commentId)
//       );
//       setToStorage(STORAGE_KEYS.BLOG_COMMENTS, allComments);
//     }
    
//     return allComments[postId] || [];
//   },

//   /**
//    * Get comment count for a post
//    */
//   getCommentCount: (postId) => {
//     const comments = BlogCommentsService.getComments(postId);
//     return comments.length;
//   },

//   /**
//    * Get recent comments across all posts
//    */
//   getRecentComments: (limit = 10) => {
//     const allComments = getFromStorage(STORAGE_KEYS.BLOG_COMMENTS, {});
//     const flatComments = [];
    
//     Object.keys(allComments).forEach(postId => {
//       allComments[postId].forEach(comment => {
//         flatComments.push(comment);
//       });
//     });
    
//     return flatComments
//       .sort((a, b) => b.timestamp - a.timestamp)
//       .slice(0, limit);
//   }
// };

// // ============================================================================
// // User Preferences Storage Service
// // ============================================================================

// export const UserPreferencesService = {
//   /**
//    * Get user preferences
//    */
//   getPreferences: () => {
//     return getFromStorage(STORAGE_KEYS.USER_PREFERENCES, {
//       theme: 'light',
//       fontSize: 'medium',
//       notifications: true,
//       autoplay: false,
//       language: 'en'
//     });
//   },

//   /**
//    * Update user preferences
//    */
//   updatePreferences: (updates) => {
//     const currentPrefs = UserPreferencesService.getPreferences();
//     const newPrefs = { ...currentPrefs, ...updates };
//     setToStorage(STORAGE_KEYS.USER_PREFERENCES, newPrefs);
//     return newPrefs;
//   },

//   /**
//    * Reset preferences to default
//    */
//   resetPreferences: () => {
//     removeFromStorage(STORAGE_KEYS.USER_PREFERENCES);
//     return UserPreferencesService.getPreferences();
//   }
// };

// // ============================================================================
// // Analytics & Tracking Service
// // ============================================================================

// export const AnalyticsService = {
//   /**
//    * Track page visit
//    */
//   trackVisit: (page) => {
//     const visitCount = getFromStorage(STORAGE_KEYS.VISIT_COUNT, 0);
//     setToStorage(STORAGE_KEYS.VISIT_COUNT, visitCount + 1);
//     setToStorage(STORAGE_KEYS.LAST_VISIT, new Date().toISOString());
    
//     // Track specific page visits
//     const pageVisits = getFromStorage('pathOfUnity_pageVisits', {});
//     pageVisits[page] = (pageVisits[page] || 0) + 1;
//     setToStorage('pathOfUnity_pageVisits', pageVisits);
//   },

//   /**
//    * Get visit statistics
//    */
//   getVisitStats: () => {
//     return {
//       totalVisits: getFromStorage(STORAGE_KEYS.VISIT_COUNT, 0),
//       lastVisit: getFromStorage(STORAGE_KEYS.LAST_VISIT, null),
//       pageVisits: getFromStorage('pathOfUnity_pageVisits', {})
//     };
//   }
// };

// // ============================================================================
// // Data Export/Import Utilities
// // ============================================================================

// export const DataManagementService = {
//   /**
//    * Export all localStorage data
//    */
//   exportData: () => {
//     const exportData = {};
    
//     Object.values(STORAGE_KEYS).forEach(key => {
//       const data = getFromStorage(key);
//       if (data !== null) {
//         exportData[key] = data;
//       }
//     });
    
//     return {
//       data: exportData,
//       timestamp: new Date().toISOString(),
//       version: '1.0'
//     };
//   },

//   /**
//    * Import data to localStorage
//    */
//   importData: (importData) => {
//     try {
//       if (!importData.data) {
//         throw new Error('Invalid import data format');
//       }
      
//       Object.keys(importData.data).forEach(key => {
//         if (Object.values(STORAGE_KEYS).includes(key)) {
//           setToStorage(key, importData.data[key]);
//         }
//       });
      
//       return true;
//     } catch (error) {
//       console.error('Error importing data:', error);
//       return false;
//     }
//   },

//   /**
//    * Download data as JSON file
//    */
//   downloadData: () => {
//     const data = DataManagementService.exportData();
//     const blob = new Blob([JSON.stringify(data, null, 2)], { 
//       type: 'application/json' 
//     });
    
//     const url = URL.createObjectURL(blob);
//     const link = document.createElement('a');
//     link.href = url;
//     link.download = `path-of-unity-data-${new Date().toISOString().split('T')[0]}.json`;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//     URL.revokeObjectURL(url);
//   }
// };

// // ============================================================================
// // Initialize Storage on App Load
// // ============================================================================

// export const initializeStorage = () => {
//   if (!isStorageAvailable()) {
//     console.warn('localStorage is not available');
//     return false;
//   }
  
//   // Initialize blog posts
//   BlogStorageService.initializeBlogPosts();
  
//   // Track app initialization
//   AnalyticsService.trackVisit('app_init');
  
//   return true;
// };

// // Default export with all services
// export default {
//   STORAGE_KEYS,
//   getFromStorage,
//   setToStorage,
//   removeFromStorage,
//   clearAllData,
//   isStorageAvailable,
//   BlogStorageService,
//   BlogLikesService,
//   BlogCommentsService,
//   UserPreferencesService,
//   AnalyticsService,
//   DataManagementService,
//   initializeStorage
// };

// src/hooks/useBlogStorage.js
import { useState, useEffect } from 'react';

const STORAGE_KEY = 'pathOfUnityBlogs';

export const useBlogStorage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load blogs from localStorage on mount
  useEffect(() => {
    loadBlogs();
  }, []);

  const loadBlogs = () => {
    try {
      const savedBlogs = localStorage.getItem(STORAGE_KEY);
      if (savedBlogs) {
        const parsedBlogs = JSON.parse(savedBlogs);
        setBlogs(parsedBlogs.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
      }
    } catch (error) {
      console.error('Error loading blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  const saveBlogs = (blogList) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(blogList));
      setBlogs(blogList);
    } catch (error) {
      console.error('Error saving blogs:', error);
    }
  };

  const addBlog = (blogData) => {
    const newBlog = {
      id: Date.now().toString(),
      ...blogData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    const updatedBlogs = [newBlog, ...blogs];
    saveBlogs(updatedBlogs);
    return newBlog;
  };

  const updateBlog = (id, blogData) => {
    const updatedBlogs = blogs.map(blog =>
      blog.id === id
        ? { ...blog, ...blogData, updatedAt: new Date().toISOString() }
        : blog
    );
    saveBlogs(updatedBlogs);
  };

  const deleteBlog = (id) => {
    const updatedBlogs = blogs.filter(blog => blog.id !== id);
    saveBlogs(updatedBlogs);
  };

  const getBlogById = (id) => {
    return blogs.find(blog => blog.id === id);
  };

  const getBlogsByCategory = (category) => {
    return blogs.filter(blog => blog.category === category);
  };

  const searchBlogs = (searchTerm) => {
    return blogs.filter(blog =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  };

  const getCategories = () => {
    const categories = [...new Set(blogs.map(blog => blog.category))];
    return categories.sort();
  };

  const getTags = () => {
    const allTags = blogs.flatMap(blog => blog.tags);
    return [...new Set(allTags)].sort();
  };

  return {
    blogs,
    loading,
    addBlog,
    updateBlog,
    deleteBlog,
    getBlogById,
    getBlogsByCategory,
    searchBlogs,
    getCategories,
    getTags,
    refreshBlogs: loadBlogs
  };
};

export default useBlogStorage;