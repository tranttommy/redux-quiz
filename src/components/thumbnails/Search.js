import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Search extends PureComponent {
  static propTypes = {
    onSearch: PropTypes.func.isRequired
  }

  state = {
    search: ''
  }

  handleChange = ({ target }) => this.setState({ [target.name]: target.value })

  handleSearch = event => {
    event.preventDefault();
    this.props.onSearch(this.state.search);
  }

  render() {
    return (
      <form onSubmit={this.handleSearch}>
        <input name="search" onChange={this.handleChange} value={this.state.search} />
        <button>Search</button>
      </form>
    );
  }
}
