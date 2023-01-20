import React from "react";

import SecctionTitle from "../components/SecctionTitle";
import { bestSellerProducts } from "../assets/bestSellerProducts";
import Productboard from "./Productboard";

function BestSellerProducts() {
  return (
    <section className="w-full">
      <SecctionTitle
        title="Best Seller Products"
        subtitle="Cositas de packete win en pageins teh"
      />
      <Productboard products={bestSellerProducts} />
    </section>
  );
}

export default BestSellerProducts;
