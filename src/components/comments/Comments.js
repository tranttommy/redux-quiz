import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

export default function Comments({ comments, deleteComment }) {
  const commentList = comments.map((comment, i) => (
    <li key={i}>
      <Comment comment={comment} deleteComment={deleteComment} index={i} />
    </li>
  ));

  return (
    <ul>
      {commentList}
    </ul>
  );
}

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.string).isRequired,
  deleteComment: PropTypes.func.isRequired
};
