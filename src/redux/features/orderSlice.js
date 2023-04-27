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
      state.billing.name = action.payload.formData.name;
      state.billing.email = action.payload.formData.email;
      state.billing.phone = action.payload.formData.phone;
      state.shipping.address = action.payload.formData.address;
      state.shipping.postCode = action.payload.formData.postCode;
      state.shipping.city = action.payload.formData.city;
      state.shipping.country = action.payload.formData.country;
      state.payment.method = action.payload.payment;
      state.payment.eNumber = action.payload.formData.eNumber;
      state.payment.ePin = action.payload.formData.ePin;
      state.orderItems = action.payload.order;
    },
  },
});

export const { saveOrder } = orderSlice.actions;

export const selectOrder = (state) => state.order;

export default orderSlice.reducer;
