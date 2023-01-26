import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductType } from "../types";

import returnProduct from "../utils/returnProduct";

import { useAppDispatch } from "../app/hooks";
import { addProduct } from "../features/cart/cartSlice";

interface PropsPhotoCarousel {
  images?: string[];
  onChangeImage: Function;
}

const PhotoCarousel = ({ images, onChangeImage }: PropsPhotoCarousel) => (
  <div className="flex items-center gap-x-6 overflow-x-scroll pb-2 fancy_scroll-bar">
    {images?.map((image, index) => (
      <img
        key={index}
        className="h-24"
        src={image}
        alt=""
        onClick={() => onChangeImage(image)}
      />
    ))}
  </div>
);

interface PropsProductHeader {
  tittle?: string;
  price?: number;
  handleClick: Function;
}

const ProductHeader = ({ tittle, price, handleClick }: PropsProductHeader) => (
  <div className="mt-6 p-6 border rounded-lg ">
    <h2 className="font-bold text-2xl ">{tittle}</h2>

    <span className="block mt-6 text-4xl">${price}</span>

    <span className="block  text-xs text-blue-700">
      View all payment methods
    </span>

    <div>
      <button
        className="block w-full mx-auto max-w-lg py-2 rounded-xl mt-6 bg-violet-500 text-white text-lg font-bold"
        onClick={handleClick}
      >
        Buy
      </button>
    </div>
  </div>
);

function Product() {
  const { id } = useParams<string>();
  const [currentProduct, setCurrentProduct] = useState<ProductType>();
  const [currentImage, setCurrentImage] = useState("");
  const dispatch = useAppDispatch();

  const getProduct = async (id: string) => {
    const product: ProductType = await returnProduct(id);
    setCurrentProduct(product);
    setCurrentImage(product.images[0]);
  };

  useEffect(() => {
    getProduct(id);
  }, []);

  const handleBuy: Function = () => {
    dispatch(addProduct(currentProduct));
  };

  return (
    <section className="max-w-7xl mx-auto my-12 px-4">
      <div className="flex items-start justify-center mb-16 gap-x-16 flex-wrap">
        <div className="sm:flex-1">
          <img src={currentImage} alt="" className="mb-10" />

          <PhotoCarousel
            images={currentProduct?.images}
            onChangeImage={setCurrentImage}
          />
        </div>

        <div className="sm:flex-1">
          <ProductHeader
            tittle={currentProduct?.title}
            price={currentProduct?.price}
            handleClick={handleBuy}
          />
        </div>
      </div>

      <div>
        <h6 className="font-bold text-xl my-4">Description</h6>
        <p className="text-sm text-gray-600 ">{currentProduct?.description}</p>
      </div>
    </section>
  );
}

export default Product;
