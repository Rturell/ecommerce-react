import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../../config/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

function ItemDetailContainer() {

  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProduct = (id) => {
    const productRef = doc(db, "products", id);
    getDoc(productRef).then((response) => {
      const product = {
        id: response.id,
        ...response.data(),
      };
      setProduct(product);
    });
  };

  useEffect(() => {
    getProduct(id);
  }, []);

  return (
    <>
      <ItemDetail product={product} />
    </>
  );
}

export default ItemDetailContainer;
