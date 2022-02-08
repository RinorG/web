import React from 'react'

import CodeBox, { Languages } from '../components/freestanding/codebox/codebox'
import { PropTypes as CodeBoxProps } from '../components/freestanding/codebox/codebox'
import YoutubeEmbed from '../components/layouts/embed/embed'
import { PropTypes as FeatureContentProps } from '../components/layouts/feature-content/feature-content'
import { PropTypes as HeroImageProps } from '../components/layouts/hero/hero-image'
import { PropTypes as SeoProps } from '../components/layouts/seo/seo'

import Kratos from '../images/kratos/kratos.svg'

const CheckCircle = (
  <i className={'ph-check-circle-fill themed-primary size16'} />
)
const ArrowRight = <i className={'ph-arrow-right-bold size16'} />

export const seo: SeoProps = {
  description:
    'NextJS Open source user management and identity server on Vercel',
  title: 'Ory - Fast and reliable open source Auth for NextJS and Vercel.'
}

export const hero: HeroImageProps = {
  id: 'nextjs.hero',
  title: (
    <>
      No sweat authentication{' '}
      <span className={'is-mute-text'}>for NextJS/React</span>
    </>
  ),
  description: 'Start building now with a free Developer account.',
  buttons: [
    {
      ctaTitle: 'Deploy',
      style: 'filled',
      to: 'https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fory%2Fkratos-nextjs-react-example&env=ORY_SDK_URL'
    }
  ],
  image: (
    <img
      className="responsive"
      loading="lazy"
      alt="Examples of headless login and registrations forms with different styles using Ory Cloud."
      src={Kratos}
    />
  )
}

export const featureContentVideo: FeatureContentProps = {
  id: 'nextjs.featurecontent.video',
  background: 'themed',
  slant: true,
  overline: 'Supports Vercel Edge Functions',
  title: <>Lightning fast</>,
  description: (
    <>Onboard users without friction. Integrate with a few lines of code.</>
  ),
  content: <YoutubeEmbed embedId="ueEAoTQ-CTo" />,
  button: {
    ctaTitle: 'Get Started',
    to: 'https://share-eu1.hsforms.com/1kGI3rgpHSa6jAeAmegafKAextgn',
    iconRight: ArrowRight
  }
}

export const featureContentCodeBox: CodeBoxProps = {
  tabs: [
    {
      filename: 'protected.tsx',
      language: Languages.JavaScript,
      code: `ory.toSession()
  .then(({ data: session }) => {
    console.log(session) // Our user session

    return ory.createSelfServiceLogoutFlowUrlForBrowsers()
      .then(({ data }) => {
        setLogoutUrl(data.logout_url)
      })
  })
`
    },
    {
      filename: 'edge-function.ts',
      language: Languages.JavaScript,
      code: `// Use Ory's NextJS Edge integration:
import {
  config, createApiHandler
} from '@ory/integrations/next-edge'  
      
export { config }
      
// Create the Ory API "bridge":
export default createApiHandler() 
`
    },
    {
      filename: 'login.tsx',
      language: Languages.JavaScript,
      code: `//A few lines to implement a custom login form:
ory.initializeSelfServiceLoginFlowForBrowsers()
  .then(({ data }) => {
    renderLoginForm(data);
  })
  .catch(handleFlowError())
`
    }
  ]
}

export const featureContentCoding: FeatureContentProps = {
  id: 'nextjs.featurecontent.coding',
  slant: true,
  background: 'grey',
  overline: <>Painless Identity & User Management</>,
  title: (
    <>
      <span className={'is-mute-text'}>Remove</span> complexity
    </>
  ),
  description: (
    <>
      Security does not have to be bulky: Ory Kratos is a fully featured user
      management system in a lightweight Docker image.
    </>
  ),
  button: {
    ctaTitle: 'Quickstart tutorial',
    to: '/login-spa-react-nextjs-authentication-example-api-open-source/',
    iconRight: ArrowRight
  },
  content: <CodeBox {...featureContentCodeBox} />,
  feature: {
    title: <>Integrate anywhere</>,
    description: (
      <>
        Ory Kratos works with any UI framework and only a few lines of code are
        required to get it up and running.
      </>
    ),
    features: [
      {
        title: <>Bursting with features</>,
        description: (
          <>
            Configurable login and registration flows, MFA with FIDO2 &
            Webauthn, custom identity models, bring your UI and more.
          </>
        )
      },
      {
        title: <>Deploy your style</>,
        description: (
          <>
            Run Ory Kratos in the Ory Cloud with a few clicks or selfhost on
            Docker, your favourite OS, or a Raspberry PI.
          </>
        )
      },
      {
        title: <>Its open source</>,
        description: (
          <>
            Avoid lock-in and trust in a product built by the open source
            community.
          </>
        )
      }
    ]
  }
}
