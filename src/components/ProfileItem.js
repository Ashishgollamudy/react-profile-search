import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import $ from 'jquery';

class ProfileItem extends React.Component {
  constructor(){
    super();
    this.state={isShowingModal:false,data:[]}
  }
  handleClick(username){
    const url = 'https://api.github.com/users/'+username;
    $.ajax({
          method: "GET",
          url: url,
          })
    .done((data)=> {
       this.setState({data:data,isShowingModal: true});
});

  }
  handleClose(){
    this.setState({isShowingModal: false});
  }
  render() {
    const styles= {
        height: "130px",
        width : "180px",
        display: "inline-block"
    }
      return (
        <div id="card" onClick={this.handleClick.bind(this,this.props.Profile.login)}>
           <img style= {styles} src={this.props.Profile.avatar_url}/>
           <hr/>
           <div>{this.props.Profile.login}</div>
           {
            this.state.isShowingModal &&
            <ModalContainer id="dialog-box" onClose={this.handleClose.bind(this)}>
              <ModalDialog onClose={this.handleClose.bind(this)}>
                <h3>{this.state.data.name}</h3>
                <img id="modal-img" src={this.state.data.avatar_url}/>
                <p>{this.state.data.bio} - {this.state.data.location}</p>
                <div className="row">
                    <span className="col-md-4">Repos</span>
                    <span className="col-md-4">Followers</span>
                    <span className="col-md-4">Following</span>
                </div>
                <div className="row">
                    <span className="col-md-4">{this.state.data.repos}</span>
                    <span className="col-md-4">{this.state.data.followers}</span>
                    <span className="col-md-4">{this.state.data.following}</span>
                </div>
              </ModalDialog>
            </ModalContainer>
           }
        </div>
      )
  }
}

export default ProfileItem;
