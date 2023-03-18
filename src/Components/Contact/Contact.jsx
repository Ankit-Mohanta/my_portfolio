import React from 'react'
import './Contact.scss'
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

function Contact() {
  
  return (
    <div id='contact'>
      <div className="text">
        <div>Contact me</div>
      </div>
      <div className="container">
        <div className="conatiner-left">
          <div className="email">
            <div className="logo"><MdOutlineEmail/></div>
            <div className="name">Email</div>
            <a className="link" href="mailto:maohantaankit2002@gmail.com">Send a message</a>
          </div>
          <div className="whatsAPP">
          <div className="logo"><BsWhatsapp/></div>
            <div className="name">What's app</div>
            <a className="link" href="https://api.whatsapp.com/send?phone=8917501131"
              target="_blank">Send a message</a>
          </div>
        </div>
        <div className="conatiner-right">
          HELLO
        </div>
      </div>
    </div>
  )
}

export default Contact