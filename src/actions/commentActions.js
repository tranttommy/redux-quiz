export const DELETE_COMMENT = 'DELETE_COMMENT';
export const deleteComment = (index, id) => ({
  type: DELETE_COMMENT,
  payload: { index, id }
});

export const ADD_COMMENT = 'ADD_COMMENT';
export const addComment = (comment, id) => ({
  type: ADD_COMMENT,
  payload: { comment, id }
});
