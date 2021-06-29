import { SIGN_UP } from "../constants/auth.const";

const initialState = {
    userSignUp: {},
}

export const authReducer = (state = initialState, action)=>{
    const {type,payload} = action;
    switch(type){
        case SIGN_UP:{
            state.userSignUp = payload
        }
        default:
            return state;
    }
}