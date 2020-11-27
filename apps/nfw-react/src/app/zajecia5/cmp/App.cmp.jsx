import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { Tabs } from './Tabs.cmp';

import { initialize } from '../store/root.actions';
import { selectIngredientsById } from '../store/data/ingredient/ingredient.selectors';
import { selectPizzasById } from '../store/data/pizza/pizza.selectors';

// Component part
const App = (props) => {
  
  useEffect(() => {
    props.init() // to request all necessary data once using worker
  }, []);

  return (
    // Example how to use RenderProps approach
    <Tabs
      elements={[1,2,3]}
      renderTab={tabId => <p>Tab {tabId}</p>}
    >
      {(value) => <p>{value ? `Tab ${value}` : 'Not selected'}</p>}
    </Tabs>
  )
}

// Container part
const mapState = (state, ownProps) => ({
  ingredientsById: selectIngredientsById(state),
  pizzasById: selectPizzasById(state),
});

const mapDispatch = (dispatch, ownProps) => ({
  init: () => dispatch(initialize),
});

// Enhance part
export default compose(
  connect(mapState, mapDispatch)
)(App)