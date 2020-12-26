import React from 'react'
import { MARKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import styles from './content.module.css'

const Bold = ({ children }) => <strong>{children}</strong>

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
  },
}

export default ({ title, sentToUs, author, inResponseToEpisode, content }) => {
  return (
    <article className={styles.contentArticle}>
      <header className={`major ${styles.contentHeader}`}>
        <h3>{title}</h3>
        <strong>By: {author}</strong>
        <div>
          In Response to Season: {inResponseToEpisode.seasonNumber} Episode:{' '}
          {inResponseToEpisode.episodeNumber}
        </div>
        <div>Sent to us on: {sentToUs}</div>
      </header>
      <div>{documentToReactComponents(JSON.parse(content.raw))}</div>
      <hr />
    </article>
  )
}
