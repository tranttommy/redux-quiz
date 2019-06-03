import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Thumbnails from '../components/thumbnails/Thumbnails';
import { connect } from 'react-redux';
import { getThumbnails, getCurrentPage } from '../selectors/thumbnailSelectors';
import { retrieveThumbnails, updatePage } from '../actions/thumbnailActions';
import Paging from '../components/thumbnails/Paging';

class AllThumbnails extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    pokemons: PropTypes.array,
    currentPage: PropTypes.number,
    updatePage: PropTypes.func
  }

  componentDidMount() {
    this.props.fetch();
  }

  componentDidUpdate(prevProps) {
    if(this.props.currentPage !== prevProps.currentPage)
      this.props.fetch({ page: this.props.currentPage });
  }

  render() {
    return (
      <>
        <Paging currentPage={this.props.currentPage} updatePage={this.props.updatePage} />
        <Thumbnails pokemons={this.props.pokemons} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  pokemons: getThumbnails(state),
  currentPage: getCurrentPage(state),
});

const mapDispatchToProps = dispatch => ({
  fetch(query) {
    dispatch(retrieveThumbnails(query));
  },
  updatePage(newPage) {
    dispatch(updatePage(newPage));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllThumbnails);
