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
        'Spearheaded seamless API patches for a Fortune 500 company following the Agile methodology.',
        'Containerized .NET Core APIs and deployed them to Linux for 24/7 availability.',
        'Crafted several CI/CD pipelines to automate API testing, building, and deployment.',
      ]
    },
    {
      id: 2,
      logo: Uidaho,
      name: 'University of Idaho',
      position: 'Communications Officer',
      description: [
        'Championed leadership of an engineering group to inspire student interest in STEM fields.',
        'Established connections with high school teachers and faculty to promote technical education.',
        'Compellingly conveyed technical concepts to non-technical audiences.'
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