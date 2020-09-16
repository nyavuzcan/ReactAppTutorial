import React from 'react'
import User from './User'
const UserList = ({users,stChangeMethod}) => {
    if(users.length>0){

   
    return(
        users.map(user => {
            return <User name= {user.name} status = {user.status} id={user.id}  
            key = {user.id}  stChangeMethod={stChangeMethod}/>
            //BUNUN YERİNE KOMPLE USER I PROP OLARAK GÖNDEREBİLİRİZ 
            //<User user={user}
        })
        
    ) }
    else return (<div className="alert alert-danger" role="alert">Kullanıcı Bulunamadı!</div>)
}

export default UserList;