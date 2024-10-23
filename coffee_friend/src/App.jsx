import { useState } from "react";
import "./App.css";
import Header from "./componentes/header/Header.jsx";
import Banner from "./componentes/banner/Banner.jsx";
import TextWithImage from "./componentes/textWithImage/textWithImage.jsx";
import webbestcoffee from "./assets/DiscoverTheBestCoffee.png";

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
  return (
    <>
      <Header />
      <Banner />
      <TextWithImage {...section_id_home_03} />
    </>
  );
}

export default App;
