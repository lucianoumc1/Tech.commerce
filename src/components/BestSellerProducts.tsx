import React from "react";

import SecctionTitle from "../components/SecctionTitle";
import { bestSellerProducts } from "../assets/bestSellerProducts";
import { ProductCard } from "./Productboard";

function BestSellerProducts() {
  return (
    <section className="w-full">
      <SecctionTitle
        title="Best Seller Products"
        subtitle="Cositas de packete win en pageins teh"
      />
      <div className="grid grid-cols-4 gap-x-12 gap-y-6 mt-6 mx-2 w-full">
        {bestSellerProducts.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </section>
  );
}

export default BestSellerProducts;
