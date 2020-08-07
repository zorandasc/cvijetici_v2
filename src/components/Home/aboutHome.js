import React from "react"
import Title from "../title"
import styles from "../../css/aboutHome.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const AboutHome = () => {
  const { aboutImage } = useStaticQuery(getAbout)
  return (
    <section className={styles.about}>
      <Title title="Nešto" subtitle="o nama"></Title>
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
          <h3>ko smo mi</h3>
          <p>
            Mi smo tim koji je u želji da iskaže svoju kreativnost otpočeo sa
            izradom <strong>svadbenih dekoracija</strong>.<br></br> Sada iza nas
            stoji višegodišnji rad sa velikim brojem uspešno pripremljenih{" "}
            <strong>cvetića za venčanja</strong>,...
          </p>
          <AniLink fade className="btn-primary" to="/about">
            pročitaj više
          </AniLink>
        </article>
      </div>
    </section>
  )
}

export default AboutHome

const getAbout = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "band.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
