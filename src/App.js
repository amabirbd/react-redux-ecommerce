import HeaderCarousel from "./components/HeaderCarousel";
import Nav from "./components/Nav";
import "./styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useSelector } from "react-redux";

import Categories from "./components/Categories";
import Cards from "./components/Cards";
import CartButton from "./components/CartButton";
import Cart from "./components/Cart";
import { useEffect, useState } from "react";

export default function App() {
  const cart = useSelector((state) => state.addToCart);
  const [cartSection, setCartSection] = useState();

  useEffect(() => {
    const cartSection = document.getElementById("cart");
    setCartSection(cartSection);
  }, []);

  return (
    <div className="App">
      {/* nav, carousel, promotions, populer items, categories, products, cart */}
      <div className="container">
        <Nav />
        <div className="header-carousel">
          <div className="header-sec">
            {/* <Categories /> */}
            <HeaderCarousel />
          </div>
          <CartButton cartSection={cartSection} />
          {/* {cart ? <Cart /> : <CartButton />} */}
          <Cart cartSection={cartSection} />
          <Cards />
        </div>
      </div>
    </div>
  );
}
