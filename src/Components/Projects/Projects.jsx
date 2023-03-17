import React from 'react'
import './Projects.scss'
import project1 from '../../Assests/img/project1.jpg'

function Projects() {
  return (
    <div id='projects'>
      <div className="container">
        <div className="project1">
          <img className="image" src={project1} alt='project1'></img>
          <h3 className="text">My portfolio made using React.js</h3>
          <div className="buttons">
            <a className="Git" href="https://github.com/Ankit-Mohanta/my_portfolio.gthub.io/" target="_blank" rel="noopener noreferrer">
              Git-Hub
            </a>
            <a className="site" href="https://namastecoder.netlify.app/" target="_blank" rel="noopener noreferrer">
              Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects