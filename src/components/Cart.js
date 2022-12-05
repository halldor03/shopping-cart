export default function Cart({ plantsInCart, setPlantsInCart }) {
  const totalPrice = plantsInCart.reduce((accumulator, plant) => {
    return accumulator + plant.price * plant.quantity;
  }, 0);

  const removePlantFromCart = (plantIndex) => {
    setPlantsInCart(
      plantsInCart.filter((plant, index) => index !== plantIndex)
    );
  };

  return (
    <>
      {plantsInCart.length === 0 ? (
        <div id="modalBackground">
          <div id="cartModal">
            <div className="cartTitle">Your shopping cart is empty :(</div>
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
                    <div className="plantInCartQuantity">
                      Quantity: {plant.quantity}
                    </div>
                    <button
                      className="removePlantFromCartButton"
                      onClick={() => removePlantFromCart(index)}
                    >
                      Remove from cart
                    </button>
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
                alert("Coming soon");
              }}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </>
  );
}
