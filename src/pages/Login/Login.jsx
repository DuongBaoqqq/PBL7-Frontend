
import React from 'react';
import './style.css'
import { AiFillEyeInvisible } from 'react-icons/ai';
function Login() {
    return (
        <>
            <div className='grid vh-100'>
                <div className='flex align-start direction-column'>
                    <div className='flex'>
                        <img src="./Logo.png" alt="" />
                        <h1 className='color'>RideWizard</h1>
                    </div>
                    {/* <img src="./login.png" alt="" className='w-100 ml-110'/> */}
                </div>
                <div className='flex justify-center bg-white container-sm card vh-50 my-5 shadow'>
                    <form action="" className=''>
                        <div className=''>
                        <h1 className='color' >Welcome back, yash</h1>
                            <h3 className='color'>Welcome back. Please enter your details.</h3>
                        </div>
                        <div className='border-b flex justify-center pb-4 mx-20'>
                            <label htmlFor="email "
                            >Email</label>
                            <input type="email"
                                id='email'
                                className='outline-none border-none flex-grow'/>
                        </div>
                        <div className='border-b flex justify-center pb-4'>
                            <label htmlFor="password">Password</label>
                            <input type="password"
                                id='password'
                                className=' 
                                flex-grow
                                outline-none border-none' />
                            <button type="button"
                            className='icon'
                            >
                                <AiFillEyeInvisible
                                className='color-icon'
                                />
                            </button>
                        </div>
                        <div className='flex justify-between mx-20'>
                            <div className='flex'>
                                <input type="checkbox" name="check" id="check" />
                                <span>Remember</span>
                            </div>
                            <a href="/">Forgot Password</a>
                        </div>
                        <button type="submit"
                        className='w-100 bg border-none btn btn-primary rounder-6 mx-20'
                        ><p><b>Login</b></p> </button>
                        <div className='flex justify-center'>
                            <p>Don't have an account?<a href="/"> Sign up for free</a></p>
                        </div>
                        
                    </form>
                </div>
            </div>
            
        </>
    );
}

export default Login;