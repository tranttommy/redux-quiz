import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Thumbnails from '../components/thumbnails/Thumbnails';
import { connect } from 'react-redux';
import { getThumbnails } from '../selectors/thumbnailSelectors';
import { retrieveThumbnails } from '../actions/thumbnailActions';
import Paging from '../components/thumbnails/Paging';

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
      <>
        <Paging currentPage={1} totalPages={4} updatePage={newPage => console.log(newPage)} />
        <Thumbnails pokemons={this.props.pokemons} />
        </>
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
