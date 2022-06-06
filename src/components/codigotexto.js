import React from "react";
import { highlight, languages } from 'prismjs'
import CodeEditor from '@uiw/react-textarea-code-editor';
import {refractor} from 'refractor'

export const codetest = () => {
    return (
        `import ﹛Button,Card﹜from 'Cyberfuture'\n
    <Button outline text="BUTTON" variant="Matrix" color="matrix" />
    <Button text="BUTTON" variant="OutlinedCyberRose" type="outlined"/>
    <Button text="BUTTON" variant="Rose" />
    <Button text="BUTTON" variant="Punk" />
    <Button text="BUTTON" variant="Gold" />
    <Button text="BUTTON" variant="OutlinedCyberSly" />`
    );
}


function Codetexto() {
  const [code, setCode] = React.useState(
    codetest
  );
  return (
    <>
    <CodeEditor 
      value={code}
      language="js"
      placeholder="Please enter JS code."
      onChange={(evn) => setCode(evn.target.value)}
      style={{
        fontSize: 20,
        margin: 'auto',
        width: '70%'
      }}
    />
    <div>
      <h1>{code}</h1>
    </div>
    </>
  );
}

export default Codetexto;
