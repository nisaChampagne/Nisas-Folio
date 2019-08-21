import React from "react";

export default function Contact(){
    return (
      <div className="flex">
        <div className="contactContainer">
          <div className="wrapper animated bounceInLeft">
            <div className="company-info">
              <h1>Let's Connect!</h1>
              <ul>
                <li className="contactText">
                  <i className="phone" /> (813) 344 - 8993
                </li>
                <li className="contactText">
                  <i className="email" /> nchampag23@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }