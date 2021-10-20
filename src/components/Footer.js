import React from 'react'
import Socials from './Socials'

export default () => (
  <section id="footer">
    <Socials />
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
