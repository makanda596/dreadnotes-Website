import React, { useEffect, useState } from "react";
import { userAuthStore } from "../utilis/user";
import { Search, Filter, Grid, List, Star, Eye, Zap, X, ChevronDown } from "lucide-react";

const Products = () => {
  const { getProducts, products, error } = userAuthStore();
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("default");
  const [selectedBrandTypes, setSelectedBrandTypes] = useState([]);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const brandTypes = [
    "Podcast", "Organization", "Institution", "Game",
    "Event", "Music", "Culture", "Other"
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        await getProducts();
      } catch (error) {
        console.error("Product fetch failed:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [getProducts]);

  // Filter and sort products
  const filteredProducts = React.useMemo(() => {
    if (!Array.isArray(products)) return [];

    let filtered = products.filter(item => {
      const matchesSearch = item.name?.toLowerCase().includes(search.toLowerCase()) ||
        item.desc?.toLowerCase().includes(search.toLowerCase());

      const matchesBrandType = selectedBrandTypes.length === 0 ||
        selectedBrandTypes.includes(item.brandType);

      return matchesSearch && matchesBrandType;
    });

    // Sort products
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => (a.price || 0) - (b.price || 0));
        break;
      case "price-high":
        filtered.sort((a, b) => (b.price || 0) - (a.price || 0));
        break;
      case "name":
        filtered.sort((a, b) => (a.name || "").localeCompare(b.name || ""));
        break;
      default:
        break;
    }

    return filtered;
  }, [products, search, sortBy, selectedBrandTypes]);

  const toggleBrandType = (brandType) => {
    setSelectedBrandTypes(prev =>
      prev.includes(brandType)
        ? prev.filter(type => type !== brandType)
        : [...prev, brandType]
    );
  };

  const clearAllFilters = () => {
    setSelectedBrandTypes([]);
    setSearch("");
    setSortBy("default");
    setIsMobileFilterOpen(false);
  };

  const handleBrandTypeSelect = (brandType) => {
    toggleBrandType(brandType);
    // Close mobile filter after selection
    if (window.innerWidth < 1024) {
      setIsMobileFilterOpen(false);
    }
  };

  const BrandTypeIcon = ({ type }) => {
    const icons = {
      Podcast: "🎙️",
      Organization: "🏢",
      Institution: "🎓",
      Game: "🎮",
      Event: "🎪",
      Music: "🎵",
      Culture: "🌍",
      Other: "🔮"
    };

    return <span className="text-lg">{icons[type]}</span>;
  };

  const LoadingSkeleton = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[...Array(6)].map((_, index) => (
        <div key={index} className="animate-pulse">
          <div className="bg-gray-300 h-64 rounded-2xl mb-4"></div>
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-6 bg-gray-300 rounded w-1/3 mb-2"></div>
          <div className="h-3 bg-gray-300 rounded w-full mb-1"></div>
          <div className="h-3 bg-gray-300 rounded w-2/3"></div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Brand Collections
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore merchandise by brand type. Find exactly what represents your style and interests.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">

          {/* Brand Types Sidebar - Desktop */}
          <aside className="lg:w-80 flex-shrink-0 hidden lg:block">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sticky top-6">

              {/* Filters Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900 flex items-center">
                  <Filter className="w-5 h-5 mr-2 text-blue-600" />
                  Brand Types
                </h2>
                {(selectedBrandTypes.length > 0 || search || sortBy !== "default") && (
                  <button
                    onClick={clearAllFilters}
                    className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center"
                  >
                    <X className="w-4 h-4 mr-1" />
                    Clear All
                  </button>
                )}
              </div>

              {/* Active Filters */}
              {selectedBrandTypes.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3 text-sm">Active Filters:</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedBrandTypes.map(type => (
                      <span
                        key={type}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium flex items-center"
                      >
                        {type}
                        <button
                          onClick={() => toggleBrandType(type)}
                          className="ml-2 hover:text-blue-900"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Brand Type Filters */}
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900 mb-3">Filter by Type</h3>
                {brandTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => toggleBrandType(type)}
                    className={`w-full flex items-center justify-between p-3 rounded-xl border transition-all duration-200 ${selectedBrandTypes.includes(type)
                      ? "bg-blue-50 border-blue-200 shadow-sm"
                      : "bg-gray-50 border-gray-200 hover:bg-gray-100"
                      }`}
                  >
                    <div className="flex items-center space-x-3">
                      <BrandTypeIcon type={type} />
                      <span className="font-medium text-gray-900">{type}</span>
                    </div>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedBrandTypes.includes(type)
                      ? "bg-blue-600 border-blue-600"
                      : "bg-white border-gray-300"
                      }`}>
                      {selectedBrandTypes.includes(type) && (
                        <span className="text-white text-xs">✓</span>
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {/* Sort Options */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3">Sort By</h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="default">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name: A to Z</option>
                </select>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">

            {/* Mobile Filter Button */}
            <div className="lg:hidden mb-4">
              <button
                onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
                className="w-full bg-white rounded-2xl shadow-lg border border-gray-100 p-4 flex items-center justify-between"
              >
                <div className="flex items-center">
                  <Filter className="w-5 h-5 mr-2 text-blue-600" />
                  <span className="font-bold text-gray-900">
                    Brand Types {selectedBrandTypes.length > 0 && `(${selectedBrandTypes.length})`}
                  </span>
                </div>
                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${isMobileFilterOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Mobile Filter Panel */}
            {isMobileFilterOpen && (
              <div className="lg:hidden bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-6">
                {/* Filters Header */}
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900 flex items-center">
                    <Filter className="w-5 h-5 mr-2 text-blue-600" />
                    Brand Types
                  </h2>
                  {(selectedBrandTypes.length > 0 || search || sortBy !== "default") && (
                    <button
                      onClick={clearAllFilters}
                      className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center"
                    >
                      <X className="w-4 h-4 mr-1" />
                      Clear All
                    </button>
                  )}
                </div>

                {/* Active Filters */}
                {selectedBrandTypes.length > 0 && (
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-3 text-sm">Active Filters:</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedBrandTypes.map(type => (
                        <span
                          key={type}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium flex items-center"
                        >
                          {type}
                          <button
                            onClick={() => handleBrandTypeSelect(type)}
                            className="ml-2 hover:text-blue-900"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Brand Type Filters */}
                <div className="space-y-3 mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Filter by Type</h3>
                  {brandTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => handleBrandTypeSelect(type)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl border transition-all duration-200 ${selectedBrandTypes.includes(type)
                        ? "bg-blue-50 border-blue-200 shadow-sm"
                        : "bg-gray-50 border-gray-200 hover:bg-gray-100"
                        }`}
                    >
                      <div className="flex items-center space-x-3">
                        <BrandTypeIcon type={type} />
                        <span className="font-medium text-gray-900">{type}</span>
                      </div>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedBrandTypes.includes(type)
                        ? "bg-blue-600 border-blue-600"
                        : "bg-white border-gray-300"
                        }`}>
                        {selectedBrandTypes.includes(type) && (
                          <span className="text-white text-xs">✓</span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>

                {/* Sort Options */}
                <div className="pt-6 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-3">Sort By</h3>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="default">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="name">Name: A to Z</option>
                  </select>
                </div>
              </div>
            )}

            {/* Search and Controls Bar */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8">
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">

                {/* Search Bar */}
                <div className="relative flex-1 max-w-2xl">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search products by name, description, or brand type..."
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>

                {/* View Controls and Results */}
                <div className="flex items-center gap-4">
                  <div className="flex bg-gray-100 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-2 rounded-lg transition-all ${viewMode === "grid"
                        ? "bg-white shadow-sm text-blue-600"
                        : "text-gray-500 hover:text-gray-700"
                        }`}
                    >
                      <Grid className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`p-2 rounded-lg transition-all ${viewMode === "list"
                        ? "bg-white shadow-sm text-blue-600"
                        : "text-gray-500 hover:text-gray-700"
                        }`}
                    >
                      <List className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="text-sm text-gray-600">
                    {filteredProducts.length} {selectedBrandTypes.length > 0 ?
                      `${selectedBrandTypes.join(", ")} ` : ""}products found
                  </div>
                </div>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-8">
                <div className="flex items-center text-red-800">
                  <Zap className="w-5 h-5 mr-2" />
                  <span className="font-medium">{error}</span>
                </div>
              </div>
            )}

            {/* Products Grid/List */}
            {loading ? (
              <LoadingSkeleton />
            ) : (
              <>
                {filteredProducts.length > 0 ? (
                  <div className={
                    viewMode === "grid"
                      ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
                      : "space-y-6"
                  }>
                    {filteredProducts.map((item, index) => (
                      <div
                        key={item._id || index}
                        className={`
                          bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 
                          border border-gray-100 overflow-hidden group
                          ${viewMode === "list" ? "flex" : ""}
                        `}
                      >
                        {/* Product Image */}
                        <div className={`
                          relative overflow-hidden
                          ${viewMode === "list" ? "w-64 flex-shrink-0" : "w-full"}
                        `}>
                          <img
                            src={
                              item.image ||
                              "https://res.cloudinary.com/db5pgr14l/image/upload/v1747664350/rgjtzi3daglw51rfnxhb.jpg"
                            }
                            alt={item.name}
                            className={`
                              w-full object-cover transition-transform duration-700 group-hover:scale-110
                              ${viewMode === "list" ? "h-48" : "h-64"}
                            `}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                          {/* Brand Type Badge */}
                          <div className="absolute top-4 left-4">
                            <span className="bg-black/70 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                              {item.brandType}
                            </span>
                          </div>
                        </div>

                        {/* Product Info */}
                        <div className={`p-6 flex-1 ${viewMode === "list" ? "flex flex-col justify-center" : ""}`}>
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="text-lg font-bold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                {item.name}
                              </h3>
                              <span className="text-sm text-blue-600 font-medium mt-1 inline-block">
                                {item.brandType} Collection
                              </span>
                            </div>
                          </div>

                          <p className="text-2xl font-bold text-blue-600 mb-3">
                            ${item.price?.toLocaleString() || "N/A"}
                          </p>

                          <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                            {item.desc || "No description available."}
                          </p>

                          <div className="flex items-center justify-between mt-auto">
                            <div className="flex items-center space-x-1">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                  key={star}
                                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                                />
                              ))}
                            </div>

                            <a
                              href={`/product/${item._id}`}
                              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-2 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                            >
                              View Details
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <div className="bg-white rounded-2xl shadow-lg p-12 max-w-md mx-auto">
                      <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-gray-900 mb-2">No products found</h3>
                      <p className="text-gray-600 mb-6">
                        {selectedBrandTypes.length > 0 || search
                          ? `No results for your filters. Try adjusting your selection.`
                          : "No products available at the moment."}
                      </p>
                      {(selectedBrandTypes.length > 0 || search) && (
                        <button
                          onClick={clearAllFilters}
                          className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition-colors"
                        >
                          Clear Filters
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Products;