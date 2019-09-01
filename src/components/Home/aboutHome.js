import React from "react"
import Title from "../title"
import styles from "../../css/aboutHome.module.css"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

const aboutHome = () => {
  const { aboutImage } = useStaticQuery(getAbout)
  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us"></Title>
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <Img
              fluid={aboutImage.childImageSharp.fluid}
              alt="about picture"
            ></Img>
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>who are we</h4>
          <p>
            "Our goals is helping you in overcoming wedding hurdles trough our
            interesting wedding arrangements and lifetime experience ..."
          </p>
          <Link className="btn-primary" to="/about">
            read more
          </Link>
        </article>
      </div>
    </section>
  )
}

export default aboutHome

const getAbout = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "black.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
