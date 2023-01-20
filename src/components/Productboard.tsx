import React from "react";
import { Link } from "react-router-dom";

export type ProductType = {
  id: string;
  title: string;
  description: string;
  price: number;
  images: string[];
};

export const ProductCard = (product: ProductType) => (
  <Link to={`/product/${product.id}`}>
    <div className="w-full max-w-xs flex flex-col items-center justify-center">
      <img
        className="h-44 text-center rounded-2xl mb-3"
        src={product.images[0]}
        alt=""
      />
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
    className="grid gap-x-6 gap-y-12 my-24 mx-auto px-4 w-full"
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
