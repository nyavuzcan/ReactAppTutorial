import React from 'react';
import User from './components/User'
import UserList from './components/UserList';
import AddUser from './components/AddUser';
function ConsoleLog(data){
  console.log('from App Module');
}

class App extends React.Component {
  state = {
    idx :4,
    users: [
      {name:"nevzat", status:"offline", id:1},
      {name:"ahmet", status:"online", id:2},
      {name:"veli", status:"busy",id:3}
    ]
  }

  addMethod = (name) => {
      //[...arrayadi,nesne]
      let id = this.state.idx +1;
      let user = {
        name:name,
        status:'online',
        id:id
      }
      let tUsers = [...this.state.users, user]

      this.setState({
        users:tUsers,
        idx : id
      })

  }
  removeMethod = (id) => {
   let tUser = this.state.users.filter(user =>{
     console.log(id);
     return user.id !== id;
   })
   this.setState({
     users:tUser
   })
}
  render(){
  return (
    <div className="container-fluid">  
    
        <hr/> 
    <div className="row">
      
      <div className="col-4">
      <AddUser addMethod={this.addMethod}/>
      <UserList  users = {this.state.users} removeMethod = {this.removeMethod}/>
      </div>
    </div>
        
        
        


        </div>
  );
}
}
export default App;
