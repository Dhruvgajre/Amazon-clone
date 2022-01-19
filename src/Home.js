import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__banner"
          src="https://m.media-amazon.com/images/I/913ukdhzGvL._SX3000_.jpg"
          alt=" "
        />
        <div className="home__row">
          <Product
            title="The Japanese secret to a long and happy life "
            price={313.0}
            image="https://images-na.ssl-images-amazon.com/images/I/81l3rZK4lnL.jpg"
            rating={5}
          />
          <Product
            title="Ask and It is Given: Learning to Manifest Your Desires "
            price={249.0}
            image="https://images-na.ssl-images-amazon.com/images/I/81ZrXXpmqyL.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            title="Apple iPhone 13 (256GB) Starlight"
            price={89900.0}
            image="https://m.media-amazon.com/images/I/71GLMJ7TQiL._SL1500_.jpg"
            rating={4}
          />
          <Product
            title="2020 Apple MacBook Pro (13.3-inch, Apple M1 chip with 8‑core CPU and 8‑core GPU, 8GB RAM, 256GB SSD) - Space Grey"
            price={108990.0}
            image="https://m.media-amazon.com/images/I/71an9eiBxpL._SL1500_.jpg"
            rating={5}
          />
          <Product
            title="DualSense wireless controller - (PlayStation5)"
            price={5390.0}
            image="https://m.media-amazon.com/images/I/612bjwBuobS._SL1500_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            title="HP Deskjet 2331 Colour Printer, Scanner and Copier "
            price={4099.0}
            image="https://m.media-amazon.com/images/I/61UAALWKT0L._SL1500_.jpg"
            rating={3}
          />
          <Product
            title="Titan Classique Chronograph Silver Dial Men's Watch "
            price={4067.0}
            image="https://m.media-amazon.com/images/I/81FaNDkNkUL._UL1500_.jpg"
            rating={4}
          />
          <Product
            title="Ray-Ban Unisex Square Sunglasses"
            price={7952.0}
            image="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/u/lux-ray-ban-rb3025i-002-3f-size-58-men-metal-sunglasses_m_7666.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
