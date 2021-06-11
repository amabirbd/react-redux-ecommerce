import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import CloseIcon from "@material-ui/icons/Close";
import { useSelector } from "react-redux";

export default function Cart({ cartSection }) {
  const cart = useSelector((state) => state.cart);
  const cartItems = cart.length;

  function hideCart() {
    if (cartSection.style.display === "block") {
      cartSection.style.display = "none";
    } else {
      cartSection.style.display = "block";
    }
  }

  return (
    <>
      <div className="cart-container">
        <div className="cart" id="cart">
          <CloseIcon
            fontSize="large"
            className="close-icon"
            onClick={() => hideCart()}
          />

          <h3 className="total-item">
            Total items: <span>{cartItems}</span>
          </h3>
          {cart.map((item) => (
            <>
              <div className="cart-item">
                <li key={item.id}>{item.title}</li>
                <span className="quantity">Qunatitiy: </span>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
