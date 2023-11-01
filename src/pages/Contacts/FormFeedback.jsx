import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import './FormFeedback.css';
const Feedback = (props) => {
    const [feedback, setFeedback] = useState({
        "message":'',
        "region":'',
        "subject":'',
        "name":'',
        "email":'',
        "phone":''
    });
    
    const handleSendFeadback = () => {
        console.log(feedback);
        props.setIsOpen(!props.isOpen);
    }

    const handleInputChange = (event) => {
        const key = event.target.name;
        const value = event.target.value;
        setFeedback(prevFeedback => ({
            ...prevFeedback,
            [key]: value
        }));
    }

    return(
        <>
           <div className={`main-content`}>
                <div className={`d-flex justify-content-center`}>
                    <div className={`wrapper`}>
                        <div className={`d-flex justify-content-center mb-3`}><h4>Feedback</h4></div>
                        <div className={`mb-3`}>
                            <textarea className="form-control" name="message" placeholder="Message" aria-required="true" value={feedback['message']} onChange={(event)=>handleInputChange(event)}/>
                        </div>
                        <div className={`mb-3`}>
                            <select className="form-select form-select-lg" name='region' value={feedback['region']} onChange={(event)=>handleInputChange(event)}>
                                <option >Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className={`mb-3`}>
                            <select className="form-select form-select-lg" name='subject' value={feedback['subject']} onChange={(event)=>handleInputChange(event)}>
                                <option >Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>

                        <div className={`mb-3`}>
                            <div className="input-group input-group-lg">
                                <input name='name' type="text" className="form-control" placeholder='Your name' value={feedback['name']} onChange={(event)=>handleInputChange(event)}/>
                            </div>
                        </div>

                        <div className={`mb-3 row`}>
                            <div className={`col-6`}>
                                <div className="input-group input-group-lg">
                                    <input name='email' value={feedback['email']} onChange={(event)=>handleInputChange(event)} type="text" className="form-control" placeholder='Email'/>
                                </div>
                            </div>
                            <div className={`col-6`}>
                                <div className="input-group input-group-lg">
                                    <input name='phone' type="text" className="form-control" placeholder='Phone number' value={feedback['phone']} onChange={(event)=>handleInputChange(event)}/>
                                </div>
                            </div>
                        </div>
                        <div className={`submit-button`}>
                            <button onClick={()=>handleSendFeadback()}>Send</button>
                        </div>
                    </div>
                </div>
           </div>
        </>
    )
}

export default Feedback;