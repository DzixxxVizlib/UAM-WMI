import React from 'react';
import { PizzaItem } from './PizzaItem.cmp';

export const PizzaList = props => {
  return (
    <ul>
      {props.pizzas.map(pizza => <PizzaItem pizza={pizza} />)}
    </ul>
  )
}