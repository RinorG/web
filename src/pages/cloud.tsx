import React from 'react'

import Banner from '../components/layouts/banner/banner'
import Coding from '../components/layouts/coding/coding'
import FeatureContent from '../components/layouts/feature-content/feature-content'
import Hero from '../components/layouts/hero/hero'
import HeroImage from '../components/layouts/hero/hero-image'
import Layout from '../components/layouts/layout/layout'
import ProjectsList from '../components/layouts/projects/projects-list'
import Quickstart from '../components/layouts/quickstart/quickstart'
import SEO from '../components/layouts/seo/seo'
import Stats from '../components/layouts/stats/stats'
import * as content from '../page-content/content-cloud'
import { sharedBannerSlack } from '../page-content/shared/content-banner'
import { sharedStats } from '../page-content/shared/content-stats'

const CloudPage = () => (
  <Layout>
    <SEO {...content.seo} />
    <HeroImage {...content.hero_alt} />
    <Banner {...sharedBannerSlack} />
    <ProjectsList {...content.projectListCloud} />
    <FeatureContent {...content.featureContentCloud} />
    <FeatureContent {...content.featureContentUX} />
    <Coding {...content.coding} />
    <Stats {...sharedStats} />
    <Quickstart {...content.quickstart} />
  </Layout>
)

export default CloudPage
