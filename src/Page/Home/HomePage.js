import React from "react";
import Starter from "../../Components/UI/Starter";
import HomeComponent from "../../Components/Home/HomeComponent.jsx";
import HomePageHook from "../../hook/home/home-page-hook";

const HomePage = () => {
  const [cases, loadingCase, sessions, loadingSession] = HomePageHook();
  return (
    <Starter>
      <HomeComponent cases={cases} loadingCase={loadingCase} sessions={sessions} loadingSession={loadingSession} />
    </Starter>
  );
};

export default HomePage;
