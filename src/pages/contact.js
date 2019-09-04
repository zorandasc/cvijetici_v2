import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import StayledHero from "../components/stayledHero"
import Contact from "../components/contact"
import { graphql } from "gatsby"

const contact = ({ data }) => {
  return (
    <Layout>
      <SEO title="Kontakt"></SEO>
      <StayledHero img={data.contactBcg.childImageSharp.fluid}></StayledHero>
      <Contact></Contact>
    </Layout>
  )
}

export const query = graphql`
  query {
    contactBcg: file(relativePath: { eq: "contact.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default contact
