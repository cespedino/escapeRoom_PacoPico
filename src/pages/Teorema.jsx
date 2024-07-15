import React from 'react';

function Teorema() {
  return (
    <div className='pag-principales' id="inicio">
      <h1>El teorema de Paco Pico</h1>
      <p>Sea X un espacio topológico discreto tal que se verifican las siguientes propiedades: <br />
          •	Existe al menos un fifa shiny. <br />
          •	El número de potaxies y swifties es mayor o igual al número de fifas. <br />
          •	Haya tensión sexual entre algunos elementos, pero no pase de ahí. <br />
          •	No haya relaciones simétricas entre los elementos.<br />
        Entonces, se forma la secta de Paco Pico. <br />
        A partir de aquí vuestro trabajo va a ser demostrar este teorema e ir avanzando por definiciones, lemas y proposiciones que os terminarán llevando al Teorema
        Fundamental de Paco Pico. <br />
      </p>
      <p>Esperemos que te guste, se ha hecho con mucho cariño y con el fin de que lo disfrutes al máximo.</p>
      <button className='custom-botton' onClick={() => alert('Botón personalizado clickeado!')}>
        Siguiente Nivel
      </button>
    </div>
  );
}

export default Teorema;