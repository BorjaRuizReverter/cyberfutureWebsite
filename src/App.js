import React from "react";
import BG from "./images/BG.svg";
import "./App.css";
import { TitleSvg } from "./images/titlesvg.jsx";
import Titulo from "./parallaxtitle.jsx";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <>
    <div class="stars">
      <div class="twinkling">
        <ParallaxProvider>
          <Titulo />
        </ParallaxProvider>
        <div className="Ground">
          <img src={BG} alt="Ground" />
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
