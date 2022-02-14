import React from 'react'

import Button from '../components/freestanding/button/button'
import { PropTypes as ReleaselistProps } from '../components/layouts/release-notes/release-list'
import { PropTypes as HeroImageProps } from '../components/layouts/hero/hero-image'
import { PropTypes as SeoProps } from '../components/layouts/seo/seo'

import Release from '../images/illustrations/docs.svg'

const NewRelease = <i className={'ph-newspaper-fill themed-primary size16'} />
const ArrowRight = <i className={'ph-arrow-right-bold size16'} />

export const seo: SeoProps = {
  description: 'We strive for making Ory Cloud the best solutions for you.',
  title: 'Ory Cloud Release Notes'
}

export const hero: HeroImageProps = {
  id: 'release.hero',
  title: <>
      <span className={'is-themed-primary'}>Ory Cloud</span> Release Notes
    </>,
  description: 'We strive for making Ory Cloud the best solutions for you.',
  buttons: [
    {
      ctaTitle: 'Explore Ory Cloud',
      style: 'filled',
      to: '/cloud'
    }
  ],
  image: <img className="responsive" loading="lazy" alt="foo" src={Release} />
}

export const featureList: ReleaselistProps = {
  id: 'release.featurelist',
  slant: true,
  background: 'grey',
  features: [
    {
      title: 'Latest releases',
      description: (
        <>
          Ory Cloud has now better compatibility with Ory Open Source features, new Network Policies, Cilium and generally performance improving changes.
        </>
      ),
    }
  ]
}
