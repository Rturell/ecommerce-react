import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const [isloading, setIsloading] = useState(true);

  const { id } = useParams();

  const getProduct = async (id) => {
    const resp = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await resp.json();
    setProduct(data);
    setIsloading(false);
  };

  useEffect(() => {
    getProduct(id);
  }, [id]);


  return (
    <>
      {isloading ? (
        "Loading..."
      ) : (
        <div>
          <ItemDetail product={product} />
        </div>
      )}
    </>
  );
}

export default ItemDetailContainer;
