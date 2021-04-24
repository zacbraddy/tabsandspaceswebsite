import React from 'react'
import people from '../../assets/images/people-43575.svg'

export default () => (
  <section id="got-here">
    <h1>Wow, you made it all the way down here?!</h1>
    <div>Gotta be honest, we didn't expect that</div>
    <div>You must love this show!</div>
    <div>But you know what would make it better?</div>
    <h1>YOU!</h1>
    <div className="come-on-the-show-image-container">
      <img src={people} />
    </div>
    <div>Did you know if you got in touch you could be on the show?</div>
    <div>Suppose you might want to check out our socials now...</div>
  </section>
)
