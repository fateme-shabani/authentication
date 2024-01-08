import React, { useEffect, useState } from "react";
import { getData } from "../dataBase/productList";
import Card from "./Card";

const ProductList = () => {
  const [product, setproduct] = useState([ ]);
  const [refresh, setrefresh] = useState(true)

  console.log(refresh )

  useEffect(() => {
    setTimeout(() => {
      setproduct(getData());
    }, 3000);

    return ()=>{
        setproduct([])
    }
  }, [refresh]);

      if ( product.length === 0) {
        return <h2>Is loading...</h2>;
      }

  return (
    <div>
      {product.map(item => {
        return <Card key={item.id} product={item}/>
      })}

      <button onClick={()=>setrefresh(!refresh)}>Click Me</button>
    </div>
  );
};

export default ProductList;
