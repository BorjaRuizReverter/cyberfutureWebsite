import React from "react";
import BG from "./images/BG.svg";
import Titulo from "./title.js";
import SubTitulo from "./subtitle.js";
import "./App.css";

function App() {
  return (
    <>
      <div className="stars">
        <div className="twinkling">
          <Titulo />
          <SubTitulo />
          <pre className=" language-javascript">
            <code className=" language-javascript"><span className="token keyword">import</span> 
            </code>
          </pre>
          <div className="Ground">
            <img src={BG} alt="Ground" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
