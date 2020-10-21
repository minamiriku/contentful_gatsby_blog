import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query allContentfulUser {
      allContentfulUser {
        nodes {
          id
          headerImage
          title
          body
          slug
        }
      }
    }
  `)
  return(
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    {data.allContentfulUser.nodes.map(({ id, headerImage, title, body, slug }) => (
      <>
        <h3 key={id}>
          {title}
        </h3>
        <img src={headerImage} />
        <p>{body}</p>
        <span>{slug}</span>
      </>
      ))}
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
  )
}
export default IndexPage
