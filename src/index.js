import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Searchbar from './components/Searchbar';
import Profile from './components/Profile';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'ashishgollamudy',
      profile : []
    }
  }
  fetchProfile(username) {
    const url = 'https://api.github.com/search/users?q='+username;
          $.ajax({
                method: "GET",
                url: url,
                })
          .done((data)=> {
             this.setState({profile:data.items});
             console.log(this.state.profile);
      });
  }
  componentDidMount() {
    this.fetchProfile(this.state.username);
  }
  render() {
    return (
      <div>
         <div id="main" style={{"textAlign":"center"}}>
           <h1 id="title">GITHUB PROFILE SEARCH</h1>
           <Searchbar fetchProfile={this.fetchProfile.bind(this)}/>
           <Profile ProfileItems={this.state.profile}/>
         </div>
      </div>
    )
  }
}


ReactDOM.render(<App/>,document.getElementById('container'));
