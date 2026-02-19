import React, { useState, useEffect } from 'react';
import ProductCard from './components/ProductCard';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        console.error("Ошибка загрузки товаров:", error);
      });
  }, []);

  return (
    <div className="app">
      <header className="header">
        <h1>НАСТОЛЬНЫЕ ИГРЫ</h1>
        <p>Минималистичный каталог для настоящих игроков</p>
      </header>
      <div className="products-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;