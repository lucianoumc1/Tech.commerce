import { ProductType } from "../types";

import { productList } from "../assets/products";
import noImage from "../assets/no-image.png";

function returnProduct(id?: string): Promise<ProductType> {
  const defaultProduct = {
    id: "0",
    price: 0.0,
    title: "Product not found",
    description: "no description",
    images: [noImage, noImage, noImage, noImage],
  };

  return new Promise((res, __) => {
    setTimeout(() => {
      const product =
        productList.find((item) => item.id === id) ?? defaultProduct;
      res(product);
    }, 300);
  });
}

export default returnProduct;
