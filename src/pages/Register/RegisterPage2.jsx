import React from "react";

import { useState } from "react";
import OtpInput from 'react-otp-input';
import Logo from "../../components/Logo";

const RegisterPage2 = () => {
    const [otp, setOtp] = useState('');

    return (
        <>
            <div className="vh-100">

                <Logo />
                <div className="row ">
                <div className="col-6">
                        {/* <img src="./background_v2.png" alt="" className="img-responsive" /> */}

                    </div>
                    <div className="col-6 flex justify-center direction-column card pb-5 mt-5">
                        <div className="flex justify-center direction-column">
                            <p>Tin nhắn chứa mã đã được gửi đến số điện thoại</p>
                            <b className="">0399883467</b>
                        </div>
                        <OtpInput
                            value={otp}
                            onChange={setOtp}
                            numInputs={4}
                            inputType="tel"
                            inputStyle={{
                                width: '40px',
                                height: '40px',
                                margin: '0 10px'
                            }}
                            renderInput={(props) => <input {...props} />}
                        />
                    </div>
                    
                </div>
            </div>
        </>
    );
}

export default RegisterPage2;