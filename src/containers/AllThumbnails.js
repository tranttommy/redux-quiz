import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Thumbnails from '../components/thumbnails/Thumbnails';
import { connect } from 'react-redux';
import { getThumbnails, getCurrentPage, getTotalPages, getSearch } from '../selectors/thumbnailSelectors';
import { retrieveThumbnails, updatePage, updateSearch } from '../actions/thumbnailActions';
import Paging from '../components/thumbnails/Paging';
import Search from '../components/thumbnails/Search';

class AllThumbnails extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    pokemons: PropTypes.array.isRequired,
    currentPage: PropTypes.number.isRequired,
    updatePage: PropTypes.func.isRequired,
    totalPages: PropTypes.number.isRequired,
    search: PropTypes.string.isRequired,
    updateSearch: PropTypes.func.isRequired
  }

  fetch = () => {
    this.props.fetch({
      page: this.props.currentPage,
      search: this.props.search
    });
  }

  componentDidMount() {
    this.fetch();
  }

  componentDidUpdate(prevProps) {
    if(this.props.currentPage !== prevProps.currentPage || this.props.search !== prevProps.search)
      this.fetch();
  }

  render() {
    return (
      <>
        <Search onSearch={this.props.updateSearch} />
        <Paging currentPage={this.props.currentPage} totalPages={this.props.totalPages} updatePage={this.props.updatePage} />
        <Thumbnails pokemons={this.props.pokemons} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  pokemons: getThumbnails(state),
  currentPage: getCurrentPage(state),
  totalPages: getTotalPages(state),
  search: getSearch(state)
});

const mapDispatchToProps = dispatch => ({
  fetch(query) {
    dispatch(retrieveThumbnails(query));
  },
  updatePage(newPage) {
    dispatch(updatePage(newPage));
  },
  updateSearch(searchTerm) {
    dispatch(updateSearch(searchTerm));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllThumbnails);
