import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"

export default props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          interests
        }
      }
    }
  `)
  const interests = data.site.siteMetadata.interests.map((item, index) => (
    <li key={index}>{item}</li>
  ))

    // `.fill-window {
    //   height: 100%;
    //   position: absolute;
    //   left: 0;
    //   width: 100%;
    //   overflow: hidden;
    //   }`

  return (
    <div>
      <Layout
        pageTitle="Interests"
        pageDescription="Learn more about my interests and hobbies"
        style={{innerHeight: 100}}
      >
        <ul>{interests}</ul>
      </Layout>
    </div>
  )
}
