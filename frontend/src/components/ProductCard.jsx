import { Edit3, Trash2 } from "lucide-react";
import { useState } from "react";
import { useStore } from "../store/product";

// eslint-disable-next-line react/prop-types
const ProductCard = ({ _id, name, price, image }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { deleteProducts, updateProduct } = useStore();
  const [updateProductData, setUpdateProductData] = useState({
    name: name,
    price: price,
    image: image,
  });

  const handleDelete = async (Product_Id) => {
    const { success, message } = await deleteProducts(Product_Id);
    console.log("success", success);
    console.log("message", message);
  };

  const handleUpdate = async (Product_Id, updateProductData) => {
    const { success, message, updatedProduct } = await updateProduct(
      Product_Id,
      updateProductData
    );

    console.log("success", success);
    console.log("message", message);
    console.log("updatedProduct", updatedProduct);
  };

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 max-w-sm">
      <div>
        {/* Product Image */}
        <img className="w-full h-56 object-cover" src={image} alt="Product" />

        {/* Product Details */}
        <div className="p-4">
          {/* Product Title */}
          <h2 className="text-xl font-semibold text-white mb-2">{name}</h2>

          {/* Product Description */}
          <p className="text-gray-400 text-sm mb-4">
            This is a modern product designed to make your life easier. It
            features sleek design and high-quality materials.
          </p>

          {/* Price and Buttons */}
          <div className="flex items-center justify-between">
            {/* Price */}
            <span className="text-lg font-bold text-white">${price}</span>

            {/* Edit and Delete Buttons */}
            <div className="flex gap-2">
              {/* Button to Open Modal */}
              <button
                onClick={() => setIsOpen(true)}
                className="p-2 cursor-pointer bg-blue-500 hover:bg-blue-400 text-white rounded-md transition flex items-center justify-center"
              >
                <Edit3 size={20} />
              </button>
              {/* Button to Delete Product */}
              <button
                onClick={() => handleDelete(_id)}
                className="p-2 cursor-pointer bg-red-500 hover:bg-red-400 text-white rounded-md transition flex items-center justify-center"
              >
                <Trash2 size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6 w-full max-w-md">
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Product Details</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white cursor-pointer"
              >
                &times;
              </button>
            </div>

            {/* Modal Content */}
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
                placeholder="Enter name"
                value={updateProductData.name}
                onChange={(e) =>
                  setUpdateProductData({
                    ...updateProductData,
                    name: e.target.value,
                  })
                }
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
                placeholder="Enter price"
                value={updateProductData.price}
                onChange={(e) =>
                  setUpdateProductData({
                    ...updateProductData,
                    price: e.target.value,
                  })
                }
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
                placeholder="Enter image URL"
                value={updateProductData.image}
                onChange={(e) =>
                  setUpdateProductData({
                    ...updateProductData,
                    image: e.target.value,
                  })
                }
                className="w-full px-3 py-2 bg-gray-700 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              onClick={() => handleUpdate(_id, updateProductData)}
              className="w-full mt-5 cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-400 transition"
            >
              Edit Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
