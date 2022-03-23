import cn from 'classnames'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

import Button from '../../freestanding/button/button'
import Container from '../../freestanding/containers/container'
import Grid from '../../freestanding/containers/grid'
import ContentText from '../../freestanding/content/content-text'
import Molecule from '../../freestanding/molecule/molecule'

import {
  pb24,
  pb32,
  pb4,
  pb48,
  pl24,
  pl8
} from '../../freestanding/utils/padding.module.css'
import * as styles from './release-list.module.css'

interface FeatureSection {
  title: string
  description: React.ReactElement
  button?: React.ReactElement
}

export interface PropTypes {
  id: string
  background?: 'dark' | 'grey' | 'light-grey' | 'themed'
  slant?: boolean
  className?: string
  features: Array<FeatureSection>
}

type Edge = {
  node: {
    id: string
    frontmatter: {
      title: string
      path: string
      description: string
      position: string
      location: string
    }
  }
}

const ReleaseList = ({
  id,
  background,
  slant,
  className,
  features
}: PropTypes) => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: {
          fileAbsolutePath: { regex: "/release-notes/" }
          frontmatter: { published: { ne: false } }
        }
      ) {
        edges {
          node {
            id
            frontmatter {
              path
              title
              description
              publishedAt(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }
    }
  `)
  return (
    <div
      id={id}
      className={cn(
        styles.featureList,
        {
          ['background-is-grey']: background === 'grey',
          ['background-is-dark']: background === 'dark',
          ['background-is-light-grey']: background === 'light-grey',
          ['background-is-themed']: background === 'themed'
        },
        { ['is-slanted-top-medium']: slant === true },
        className && className
      )}
    >
      <Container fluid={true}>
        {features.map((section) => {
          return (
            <Container
              className={cn(styles.divider)}
              alignItems={'start'}
              key={section.title}
            >
              <Grid lg={3} md={3} sm={12} xs={12} className={cn(pb48)}>
                <ContentText>
                  <Molecule>
                    <h3 className={cn('font-h2', pb32)}>{section.title}</h3>
                    <p className={cn('font-p', pb24)}>{section.description}</p>
                  </Molecule>
                </ContentText>
              </Grid>
              <Grid lg={6} md={8} sm={12} xs={12}>
                <div className={cn(className && className)}>
                  <Container flexContainer={'column'} alignItems={'start'}>
                    {(data.allMdx.edges as Edge[]).map(({ node }) => {
                      return (
                        <Container
                          className={cn(pb24)}
                          flexContainer={'column'}
                          alignItems={'start'}
                          key={node.frontmatter.path}
                        >
                          <Button
                            style={'none'}
                            to={`/release-notes${node.frontmatter.path}`}
                          >
                            <ContentText className={cn(pb4)}>
                              <Molecule>
                                <h6 className={cn('font-p is-semibold')}>
                                  {node.frontmatter.title}
                                </h6>
                              </Molecule>
                            </ContentText>
                            <Container flexContainer={'column'}>
                              <ContentText>
                                <Molecule>
                                  <p className={cn('font-p-small')}>
                                    {node.frontmatter.description}
                                  </p>
                                </Molecule>
                              </ContentText>
                            </Container>
                          </Button>
                        </Container>
                      )
                    })}
                  </Container>
                </div>
              </Grid>
            </Container>
          )
        })}
      </Container>
    </div>
  )
}

export default ReleaseList
