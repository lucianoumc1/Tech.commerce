import React from "react";
import { useAppSelector } from "../app/hooks";

import { ProductPackageType } from "../types";
import PrimaryButton from "../components/PrimaryButton";
import CartItem from "../components/CartItem";

interface ListOfProductsProps {
  productList: ProductPackageType[];
  total: number;
}

const ListOfProducts = ({ productList, total }: ListOfProductsProps) => (
  <>
    <span className="text-gray-500 text-base block mb-4">List of Products</span>
    <div className="border rounded-lg overflow-hidden">
      {productList.map((prod) => (
        <CartItem key={prod.id} product={prod} text="Regular" />
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

function Cart() {
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
