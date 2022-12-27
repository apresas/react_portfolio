import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href="https://www.linkedin.com/in/aj-presas-68615a12a/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/apresas" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://dribbble.com/apresas/about" target="_blank" rel="noreferrer"><FiDribbble/></a>
    </div>
  )
}

export default HeaderSocials