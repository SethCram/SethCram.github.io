import React from 'react'
import './games.css'
import $ from 'jquery'

var $iframe = $('iframe'),
src = $iframe.data('src');

function showIframe() {
  if (window.matchMedia("(min-width: 1024px)").matches) {
      $iframe.attr('src', src);
  }
}

$(window).on('resize', showIframe);

/* {} indicated in JS mode */
/* blank target opens inna new tab */
const Games = () => {

  // Initialize it once on document ready
  showIframe();

  return (
    <section id='games' >
      {/* should only render this if a game product button pressed */}
      <div className='container games__container'>
        <div className='games__item'>
          <iframe src="https://rawcdn.githack.com/3khoin/CS383Spring2022/083f211d3a3599b28410e897bd05544de0cdb24b/Builds/Web-GL/index.html"
            data-src="https://rawcdn.githack.com/3khoin/CS383Spring2022/083f211d3a3599b28410e897bd05544de0cdb24b/Builds/Web-GL/index.html"
            title="DungeonJump"
            scrolling="no"
            allowFullScreen={true}
          >

            Browser not compatible.

          </iframe>
        </div>
      </div>

    </section>
  )
}

export default Games