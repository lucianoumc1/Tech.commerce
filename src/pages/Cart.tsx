import React from "react";
import { useAppSelector } from "../app/hooks";
import { Link } from "react-router-dom";

import { ProductPackageType } from "../types";
import PrimaryButton from "../components/PrimaryButton";

interface Props {}

interface CartItemProps {
  product: ProductPackageType;
}
const CartItem = ({ product }: CartItemProps) => (
  <div className="w-full h-14 p-4 flex items-center justify-between text-base gap-x-3 flex-nowrap">
    <Link
      to={`/product/${product.id}`}
      className="h-full flex flex-grow items-center overflow-hidden"
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
    <form>
      <div className="flex h-full">
        <button className="h-full w-6 bg-violet-500 text-white font-bold">
          {"-"}
        </button>
        <input
          type="text"
          className="w-6 h-full text-center"
          disabled
          value={product.quantity}
        />
        <button className="h-full w-6 bg-violet-500 text-white font-bold">
          {"+"}
        </button>
      </div>
    </form>

    <span className="whitespace-nowrap min-w-max font-bold">
      $ {(product.quantity * product.price).toFixed(2)}
    </span>
  </div>
);

interface ListOfProductsProps {
  productList: ProductPackageType[];
  total: number;
}

const ListOfProducts = ({ productList, total }: ListOfProductsProps) => (
  <>
    <span className="text-gray-500 text-base block mb-4">List of Products</span>
    <div className="border rounded-lg">
      {productList.map((prod) => (
        <CartItem key={prod.id} product={prod} />
      ))}
      <div className="flex justify-between p-4 border-t-2">
        <span className="font-bold text-lg">Total</span>
        <span className="font-bold text-lg">$ {total.toFixed(2)}</span>
      </div>
    </div>
  </>
);

interface PaymentSectionProps {}

const PaymentSection = ({}: PaymentSectionProps) => (
  <div className="border rounded-lg min-h-[600px] shadow-md p-4 flex flex-col justify-between">
    <h4 className="text-gray-800 text-lg block mb-4">
      Select your payment method
    </h4>
    <PrimaryButton text="Buy" handleClick={() => alert("comprado")} />
  </div>
);

function Cart({}: Props) {
  const cartState = useAppSelector((state) => state.cart);

  return (
    <section className="max-w-screen-2xl mx-auto my-12">
      <h1 className="font-bold text-4xl mb-4">Cart</h1>
      <div className="flex  justify-center gap-12">
        <div className="flex-1">
          <PaymentSection />
        </div>
        <div className="flex-1">
          <ListOfProducts
            productList={cartState.products}
            total={cartState.total}
          />
        </div>
      </div>
    </section>
  );
}

export default Cart;
