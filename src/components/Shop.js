export default function Shop({
  plantsInCart,
  setPlantsInCart,
  plants,
  setPlants,
}) {
  const handleMouseEnter = (plant) => {
    const targetId = plant.id;
    setPlants(
      plants.map((plant) => {
        if (plant.id === targetId) {
          plant.currentImgSrc = plant.imgSrc2;
        }
        return plant;
      })
    );
  };

  const handleMouseLeave = (plant) => {
    const targetId = plant.id;
    setPlants(
      plants.map((plant) => {
        if (plant.id === targetId) {
          plant.currentImgSrc = plant.imgSrc1;
        }
        return plant;
      })
    );
  };

  const addPlantToCart = (plant) => {
    //SOLVES PROBLEM WHEN AFTER REMOVING PLANTS FROM CART, NEXT TIME IT ADDS 2 INSTEAD OF ONE
    if (
      plant.quantity === 2 &&
      plantsInCart.filter((e) => e.name === plant.name).length === 0
    ) {
      plant.quantity = 1;
    }
    //
    if (plantsInCart.filter((e) => e.name === plant.name).length > 0) {
      setPlantsInCart(
        plantsInCart.map((el) =>
          el.name === plant.name ? { ...el, quantity: (el.quantity += 1) } : el
        )
      );
    } else setPlantsInCart([...plantsInCart, plant]);
  };

  return (
    <>
      <div className="shopContainer">
        {plants.map((plant) => {
          return (
            <div className="plantElement" key={plant.id}>
              <img
                className="plantPhoto"
                src={plant.currentImgSrc}
                alt={plant.name}
                onMouseEnter={() => handleMouseEnter(plant)}
                onMouseLeave={() => handleMouseLeave(plant)}
              />
              <div className="plantInfo">
                <div className="plantName">{plant.name}</div>
                <div className="plantPrice">
                  {Intl.NumberFormat("de-DE", {
                    style: "currency",
                    currency: "PLN",
                  }).format(plant.price)}{" "}
                </div>
                <button
                  className="addToCartButton"
                  onClick={() => addPlantToCart(plant)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
