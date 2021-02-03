import * as orderAT from './order.action-types';

export const addPizza = (value) => ({
  type: orderAT.ADD_PIZZA,
  payload: value,
});

export const addSauce = (value) => ({
  type: orderAT.ADD_SAUCE,
  payload: value,
});

export const deletePizza = (value) => ({
  type: orderAT.DELETE_PIZZA,
  payload: value,
});

export const deleteSauce = (value) => ({
  type: orderAT.DELETE_SAUCE,
  payload: value,
});

export const deletePizzaBoosted = (value) => {
  // value => id, ingredients
  return (dispatch, getState) => {
    const state = getState();

    // get index of pizza to delete from order
    let index;
    state.data.order.pizza.map((pizza, i) => {
      if (
        pizza.id === value.id &&
        JSON.stringify(pizza.ingredients) === JSON.stringify(value.ingredients)
      ) {
        index = i;
      }
    });

    let price = 0;
    // get extra ingredient price
    state.data.order.pizza[index].ingredients.map((ing, i) => {
      if (state.data.pizza.byId[value.id].ingredients.length <= i) {
        price += state.data.ingredient.byId[ing].price;
      }
    });
    // get pizza price
    price += state.data.pizza.byId[value.id].price;

    dispatch(deletePizza({ index: index, price: price }));
  };
};

export const postOrder = () => {
  return (dispatch, getState) => {
    dispatch(prepareOrder());
    const state = getState();
    submitOrder(state.data.order);
  };
};

const prepareOrder = () => ({
  type: orderAT.PREPARE_ORDER,
});

const submitOrder = (order) => {
  fetch('http://localhost:3333/api/order/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(order),
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
