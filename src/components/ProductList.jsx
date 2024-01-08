import React, { useEffect, useState } from "react";
import { getData } from "../dataBase/productList";

const ProductList = () => {
  const [product, setproduct] = useState([ ]);

  useEffect(() => {
    setTimeout(() => {
      setproduct(getData());
    }, 3000);
  }, []);

      if (!product|| product.length === 0) {
        return <h2>Is loading...</h2>;
      }

  return (
    <div>
      {product.map(item => {
        return <h2 key={item.id}>{item.name}</h2>
      })}
    </div>
  );
};

export default ProductList;
