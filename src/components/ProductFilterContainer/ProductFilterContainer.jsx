import { useEffect, useState } from "react";
import ProductFiltered from "../ProductFiltered/ProductFiltered";
import { useParams } from "react-router-dom";


function ProductFilterContainer() {

    const [products, setProduct] = useState(null)
    const [isloading, setIsloading] = useState(true)

    const {category} = useParams();

    const getProduct = async (category) => {
        const resp = await fetch(`https://fakestoreapi.com/products/category/${category}`);
        const data = await resp.json()
        setProduct(data)
        setIsloading(false)
    }

    useEffect(() => {
        setIsloading(true);
        getProduct(category);
    },[category])

  return (
    <>
      {isloading ? (
        "Loading..."
      ) : (
        <div>
          <ProductFiltered products={products} />
        </div>
      )}
    </>
  ); 
}

export default ProductFilterContainer;
