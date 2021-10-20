import React from "react";

function Socials() {
  return (
    <ul className="icons">
      <li>
        <a
          href="https://twitter.com/tabsnspacesHQ"
          className="icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="social-icon alt fab fa-twitter" />
          <span className="label">Twitter</span>
        </a>
      </li>
      <li>
        <a
          href="mailto:tabsandspacesHQ@gmail.com"
          className="icon"
        >
          <i className="social-icon alt fas fa-envelope" />
          <span className="label">Email</span>
        </a>
      </li>
      <li>
        <a
          href="https://discord.gg/7SKUBuvj86"
          target="_blank"
          className="icon"
          rel="noopener noreferrer"
        >
          <i className="social-icon alt fab fa-discord" />
          <span className="label">Discord</span>
        </a>
      </li>
    </ul>
  )
}

export default Socials