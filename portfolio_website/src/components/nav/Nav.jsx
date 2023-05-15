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
  const [activeNav, setActiveNav] = useState('#') /* var=activeNav, setActiveNav=funct */

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

  return (
    <nav>
      <a onClick={() => { setActiveNav('#'); window.scrollTo(0, 0); }} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
      <a href="#portfolio" className={activeNav === '#portfolio' ? 'active' : ''}><AiOutlineFolder /></a>
      <a href="#work_history" className={activeNav === '#work_history' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#contact" className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

//      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>

export default Nav