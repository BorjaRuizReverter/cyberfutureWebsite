import React from "react";
import BG from "./images/BG.svg";
import Titulo from "./title.jsx";
import SubTitulo from "./subtitle.jsx";
import "./App.css";

function App() {
  return (
    <>
      <div class="stars">
        <div class="twinkling">
          <Titulo />
          <SubTitulo />
          <div className="Ground">
            <img src={BG} alt="Ground" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
