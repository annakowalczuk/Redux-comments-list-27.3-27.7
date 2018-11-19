import React from 'react';
import { connect } from 'react-redux'
import { addComment } from './actions'

const CommentForm = ({ dispatch }) => {
  let newText = '';

  return (
    <form onSubmit={e => {
        e.preventDefault()
        if (!newText) {
          return
        }
        dispatch(addComment(newText))
      }}>
        <input onChange={(e) => newText=e.target.value} />
        <button type="submit">
          Add Comment
        </button>
      </form>
    );
};

export default connect()(CommentForm);
