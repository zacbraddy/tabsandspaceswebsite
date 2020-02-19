import React from 'react'
import { Icon, InlineIcon } from '@iconify/react'
import deezerIcon from '@iconify/icons-simple-icons/deezer'

export default [
  {
    name: 'Apple Podcasts',

    url: '', //https://podcasts.apple.com/podcast/the-net-core-podcast/id1433496275
    icon: <i className="pf pf-a-apple-podcasts" />,
  },
  {
    name: 'Stitcher',
    url: 'https://www.stitcher.com/podcast/tabs-and-spaces-podcast',
    icon: <i className="pf pf-a-stitcher" />,
  },
  {
    name: 'Spotify',
    url:
      'https://open.spotify.com/show/05xweMLT3cConDizrKFIgR?si=vSp_dCYfTH-NMG37PXBfeQ',
    icon: <i className="pf pf-a-spotify" />,
  },
  {
    name: 'RSS',
    url: 'https://tabsandspaces.libsyn.com/rss',
    icon: <i className="pf pf-a-rss" />,
  },
  {
    name: 'Deezer',
    url: 'https://www.deezer.com/en/show/856232',
    icon: <Icon icon={deezerIcon} />,
  },
]
