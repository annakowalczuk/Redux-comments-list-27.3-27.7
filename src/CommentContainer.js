import {connect} from 'react-redux';
import Comment from './Comment';
import {editComment} from './actions';
import {removeComment} from './actions';
import {thumbUpComment} from './actions';
import {thumbDownComment} from './actions';

const mapDispatchToProps = dispatch => ({
  thumbUpComment: (id) => dispatch(thumbUpComment(id)),
  thumbDownComment: (id) => dispatch(thumbDownComment(id)),
  removeComment: (id) => dispatch(removeComment(id)),
  editComment: (id, text) => dispatch(editComment(id, text)),
});

export default connect(null, mapDispatchToProps)(Comment);
