import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const CartEmpty = () => {
  return (
    <div className="cartEmpty">
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Cart Empty</h1>
          <p class="lead">
            Go to the home page to add items in the cart to proceed to check
            point!
          </p>
          <Link to="/" className="linkara">
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartEmpty;
