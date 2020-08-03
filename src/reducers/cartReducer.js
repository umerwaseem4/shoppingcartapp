import product1 from "../Images/card1.jpg";
import product2 from "../Images/card2.jpg";
import product3 from "../Images/card3.jpg";
import product4 from "../Images/card4.jpg";
import product5 from "../Images/card5.jpg";
import product6 from "../Images/card6.jpg";
import { ADD_TO_CART } from "../actions/action-types";
import { REMOVE_ITEM } from "../actions/action-types";

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
  addedItems: [],
  total: 0,
  number: 0,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  console.log(state);
  if (action.type === ADD_TO_CART) {
    let addedItem = state.items.find((item) => item.id === action.payload);
    let existed_item = state.addedItems.find(
      (item) => action.payload === item.id
    );
    if (existed_item) {
      return {
        ...state,
      };
    } else {
      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        number: state.number + 1,
      };
    }
  }
  // Remove Items
  if (action.type === REMOVE_ITEM) {
    const removedItem = state.addedItems.filter(
      (item) => item.id !== action.payload
    );
    return {
      ...state,
      addedItems: removedItem,
      number: state.number - 1,
    };
  }

  return state;
};

export default cartReducer;
