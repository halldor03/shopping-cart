import Cart from "./Cart";

export default function Shop({
  plantsInCart,
  setPlantsInCard,
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
    setPlantsInCard([...plantsInCart, plant]);
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
                <div className="plantPrice">{plant.price} PLN</div>
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
      <Cart plantsInCart={plantsInCart} />
    </>
  );
}
