import React from 'react'
import './work_history.css'
import Micron from '../../assets/micron.png'
import Uidaho from '../../assets/uidaho.jpg'

const Work_History = () => {
  const company_work_history = [
    {
      logo: Micron,
      name: 'Micron Technology',
      position: 'IT Software Engineer',
      description: [
        'Followed the Agile software development methodology within a team of 20 developers',
        'Refactored and deployed a .NET Core web service to OpenShift utilizing Docker',
        'Trained in Micron\'s distributed communications system'
      ]
    },
    {
      logo: Uidaho,
      name: 'University of Idaho',
      position: 'Communication\'s Officer',
      description: [
        'Networked with High Schools across the Northwest to garner excitement for a career in STEM',
        'Articulated technical challenges and solutions to non-technical people',
        'Assisted in leading a group of nearly 30 engineers'
      ]
    }
  ]

  return (
    <section id='work_history'>
      <h5>Experience from previous employment</h5>
      <h2>Work History</h2>
      <div className='container work_history__container'>
        <article className='work_history'>
          <div className='company__logo'>
            <img src={Micron} alt='micron' />
          </div>
          <h6 className='company__name' >Micron Technology</h6>
          <h5 className='company__position'>as</h5>
            <small className='company__description'>
              <ul>
                <li>Followed the Agile software development methodology within a team of 20 developers</li>
                <li>Refactored and deployed a .NET Core web service to OpenShift utilizing Docker</li>
                <li>Trained in Micron’s distributed communications system</li>
              </ul>
            </small>
        </article>
        <article className='work_history'>
          <div className='company__logo'>
            <img src={Micron} alt='micron' />
          </div>
          <h5 className='company__name'>Micron Technology</h5>
            <small className='company__description'>
              <ul>
                <li>Followed the Agile software development methodology within a team of 20 developers</li>
                <li>Refactored and deployed a .NET Core web service to OpenShift utilizing Docker</li>
                <li>Trained in Micron’s distributed communications system</li>
              </ul>
            </small>
        </article>
      </div>
    </section>
  )
}

export default Work_History