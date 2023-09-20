import React from 'react';
import vicera from '../../multimedia/gorra.png'
import {Link} from 'react-router-dom'

function Producto({product: product}) {
  return (productos.map(item => {

  })
    <div className="producto">
      <img src={vicera} height="150px" width="20%" alt="gorrita" />
      <h3>Producto 1</h3>
      <p>Precio: $20.00</p>
      <p>Descripción: Este es un producto de ejemplo.</p>
      <button className='boton12'>
        <Carrito product={item} />
        
        <Link to="/carrito">Agregar al carrito</Link></button>
    </div>
  );
}

export default Producto;
