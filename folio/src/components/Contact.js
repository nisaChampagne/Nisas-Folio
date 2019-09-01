import React from "react";

export default function Contact(){
    return (
      <div>
        <div className="contactContainer">
          <div>
            <div className="companyinfo">
              <h1 className='contactH1'>Let's Connect!</h1>
                <div className="contactText">
                  <i className="phone" /> (813) 344 - 8993
                </div>
                <div className="contactText">
                  <i className="email" /> nchampag23@gmail.com
                </div>
                <div className='socialsHolder'>
                <div className="contactText">
                  <a href='https://twitter.com/nisa_Champagne' className='socials'>TWitter</a>
                </div>
                <div className="contactText">
                  <a href='https://github.com/nisaChampagne' className='socials'>Github</a>
                </div>
                <div className="contactText">
                  <a href="https://www.linkedin.com/in/nisa-champagne-32782b182/" className='socials' >LinkedIn</a>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }