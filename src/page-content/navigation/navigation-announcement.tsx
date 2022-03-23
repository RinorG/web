import React from 'react'

import { PropTypes as AnnouncementProps } from '../../components/layouts/navigation/announcement'

const jobs: AnnouncementProps = {
  longText:
    'Get Ory Cloud Start Up subscription free for six months using code FIRST900',
  shortText: 'Ory Cloud Start Up Plan!',
  link: 'https://console.ory.sh/registration?preferred_plan=start-up'
}

const summit: AnnouncementProps = {
  longText:
    'Sign up for Ory Summit 2021: free developer conference on security, IAM & more!',
  shortText: 'Sign up for Ory Summit 2021!',
  link: '/summit21?mtm_campaign=ory-summit-2021&mtm_kwd=banner-landingpage',
  openInNewWindow: true
}

export default jobs
