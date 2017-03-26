import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class Searchbar extends React.Component {
  constructor(){
    super()
    this.state = {query:''}
  }
  render() {
    return (
      <div className="search--box" style={{"textAlign":"center"}}>
       <form onSubmit={this.handleChange.bind(this)}>
       <input className="form-control" id="search" ref="username" placeholder="Type Username + Enter"/>
       </form>
      </div>
    )
  }

  handleChange(e) {
    e.preventDefault();
    let username = ReactDOM.findDOMNode(this.refs.username).value;
    this.props.fetchProfile(username);
    ReactDOM.findDOMNode(this.refs.username).value = '';
  }
}

export default Searchbar;
