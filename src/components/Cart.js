import { useEffect } from "react";

export default function Cart({ plantsInCart, setPlantsInCart }) {
  const totalPrice = plantsInCart.reduce((accumulator, plant) => {
    return accumulator + plant.price * plant.quantity;
  }, 0);

  const decreasePlantQuantity = (plant) => {
    setPlantsInCart(
      plantsInCart.map((el) =>
        el.name === plant.name ? { ...el, quantity: (el.quantity -= 1) } : el
      )
    );
    setPlantsInCart(plantsInCart.filter((plant) => plant.quantity !== 0));
    if (plant.quantity === 0) {
      plant.quantity = 1;
    }
  };

  const increasePlantQuantity = (plant) => {
    setPlantsInCart(
      plantsInCart.map((el) =>
        el.name === plant.name ? { ...el, quantity: (el.quantity += 1) } : el
      )
    );
  };

  const showComingSoonMessage = () => {
    const message = document.getElementById("comingSoonMessage");
    message.style.opacity = 1;
    setTimeout(() => {
      message.style.opacity = 0;
    }, 800);
  };

  return (
    <>
      {plantsInCart.length === 0 ? (
        <div id="modalBackground">
          <div id="cartModal">
            <div className="cartTitle">
              Your shopping cart is empty
              <span className="material-symbols-rounded">
                sentiment_dissatisfied
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div id="modalBackground">
          <div id="cartModal">
            <div className="cartTitle">Your shopping cart</div>
            {plantsInCart.map((plant, index) => {
              return (
                <div className="plantInCart" key={Math.random() * 10000}>
                  <img className="plantInCartImage" src={plant.currentImgSrc} />
                  <div className="plantInCartInfo">
                    <div className="plantInCartName">{plant.name}</div>
                    <div className="quantityWrapper">
                      <span
                        className="material-symbols-rounded"
                        onClick={() => decreasePlantQuantity(plant)}
                      >
                        remove
                      </span>
                      <div className="plantInCartQuantity">
                        {plant.quantity}
                      </div>
                      <span
                        className="material-symbols-rounded"
                        onClick={() => increasePlantQuantity(plant)}
                      >
                        add
                      </span>
                    </div>
                    <div className="plantInCartPrice">
                      {Intl.NumberFormat("de-DE", {
                        style: "currency",
                        currency: "PLN",
                      }).format(plant.price * plant.quantity)}
                    </div>
                  </div>
                </div>
              );
            })}
            <span className="totalOrder">
              Total:{" "}
              {Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "PLN",
              }).format(totalPrice)}
            </span>
            <button
              className="checkoutButton"
              onClick={() => {
                showComingSoonMessage();
              }}
            >
              Checkout
            </button>
            <span id="comingSoonMessage">Coming soon!</span>
          </div>
        </div>
      )}
    </>
  );
}
