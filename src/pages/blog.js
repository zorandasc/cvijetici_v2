import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import StayledHero from "../components/stayledHero"
import Blogs from "../components/Blogs/blogs"

import SectionBcg from "../components/sectionBcg"

const blog = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog"></SEO>
      <StayledHero img={data.blog.childImageSharp.fluid}></StayledHero>
      <SectionBcg img={data.rosBcg.childImageSharp.fluid}>
        <Blogs></Blogs>
      </SectionBcg>
    </Layout>
  )
}

export const query = graphql`
  query {
    blog: file(relativePath: { eq: "bouq.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    rosBcg: file(relativePath: { eq: "ros.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default blog
