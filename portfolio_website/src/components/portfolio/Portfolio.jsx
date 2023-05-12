import React from 'react'
import './portfolio.css'
import Dungeon_Jump from '../../assets/Dungeon_Jump.png'
import BestBuySearch from '../../assets/BestBuySearch.PNG'
import Book_Club from '../../assets/Book_Club.PNG'
import Brick_Breaker from '../../assets/brick_breaker.PNG'
import Games from '../games/Games.jsx'
import { useState } from 'react' 

/* {} indicated in JS mode */
/* blank target opens inna new tab */
const Portfolio = () => {
  const [activeGame, setActiveGame] = useState(false) 
  
  const portfolioItems = [
    {
      id: 1,
      image: Book_Club,
      title: 'Reputation Based Writing Platform',
      github: 'https://github.com/SethCram/book-club',
      product: 'https://book-club.us.to/',
      target: '_blank',
    },
    {
      id: 2,
      image: BestBuySearch,
      title: 'Ecommerce Product Matching Site',
      github: 'https://github.com/SethCram/Best-Buy-Search-Project',
      product: 'https://sethcram.pythonanywhere.com/BestBuySearch/login/',
      target: '_blank',
    },
    /*
    {
      id: 2,
      image: Website,
      title: 'React Portolio Website',
      github: 'https://github.com/SethCram/SethCram.github.io',
      product: 'https://sethcram.github.io/',
      target: '_blank',
    },
    */
    {
      id: 3,
      image: Dungeon_Jump,
      title: '2D Variable-Perspective Adventure Game',
      github: 'https://github.com/3khoin/CS383Spring2022',
      product: `${activeGame ? '#games' : 'javascript:void(0)'}`, //'#games', 
      target: '',
      onClick: () => setActiveGame(!activeGame), //invert active state of iframe code onclick()
    },
    {
      id: 4,
      image: Brick_Breaker,
      title: 'Modernized Brick Breaker Game',
      github: 'https://github.com/SethCram/Breakout-Clone',
      product: 'https://sethcram.weebly.com/breakout-clone.html',
      target: '_blank',
    },
  ]

  return (
    <div>
      <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
        <div className='container portfolio__container'>
          {
            portfolioItems.map(({ id, image, title, github, product, target, onClick }) => {
              return (
                <article key={id} className='portfolio__item'>
                  <div className='portfolio__item-image'>
                    <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <div className='portfolio__item-cta'>
                    <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                    <a href={product} onClick={onClick} className='btn btn-primary' target={target} rel="noreferrer">Product</a>
                  </div>
                </article>
              )
            })
          }
        </div>
      </section>
    
      <div 
        className={`${activeGame ? 'game-shown' : 'game-hidden'}`}
      > 
        {activeGame &&
          < Games />
        }

      </div>
    </div>
  )
}

export default Portfolio