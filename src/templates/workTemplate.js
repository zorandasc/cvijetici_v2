import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import StayledHero from "../components/stayledHero"

const workTemplate = ({ data }) => {
  const { category, images } = data.work
  const [mainImage, ...recipeImages] = images
  return (
    <Layout>
      <SEO title={category}></SEO>
      <StayledHero img={mainImage.fluid}></StayledHero>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    work: contentfulWork(slug: { eq: $slug }) {
      category
      images {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

export default workTemplate
