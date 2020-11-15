import React from 'react';

export const PizzaItem = ({ pizza }) => {
  return (
    <li key={pizza.id}>Pizza: {pizza.name}, {pizza.price}$</li>
  )
}