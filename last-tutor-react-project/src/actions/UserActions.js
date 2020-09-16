export const deleteUser = (name) =>{
    return {type:'DELETE_USER', name:name}
}


export  const addUser = (name) => {
    return {type:'ADD_USER', name:name}
}

export const changeUserStatus = (status,id) => {
    return {type:'CHANGE_STATUS', status:status, id: id}
}