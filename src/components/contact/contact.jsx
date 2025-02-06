import React from 'react'
import './contact.css'
import { AiOutlineMail } from "react-icons/ai";

const contact = () => {
  return (
    <div className='contact'>
        <div className="contact-title">
          <h1>Connect with me</h1>
        </div>
        <div className="contact-section">
          <div className="contact-left">
            <h1>Let's talk</h1>
            <p>I am currently avaailable to new projects</p>
            <div className="contact-details">
              <div className="contact-detail">
                <AiOutlineMail/>
                <p>er.st.ayushbhandari@gmail.com</p>
              </div>
              <div className="contact-detail">
                
              </div>
              <div className="contact-detail">
                
              </div>
              <div className="contact-detail">
                
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default contact