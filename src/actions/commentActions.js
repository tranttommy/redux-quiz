export const DELETE_COMMENT = 'DELETE_COMMENT';
export const deleteComment = (index, id) => ({
  type: DELETE_COMMENT,
  payload: { index, id }
});
