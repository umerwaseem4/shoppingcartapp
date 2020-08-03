import React from "react";
import ItemsHome from "./ItemsHome";

const Home = () => {
  return (
    <div className="home">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="//laz-img-cdn.alicdn.com/images/ims-web/TB1I.6oP8r0gK0jSZFnXXbRRXXa.jpg_1200x1200Q100.jpg_.webp"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="//laz-img-cdn.alicdn.com/images/ims-web/TB1qgg_dwgP7K4jSZFqXXamhVXa.jpg_1200x1200.jpg"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="//laz-img-cdn.alicdn.com/images/ims-web/TB1SXDpP8r0gK0jSZFnXXbRRXXa.jpg_1200x1200Q100.jpg_.webp"
              alt="Third slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <ItemsHome />
    </div>
  );
};

export default Home;
