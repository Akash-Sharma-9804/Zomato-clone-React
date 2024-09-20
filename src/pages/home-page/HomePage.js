import React, { useState } from "react";
import Header from "../../components/common/Header/Header";
import TabOpt from "../../components/common/tabOpt/TabOpt.js";
import Footer from "../../components/common/Footer/Footer.js";
import Delivery from "../../components/delivery/Delivery.js";
import NightLife from "../../components/night life/NightLife.js";
import DiningOut from "../../components/Dining-out/DiningOut.js";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <>
      <Header></Header>
      <TabOpt activeTab={activeTab} setActiveTab={setActiveTab}></TabOpt>
      {getCorrectScreen(activeTab)}
      <Footer></Footer>
    </>
  );
};

const getCorrectScreen = (tab) => {
  switch (tab) {
    case "Delivery":
      return < Delivery> </Delivery>;
    case "Dining Out":
      return <DiningOut></DiningOut>;
    case "Night Life":
      return <NightLife></NightLife>;
    default:
      return < Delivery> </Delivery>;
  }
};

export default HomePage;
