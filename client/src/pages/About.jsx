import React, { useState, useEffect, useRef } from "react";
import {motion, useInView } from "framer-motion";
import { Truck,Heart, Palette, CheckCircle, ShoppingBag, User, Smile, ArrowRight, ChevronRight, ChevronLeft } from "lucide-react";
import { FaTshirt, FaRegSmile } from 'react-icons/fa';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const About = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Stats with target values for counters
  const [stats, setStats] = useState([
    { value: 0, target: 48, label: "Production Time", suffix: "hrs", isNumber: true },
    { value: 0, target: 98, label: "Happy Customers", suffix: "%", isNumber: true },
    { value: 0, target: 5000, label: "Items Created", suffix: "+", isNumber: true },
    { value: 0, target: 100, label: "Delivery Coverage", suffix: "%", isNumber: true }
  ]);

  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });

  // Animate counters when stats section comes into view
  useEffect(() => {
    if (isStatsInView) {
      const duration = 2000; // Animation duration in ms
      const startTime = Date.now();

      const animateCounters = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);

        setStats(prevStats =>
          prevStats.map(stat => {
            if (!stat.isNumber) return stat;

            const newValue = Math.floor(stat.target * progress);
            return { ...stat, value: newValue };
          })
        );

        if (progress < 1) {
          requestAnimationFrame(animateCounters);
        }
      };

      requestAnimationFrame(animateCounters);
    }
  }, [isStatsInView]);

  const processSteps = [
    {
      title: "Design Your Style",
      description: "Create your custom merchandise using our design tools or browse our DreadNotes collection",
      icon: <Palette className="w-8 h-8" />
    },
    {
      title: "Place Your Order",
      description: "Select your items, choose sizes and quantities, and complete your purchase",
      icon: <ShoppingBag className="w-8 h-8" />
    },
    {
      title: "Production & Quality Check",
      description: "We create your merchandise with premium materials and perform quality checks",
      icon: <FaTshirt className="w-8 h-8" />
    },
    {
      title: "Fast Delivery",
      description: "We ship your order with real-time tracking and delivery notifications",
      icon: <Truck className="w-8 h-8" />
    },
    {
      title: "Enjoy & Share",
      description: "Wear your unique merch with pride and share your style with others",
      icon: <Smile className="w-8 h-8" />
    }
  ];

  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Graphic Designer",
      content: "The customization tools are incredible! I created unique merch for my design studio and the quality exceeded my expectations.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Sarah Williams",
      role: "DreadNotes Fan",
      content: "The official DreadNotes collection is my go-to for comfortable and stylish streetwear. The hoodies are perfect for Nairobi's weather!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Michael Ochieng",
      role: "Small Business Owner",
      content: "Ordered custom merch for my cafe staff. The process was smooth and delivery was faster than promised. Will definitely order again!",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    }
  ];

  return (
    <div>
      <Navbar/>
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
         {/* Hero Section */}
        <div className="relative overflow-hidden min-h-screen flex items-center">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-blue-100 z-0"></div>

          {/* Decorative elements */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-200 rounded-full filter blur-[100px] opacity-40"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-200 rounded-full filter blur-[100px] opacity-40"></div>

          {/* Floating product cards */}
          <div className="absolute top-1/4 left-5 w-40 h-40 md:w-56 md:h-56">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="w-full h-full rounded-2xl overflow-hidden shadow-xl border-8 border-white"
            >
              <div className="w-full h-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <FaTshirt className="text-white text-6xl" />
              </div>
            </motion.div>
          </div>

          <div className="absolute top-1/3 right-5 w-32 h-32 md:w-48 md:h-48">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="w-full h-full rounded-2xl overflow-hidden shadow-xl border-8 border-white"
            >
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center">
                <Truck className="text-white text-4xl" />
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-1/4 left-1/4 w-36 h-36 md:w-44 md:h-44">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="w-full h-full rounded-2xl overflow-hidden shadow-xl border-8 border-white"
            >
              <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center">
                <ShoppingBag className="text-white text-5xl" />
              </div>
            </motion.div>
          </div>

          {/* Main content */}
          <div className="max-w-7xl mx-auto px-4 py-20 md:py-28 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center lg:text-left"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="inline-block bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-sm font-semibold px-4 py-2 rounded-full mb-4"
                >
                  New Collection Now Available!
                </motion.div>

                <motion.h1
                  className="text-4xl md:text-6xl font-bold mb-6 text-gray-900"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
                    Express Your Style
                  </span> <br />
                  With DreadNotes Merchandise
                </motion.h1>

                <motion.p
                  className="text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  Create custom merchandise that tells your story or shop our exclusive collections.
                  Premium quality, fast delivery, and endless creativity.
                </motion.p>

                <motion.div
                  className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    Start Creating
                  </button>
                  <button className="bg-white text-indigo-600 border-2 border-indigo-600 px-8 py-4 rounded-full font-semibold text-lg shadow hover:shadow-md transition-all duration-300 hover:bg-indigo-50">
                    Shop Collection
                  </button>
                </motion.div>

                {/* Stats */}
                <motion.div
                  className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                    <div className="text-2xl font-bold text-indigo-700">24-48hrs</div>
                    <div className="text-gray-600 text-sm">Production Time</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                    <div className="text-2xl font-bold text-indigo-700">98%</div>
                    <div className="text-gray-600 text-sm">Happy Customers</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm max-md:col-span-2 max-md:mx-auto">
                    <div className="text-2xl font-bold text-indigo-700">5,000+</div>
                    <div className="text-gray-600 text-sm">Items Created</div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Product showcase */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="relative"
              >
                <div className="relative grid grid-cols-2 gap-6 max-w-xl mx-auto">
                  {/* Main product card */}
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="col-span-2 aspect-square rounded-3xl overflow-hidden shadow-2xl"
                  >
                    <div className="w-full h-full bg-gradient-to-br from-blue-500 to-indigo-600 flex flex-col items-center justify-center p-6 relative">
                      <div className="text-white text-center mb-6">
                        <div className="text-2xl font-bold mb-2">Premium Hoodie</div>
                        <div className="text-blue-100">Customize your own design</div>
                      </div>
                      <FaTshirt className="text-white text-8xl mb-4" />
                      <div className="absolute bottom-6 left-6 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white font-medium">
                        $49.99
                      </div>
                      <div className="absolute top-6 right-6 bg-white text-indigo-600 rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                        <Heart className="h-6 w-6" />
                      </div>
                    </div>
                  </motion.div>

                  {/* Secondary product cards */}
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                    className="aspect-square rounded-2xl overflow-hidden shadow-xl"
                  >
                    <div className="w-full h-full bg-gradient-to-br from-indigo-400 to-blue-500 flex flex-col items-center justify-center p-4">
                      <div className="text-white text-center mb-4">
                        <div className="font-bold">Designer T-Shirts</div>
                      </div>
                      <FaTshirt className="text-white text-5xl" />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.1, duration: 0.8 }}
                    className="aspect-square rounded-2xl overflow-hidden shadow-xl"
                  >
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-indigo-500 flex flex-col items-center justify-center p-4">
                      <div className="text-white text-center mb-4">
                        <div className="font-bold">Custom Caps</div>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                  </motion.div>
                </div>

                {/* Floating discount badge */}
                <motion.div
                  initial={{ scale: 0, rotate: -20 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 1.3, type: "spring", stiffness: 300 }}
                  className="absolute -top-6 -right-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold px-6 py-3 rounded-full shadow-lg z-10"
                >
                  <div className="text-xl">UP TO</div>
                  <div className="text-3xl">30% OFF</div>
                  <div className="text-xs">New Collections</div>
                </motion.div>
              </motion.div>
            </div>

            {/* Encouragement text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="max-w-4xl mx-auto mt-20 text-center"
            >
              <div className="inline-block bg-white rounded-full px-6 py-3 shadow-lg mb-6">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="font-semibold text-gray-700">1,200+ orders today</span>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Shop With DreadNotes?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-white p-6 rounded-2xl shadow-md">
                  <div className="bg-indigo-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Quality</h3>
                  <p className="text-gray-600">
                    Crafted with high-quality materials that last, ensuring your merch looks great wash after wash.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-md">
                  <div className="bg-indigo-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Delivery</h3>
                  <p className="text-gray-600">
                    Get your custom merch in 3-5 days with our efficient production and delivery network.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-md">
                  <div className="bg-indigo-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Easy Returns</h3>
                  <p className="text-gray-600">
                    30-day hassle-free returns if you're not completely satisfied with your purchase.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      {/* Process Section */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our seamless process makes creating and receiving your custom merchandise effortless
            </p>
          </motion.div>

          <div className="relative">
            {/* Progress bar */}
            <div className="absolute top-12 left-0 right-0 h-1 bg-gray-200 hidden md:block">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-indigo-600"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  onHoverStart={() => setCurrentStep(index)}
                >
                  <div className={`flex justify-center mb-4 ${currentStep === index ? "scale-110" : ""} transition-transform duration-300`}>
                    <div className={`p-4 rounded-full ${currentStep === index ? "bg-gradient-to-br from-blue-500 to-indigo-600 text-white" : "bg-blue-100 text-blue-600"}`}>
                      {step.icon}
                    </div>
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 ${currentStep === index ? "text-indigo-700" : "text-gray-800"}`}>
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Process Details */}
          <motion.div
            className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {processSteps[currentStep].title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {processSteps[currentStep].description}
                </p>
                <ul className="space-y-3 mb-6">
                  {[1, 2, 3].map((item) => (
                    <li key={item} className="flex items-start">
                      <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">
                        Additional detail about this step in the process goes here
                      </span>
                    </li>
                  ))}
                </ul>
                <button className="flex items-center text-indigo-600 font-semibold group">
                  Learn more about this step
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

              <div className="flex justify-center">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 md:h-80 flex items-center justify-center">
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold text-xl p-4 rounded-lg mb-4">
                      Step {currentStep + 1}
                    </div>
                    <p className="text-gray-500">Visual representation of this step</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {processSteps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStep(index)}
                  className={`w-3 h-3 rounded-full ${currentStep === index ? "bg-indigo-600" : "bg-gray-300"}`}
                  aria-label={`Go to step ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section with Animated Counters */}
      <div
        ref={statsRef}
        className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="text-4xl font-bold mb-2">
                  {stat.isNumber ? stat.value : stat.target}
                  {stat.suffix}
                </div>
                <div className="text-blue-100">{stat.label}</div>

                {/* Animated progress bar */}
                <motion.div
                  className="mt-4 h-1 bg-blue-400 rounded-full overflow-hidden"
                  initial={{ width: 0 }}
                  animate={{ width: isStatsInView ? "100%" : 0 }}
                  transition={{ duration: 2, delay: 0.2 }}
                >
                  <motion.div
                    className="h-full bg-white"
                    initial={{ width: 0 }}
                    animate={{ width: isStatsInView ? "100%" : 0 }}
                    transition={{ duration: 2, delay: 0.2 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of satisfied customers who've created their perfect merchandise
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto relative">
            <div className="overflow-hidden">
              <motion.div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${activeTestimonial * 100}%` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-gray-50 rounded-2xl p-8 shadow-md">
                      <div className="flex items-start mb-6">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover mr-6"
                        />
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                          <p className="text-indigo-600">{testimonial.role}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 text-lg italic">
                        "{testimonial.content}"
                      </p>
                      <div className="flex mt-6">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={() => setActiveTestimonial(prev => prev === 0 ? testimonials.length - 1 : prev - 1)}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
              >
                <ChevronLeft className="h-5 w-5 text-gray-700" />
              </button>
              <button
                onClick={() => setActiveTestimonial(prev => (prev + 1) % testimonials.length)}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
              >
                <ChevronRight className="h-5 w-5 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      
    </div>
<Footer/>
    </div>
  );
};

export default About;