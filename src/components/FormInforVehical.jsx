import React from "react";

import { useState } from "react";

const FormInforVehical = () => {
    const regex = /^[0-9]{2}[A-Z][0-9][0-9]{5}$/

    const [licensePlate,setLicensePlate] = useState()
    const [isValid,setIsValid] = useState(true);

    const handleChange = (event) => {
        if (regex.test(event.target.value)) {
            setLicensePlate(event.target.value)
            setIsValid(true);
        }
        else {
            setIsValid(false);
        }
    }

    return (<>
        
        <div className="flex justify-content-center">
            <div className="mt-4 card py-5 col-4">
                <div className="flex justify-content-center">
                <h1>Thông tin phương tiện</h1>

                </div>
                <form action="" className="">
                    <div className=" mx-5" >
                        <select name="" id="" className="form-select mt-4" >
                            <option disabled selected>Loại</option>
                            <option value="moto">Xe máy</option>
                            <option value="car">Xe ô tô</option>
                        </select>
                        <select name="" id="" className="form-select mt-2" >
                            <option disabled selected>Hãng</option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                        <select name="" id="" className="form-select mt-2" >
                            <option disabled selected>Năm sản suất</option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                        <select name="" id="" className="form-select mt-2" >
                            <option disabled selected>Màu</option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                        <input type="text" placeholder="Biển số xe. Ví dụ: 43A123456" className="form-control mt-2"
                            // value={licensePlate}
                            onChange={handleChange}
                        />
                        {isValid === true ? (<>
                            <p></p>
                        </>) : (<>
                            <p>Sai định dạng</p>
                        </>)}
                        <div className="flex w-100 justify-content-around mt-2">
                            <button type="button" className="btn px-4 rounded-pill border-dark-subtle bg-white">Back</button>
                            <button type="submit" className="btn rounded-pill px-4 bg text-light">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        
        </div>
    
    </>);
}

export default FormInforVehical