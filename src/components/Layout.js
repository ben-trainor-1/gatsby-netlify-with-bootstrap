/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
// import "./layout.css" REMOVED GATSBY DEFAULT

// USE BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';
// custom css area
import '../css/custom.css';

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

    return (
        <>
            <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
            <div>
                <main>{children}</main>
                <footer>
                    © {new Date().getFullYear()} &middot; Built with
                    {` `}
                    <a href="https://www.gatsbyjs.com">Gatsby</a>
                </footer>
            </div>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
