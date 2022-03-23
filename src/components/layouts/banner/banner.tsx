import cn from 'classnames'
import React from 'react'

import Container from '../../freestanding/containers/container'

import * as styles from './banner.module.css'

export interface PropTypes {
  id: string
  padded?: boolean
  background?: 'dark' | 'grey' | 'light-grey' | 'themed'
  text: React.ReactElement
}

const Banner = ({ id, background, text, padded = false }: PropTypes) => (
  <div
    id={id}
    className={cn(
      styles.banner,
      {
        ['background-is-grey']: background === 'grey',
        ['background-is-dark']: background === 'dark',
        ['background-is-light-grey']: background === 'light-grey',
        ['background-is-themed']: background === 'themed'
      },
      { [styles.bannerPadded]: padded === true }
    )}
  >
    <Container
      fluid={true}
      justify={'center'}
      alignItems={'center'}
      className={styles.bannerDecoration}
    >
      <p className={cn('font-p-large', 'text-is-centered')}>{text}</p>
    </Container>
  </div>
)

export default Banner
