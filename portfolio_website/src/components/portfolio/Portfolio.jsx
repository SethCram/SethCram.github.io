import './portfolio.css'
import Dungeon_Jump from '../../assets/Dungeon_Jump.png'
import BestBuySearch from '../../assets/BestBuySearch.PNG'
import Book_Club from '../../assets/Book_Club.PNG'
import Linguists_Client from '../../assets/Linguists_Client.PNG'
import Brick_Breaker from '../../assets/brick_breaker.PNG'
import FT13_Game from '../../assets/FT13.PNG'
import Games from '../games/Games.jsx'
import { useState } from 'react' 

/* {} indicated in JS mode */
/* blank target opens inna new tab */
const Portfolio = () => {
  const [activeGame, setActiveGame] = useState(false) 
  const GAME_TITLES = {
    DUNGEON_JUMP: 1,
    BRICK_BREAKER: 2,
  }
  const [currGameName, setCurrGameName] = useState(0); 

  console.log(currGameName);
  
  const portfolioItems = [
    {
      id: 1,
      image: Book_Club,
      title: 'Reputation Based Writing Platform',
      github: 'https://github.com/SethCram/book-club',
      product: 'https://book-club.us.to/',
    },
    {
      id: 2,
      image: BestBuySearch,
      title: 'Ecommerce Product Matching Site',
      github: 'https://github.com/SethCram/Best-Buy-Search-Project',
      product: 'https://sethcram.pythonanywhere.com/BestBuySearch/login/',
    },
    {
      id: 3,
      image: Linguists_Client,
      title: 'AI Natural Language Interface to Databases',
      github: 'https://github.com/SethCram/Linguists-NLP-to-SQL',
      product: `https://github.com/SethCram/linguists-client`, //'#games', 
    },
    {
      id: 4,
      image: FT13_Game,
      title: 'Multiplayer Team-Focussed Game',
      github: 'https://github.com/SethCram/Friday-the-13th-Game',
      product: `https://drive.google.com/drive/folders/1rkJ1HrhBPyzCM6HnGW3mtzlJ1LLmHoAJ?usp=sharing`, //'#games', 
    },
    {
      id: 5,
      image: Dungeon_Jump,
      title: 'Variable-Perspective Adventure Game',
      github: 'https://github.com/3khoin/CS383Spring2022',
      isWebGame: true, 
      gameTitle: GAME_TITLES.DUNGEON_JUMP,
      onClick: () => { setActiveGame(!activeGame); setCurrGameName(GAME_TITLES.DUNGEON_JUMP);}, //invert active state of iframe code onclick()
    },
    {
      id: 6,
      image: Brick_Breaker,
      title: 'Breakout Variant & Gaming AI',
      github: 'https://github.com/SethCram/Breakout-Clone',
      isWebGame: true, 
      gameTitle: GAME_TITLES.BRICK_BREAKER,
      onClick: () => { setActiveGame(!activeGame); setCurrGameName(GAME_TITLES.BRICK_BREAKER); }
    },
  ]

  const renderProductButton = (project) => {

    let toggleGame = false;

    if (project.isWebGame) { // if project is a web game

      //if project game title diff than curr game name + game is active
      if (project.gameTitle !== currGameName && activeGame) {
        //dont inactivate the game
        toggleGame = false;
      }
      //if game title same as curr game name or game inactive
      else { 
        toggleGame = true;
      }

      const onClick = () => {
        if (toggleGame) {
          setActiveGame(!activeGame);
        }

        setCurrGameName(project.gameTitle);
      }
      
      if (activeGame) { /* if web game is active, deactivate it or swap games */
        return <a href='#games' onClick={onClick} className='btn btn-primary' rel="noreferrer">Product</a>
      }
      else { /* if web game isn't active, activate it */
        return <a onClick={onClick} className='btn btn-primary' rel="noreferrer">Product</a>
      }
    }
    else { /* if project isn't a web game */
      return <a href={project.product} className='btn btn-primary' target="_blank" rel="noreferrer">Product</a>
    }

  }

  return (
    <div>
      <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
        <div className='container portfolio__container'>
          {
            portfolioItems.map((project, index) => {
              return (
                <article key={index} className='portfolio__item'>
                  <div className='portfolio__item-image'>
                    <img src={project.image} alt={project.title} />
                  </div>
                  <h3>{project.title}</h3>
                  <div className='portfolio__item-cta'>
                    <a href={project.github} className='btn' target='_blank' rel="noreferrer">Github</a>
                    {renderProductButton(project)}
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
          < Games gameName={currGameName} GAME_TITLES={GAME_TITLES}/>
        }

      </div>
    </div>
  )
}

export default Portfolio