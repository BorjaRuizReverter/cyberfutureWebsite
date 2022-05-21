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
          <div className="codebox">
            <pre className="language-javascript">
              <code className="language-javascript">
                <span className="import-color">import </span>
                <span>&#10100;</span>
                <span className="components-color">Button</span>
                <span>,</span>
                <span className="components-color">Card</span>
                <span>&#10101; </span>
                <span className="import-color">from </span>
                <span>'Cyberfuture'</span>
                <br></br>
                <br></br>
                <span className="import-color">return </span>
              </code>
            </pre>
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
