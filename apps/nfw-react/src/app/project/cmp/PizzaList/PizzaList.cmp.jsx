import React from 'react';
import { PizzaItem } from '../PizzaItem';

export const PizzaList = ({ props }) => {
  return (
    <ul className="menu__list menu__list--pizza">
      {props.pizzasAllIds.map((id) => (
        <PizzaItem key={id} pizza={props.pizzasById[id]} props={props} />
      ))}
    </ul>
  );
};
