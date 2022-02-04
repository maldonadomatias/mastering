import React from "react";
import './Portal.css'
import {AiOutlineClose} from 'react-icons/ai'


const Portal = ({closeModal}) => {
  return (
    <div className="modalBackground">
        <div className="modalContainer">
            <button onClick={() => closeModal()}><AiOutlineClose id="closeBtn"/></button>
            <div className="modalDiv">
                <ul>
                    <li className="modalText">Atlas</li>
                    <li className="modalText">Billing</li>
                    <li className="modalText">Capital</li>
                    <li className="modalText">Checkout</li>
                    <li className="modalText">Payments</li>
                    <li className="modalText">Tax</li>
                </ul>
            </div>
        </div>
    </div>
)
};

export default Portal;
