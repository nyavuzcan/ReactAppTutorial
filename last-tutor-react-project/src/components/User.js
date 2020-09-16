import React, { Component } from 'react'
import {connect} from 'react-redux'
import {deleteUser,changeUserStatus} from '../actions/UserActions'
 class User extends Component{

componentWillUnmount(){
  console.log('Bileşen Dom Cıkarıldı',this.props.id)
  
}

deleteHandler=()=>{
  this.props.deleteUser(this.props.name)
}
  
     render(){
       
      const {name,status,id} =this.props
      const changeHandler = (e) => {
       this.props.changeUserStatus(e.target.value,id) 
 }
    return(
        <div className="card bg-light mb-3">
       <div  className="card-body">
       <button className="btn btn-sm btn-outline-danger" onClick={this.deleteHandler} style={{position:"absolute", right:"15px"}}>Sil</button>
       <h1 className="card-title" >Adı: {name}</h1>
    <h3 className="card-subtitle mb-1">Durum:<span className={name}>{status}</span></h3>
    <select className="form-control " name="state" id="state" onChange={changeHandler} value={status}>
                    <option value="online">online</option>
                    <option value="offline">offline</option>
                    <option value="busy">busy</option>
                    </select>

       </div>
            </div >
    )
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    deleteUser: (name) => {dispatch(deleteUser(name))} ,
    changeUserStatus: (status,id) =>{dispatch(changeUserStatus(status,id))}
  }
}
export default connect(null,mapDispatchToProps) (User); 