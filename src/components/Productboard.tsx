import React from "react";

export type ProductType = {
  id: number;
  title: string;
  price: number;
  image: string;
};

interface ProductCardProps {
  product: ProductType;
}

export const ProductCard = ({ product }: ProductCardProps) => (
  <div className="max-w-xs">
    <div className="bg-neutral-200 h-44 w-full rounded-2xl mb-3"></div>
    <h3 className="text-center font-semibold text-xl">{product.title}</h3>
    <span className="text-center block ">{`$ ${product.price}`}</span>
  </div>
);

interface ProductboardProps {
  products: ProductType[];
}

const Productboard = ({ products }: ProductboardProps) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-2 gap-y-6 mt-6 mx-2 w-max">
    {products.map((product) => (
      <ProductCard product={product} />
    ))}
  </div>
);

export default Productboard;
