import { useState } from "react";
import "./App.css";

import Header from "./componentes/header/Header.jsx";
import Banner from "./componentes/banner/Banner.jsx";
import TextWithImage from "./componentes/textWithImage/textWithImage.jsx";
import FeaturedProducts from "./componentes/featuredProducts/FeaturedProducts.jsx";

import webbestcoffee from "./assets/DiscoverTheBestCoffee.png";
import Cappuccino from "./assets/Cappuccino.png";
import ChaiLatte from "./assets/ChaiLatte.png";
import macchiato from "./assets/Macchiato.png";
import Expresso from "./assets/Expresso.png";

import supremeBeans from "./assets/supremeBeans.png";
import highQuality from "./assets/highQuality.png";
import extraodinary from "./assets/Extraordinary.png";
import offordable from "./assets/offordable.png";

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
    imageMaxWidth: "full",
    products: [
      {
        id: 1,
        title: "Cappuccino",
        description: "Coffee 50% | Milk 50%",
        price: "$8.50",
        imageSrc: Cappuccino,
        imageAlt: "Cappuccino",
        url: "#products_cappuccino",
      },
      {
        id: 2,
        title: "Chai Latte",
        description: "Coffee 50% | Milk 50%",
        price: "$8.50",
        imageSrc: ChaiLatte,
        imageAlt: "Chai Latte",
        url: "#products_chai-latte",
      },
      {
        id: 3,
        title: "Macchiato",
        description: "Coffee 50% | Milk 50%",
        price: "$8.50",
        imageSrc: macchiato,
        imageAlt: "Macchiato",
        url: "#products_macchiato",
      },
      {
        id: 4,
        title: "Expresso",
        description: "Coffee 50% | Milk 50%",
        price: "$8.50",
        imageSrc: Expresso,
        imageAlt: "Expresso",
        url: "#products_expresso",
      },
    ],
  };

  const whyAreWeDifferent = {
    sectionId: "section_id_home_05", // Unique ID for the section element
    sectionTitle: "Why are we different?", // Title displayed at the top of the section
    sectionDescription: "We don’t just make your coffee, we make your day!", // Description text displayed under the title
    imageMaxWidth: 88, // Maximum width for product images (number divides by 4 for tailwind, string used directly)
    products: [
      // Array of product objects to display
      {
        id: 1, // Unique identifier for each product
        imageSrc: supremeBeans, // URL for the product image
        imageAlt: "Supreme Beans", // Alt text for the product image
        title: "Supreme Beans", // Product title
        description: "Beans that provides great taste", // Product description
      },
      {
        id: 2, // Unique identifier for each product
        imageSrc: highQuality, // URL for the product image
        imageAlt: "High Quality", // Alt text for the product image
        title: "High Quality", // Product title
        description: "We provide the highest quality", // Product description
      },
      {
        id: 3, // Unique identifier for each product
        imageSrc: extraodinary, // URL for the product image
        imageAlt: "Extraordinary", // Alt text for the product image
        title: "Extraordinary ", // Product title
        description: "We provide the highest quality", // Product description
      },
      {
        id: 4, // Unique identifier for each product
        imageSrc: offordable, // URL for the product image
        imageAlt: "Affordable Price", // Alt text for the product image
        title: "Affordable Price", // Product title
        description: "Our Coffee prices are easy to afford", // Product description
      },
    ],
    bottomContent: {
      // Additional content displayed at the bottom of the section
      heading: "Get started today.", // Heading for the bottom content section
      text: "Great ideas start with great coffee, Lets help you achieve that", // Description text for the bottom content section
      btnText: "Join Us", // Text for the button in the bottom content section
      btnLink: "#Join_Us", // URL for the button in the bottom content section
    },
  };
  return (
    <>
      <Header />
      <Banner />
      <TextWithImage {...section_id_home_03} />
      <FeaturedProducts {...featuredProducts} />
      <FeaturedProducts {...whyAreWeDifferent} />
    </>
  );
}

export default App;
