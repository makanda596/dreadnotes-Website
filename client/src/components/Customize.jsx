import React, { useState } from "react";
import Draggable from "react-draggable";

const Customize = () => {
    const [product, setProduct] = useState("tshirt"); // tshirt or hoodie
    const [color, setColor] = useState("#000000");
    const [customText, setCustomText] = useState("");
    const [texts, setTexts] = useState([]); // {id, text, x, y}
    const [images, setImages] = useState([]); // {id, src, x, y}
    const [selectedId, setSelectedId] = useState(null);

    // Add new text box
    const addText = () => {
        if (!customText.trim()) return;
        const id = Date.now();
        setTexts([...texts, { id, text: customText, x: 100, y: 100 }]);
        setCustomText("");
    };

    // Handle image upload via file input or drag/drop
    const handleImageUpload = (e) => {
        e.preventDefault();
        const files = e.dataTransfer ? e.dataTransfer.files : e.target.files;
        if (!files || files.length === 0) return;

        Array.from(files).forEach((file) => {
            const reader = new FileReader();
            reader.onload = (ev) => {
                const id = Date.now() + Math.random();
                setImages((imgs) => [
                    ...imgs,
                    { id, src: ev.target.result, x: 100, y: 100 },
                ]);
            };
            reader.readAsDataURL(file);
        });
    };

    // Delete selected text or image
    const deleteSelected = () => {
        if (!selectedId) return;
        setTexts((ts) => ts.filter((t) => t.id !== selectedId));
        setImages((imgs) => imgs.filter((img) => img.id !== selectedId));
        setSelectedId(null);
    };

    return (
        <div className="max-w-5xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-center">
                Customize Your Own Merchandise
            </h1>

            {/* Controls */}
            <div className="flex flex-wrap gap-6 justify-center mb-8">
                {/* Product selector */}
                <div>
                    <label className="block mb-1 font-semibold">Product</label>
                    <select
                        value={product}
                        onChange={(e) => setProduct(e.target.value)}
                        className="border border-gray-300 rounded px-3 py-1"
                    >
                        <option value="tshirt">T-Shirt</option>
                        <option value="hoodie">Hoodie</option>
                    </select>
                </div>

                {/* Color picker */}
                <div>
                    <label className="block mb-1 font-semibold">Color</label>
                    <input
                        type="color"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        className="w-12 h-12 rounded border border-gray-300"
                    />
                </div>

                {/* Text input */}
                <div>
                    <label className="block mb-1 font-semibold">Add Text</label>
                    <input
                        type="text"
                        value={customText}
                        onChange={(e) => setCustomText(e.target.value)}
                        placeholder="Your text"
                        className="border border-gray-300 rounded px-3 py-1 mr-2"
                    />
                    <button
                        onClick={addText}
                        className="bg-blue-600 text-white px-3 py-1 rounded"
                    >
                        Add
                    </button>
                </div>

                {/* Image upload */}
                <div>
                    <label className="block mb-1 font-semibold">Upload Image</label>
                    <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleImageUpload}
                        className="border border-gray-300 rounded px-3 py-1"
                    />
                    <small className="block text-xs text-gray-500 mt-1">
                        Or drag & drop image files below
                    </small>
                </div>

                {/* Delete selected */}
                <div className="flex items-end">
                    <button
                        onClick={deleteSelected}
                        disabled={!selectedId}
                        className={`px-4 py-2 rounded ${selectedId
                                ? "bg-red-600 text-white"
                                : "bg-gray-300 text-gray-500 cursor-not-allowed"
                            }`}
                    >
                        Delete Selected
                    </button>
                </div>
            </div>

            {/* Drag & drop zone */}
            <div
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleImageUpload}
                className="border border-dashed border-gray-400 p-4 rounded mb-6 text-center text-gray-600 cursor-pointer"
            >
                Drag & drop images here to add them
            </div>

            {/* Preview area */}
            <div
                className="relative mx-auto"
                style={{
                    width: 350,
                    height: 450,
                    backgroundColor: color,
                    borderRadius: product === "hoodie" ? 40 : 15,
                    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                    userSelect: "none",
                    overflow: "hidden",
                }}
            >
                {/* Images */}
                {images.map(({ id, src, x, y }) => (
                    <Draggable
                        key={id}
                        bounds="parent"
                        position={{ x, y }}
                        onStart={() => setSelectedId(id)}
                        onDrag={(e, data) => {
                            setImages((imgs) =>
                                imgs.map((img) =>
                                    img.id === id ? { ...img, x: data.x, y: data.y } : img
                                )
                            );
                        }}
                        onStop={(e, data) => {
                            setImages((imgs) =>
                                imgs.map((img) =>
                                    img.id === id ? { ...img, x: data.x, y: data.y } : img
                                )
                            );
                        }}
                    >
                        <img
                            src={src}
                            alt="Custom"
                            className={`absolute cursor-move max-w-[150px] max-h-[150px] ${selectedId === id ? "outline outline-4 outline-blue-500" : ""
                                }`}
                            draggable={false}
                            onClick={() => setSelectedId(id)}
                        />
                    </Draggable>
                ))}

                {/* Texts */}
                {texts.map(({ id, text, x, y }) => (
                    <Draggable
                        key={id}
                        bounds="parent"
                        position={{ x, y }}
                        onStart={() => setSelectedId(id)}
                        onDrag={(e, data) => {
                            setTexts((ts) =>
                                ts.map((t) =>
                                    t.id === id ? { ...t, x: data.x, y: data.y } : t
                                )
                            );
                        }}
                        onStop={(e, data) => {
                            setTexts((ts) =>
                                ts.map((t) =>
                                    t.id === id ? { ...t, x: data.x, y: data.y } : t
                                )
                            );
                        }}
                    >
                        <div
                            className={`absolute cursor-move select-none px-2 py-1 rounded bg-white bg-opacity-70 text-black font-bold whitespace-pre-wrap max-w-xs break-words ${selectedId === id ? "outline outline-4 outline-blue-500" : ""
                                }`}
                            onClick={() => setSelectedId(id)}
                            style={{ userSelect: "none" }}
                        >
                            {text}
                        </div>
                    </Draggable>
                ))}

                {/* Placeholder if empty */}
                {texts.length === 0 && images.length === 0 && (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-400 select-none pointer-events-none">
                        Add text or images to customize
                    </div>
                )}
            </div>
        </div>
    );
};

export default Customize;
