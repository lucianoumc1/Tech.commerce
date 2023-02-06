import React from "react";

import { ProductPackageType } from "../types";

import CartItem from "./CartItem";

interface Props {
  productList: ProductPackageType[];
}

function CartModal({ productList }: Props) {
  return (
    <section>
      <div className="border rouded-lg bg-white w-xs max-w-sm">
        {productList.map((product) => (
          <CartItem key={product.id} product={product} text="Small" />
        ))}
      </div>
    </section>
  );
}

export default CartModal;
