import React from 'react'
import Plyr from 'plyr-react'
import 'plyr-react/dist/plyr.css'
import { container } from './trailer.module.css'

export default ({ videoUrl }) => (
  <div className={container}>
    <Plyr
      source={{
        type: 'video',
        sources: [
          {
            src:
              videoUrl || 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
            type: 'video/mp4',
            size: '720',
          },
        ],
      }}
      options={{
        controls: [
          'play',
          'progress',
          'current-time',
          'duration',
          'mute',
          'volume',
        ],
      }}
    />
  </div>
)
