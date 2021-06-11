import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useSelector } from "react-redux";

export default function Cart({ cartSection }) {
  const cart = useSelector((state) => state.cart);
  const cartItems = cart.length;

  function showCart() {
    if (cartSection.style.display === "none") {
      cartSection.style.display = "block";
    } else {
      cartSection.style.display = "none";
    }
  }

  return (
    <div className="cart-button">
      <h2>
        <ShoppingCartIcon fontSize="large" onClick={() => showCart()} />
        <span className="cart-items">{cartItems}</span>
      </h2>
    </div>
  );
}
