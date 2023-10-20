import { createSlice } from "@reduxjs/toolkit";

let initialState = { items: {}, totalPrice: 0 };
if (!window.localStorage.getItem("cart")) {
  window.localStorage.setItem("cart", JSON.stringify(initialState));
} else {
    initialState = JSON.parse(window.localStorage.getItem("cart"))
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (prev, action) => {
      if (
        Object.keys(prev["items"]).find((previtem) => {
          return previtem === action.item.name;
        })
      ) {
        return {
          ...prev,
          items: {
            ...prev["items"],
            [action.item.name]: {
              ...action.item,
              quantity:
                prev.items[[action.item.name]].quantity + action.quantity,
            },
          },
        };
      } else {
        return {
          ...prev,
          items: {
            ...prev["items"],
            [action.item.name]: { ...action.item, quantity: action.quantity },
          },
        };
      }
    },
    clearCart: (prev, action) => {
      return { items: {} };
    },
    increment: (prev, action) => {
      return {
        ...prev,
        items: {
          ...prev["items"],
          [action.item.name]: {
            ...action.item,
            quantity: prev.items[[action.item.name]].quantity + 1,
          },
        },
      };
    },
    decrement: (prev, action) => {
      if (prev.items[[action.item.name]].quantity === 1) {
        const temp = {
          ...prev,
          items: {
            ...prev["items"],
            [action.item.name]: {
              ...action.item,
              quantity: prev.items[[action.item.name]].quantity - 1,
            },
          },
        };
        delete temp.items[[action.item.name]];
        return temp;
      } else {
        return {
          ...prev,
          items: {
            ...prev["items"],
            [action.item.name]: {
              ...action.item,
              quantity: prev.items[[action.item.name]].quantity - 1,
            },
          },
        };
      }
    },
  },
});

export const { increment, decrement, clearCart, addToCart } = cartSlice.actions;
export default cartSlice.reducer;
