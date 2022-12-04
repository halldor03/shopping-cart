import { NavLink } from "react-router-dom";

export default function Navbar({ plantsInCart }) {
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
          <span
            className="material-symbols-rounded"
            onClick={() => {
              const modal = document.getElementById("cartModal");
              modal.style.display = "block";
              window.addEventListener("click", (e) => {
                const modal = document.getElementById("cartModal");
                if (e.target == modal) {
                  modal.style.display = "none";
                }
              });
            }}
          >
            shopping_cart
          </span>
          {plantsInCart.length === 0 ? null : (
            <div className="shoppingCartQuantity">
              {(plantsInCart.length = plantsInCart.length)}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
