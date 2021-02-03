import React from 'react';
import { SauceItem } from '../SauceItem';

export const SauceList = ({ props }) => {
  return (
    <ul className="menu__list menu__list--sauce">
      {props.saucesAllIds.map((id) => (
        <SauceItem
          sauce={props.saucesById[id]}
          key={id}
          addSauce={props.addSauceToCart}
        />
      ))}
    </ul>
  );
};
