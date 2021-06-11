import { useEffect, useState } from "react";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/actions/cart";

export default function Card() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const cart = useSelector((state) => state.addToCart);
  const dispatch = useDispatch();

  console.log(products);

  console.log(cart);

  return (
    <div className="card-section">
      {products.map((product) => (
        <li className="card" key={product.id}>
          <img
            className="product-image"
            src={product.image}
            alt={product.title}
          />
          <div className="details">
            <h3 className="product-title">{product.title}</h3>
            <p className="product-description">
              {product.description.slice(0, 100)}...
            </p>
            <div className="card-bottom">
              <button
                className="add-to-cart-btn"
                onClick={() => {
                  console.log(product);
                  dispatch(addToCart(product));
                }}
              >
                {" "}
                <AddShoppingCartIcon /> Add To Cart
              </button>
              <h3 className="product-price">{product.price} $</h3>
            </div>
          </div>
        </li>
      ))}
    </div>
  );
}
