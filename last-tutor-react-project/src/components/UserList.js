import React from 'react'
import User from './User'
const UserList = ({users,removeMethod}) => {
    if(users.length>0){

   
    return(
        users.map(user => {
            return <User name= {user.name} status = {user.status}  
            key = {user.id} removeMethod={()=> removeMethod(user.id)}/>
        })
        
    ) }
    else return (<div className="alert alert-danger" role="alert">Kullanıcı Bulunamadı!</div>)
}

export default UserList;