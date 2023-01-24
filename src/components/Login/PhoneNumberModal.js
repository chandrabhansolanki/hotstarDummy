import React from "react"
import './Login.css'
import { Link } from "react-router-dom"

const PhoneNumber = (props) => {
    
    return (
        <div className="modal" onClick={()=>props.onclose()}>
            <div className="main-content" onClick={(e) => {
                e.stopPropagation();
            }}>
                <div className="close" onClick={()=>props.onclose()}></div>
                <h4 className="login_heading">Continue using Phone</h4>
                <div className="content-detail" >
                    <div className="input-containers">
                        <span>+91 |</span>
                        <input type="text" placeholder="Enter your mobile number" className="number" />
                    </div>
                    <div>
                        <button className="continue" onClick={() => props.onclose(3)}>CONTINUE</button>
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
    )
}

export default PhoneNumber