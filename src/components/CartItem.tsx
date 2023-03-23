import React, { MouseEventHandler } from "react";

import { Link } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { ProductPackageType } from "../types";
import {
  increaseProductQuantity,
  decreaseProductQuantity,
  deleteProduct,
} from "../features/cart/cartSlice";

import trashIcon from "../assets/icons/trash-icon.png";

interface ProductCountProps {
  productQuantity: ProductPackageType["quantity"];
  handleIncrement: MouseEventHandler<HTMLButtonElement>;
  handleDecrement: MouseEventHandler<HTMLButtonElement>;
}

const ProductCount = ({
  productQuantity,
  handleIncrement,
  handleDecrement,
}: ProductCountProps) => (
  <div className="flex h-full">
    <button
      className="h-full w-6 bg-violet-500 text-white font-bold"
      onClick={handleDecrement}
    >
      -
    </button>

    <input
      type="text"
      className="w-6 h-full text-center"
      disabled
      value={productQuantity}
    />

    <button
      className="h-full w-6 bg-violet-500 text-white font-bold"
      onClick={handleIncrement}
    >
      +
    </button>
  </div>
);

interface Props {
  product: ProductPackageType;
  text: "Small" | "Regular";
}

function CartItem({ product, text }: Props) {
  const totalPrice = (product.quantity * product.price).toFixed(2);

  const dispatch = useAppDispatch();

  const TextSize = {
    Small: "text-xs",
    Regular: "text-base",
  };

  const handleIncreseProduct = () => {
    dispatch(increaseProductQuantity(product));
  };
  const handleDecreseProduct = () => {
    dispatch(decreaseProductQuantity(product));
  };
  const handleDeleteProduct = () => {
    dispatch(deleteProduct(product));
  };

  return (
    <div
      className={`w-full h-14 p-4 pr-0 flex items-center justify-between gap-x-3 flex-nowrap ${TextSize[text]} overflow-hidden`}
    >
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
      <ProductCount
        productQuantity={product.quantity}
        handleIncrement={handleIncreseProduct}
        handleDecrement={handleDecreseProduct}
      />
      <span className="whitespace-nowrap min-w-max font-bold">
        $ {totalPrice}
      </span>

      <div className="bg-violet-500 h-24 flex items-center justify-center w-10">
        <button type="button" onClick={handleDeleteProduct}>
          <img src={trashIcon} alt="trash" className="h-6" />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
