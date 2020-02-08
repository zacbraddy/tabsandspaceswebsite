import React from 'react'

export default () => (
  <section id="footer">
    <ul className="icons">
      <li>
        <a
          href="https://twitter.com/tabsnspacesHQ"
          className="icon alt fa-twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="label">Twitter</span>
        </a>
      </li>
      <li>
        <a
          href="mailto:tabsandspacesHQ@gmail.com"
          className="icon alt fa-envelope"
        >
          <span className="label">Email</span>
        </a>
      </li>
    </ul>
    <ul className="copyright">
      <li>tabs AND spaces &copy; {new Date().getFullYear()} </li>
      <li>
        Design:{' '}
        <a href="http://html5up.net" target="_blank" rel="noopener noreferrer">
          HTML5 UP
        </a>
      </li>
      <li>
        Show intro music:{' '}
        <a
          href="https://www.youtube.com/watch?v=n8X9_MgEdCg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Unity by The FatRat
        </a>
      </li>
    </ul>
  </section>
)
