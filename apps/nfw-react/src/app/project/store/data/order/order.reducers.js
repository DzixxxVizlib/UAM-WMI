import * as orderAT from './order.action-types';
import { v4 } from 'uuid';

const initialState = {
  pizza: [],
  sauce: [],
  total: 0,
};

export default function orderReducer(state = initialState, action) {
  switch (action.type) {
    case orderAT.ADD_PIZZA: {
      return Object.assign({}, state, {
        pizza: state.pizza.concat({
          id: action.payload.id,
          ingredients: action.payload.ingredients,
        }),
        total: state.total + action.payload.price,
      });
    }
    case orderAT.ADD_SAUCE: {
      if (state.sauce.some((sauce) => sauce.id === action.payload.id)) {
        return {
          ...state,
          sauce: state.sauce.map((s) =>
            s.id === action.payload.id ? { ...s, count: s.count + 1 } : s
          ),
          total: state.total + action.payload.price,
        };
      } else {
        return Object.assign({}, state, {
          sauce: state.sauce.concat({
            id: action.payload.id,
            count: 1,
          }),
          total: state.total + action.payload.price,
        });
      }
    }
    case orderAT.DELETE_PIZZA: {
      let newArray = state.pizza.slice();
      newArray.splice(action.payload.index, 1);
      return {
        ...state,
        pizza: newArray,
        total: state.total - action.payload.price,
      };
    }
    case orderAT.DELETE_SAUCE: {
      if (
        state.sauce.some(
          (sauce) => sauce.id === action.payload.id && sauce.count > 1
        )
      ) {
        return {
          ...state,
          sauce: state.sauce.map((s) =>
            s.id === action.payload.id ? { ...s, count: s.count - 1 } : s
          ),
          total: state.total - action.payload.price,
        };
      } else {
        return {
          ...state,
          sauce: deleteObject(state.sauce, action),
          total: state.total - action.payload.price,
        };
      }
    }
    // sauce must contain at least 1 elements
    case orderAT.PREPARE_ORDER: {
      if (state.sauce.length === 0) {
        return {
          ...state,
          sauce: [{ id: 'no id', count: 0 }],
        };
      } else {
        return state;
      }
    }
    default:
      return state;
  }
}

const deleteObject = (array, action) => {
  const index = array.map((e) => e.id).indexOf(action.payload.id);
  let newArray = array.slice();
  newArray.splice(index, 1);
  return newArray;
};
