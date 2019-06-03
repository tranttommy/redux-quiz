import React from 'react';
import PropTypes from 'prop-types';

export default function Comment({ comment, deleteComment, index }) {
  return (
    <p>
      {comment}
      <button onClick={() => deleteComment(index)}>X</button>
    </p>
  );
}

Comment.propTypes = {
  comment: PropTypes.string.isRequired,
  deleteComment: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
};
