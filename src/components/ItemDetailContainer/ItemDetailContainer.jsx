import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../../config/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  const getProduct = (id) => {
    const productRef = doc(db, "products", id);
    getDoc(productRef).then((response) => {
      const product = {
        id: response.id,
        ...response.data(),
      };
      setItem(product);
    });
  };

  useEffect(() => {
    getProduct(id);
  }, []);

  return <>{item && <ItemDetail {...item} />}</>;
}

export default ItemDetailContainer;
