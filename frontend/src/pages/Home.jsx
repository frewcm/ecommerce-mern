import React from "react";
import Ad1 from "../components/Ad1";
import Ad3 from "../components/Ad3";
import Intro from "../components/Intro";
import Main from "../components/Main";

function Home() {
  return (
    <div className="snap-y snap-mandatory overflow-auto">
      <Intro />
      <Ad1 />
      <Main />
      <Ad3 />
    </div>
  );
}

export default Home;
