import React from 'react'
import './about.css'
import ME from '../../assets/me_about.png'
import { FaAward } from 'react-icons/fa'
import { AiOutlineFolder } from 'react-icons/ai'

function AboutCard({ icon, title, description }){
    return (
      <article className='about__card'>
        {icon}
        <h5>{title}</h5>
        <small>{description}</small>
      </article>
    )
}

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="me_about" />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <AboutCard icon=<FaAward className='about__icon'/> title='Experience' description={'1 Internship'} />
            <AboutCard icon=<AiOutlineFolder className='about__icon'/> title='Projects' description={'30+ Completed'} />
          </div>
          <p>
            A driven Computer Engineering major excelling at his Senior year in a Bachelor’s
            degree. Proficient in a wide variety of programming languages. 
            Comprehensive understanding of efficient algorithms, data structures and full-stack development. 
            More than capable of producing excellence in a competitive environment. 
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About