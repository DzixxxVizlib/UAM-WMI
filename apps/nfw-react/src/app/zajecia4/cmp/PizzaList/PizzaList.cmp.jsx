import React from 'react';
import { PizzaItem } from '../PizzaItem';

export const PizzaList = props => {
  return (
    <ul>
      {props.pizzas.map(pizza => <PizzaItem key={pizza.id} pizza={pizza} />)}
    </ul>
  )
}