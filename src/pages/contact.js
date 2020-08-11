import React from "react"
import { graphql } from "gatsby"

import styles from "../css/contact.module.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import StayledHero from "../components/stayledHero"
import Title from "../components/title"
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
            <a
              href={
                "https://m.facebook.com/cveticizavasusavrsenusvadbu/?ref=bookmarks&mds=%2Fa%2Fpages%2Fchoose_photo_upload%2F%3FpageID%3D1471747599599619&"
              }
              target="_blank"
              rel="noopener noreferrer"
              aria-label="facebook link"
              className={`${styles.socialItem} ${styles.facebook}`}
            >
              <span className={styles.iconFont}>
                <FaFacebook className={styles.icon}></FaFacebook>
              </span>
            </a>
            <a
              href={"https://www.pinterest.com/SvadbeniCvet/"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="pinterest link"
              className={`${styles.socialItem} ${styles.pinterst}`}
            >
              <span className={styles.iconFont}>
                <FaPinterest className={styles.icon}></FaPinterest>
              </span>
            </a>
            <a
              href={
                "https://www.instagram.com/cvetici__za__svadbu/?igshid=1bs2j1shz10z"
              }
              target="_blank"
              rel="noopener noreferrer"
              aria-label="instagram link"
              className={`${styles.socialItem} ${styles.instagram}`}
            >
              <span className={styles.iconFont}>
                <FaInstagram className={styles.icon}></FaInstagram>
              </span>
            </a>
            <a
              href={
                "https://www.youtube.com/channel/UC86annL_cXXyT4AeKOv2N4A?view_as=subscriber"
              }
              target="_blank"
              rel="noopener noreferrer"
              aria-label="youtube link"
              className={`${styles.socialItem} ${styles.youtube}`}
            >
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
