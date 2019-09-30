export interface User{
    id:number,
    nickname:string,
    desctiption:Description
}

export interface Description{
    city:string,
    country:string,
    workPlace:string,
    registrationDate:number
}
export interface userList {
    list:User[]
}
export const ADD_USER="ADD_USER"
export const REMOVE_USER="REMOVE_USER"
export const LOAD_USERS="LOAD_USERS"


export interface addUser{
    type:typeof ADD_USER,
    payload:User
}

export interface removeUser{
    type:typeof REMOVE_USER,
    payload:User
}

export interface loadUsers {
    type:typeof LOAD_USERS,
    payload:User[]
}

export type UserActionsType=addUser|removeUser
