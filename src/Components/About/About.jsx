import React from 'react'
import './About.scss'
import AboutME from '../../Assests/img/AboutME.png'
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

function About() {
  return (
    <div id='about'>
        <div className="container">
          <div className="top">
            <h1>About Me</h1>
          </div>
          <div className="bottom">
            <div className="bottom-left">
              <div className="clone">
                <img src={AboutME} alt="About Me" />
              </div>
            </div>
            <div className="bottom-right">
              <div className="cards">
                <div className="Section">
                  <div className="icon">
                    <FaAward/>
                  </div>
                  <div className="text">
                    Experience
                  </div>
                  <div className="time">
                    1 year of experience
                  </div>
                </div>
                <div className="Section">
                <div className="icon">
                    <VscFolderLibrary/>
                  </div>
                  <div className="text">
                    Projects
                  </div>
                  <div className="time">
                    5 projects
                  </div>
                </div>
              </div>
              <div className="about-me">
              <p>
              Hi, I'm a BCA student and a full stack developer who is eager to learn and grow in the software industry. As a fresher, I am excited to gain hands-on experience in developing robust and scalable web applications using cutting-edge technologies. With a strong foundation in programming languages such as Java, JavaScript, and Python, I am confident in my ability to contribute to a variety of projects. I'm passionate about problem-solving, and I enjoy collaborating with others to find innovative solutions to complex challenges.
              </p>
              </div>
              <div className="buttom-section">
                <a href="#contact">Let's talk</a>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About