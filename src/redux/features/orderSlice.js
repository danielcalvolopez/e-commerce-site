import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  billing: {
    name: "",
    email: "",
    phone: "",
  },
  shipping: {
    address: "",
    postCode: "",
    city: "",
    country: "",
  },
  payment: {
    method: "e-Money",
    eNumber: "",
    ePin: "",
  },
  orderItems: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState: initialState,
  reducers: {
    saveOrder: (state, action) => {
      state.billing.name = action.payload.name;
      state.billing.email = action.payload.email;
      state.billing.phone = action.payload.phone;
      state.shipping.address = action.payload.address;
      state.shipping.postCode = action.payload.postCode;
      state.shipping.city = action.payload.city;
      state.shipping.country = action.payload.country;
      state.payment.method = action.payload.method;
      state.payment.eNumber = action.payload.eNumber;
      state.payment.ePin = action.payload.ePin;
      state.orderItems = action.payload.orderItems;
    },
  },
});

export const { saveOrder } = orderSlice.actions;

export const selectOrder = (state) => state.order;

export default orderSlice.reducer;
