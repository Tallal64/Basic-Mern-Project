import { create } from "zustand";

export const useStore = create((set) => ({
  Products: [],

  createProduct: async (newProduct) => {
    const response = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });

    const responseData = await response.json();
    // set({ Products: data });
    // set((state) => ({ Products: [...state.Products, data.newProduct] }));

    return {
      success: true,
      message: "product created successfully from frontend",
      newProduct: responseData.newProduct,
    };
  },

  getAllProducts: async () => {
    const response = await fetch("/api/products");
    const responseData = await response.json();
    set({ Products: responseData.data });

    return {
      success: true,
      productsData: responseData.data,
    };
  },

  deleteProducts: async (Id) => {
    const response = await fetch(`/api/products/${Id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseData = await response.json();
    if (!responseData.success)
      return {
        success: false,
        message: responseData.message,
      };

    set((state) => ({
      Products: state.Products.filter((product) => product._id !== Id),
    }));

    return {
      success: true,
      message: "product deleted successfully",
    };
  },

  updateProduct: async (Id, updatedProduct) => {
    const response = await fetch(`/api/products/${Id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    });

    const responseData = await response.json();

    set((state) => ({
      Products: state.Products.map((product) =>
        product._id === Id ? responseData.updatedData : product
      ),
    }));

    return {
      success: true,
      message: "product created successfully from frontend",
      updatedProduct: responseData.updatedData,
    };
  },
}));
