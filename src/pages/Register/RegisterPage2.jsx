import React from "react";

import { useState } from "react";
import OtpInput from 'react-otp-input';
import Logo from "../../components/Logo";

const RegisterPage2 = () => {
    const [otp, setOtp] = useState('');

    return (
        <>
            <div className="">

                <Logo />
                <div className="row ">
                    <div className="col-3"></div>
                    <div className="col-6 flex justify-center direction-column card py-5 mt-5">
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