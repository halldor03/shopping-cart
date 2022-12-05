import { NavLink } from "react-router-dom";

export default function Navbar({ plantsInCart }) {
  const showCart = () => {
    const modal = document.getElementById("cartModal");
    const modalBackground = document.getElementById("modalBackground");
    modal.style.display = "flex";
    modalBackground.style.display = "block";
    window.addEventListener("click", (e) => {
      if (e.target == modalBackground) {
        modal.style.display = "none";
        modalBackground.style.display = "none";
      }
    });
  };

  const totalQuantity = plantsInCart.reduce((accumulator, plant) => {
    return accumulator + plant.quantity;
  }, 0);

  return (
    <>
      <NavLink to="/">
        <img className="navLogo" src="../img/logo.webp" />
      </NavLink>
      <div className="navLinks">
        <NavLink to="/" className="homeLink">
          Home
        </NavLink>
        <NavLink to="/shop" className="shopLink">
          Shop
        </NavLink>
        <NavLink to="/contact" className="contactLink">
          Contact
        </NavLink>
        <NavLink to="/about" className="aboutLink">
          About
        </NavLink>
        <div className="shoppingCartIcon">
          <span className="material-symbols-rounded" onClick={() => showCart()}>
            shopping_cart
          </span>
          {plantsInCart.length === 0 ? null : (
            <div className="shoppingCartQuantity">{totalQuantity}</div>
          )}
        </div>
      </div>
    </>
  );
}
