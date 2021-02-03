import React from 'react';

import { Nav } from '../Nav';
import { PizzaList } from '../PizzaList';
import { SauceList } from '../SauceList';

export const Menu = ({ props }) => {
  return (
    <>
      <Nav />
      <div className="menu">
        <h1 className="menu__heading menu__heading--pizza">Pizza</h1>
        <PizzaList props={props} />
        <h1 className="menu__heading menu__heading--sauce">Sauce</h1>
        <SauceList props={props} />
      </div>
    </>
  );
};
