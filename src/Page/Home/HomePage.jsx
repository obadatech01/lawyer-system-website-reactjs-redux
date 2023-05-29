import React from "react";
import Starter from "../../Components/UI/Starter";
import HomeComponent from "../../Components/Home/HomeComponent.jsx";
import HomePageHook from "../../hook/home/home-page-hook";

const HomePage = () => {
  const [data, loading] = HomePageHook();
  return (
    <Starter>
      <HomeComponent data={data} loading={loading} />
    </Starter>
  );
};

export default HomePage;
