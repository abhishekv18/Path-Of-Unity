import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Filter, 
  X, 
  ChevronDown, 
  Calendar, 
  User, 
  Tag, 
  SortAsc, 
  SortDesc,
  Play,
  Book,
  Download,
  Headphones,
  Star,
  Eye,
  Clock
} from 'lucide-react';

const SearchFilter = ({ 
  teachings = [], 
  onFilterChange, 
  initialFilters = {} 
}) => {
  const [searchTerm, setSearchTerm] = useState(initialFilters.search || '');
  const [selectedType, setSelectedType] = useState(initialFilters.type || 'all');
  const [selectedCategory, setSelectedCategory] = useState(initialFilters.category || 'all');
  const [selectedAuthor, setSelectedAuthor] = useState(initialFilters.author || 'all');
  const [selectedTags, setSelectedTags] = useState(initialFilters.tags || []);
  const [sortBy, setSortBy] = useState(initialFilters.sortBy || 'date');
  const [sortOrder, setSortOrder] = useState(initialFilters.sortOrder || 'desc');
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [dateRange, setDateRange] = useState({
    start: initialFilters.dateStart || '',
    end: initialFilters.dateEnd || ''
  });

  // Extract unique values for filter options
  const getUniqueValues = (key) => {
    return [...new Set(teachings.map(item => item[key]).filter(Boolean))].sort();
  };

  const types = getUniqueValues('type');
  const categories = getUniqueValues('category');
  const authors = getUniqueValues('author');
  const allTags = [...new Set(teachings.flatMap(item => item.tags || []))].sort();

  // Type icons mapping
  const getTypeIcon = (type) => {
    switch (type) {
      case 'video': return <Play className="w-4 h-4" />;
      case 'blog': return <Book className="w-4 h-4" />;
      case 'pdf': return <Download className="w-4 h-4" />;
      case 'audio': return <Headphones className="w-4 h-4" />;
      default: return <Book className="w-4 h-4" />;
    }
  };

  // Apply filters whenever any filter changes
  useEffect(() => {
    const filteredTeachings = applyFilters();
    onFilterChange && onFilterChange(filteredTeachings);
  }, [searchTerm, selectedType, selectedCategory, selectedAuthor, selectedTags, sortBy, sortOrder, dateRange]);

  const applyFilters = () => {
    let filtered = [...teachings];

    // Search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(teaching => 
        teaching.title?.toLowerCase().includes(term) ||
        teaching.description?.toLowerCase().includes(term) ||
        teaching.excerpt?.toLowerCase().includes(term) ||
        teaching.author?.toLowerCase().includes(term) ||
        teaching.tags?.some(tag => tag.toLowerCase().includes(term))
      );
    }

    // Type filter
    if (selectedType !== 'all') {
      filtered = filtered.filter(teaching => teaching.type === selectedType);
    }

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(teaching => teaching.category === selectedCategory);
    }

    // Author filter
    if (selectedAuthor !== 'all') {
      filtered = filtered.filter(teaching => teaching.author === selectedAuthor);
    }

    // Tags filter
    if (selectedTags.length > 0) {
      filtered = filtered.filter(teaching => 
        selectedTags.every(tag => teaching.tags?.includes(tag))
      );
    }

    // Date range filter
    if (dateRange.start || dateRange.end) {
      filtered = filtered.filter(teaching => {
        const teachingDate = new Date(teaching.date);
        const startDate = dateRange.start ? new Date(dateRange.start) : null;
        const endDate = dateRange.end ? new Date(dateRange.end) : null;
        
        if (startDate && teachingDate < startDate) return false;
        if (endDate && teachingDate > endDate) return false;
        return true;
      });
    }

    // Sort results
    filtered.sort((a, b) => {
      let aValue, bValue;
      
      switch (sortBy) {
        case 'title':
          aValue = a.title?.toLowerCase() || '';
          bValue = b.title?.toLowerCase() || '';
          break;
        case 'date':
          aValue = new Date(a.date);
          bValue = new Date(b.date);
          break;
        case 'views':
          aValue = a.views || 0;
          bValue = b.views || 0;
          break;
        case 'duration':
          aValue = a.duration || 0;
          bValue = b.duration || 0;
          break;
        case 'author':
          aValue = a.author?.toLowerCase() || '';
          bValue = b.author?.toLowerCase() || '';
          break;
        default:
          aValue = a.title?.toLowerCase() || '';
          bValue = b.title?.toLowerCase() || '';
      }

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    return filtered;
  };

  const handleTagToggle = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearAllFilters = () => {
    setSearchTerm('');
    setSelectedType('all');
    setSelectedCategory('all');
    setSelectedAuthor('all');
    setSelectedTags([]);
    setSortBy('date');
    setSortOrder('desc');
    setDateRange({ start: '', end: '' });
  };

  const hasActiveFilters = searchTerm || selectedType !== 'all' || selectedCategory !== 'all' || 
                          selectedAuthor !== 'all' || selectedTags.length > 0 || 
                          dateRange.start || dateRange.end;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
      {/* Search Bar */}
      <div className="relative mb-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search teachings, topics, authors..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-divine-gold focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* Quick Filters Row */}
      <div className="flex flex-wrap gap-4 mb-6">
        {/* Type Filter */}
        <div className="relative">
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-divine-gold focus:border-transparent transition-all duration-200"
          >
            <option value="all">All Types</option>
            {types.map(type => (
              <option key={type} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
        </div>

        {/* Category Filter */}
        <div className="relative">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-divine-gold focus:border-transparent transition-all duration-200"
          >
            <option value="all">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
        </div>

        {/* Sort Options */}
        <div className="flex items-center gap-2">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-divine-gold focus:border-transparent transition-all duration-200"
          >
            <option value="date">Sort by Date</option>
            <option value="title">Sort by Title</option>
            <option value="views">Sort by Views</option>
            <option value="duration">Sort by Duration</option>
            <option value="author">Sort by Author</option>
          </select>
          <button
            onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
            className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            title={`Sort ${sortOrder === 'asc' ? 'Descending' : 'Ascending'}`}
          >
            {sortOrder === 'asc' ? 
              <SortAsc className="w-4 h-4 text-gray-600" /> : 
              <SortDesc className="w-4 h-4 text-gray-600" />
            }
          </button>
        </div>

        {/* Advanced Filters Toggle */}
        <button
          onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
          className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200"
        >
          <Filter className="w-4 h-4" />
          Advanced
          <ChevronDown className={`w-4 h-4 transform transition-transform duration-200 ${showAdvancedFilters ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* Advanced Filters */}
      {showAdvancedFilters && (
        <div className="border-t border-gray-100 pt-6 space-y-6">
          {/* Author Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
              <User className="w-4 h-4" />
              Author
            </label>
            <select
              value={selectedAuthor}
              onChange={(e) => setSelectedAuthor(e.target.value)}
              className="w-full md:w-64 appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-divine-gold focus:border-transparent transition-all duration-200"
            >
              <option value="all">All Authors</option>
              {authors.map(author => (
                <option key={author} value={author}>
                  {author}
                </option>
              ))}
            </select>
          </div>

          {/* Date Range Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Date Range
            </label>
            <div className="flex items-center gap-4">
              <input
                type="date"
                value={dateRange.start}
                onChange={(e) => setDateRange(prev => ({ ...prev, start: e.target.value }))}
                className="border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-divine-gold focus:border-transparent transition-all duration-200"
              />
              <span className="text-gray-500">to</span>
              <input
                type="date"
                value={dateRange.end}
                onChange={(e) => setDateRange(prev => ({ ...prev, end: e.target.value }))}
                className="border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-divine-gold focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>

          {/* Tags Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
              <Tag className="w-4 h-4" />
              Tags
            </label>
            <div className="flex flex-wrap gap-2">
              {allTags.slice(0, 20).map(tag => (
                <button
                  key={tag}
                  onClick={() => handleTagToggle(tag)}
                  className={`px-3 py-1 rounded-full text-sm transition-all duration-200 ${
                    selectedTags.includes(tag)
                      ? 'bg-divine-gold text-white shadow-md transform scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  #{tag}
                </button>
              ))}
              {allTags.length > 20 && (
                <span className="px-3 py-1 text-sm text-gray-500">
                  +{allTags.length - 20} more tags
                </span>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Active Filters & Clear Button */}
      {hasActiveFilters && (
        <div className="border-t border-gray-100 pt-6 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Filter className="w-4 h-4" />
            <span>Active filters:</span>
            {searchTerm && <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">Search: "{searchTerm}"</span>}
            {selectedType !== 'all' && <span className="bg-green-100 text-green-700 px-2 py-1 rounded">{selectedType}</span>}
            {selectedCategory !== 'all' && <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded">{selectedCategory}</span>}
            {selectedTags.map(tag => (
              <span key={tag} className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded">#{tag}</span>
            ))}
          </div>
          <button
            onClick={clearAllFilters}
            className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            Clear All
          </button>
        </div>
      )}

      {/* Results Summary */}
      <div className="mt-4 text-sm text-gray-600 flex items-center gap-2">
        <Eye className="w-4 h-4" />
        <span>Showing {applyFilters().length} of {teachings.length} teachings</span>
      </div>
    </div>
  );
};

export default SearchFilter;