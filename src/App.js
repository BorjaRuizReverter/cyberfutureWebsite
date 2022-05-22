import React from "react";
import BG from "./images/BG.svg";
import Titulo from "./title.js";
import SubTitulo from "./subtitle.js";
import "./App.css";
import PrimaryButtons from "./images/PrimaryButtons.png";

function App() {
  return (
    <>
      <div className="stars">
        <div className="twinkling">
          <Titulo />
          <SubTitulo />
          <div className="codebox">
            <pre>
              <code className="language-javascript">
                <span className="import-color">import </span>
                <span>&#65115;</span>
                <span className="imported-components-color">Button</span>
                <span>,</span>
                <span className="imported-components-color">Card</span>
                <span>&#65116;</span>
                <span className="import-color">from </span>
                <span>'Cyberfuture'</span>
                <br></br><br></br>
                <span >&lt;</span>
                <span className="components-color">Button </span>
                <span className="props-color">text</span>
                <span>='Button' </span>
                <span className="props-color">variant</span>
                <span>='Matrix' </span>
                <span className="props-color">color</span>
                <span>='Gold'</span>
                <span >/</span>
                <span >&gt;</span>
                <br></br>
                <span >&lt;</span>
                <span className="components-color">Button </span>
                <span className="props-color">text</span>
                <span>='Button' </span>
                <span className="props-color">variant</span>
                <span>='OutlinedCyberRose' </span>
                <span className="props-color">color</span>
                <span>='Matrix'</span>
                <span >/</span>
                <span >&gt;</span>
                <br></br>
                <span >&lt;</span>
                <span className="components-color">Card </span>
                <span className="props-color">variant</span>
                <span>='Matrix' </span>
                <span className="props-color">title</span>
                <span>='Card Title' </span>
                <span className="props-color">variant</span>
                <span>='Matrix'</span>
                <span >/</span>
                <span >&gt;</span>
              </code>
            </pre>
          </div>
          <div className="paragraph">
          <h2>You can use CyberFuture`s custom styles for give some action to
              your boring components.</h2>
          </div>
          <div className="paragraph">
            <p>
            
            </p>
          </div>
          <div className="paragraph">
          <h1>Buttons</h1>
              <h2>Primary buttons</h2>
          </div>
          <div className="paragraph">
          </div>
          <div className="paragraph">
            <img src={PrimaryButtons} alt="PrimaryButtons" width='100%'/>
          </div>
          <div className="codebox2">
            <pre>
              <code className="language-javascript">
                <span className="import-color">import </span>
                <span>&#65115;</span>
                <span className="imported-components-color">Button</span>
                <span>,</span>
                <span className="imported-components-color">Card</span>
                <span>&#65116;</span>
                <span className="import-color">from </span>
                <span>'Cyberfuture'</span>
                <br></br><br></br>
                <span >&lt;</span>
                <span className="components-color">Button </span>
                <span className="props-color">text</span>
                <span>='ENABLED' </span>
                <span className="props-color">variant</span>
                <span>='Punk' </span>
                <span >/</span>
                <span >&gt;</span>
                <br></br>
                <span >&lt;</span>
                <span className="components-color">Button </span>
                <span className="props-color">text</span>
                <span>='ENABLED' </span>
                <span className="props-color">variant</span>
                <span>='Rose' </span>
                <span >/</span>
                <span >&gt;</span>
                <br></br>
                <span >&lt;</span>
                <span className="components-color">Button </span>
                <span className="props-color">text</span>
                <span>='ENABLED' </span>
                <span className="props-color">variant</span>
                <span>='OutlinedCyberSly' </span>
                <span >/</span>
                <span >&gt;</span>
                <br></br>
                <span >&lt;</span>
                <span className="components-color">Button </span>
                <span className="props-color">text</span>
                <span>='ENABLED' </span>
                <span className="props-color">variant</span>
                <span>='Gold' </span>
                <span >/</span>
                <span >&gt;</span>
                <br></br>
                <span >&lt;</span>
                <span className="components-color">Button </span>
                <span className="props-color">text</span>
                <span>='ENABLED' </span>
                <span className="props-color">variant</span>
                <span>='Matrix' </span>
                <span >/</span>
                <span >&gt;</span>
                <br></br>
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
