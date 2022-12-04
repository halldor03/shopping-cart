export default function Cart({ plantsInCart }) {
  //FIGURE OUT HOW TO ADD TWO IDENTICAL PLANTS AND DISPLAY THEIR QUANTITY, CALCULATE TOTAL COST AND IMPLEMENT ADD/REMOVE PLANTS
  return (
    <>
      <div id="cartModal">
        <div className="modalContent">
          {plantsInCart.map((plant) => {
            return (
              <div className="plantInCart" key={plant.id}>
                <img className="plantInCartImage" src={plant.currentImgSrc} />
                <div className="plantInCartName">{plant.name}</div>
                <div className="plantInCartPrice">{plant.price}</div>
                <div className="plantInCartQuantity">quantity</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
