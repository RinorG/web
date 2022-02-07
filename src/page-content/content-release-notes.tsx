import React from 'react'

import Button from '../components/freestanding/button/button'
import { PropTypes as ReleaselistProps } from '../components/layouts/release-notes/release-list'
import { PropTypes as HeroImageProps } from '../components/layouts/hero/hero-image'
import { PropTypes as SeoProps } from '../components/layouts/seo/seo'

import Release from '../images/illustrations/docs.svg'

const NewRelease = <i className={'ph-newspaper-fill themed-primary size16'} />
const ArrowRight = <i className={'ph-arrow-right-bold size16'} />

export const seo: SeoProps = {
  description: 'foo',
  title: 'bar'
}

export const hero: HeroImageProps = {
  id: 'release.hero',
  title: <>Text release notes</>,
  description: 'foobar',
  buttons: [
    {
      ctaTitle: 'Latest release',
      style: 'filled',
      to: '#release.featurelist'
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
          orbi faucibus tempus luctus. Sed cursus tortor quis facilisis
          interdum. Donec ullamcorper sit amet ipsum id rhoncus. Vestibulum quam
          ipsum
        </>
      ),
    }
  ]
}
