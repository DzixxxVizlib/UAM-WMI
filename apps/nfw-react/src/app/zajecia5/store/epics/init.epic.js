import { ofType } from 'redux-observable';
import { map } from 'rxjs/operators';

import * as pizzaAT from '../data/pizza/pizza.action-types';
import * as ingredientAT from '../data/ingredient/ingredient.action-types';

export const epic = action$ => action$.pipe(
  ofType(pizzaAT.FETCH_PIZZAS, ingredientAT.FETCH_INGREDIENTS),
  map((action) => {

    /*
    
    do U remember that one from useEffect? 
    
    fetch('http://localhost:3333/api/pizza')
      .then(r => r.json())
      .then(pizzas => setPizzas(pizzas))

    */
      
    return { type: 'smth' }; // will explain later!
  })
);