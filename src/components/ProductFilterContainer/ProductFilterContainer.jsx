import { useEffect, useState } from "react";
import ProductFiltered from "../ProductFiltered/ProductFiltered";
import { useParams } from "react-router-dom";
import { collection, doc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

function ProductFilterContainer() {
  const { category } = useParams();
  const [products, setProducts] = useState(null);
  const [isLoading, setIsloading] = useState(true);

  const getProducts = (category) => {

    const myProducts = category ? query(collection(db, "products"), where("category", "==", category)) : collection(db, "products");

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
    getProducts(category);
  }, [category]);

  return (
    <>
      {isLoading ? (
        <h2>Loading ...</h2>
      ) : (
        <ProductFiltered products={products} />
      )}
    </>
  );
}

export default ProductFilterContainer;
