import React from 'react'

export default ({ name, image, altText, description, url }) => (
  <div className="col-4">
      <span className="image fit">
        <img src={image} alt={altText} />
      </span>
      <a href={url.length > 0 ? url : "#"} target="_blank" rel="noopener noreferrer">
        <h3>{name}</h3>
      </a>
      <p>{description}</p>
  </div>
)
