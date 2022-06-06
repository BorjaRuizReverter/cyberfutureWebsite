import React from 'react';

import texto from './texto';

// export const text = () => {
//     return (
//         `import {Button,Card﹜from 'Cyberfuture'\n
// <Button outline text="BUTTON" variant="Matrix" color="matrix" />
// <Button text="BUTTON" variant="OutlinedCyberRose" type="outlined"/>
// <Button text="BUTTON" variant="Rose" />
// <Button text="BUTTON" variant="Punk" />
// <Button text="BUTTON" variant="Gold" />
// <Button text="BUTTON" variant="OutlinedCyberSly" />`
//     );
// }

// const texto = 'import {Button,Card﹜from \'Cyberfuture\'\n<Button outline text="BUTTON" variant="Matrix" color="matrix" /><Button text="BUTTON" variant="OutlinedCyberRose" type="outlined"/><Button text="BUTTON" variant="Rose" /><Button text="BUTTON" variant="Punk" /><Button text="BUTTON" variant="Gold" /><Button text="BUTTON" variant="OutlinedCyberSly" />'

export function Textbox() {
    const [text, setCode] = React.useState(texto);

  return (
      <h1
       value={text}
       onChange={(event) => setCode(event.target.value)}
       >
        {text}
      </h1>
  )
}
