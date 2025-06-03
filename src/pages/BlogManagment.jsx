import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, BookOpen, Edit3, Eye } from 'lucide-react';
import UploadBlog from '../components/teachings/BlogPost';
import BlogList from '../components/teachings/BlogList';
import useBlogStorage from '../hooks/useLocalStorage';

const BlogManagementPage = () => {
  const [currentView, setCurrentView] = useState('list'); // 'list', 'create', 'edit'
  const [editingBlog, setEditingBlog] = useState(null);
  const { blogs, loading } = useBlogStorage();

  const handleCreateNew = () => {
    setEditingBlog(null);
    setCurrentView('create');
  };

  const handleEditBlog = (blog) => {
    setEditingBlog(blog);
    setCurrentView('edit');
  };

  const handleBackToList = () => {
    setCurrentView('list');
    setEditingBlog(null);
  };

  const handleBlogSaved = () => {
    setCurrentView('list');
    setEditingBlog(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading blogs...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      {/* Navigation Header */}
      <div className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <button
                onClick={() => setCurrentView('list')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  currentView === 'list'
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-600 hover:bg-purple-50'
                }`}
              >
                <BookOpen className="w-5 h-5" />
                <span>All Blogs ({blogs.length})</span>
              </button>
              
              <button
                onClick={handleCreateNew}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  currentView === 'create'
                    ? 'bg-green-600 text-white'
                    : 'text-gray-600 hover:bg-green-50'
                }`}
              >
                <Plus className="w-5 h-5" />
                <span>Create New</span>
              </button>

              {currentView === 'edit' && (
                <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg">
                  <Edit3 className="w-5 h-5" />
                  <span>Editing: {editingBlog?.title}</span>
                </div>
              )}
            </div>

            {currentView !== 'list' && (
              <button
                onClick={handleBackToList}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-all"
              >
                <Eye className="w-5 h-5" />
                <span>View All</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-8">
        {currentView === 'list' && (
          <motion.div
            key="list"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
          >
            <BlogList onEditBlog={handleEditBlog} />
          </motion.div>
        )}

        {(currentView === 'create' || currentView === 'edit') && (
          <motion.div
            key="form"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <UploadBlog
              existingBlog={editingBlog}
              onSave={handleBlogSaved}
              onCancel={handleBackToList}
            />
          </motion.div>
        )}
      </div>

      {/* Floating Action Button for Mobile */}
      {currentView === 'list' && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleCreateNew}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all lg:hidden"
        >
          <Plus className="w-6 h-6" />
        </motion.button>
      )}
    </div>
  );
};

export default BlogManagementPage;