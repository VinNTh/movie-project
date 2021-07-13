import axios from "axios"

import { SIGN_IN, SIGN_UP } from "../constants/auth.const";
export const signUpAction = (user,history) =>{
    return async(dispatch) => {
        try {
           const res = await axios({
                url:"https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
                method:"POST",
                data:user,
            });
            // const {...userSignUp} = res.data
            dispatch({
                type:SIGN_UP,
                payload:res.data,
            })
            history.push("./")
            alert("Đăng ký thành công")
        } catch (err){
            console.log(err)
        }
    }
}
export const signInAction = (user,history) => {
    return async(dispatch) => {
        try{
            const res = await axios({
                url:"https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
                method:"POST",
                data:user,
            });
            dispatch({
                type:SIGN_IN,
                payload:res.data,
            })
            alert("Đăng nhập thành công")
        }catch (err){
            console.log(err)
        }
    }
}