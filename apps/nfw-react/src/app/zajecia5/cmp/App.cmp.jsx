import React from 'react';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { anotherAction, testAction } from '../store/features/example/actions';

// Cmp part
const App = ({ a, b, c }) => {
  return (
    <h1 onClick={() => c(4)}>
      App Zajecia 5: {a}
    </h1>
  )
}

// Container part
const mapState = (state, ownProps) => ({
  a: state.ui.example.value,
});

const mapDispatch = (dispatch, ownProps) => ({
  b: () => dispatch(testAction),
  c: value => dispatch(anotherAction(value)),
})

const mergeProps = (ownProps, stateProps, dispatchProps) => Object.assign({}, ownProps, stateProps, dispatchProps)

// Enhance part
export default compose(
  connect(mapState, mapDispatch, mergeProps)
)(App)