import React from 'react'
import './about.css'
import ME from '../../assets/me_about2.png'
import { FaAward, FaBriefcase } from 'react-icons/fa'
import { AiOutlineFolder } from 'react-icons/ai'

function AboutCard({ icon, title, description }) {


    return (
      <article className='about__card'>
        {icon}
        <h5>{title}</h5>
        <small>
          {description}
        </small>
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
            <AboutCard icon=<AiOutlineFolder className='about__icon'/> title='Projects' description={'30+ Completed'} />
            <AboutCard icon=<FaAward className='about__icon' /> title='Education' description={"Bachelor of Science"} />
            {/*<AboutCard icon=<FaBriefcase className='about__icon' /> title='Experience' description={'1 Internship'} />*/}
          </div>
          <p>
          Hello, I am Seth Cram, a driven Software Engineer with experience in a variety of programming languages and technologies. As a Fullstack Software Engineer at Micron Technology, I seamlessly integrated new API features and crafted CI/CD pipelines to automate API testing, building, and deployment. I also excelled as a Communications Officer at the University of Idaho, where I efficiently coordinated the independent operation of several groups of Engineers. With respect to education, I graduated with a Bachelor of Science in Computer Engineering, boasting a GPA of 3.94.
          </p>
          <p>
          Several impressive projects bear my mark, including a Reputation Based Writing Platform, AI Natural Language Interface to Databases, and Ecommerce Product Matching Website. These projects involved designing, implementing, and deploying cutting-edge Machine Learning models and innovative websites. Additionally, I've detailed a variety of unit and integration tests to validate software performance. I personally excel at learning, communicating, and collaborating in a team setting and am always eager to learn new technologies and languages.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About