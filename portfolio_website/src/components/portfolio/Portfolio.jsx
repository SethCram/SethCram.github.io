import React from 'react'
import './portfolio.css'

/* blank target opens inna new tab */
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>

          </div>
          <h3>Portfolio item title</h3>
          <a href="" className='btn'>Github</a>
          <a href="" className='btn btn-primary' target='_blank'>Product</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio