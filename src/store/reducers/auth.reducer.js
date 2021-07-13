import { SIGN_IN, SIGN_UP } from "../constants/auth.const";

const initialState = {
    userSignUp: {},
    userSignIn: {},
}

export const authReducer = (state = initialState, action)=>{
    const {type,payload} = action;
    switch(type){
        case SIGN_UP:{
            state.userSignUp = payload;
        }
        case SIGN_IN:{
            state.userSignIn = payload;
        }
        default:
            return state;
    }
}