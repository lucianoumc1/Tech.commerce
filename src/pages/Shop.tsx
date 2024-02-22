import React from "react";
import SearchBar from "../components/SearchBar";

import { productList } from "../assets/products";
import Productboard from "../components/Productboard";

import { useAppSelector, useAppDispatch } from "../app/hooks";

function Shop(): React.ReactElement {
  const cart = useAppSelector((state) => state.cart);
  // const dispatch = useAppDispatch()

  console.log(cart);

  return (
    <>
      <SearchBar />
      <div className="max-w-screen-xl mx-auto my-24">
        <Productboard products={productList} />
      </div>
    </>
  );
}

export default Shop;
