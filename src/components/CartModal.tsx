import React from "react";

import { ProductPackageType } from "../types";

import CartModalItem from "./CartModalItem";

interface Props {
  productList: ProductPackageType[];
}

function CartModal({ productList }: Props) {
  return (
    <section>
      <div className="border rouded-lg bg-white w-xs max-w-sm">
        {productList.map((product) => (
          <CartModalItem key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default CartModal;
