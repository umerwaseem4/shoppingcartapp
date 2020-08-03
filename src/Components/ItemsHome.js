import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

import { addToCart } from "../actions";
import { useSelector, useDispatch } from "react-redux";

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

const ItemsHome = (props) => {
  const classes = useStyles();
  const items = useSelector((state) => state.cartReducer.items);
  const dispatch = useDispatch();

  const showItems = items.map(({ title, img, id, desc }) => {
    return (
      <Card className={classes.root} key={id}>
        <CardActionArea>
          <Link>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="340"
              image={img}
              title="Contemplative Reptile"
            />
          </Link>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {desc}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => dispatch(addToCart(id))}
          >
            Add To Cart
          </Button>
        </CardActions>
      </Card>
    );
  });
  return (
    <div className="container">
      <div className="itemsHeading text-center">
        <h1 className="display-4 mt-5 mb-5">Products</h1>
        <hr className="my-4" />
      </div>
      <Grid container spacing={1} className={classes.grid}>
        <Grid container item xs={12} lg={12} md={12} sm={6}>
          {showItems}
        </Grid>
      </Grid>
    </div>
  );
};

export default ItemsHome;
