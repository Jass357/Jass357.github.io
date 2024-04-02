import React from 'react';
import Dictionary from './Apps';
import BMICalculater from './BMICalculater';

function Projects() {
  return (
    <section id="projects">
      
      <h1 className="title"><i>Projects And Applications</i></h1>
      <div className="experience-details-container">
        <div className="about-containers">
          {/* Project One */}
    
          <div className="details-container color-container">
            <div className="article-container">
              <img src="./assets/project-1.png" alt="Project 1" className="project-img" />
              <Dictionary />

            <div>
              <p> Skills used - Api, Js</p>
            </div>
            </div>
            <h2 className="experience-sub-title project-title">Project One</h2>
            <div className="btn-container">
              <button className="btn btn-color-2 project-btn" onClick={() => window.location.href='https://github.com/'}>
                get my c_ode
              </button>
              {/* Add button for live demo */}
            </div>
          </div>

          {/* Project Two */}
          <div className="details-container color-container">
            <div className="article-container">
              <img src="./assets/project-2.png" alt="Project 2" className="project-img" />
              <BMICalculater/>
              
            </div>
            <h2 className="experience-sub-title project-title">Project Two</h2>
            <div className="btn-container">
              <button className="btn btn-color-2 project-btn" onClick={() => window.location.href='https://github.com/'}>
              get my c_ode
              </button>
              {/* Add button for live demo */}
            </div>
          </div>

          {/* Project Three */}
          <div className="details-container color-container">
            <div className="article-container">
              <img src="./assets/project-3.png" alt="Project 3" className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">Project Three-</h2>
            
          </div>

<div className="details-container color-container">
            <div className="article-container">
              <img src="./assets/project-3.png" alt="Project 3" className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">Restaurent Website</h2>
            <div className="btn-container">
              <button className="btn btn-color-2 project-btn" onClick={() => window.location.href='https://github.com/'}>
              View my Website
              </button>

              
              <br></br>

              <div>
              <p> Skills used - Api, Js</p>
            </div>
              {/* Add button for live demo */}
            </div>
          </div>
          {/* Add Dictionary Component */}
        
        </div>
      </div>
      <img src="./assets/arrow.png" alt="Arrow icon" className="icon arrow" onClick={() => window.location.href='./#contact'} />
    </section>
  );
}

export default Projects;
