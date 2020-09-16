import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addUser} from '../actions/UserActions'
  class AddUser extends Component {
    state = {
        name:""
    }

    componentDidMount(){
        console.log('AddUser bileşeni Eklendi')
    }

    componentDidUpdate(prevProps,prevState){
        console.log('Add user Güncellendi', prevState, this.state)
    }


    changeHandler = (e) => {
        this.setState({
            name : e.target.value
        })
    }

    submitHandler =(e) =>
    {  
        e.preventDefault();
   
        this.props.addUser(this.state.name);
        this.setState({
            name:''
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
 
 const mapDispatchToProps= (dispatch) =>{
   return{ addUser: (name) => {dispatch(addUser(name))} 
}
}

export default connect(null,mapDispatchToProps)(AddUser)