import React, { useState, useEffect } from "react";
import { FaTshirt, FaLock, FaUser, FaShieldAlt, FaCreditCard, FaExchangeAlt, FaDatabase, FaEdit, FaEnvelope, FaPhone, FaBars, FaTimes } from "react-icons/fa";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Terms = () => {
  const [activeSection, setActiveSection] = useState("introduction");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(window.scrollTimer);
      window.scrollTimer = setTimeout(() => setIsScrolling(false), 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = [
    { id: "introduction", title: "Introduction", icon: <FaLock /> },
    { id: "personal-info", title: "Personal Information", icon: <FaUser /> },
    { id: "orders", title: "Custom Orders", icon: <FaTshirt /> },
    { id: "accounts", title: "Account Responsibilities", icon: <FaShieldAlt /> },
    { id: "payments", title: "Payment & Pricing", icon: <FaCreditCard /> },
    { id: "returns", title: "Returns & Refunds", icon: <FaExchangeAlt /> },
    { id: "data", title: "Data Protection", icon: <FaDatabase /> },
    { id: "modifications", title: "Modification of Terms", icon: <FaEdit /> },
    { id: "contact", title: "Contact Us", icon: <FaEnvelope /> }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Mobile menu handling
      if (window.innerWidth < 768) {
        setIsMobileMenuOpen(false);
      }

      // Smooth scrolling with offset for fixed header
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });

      setActiveSection(id);
    }
  };

  // Format phone number for click-to-call
  const formatPhoneNumber = (phone) => {
    return phone.replace(/\s+/g, '');
  };

  return (
    <div>
      {/* <Navbar/> */}
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Mobile Menu Button */}
        <div className="md:hidden fixed top-4 right-4 z-50">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="bg-indigo-600 text-white p-3 rounded-full shadow-lg"
          >
            {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-white z-40 p-6 overflow-y-auto">
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Terms & Conditions</h1>
              <div className="w-16 h-1 bg-indigo-600 mb-4"></div>
              <p className="text-gray-600">
                Last updated: {new Date().toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>

            <h2 className="text-lg font-semibold text-indigo-800 mb-4 flex items-center">
              <FaEdit className="mr-2" /> Table of Contents
            </h2>

            <ul className="space-y-2 mb-8">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg flex items-center transition-all ${activeSection === section.id
                        ? "bg-indigo-600 text-white shadow-md"
                        : "text-gray-700 hover:bg-indigo-100"
                      }`}
                  >
                    <span className="mr-3 text-indigo-600">{section.icon}</span>
                    {section.title}
                  </button>
                </li>
              ))}
            </ul>

            <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-100">
              <h3 className="font-semibold text-gray-800 mb-2">Key Points</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <div className="bg-green-100 text-green-800 rounded-full p-1 mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Your data is protected and never shared</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 text-green-800 rounded-full p-1 mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Secure payment options available</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 text-green-800 rounded-full p-1 mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Custom orders have special conditions</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Terms & Conditions
          </h1>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Last updated: {new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            {/* Table of Contents - Hidden on mobile when menu is open */}
            <div className={`hidden md:block md:w-1/3 bg-indigo-50 p-6 border-r border-indigo-100 ${isMobileMenuOpen ? 'hidden' : ''}`}>
              <h2 className="text-xl font-semibold text-indigo-800 mb-4 flex items-center">
                <FaEdit className="mr-2" /> Table of Contents
              </h2>
              <ul className="space-y-2">
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg flex items-center transition-all ${activeSection === section.id
                          ? "bg-indigo-600 text-white shadow-md"
                          : "text-gray-700 hover:bg-indigo-100"
                        }`}
                    >
                      <span className="mr-3 text-indigo-600">{section.icon}</span>
                      {section.title}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-4 bg-white rounded-lg border border-indigo-100">
                <h3 className="font-semibold text-gray-800 mb-2">Key Points</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <div className="bg-green-100 text-green-800 rounded-full p-1 mr-2 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Your data is protected and never shared</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 text-green-800 rounded-full p-1 mr-2 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Secure payment options available</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 text-green-800 rounded-full p-1 mr-2 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Custom orders have special conditions</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Content */}
            <div className="md:w-2/3 p-6">
              <div className="space-y-8">
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-24">
                  <div className="flex items-start mb-4">
                    <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                      <FaLock className="text-indigo-600 text-xl" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">1. Introduction</h2>
                  </div>
                  <div className="ml-14">
                    <p className="text-gray-700 mb-4">
                      Welcome to DreadNotes Merchandise. By accessing or using our website,
                      you agree to comply with and be bound by the following terms and
                      conditions. If you do not agree, please do not use our services.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                      <p className="text-blue-800">
                        These terms govern your use of our merchandise platform and services.
                        Continued use indicates your acceptance of these terms.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Personal Information */}
                <section id="personal-info" className="scroll-mt-24">
                  <div className="flex items-start mb-4">
                    <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                      <FaUser className="text-indigo-600 text-xl" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">2. Personal Information</h2>
                  </div>
                  <div className="ml-14">
                    <p className="text-gray-700 mb-4">
                      When registering or making a purchase, we collect certain personal
                      information including your:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                      <div className="flex items-center bg-indigo-50 p-3 rounded-lg">
                        <div className="bg-white p-2 rounded-full mr-3">
                          <FaUser className="text-indigo-600" />
                        </div>
                        Full Name
                      </div>
                      <div className="flex items-center bg-indigo-50 p-3 rounded-lg">
                        <div className="bg-white p-2 rounded-full mr-3">
                          <FaEnvelope className="text-indigo-600" />
                        </div>
                        Email Address
                      </div>
                      <div className="flex items-center bg-indigo-50 p-3 rounded-lg">
                        <div className="bg-white p-2 rounded-full mr-3">
                          <FaPhone className="text-indigo-600" />
                        </div>
                        Phone Number
                      </div>
                      <div className="flex items-center bg-indigo-50 p-3 rounded-lg">
                        <div className="bg-white p-2 rounded-full mr-3">
                          <FaLock className="text-indigo-600" />
                        </div>
                        Password (securely encrypted)
                      </div>
                    </div>
                    <p className="text-gray-700">
                      This information is used strictly for account creation, order
                      processing, communication, and delivery updates.
                    </p>
                  </div>
                </section>

                {/* Custom Orders */}
                <section id="orders" className="scroll-mt-24">
                  <div className="flex items-start mb-4">
                    <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                      <FaTshirt className="text-indigo-600 text-xl" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">3. Custom Merchandise Orders</h2>
                  </div>
                  <div className="ml-14">
                    <p className="text-gray-700 mb-4">
                      Our platform allows users to customize and order merchandise such as
                      t-shirts, caps, and branded items. Once an order is placed:
                    </p>
                    <ol className="space-y-3 mb-6">
                      {[
                        "You will receive a confirmation message via email/SMS",
                        "We process and prepare your item within a short turnaround",
                        "Your item will be shipped to the address you provided",
                        "You will receive a delivery notification once it arrives"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <div className="bg-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                            {index + 1}
                          </div>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ol>
                    <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                      <p className="text-yellow-800">
                        <span className="font-bold">Note:</span> Custom orders cannot be canceled once production has started.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Account Responsibilities */}
                <section id="accounts" className="scroll-mt-24">
                  <div className="flex items-start mb-4">
                    <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                      <FaShieldAlt className="text-indigo-600 text-xl" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">4. Account Responsibilities</h2>
                  </div>
                  <div className="ml-14">
                    <p className="text-gray-700 mb-4">
                      You are responsible for maintaining the confidentiality of your
                      account credentials. If you suspect unauthorized activity, contact us
                      immediately.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-red-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-red-800 mb-2 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          Prohibited Actions
                        </h3>
                        <ul className="text-sm text-red-700 space-y-1">
                          <li>Sharing account credentials</li>
                          <li>Creating multiple accounts for abuse</li>
                          <li>Impersonating others</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-green-800 mb-2 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Best Practices
                        </h3>
                        <ul className="text-sm text-green-700 space-y-1">
                          <li>Use a strong, unique password</li>
                          <li>Enable two-factor authentication</li>
                          <li>Log out after each session</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Payment & Pricing */}
                <section id="payments" className="scroll-mt-24">
                  <div className="flex items-start mb-4">
                    <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                      <FaCreditCard className="text-indigo-600 text-xl" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">5. Payment & Pricing</h2>
                  </div>
                  <div className="ml-14">
                    <p className="text-gray-700 mb-4">
                      All prices listed are in KES (or your selected currency). Payment is
                      due at checkout. We accept various payment methods including:
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                      {["M-PESA", "Debit Cards", "Credit Cards", "PayPal", "Bank Transfer", "Stripe"].map((method, index) => (
                        <div key={index} className="bg-white border border-gray-200 rounded-lg p-3 flex flex-col items-center">
                          <div className="bg-gray-100 p-3 rounded-full mb-2">
                            <FaCreditCard className="text-indigo-600" />
                          </div>
                          <span className="text-gray-700 text-sm text-center">{method}</span>
                        </div>
                      ))}
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                      <p className="text-purple-800">
                        Prices are subject to change without notice. Custom designs may incur additional fees.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Returns & Refunds */}
                <section id="returns" className="scroll-mt-24">
                  <div className="flex items-start mb-4">
                    <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                      <FaExchangeAlt className="text-indigo-600 text-xl" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">6. Returns & Refunds</h2>
                  </div>
                  <div className="ml-14">
                    <div className="bg-red-100 p-4 rounded-lg mb-4">
                      <p className="text-red-800 font-medium">
                        Because our merchandise is custom-made, we do not accept returns
                        unless the product is defective or a mistake occurred on our part.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">Refund Eligibility</h3>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                          <li>Defective products (e.g., printing errors, manufacturing defects)</li>
                          <li>Wrong item shipped</li>
                          <li>Damaged during shipping</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">Refund Process</h3>
                        <ol className="list-decimal pl-5 text-gray-700 space-y-1">
                          <li>Contact us within 48 hours of delivery</li>
                          <li>Provide photos of the issue</li>
                          <li>We'll evaluate and respond within 3 business days</li>
                          <li>If approved, refund will be processed within 5-7 business days</li>
                        </ol>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <p className="text-green-800">
                          <span className="font-bold">Note:</span> For approved returns, we'll provide a prepaid return label.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Data Protection */}
                <section id="data" className="scroll-mt-24">
                  <div className="flex items-start mb-4">
                    <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                      <FaDatabase className="text-indigo-600 text-xl" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">7. Data Protection</h2>
                  </div>
                  <div className="ml-14">
                    <p className="text-gray-700 mb-4">
                      We value your privacy and take appropriate steps to protect your
                      personal data. Your information will never be sold or shared with
                      third parties without your consent.
                    </p>
                    <div className="bg-indigo-50 p-4 rounded-lg mb-4">
                      <p className="text-indigo-800">
                        Please review our <a href="/privacy" className="text-indigo-600 underline font-medium">Privacy Policy</a> for full details on how we handle your data.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-white border border-gray-200 rounded-lg">
                        <h3 className="font-semibold text-gray-800 mb-2">Data Security Measures</h3>
                        <ul className="text-sm text-gray-700 space-y-2">
                          <li className="flex items-start">
                            <div className="bg-indigo-100 p-1 rounded mr-2 mt-0.5">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            </div>
                            SSL encryption for all data transfers
                          </li>
                          <li className="flex items-start">
                            <div className="bg-indigo-100 p-1 rounded mr-2 mt-0.5">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            </div>
                            Regular security audits and testing
                          </li>
                          <li className="flex items-start">
                            <div className="bg-indigo-100 p-1 rounded mr-2 mt-0.5">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            </div>
                            Secure storage with access controls
                          </li>
                        </ul>
                      </div>
                      <div className="p-4 bg-white border border-gray-200 rounded-lg">
                        <h3 className="font-semibold text-gray-800 mb-2">Your Rights</h3>
                        <ul className="text-sm text-gray-700 space-y-2">
                          <li className="flex items-start">
                            <div className="bg-indigo-100 p-1 rounded mr-2 mt-0.5">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                              </svg>
                            </div>
                            Right to access your personal data
                          </li>
                          <li className="flex items-start">
                            <div className="bg-indigo-100 p-1 rounded mr-2 mt-0.5">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                              </svg>
                            </div>
                            Right to request data correction
                          </li>
                          <li className="flex items-start">
                            <div className="bg-indigo-100 p-1 rounded mr-2 mt-0.5">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                              </svg>
                            </div>
                            Right to request data deletion
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Modification of Terms */}
                <section id="modifications" className="scroll-mt-24">
                  <div className="flex items-start mb-4">
                    <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                      <FaEdit className="text-indigo-600 text-xl" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">8. Modification of Terms</h2>
                  </div>
                  <div className="ml-14">
                    <p className="text-gray-700 mb-4">
                      DreadNotes reserves the right to update or modify these terms at any
                      time. Changes will be posted on this page with an updated revision
                      date.
                    </p>
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-800 mb-2">Notification of Changes</h3>
                      <p className="text-gray-700">
                        For significant changes, we will notify registered users via email at least 30 days before changes take effect.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Contact Us */}
                <section id="contact" className="scroll-mt-24">
                  <div className="flex items-start mb-4">
                    <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                      <FaEnvelope className="text-indigo-600 text-xl" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">9. Contact Us</h2>
                  </div>
                  <div className="ml-14">
                    <p className="text-gray-700 mb-6">
                      If you have any questions or concerns regarding these Terms, please
                      contact us via:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-blue-50 p-5 rounded-lg">
                        <div className="flex items-center mb-3">
                          <div className="bg-blue-100 p-3 rounded-full mr-4">
                            <FaEnvelope className="text-blue-600" />
                          </div>
                          <h3 className="font-semibold text-gray-800">Email Support</h3>
                        </div>
                        <a href="mailto:support@dreadnotes.co.ke" className="text-blue-600 hover:underline block ml-14">
                          support@dreadnotes.co.ke
                        </a>
                        <p className="text-sm text-gray-600 mt-2 ml-14">Typically respond within 24 hours</p>
                      </div>
                      <div className="bg-green-50 p-5 rounded-lg">
                        <div className="flex items-center mb-3">
                          <div className="bg-green-100 p-3 rounded-full mr-4">
                            <FaPhone className="text-green-600" />
                          </div>
                          <h3 className="font-semibold text-gray-800">Phone Support</h3>
                        </div>
                        <a
                          href={`tel:${formatPhoneNumber('+254 712 345 678')}`}
                          className="text-green-600 hover:underline block ml-14"
                        >
                          +254 712 345 678
                        </a>
                        <p className="text-sm text-gray-600 mt-2 ml-14">Mon-Fri: 9AM - 5PM EAT</p>
                      </div>
                    </div>
                    <div className="mt-6 bg-indigo-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-indigo-800 mb-2">Mailing Address</h3>
                      <p className="text-gray-700">
                        DreadNotes Merchandise<br />
                        P.O. Box 12345-00100<br />
                        Nairobi, Kenya
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} DreadNotes Merchandise. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <a href="/privacy" className="text-indigo-600 hover:underline">Privacy Policy</a>
            <a href="/terms" className="text-indigo-600 hover:underline">Terms of Service</a>
            <a href="/contact" className="text-indigo-600 hover:underline">Contact Us</a>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      {isScrolling && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 bg-indigo-600 text-white p-3 rounded-full shadow-lg z-50 animate-bounce"
          aria-label="Back to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </div>
    <Footer/>
    </div>
  );
};

export default Terms;