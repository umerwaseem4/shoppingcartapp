import React from "react";
import { connect } from "react-redux";

const DisplayItem = (props) => {
  return (
    <div className="display container">
      <div className="display__mainHeading">
        <h1>{props.detailItems.items.title}</h1>
      </div>
      <div className="display__itemImage">
        <img
          src={props.detailItems.items.img}
          alt="image"
          className="img-fluid"
        />
      </div>
      <div className="display__discription">
        <p>{props.detailItems.items.desc}</p>
      </div>
    </div>
  );
};

const MapStateToProps = (state) => {
  return { detailItems: state.cartReducer };
};

export default connect(MapStateToProps)(DisplayItem);
