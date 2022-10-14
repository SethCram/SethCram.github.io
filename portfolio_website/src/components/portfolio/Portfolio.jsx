import React from 'react'
import './portfolio.css'
import Dungeon_Jump from '../../assets/Dungeon_Jump.png'
import BestBuySearch from '../../assets/BestBuySearch.PNG'
import Website from '../../assets/website.PNG'

/* {} indicated in JS mode */
/* blank target opens inna new tab */
const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      image: BestBuySearch,
      title: 'Ecommerce Product Matching Site',
      github: 'https://github.com/SethCram/Best-Buy-Search-Project',
      product: 'https://sethcram.pythonanywhere.com/BestBuySearch/login/',
    },
    {
      id: 2,
      image: Website,
      title: 'React Portolio Website',
      github: 'https://github.com/SethCram/SethCram.github.io',
      product: 'https://sethcram.github.io/',
    },
    {
      id: 3,
      image: Dungeon_Jump,
      title: '2D Variable-Perspective Adventure Game',
      github: 'https://github.com/3khoin/CS383Spring2022',
      product: '',
    }
  ]
  
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        {
          portfolioItems.map(({ id, image, title, github, product }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                  <a href={product} className='btn btn-primary' target='_blank' rel="noreferrer">Product</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio