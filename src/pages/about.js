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
      <SEO title="O nama"></SEO>
      <StayledHero img={data.aboutBcg.childImageSharp.fluid}></StayledHero>
      <section className={styles.about}>
        <Title title="naša" subtitle="misija"></Title>
        <div className={styles.aboutCenter}>
          <article className={styles.aboutInfo}>
            <h4>ko smo mi</h4>
            <p>
              Mi smo tim koji je u želji da iskaže svoju kreativnost otpočeo sa
              izradom svadbenih dekoracija.
            </p>
            <p>
              Sada iza nas stoji višegodišnji rad sa velikim brojem uspešno
              pripremljenih cvetića za venčanja, poklona za goste, bidermajera,
              kutija za koverte i drugih unikatnih i ručno izrađenih detalja za
              venčanja.
            </p>
            <p>
              Sa nama možete ostvariti sve svoje želje. Vaši cvetići mogu biti
              personalizovani, elegantni, upečatljivi, raskošni, otmeni...
            </p>
            <p>
              Ako želite tradicionalnu svadbu, tu su naši cvetići sa ruzmarinom,
              a ipak ako ste za nešto moderno u ponudi imao veliki broj
              personalizovanih cvetića.
            </p>
            <p>
              U našoj galeriji ćete svakako moći da vidite prezentaciju naših
              radova i sigurno ćete pronaći neke koji Vam se dopadaju.
            </p>
            <p>
              Prepustite se mašti i kontaktirajte nas da zajedno kreiramo
              dekoracije za Vaše savršeno venčanje.
            </p>
          </article>
          <article className={styles.aboutImg}>
            <div className={styles.imgContainer}>
              <Img
                fluid={data.about.childImageSharp.fluid}
                alt="about picture"
              ></Img>
            </div>
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
