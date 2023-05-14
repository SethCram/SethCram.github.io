import React from 'react'
import './work_history.css'
import Micron from '../../assets/micron.png'
import Uidaho from '../../assets/uidaho.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

/* map returns the arr while forEach doesn't return anything */
/* Outer tag = parent tag */
const Work_History = () => {
  const company_work_history = [
    {
      id: 1,
      logo: Micron,
      name: 'Micron Technology',
      position: 'Fullstack Software Engineer',
      description: [
        'Produced seamless API patches following the Agile methodology.',
        'Containerized a .NET Core API and deployed it to Linux for 24/7 availability.',
        'Broadcasted essential information through an XML/JSON-based distributed communications system.',
      ]
    },
    {
      id: 2,
      logo: Uidaho,
      name: 'University of Idaho',
      position: 'Communications Officer',
      description: [
        'Championed leadership of nearly 30 engineers to encourage student excitement in STEM.',
        'Expertly networked with teachers and faculty from High Schools across the Northwest.',
        'Compellingly conveyed technical challenges and solutions to non-technical people.'
      ]
    }
  ]

  return (
    <section id='work_history'>
      <h5>Experience from previous employment</h5>
      <h2>Work History</h2>
      <Swiper className='container work_history__container'
      // install Swiper modules
      modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
      >
        {
          company_work_history.map(({ id, logo, name, position, description }) => {
            return (
              <SwiperSlide key={id} className='work_history'>
                <div className='company__logo'>
                  <img src={logo} alt={name} />
                </div>
                <h6 className='company__name' >{name}</h6>
                <h5 className='company__position'>{position}</h5>
                  <small className='company__description'>
                  <ul className='company__list'>
                    {
                      description.map((sentence, index) => {              
                        return (
                          <li className='company__list__element' key={index}>{sentence}</li>
                        )
                      }
                      )
                    }
                    </ul>
                  </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
      
    </section>
  )
}

export default Work_History