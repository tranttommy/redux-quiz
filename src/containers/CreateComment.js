import { connect } from 'react-redux';
import CommentForm from '../components/comments/CommentForm';
import { addComment } from '../actions/commentActions';

const mapDispatchToProps = (dispatch, props) => ({
  onSubmit(comment) {
    dispatch(addComment(comment, props.id));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(CommentForm);
