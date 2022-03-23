import React from 'react'

import Banner from '../components/layouts/banner/banner'
import Faq from '../components/layouts/faq/faq'
import FeatureList from '../components/layouts/featurelist/feature-list'
import Layout from '../components/layouts/layout/layout'
import Pricing from '../components/layouts/pricing/pricing'
import SEO from '../components/layouts/seo/seo'
import * as content from '../page-content/content-pricing'
import { pricingCloud } from '../page-content/pricing-tiers/pricing-cloud'
import { sharedBannerSlack } from '../page-content/shared/content-banner'

const PricingPage = () => (
  <Layout>
    <SEO {...content.seo} />
    <Pricing {...content.pricing} {...pricingCloud} />
    <Banner padded={true} {...sharedBannerSlack} />
    <FeatureList {...content.featurelist} />
    <Faq {...content.faq} />
  </Layout>
)

export default PricingPage
