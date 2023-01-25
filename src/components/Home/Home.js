import React from "react";
import './Home.css';
import picOne from "../../carouselPic/prgm1.jpg";
import picTwo from "../../carouselPic/prgm2.jpg";
import picThree from "../../carouselPic/prgm3.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className='container mt-2 mb-4'>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade mb-4"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={picOne} className="carousel-img" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={picTwo} className="carousel-img" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={picThree} className="carousel-img" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Link className='home-btn' to='/topics'>Go to Quiz section</Link>
    </div>
  );
};

export default Home;
