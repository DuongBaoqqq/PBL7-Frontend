
import React, { useEffect } from 'react';
import './style.css'
import { AiFillEyeInvisible } from 'react-icons/ai';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Account from '../../services/Account';
import PhoneInput from 'react-phone-input-2'
// import 'react-phone-input-2/lib/style.css'

import 'react-phone-input-2/lib/bootstrap.css'
function Register() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isEmail, setIsEmail] = useState(true);
    const [isPassword, setIsPassword] = useState(true);
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState()
    const emailRegex = /^[a-zA-Z0-9._-]+@gmail\.com$/;

    function handleChangeEmail(event) {
        setEmail(event.target.value)
    }
    function handleChangePassword(event) {
        setPassword(event.target.value)
    }
   
    const checkEmail = () =>{
        if (!isEmail) {
            return (
                <>
                    <p className="text-danger">Email is not valid</p>
                </>
            );
        } else {
            return (<><div></div></>)
        }
    }
    const checkPassword = () => {
        if (!isPassword) {
            return (<>
                <p className="text-danger">Password/Email is not valid</p>
            </>)
        }
    }
    // useEffect(() => {

    // },[isEmail,isPassword])
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        if (emailRegex.test(email)) {
            setIsEmail(true);
        }
        else {
            setEmail(false);
            return;
        }
        let res = await Account.signIn(email, password, isEmail===true?"email":"orther");
        if (res.status === 200) {
            setIsPassword(true)
            navigate("/home")
        }
        else {
            setIsPassword(false)
        }
        // console.log(res.data);
    }

    const handleShowHidePassword = () =>{
        setIsShowPassword(!isShowPassword);
    }

    return (
        <>
            <div className=' '>
                <div className='flex align-start direction-column'>
                    <div className='flex'>
                        <img src="./logo.png" alt="" />
                        <h1 className='color'>RideWizard</h1>
                    </div>
                    {/* <img src="./login.png" alt="" className='w-100 ml-110'/> */}
                </div>
                <div clasName='row'>
                    <div className = "col-3"></div>
                    <div className='flex justify-center bg-white container-sm card vh-50 my-5 shadow col-6'>
                        <form action="" className='my-5'>
                            <div className='mb-4'>
                                <h1 className='color' >Welcome back, yash</h1>
                                <h3 className='color'>Welcome back. Please enter your details.</h3>
                            </div>
                            <div>
                              
                            </div>
                            <div className="mb-3">
                                <label for="name" className="form-label">Name</label>
                                <input type="name" className="form-control" id="emanameil" onChange={handleChangeEmail}/>
                            </div>
                            <div className="mb-3">
                                <label for="phNo" className="form-label">Phone Number</label>
                                <PhoneInput
                                  placeholder="Enter phone number"
                                  value={phoneNumber}
                                  onChange={setPhoneNumber}
                                  containerClass="my-container-class"
                                  inputClass="my-input-class"
                                />
                            </div>
                            <div className="mb-3">
                                <label for="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={handleChangeEmail}/>
                                {checkEmail()}
                            </div>
                            <div className="mb-3">
                                <label for="password" className="form-label">Password</label>
                                <div className="input-group mb-3">
                                    <input type={isShowPassword?"text":"password"} className="form-control"  id="password"  onChange={handleChangePassword}/>
                                    <span className="input-group-text" id="basic-addon2" onClick={handleShowHidePassword}><AiFillEyeInvisible className='color-icon'/></span>
                                    {checkPassword()}
                                </div>
                            </div>
                            
                            <div className='mb-3'>
                                <button type="submit" className="bg btn btn-primary col-12 py-2" onClick={handleOnSubmit}>Sign in</button>
                            </div>
                            <div className='flex justify-center'>
                                <p>You have an account?<Link to="/"> Login</Link></p>
                            </div>
                        </form>
                    </div>
                    <div className="col-3"></div>
                </div>
            </div>
            
        </>
    );
}

export default Register;