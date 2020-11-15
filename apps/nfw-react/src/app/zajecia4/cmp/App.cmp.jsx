import React, { useEffect, useState } from 'react';
import { PizzaList } from './PizzaList.cmp';

export const App = props => {
  const [pizzas, setPizzas] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3333/api/pizza')
      .then(r => r.json())
      .then(pizzas => setPizzas(pizzas))
  }, []);

  return <PizzaList pizzas={pizzas} />;
}