import {ADD_USER, REMOVE_USER, User, UserActionsType} from "./types";

export const addUserActions=(newUser:User):UserActionsType=>{
    return{
        type:ADD_USER,
        payload:newUser
    }


}

export const removeUserAction=(users:User):UserActionsType=>{
    return{
        type:REMOVE_USER,
        payload:users
    }
}


