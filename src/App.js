import React from 'react';
import './App.css';
import CommentForm from './CommentForm';
import CommentsListContainer from './CommentsListContainer';
import DevTools from './DevTools';

const App = () => {
  return (
    <div className="App">
      Tu będzie lista komentarzy!
      <CommentForm />
      <CommentsListContainer />
      <DevTools />
    </div>
  );
};

export default App;
