import React from "react";

import { Link } from "react-router-dom";
import { ProductPackageType } from "../types";

interface Props {
  product: ProductPackageType;
}

function CartModalItem({ product }: Props) {
  const totalPrice = (product.quantity * product.price).toFixed(2);

  return (
    <div className="w-full h-14 p-4 flex items-center justify-between text-xs gap-x-3 flex-nowrap">
      <Link
        to={`/product/${product.id}`}
        className="h-full flex-grow flex items-center overflow-hidden"
      >
        <img
          className="flex-shrink-0 h-full mr-2"
          src={product.images[0]}
          alt=""
        />
        <span
          className="whitespace-nowrap text-ellipsis"
          title="nombre del prodasnuidasguyg uygasugasuygoasgyuoagyusgyus"
        >
          {product.title}
        </span>
      </Link>
      <span className="whitespace-nowrap min-w-max">
        {product.quantity} un.
      </span>

      <span className="whitespace-nowrap min-w-max font-bold">
        $ {totalPrice}
      </span>
    </div>
  );
}

export default CartModalItem;
