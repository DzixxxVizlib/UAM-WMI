import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  Redirect,
  useParams,
  useRouteMatch,
  useHistory
} from 'react-router-dom';

const Dashboard = props => <h1>Dashboard</h1>
const PageOne = props => <h1>Page One</h1>
const PageTwo = props => <h1>Page Two</h1>
const NestedPageThreeDefault = props => <h2>Default Nested Page Three</h2>
const NestedPageFour = props => <h2>Nested Page Four</h2>
const NestedPageFive = props => {
  const { id } = useParams();
  const history = useHistory();
  return (
    <>
      <h2>Nested Page Five - param: {id}</h2>
      <button onClick={() => history.push('/page2')}>Navigate to Page Two</button>
    </>
  );
}
const PageThree = props => {
  const match = useRouteMatch();
  return (
    <>
      <Link to={`${match.url}/page4`}>Nested Page Four</Link><br/>
      <Link to={`${match.url}/123`}>Nested Page Five</Link> <br/>

      <Switch>
        <Route exact path={match.url} component={NestedPageThreeDefault} />
        <Route path={`${match.url}/page4`} component={NestedPageFour} />
        <Route path={`${match.url}/:id`} component={NestedPageFive} />
      </Switch>
    </>
  )
}

export class Zajecia3 extends React.Component {
  render() {
    return (
      <BrowserRouter>

        <Link to="/">Dashboard</Link><br/>
        <Link to="/page1">Page One</Link><br/>
        <Link to="/page2">Page Two</Link><br/>
        <Link to="/page3">Page Three</Link><br/><br/>

        <Switch>
          {/* When we would like to display smth before redirect to nested pages */}
          <Route exact path="/" component={Dashboard} />

          {/* Nested routes */}
          <Route path="/page1" component={PageOne} />
          <Route path="/page2" component={PageTwo} />
          <Route path="/page3" component={PageThree} />

          {/* If not match to any route -> redirect to Dashbaord as default  */}
          <Redirect to="/" />
        </Switch>
  
      </BrowserRouter>
    )
  }
}
