import React from "react";
import CodeEditor from '@uiw/react-textarea-code-editor';

import {Textbox, text} from "./textbox.js";
import texto from "./texto.js";

function Codeboxtest() {
  // const [text, setCode] = React.useState(texto);
  return (
    <>
    <CodeEditor
      value={texto}
      language="js"
      placeholder="Please enter JS code."
      // onChange={(event) => setCode(event.target.value)}
      style={{
        fontSize: 20,
        margin: 'auto',
        width: '70%'
      }}
    />
    {/* <div>
      <h1>{Textbox}</h1>
    </div> */}
    </>
  );
}

export default Codeboxtest;
