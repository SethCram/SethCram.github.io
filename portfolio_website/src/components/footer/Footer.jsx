import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import {ImStackoverflow} from 'react-icons/im'

function CreateListLink({link, linkName}) {
  return (
    <li>
      {link ? /* if link available, render it */
        <a href={link}>{linkName}</a>
        : /* if link not available, assume wanna scroll to top*/
        <a onClick={() => window.scrollTo(0, 0)}>{linkName}</a>
      }
      
    </li>
  )
}

const Footer = () => {
  return (
    <footer>
      <a onClick={() => {window.scrollTo(0, 0)}} className='footer__logo'>Seth Cram</a>
      <ul className='permalinks'>
        <CreateListLink
          linkName="Home"
        />
        <CreateListLink 
          link="#about"
          linkName="About"
        />
        <CreateListLink 
          link="#experience"
          linkName="Experience"
        />
        <CreateListLink 
          link="#portfolio"
          linkName="Portfolio"
        />
        <CreateListLink 
          link="#work_history"
          linkName="Work History"
        />
        <CreateListLink 
          link="#contact"
          linkName="Contact"
        />
      </ul>

      <div className='footer__socials'>
        <a href="https://github.com/SethCram" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://www.linkedin.com/in/seth-cram/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://stackoverflow.com/users/13046931/seth" target="_blank" rel="noreferrer"><ImStackoverflow/></a>
      </div>

      <div className='footer__copyright'>
        <small>Copyright &copy; {new Date().getFullYear()} | Seth Cram </small>
      </div>

    </footer>
  )
}

export default Footer