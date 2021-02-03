import { connect } from 'react-redux';
import { compose } from 'redux';
import { initialize } from '../../store/root.actions';
import {
  selectIngredientsAllIds,
  selectIngredientsById,
} from '../../store/data/ingredient/ingredient.selectors';
import {
  selectPizzasById,
  selectPizzasAllIds,
} from '../../store/data/pizza/pizza.selectors';
import {
  selectSaucesById,
  selectSaucesAllIds,
} from '../../store/data/sauce/sauce.selectors';
import { selectOrderState } from '../../store/data/order/order.selectors';
import {
  addPizza,
  addSauce,
  deletePizzaBoosted,
  deleteSauce,
  postOrder,
} from '../../store/data/order/order.actions';
import App from './App.cmp';

const mapState = (state, ownProps) => ({
  ingredientsById: selectIngredientsById(state),
  ingredientsAllIds: selectIngredientsAllIds(state),
  pizzasById: selectPizzasById(state),
  pizzasAllIds: selectPizzasAllIds(state),
  saucesById: selectSaucesById(state),
  saucesAllIds: selectSaucesAllIds(state),
  order: selectOrderState(state),
});

const mapDispatch = (dispatch, ownProps) => ({
  init: () => dispatch(initialize),
  addPizzaToCart: (pizza) => dispatch(addPizza(pizza)),
  addSauceToCart: (sauce) => dispatch(addSauce(sauce)),
  deletePizzaFromCart: (pizza) => dispatch(deletePizzaBoosted(pizza)),
  deleteSauceFromCart: (sauce) => dispatch(deleteSauce(sauce)),
  postOrder: () => dispatch(postOrder()),
});

// Enhance part
export default compose(connect(mapState, mapDispatch))(App);
