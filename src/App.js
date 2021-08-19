import { React, useEffect, useState } from 'react';
import { Catalogo } from './components/Catalogo';

function App() {
  const [productos, setProductos] = useState(null);
  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setProductos(json));
  });

  return (
    <div className="App">
      <h1>Productos</h1>
      {
        productos 
        ? <Catalogo productos={productos} />
        : <h2>Loading...</h2>
      }      
    </div>
  );
}

export default App;
