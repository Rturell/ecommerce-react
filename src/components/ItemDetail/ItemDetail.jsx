function ItemDetail({product}) {
  return (
    <div className="flex items-stretch flex-wrap justify-center gap-6 my-10">
      <div key={product.id}>{product.title}</div>
    </div>
  );
}

export default ItemDetail