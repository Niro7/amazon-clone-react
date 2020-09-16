import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
return (
<div className="home">
<div className="home__container">
<img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="Home banner image"
        />
<div className="home__row">
<Product
            title="You Are a Badass: How to Stop Doubting Your Greatness and Start Living an Awesome Life"
            price={8.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51r5X3h8IWL._SX315_BO1,204,203,200_.jpg"
          />
<Product
            title="New Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz Intel Core i7) - Silver"
            price={2099.79}
            rating={5}
            image="https://m.media-amazon.com/images/I/71UItVa0VmL._AC_UY218_.jpg"
          />
</div>
<div className="home__row">
<Product
            title="Roam Universal Premium Bike Phone Mount for Motorcycle - Bike Handlebars, Adjustable"
            price={19.98}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/713fujBvS9L._AC_SX425_.jpg"
          />
<Product
            title="Keurig K-Classic Coffee Maker, Single Serve K-Cup Pod Coffee Brewer"
            price={79.0}
            rating={5}
            image="https://m.media-amazon.com/images/I/71Ikuq6AAfL._AC_UL320_.jpg"
          />

          <Product
            title="HolyHigh True Wireless Earbuds 5.0 Bluetooth Headphones Lightweight"
            price={27.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61964oaOPxL._AC_SX522_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            title="Best Choice Products Modern Faux Leather Convertible Futon Sofa w/Removable Armrests"
            price={199.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71xtb6-d-5L._AC_UL320_.jpg"
          />
        </div>
      </div>
    </div>

);
}

export default Home;
