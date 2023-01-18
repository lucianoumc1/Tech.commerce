import React from "react";
import SearchBar from "../components/SearchBar";

import { productList } from "../assets/products";
import Productboard from "../components/Productboard";

function Shop(): React.ReactElement {
  return (
    <>
      <SearchBar />
      <div className="flex item justify-end">
        <Productboard products={productList} />
      </div>
    </>
  );
}

export default Shop;
