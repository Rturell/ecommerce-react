import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";


function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const [isloading, setIsloading] = useState(true);

  const { id } = useParams();

  const getProduct = async (id) => {
    const resp = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await resp.json();
    console.log(data)
    setProduct(data);
    setIsloading(false);
  };

  useEffect(() => {
    setIsloading(true);
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
