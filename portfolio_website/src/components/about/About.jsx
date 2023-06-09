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
            Hello, I am Seth Cram, a driven Software Engineer with experience in a variety of frontend and backend programming languages and technologies.
            I recently graduated with a Bachelor's of Science in Computer Engineering, boasting a GPA of 3.94 with Magna Cum Laude honors.
            As a Fullstack Software Engineer at Micron Technology, I followed the Agile software development methodology and seamlessly integrated new API features.
            I also excelled as a Communications Officer at the University of Idaho, where I efficiently coordinated the independent operation of several groups of Engineers.
          </p>
          <p>
            Several impressive projects bear my mark, including a Reputation Based Writing Platform, Database Natural Language Interface, and Breakout Gaming AI.
            These projects involved designing, implementing, and deploying innovative websites and cutting-edge Machine Learning models.
            Additionally, I personally excel at learning, communicating, and collaborating in team setting and am always eager to learn new technologies and programming languages.
            {/*I'm a Software Engineer well-versed in various frontend and backend technologies. 
            Proficient in a wide variety of programming languages with comprehensive understanding of efficient algorithms, data structures, and fullstack development. 
            More than capable of producing excellence in a competitive environment. */}
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About