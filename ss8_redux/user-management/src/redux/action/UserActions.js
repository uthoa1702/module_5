import userService from "../../service/UserService";

import {GET_USER_LIST,DELETE_USER} from "../types";


export const getAllUserList = () => async (dispatch) =>{
    try {
        const res = await userService.findAll();
        dispatch({
            type: GET_USER_LIST,
            payload: res.data
        })
    }catch (e) {
        console.log(e)
    }

}




export const deleteById = (id) => async (dispatch) =>{
    try {
        const res = await userService.deleteById(id);
        dispatch({
            type: DELETE_USER,
            payload: res.data
        })
    }catch (e) {
        console.log(e)
    }

}