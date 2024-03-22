import { useEffect } from "react";
import { useState } from "react";
import PrimaryButton from "../Ui/Button/PrimaryButton";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

function Products() {
  const [products, setProducts] = useState([]);
  const [isloading, setIsloading] = useState(true);

  const getProductsDB = () => {

    const myProducts = collection(db, "products");

    getDocs(myProducts).then((response) => {
      const productList = response.docs.map((doc) => {
        const item = {
          id: doc.id,
          ...doc.data(),
        };
        return item;
      });
      setProducts(productList);
      setIsloading(false);
    });
  };

  useEffect(() => {
    setIsloading(true);
    getProductsDB();
  }, []);

  return (
    <div className="lg:container md:mx-auto">
      <div className="px-5 flex items-stretch flex-wrap justify-center gap-6">
        {products.map((product, index) => {
          return (
            <div key={index}>
              <div className="w-100 max-w-sm bg-white border border-gray rounded-lg shadow">
                <span className="bg-blue text-white text-xs font-semibold px-2.5 py-1.5">
                  {product.category}
                </span>

                <a href="#">
                  <img
                    className="p-8 rounded-t-lg w-[250px] h-[250px] object-contain m-auto"
                    src={product.img}
                    alt="product image"
                  />
                </a>

                <div className="px-5 pb-5">
                  <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-dark mb-8">
                      {product.title}
                    </h5>
                  </a>

                  <p className="text-gray-dark text-sm pb-10">
                    {product.description.substring(0, 100)}...
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-dark">
                      ${product.price}
                    </span>

                    <PrimaryButton
                      buttonText={"Ver Más"}
                      href={`products/${product.id}`}
                    />
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
