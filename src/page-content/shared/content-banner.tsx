import React from 'react'

import Button from '../../components/freestanding/button/button'
import { PropTypes as BannerProps } from '../../components/layouts/banner/banner'

export const sharedBannerHiring: BannerProps = {
  id: 'shared.banner.hiring',
  background: 'dark',
  text: (
    <>
      Help us create an open and free standard for authentication and
      authorization that is available to everyone, come{' '}
      <Button to={'/jobs'} style={'link-inline'}>
        join our team
      </Button>
      .
    </>
  )
}

export const sharedBannerOpensource: BannerProps = {
  id: 'shared.banner.opensource',
  text: (
    <>
      Are you building something with Ory?{' '}
      <Button to={'mailto:office@ory.sh'} style={'link-inline'}>
        Get featured
      </Button>{' '}
      on our upcoming showcase, GitHub and newsletter!{' '}
    </>
  )
}

export const sharedBannerSlack: BannerProps = {
  id: 'shared.banner.slack',
  text: (
    <>
      Do you like using Ory?{' '}
      <Button to={'https://slack.ory.sh/'} style={'link-inline'}>
        Please share your feedback
      </Button>{' '}
      and let us know how we can improve Ory Cloud!
    </>
  )
}

export const sharedBannerKratos: BannerProps = {
  id: 'shared.banner.kratos',
  text: (
    <>
      Building something with Ory Kratos?{' '}
      <Button to={'mailto:office@ory.sh'} style={'link-inline'}>
        Get featured
      </Button>{' '}
      on our upcoming showcase, GitHub and newsletter!{' '}
    </>
  )
}

export const sharedBannerHydra: BannerProps = {
  id: 'shared.banner.hydraKeto',
  text: (
    <>
      Building something with Ory Hydra?{' '}
      <Button to={'mailto:office@ory.sh'} style={'link-inline'}>
        Get featured
      </Button>{' '}
      on our upcoming showcase, GitHub and newsletter!{' '}
    </>
  )
}

export const sharedBannerKeto: BannerProps = {
  id: 'shared.banner.keto',
  text: (
    <>
      Building something with Ory Keto?{' '}
      <Button to={'mailto:office@ory.sh'} style={'link-inline'}>
        Get featured
      </Button>{' '}
      on our upcoming showcase, GitHub and newsletter!{' '}
    </>
  )
}

export const sharedBannerOathkeeper: BannerProps = {
  id: 'shared.banner.oathkeeper',
  text: (
    <>
      Building something with Ory Oathkeeper?{' '}
      <Button to={'mailto:office@ory.sh'} style={'link-inline'}>
        Get featured
      </Button>{' '}
      on our upcoming showcase, GitHub and newsletter!{' '}
    </>
  )
}
