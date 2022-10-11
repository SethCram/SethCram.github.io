import React from 'react'
import './work_history.css'
import Micron from '../../assets/micron.png'
import Uidaho from '../../assets/uidaho.jpg'

/* map returns the arr while forEach doesn't return anything */
const Work_History = () => {
  const company_work_history = [
    {
      id: 1,
      logo: Micron,
      name: 'Micron Technology',
      position: 'IT Software Engineer',
      description: [
        'Followed the Agile software development methodology within a team of 20 developers',
        'Refactored and deployed a .NET Core web service to OpenShift utilizing Docker',
        'Trained in Micron\'s distributed communications system',
      ]
    },
    {
      id: 2,
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
        {
          company_work_history.map(({ id, logo, name, position, description }) => {
            return (
              <article key={id} className='work_history'>
                <div className='company__logo'>
                  <img src={logo} alt={name} />
                </div>
                <h6 className='company__name' >{name}</h6>
                <h5 className='company__position'>{position}</h5>
                  <small className='company__description'>
                  <ul>
                    {
                      description.map((sentence, index) => {              
                        return (
                          <div>
                            <li key={index}>{sentence}</li>
                          </div>
                        )
                      }
                      )
                    }
                    </ul>
                  </small>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Work_History