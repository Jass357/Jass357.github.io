import React from 'react';
import { LinkedIn, GitHub} from '@mui/icons-material'; // Importing icons
import "../styles/Alle.css";

function About() {
  return (
    <section id="about">
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img src="./assets/about-pic.jpeg" alt="Profile picture" className="about-pic" />
          <div className="social-icons-container">
            {/* LinkedIn Icon */}
            <LinkedIn sx={{ color: 'blue', fontSize: 40 }} onClick={() => window.location.href = 'https://www.linkedin.com'} />
            {/* GitHub Icon */}
            <GitHub sx={{ color: 'black', fontSize: 40 }} onClick={() => window.location.href = 'https://github.com'} />
            {/* Twitter Icon */}
          
            {/* Reddit Icon */}
            
          </div>
          <div className="text-container">
            <p>
              Info
            </p>
          </div>
        </div>
        <div className="about-details-container">
          <div className="about1-container">
            <div className="details-container">
              <img src="./assets/experience.png" alt="icon" className="icon" />
              <h3>DEVELOPER</h3>
              <p> Java C# APP dev Pro React Front end</p>
            </div>
          </div>
        </div>
      </div>
      <img src="./assets/arrow.png" alt="Arrow icon" className="icon arrow" onClick={() => window.location.href = './#experience'} />
    </section>
  );
}

export default About;
