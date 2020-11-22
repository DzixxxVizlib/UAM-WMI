import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { fetchIngredients } from '../store/data/ingredient/ingredient.actions';
import { selectIngredientsById } from '../store/data/ingredient/ingredient.selectors';

import { fetchPizzas } from '../store/data/pizza/pizza.actions';
import { selectPizzasById } from '../store/data/pizza/pizza.selectors';

// Component part
const App = (props) => {
  return (
    <h1 onClick={() => {
      props.fetchIngredients();
      props.fetchPizzas();
    }}>
      App Zajecia 5
    </h1>
  )
}

// Container part
const mapState = (state, ownProps) => ({
  ingredientsById: selectIngredientsById(state),
  pizzasById: selectPizzasById(state),
});

const mapDispatch = (dispatch, ownProps) => ({
  fetchIngredients: () => dispatch(fetchIngredients),
  fetchPizzas: () => dispatch(fetchPizzas),
});

// Enhance part
export default compose(
  connect(mapState, mapDispatch)
)(App)