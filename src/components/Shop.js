import React, { useState } from "react";
import uniqid from "uniqid";

export default function Shop() {
  const [plants, setPlants] = useState([
    {
      name: "Aloe vera",
      price: "25,00",
      currentImgSrc: "../img/plants/aloeVera1.webp",
      imgSrc1: "../img/plants/aloeVera1.webp",
      imgSrc2: "../img/plants/aloeVera2.webp",
      id: uniqid(),
    },
    {
      name: "Ceropegia woodii",
      price: "32,00",
      currentImgSrc: "../img/plants/ceropegia1.webp",
      imgSrc1: "../img/plants/ceropegia1.webp",
      imgSrc2: "../img/plants/ceropegia2.webp",
      id: uniqid(),
    },
    {
      name: "Epipremnum 'Marble Queen'",
      price: "32,00",
      currentImgSrc: "../img/plants/epiMarble1.webp",
      imgSrc1: "../img/plants/epiMarble1.webp",
      imgSrc2: "../img/plants/epiMarble2.webp",
      id: uniqid(),
    },
    {
      name: "Maranta 'Lemon Lime'",
      price: "79,00",
      currentImgSrc: "../img/plants/maranta1.webp",
      imgSrc1: "../img/plants/maranta1.webp",
      imgSrc2: "../img/plants/maranta2.webp",
      id: uniqid(),
    },
    {
      name: "Zamioculcas zamiifolia",
      price: "89,00",
      currentImgSrc: "../img/plants/zamio1.webp",
      imgSrc1: "../img/plants/zamio1.webp",
      imgSrc2: "../img/plants/zamio2.webp",
      id: uniqid(),
    },
    {
      name: "Ficus lyrata",
      price: "790,00",
      currentImgSrc: "../img/plants/ficus1.webp",
      imgSrc1: "../img/plants/ficus1.webp",
      imgSrc2: "../img/plants/ficus2.webp",
      id: uniqid(),
    },
    {
      name: "Monstera deliciosa",
      price: "399,00",
      currentImgSrc: "../img/plants/monstera1.webp",
      imgSrc1: "../img/plants/monstera1.webp",
      imgSrc2: "../img/plants/monstera2.webp",
      id: uniqid(),
    },
    {
      name: "Philodendron 'Birkin'",
      price: "49,00",
      currentImgSrc: "../img/plants/philo1.webp",
      imgSrc1: "../img/plants/philo1.webp",
      imgSrc2: "../img/plants/philo2.webp",
      id: uniqid(),
    },
    {
      name: "Strelitzia nicolai",
      price: "39,00",
      currentImgSrc: "../img/plants/strel1.webp",
      imgSrc1: "../img/plants/strel1.webp",
      imgSrc2: "../img/plants/strel2.webp",
      id: uniqid(),
    },
    {
      name: "Beaucarnea recurvata",
      price: "289,00",
      currentImgSrc: "../img/plants/beau1.webp",
      imgSrc1: "../img/plants/beau1.webp",
      imgSrc2: "../img/plants/beau2.webp",
      id: uniqid(),
    },
    {
      name: "Olea europea",
      price: "159,00",
      currentImgSrc: "../img/plants/olea1.webp",
      imgSrc1: "../img/plants/olea1.webp",
      imgSrc2: "../img/plants/olea2.webp",
      id: uniqid(),
    },
    {
      name: "Washingtonia robusta",
      price: "1 850,00",
      currentImgSrc: "../img/plants/wash1.webp",
      imgSrc1: "../img/plants/wash1.webp",
      imgSrc2: "../img/plants/wash2.webp",
      id: uniqid(),
    },
  ]);
  const [plantsInCart, setPlantsInCard] = useState([]);

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
    handleCartIconChange(plantsInCart.length);
  };

  const handleCartIconChange = (items) => {
    const shoppingCartIcon = document.querySelector(".shoppingCartIcon");
    const plantsInCartElement = document.querySelector(".shoppingCartQuantity");
    if (!plantsInCartElement) {
      const plantsInCartElement = document.createElement("div");
      plantsInCartElement.classList.add("shoppingCartQuantity");
      shoppingCartIcon.appendChild(plantsInCartElement);
      plantsInCartElement.innerText = 1;
    } else {
      plantsInCartElement.innerText = items + 1;
    }
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
    </>
  );
}
