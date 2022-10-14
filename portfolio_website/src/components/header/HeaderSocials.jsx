import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import {ImStackoverflow} from 'react-icons/im'

const HeaderSocials = () => {
  return (
      <div className='header__socials'>
        <a href="https://github.com/SethCram" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://www.linkedin.com/in/seth-cram/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://stackoverflow.com/users/13046931/seth" target="_blank" rel="noreferrer"><ImStackoverflow/></a>
      </div>
  )
}

export default HeaderSocials