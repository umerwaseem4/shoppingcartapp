import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import CartEmpty from "./cartEmpty";
import { removeFromCart } from "../actions";

const Cart = () => {
  const items = useSelector((state) => state.cartReducer.addedItems);
  const dispatch = useDispatch();

  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    grid: {
      margin: "0 auto",
      marginTop: 50,
      gridGap: 3,
      padding: 20,
      justifyContent: "center",
      alignItems: "center",
    },
  });
  const classes = useStyles();

  const cartItems = items.length ? (
    items.map((items) => {
      return (
        <Card className={classes.root} key={items.id}>
          <CardActionArea>
            <Link>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="340"
                image={items.img}
                title="Contemplative Reptile"
              />
            </Link>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {items.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {items.desc}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              color="primary"
              onClick={() => dispatch(removeFromCart(items.id))}
            >
              Remove From Cart
            </Button>
          </CardActions>
        </Card>
      );
    })
  ) : (
    <CartEmpty />
  );
  return <div>{cartItems}</div>;
};

export default Cart;
