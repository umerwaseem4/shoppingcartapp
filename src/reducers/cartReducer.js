import product1 from "../Images/card1.jpg";
import product2 from "../Images/card2.jpg";
import product3 from "../Images/card3.jpg";
import product4 from "../Images/card4.jpg";
import product5 from "../Images/card5.jpg";
import product6 from "../Images/card6.jpg";
import { ADD_TO_CART, REMOVE_ITEM } from "../actions/action-types";
import { addToTotal } from "../actions";

const INITIAL_STATE = {
  items: [
    {
      id: 1,
      title: "Shirt Shot",
      desc: "Nike Black is the perfect in every work you want from it",
      price: 2000,
      img: product1,
    },
    {
      id: 2,
      title: "Adidas",
      desc: "Adidas is like devdas but its different from Nike shoes",
      price: 4000,
      img: product2,
    },
    {
      id: 3,
      title: "Nike Pro",
      desc: "Nike Pro is used to climb hils i dont know what i am writing",
      price: 5000,
      img: product3,
    },
    {
      id: 4,
      title: "Adidas Pro Max",
      desc: "Adidas Pro is used to make the user interface better",
      price: 2000,
      img: product4,
    },
    {
      id: 5,
      title: "Nike Pro Max",
      desc: "Nike pro max will help you to climb pro max mountains",
      price: 1500,
      img: product5,
    },
    {
      id: 6,
      title: "Pro Max Shoe",
      desc: "Pro Max ultra pro max with shoe cleaner and cobbler exclusive",
      price: 3000,
      img: product6,
    },
  ],
  itemAdded: [],
  total: 0,
  number: 0,
  quantity: 1,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  console.log(state);
  if (action.type === ADD_TO_CART) {
    const addedItem = state.items.find((item) => item.id === action.payload);
    const existed_item = state.itemAdded.find(
      (item) => action.payload === item.id
    );
    if (existed_item) {
      return {
        ...state,
      };
    } else {
      return {
        ...state,
        itemAdded: [...state.itemAdded, addedItem],
        number: state.number + 1,
        total: state.total + addedItem.price,
      };
    }
  }
  // Remove Items
  if (action.type === REMOVE_ITEM) {
    const removedItem = state.itemAdded.filter(
      (item) => item.id !== action.payload
    );
    const totalPrice = state.items.find((item) => item.id === action.payload);
    console.log(totalPrice.price);
    return {
      ...state,
      itemAdded: removedItem,
      number: state.number - 1,
      total: state.total - totalPrice.price,
    };
  }
  if (action.type === "ADD_TO_TOTAL") {
    const addItemToTotal = state.items.find(
      (item) => item.id === action.payload
    );
    return {
      ...state,
      total: state.total + addItemToTotal.price,
      quantity: state.quantity + 1,
    };
  }
  if (action.type === "SUB_TO_TOTAL") {
    const subItemToTotal = state.items.find(
      (item) => item.id === action.payload
    );
    return {
      ...state,
      total: state.total - subItemToTotal.price,
    };
  }
  return state;
};

export default cartReducer;
