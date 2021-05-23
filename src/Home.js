import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="Home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://fortheloveblog.com/wp-content/uploads/2016/07/Amazon-Prime-Banner.jpg"
        />
        <div className="home_row">
          <Product
            id={1}
            title="Jetson Nano 2GB DevKit"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71dOlY0ywGL._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id={2}
            title="Oculus Rift S PC-Powered VR Gaming Headset"
            price={599.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71URNvzoWqL._SL1500_.jpg"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            id={3}
            title="Nintendo Switch (Neon Red/Neon blue)"
            price={349.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71dDcOto3KL._SL1500_.jpg"
            rating={3}
          />
          <Product
            id={4}
            title="The Legend of Zelda: Breath of the Wild - Nintendo Switch"
            price={45.95}
            image="https://images-na.ssl-images-amazon.com/images/I/81KGsbq8ekL._SL1500_.jpg"
            rating={5}
          />
          <Product
            id={5}
            title="RDS Industries, Inc Nintendo Switch Game Traveler Deluxe Travel Case"
            price={14.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71H5Z4SNBpL._SL1500_.jpg"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            id={6}
            title="LG 34WK650-W 34 Inch UltraWide 21:9 IPS Monitor with HDR10 and FreeSync (2018), Black/White"
            price={399.95}
            image="https://images-na.ssl-images-amazon.com/images/I/819F1MjJJ8L._AC_SL1500_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
