import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import StayledHero from "../components/stayledHero"
import Title from "../components/title"
import { graphql } from "gatsby"
import styles from "../css/aboutHome.module.css"
import Img from "gatsby-image"

const about = ({ data }) => {
  return (
    <Layout>
      <SEO title="About"></SEO>
      <StayledHero img={data.aboutBcg.childImageSharp.fluid}></StayledHero>
      <section className={styles.about}>
        <Title title="naša" subtitle="misija"></Title>
        <div className={styles.aboutCenter}>
          <article className={styles.aboutImg}>
            <div className={styles.imgContainer}>
              <Img
                fluid={data.about.childImageSharp.fluid}
                alt="about picture"
              ></Img>
            </div>
          </article>
          <article className={styles.aboutInfo}>
            <h4>ko smo mi</h4>
            <p>"Mi smo ta ekipa ..."</p>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    aboutBcg: file(relativePath: { eq: "band.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    about: file(relativePath: { eq: "about.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default about
