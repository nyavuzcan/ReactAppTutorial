
 import React, { Component } from 'react'
 
 export default class AddUser extends Component {
    state = {
        name:""
    }

    changeHandler = (e) => {
        this.setState({
            name : e.target.value
        })
    }

    submitHandler =(e) =>
    {
        e.preventDefault();
        this.props.addMethod(this.state.name);
        this.setState({
            name:""
        })
    }
    
    render() {
         return (
             <div>
                 <form onSubmit={this.submitHandler}>
                     <input className="form-control mb-3" placeholder="Kullanıcı Adı" type="text" id="name" onChange={this.changeHandler} value={this.state.name}/>
                     <button className="btn btn-outline-success btn-block">Kaydet</button>
                 </form>
             </div>
         )
     }
 }
 
