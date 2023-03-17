import React from 'react'
import './Experience.scss'
import { BsPatchCheckFill } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaNode } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiCplusplus } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
// import Clogo from '../../Assests/img/clogo.svg'

function Experience() {
  return (
    <div id='service'>
      <div className="text">
        <h1 className="skills">
          Skills, I have
        </h1>
      </div>
      <div className="container">
        <div className="contain">
          <div className="firstline line">
            <div className="React icon">
              <div className="logo">
                <FaReact/>
              </div>
              <div className="desc">
                <div className="batch">
                  <BsPatchCheckFill/>
                </div>
                <div className="name">
                  React
                </div>
              </div>
              <div className="level">
                Experienced
              </div>
            </div>
            <div className="React-Native icon">
            <div className="logo">
                <FaReact/>
              </div>
              <div className="desc">
                <div className="batch">
                  <BsPatchCheckFill/>
                </div>
                <div className="name">
                  React-Native
                </div>
              </div>
              <div className="level">
                Experienced
              </div>
            </div>
          </div>
          <div className="secondline line">
            <div className="Javascript icon">
            <div className="logo">
                <IoLogoJavascript/>
              </div>
              <div className="desc">
                <div className="batch">
                  <BsPatchCheckFill/>
                </div>
                <div className="name">
                  javascript
                </div>
              </div>
              <div className="level">
                Experienced
              </div>
            </div>
            <div className="Node icon">
            <div className="logo">
                <FaNode/>
              </div>
              <div className="desc">
                <div className="batch">
                  <BsPatchCheckFill/>
                </div>
                <div className="name">
                  Node.js
                </div>
              </div>
              <div className="level">
                Experienced
              </div>
            </div>
          </div>
          <div className="thirdline line">
            <div className="html icon">
            <div className="logo">
                <FaHtml5/>
              </div>
              <div className="desc">
                <div className="batch">
                  <BsPatchCheckFill/>
                </div>
                <div className="name">
                  HTML
                </div>
              </div>
              <div className="level">
                Experienced
              </div>
            </div>
            <div className="css icon">
            <div className="logo">
                <IoLogoCss3/>
              </div>
              <div className="desc">
                <div className="batch">
                  <BsPatchCheckFill/>
                </div>
                <div className="name">
                  CSS
                </div>
              </div>
              <div className="level">
                Intermediate
              </div>
            </div>
          </div>
          <div className="fourth line">
            <div className="C icon">
            <div className="logo">
                <DiMongodb/>
              </div>
              <div className="desc">
                <div className="batch">
                  <BsPatchCheckFill/>
                </div>
                <div className="name">
                  Mongodb
                </div>
              </div>
              <div className="level">
                Experienced
              </div>
            </div>
            <div className="Cplusplus icon">
            <div className="logo">
                <SiCplusplus/>
              </div>
              <div className="desc">
                <div className="batch">
                <BsPatchCheckFill/>
                </div>
                <div className="name">
                  C++
                </div>
              </div>
              <div className="level">
                Experienced
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience