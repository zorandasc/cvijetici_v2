import React from "react"
import { graphql } from "gatsby"

import styles from "../css/contact.module.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import StayledHero from "../components/stayledHero"
import Title from "../components/title"
import socialLinks from "../constants/socialLinks"
import ContactForm from "../components/ContacForm"
import { FaFacebook, FaPinterest, FaInstagram, FaYoutube } from "react-icons/fa"

const contact = ({ data }) => {
  return (
    <Layout>
      <SEO title="Kontakt"></SEO>
      <StayledHero img={data.connectBcg.childImageSharp.fluid}></StayledHero>
      <section className={styles.contact}>
        <Title title="kontaktirajte" subtitle="nas"></Title>
        <div className={styles.center}>
          <div className={styles.icons}>
            <a className={`${styles.socialItem} ${styles.facebook}`}>
              <span className={styles.iconFont}>
                <FaFacebook className={styles.icon}></FaFacebook>
              </span>
            </a>
            <a className={`${styles.socialItem} ${styles.pinterst}`}>
              <span className={styles.iconFont}>
                <FaPinterest className={styles.icon}></FaPinterest>
              </span>
            </a>
            <a className={`${styles.socialItem} ${styles.instagram}`}>
              <span className={styles.iconFont}>
                <FaInstagram className={styles.icon}></FaInstagram>
              </span>
            </a>
            <a className={`${styles.socialItem} ${styles.youtube}`}>
              <span className={styles.iconFont}>
                <FaYoutube className={styles.icon}></FaYoutube>
              </span>
            </a>
          </div>
          <ContactForm></ContactForm>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    connectBcg: file(relativePath: { eq: "wedding12.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default contact
