import React from 'react'
import './Header.scss'
import { AiOutlineGithub } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { AiOutlineArrowRight } from 'react-icons/ai'
import ME from '../../Assests/img/ME.png'
import CV from '../../Assests/CV.pdf'
import { Avatar } from '@mui/material'

function Header() {
  return (
    <div className='Header'>
        <div className="header">
            <div className="left">
                <AiOutlineGithub/>
                <AiOutlineLinkedin/>
                <AiOutlineInstagram/>
            </div>
            <div className="middle">
                <div className="middle-left">
                    <div className="image">
                        <Avatar
                        alt='ME'
                        src={ME}
                        sx={{ width: 300, height: 300 }}
                        />
                    </div>
                </div>
                <div className="middle-right">
                    <div className="text">
                        <h5>Hello I'm</h5>
                        <h2>ANKIT MOHANTA</h2>
                        <h5>Full-stack developer</h5>
                    </div>
                    <div className="button">
                        <a href={CV} download>Download CV</a>
                        <button>Let's talk</button>
                    </div>
                </div>
            </div>
            <div className="right">
                Scroll down <AiOutlineArrowRight/>
            </div>
        </div>
    </div>
  )
}

export default Header