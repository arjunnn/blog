import React from 'react'
import Layout from '../components/Layout'
import { rhythm, scale } from '../utils/typography'
import { Link, graphql } from 'gatsby'
import PostPreview from '../components/post-preview'

const TaggedWith = props => {
  console.log(props.pageContext)
  let { posts, tag } = props.pageContext
  const siteTitle = props.data.site.siteMetadata.title
  console.log(siteTitle)
  return (
    <>
      <Layout location={props.location} title={siteTitle}>
        <p
          style={{
            display: `block`,
            marginBottom: rhythm(1),
            marginTop: rhythm(1),
          }}
        />
        <h1>{`${posts.length} ${
          posts.length === 1 ? 'post' : 'posts'
        } tagged '${tag}'`}</h1>
        <Link to="/tags/">View all tags?</Link>

        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <PostPreview
              slug={node.fields.slug}
              date={node.frontmatter.date}
              excerpt={node.excerpt}
              title={node.frontmatter.title}
              key={node.fields.slug}
            />
          )
        })}
        <hr />
      </Layout>
    </>
  )
}

export default TaggedWith

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
