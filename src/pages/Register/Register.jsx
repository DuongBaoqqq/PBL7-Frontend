import React from "react";
import "./style.css";
import Logo from "../../components/Logo";
import { useState } from "react";
function Register() {
    const [phoneNumber, setPhoneNumber] = useState("");
  const [warning, setWarning] = useState(null);
    const regex = /^[0-9]+$/
    const handleChange = (event) => {
        let value = event.target.value;
        if (regex.test(value)) {
            if (value.length < 11) {
                setPhoneNumber(value);
                setWarning(null);
            }
            else {
            setWarning("Sai sdt roy");
            }
        }
        else {
            setWarning("Sai sdt roy");
        }

    }
    const notification = () => {
        if (!warning === null) {
            return (
                <div></div>
            )
        }
        else {
            return (
                <>
                    <p>{warning}</p>
                </>
            )
        }
    }

  return (
    <>
      <div className="row vh-100">
        <div className="col-4">
          <Logo />
        </div>
        <div className="flex justify-center responsive-div col-4 my-5 card shadow">
          <form action="" className="w-100 mt-5">
            <div className="flex justify-center">
              <h1 className="color">REGISTER</h1>
            </div>
            <div className="flex mx-20 direction-column align-start border-1 rounder-6 px-3">
              <label htmlFor="email " className="text-color text-size">
                Location
              </label>
              <select
                name="location"
                id="location"
                className="w-100 fontsize-16 border-none outline-none"
              >
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
              </select>
            </div>
            <div className="flex direction-column align-start  border-1 rounder-6 px-3">
              <label htmlFor="phone" className="text-color text-size">
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                onChange={handleChange}
                className=" flex-grow outline-none border-none w-95 fontsize-16"
                placeholder="0399883467"
              />
            </div>
            {notification()}
            <button
              type="submit"
              className="w-100 bg border-none btn rounder-6 mx-20 text-white hover:bg px-3 btn-primary">
              <p>
                <b>Register</b>
              </p>
            </button>
          </form>
        </div>
        <div className="col-4"></div>
      </div>
    </>
  );
}

export default Register;
