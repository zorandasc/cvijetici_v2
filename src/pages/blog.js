import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import StayledHero from "../components/stayledHero"

const blog = () => {
  return (
    <Layout>
      <SEO title="Blog"></SEO>
      <StayledHero></StayledHero>
    </Layout>
  )
}

export default blog
