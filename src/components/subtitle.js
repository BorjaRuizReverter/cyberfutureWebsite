import '../App.css'

import React from 'react';

const text = 'CYBERFUTURECOMPONENTS'


const SubTitulo = () => (
  <>
    <div className="subtitle-box">
      <span data-text={text} className="subtitle-text">{text}</span>
    </div>
  </>
);

export default SubTitulo;
