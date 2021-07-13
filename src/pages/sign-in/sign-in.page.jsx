import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { signInAction } from '../../store/actions/auth.action';
import './sign-in.css';

function SignIn() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [user,setUser] = useState({
        normal:{
            taiKhoan:'',
            matKhau:'',
        },
        error:{
            taiKhoan:'',
            matKhau:'',
        },
        valid: true,
    });
    const handleChange = (e) => {
        const {value,name} = e.target;
        let newError = {...user.error};
        let newValid = {...user.valid};
        if(value.trim()===''){
            newError[name] = name + ' không được bỏ trống';
            newValid = true;
        }else{
            newError[name] = '';
            newValid = false;
        }
        setUser({
            ...user,
            [name]:value,
            error:newError,
            valid:newValid,
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(user);
        dispatch(signInAction(user,history))
    }
    return (
        <div className="Bg-signin">
            <div className="signin--wrapper">
                <img width="50%" className="signin--img" src="./img/group@2x.png" alt=""/>
                <h1 className="text-white display-5 mt-5">Đăng nhập</h1>
                <form onSubmit={handleSubmit} className="text-white text-left">
                    <div className="row">
                        <label className="col-xl-4">Tài khoản</label>
                        <input onChange={handleChange} name="taiKhoan" className="col-xl-8" type="text" />
                        <div className="col-xl-12" style={{display:'flex', flexWrap:'wrap',width:'100%',height:'10px'}}>
                            <span style={{flex:'0 0 40%'}}></span>
                            <span style={{margin:0, flexBasis:'60%',}} className="text-warning">
                            {user.error.taiKhoan}
                        </span>
                        </div>
                    </div>
                    <div className="row">
                        <label className="col-xl-4">Mật khẩu</label>
                        <input onChange={handleChange} name="matKhau" className="col-xl-8" type="text" />
                        <div className="col-xl-12" style={{display:'flex', flexWrap:'wrap',width:'100%',height:'10px'}}>
                            <span style={{flex:'0 0 40%'}}></span>
                            <span style={{margin:0, flexBasis:'60%',}} className="text-warning">
                            {user.error.matKhau}     
                        </span>
                        </div>
                    </div>
                    <div className="text-center">
                        <a style={{display:'block',marginBottom:'10px'}} href="#">Quên mật khẩu?</a>
                        <button disabled={user.valid} type="submit" className="btn btn-success">Đăng nhập</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignIn
