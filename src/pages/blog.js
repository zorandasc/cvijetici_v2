import React from "react"
//import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import StayledHero from "../components/stayledHero"
import Blogs from "../components/Blogs/blogs"

const blog = ({ data }) => {
  return (
    <>
      <SEO title="Blog"></SEO>
      <StayledHero img={data.blog.childImageSharp.fluid}></StayledHero>

      <Blogs></Blogs>
    </>
  )
}

export const query = graphql`
  query {
    blog: file(relativePath: { eq: "bouq.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    rosBcg: file(relativePath: { eq: "ros.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default blog
