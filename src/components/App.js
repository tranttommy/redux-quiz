import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import AllThumbnails from '../containers/AllThumbnails';
import PokemonPage from '../containers/PokemonPage';

export default function App() {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Switch>
        <Route path="/:id" component={PokemonPage} />
        <Route path="/" component={AllThumbnails} />
      </Switch>
    </Router>
  );
}
