import React from "react";
import { Link } from "react-router-dom";

import { ProductType } from "../types";

export const ProductCard = (product: ProductType) => (
  <Link to={`/product/${product.id}`}>
    <div className="w-full max-w-xs flex flex-col items-center justify-center mx-auto">
      {/* <picture className="bg-gradient-to-l from-neutral-200 to-neutral-100 rounded-2xl w-full mb-2"> */}
      <img
        className="h-44 text-center rounded-2xl mb-3 mx-auto"
        src={product.images[0]}
        alt=""
      />
      {/* </picture> */}
      <h3 className="text-center font-semibold text-xl">{product.title}</h3>
      <span className="text-center block ">{`$ ${product.price}`}</span>
    </div>
  </Link>
);

interface ProductboardProps {
  products: ProductType[];
}

const Productboard = ({ products }: ProductboardProps) => (
  <div
    className="grid gap-x-6 gap-y-12 mx-auto px-8 w-full"
    style={{
      gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
    }}
  >
    {products.map((product) => (
      <ProductCard {...product} key={product.id} />
    ))}
  </div>
);

export default Productboard;
