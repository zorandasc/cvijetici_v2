import React from "react"
import { graphql } from "gatsby"

import socialIkons from "../constants/socialIcons"
import styles from "../css/contact.module.css"

import SEO from "../components/seo"
import StayledHero from "../components/stayledHero"
import Title from "../components/title"
import ContactForm from "../components/ContacForm"

const contact = ({ data }) => {
  return (
    <>
      <SEO title="Kontakt"></SEO>
      <StayledHero img={data.connectBcg.childImageSharp.fluid}></StayledHero>
      <section className={styles.contact}>
        <Title title="kontaktirajte" subtitle="nas"></Title>
        <div className={styles.center}>
          <div className={styles.icons}>
            {socialIkons.map((item, index) => {
              return (
                <a
                  key={index}
                  href={item.url}
                  //item.label odnosi se na globalni style za primjenu box-shadowa za svaku ikonu posebno na a link
                  className={`${styles.socialItem} ${item.label}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="socials links"
                >
                  {item.icon}
                </a>
              )
            })}
          </div>
          <ContactForm></ContactForm>
        </div>
      </section>
    </>
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
