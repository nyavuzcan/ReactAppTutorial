import React, { Component } from 'react'


 const User = ({name,status, removeMethod}) => {
    return(
        <div className="card bg-light mb-3">
       <div  className="card-body">
       <button className="btn btn-sm btn-outline-danger" onClick={removeMethod} style={{position:"absolute", right:"15px"}}>Sil</button>
       <h1 className="card-title" >Adı: {name}</h1>
    <h3 className="card-subtitle">Durum:<span className={name}>{status}</span></h3>
        

       </div>
            </div >
    )
}

export default User;