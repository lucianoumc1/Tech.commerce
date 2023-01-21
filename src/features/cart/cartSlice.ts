import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../../components/Productboard";

interface cartState {
  productQuantity: number;
  total: number;
  products: ProductType[];
};

const initialState: cartState = {
  productQuantity: 0,
  total: 0,
  products: [],
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ProductType>) => {
      state.products.push(action.payload);
      state.productQuantity = state.products.length;
      state.total = state.products.reduce(
        (acc: number, product: ProductType) => (acc += product.price),
        0 
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProduct } = cartSlice.actions;

export default cartSlice.reducer;
