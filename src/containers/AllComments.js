import { connect } from 'react-redux';
import Comments from '../components/comments/Comments';
import { getComments } from '../selectors/commentSelectors';
import { deleteComment } from '../actions/commentActions';

const mapStateToProps = (state, props) => ({
  comments: getComments(state, props.id)
});

const mapeDispatchToProps = (dispatch, props) => ({
  deleteComment(index) {
    dispatch(deleteComment(index, props.id));
  }
});

export default connect(
  mapStateToProps,
  mapeDispatchToProps
)(Comments);
