import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import AllThumbnails from '../containers/AllThumbnails';
import AllDetails from '../containers/AllDetails';

export default function App() {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Switch>
        <Route path="/:id" component={AllDetails} />
        <Route path="/" component={AllThumbnails} />
      </Switch>
    </Router>
  );
}
