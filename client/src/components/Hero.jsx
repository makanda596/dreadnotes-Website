import React, { useRef } from "react";

const images = [
  {
    src: "https://res.cloudinary.com/db5pgr14l/image/upload/v1747663591/djywuggrs4dab1guaylb.jpg",
    title: "Buy Any Item",
    description: "Explore various categories and shop easily from trusted sellers.",
  },
  {
    src: "https://res.cloudinary.com/db5pgr14l/image/upload/v1747666652/kg91sebe32uimfcaf0zt.jpg",
    title: "Customize Your Brand",
    description: "Design and launch your own merchandise or brand.",
  },
  {
    src: "https://res.cloudinary.com/db5pgr14l/image/upload/v1747663591/djywuggrs4dab1guaylb.jpg",
    title: "Flash Sales",
    description: "Enjoy limited-time deals and discounts from top sellers.",
  },
  {
    src: "https://res.cloudinary.com/db5pgr14l/image/upload/v1747666652/kg91sebe32uimfcaf0zt.jpg",
    title: "24/7 Support",
    description: "Get assistance whenever you need it from our dedicated team.",
  },
];

const Hero = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = container.offsetWidth;
    if (direction === "next") {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white py-2 px-4 md:px-10 flex flex-col items-center w-full relative">
      {/* Hide scrollbar styles */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <h2 className="text-2xl font-extrabold text-center text-blue-800 mb-2">
        Discover Our Core Offerings
      </h2>

      <div className="relative w-full overflow-hidden">
        {/* Buttons (Only show on small screens) */}
        <button
          onClick={() => scroll("back")}
          className="absolute z-10 left-2 top-1/2 transform -translate-y-1/2 bg-blue-700 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-blue-800 block sm:hidden"
        >
          ‹
        </button>
        <button
          onClick={() => scroll("next")}
          className="absolute z-10 right-2 top-1/2 transform -translate-y-1/2 bg-blue-700 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-blue-800 block sm:hidden"
        >
          ›
        </button>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-2 no-scrollbar"
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="relative snap-center min-w-full sm:min-w-[280px] sm:max-w-sm overflow-hidden shadow-lg flex-shrink-0"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-60 object-cover"
              />
              <div className="absolute inset-0  bg-opacity-40 flex flex-col justify-center items-center px-4 text-center text-white">
                <h3 className="text-xl font-semibold">{img.title}</h3>
                <p className="text-sm">{img.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
