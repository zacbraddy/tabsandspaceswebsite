import React from 'react'

export default ({ image, altText, name, subtitle, episodeId, play }) => (
  <div className="col-4">
    <h3>{name}</h3>
    <a id={episodeId} className="">
      <span className="image fit">
        <img src={image} alt={altText} />
      </span>
    </a>
    <p>{subtitle}</p>
  </div>
)
