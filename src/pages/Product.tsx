import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductType } from "../components/Productboard";

function Product() {
  const [productInfo, setProductInfo] = useState();
  const { id } = useParams();

  const producto = () => {
    return new Promise((res:, rej) => {
      setTimeout(() => {
        res({
          id: 2,
          title: "Pan tostado",
          price: 300,
          image: "",
        });
      }, 3000);
    });
  };

  useEffect(() => {
    (async () => {
      setProductInfo(await producto());
    })();
  }, []);
  return <div>Soy un producto</div>;
}

export default Product;
