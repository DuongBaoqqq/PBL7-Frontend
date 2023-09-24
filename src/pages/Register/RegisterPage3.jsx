import React from "react";
import "./style.css";
import Logo from "../../components/Logo";

const RegisterPage2 = () => {

    return(
        <>
            <div className="vh-100">
                <Logo />
                <div className="row mt-5">
                    <div className="col-4"></div>
                    <div className="col-4  bg-white card">
                        <div className="my-5  ">
                            <form action="" className=" flex direction-column align-start">
                                <h2>Thông tin cá nhân</h2>
                                <input type="text" className='form-control' placeholder = "Họ" />
                                <input type="text" className='form-control' placeholder = "Tên" />
                                <input type="text" className='form-control' placeholder = "Giới tính" />
                                <input type="date" className='form-control' placeholder = "Ngày sinh" />
                                <input type="text" className='form-control' placeholder = "Email" />
                                <input type="text" className='form-control' placeholder="Mã giới thiệu, nếu có" />
                                <div className="flex w-100 justify-content-around mt-2">
                                    <button type="button" className="btn px-4 rounded-pill border-dark-subtle bg-white">Back</button>
                                    <button type="submit" className="btn btn-primary rounded-pill px-4 bg text-light">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-4"></div>
                </div>
            </div>
        </>
    );
}

export default RegisterPage2;