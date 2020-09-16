import React, { Component } from 'react'


 class User extends Component{

componentWillUnmount(){
  console.log('Bileşen Dom Cıkarıldı',this.props.id)
  
}
  
     render(){
      const {name,status, removeMethod,id,stChangeMethod} =this.props
      const changeHandler = (e) => {
        stChangeMethod({status : e.target.value, userId : id})
 }
    return(
        <div className="card bg-light mb-3">
       <div  className="card-body">
       <button className="btn btn-sm btn-outline-danger" onClick={removeMethod} style={{position:"absolute", right:"15px"}}>Sil</button>
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

export default User;