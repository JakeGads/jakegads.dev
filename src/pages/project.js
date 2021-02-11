import React from "react"
import Layout from "../components/layout"
import Project from "../components/project"
import { useStaticQuery, graphql } from "gatsby"

export default props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          projects {
            name
            desc
            link
            img
          }
        }
      }
    }
  `)

  const projects = data.site.siteMetadata.projects.map((item, index) => (
    <Project
      key={index}
      name={item.name}
      desc={item.desc}
      img={item.img}
      link={item.link}
    />
  ))

  return (
    <Layout
      pageTitle="Projects"
      pageDescription="See what FOSS projects I'm working on"
    >
      {projects}
    </Layout>
  )
}
