import { ADD_TO_CART } from "./action-types";
import { REMOVE_ITEM } from "./action-types";

export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    payload: id,
  };
};

export const removeFromCart = (id) => {
  return {
    type: REMOVE_ITEM,
    payload: id,
  };
};
