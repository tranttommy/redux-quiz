import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import AllThumbnails from '../containers/AllThumbnails';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={AllThumbnails} />
      </Switch>
    </Router>
  );
}
