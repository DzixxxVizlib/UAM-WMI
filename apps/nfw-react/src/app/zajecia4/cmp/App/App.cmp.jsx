import React, { useEffect, useState } from 'react';
import { PizzaList } from '../PizzaList';

const App = props => {
  const [pizzas, setPizzas] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3333/api/pizza')
      .then(r => r.json())
      .then(pizzas => setPizzas(pizzas))
  }, []);

  return (
    <>
      <PizzaList pizzas={pizzas} />
      <button onClick={props.modifyA}>ModifyA</button>
      <button onClick={() => props.modifyC(9)}>ModifyC</button>
      <p>A: {props.fieldA}, C: {props.fieldC}</p>
    </>
  )
}

export default App;