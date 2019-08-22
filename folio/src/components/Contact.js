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
                <li className="contactText">
                  <a href='https://twitter.com/nisa_Champagne' className='socials'>TWitter</a>
                </li>
                <li className="contactText">
                  <a href='https://github.com/nisaChampagne' className='socials'>Github</a>
                </li>
                <li className="contactText">
                  <a href="https://www.linkedin.com/in/nisa-champagne-32782b182/" className='socials' >LinkedIn</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }