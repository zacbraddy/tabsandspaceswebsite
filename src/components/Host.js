import React from 'react'

export default ({ name, image, altText, description }) => (
  <div className="col-4">
    <span className="image fit">
      <img src={image} alt={altText} />
    </span>
    <h3>{name}</h3>
    <p>{description}</p>
  </div>
)
