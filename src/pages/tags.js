import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import kebabCase from 'lodash/kebabCase'

import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout location={'/tags/'} title={title}>
    <h1>All Tags</h1>
    {group.map(tag => (
      <div
        key={tag.fieldValue}
        style={{
          display: 'inline-block',
        }}
      >
        <Link to={`/tags/${kebabCase(tag.fieldValue)}/`} className="category">
          {tag.fieldValue}&nbsp;({tag.totalCount})
        </Link>
      </div>
    ))}
    <hr style={{ marginTop: '20px' }} />
  </Layout>
)

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
