import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaTshirt, FaShippingFast, FaHeadset, FaCreditCard } from "react-icons/fa";
import { MdPayment, MdLocalShipping, MdSecurity } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300">
      <div className="bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-3 rounded-full">
                <FaShippingFast className="text-white text-xl" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Free Shipping</h4>
                <p className="text-xs">On orders over $50</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="bg-green-600 p-3 rounded-full">
                <MdPayment className="text-white text-xl" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Secure Payments</h4>
                <p className="text-xs">256-bit encryption</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="bg-purple-600 p-3 rounded-full">
                <FaHeadset className="text-white text-xl" />
              </div>
              <div>
                <h4 className="font-semibold text-white">24/7 Support</h4>
                <p className="text-xs">Dedicated customer service</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="bg-red-600 p-3 rounded-full">
                <MdSecurity className="text-white text-xl" />
              </div>
              <div>
                <h4 className="font-semibold text-white">30-Day Returns</h4>
                <p className="text-xs">No questions asked</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2">
          <div className="flex items-center mb-4">
            <div className="bg-blue-600 p-2 rounded-lg mr-3">
              <FaTshirt className="text-white text-2xl" />
            </div>
            <h2 className="text-xl font-bold text-white">Dreadnotes</h2>
          </div>
          <p className="text-sm leading-relaxed mb-4">
            Creating custom merchandise that tells your story. Premium quality products with fast delivery and exceptional customer service.
          </p>

          <div className="mb-4">
            <h3 className="text-lg font-semibold text-white mb-3">Payment Methods</h3>
            <div className="flex flex-wrap gap-2">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-gray-700 p-2 rounded-lg flex items-center justify-center">
                  <FaCreditCard className="text-gray-300 text-xl" />
                </div>
              ))}
            </div>
          </div>

          {/* <div>
            <h3 className="text-lg font-semibold text-white mb-3">Download Our App</h3>
            <div className="flex gap-3">
              <button className="bg-gray-800 hover:bg-gray-700 transition p-3 rounded-lg flex items-center">
                <div className="mr-2">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.56-1.701z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-400">Download on the</p>
                  <p className="font-semibold text-white">App Store</p>
                </div>
              </button>

              <button className="bg-gray-800 hover:bg-gray-700 transition p-3 rounded-lg flex items-center">
                <div className="mr-2">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M1.5 3.25l9.955 9.955L1.5 23.16V3.25zm13.36 9.62l3.46 2.08L24 7.45v15.3l-5.68-9.88-3.46 2.08zM5.16 6.4l9.78 9.78 2.35-1.42-9.78-9.78-2.35 1.42z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-400">GET IT ON</p>
                  <p className="font-semibold text-white">Google Play</p>
                </div>
              </button>
            </div>
          </div> */}
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-2 pb-2 border-b border-gray-700">Shop Categories</h3>
          <ul className="space-y-3">
            {[
              "Custom T-Shirts",
              "Hoodies & Sweatshirts",
              "Hats & Caps",
              "Accessories",
              "Home & Living",
              "Drinkware",
              "Phone Cases",
              "Limited Editions"
            ].map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:text-white transition flex items-center">
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-2"></span>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-2 pb-2 border-b border-gray-700">Customer Service</h3>
          <ul className="space-y-3">
            {[
              "Contact Us",
              "FAQs",
              "Shipping Policy",
              "Returns & Exchanges",
              "Size Guide",
              "Order Tracking",
              "Store Locator",
              "Care Instructions"
            ].map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:text-white transition flex items-center">
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-2"></span>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Join Our Newsletter</h3>
          <p className="text-sm mb-2">
            Subscribe to get special offers, free giveaways, and new product alerts
          </p>

          <form className="mb-6">
            <div className="relative">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </form>

          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              {[
                { icon: <FaFacebookF />, color: "bg-blue-600", label: "Facebook" },
                { icon: <FaTwitter />, color: "bg-blue-400", label: "Twitter" },
                { icon: <FaInstagram />, color: "bg-gradient-to-r from-purple-500 to-pink-500", label: "Instagram" },
                { icon: <FaLinkedinIn />, color: "bg-blue-700", label: "LinkedIn" }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  aria-label={social.label}
                  className={`${social.color} w-10 h-10 rounded-full flex items-center justify-center text-white hover:opacity-90 transition`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 py-2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Dreadnotes Company. All rights reserved.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a href="/terms" className="text-gray-400 hover:text-white transition text-sm">
                Terms & Conditions
              </a>
              <a href="/privacy" className="text-gray-400 hover:text-white transition text-sm">
                Privacy Policy
              </a>
            
              <a href="/sitemap" className="text-gray-400 hover:text-white transition text-sm">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;