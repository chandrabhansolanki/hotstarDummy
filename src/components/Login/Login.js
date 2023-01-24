import React, { useState } from "react"
import './Login.css'
import { useEffect } from 'react'
// import close from '../Images/close.svg'
import PhoneNumber from "./PhoneNumber"
import { Link } from "react-router-dom"

const Login = (props) => {
    const [phoneModal, setPhoneModal] = useState(false)
    
    const crossHandler = () => {
        setPhoneModal(false)
        props.onclose()
    }

    return (
        <>
            {props.login &&
                <div className="modal" onClick={() => props.onclose()}>
                    <div className="content" onClick={(e) => {
                        e.stopPropagation();
                    }}>
                        <div className="close" onClick={() => props.onclose()}></div>
                        <h4 className="login_heading">Login to continue</h4>
                        <div className="button_container">
                            <button>Have a Facebook/Email account?</button>
                            <p>or</p>
                            <div className="input-container">
                                <span>+91 |</span>
                                <input type="text" inputmode="numeric" onChange={() => setPhoneModal(true)} className="number" placeholder="Enter your mobile number" />
                            </div>
                        </div>
                    </div>
                </div>}


            {phoneModal &&
                <div className="modal" onClick={crossHandler}>
                    <div className="main-content" onClick={(e) => {
                        e.stopPropagation();
                    }}>
                        <div className="close" onClick={crossHandler}></div>
                        <h4 className="login_heading">Continue using Phone</h4>
                        <div className="content-detail" >
                            <div className="input-containers">
                                <span>+91 |</span>
                                <input type="text"  onChange={() => setPhoneModal(true)} placeholder="Enter your mobile number" className="number" />
                            </div>
                            <div>
                                <button className="continue">CONTINUE</button>
                            </div>
                            <div className="term-and-condition">
                                <span>
                                    By Proceeding you agree to the 
                                    <Link> Terms of use </Link>
                                     and
                                    <Link> Privacy policy </Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            }

        </>
    )
}

export default Login