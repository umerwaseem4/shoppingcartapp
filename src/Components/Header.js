import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Badge from "@material-ui/core/Badge";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const num = useSelector((state) => state.cartReducer.number);
  console.log(num);
  return (
    <div className={classes.root}>
      <AppBar style={{ backgroundColor: "#0F1111", position: "fixed" }}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <img src={logo} alt="logo" className="header__logo" />
          </Typography>
          <Link to="/" className="homeasd">
            Home
          </Link>
          <Link to="/cart" className="shoppingcartico">
            <Badge badgeContent={num} color="primary">
              <AddShoppingCartIcon />
            </Badge>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
