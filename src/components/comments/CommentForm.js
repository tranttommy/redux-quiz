import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class CommentForm extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  state = {
    comment: ''
  }

  handleChange = ({ target }) => this.setState({ [target.name]: target.value })

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.comment);
    this.setState({ comment: '' });
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea name="comment" onChange={this.handleChange} value={this.state.value}></textarea>
        <button>Submit</button>
      </form>
    );
  }
}
