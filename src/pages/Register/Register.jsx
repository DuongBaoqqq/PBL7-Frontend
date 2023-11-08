
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
    const [formRegister, setFormRegister] = useState({
        "name":'',
        "email":'',
        "phNo":'84',
        "password":''
    });

    const [isEmail, setIsEmail] = useState({
        'isTrue':true,
        'message':''
    });

    const [isPassword, setIsPassword] = useState({
        'isTrue':true,
        'message':''
    });
    const [isName, setIsName] = useState({
        'isTrue':true,
        'message':''
    })
    const [isPhNo, setIsPhNo] = useState({
        'isTrue':true,
        'message':''
    })

    const [isShowPassword, setIsShowPassword] = useState(false);

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).*$/;

    const handleInputChange = (event) => {
        const key = event.target.name;
        const value = event.target.value;
        setFormRegister(prevFeedback => ({
            ...prevFeedback,
            [key]: value
        }));
    }

    const handlePhoneInput = (value) =>{
        setFormRegister(prevForm => ({
            ...prevForm,
            ['phNo']: value
        }));
    }

   
    const checkEmail = () =>{
        if (!isEmail.isTrue) {
            return (
                <>
                    <p className="text-danger">{isEmail.message}</p>
                </>
            );
        } else {
            return (<><div></div></>)
        }
    }
    const checkPassword = () => {
        if (!isPassword.isTrue) {
            return (<>
                <p className="text-danger">{isPassword.message}</p>
            </>)
        }
    }
    const nameErrorMessage= () => {
        if (!isName.isTrue) {
            return (<>
                <p className="text-danger">{isName.message}</p>
            </>)
        }
    }
    const phNoErrorMessage= () => {
        if (!isPhNo.isTrue) {
            return (<>
                <p className="text-danger">{isPhNo.message}</p>
            </>)
        }
    }
    // useEffect(() => {

    // },[isEmail,isPassword])
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        
        //** Check form condition */
        let condition = true;
        if ( formRegister.name === null || formRegister.name === undefined || formRegister.name.length === 0) {
            setIsName(prev => ({
                ...prev,
                ['isTrue']: false,
                ['message']: `Please fill out this field`
            }))
            condition=false;
        }
        else {
            setIsName(prev => ({
                ...prev,
                ['isTrue']: true
            }));
        }
        
        if (emailPattern.test(formRegister.email)) {
            setIsEmail(prev => ({
                ...prev,
                ['isTrue']: true
            }));
        }
        else {
            setIsEmail(prev => ({
                ...prev,
                ['isTrue']: false,
                ['message']: 'Invalid email addres'
            }))
            condition=false;
        }

        if (passwordPattern.test(formRegister.password)) {
            setIsPassword(prev => ({
                ...prev,
                ['isTrue']: true
            }));
        }
        else {
            setIsPassword(prev => ({
                ...prev,
                ['isTrue']: false,
                ['message']: `Weak password`
            }))
            condition=false;
        }

        if(!condition){
            return;
        }
        
        //** Request to Register user */
        const res = await Account.signUp(formRegister);
        
        //** Handle response */
        if (res.status === 200) {
            console.log('Create success');
            console.log(res);
            navigate("/");
        }
        else {
            if(res.data.error.details){
                if(res.data.error.details[0].context.key==='email'){
                    setIsEmail(prev => ({
                        ...prev,
                        ['isTrue']: false,
                        ['message']: res.data.message
                    }))
                }
                if(res.data.error.details[0].context.key==='phNo'){
                    setIsPhNo(prev => ({
                        ...prev,
                        ['isTrue']: false,
                        ['message']: res.data.message
                    }))
                }
            }
            console.log(res);
        }
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
                <div className='row'>
                    <div className = "col-3"></div>
                    <div className='flex justify-center bg-white container-sm card vh-50 my-5 shadow col-6'>
                        <form action="" className='my-5'>
                            <div className='mb-4'>
                                <h1 className='color' align='center'>Register</h1>
                            </div>
                            <div>
                              
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" name='name' value={formRegister.name} onChange={handleInputChange}/>
                                {nameErrorMessage()}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phNo" className="form-label">Phone Number</label>
                                <PhoneInput
                                  placeholder="Enter phone number"
                                  value={formRegister.phNo}
                                  inputProps={{
                                      required: true,
                                      autoFocus: true,
                                    }}
                                    onChange={phone => handlePhoneInput(phone)}
                                    containerClass="my-container-class"
                                    inputClass="my-input-class"
                                />
                                {phNoErrorMessage()}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" value={formRegister.email}  onChange={handleInputChange} required/>
                                {checkEmail()}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <div className="input-group">
                                    <input type={isShowPassword?"text":"password"} className="form-control"  id="password" name="password" value={formRegister.password}   onChange={handleInputChange}  required/>
                                    <span className="input-group-text" id="basic-addon2" onClick={handleShowHidePassword}><AiFillEyeInvisible className='color-icon'/></span>
                                </div>
                                {checkPassword()}
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