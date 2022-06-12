import React from "react";

const styles = {
  marginTop: '2%'
}

const Codebox1 = () => {
  return (
    <div className="codebox" style={styles}>
      <pre>
        <code className="language-javascript">
          <span className="import-color">import </span>
          <span>&#65115;</span>
          <span className="components-color">Button</span>
          <span>, </span>
          <span className="components-color">Card</span>
          <span>&#65116;</span>
          <span className="import-color">from </span>
          <span>'Cyberfuture'</span>
          <br></br>
          <br></br>
          <span>&lt;</span>
          <span className="components-color">Button </span>
          <span className="props-color">text</span>
          <span>='Button' </span>
          <span className="props-color">variant</span>
          <span>='Matrix' </span>
          <span>/</span>
          <span>&gt;</span>
          <br></br>
          <span>&lt;</span>
          <span className="components-color">Card </span>
          <span className="props-color">title</span>
          <span>='Card Title' </span>
          <span className="props-color">variant</span>
          <span>='Cyber' </span>
          <span>/</span>
          <span>&gt;</span>
        </code>
      </pre>
    </div>
  );
};

export default Codebox1;
