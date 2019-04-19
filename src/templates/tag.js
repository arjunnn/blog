import React from 'react'
import Layout from '../components/Layout'
import { rhythm, scale } from '../utils/typography'
import { Link } from 'gatsby'
import PostPreview from '../components/post-preview'

const TaggedWith = props => {
  let { posts, tag } = props.pageContext
  return (
    <>
      <Layout location={props.location} title={"Arjun's Blog"}>
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
