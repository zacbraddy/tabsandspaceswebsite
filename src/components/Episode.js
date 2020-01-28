import React from 'react'

export default ({ image, altText, name, subtitle, showMore }) => (
  <div className="col-4">
    <span className="image fit">
      <img src={image} alt={altText} />
    </span>
    <h3>{name}</h3>
    <p>{subtitle}</p>
    {showMore && (
      <ul className="actions">
        <li>
          <a href="#" className="button">
            More
          </a>
        </li>
      </ul>
    )}
  </div>
)
