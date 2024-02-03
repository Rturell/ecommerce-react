import { useEffect } from "react";
import { useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products?limit=15"
        );
        const json = await response.json();
        setProducts(json);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="lg:container md:mx-auto">
      <div className="flex items-stretch flex-wrap justify-center gap-6">
        {products.map((product, index) => {
          return (
            <div key={index}>
              <div className="min-w-[400px] w-100 max-w-sm bg-white border border-gray rounded-lg shadow">
                <span className="bg-blue text-white text-xs font-semibold px-2.5 py-1.5">
                  {product.category}
                </span>

                <a href="#">
                  <img
                    className="p-8 rounded-t-lg w-[250px] h-[250px] object-contain m-auto"
                    src={product.image}
                    alt="product image"
                  />
                </a>

                <div className="px-5 pb-5">
                  <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-dark mb-8">
                      {product.title}
                    </h5>
                  </a>

                  <p className="text-gray-dark text-sm pb-10">{product.description}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-dark">
                      ${product.price}
                    </span>
                    <a
                      href="#"
                      className="text-white bg-purple hover:text-white hover:bg-pink focus:ring-4 focus:outline-none focus:ring-blue font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                      Add to cart
                    </a>
                  </div>

                </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
