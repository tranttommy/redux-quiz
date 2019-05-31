import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import AllThumbnails from '../containers/AllThumbnails';
import PokemonPage from '../containers/PokemonPage';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:id" component={PokemonPage} />
        <Route path="/" component={AllThumbnails} />
      </Switch>
    </Router>
  );
}
