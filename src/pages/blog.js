import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import StayledHero from "../components/stayledHero"
import Blogs from "../components/Blogs/blogs"
import SectionBcg from "../components/sectionBcg"
import styled from "styled-components"

const Moja = styled.a`
  font-size: 0.8rem;
  font-style: italic;
  color: var(--mainBlack);
`

const blog = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog"></SEO>
      <StayledHero img={data.blog.childImageSharp.fluid}></StayledHero>
      <SectionBcg img={data.rosBcg.childImageSharp.fluid}>
        <Blogs></Blogs>
        <Moja
          target="_blank"
          rel="noopener noreferrer"
          aria-label="freepik"
          href="https://www.freepik.com/free-photos-vectors/mockup"
        >
          Mockup psd created by freepik - www.freepik.com
        </Moja>
      </SectionBcg>
    </Layout>
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
