import React from "react";
import { useAppSelector } from "../app/hooks";

import CartModal from "./CartModal";

import cart from "../assets/cart.png";
import { bestSellerProducts } from "../assets/bestSellerProducts";

function CartHeader() {
  const cartState = useAppSelector((store) => store.cart);

  console.log(cartState);

  return (
    <div className="relative show-children-to-hover">
      <img className="h-6" src={cart} alt="cart" />
      <span className="rounded-full bg-orange-500 text-xs w-5 h-5 leading-5 text-center align-middle text-white text-bold absolute -right-3 -top-2 ">
        {cartState.productQuantity}
      </span>
      <div className="show-to-hover-parent absolute right-0 top-full">
        <CartModal productList={cartState.products} />
      </div>
    </div>
  );
}

export default CartHeader;
