import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Thumbnails from '../components/thumbnails/Thumbnails';
import { connect } from 'react-redux';
import { getThumbnails } from '../selectors/thumbnailSelectors';
import { retrieveThumbnails } from '../actions/thumbnailActions';

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
  pokemons: getThumbnails(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(retrieveThumbnails());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllThumbnails);
