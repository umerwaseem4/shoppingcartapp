import React, { useEffect, useRef } from "react";
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
import Grid from "@material-ui/core/Grid";
import CartEmpty from "./cartEmpty";
import { removeFromCart, addToTotal, subToTotal } from "../actions";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const Cart = () => {
  const items = useSelector((state) => state.cartReducer.itemAdded);
  const Total = useSelector((state) => state.cartReducer.total);
  const quantity = useSelector((state) => state.cartReducer.quantity);
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
        <React.Fragment>
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
                <Typography color="textPrimary" component="h1">
                  <h5>Price: {items.price}</h5>
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
              <ButtonGroup
                color="primary"
                aria-label="outlined primary button group"
              >
                <Button onClick={() => dispatch(addToTotal(items.id))}>
                  +
                </Button>
                <Button onClick={() => dispatch(subToTotal(items.id))}>
                  -
                </Button>
              </ButtonGroup>
            </CardActions>
          </Card>
        </React.Fragment>
      );
    })
  ) : (
    <CartEmpty />
  );
  return (
    <div className="container cart">
      <div className="totalArea">
        <h1 className="maincart__heading">Total: {Total}$</h1>
      </div>
      <hr className="my-4" />
      <Grid container spacing={1} className={classes.grid}>
        <Grid container item xs={12} lg={12} md={12} sm={4}>
          {cartItems}
        </Grid>
      </Grid>
    </div>
  );
};

export default Cart;
