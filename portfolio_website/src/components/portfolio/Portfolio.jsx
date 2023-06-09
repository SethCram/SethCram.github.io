import './portfolio.css'
import Dungeon_Jump from '../../assets/Dungeon_Jump.png'
import BestBuySearch from '../../assets/BestBuySearch.PNG'
import Book_Club from '../../assets/Book_Club.PNG'
import Linguists_Client from '../../assets/Linguists_Client.PNG'
import Brick_Breaker from '../../assets/brick_breaker.PNG'
import FT13_Game from '../../assets/FT13.PNG'
import Games from '../games/Games.jsx'
import { useEffect, useState } from 'react' 
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'

/* {} indicated in JS mode */
/* blank target opens inna new tab */
const Portfolio = () => {
  const [activeGame, setActiveGame] = useState(false) 
  const GAME_TITLES = {
    DUNGEON_JUMP: 1,
    BRICK_BREAKER: 2,
  }
  const [currGameName, setCurrGameName] = useState(0); 
  const [portfolioItems, setPortfolioItems] = useState([
    {
      image: Book_Club,
      title: 'Reputation Based Writing Platform',
      details: "Architected and implemented an innovative website using the MERN stack. Constructed a high-speed REST API to interface with a NoSQL database. Brought forth a flexible and responsive UI with a novel reputation system.",
      activeDetails: false,
      github: 'https://github.com/SethCram/book-club',
      product: 'https://book-club.us.to/',
    },
    {
      image: BestBuySearch,
      title: 'Ecommerce Product Matching Site',
      details: "Designed and deployed a feature-rich Ecommerce website using full-stack development. Developed a relational database ensuring ACID properties and efficient MySQL queries. Achieved rapid database access through Django MVC code.",
      activeDetails: false,
      github: 'https://github.com/SethCram/Best-Buy-Search-Project',
      product: 'https://sethcram.pythonanywhere.com/BestBuySearch/login/',
    },
    {
      image: Linguists_Client,
      title: 'AI Natural Language Interface to Databases',
      details: "Empowered non-technical users with direct database access through a natural language to SQL system. Conducted comparative analysis of natural language to SQL systems to discover an optimal solution. Improved a powerful ML model and devised a cutting edge UI using React and Node.",
      activeDetails: false,
      github: 'https://github.com/SethCram/Linguists-NLP-to-SQL',
      product: `https://github.com/SethCram/linguists-client`,
    },
    {
      image: FT13_Game,
      title: 'Multiplayer Team-Focussed Game',
      details: "Forged a large C# project from the ground up, supporting it with concise documentation. Leveraged Photon to network various clients together and enable a cohesive multiplayer experience. Automated testing, building, and deployment through effective CI/CD pipelines.",
      activeDetails: false,
      github: 'https://github.com/SethCram/Friday-the-13th-Game',
      product: `https://drive.google.com/drive/folders/1rkJ1HrhBPyzCM6HnGW3mtzlJ1LLmHoAJ?usp=sharing`, 
    },
    { // ?game=1#games
      image: Dungeon_Jump,
      title: 'Variable-Perspective Adventure Game',
      details: "Established a developer-friendly architecture using design patterns like Interfaces and Bridges. Scripted various unit, stress, and boundary tests to ensure the smooth integration of new features. Guided a group of six in smashingly successful project expansion following the Agile methodology.",
      activeDetails: false,
      github: 'https://github.com/3khoin/CS383Spring2022',
      isWebGame: true,
      gameTitle: GAME_TITLES.DUNGEON_JUMP,
      onClick: () => { setActiveGame(!activeGame); setCurrGameName(GAME_TITLES.DUNGEON_JUMP); }, //invert active state of iframe code onclick()
    },
    { // ?game=2#games
      image: Brick_Breaker,
      title: 'Breakout Variant & Gaming AI',
      details: "Crafted a formidable ML model to showcase a modern spinoff of the classic Breakout arcade game. Rapidly tailored a reinforcement learning algorithm to achieve a competitive intelligence. Efficiently visualized the effects of different training decisions on model performance.",
      activeDetails: false,
      github: 'https://github.com/SethCram/Breakout-Clone',
      isWebGame: true,
      gameTitle: GAME_TITLES.BRICK_BREAKER,
      onClick: () => { setActiveGame(!activeGame); setCurrGameName(GAME_TITLES.BRICK_BREAKER); }
    },
  ]);

  //update & activate game if queried for 
  useEffect(() => {
    function updateGame() {
      let currGame;
      const gameNumber = Number(window.location.search.split("=")[1]);

      switch (gameNumber) {
        case GAME_TITLES.DUNGEON_JUMP:
          currGame = GAME_TITLES.DUNGEON_JUMP;
          break;
        case GAME_TITLES.BRICK_BREAKER:
          currGame = GAME_TITLES.BRICK_BREAKER;
          break;
        default:
          currGame = currGameName;
          break;
      }

      //if game should actually be updated
      if (currGame !== currGameName) {
        setCurrGameName(currGame);
        setActiveGame(true);
      }
    }
    updateGame();
    
  }, []);

  const toggleDetails = (projectId) => {
    const newActivityState = !portfolioItems[projectId].activeDetails;

    //update just the specific changed project's details activity state
    setPortfolioItems(prevState => 
      prevState.map((elly, i) => (projectId === i) ? { ...elly, activeDetails: newActivityState } : elly)
    );
  }

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
            portfolioItems.map((project, index) => (
              <article key={index} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={project.image} alt={project.title} />
                </div>
                <h3>{project.title}</h3>
                <a onClick={() => toggleDetails(index)}>
                  Details 
                  <FaCaretUp className={project.activeDetails ? 'show' : 'hide hideCarrot'} />
                  <FaCaretDown className={project.activeDetails ? 'hide hideCarrot' :'show'} />
                </a>
                <ul className={`portfolio__item__list ${project.activeDetails ? 'show' : 'hide'}`}>
                  {project.details.match(/[^\.!\?]+[\.!\?]+/g).map((sentence, i) => (
                    <li key={i} className='portfolio__item__list__element'>
                      <div className='portfolio__item__list__bullet'>
                        ➤
                      </div>
                      <small className='portfolio__item__list__sentence'>
                        {sentence}
                      </small>
                    </li>
                  ))}
                </ul>
                <div className='portfolio__item-cta'> 
                  <a href={project.github} className='btn' target='_blank' rel="noreferrer">Github</a>
                  {renderProductButton(project)}
                </div>
              </article>
            ))
          }
        </div>
      </section>
    
      <div 
        className={`${activeGame ? 'show' : 'hide'}`}
      > 
        {activeGame &&
          <Games gameName={currGameName} GAME_TITLES={GAME_TITLES}/>
        }

      </div>
    </div>
  )
}

export default Portfolio