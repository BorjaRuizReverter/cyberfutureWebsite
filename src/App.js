import React from "react";
import BG from "./images/BG.svg";
import "./App.css";
import { TitleSvg } from "./images/titlesvg.jsx";
import SubTitulo from "./parallaxsubtitle.jsx";
import { ParallaxProvider } from "react-scroll-parallax";
import Titulo from "./title.jsx";

function App() {
  return (
    <>
    <div class="stars">
      <div class="twinkling">
        {/* <ParallaxProvider>
          <Titulo />
        </ParallaxProvider> */}
        <Titulo />
        <SubTitulo />
        <div className="CodeContainer">

        </div>
        <div className="Ground">
          <img src={BG} alt="Ground" />
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
