import {DELETE_USER, GET_USER_LIST} from "../types";


const initialState = []


const userReducer = (users = initialState, action) => {
    const {type, payload} = action

    switch (type) {
        case GET_USER_LIST:
            return payload
        case DELETE_USER:
            return [...users]
        default:
            return users

    }
}
export default userReducer;



