import React from 'react';
import { connect } from 'react-redux'
import { addComment } from './actions'

class CommentForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: ''}
  }
    
  handleSubmit = (e) => {
    e.preventDefault(); 
    if (this.state.value !== ''){
      this.props.addComment(this.state.value)
      };
      this.setState({value: ''})
  }

  handleChange = (e) => {
    this.setState({value: e.target.value})
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.value} onChange={this.handleChange} />
        <button type="submit">
          Add Comment
        </button>
      </form>
    );    
  }
}

const mapDispatchToProps = dispatch => ({
  addComment: (text) => dispatch(addComment(text)),
});

export default connect(null, mapDispatchToProps)(CommentForm);
