// src/pages/OneProduct.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
    ArrowLeft,
    ShoppingCart,
    Heart,
    Share2,
    Star,
    Check,
    Shield,
    Truck,
    RotateCcw,
    Plus,
    Minus,
    Instagram,
    Facebook,
    Twitter
} from "lucide-react";

const OneProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [activeTab, setActiveTab] = useState("description");
    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                const res = await axios.get(`http://localhost:5000/auth/oneProduct/${id}`);
                setProduct(res.data);
                // Simulate related products fetch
                setTimeout(() => {
                    setRelatedProducts([
                        { id: 1, name: "Premium Wireless Headphones", price: 199, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400" },
                        { id: 2, name: "Smart Watch Pro", price: 299, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400" },
                        { id: 3, name: "Camera Lens Kit", price: 459, image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400" }
                    ]);
                }, 500);
            } catch (err) {
                setError(err.response?.data?.message || "Failed to fetch product");
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    const productImages = [
        product?.image || "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
        "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800",
        "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800",
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800"
    ];

    const features = [
        { icon: Truck, text: "Free shipping worldwide" },
        { icon: Shield, text: "2-year warranty included" },
        { icon: RotateCcw, text: "30-day return policy" },
        { icon: Check, text: "In stock - ready to ship" }
    ];

    const handleAddToCart = () => {
        // Add to cart logic here
        console.log(`Added ${quantity} ${product.name} to cart`);
    };

    const handleBuyNow = () => {
        // Buy now logic here
        console.log("Proceeding to checkout");
    };

    const toggleWishlist = () => {
        setIsWishlisted(!isWishlisted);
    };

    const shareProduct = () => {
        if (navigator.share) {
            navigator.share({
                title: product.name,
                text: product.desc,
                url: window.location.href,
            });
        }
    };

    if (loading) return <ProductLoadingSkeleton />;
    if (error) return <ErrorState error={error} />;
    if (!product) return <NotFoundState />;

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/20">
            {/* Navigation */}
            <nav className="bg-white/80 backdrop-blur-lg border-b border-gray-100 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <button
                            onClick={() => navigate(-1)}
                            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5 mr-2" />
                            Back to Products
                        </button>
                        <div className="flex items-center space-x-4">
                            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                                <Heart className="w-5 h-5" />
                            </button>
                            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                                <ShoppingCart className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Product Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

                    {/* Image Gallery */}
                    <div className="space-y-4">
                        <div className="aspect-square rounded-3xl bg-white p-8 shadow-2xl border border-gray-100 overflow-hidden">
                            <img
                                src={productImages[selectedImage]}
                                alt={product.name}
                                className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            {productImages.map((img, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImage(index)}
                                    className={`aspect-square rounded-2xl border-2 overflow-hidden transition-all duration-300 ${selectedImage === index
                                            ? "border-blue-500 shadow-lg"
                                            : "border-gray-200 hover:border-gray-300"
                                        }`}
                                >
                                    <img
                                        src={img}
                                        alt={`${product.name} view ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="space-y-6">
                        {/* Breadcrumb */}
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
                            <span>/</span>
                            <Link to="/products" className="hover:text-blue-600 transition-colors">Products</Link>
                            <span>/</span>
                            <span className="text-gray-900">{product.name}</span>
                        </div>

                        {/* Product Header */}
                        <div>
                            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                                {product.name}
                            </h1>
                            <div className="flex items-center space-x-4 mb-4">
                                <div className="flex items-center">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                    ))}
                                    <span className="ml-2 text-sm text-gray-600">4.8 (128 reviews)</span>
                                </div>
                                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                                    In Stock
                                </span>
                            </div>
                        </div>

                        {/* Price */}
                        <div className="flex items-baseline space-x-3">
                            <span className="text-4xl font-bold text-blue-600">
                                ${product.price?.toLocaleString()}
                            </span>
                            <span className="text-xl text-gray-500 line-through">${(product.price * 1.2)?.toLocaleString()}</span>
                            <span className="px-2 py-1 bg-red-100 text-red-600 rounded text-sm font-bold">
                                20% OFF
                            </span>
                        </div>

                        {/* Features */}
                        <div className="grid grid-cols-2 gap-4 py-4">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center space-x-3">
                                    <feature.icon className="w-5 h-5 text-green-500" />
                                    <span className="text-sm text-gray-600">{feature.text}</span>
                                </div>
                            ))}
                        </div>

                        {/* Description */}
                        <p className="text-lg text-gray-700 leading-relaxed">
                            {product.desc || "Premium quality product designed for exceptional performance and durability. Crafted with attention to detail and built to last."}
                        </p>

                        {/* Quantity Selector */}
                        <div className="flex items-center space-x-4">
                            <span className="text-lg font-semibold text-gray-900">Quantity:</span>
                            <div className="flex items-center space-x-3">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                                >
                                    <Minus className="w-4 h-4" />
                                </button>
                                <span className="text-xl font-semibold w-8 text-center">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                                >
                                    <Plus className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button
                                onClick={handleAddToCart}
                                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3"
                            >
                                <ShoppingCart className="w-5 h-5" />
                                <span>Add to Cart</span>
                            </button>
                            <button
                                onClick={handleBuyNow}
                                className="flex-1 bg-gray-900 text-white py-4 px-8 rounded-2xl font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                            >
                                Buy Now
                            </button>
                        </div>

                        {/* Secondary Actions */}
                        <div className="flex items-center justify-center space-x-6 pt-4">
                            <button
                                onClick={toggleWishlist}
                                className={`flex items-center space-x-2 transition-colors ${isWishlisted ? "text-red-500" : "text-gray-400 hover:text-red-500"
                                    }`}
                            >
                                <Heart className={`w-5 h-5 ${isWishlisted ? "fill-current" : ""}`} />
                                <span>{isWishlisted ? "Wishlisted" : "Add to Wishlist"}</span>
                            </button>
                            <button
                                onClick={shareProduct}
                                className="flex items-center space-x-2 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <Share2 className="w-5 h-5" />
                                <span>Share</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Product Details Tabs */}
                <div className="mt-16 bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                    <div className="border-b border-gray-200">
                        <nav className="flex space-x-8 px-8">
                            {["description", "specifications", "reviews", "shipping"].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`py-6 px-2 font-medium text-lg border-b-2 transition-colors capitalize ${activeTab === tab
                                            ? "border-blue-500 text-blue-600"
                                            : "border-transparent text-gray-500 hover:text-gray-700"
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </nav>
                    </div>
                    <div className="p-8">
                        {activeTab === "description" && (
                            <div className="prose prose-lg max-w-none">
                                <p className="text-gray-700 leading-relaxed">
                                    Discover the ultimate experience with our premium {product.name}. Designed for
                                    perfection and built to exceed expectations, this product represents the pinnacle
                                    of quality and innovation in its category.
                                </p>
                                <ul className="mt-6 space-y-3">
                                    <li className="flex items-center">
                                        <Check className="w-5 h-5 text-green-500 mr-3" />
                                        Premium materials and craftsmanship
                                    </li>
                                    <li className="flex items-center">
                                        <Check className="w-5 h-5 text-green-500 mr-3" />
                                        Industry-leading performance standards
                                    </li>
                                    <li className="flex items-center">
                                        <Check className="w-5 h-5 text-green-500 mr-3" />
                                        Eco-friendly and sustainable design
                                    </li>
                                    <li className="flex items-center">
                                        <Check className="w-5 h-5 text-green-500 mr-3" />
                                        Comprehensive customer support
                                    </li>
                                </ul>
                            </div>
                        )}
                        {/* Add other tab contents here */}
                    </div>
                </div>

                {/* Related Products */}
                <div className="mt-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">You Might Also Like</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {relatedProducts.map((item) => (
                            <div key={item.id} className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden group">
                                <div className="relative overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{item.name}</h3>
                                    <p className="text-2xl font-bold text-blue-600 mb-4">${item.price}</p>
                                    <button className="w-full bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
                    <h3 className="text-3xl font-bold text-white mb-4">Ready to Elevate Your Experience?</h3>
                    <p className="text-blue-100 text-lg mb-8">Join thousands of satisfied customers worldwide</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-colors">
                            Shop Collection
                        </button>
                        <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-colors">
                            Contact Sales
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Loading Skeleton
const ProductLoadingSkeleton = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                <div className="space-y-4">
                    <div className="aspect-square rounded-3xl bg-gray-200 animate-pulse"></div>
                    <div className="grid grid-cols-4 gap-4">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="aspect-square rounded-2xl bg-gray-200 animate-pulse"></div>
                        ))}
                    </div>
                </div>
                <div className="space-y-6">
                    <div className="h-8 bg-gray-200 rounded animate-pulse w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2"></div>
                    <div className="h-12 bg-gray-200 rounded animate-pulse w-1/3"></div>
                    <div className="space-y-2">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="h-4 bg-gray-200 rounded animate-pulse"></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

// Error State
const ErrorState = ({ error }) => (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/20 flex items-center justify-center">
        <div className="text-center">
            <div className="bg-white rounded-3xl shadow-xl p-12 max-w-md mx-auto">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Product Not Available</h3>
                <p className="text-gray-600 mb-6">{error}</p>
                <button
                    onClick={() => window.history.back()}
                    className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
                >
                    Go Back
                </button>
            </div>
        </div>
    </div>
);

// Not Found State
const NotFoundState = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/20 flex items-center justify-center">
        <div className="text-center">
            <div className="bg-white rounded-3xl shadow-xl p-12 max-w-md mx-auto">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Product Not Found</h3>
                <p className="text-gray-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
                <Link
                    to="/products"
                    className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors inline-block"
                >
                    Browse Products
                </Link>
            </div>
        </div>
    </div>
);

export default OneProduct;