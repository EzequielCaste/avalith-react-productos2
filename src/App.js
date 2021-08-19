import { React, useEffect, useState } from 'react';
import { Catalogo } from './components/Catalogo';
import Form from './components/Form';

function App() {
  const [productos, setProductos] = useState(null);
  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setProductos(json));
  },[]);

  return (
    <div className="App">
      <h1>Productos</h1>
      <a href="#form">Ir al formulario</a>
      {
        productos 
        ? <Catalogo productos={productos} />
        : <h2>Loading...</h2>
      }      
      <Form agregar={setProductos} />
    </div>
  );
}

export default App;
