import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import StayledHero from "../components/stayledHero"
import { graphql } from "gatsby"
import Title from "../components/title"
import styles from "../css/gallery.module.css"

const gallery = ({ data }) => {
  return (
    <Layout>
      <SEO title="Gallery"></SEO>
      <StayledHero img={data.roses.childImageSharp.fluid}></StayledHero>
      <section>
        <Title title="naša" subtitle="galerija"></Title>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    roses: file(relativePath: { eq: "roses.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default gallery
