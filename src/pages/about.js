import React from "react"
//import Layout from "../components/layout"
import SEO from "../components/seo"
import StayledHero from "../components/stayledHero"
import Title from "../components/title"
import { graphql } from "gatsby"
import styles from "../css/aboutHome.module.css"
import Img from "gatsby-image"

const about = ({ data }) => {
  return (
    <>
      <SEO title="O nama"></SEO>
      <StayledHero img={data.aboutBcg.childImageSharp.fluid}></StayledHero>
      <section className={styles.about}>
        <Title title="naša" subtitle="misija"></Title>
        <div className={styles.aboutCenter}>
          <article className={styles.aboutInfo}>
            <h3>ko smo mi</h3>
            <p>
              Mi smo tim koji je u želji da iskaže svoju kreativnost otpočeo sa
              izradom <strong>svadbenih dekoracija</strong>.
            </p>
            <p>
              Sada iza nas stoji višegodišnji rad sa velikim brojem uspešno
              pripremljenih <strong>cvetića za venčanja</strong>, poklona za
              goste, bidermajera, kutija za koverte i drugih unikatnih i ručno
              izrađenih detalja za venčanja.
            </p>
            <p>
              Sa nama možete ostvariti sve svoje želje. Vaši cvetići mogu biti
              personalizovani, elegantni, upečatljivi, raskošni, otmeni...
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

          <article className={styles.aboutInfo}>
            <p>
              Ako želite tradicionalnu <strong>svadbu</strong>, tu su naši
              cvetići sa ruzmarinom, a ipak ako ste za nešto moderno u ponudi
              imao veliki broj personalizovanih cvetića.
            </p>
            <p>
              U našoj galeriji ćete svakako moći da vidite prezentaciju naših
              radova i sigurno ćete pronaći neke koji Vam se dopadaju.
            </p>
            <p>
              Prepustite se mašti i kontaktirajte nas da zajedno kreiramo
              dekoracije za Vaše savršeno <strong>venčanje</strong>.
            </p>
          </article>
          <article className={`${styles.aboutImg} ${styles.item1}`}>
            <div className={styles.imgContainer}>
              <Img
                fluid={data.crkva.childImageSharp.fluid}
                alt="about picture"
              ></Img>
            </div>
          </article>
          <article className={`${styles.aboutInfo} ${styles.item2}`}>
            <p>
              Naručenu robu šaljemo brzom poštom na teritoriji cele Srbije.
              Takođe, robu šaljemo i na teritoriji Balkana. Ostavljamo Vam i
              mogućnost ličnog preuzimanja.
            </p>
          </article>
        </div>
      </section>
    </>
  )
}

export const query = graphql`
  query {
    aboutBcg: file(relativePath: { eq: "band.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    about: file(relativePath: { eq: "about.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    crkva: file(relativePath: { eq: "crkva.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default about
