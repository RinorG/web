import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'

import MDXBody from '../components/layouts/MDXbody/mdx-body'
import Layout from '../components/layouts/layout/layout'
import SEO from '../components/layouts/seo/seo'

export default function PageTemplate(props: any) {
  const { mdx } = props.data
  const { frontmatter: fm = {}, body = null } = mdx || {}

  return (
    <Layout>
      <SEO
        description={fm.seo?.description || fm.description}
        title={fm.seo?.title || fm.title}
        keywords={fm.seo?.keywords || ''}
      />
      <MDXBody padded={true}>
        {body ? <MDXRenderer>{body}</MDXRenderer> : 'Nothing here'}
      </MDXBody>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($mdxId: String!) {
    mdx(id: { eq: $mdxId }) {
      body
      frontmatter {
        path
        title
        description
        publishedAt(formatString: "MMMM DD, YYYY")
        seo {
          title
          description
          keywords
        }
      }
    }
  }
`
