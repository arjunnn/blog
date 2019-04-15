import React, { useState } from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'

const Layout = props => {
  const { location, title, children } = props
  const rootPath = `${__PATH_PREFIX__}/`
  let header
  let [darkMode, setDarkMode] = useState(false)

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          // ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
          fontWeight: 700,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
          marginBottom: rhythm(-1),
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `#d13c57`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  const toggleDarkMode = () => {
    if (darkMode) {
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      setDarkMode(false)
    } else {
      document.body.style.backgroundColor = '#0c0b0e'
      document.body.style.color = '#fbebd7'
      setDarkMode(true)
    }
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
        }}
      >
        {' '}
        <span
          role="img"
          style={{
            cursor: 'pointer',
            MozUserSelect: 'none',
            WebkitUserSelect: 'none',
            msTouchSelect: 'none',
            msUserSelect: 'none',
            userSelect: 'none',
          }}
          onClick={toggleDarkMode}
        >
          {darkMode ? '🌞' : '🌙'}
        </span>{' '}
      </div>
      {header}
      {children}
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
        {` `}& hosted on <a href="https://github.com/arjunnn/blog">GitHub</a>
      </footer>
    </div>
  )
}

export default Layout
