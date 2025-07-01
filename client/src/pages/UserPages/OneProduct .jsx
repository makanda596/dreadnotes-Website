// src/pages/ProductPage.jsx or OneProduct.jsx

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const OneProduct = () => {
    const { id } = useParams(); // get product ID from the URL
    const [product, setProduct] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/user/oneProduct/${id}`);
                setProduct(res.data);
            } catch (err) {
                setError(err.response?.data?.message || "Failed to fetch product");
            }
        };

        fetchProduct();
    }, [id]);

    if (error) return <div className="text-red-600 p-4">{error}</div>;
    if (!product) return <div className="p-4">Loading product...</div>;

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <img
                src={product.image || "https://via.placeholder.com/400"}
                alt={product.name}
                className="w-full max-w-md mb-4 rounded"
            />
            <p className="text-xl font-semibold text-indigo-600">${product.price}</p>
            <p className="mt-4 text-gray-700">{product.desc}</p>
        </div>
    );
};

export default OneProduct;
