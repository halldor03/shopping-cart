import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Shop from "./components/Shop";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import uniqid from "uniqid";
import "./styles.css";

function App() {
  const [plants, setPlants] = useState([
    {
      name: "Aloe vera",
      price: 25,
      currentImgSrc: "../img/plants/aloeVera1.webp",
      imgSrc1: "../img/plants/aloeVera1.webp",
      imgSrc2: "../img/plants/aloeVera2.webp",
      id: uniqid(),
      quantity: 1,
    },
    {
      name: "Ceropegia woodii",
      price: 32,
      currentImgSrc: "../img/plants/ceropegia1.webp",
      imgSrc1: "../img/plants/ceropegia1.webp",
      imgSrc2: "../img/plants/ceropegia2.webp",
      id: uniqid(),
      quantity: 1,
    },
    {
      name: "Epipremnum 'Marble Queen'",
      price: 32,
      currentImgSrc: "../img/plants/epiMarble1.webp",
      imgSrc1: "../img/plants/epiMarble1.webp",
      imgSrc2: "../img/plants/epiMarble2.webp",
      id: uniqid(),
      quantity: 1,
    },
    {
      name: "Maranta 'Lemon Lime'",
      price: 79,
      currentImgSrc: "../img/plants/maranta1.webp",
      imgSrc1: "../img/plants/maranta1.webp",
      imgSrc2: "../img/plants/maranta2.webp",
      id: uniqid(),
      quantity: 1,
    },
    {
      name: "Zamioculcas zamiifolia",
      price: 89,
      currentImgSrc: "../img/plants/zamio1.webp",
      imgSrc1: "../img/plants/zamio1.webp",
      imgSrc2: "../img/plants/zamio2.webp",
      id: uniqid(),
      quantity: 1,
    },
    {
      name: "Ficus lyrata",
      price: 790,
      currentImgSrc: "../img/plants/ficus1.webp",
      imgSrc1: "../img/plants/ficus1.webp",
      imgSrc2: "../img/plants/ficus2.webp",
      id: uniqid(),
      quantity: 1,
    },
    {
      name: "Monstera deliciosa",
      price: 399,
      currentImgSrc: "../img/plants/monstera1.webp",
      imgSrc1: "../img/plants/monstera1.webp",
      imgSrc2: "../img/plants/monstera2.webp",
      id: uniqid(),
      quantity: 1,
    },
    {
      name: "Philodendron 'Birkin'",
      price: 49,
      currentImgSrc: "../img/plants/philo1.webp",
      imgSrc1: "../img/plants/philo1.webp",
      imgSrc2: "../img/plants/philo2.webp",
      id: uniqid(),
      quantity: 1,
    },
    {
      name: "Strelitzia nicolai",
      price: 39,
      currentImgSrc: "../img/plants/strel1.webp",
      imgSrc1: "../img/plants/strel1.webp",
      imgSrc2: "../img/plants/strel2.webp",
      id: uniqid(),
      quantity: 1,
    },
    {
      name: "Beaucarnea recurvata",
      price: 289,
      currentImgSrc: "../img/plants/beau1.webp",
      imgSrc1: "../img/plants/beau1.webp",
      imgSrc2: "../img/plants/beau2.webp",
      id: uniqid(),
      quantity: 1,
    },
    {
      name: "Olea europea",
      price: 159,
      currentImgSrc: "../img/plants/olea1.webp",
      imgSrc1: "../img/plants/olea1.webp",
      imgSrc2: "../img/plants/olea2.webp",
      id: uniqid(),
      quantity: 1,
    },
    {
      name: "Washingtonia robusta",
      price: 1850,
      currentImgSrc: "../img/plants/wash1.webp",
      imgSrc1: "../img/plants/wash1.webp",
      imgSrc2: "../img/plants/wash2.webp",
      id: uniqid(),
      quantity: 1,
    },
  ]);
  const [plantsInCart, setPlantsInCart] = useState([]);

  return (
    <>
      <nav>
        <Navbar plantsInCart={plantsInCart} />
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/shop"
            element={
              <Shop
                plants={plants}
                setPlants={setPlants}
                plantsInCart={plantsInCart}
                setPlantsInCart={setPlantsInCart}
              />
            }
          />
        </Routes>
        <Cart plantsInCart={plantsInCart} setPlantsInCart={setPlantsInCart} />
      </main>
      <footer>Copyright &copy; Kacper Szulc 2022</footer>
    </>
  );
}

export default App;
