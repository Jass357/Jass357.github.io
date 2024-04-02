


import React from 'react'

function Skills() {
  return (
  <section id="experience">
    
    <h1 className="title">Skills</h1>
    <div className="experience-details-container">
      <div className="about-containers">
        <div className="details-container">
          <h2 className="experience-sub-title">Frontend Development</h2>
          <div className="article-container">
            <article>
              <img
                src="./assets/checkmark.png"
                alt="Experience icon"
                className="icon"
              />
              <div>
                <h3>HTML5/CSS3/Javascript</h3>
               
              </div>
            </article>
            <article>
              <img
                src="./assets/checkmark.png"
                alt="Experience icon"
                className="icon"
              />
              <div>
                <h3>GIT(version control)</h3>
               
              </div>
            </article>
            <article>
              <img
                src="./assets/checkmark.png"
                alt="Experience icon"
                className="icon"
              />
              <div>
                <h3>Visual Studio/ Chrome devTools(CI/CD)</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article>
              <img
                src="./assets/checkmark.png"
                alt="Experience icon"
                className="icon"
              />
              <div>
                <h3>React.js Components</h3>
                <p>Basic</p>
              </div>
            </article>
            <article>
              <img
                src="./assets/checkmark.png"
                alt="Experience icon"
                className="icon"
              />
              <div>
                <h3>Unit Tests/Debugging</h3>
                <p>Basic</p>
              </div>
            </article>
           
          </div>
        </div>
        <div className="details-container">
          <h2 className="experience-sub-title">Backend Development</h2>
          <div className="article-container">
            <article>
              <img
                src="./assets/checkmark.png"
                alt="Experience icon"
                className="icon"
              />
              <div>
                <h3>Postman Apis</h3>
                <p>Basic</p>
              </div>
            </article>
            <article>
              <img
                src="./assets/checkmark.png"
                alt="Experience icon"
                className="icon"
              />
              <div>
                <h3>Node JS</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article>
              <img
                src="./assets/checkmark.png"
                alt="Experience icon"
                className="icon"
              />
              <div>
                <h3>Postgresql databases</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article>
              <img
                src="./assets/checkmark.png"
                alt="Experience icon"
                className="icon"
              />
              <div>
                <h3> IntelliJ</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article>
              <img
                src="./assets/checkmark.png"
                alt="Experience icon"
                className="icon"
              />
              <div>
                <h3>Debugging</h3>
                <p>Intermediate</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
    <img
      src="./assets/arrow.png"
   
      className="icon arrow"
      onclick="location.href='./#projects'"
    />
  </section>
  )
}

export default Skills;








