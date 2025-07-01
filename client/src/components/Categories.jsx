import React, { useRef } from "react";
import {
    FiShoppingBag,
    FiCpu,
    FiTruck,
    FiGift,
    FiTag,
    FiStar,
    FiWatch,
    FiImage,
    FiUser,
    FiGift as WristbandIcon,
} from "react-icons/fi";
import { FaTshirt } from "react-icons/fa";

const categories = [
    { name: "Tshirts", icon: FaTshirt },
    { name: "Hoodies", icon: FiShoppingBag },
    { name: "Caps", icon: FiCpu },
    { name: "Two Pieces (Sweatshirts and Sweatpants)", icon: FiTruck },
    { name: "Sweatshirts", icon: FiGift },
    { name: "Sweatpants", icon: FiTag },
    { name: "Snoodies", icon: FiStar },
    { name: "Bandanas", icon: FiWatch },
    { name: "Car Stickers", icon: FiImage },
    { name: "Accessories", icon: FiUser },
    { name: "Wristbands", icon: WristbandIcon },
];

const Categories = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (!scrollRef.current) return;
        const scrollAmount = 150; // adjust scroll amount as needed
        if (direction === "left") {
            scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        } else {
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <div
            className="
            fixed top-0 left-0 right-0 
            md:static md:top-auto md:left-auto md:right-auto
            bg-white z-30 p-4 md:p-0
            md:max-w-xs md:h-screen md:overflow-y-auto md:sticky md:top-6
            shadow md:shadow-none
          "
            style={{ maxHeight: "100vh" }}
        >
            <h2 className="text-3xl font-extrabold mb-6 text-blue-800">Categories</h2>

            {/* Scroll container: horizontal on small, vertical on md+ */}
            <ul
                ref={scrollRef}
                className="
                    flex overflow-x-auto no-scrollbar
                    md:flex-col md:overflow-visible md:space-y-3
                    space-x-4 md:space-x-0
                    scrollbar-hide
                "
            >
                {categories.map(({ name, icon: Icon }, idx) => (
                    <li
                        key={idx}
                        className="
                            flex flex-shrink-0 items-center space-x-3 cursor-pointer p-3 rounded-lg hover:bg-blue-100 transition
                            min-w-[140px]
                            md:min-w-auto
                        "
                        role="button"
                        tabIndex={0}
                        onKeyPress={(e) => {
                            if (e.key === "Enter") {
                                alert(`You clicked on ${name}`);
                            }
                        }}
                        onClick={() => alert(`You clicked on ${name}`)}
                    >
                        <Icon className="text-blue-600 w-6 h-6" />
                        <span className="text-gray-800 font-semibold whitespace-nowrap">{name}</span>
                    </li>
                ))}
            </ul>

            {/* Arrows below on small screens */}
            <div className="mt-4 flex justify-center space-x-6 md:hidden">
                <button
                    onClick={() => scroll("left")}
                    className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-shadow shadow"
                    aria-label="Scroll categories left"
                >
                    &#8592;
                </button>
                <button
                    onClick={() => scroll("right")}
                    className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-shadow shadow"
                    aria-label="Scroll categories right"
                >
                    &#8594;
                </button>
            </div>
        </div>
    );
};

export default Categories;
