import React from 'react';
import User from './components/User'
import UserList from './components/UserList';
import AddUser from './components/AddUser';
import {connect} from 'react-redux';

class App extends React.Component {

  statusChangeHandler = (data) =>
  {
   let tUsers = this.state.users.map(us => {
      if(us.id === data.userId){
        us.status = data.status;
      }
      return us;
      
   }) 
   this.setState({
     users:tUsers
   })
  }


  render(){
    const {users} = this.props;
  return (
  
    <div className="container-fluid">  
    
        <hr/> 
    <div className="row">
      
      <div className="col-4">
      <AddUser/>
      <UserList  users = {users} removeMethod = {this.removeMethod} stChangeMethod={this.statusChangeHandler}/>
      </div>
    </div>
        </div>
  );
}

}
const mapStateToProps = (state) =>{ 
  return {
    users : state.users
  };
}
export default connect(mapStateToProps) (App);
