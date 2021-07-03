import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { signUpAction } from '../../store/actions/auth.action';
import { SIGN_UP } from '../../store/constants/auth.const';
import './sign-up.css';
import * as yup  from 'yup';

const signupUserSchema = yup.object().shape({
    taiKhoan: yup.string().required("Field is required!"),
    matKhau: yup.string().required("Field is required!"),
    hoTen: yup.string().required("Field is required!"),
    email: yup.string().required("Field is required!").email("Email is invalid"),
    soDienThoai: yup.string().required("Field is required!").matches(/^[0-9]+$/),
})


function SignUp() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [user,setUser] = useState({
        
            taiKhoan:'',
        matKhau:'',
        hoTen:'',
        email:'',
        soDienThoai:'',
        maNhom:'GP01'
        
        
        
    })
    const [userErrors,setUserErrors] = useState({
        taiKhoan:'a',
        matKhau:'',
        hoTen:'',
        email:'',
        soDienThoai:'',
        maNhom:''
    })
    console.log(user)
    const handleChange = (e) => {
        const {value,name} = e.target;
        let errorMessage = {...userErrors};
        console.log(errorMessage)
        if(value.trim() === ""){
            errorMessage[name] = name + " không được bỏ trống" 
        }
        // let newUserErrors = {...userErrors,[name]:errorMessage};
        setUser({
            ...user,
            [name]:value,
        })
        setUserErrors({
            userErrors: errorMessage,
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
        // dispatch(signUpAction(user,history))
    }
    return (
        <div className="Bg">
            <div className="signup--wrapper">
                <img width="50%" className="signup--img" src="./img/group@2x.png" alt=""/>
                <h1 className="text-white display-5 mt-5">Đăng ký thành viên</h1>
                <form onSubmit={handleSubmit} className="text-white text-left">
                    <div className="row">
                        <label className="col-xl-4">Tài khoản</label>
                        <input name="taiKhoan" className="col-xl-8" type="text" onChange={handleChange}/>
                        <p style={{margin:0}} className="text-center text-warning col-xl-12">
                            {userErrors.taiKhoan}
                        </p>
                    </div>
                    <div className="row">
                        <label className="col-xl-4">Mật khẩu</label>
                        <input name="matKhau" className="col-xl-8" type="text" onChange={handleChange}/>
                        <p className="text-warning">
                            {userErrors.matKhau}
                        </p>
                    </div>
                    <div className="row">
                        <label className="col-xl-4">Họ tên</label>
                        <input name="hoTen" className="col-xl-8" type="text" onChange={handleChange}/>
                        <p className="text-warning">
                            {userErrors.hoTen}
                        </p>
                    </div>
                    <div className="row">
                        <label className="col-xl-4">Email</label>
                        <input name="email" className="col-xl-8" type="email" onChange={handleChange}/>
                    </div>
                    <div className="row">
                        <label className="col-xl-4">Số điện thoại</label>
                        <input name="soDienThoai" className="col-xl-8" type="text" onChange={handleChange}/>
                    </div>
                    <div className="row">
                        <label className="col-xl-4">Mã nhóm</label>
                        <select name="maNhom" onChange={handleChange}>
                            <option>GP01</option>
                            <option>GP02</option>
                            <option>GP03</option>
                            <option>GP04</option>
                            <option>GP05</option>
                            <option>GP06</option>
                            <option>GP07</option>
                            <option>GP08</option>
                            <option>GP09</option>
                            <option>GP10</option>
                        </select>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-success">Đăng ký</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp
