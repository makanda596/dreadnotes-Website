import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ShoppingBag, Truck, Shield, Star } from "lucide-react";

export default function ProfessionalHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1758188382/Capture_nrep4l.png",
      title: "Elevate Your Style",
      subtitle: "Premium caps, t-shirts & hoodies that speak quality",
      badge: "New Collection",
      cta: "Shop Now",
      features: ["100% Cotton", "Kenyan Made", "Free Returns"]
    },
    {
      image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1758184981/IMG-20250918-WA0042_nhxla6.jpg",
      title: "Fast Nationwide Delivery",
      subtitle: "Get your merchandise in 2-3 days across Kenya",
      badge: "Free Shipping",
      cta: "Browse Products",
      features: ["47 Counties", "Tracked Delivery", "Secure Packaging"]
    },
    {
      image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1758188382/Capture_nrep4l.png",
      title: "Limited Edition Designs",
      subtitle: "Exclusive prints you won't find anywhere else",
      badge: "Limited Stock",
      cta: "View Designs",
      features: ["Exclusive Art", "Limited Runs", "Collector Items"]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative w-full md:w-11/12 max-w-6xl h-[75vh] mx-auto  overflow-hidden md:rounded-2xl shadow-2xl bg-gray-900">
      {/* Slides Container */}
      <div
        className="flex transition-transform duration-700 ease-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
            {/* Background Image with Gradient Overlay */}
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url('${slide.image}')` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-2xl ml-12 text-white space-y-6">
                {/* Badge */}
                <span className="inline-block bg-gradient-to-r from-green-500 to-yellow-500 px-4 py-2 rounded-full text-sm font-semibold">
                  {slide.badge}
                </span>

                {/* Main Title */}
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  {slide.title}
                </h1>

                {/* Subtitle */}
                <p className="text-xl lg:text-2xl opacity-90 max-w-md">
                  {slide.subtitle}
                </p>

                {/* Features List */}
                <div className="flex flex-wrap gap-3">
                  {slide.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                      <Star className="w-3 h-3 text-yellow-400 mr-2" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center space-x-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl mt-4">
                  <ShoppingBag className="w-5 h-5" />
                  <span>{slide.cta}</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Trust Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md border-t border-white/20">
        <div className="max-w-4xl mx-auto px-8 py-4">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center space-x-2 text-white">
              <Truck className="w-5 h-5 text-green-400" />
              <span className="text-sm font-medium">Free Delivery in Nairobi</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-white">
              <Shield className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-medium">Quality Guarantee</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-white">
              <Star className="w-5 h-5 text-green-400" />
              <span className="text-sm font-medium">4.8/5 Rating</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-lg rounded-full p-3 transition-all duration-300 hover:scale-110 group"
      >
        <ChevronLeft className="w-6 h-6 text-white group-hover:text-yellow-400" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-lg rounded-full p-3 transition-all duration-300 hover:scale-110 group"
      >
        <ChevronRight className="w-6 h-6 text-white group-hover:text-yellow-400" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                ? 'bg-yellow-400 scale-125'
                : 'bg-white/50 hover:bg-white/80'
              }`}
          />
        ))}
      </div>

      {/* Quick Shop Categories */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
          <h3 className="text-white font-semibold mb-4 text-center">Shop Categories</h3>
          <div className="space-y-3">
            {['Caps', 'T-Shirts', 'Hoodies', 'Bottles', 'Socks'].map((category) => (
              <button
                key={category}
                className="block w-full text-left text-white/80 hover:text-yellow-400 hover:bg-white/5 px-3 py-2 rounded-lg transition-all duration-200"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}