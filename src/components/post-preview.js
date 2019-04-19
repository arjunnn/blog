import React from 'react'
import { Link } from 'gatsby'
import { rhythm, scale } from '../utils/typography'

const PostPreview = props => {
  return (
    <div key={props.slug}>
      <h3
        style={{
          marginBottom: rhythm(1 / 4),
        }}
      >
        <Link style={{ boxShadow: `none`, color: `#d13c57` }} to={props.slug}>
          {props.title}
        </Link>
      </h3>
      <small>{props.date}</small>
      <p>{props.excerpt}</p>
    </div>
  )
  // return <p>Hi</p>
}
export default PostPreview
