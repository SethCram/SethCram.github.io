import React from 'react'
import './games.css'

/* {} indicated in JS mode */
/* blank target opens inna new tab */
const Games = ({ gameName, GAME_TITLES }) => {

  console.log(gameName);
  
  const renderGame = () => {
    switch(gameName) {
      case GAME_TITLES.DUNGEON_JUMP:
        return (
          <iframe
            src="https://rawcdn.githack.com/3khoin/CS383Spring2022/083f211d3a3599b28410e897bd05544de0cdb24b/Builds/Web-GL/index.html"
            title="Dungeon Jump"
            scrolling="no"
            allowFullScreen={true}
          >
            Browser not compatible.
          </iframe>
        )
      case GAME_TITLES.BRICK_BREAKER:
        return (
          <iframe 
            src="https://rawcdn.githack.com/SethCram/Breakout-Clone/e4d34982c089ae1762bd612f5abfeeb12fe440a4/Builds/Web-GL/index.html"
            overflow="hidden"
            width="100%" 
            height="680px"
            title="Breakout Variant Game" 
            scrolling="no" 
            overflow-y="hidden"
            allowfullscreen = {true}
          >
            Browser not compatible.
          </iframe>
        )
    }
  }

  return (
    <section id='games' >
      {/* should only render this if a game product button pressed */}
      <div className='container games__container'>
        <div className='games__item'>
          {renderGame()}
        </div>
        <h5> No touch controls implemented </h5>
      </div>

    </section>
  )
}

export default Games