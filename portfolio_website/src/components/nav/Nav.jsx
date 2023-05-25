import React from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { AiOutlineFolder } from 'react-icons/ai'
import { useState } from 'react' /*considered a 'hook'*/

//could make an navbar icon comp w/ onClick events so don't need copy + paste
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home') /* var=activeNav, setActiveNav=funct */

  //needa manually change hashcode to none for '#' nav

  React.useEffect(() => { /* Only ever fires once */
    function updateNav() {
      //console.log(window.location.hash);
      setActiveNav(window.location.hash);
    }
    window.addEventListener('hashchange', updateNav);

    // cleanup this component
    return () => window.removeEventListener('hashchange', updateNav);
  }, []);

  const chooseClassName = (hashcode) => {
    if (hashcode === activeNav) {
      return 'active'
    }
    else {
      return ''
    }
  }

  return (
    <nav>
      <a href="#home" className={chooseClassName('#home')}><AiOutlineHome /></a>
      <a href="#about" className={chooseClassName('#about')}><AiOutlineUser /></a>
      <a href="#experience" className={chooseClassName('#experience')}><BiBook /></a>
      <a href="#portfolio" className={chooseClassName('#portfolio')}><AiOutlineFolder /></a>
      <a href="#work_history" className={chooseClassName('#work_history')}><RiServiceLine /></a>
      <a href="#contact" className={chooseClassName('#contact')}><BiMessageSquareDetail /></a>
    </nav>
  )
}

//      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>

export default Nav