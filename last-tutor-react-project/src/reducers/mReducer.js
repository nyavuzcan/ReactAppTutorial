
const initialState = {
    idx :4,
    users: [
      {name:"nevzat", status:"offline", id:1},
      {name:"ahmet", status:"online", id:2},
      {name:"veli", status:"busy",id:3}
    ]

}
const mReducer = (state=initialState,action) => {
    console.log(action)
 if(action.type==='DELETE_USER') {
     let tUsers = state.users.filter(us=>{
         return us.name !== action.name
     })
    return {
        ...state,
        users: tUsers
    }  
 }
if(action.type === 'ADD_USER') {
    let id = state.idx;
    let user = {
      name:action.name,
      status:'online',
      id:id
    }
    return {
        idx: id + 1 ,
        users:[...state.users,user]
    }
}

    return state
}

export default mReducer;