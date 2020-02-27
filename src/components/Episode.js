import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip'

export default ({ image, altText, name, subtitle, episodeId, play }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div className="col-4">
      <ReactCardFlip isFlipped={isFlipped}>
        <img
          className="front-of-episode"
          src={image}
          alt={altText}
          onClick={() => setIsFlipped(true)}
        />
        <div className="back-of-episode" onClick={() => setIsFlipped(false)}>
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
      </ReactCardFlip>
    </div>
  )
}
