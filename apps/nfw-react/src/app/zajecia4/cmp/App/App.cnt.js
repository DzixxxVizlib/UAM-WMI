
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { actions, actionCreators } from '../../store/ui/actions';
import App from './App.cmp';

const mapStateToProps = (state, ownProps) => ({
  fieldA: `${state.ui.a} - ${ownProps.id}`,
  fieldC: state.ui.c,
});

/*
 * We'll be using in next lesson selectors pattern
 * which was not introduced as redux part but it's a good practice 
 * and reselect lib as improvement to it 
 */

const mapDispatchToProps = (dispatch, ownProps) => ({
  modifyA: () => dispatch(actions.actionA),
  modifyC: newValue => dispatch(actionCreators.actionC(newValue))
});

/*
 * We may use bindActionCreators from redux package if we will be using only ActionCreators
 * but we will have to be strict with naming convention
 * we're not obligated to it if we'll be writing them in way as described above
 */

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(App);
