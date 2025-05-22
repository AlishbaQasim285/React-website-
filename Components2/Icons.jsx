import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruckFast,
  faCreditCard,
  faMoneyBillTransfer,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import "./Latest.css";
const Icons = () => {
  return (
    <>
      <div className="bg-gradient-to-r  from-stone-700 via-red-500 to-slate-600 pt-10">
        <div className="features-container ps-16 pe-16">
          <div className="feature">
            <FontAwesomeIcon
              icon={faTruckFast}
              className="feature-icon text-slate-500"
            />
            <h3>Fast & Free Delivery</h3>
            <p>Free delivery on all orders</p>
          </div>
          <div className="feature">
            <FontAwesomeIcon icon={faCreditCard} className="feature-icon" />
            <h3>Secure Payment</h3>
            <p>Free delivery on all orders</p>
          </div>
          <div className="feature">
            <FontAwesomeIcon
              icon={faMoneyBillTransfer}
              className="feature-icon"
            />
            <h3>Money Back Guarantee</h3>
            <p>Free delivery on all orders</p>
          </div>
          <div className="feature">
            <FontAwesomeIcon icon={faClock} className="feature-icon" />
            <h3>Online Support</h3>
            <p>Free delivery on all orders</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Icons;
