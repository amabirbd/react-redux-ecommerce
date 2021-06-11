export const addToCart = (product) => {
  return {
    type: "ADD_TO_CART",
    payload: product
  };
};

// export const toogleCart = (toogle_cart_state) => {
//   return {
//     type: "TOGGLE_CART",
//     payload: toggle_cart_state
//   };
// };
