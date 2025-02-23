import { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { useStore } from "../store/product";

const Home = () => {
  const { getAllProducts, Products } = useStore();

  useEffect(() => {
    async function fetchProducts() {
      await getAllProducts();
    }

    fetchProducts();
  }, [getAllProducts]);

  if (!Products.length)
    return (
      <div className="flex items-center justify-center mt-20 text-2xl font-semibold">
        Nothing to Show
      </div>
    );

  return (
    <div className="max-w-screen-xl mx-auto p-4 flex items-center gap-x-10 mt-6">
      {Products?.map((product) => (
        <div key={product._id}>
          <ProductCard
            _id={product._id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        </div>
      ))}
    </div>
  );
};

export default Home;
