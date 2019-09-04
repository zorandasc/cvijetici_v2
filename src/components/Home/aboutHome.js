import React from "react"
import Title from "../title"
import styles from "../../css/aboutHome.module.css"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

const aboutHome = () => {
  const { aboutImage } = useStaticQuery(getAbout)
  return (
    <section className={styles.about}>
      <Title title="nešto" subtitle="o nama"></Title>
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
          <h4>ko smo mi</h4>
          <p>
            "Naš cilj je pomoći vama u prevazilaženju svadbenih poteškoća preko
            naših interesantnih svadbenih artikala ..."
          </p>
          <Link className="btn-primary" to="/about">
            pročitaj više
          </Link>
        </article>
      </div>
    </section>
  )
}

export default aboutHome

const getAbout = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "band.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
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
