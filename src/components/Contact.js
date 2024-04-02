import React from 'react'
import { LinkedIn, GitHub, Reddit, Email } from '@mui/icons-material'; // Importing icons

function Contact() {
  return (
    <section id="contact">
    <p className="section__text__p1">Get in Touch</p>
    <h1 className="title">Contact Me</h1>
    <div className="contact-info-upper-container">
      <div className="contact-info-container">
      <div className="social-icons-container">
            {/* LinkedIn Icon */}
          
            {/* GitHub Icon */}
            <GitHub sx={{ color: 'black', fontSize: 40 }} onClick={() => window.location.href = 'https://github.com'} />
            <Email sx={{ color: 'black', fontSize: 40 }} onClick={() => window.location.href = 'https://github.com'} />
            {/* Twitter Icon */}
          
            {/* Reddit Icon */}
            
          </div>
       
      </div>
      <div className="contact-info-container">
        <img src="./assets/linkedin.png" alt="" className="icon contact-icon" />
        <p>
        <LinkedIn sx={{ color: 'blue', fontSize: 40 }} onClick={() => window.location.href = 'https://www.linkedin.com'} />
        <a href="https://www.linkedin.com"></a></p>
      </div>
    </div>
  </section>

  )
}

export default Contact