import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Thumbnails from './Thumbnails';
import { connect } from 'react-redux';
import { getPokemons } from '../selectors/thumbnailSelectors';
import { retrievePokemons } from '../actions/thumbnailActions';

class AllThumbnails extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    pokemons: PropTypes.array
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return (
      <Thumbnails pokemons={this.props.pokemons} />
    );
  }
}

const mapStateToProps = state => ({
  pokemons: getPokemons(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(retrievePokemons());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllThumbnails);
