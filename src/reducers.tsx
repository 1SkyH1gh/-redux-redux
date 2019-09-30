import {ADD_USER, UserActionsType} from "./types";


export const userListReducer=(state=[],action:UserActionsType)=>{
    if(action.type===ADD_USER){
        return [
            ...state,
            action.payload
        ]
    }
}
