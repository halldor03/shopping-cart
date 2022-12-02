import React from "react";
import uniqid from "uniqid";

export default function Shop() {
  const plants = [
    {
      name: "Aloe vera",
      class: "aloeVera",
      price: "25,00",
      imgSrc1: "../img/plants/aloeVera1.webp",
      imgSrc2: "../img/plants/aloeVera2.webp",
      id: uniqid(),
    },
    {
      name: "Ceropegia woodii",
      class: "ceropegiaWoodii",
      price: "32,00",
      imgSrc1: "../img/plants/ceropegia1.webp",
      imgSrc2: "../img/plants/ceropegia2.webp",
      id: uniqid(),
    },
    {
      name: "Epipremnum 'Marble Queen'",
      class: "epipremnumMarbleQueen",
      price: "32,00",
      imgSrc1: "../img/plants/epiMarble1.webp",
      imgSrc2: "../img/plants/epiMarble2.webp",
      id: uniqid(),
    },
    {
      name: "Maranta 'Lemon Lime'",
      class: "marantaLemonLime",
      price: "79,00",
      imgSrc1: "../img/plants/maranta1.webp",
      imgSrc2: "../img/plants/maranta2.webp",
      id: uniqid(),
    },
    {
      name: "Zamioculcas zamiifolia",
      class: "zamioculcasZamiifolia",
      price: "89,00",
      imgSrc1: "../img/plants/zamio1.webp",
      imgSrc2: "../img/plants/zamio2.webp",
      id: uniqid(),
    },
    {
      name: "Ficus lyrata",
      class: "ficusLyrata",
      price: "790,00",
      imgSrc1: "../img/plants/ficus1.webp",
      imgSrc2: "../img/plants/ficus2.webp",
      id: uniqid(),
    },
    {
      name: "Monstera deliciosa",
      class: "monsteraDeliciosa",
      price: "399,00",
      imgSrc1: "../img/plants/monstera1.webp",
      imgSrc2: "../img/plants/monstera2.webp",
      id: uniqid(),
    },
    {
      name: "Philodendron 'Birkin'",
      class: "philodendronBirkin",
      price: "49,00",
      imgSrc1: "../img/plants/philo1.webp",
      imgSrc2: "../img/plants/philo2.webp",
      id: uniqid(),
    },
    {
      name: "Strelitzia nicolai",
      class: "strelitziaNicolai",
      price: "39,00",
      imgSrc1: "../img/plants/strel1.webp",
      imgSrc2: "../img/plants/strel2.webp",
      id: uniqid(),
    },
    {
      name: "Beaucarnea recurvata",
      class: "beaucarneaRecurvata",
      price: "289,00",
      imgSrc1: "../img/plants/beau1.webp",
      imgSrc2: "../img/plants/beau2.webp",
      id: uniqid(),
    },
    {
      name: "Olea europea",
      class: "oleaEuropea",
      price: "159,00",
      imgSrc1: "../img/plants/olea1.webp",
      imgSrc2: "../img/plants/olea2.webp",
      id: uniqid(),
    },
    {
      name: "Washingtonia robusta",
      class: "washingtoniaEobusta",
      price: "1 850,00",
      imgSrc1: "../img/plants/wash1.webp",
      imgSrc2: "../img/plants/wash2.webp",
      id: uniqid(),
    },
  ];
  return (
    <div className="shopContainer">
      {plants.map((plant) => {
        return (
          <div className={plant.class} key={plant.id}>
            <img className="plantPhoto" src={plant.imgSrc1} alt={plant.name} />
            <div className="plantName">{plant.name}</div>
            <div className="plantPrice">{plant.price} PLN</div>
          </div>
        );
      })}
    </div>
  );
}
