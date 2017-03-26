import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import ProfileItem from './ProfileItem';

class Profile extends Component {
  constructor(){
    super();
    this.state={isShowingModal:false}
  }
  render(){
  const profileItemList = this.props.ProfileItems.map((Profile,index) =>{
      return(
        <ProfileItem key={index} Profile= {Profile}/>
      )
  });
      return (
           <div>
              {profileItemList}
           </div>
      )
}
}

export default Profile;
