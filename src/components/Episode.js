import React, { useState } from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy'
import Trailer from './episodes/Trailer'
import { CSSTransition } from 'react-transition-group'

export default ({ image, altText, name, subtitle, episodeId, trailer }) => {
  const [showingTrailer, setShowingTrailer] = useState(false)

  return (
    <>
      <div className="col-4">
        <div className="episode-card">
          <div>
            <button onClick={() => setShowingTrailer(!showingTrailer)}>
              {showingTrailer ? 'Hide Trailer' : 'Listen to Trailer'}
            </button>
            <CSSTransition
              in={showingTrailer}
              timeout={700}
              classNames="trailer-container"
              appear
              unmountOnExit
            >
              <Trailer videoUrl={trailer} />
            </CSSTransition>
          </div>
          <Flippy flipOnClick={true} flipDirection="horizontal">
            <FrontSide>
              <img className="front-of-episode" src={image} alt={altText} />
            </FrontSide>
            <BackSide>
              <div className="back-of-episode">
                <div className="content">
                  <h4>{name}</h4>
                  <hr className="episode-rule" />
                  <p>{subtitle}</p>
                </div>
                <div className="player">
                  <iframe
                    style={{ border: 'none' }}
                    src={`//html5-player.libsyn.com/embed/episode/id/${episodeId}/height/90/theme/custom/thumbnail/yes/direction/backward/render-playlist/no/custom-color/333333/`}
                    height="90"
                    width="100%"
                    scrolling="no"
                    allowFullScreen
                    webkitallowfullscreen="true"
                    mozallowfullscreen="true"
                    oallowfullscreen="true"
                    msallowfullscreen="true"
                  ></iframe>
                </div>
              </div>
            </BackSide>
          </Flippy>
          <hr />
        </div>
      </div>
    </>
  )
}
