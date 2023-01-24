import React, { useState } from "react"
import './Login.css'
import { useEffect } from 'react'
// import close from '../Images/close.svg'
import PhoneNumber from "./PhoneNumberModal"
import OTPModal from "./OTPModal"
import { Link } from "react-router-dom"

const Login = (props) => {
    const [phoneModal, setPhoneModal] = useState(false)
    
    const crossHandler = () => {
        // setPhoneModal(false)
        props.onclose()
    }

    return (
        <>
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
                                <input type="text" inputmode="numeric" onChange={() => props.onclose(2)} className="number" placeholder="Enter your mobile number" />
                            </div>
                        </div>
                    </div>
                </div> 
            {/* {props.login === 1 ?
                ""
                : props.login === 2 ?
                <PhoneNumber crossHandler={crossHandler} onClose={()=>props.onClose} />
                // <div className="modal" onClick={crossHandler}>
                //     <div className="main-content" onClick={(e) => {
                //         e.stopPropagation();
                //     }}>
                //         <div className="close" onClick={crossHandler}></div>
                //         <h4 className="login_heading">Continue using Phone</h4>
                //         <div className="content-detail" >
                //             <div className="input-containers">
                //                 <span>+91 |</span>
                //                 <input type="text"  onChange={() => setPhoneModal(true)} placeholder="Enter your mobile number" className="number" />
                //             </div>
                //             <div>
                //                 <button className="continue">CONTINUE</button>
                //             </div>
                //             <div className="term-and-condition">
                //                 <span>
                //                     By Proceeding you agree to the 
                //                     <Link> Terms of use </Link>
                //                      and
                //                     <Link> Privacy policy </Link>
                //                 </span>
                //             </div>
                //         </div>
                //     </div>
                // </div> 
                : props.login === 3 ? <OTPModal/> : ""} */}
        </>
    )
}

export default Login