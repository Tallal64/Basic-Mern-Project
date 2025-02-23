import { useState } from "react";
import { useStore } from "../store/product";

const CreateProduct = () => {
  const { createProduct } = useStore();
  const [newProductData, setNewProductData] = useState({
    name: "",
    price: "",
    image: "",
  });

  async function handleAddClick(e) {
    e.preventDefault();
    const { success, message, newProduct } = await createProduct(
      newProductData
    );
    console.log("success", success);
    console.log("message", message);
    console.log("newProduct", newProduct);

    setNewProductData({
      name: "",
      price: "",
      image: "",
    });
  }

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-white text-center text-2xl font-semibold mb-4">
          Add Product
        </h2>
        <form onSubmit={handleAddClick}>
          {/* Name Input */}
          <div className="mb-4">
            <label
              className="block text-gray-300 text-sm font-medium mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={newProductData.name}
              onChange={(e) =>
                setNewProductData({ ...newProductData, name: e.target.value })
              }
              placeholder="Enter name"
              className="w-full px-3 py-2 bg-gray-700 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Price Input */}
          <div className="mb-4">
            <label
              className="block text-gray-300 text-sm font-medium mb-2"
              htmlFor="price"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              value={newProductData.price}
              onChange={(e) =>
                setNewProductData({ ...newProductData, price: e.target.value })
              }
              placeholder="Enter price"
              className="w-full appearance-none px-3 py-2 bg-gray-700 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Image Input */}
          <div className="mb-4">
            <label
              className="block text-gray-300 text-sm font-medium mb-2"
              htmlFor="image"
            >
              Image URL
            </label>
            <input
              type="text"
              id="image"
              value={newProductData.image}
              onChange={(e) =>
                setNewProductData({ ...newProductData, image: e.target.value })
              }
              placeholder="Enter image URL"
              className="w-full px-3 py-2 bg-gray-700 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
