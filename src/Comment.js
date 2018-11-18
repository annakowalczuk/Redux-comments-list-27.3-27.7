import React from 'react';

const Comment = ({text, id, votes, removeComment, thumbUpComment, thumbDownComment}) =>
  <li>
    {text} <span>votes: {votes}</span> 
    <br />
    <button onClick={() => thumbUpComment(id)}>Thumb up</button>
    <button onClick={() => thumbDownComment(id)}>Thumb down</button>
    <button onClick={() => removeComment(id)}>Remove comment</button>
  </li>;

export default Comment;
