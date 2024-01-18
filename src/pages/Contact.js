
import React from 'react';
import '../styles/Contact.css';
import { Link } from 'react-router-dom'
import BG from '../assets/IETIBGGGG.gif'

function Contact() {
  return (
    <div className="contact">
<div
className="leftSide"
style={{backgroundImage: `url(${BG})`}}
></div>

    <div className="rightSide">
      <h1> Contact Us</h1>


      <form id="contact-form" method="POST">
       <label htmlFor="name">Full Name</label>
       <input name="name" placeholder="Enter full name..." type="text" />
       <label htmlFor="email" placeholder="Enter email..." type="email" />
       <label htmlFor="message">Message</label>
       <textarea
       rows="6"
       placeholder="Enter message..."
       name="message"
       required
       ></textarea>
       <button type="submit"> Send Message</button>
      




      </form>
      </div>
      </div>
  )
}

export default Contact