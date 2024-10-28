import { useState } from "react";
import "./App.css";

import Header from "./componentes/header/Header.jsx";
import Banner from "./componentes/banner/Banner.jsx";
import TextWithImage from "./componentes/textWithImage/textWithImage.jsx";
import FeaturedProducts from "./componentes/featuredProducts/FeaturedProducts.jsx";

import webbestcoffee from "./assets/DiscoverTheBestCoffee.png";
import Cappuccino from "./assets/Cappuccino.png";
import ChaiLatte from "./assets/ChaiLatte.png";
import macchiato from "./assets/macchiato.png";
import Expresso from "./assets/Expresso.png";

function App() {
  const section_id_home_03 = {
    sectionId: "section_id_home_03",
    title: "Discover The Best Coffee",
    description: `Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity and helps build your mood. Having a cup of coffee is good, but having a cup of real coffee is greater. There is no doubt that you will enjoy this coffee more than others you have ever tasted.`,
    btnText: "Learn more",
    btnURL: "#section_id_home_03",
    webImage: webbestcoffee,
    webImageAlt: "Discover The Best Coffee",
    mobileImage: webbestcoffee,
    mobileImageAlt: "Discover The Best Coffee",
    isLeft: true,
  };
  const featuredProducts = {
    sectionId: "section_id_home_04",
    sectionTitle: "Enjoy a new blend of coffee style",
    sectionDescription:
      "Explore all flavours of coffee with us. There is always a new cup worth experiencing.",
    btn_text: "Order Now",
    products: [
      {
        id: 1,
        title: "Cappuccino",
        description: "Coffee 50% | Milk 50%",
        price: "$8.50",
        imageSrc: Cappuccino,
        url: "#products_cappuccino",
      },
      {
        id: 2,
        title: "Chai Latte",
        description: "Coffee 50% | Milk 50%",
        price: "$8.50",
        imageSrc: ChaiLatte,
        url: "#products_chai-latte",
      },
      {
        id: 3,
        title: "Macchiato",
        description: "Coffee 50% | Milk 50%",
        price: "$8.50",
        imageSrc: macchiato,
        url: "#products_macchiato",
      },
      {
        id: 4,
        title: "Expresso",
        description: "Coffee 50% | Milk 50%",
        price: "$8.50",
        imageSrc: Expresso,
        url: "#products_expresso",
      },
    ],
  };
  return (
    <>
      <Header />
      <Banner />
      <TextWithImage {...section_id_home_03} />
      <FeaturedProducts {...featuredProducts} />
    </>
  );
}

export default App;
