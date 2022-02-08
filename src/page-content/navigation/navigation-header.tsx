import React from 'react'

import Button from '../../components/freestanding/button/button'
import { PropTypes as NavProps } from '../../components/layouts/navigation/navigation'

export const sideNav: Pick<NavProps, 'sideNav'> = {
  sideNav: [
    <Button
      to={'https://console.ory.sh/login'}
      style={'outlined'}
      openInNewWindow={false}
    >
      Login
    </Button>,
    <Button
      to={'https://share-eu1.hsforms.com/1kGI3rgpHSa6jAeAmegafKAextgn'}
      style={'filled'}
      openInNewWindow={false}
    >
      Try Free
    </Button>
  ]
}
