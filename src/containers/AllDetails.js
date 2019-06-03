import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import PokemonDetails from '../components/details/Details';
import { connect } from 'react-redux';
import { getDetails } from '../selectors/detailSelectors';
import { retrieveDetails } from '../actions/detailActions';

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
  pokemon: getDetails(state, props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  fetch() {
    dispatch(retrieveDetails(props.match.params.id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonPage);
