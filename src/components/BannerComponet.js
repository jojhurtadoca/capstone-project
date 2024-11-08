import React from "react";
import ButtonComponent from "../components/ButtonComponent";
import { useNavigate } from "react-router-dom";

const BannerComponent = () => {
  const navigation = useNavigate();
  return (
    <section className="home-section green-background padding-desktop">
      <div className="home-banner">
        <div className="title-description">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist
          </p>
          <ButtonComponent
            label={"Reserve a table"}
            onClick={() => navigation("/reservation")}
          />
        </div>
        <div className="promo-img">
          <img
            src="/assets/images/menuimage.png"
            alt="Little lemon restaurant banner"
          />
        </div>
      </div>
    </section>
  );
};

export default BannerComponent;
