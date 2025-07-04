import { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ChevronDown,
  ChevronUp
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const faqItems = [
    {
      question: "How long does shipping take to Nairobi?",
      answer: "We typically process orders within 1-2 business days. Shipping within Nairobi County takes 1-2 business days, while other parts of Kenya take 3-5 business days."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy on all merchandise. Items must be unused with original tags. Please contact our customer service for a return authorization before sending items back."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship worldwide! International orders may be subject to customs fees and import taxes which are the responsibility of the customer. Shipping times vary by destination."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order ships, you'll receive a confirmation email with a tracking number. You can track your package using our Order Status page or directly with the carrier."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept M-Pesa, credit/debit cards (Visa, Mastercard), PayPal, and bank transfers. All transactions are secure and encrypted."
    },
    {
      question: "Do you have a physical store in Nairobi?",
      answer: "Yes! Our flagship store is located at The Hub in Karen. You can visit us Monday to Saturday from 9AM to 6PM to see our merchandise in person."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
            Contact DreadNotes Merchandise
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to help with any questions about our merchandise. Our Nairobi-based team is ready to assist you!
          </p>
          <div className="mt-6 flex justify-center">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-1 w-24 rounded-full"></div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="p-8 sm:p-10">
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a message</h2>
                <p className="text-gray-600">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>
              </div>

              {submitSuccess ? (
                <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-lg mb-6 flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">Thank you for your message!</p>
                    <p className="mt-1">We'll get back to you soon.</p>
                  </div>
                </div>
              ) : null}

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                    placeholder="How can we help?"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                    placeholder="Tell us about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition flex items-center justify-center ${isSubmitting
                      ? "bg-indigo-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 shadow-lg"
                    }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 sm:p-10 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-blue-500 opacity-20"></div>
              <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-indigo-500 opacity-20"></div>

              <div className="relative z-10">
                <div className="mb-10">
                  <h2 className="text-2xl font-bold mb-2">Our Nairobi Headquarters</h2>
                  <p className="text-blue-100">
                    Visit us or reach out - we'd love to connect with you!
                  </p>
                </div>

                <div className="space-y-6 mb-12">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-blue-500 p-3 rounded-lg">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">Our Location</h3>
                      <p className="mt-1 text-blue-100">
                        The Hub, Karen<br />
                        Langata Road, Nairobi<br />
                        Kenya
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-blue-500 p-3 rounded-lg">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">Phone Number</h3>
                      <p className="mt-1 text-blue-100">
                        +254 700 123 456
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-blue-500 p-3 rounded-lg">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">Email Address</h3>
                      <p className="mt-1 text-blue-100">
                        support@dreadnotes.co.ke
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-blue-500 p-3 rounded-lg">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">Business Hours</h3>
                      <p className="mt-1 text-blue-100">
                        Monday - Friday: 9AM - 6PM<br />
                        Saturday: 10AM - 4PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="bg-blue-500 hover:bg-blue-400 p-3 rounded-full transition transform hover:-translate-y-1"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="bg-blue-500 hover:bg-blue-400 p-3 rounded-full transition transform hover:-translate-y-1"
                      aria-label="Twitter"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="bg-blue-500 hover:bg-blue-400 p-3 rounded-full transition transform hover:-translate-y-1"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="bg-blue-500 hover:bg-blue-400 p-3 rounded-full transition transform hover:-translate-y-1"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="bg-gray-50 p-8 border-t">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <MapPin className="h-6 w-6 text-indigo-600 mr-2" />
              Our Location in Nairobi
            </h3>
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63820.84286390306!2d36.74026794999999!3d-1.303046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi!5e0!3m2!1sen!2ske!4v1714833432587!5m2!1sen!2ske"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="DreadNotes Nairobi Location"
              ></iframe>
            </div>
            <p className="text-center text-gray-500 mt-4">
              The Hub, Karen, Langata Road, Nairobi, Kenya
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Find answers to common questions about our merchandise, shipping, and services in Kenya.
            </p>
            <div className="mt-4 flex justify-center">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-1 w-16 rounded-full"></div>
            </div>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
                >
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                    <span className="bg-blue-100 text-blue-600 rounded-lg p-2 mr-3">
                      <MessageSquare className="h-5 w-5" />
                    </span>
                    {item.question}
                  </h3>
                  <span className="text-blue-600 ml-2">
                    {activeQuestion === index ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                  </span>
                </button>

                <div
                  className={`px-5 pb-5 transition-all duration-300 ease-in-out ${activeQuestion === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                    }`}
                >
                  <div className="pl-12 pr-4 text-gray-600 border-t border-gray-100 pt-4">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-xl overflow-hidden">
          <div className="px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Still have questions?
              </h2>
              <p className="mt-4 text-blue-100 max-w-xl mx-auto">
                Our customer support team is available to help you with any inquiries about our merchandise.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="tel:+254700123456"
                  className="flex items-center justify-center px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg shadow hover:bg-gray-100 transition"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Us Now
                </a>
                <a
                  href="mailto:support@dreadnotes.co.ke"
                  className="flex items-center justify-center px-6 py-3 bg-indigo-800 text-white font-medium rounded-lg hover:bg-indigo-900 transition"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Email Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}