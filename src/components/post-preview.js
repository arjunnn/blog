import React from 'react'
import { Link } from 'gatsby'
import { rhythm, scale } from '../utils/typography'

const PostPreview = props => {
  return (
    <div key={props.slug} style={{ marginBottom: rhythm(1) }}>
      <h3
        style={{
          marginBottom: rhythm(1 / 4),
        }}
      >
        <Link style={{ boxShadow: `none`, color: `#d13c57` }} to={props.slug}>
          {props.title}
        </Link>
      </h3>
      <small style={{ marginRight: rhythm(1) }}>{props.date}</small>
      <p style={{ marginBottom: rhythm(1 / 4) }}>{props.excerpt}</p>
      <div>
        {props.tags.length > 0 ? 'Tags: ' : ''}
        {props.tags.map(tag => (
          <Link
            to={`/tags/${tag.replace(/\s/g, '-')}`}
            className="category"
            key={tag}
          >
            {tag}
          </Link>
        ))}
      </div>
    </div>
  )
  // return <p>Hi</p>
}
export default PostPreview
