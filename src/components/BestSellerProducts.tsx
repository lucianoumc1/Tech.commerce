import React from "react";

import SecctionTitle from "../components/SecctionTitle";
import { bestSellerProducts } from "../assets/bestSellerProducts";
import Productboard from "./Productboard";

function BestSellerProducts() {
  return (
    <section className="w-full">
      <SecctionTitle
        title="Best Seller Products"
        subtitle="Speker there are many variations passages"
      />
      <Productboard products={bestSellerProducts} />
    </section>
  );
}

export default BestSellerProducts;
