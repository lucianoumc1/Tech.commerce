import React from "react";
import { Link } from "react-router-dom";

export type ProductType = {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
};

export const ProductCard = (product: ProductType) => (
  <div className="w-full max-w-xs">
    <Link to={`/product=${product.id}`}>
      <div className="bg-neutral-200 h-44 w-full rounded-2xl mb-3"></div>
      <h3 className="text-center font-semibold text-xl">{product.title}</h3>
      <span className="text-center block ">{`$ ${product.price}`}</span>
    </Link>
  </div>
);

interface ProductboardProps {
  products: ProductType[];
}

const Productboard = ({ products }: ProductboardProps) => (
  <div
    className="grid gap-x-4 gap-y-6 mt-6 mx-auto px-4 w-full"
    style={{
      gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
    }}
  >
    {products.map((product) => (
      <ProductCard {...product} />
    ))}
  </div>
);

export default Productboard;
