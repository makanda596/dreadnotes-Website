import React, { useEffect, useState } from "react";
import { userAuthStore } from "../utilis/user";
import Categories from "./Categories";

const Products = () => {
  const { getProducts, products, error } = userAuthStore();
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        await getProducts();
      } catch (error) {
        console.error("Product fetch failed:", error);
      }
    };
    fetchProducts();
  }, [getProducts]);

  return (
    // Container with relative positioning for sticky child to work
    <div className="max-w-7xl mx-auto p-6 relative">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar: sticky on md+ screens */}
        <aside
          className="
            w-full md:w-1/4 bg-white p-6 rounded shadow
            md:sticky md:top-6
            h-fit
          "
          style={{ alignSelf: "start" }} // makes sticky behave properly
        >
          <Categories />
        </aside>

        {/* Main content */}
        <main className="flex-1 flex flex-col">
          {/* Search bar */}
          <div className="mb-6 flex justify-center">
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value.toLowerCase())}
              placeholder="Search products..."
              className="w-full max-w-lg px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <h2 className="text-4xl font-extrabold mb-8 text-center text-blue-900">
            Our Products
          </h2>

          {error && (
            <p className="text-red-600 mb-6 text-center font-medium">{error}</p>
          )}

          {/* Products grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {Array.isArray(products) && products.length > 0 ? (
              products
                .filter((item) => item.name.toLowerCase().includes(search))
                .map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col"
                  >
                    <img
                      src={
                        item.image ||
                        "https://res.cloudinary.com/db5pgr14l/image/upload/v1747664350/rgjtzi3daglw51rfnxhb.jpg"
                      }
                      alt={item.name}
                      className="w-full h-48 object-cover rounded-md mb-4"
                    />

                    <h3 className="text-2xl font-semibold text-blue-900 mb-2 truncate">
                      {item.name}
                    </h3>
                    <p className="text-indigo-700 font-bold text-xl mb-3">
                      ${item.price ?? "N/A"}
                    </p>

                    <p className="text-gray-600 flex-grow">{item.desc}</p>
                    <a href={`/product/${item._id}`}>{item._id}</a>

                  </div>
                ))
            ) : (
              <p className="text-center text-gray-500 col-span-full">
                No products found.
              </p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Products;
