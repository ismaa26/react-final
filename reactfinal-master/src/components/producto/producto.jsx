import React from 'react';
import vicera from '../../multimedia/gorra.png';

function Producto() {
  // Define the pagar function
  const pagar = () => {
    // Implement the functionality you want when the button is clicked
    console.log('Ir a Pagar clicked');
    // You can add more logic here, like redirecting to a payment page or performing some other action
  };

  return (
    <div className="producto">
      <img src={vicera} height="150px" width="20%" alt="gorrita" />
      <h3>Producto 1</h3>
      <p>Precio: $20.00</p>
      <p>Descripción: Este es un producto de ejemplo.</p>
      {/* Use the pagar function in the onClick handler */}
      <button className="boton4" onClick={pagar}>
        Ir a Pagar
      </button>
    </div>
  );
}

export default Producto;
