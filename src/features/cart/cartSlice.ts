import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ProductType, ProductPackageType } from "../../types";

interface cartState {
  productQuantity: number;
  total: number;
  products: ProductPackageType[];
};

const initialState: cartState = {
  productQuantity: 0,
  total: 0,
  products: [
  ],
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ProductType>) => {
      const isProductExist: number = state.products.findIndex(item => item.id === action.payload.id)
      
      if (isProductExist >= 0) {
        state.products[isProductExist].quantity += 1
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }

      state.productQuantity = state.products.reduce(
        (acc: number, product) => (acc += product.quantity),
        0 
      );

      state.total = state.products.reduce(
        (acc: number, product) => (acc += product.price),
        0 
      );
    },

    removeProduct: (state, action: PayloadAction<ProductType>) => {
      state.products = state.products.filter(product => product.id === action.payload.id)

      state.productQuantity = state.products.reduce(
        (acc: number, product) => (acc += product.quantity),
        0 
      );

      state.total = state.products.reduce(
        (acc: number, product) => (acc += product.price),
        0 
      );
    },

    increaseProductQuantity: (state, action: PayloadAction<ProductPackageType>) => {
      state.products = state.products.map(prod => {
        if (prod["id"] === action.payload["id"]) prod.quantity ++;
        return prod
      })

      state.productQuantity = state.products.reduce(
        (acc: number, product) => (acc += product.quantity),
        0 
      );

      state.total = state.products.reduce(
        (acc: number, product) => (acc += product.price),
        0 
      );
    },

    decreaseProductQuantity: (state, action: PayloadAction<ProductPackageType>) => {

      if (action.payload.quantity <= 1) return  

      state.products = state.products.map(prod => {
        if (prod["id"] === action.payload["id"]) prod.quantity --;
        return prod
      })

      state.productQuantity = state.products.reduce(
        (acc: number, product) => (acc += product.quantity),
        0 
      );

      state.total = state.products.reduce(
        (acc: number, product) => (acc += product.price),
        0 
      );
    },

    deleteProduct: (state, action: PayloadAction<ProductType> ) => {
      const newList = state.products.filter(prod => prod.id !== action.payload.id);
      state.products = newList;

      state.productQuantity = state.products.reduce(
        (acc: number, product) => (acc += product.quantity),
        0 
      );

      state.total = state.products.reduce(
        (acc: number, product) => (acc += product.price),
        0 
      );

    }
  },
});

export const { addProduct, removeProduct, increaseProductQuantity, decreaseProductQuantity, deleteProduct } = cartSlice.actions;

export default cartSlice.reducer;
