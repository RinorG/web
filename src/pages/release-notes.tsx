import React from 'react'

import FeatureList from '../components/layouts/featurelist/feature-list'
import HeroImage from '../components/layouts/hero/hero-image'
import Layout from '../components/layouts/layout/layout'
import Newsletter from '../components/layouts/newsletter/newsletter'
import Quickstart from '../components/layouts/quickstart/quickstart'
import SEO from '../components/layouts/seo/seo'
import * as content from '../page-content/content-release-notes'
import { opensourceQuickstart } from '../page-content/shared/content-opensource'

const ReleasePage = () => (
  <Layout>
    <SEO {...content.seo} />
    <HeroImage {...content.hero} />
    <FeatureList {...content.featureList} />
    <Newsletter />
    <Quickstart {...opensourceQuickstart} />
  </Layout>
)

export default ReleasePage
