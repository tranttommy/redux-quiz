import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import PokemonDetails from './PokemonDetails';
import { connect } from 'react-redux';
import { getPokemon } from '../selectors/pokemonPageSelectors.js';
import { retrievePokemon } from '../actions/pokemonPageActions';

class PokemonPage extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    pokemon: PropTypes.object,
    match: PropTypes.object.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return (
      <PokemonDetails pokemon={this.props.pokemon} /> 
    );
  }
}

const mapStateToProps = (state, props) => ({
  pokemon: getPokemon(state, props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  fetch() {
    dispatch(retrievePokemon(props.match.params.id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonPage);
