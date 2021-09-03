import React from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { GatsbyImage } from "@wardpeet/gatsby-image-nextgen/compat"
import { useStaticQuery, graphql } from "gatsby"
import { FaTimes } from "react-icons/fa"

//import Img from "gatsby-image"
import decorheart from "../../images/decorheart.jpg"
import old from "../../images/old.jpg"

import Title from "../title"

const getAbout = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "band.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`

const AboutHomy = () => {
  const { aboutImage } = useStaticQuery(getAbout)
  const [reklama, setReklama] = React.useState(true)

  const handleReklamClick = () => {
    setReklama(false)
  }

  return (
    <SectionWrapper>
      <Title title="Nešto" subtitle="o nama"></Title>
      <div className="aboutCenter">
        <article className="aboutImg">
          <div className="imgContainer">
            <GatsbyImage
              fluid={aboutImage.childImageSharp.fluid}
              alt="about picture"
            ></GatsbyImage>
          </div>
        </article>
        <article className="aboutInfo">
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
      <Reklama reklama={reklama}>
        <a
          href="https://decorwood.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="decorwood"
        >
          <h2>Decorwood</h2>
          <p className="heading">Decorwood</p>
          <p className="text">Dekorativni predmeti od drveta</p>
        </a>
        <button className="close" onClick={handleReklamClick}>
          <FaTimes></FaTimes>
        </button>
      </Reklama>
      <Reklama1 reklama={reklama}>
        <a
          href="https://decorwood.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="decorwood"
        >
          <h2>Decorwood</h2>
          <p className="heading">Decorwood</p>
          <p className="text">Dekorativni predmeti od drveta</p>
        </a>
        <button className="close" onClick={handleReklamClick}>
          <FaTimes></FaTimes>
        </button>
      </Reklama1>
    </SectionWrapper>
  )
}

const Reklama = styled.div`
  position: relative;
  border: 3px solid #918a8a;
  width: 60%;
  margin: 0 auto;
  position: relative;
  background: url(${decorheart});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: none;
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 1.2rem;
    width: 100%;
  }
  .close {
    position: absolute;
    right: 0;
    top: 0;
    width: 17px;
    height: 17px;
    display: grid;
    color: #00aecd;
    background-color: whitesmoke;
  }
  h2 {
    position: absolute;
    left: 1rem;
    top: 0.2rem;
  }
  .heading {
    text-transform: uppercase;
    font-weight: bolder;
    padding-top: 2rem;
    margin-bottom: 0;
    font-size: 1.6rem;
    text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.8);
  }
  .text {
    font-weight: 600;
    font-size: 1.3rem;
    text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.8);
  }
  @media screen and (min-width: 968px) {
    ${props => (props.reklama ? `display:flex` : `display:none`)};
  }
`

const Reklama1 = styled.div`
  border: 3px solid #918a8a;
  top: 40%;
  right: 1%;
  width: 220px;
  height: 600px;
  display: none;
  position: fixed;
  z-index: 1000;
  background: url(${old});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 0.5rem;
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 1.2rem;
    width: 100%;
    text-align: center;
  }
  .close {
    position: absolute;
    right: 0;
    top: 0;
    width: 17px;
    height: 17px;
    display: grid;
    color: #00aecd;
    background-color: whitesmoke;
  }
  h2 {
    position: absolute;
    left: 1rem;
    top: 0.2rem;
  }
  .heading {
    text-transform: uppercase;
    font-weight: bolder;
    padding-top: 2rem;

    font-size: 1.6rem;
    text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.8);
  }
  .text {
    font-weight: 600;
    font-size: 1.3rem;
    text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.8);
  }

  @media screen and (min-width: 968px) {
    ${props => (props.reklama ? `display:flex` : `display:none`)};
  }
`

const SectionWrapper = styled.section`
  padding: 1rem 0 4rem 0;
  z-index: 2;
  background-color: var(--mainWhite);

  .aboutCenter {
    width: 80vw;
    margin: 0 auto;
  }
  .aboutImg {
    margin: 3rem 0;
    position: relative; /* OVO JE ZBOG DOLE ABSOUTE IVICE*/
  }
  .aboutImg div {
    box-shadow: var(--lightShadow);
  }

  .imgContainer::before {
    content: "";
    border: 3px solid var(--primaryColor);
    position: absolute;
    top: -16px;
    left: -16px;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }
  .aboutInfo {
    margin-top: 3rem;
    text-align: center;
  }
  .aboutInfo h3 {
    font-size: 1.7rem;
    text-transform: capitalize;
  }
  @media screen and (min-width: 968px) {
    padding: 4rem 0 4rem 0;
    .aboutCenter {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 3rem;
      align-items: center;
      margin-top: 5rem;
    }

    .aboutImg,
    .aboutInfo {
      margin: 0;
    }
    .aboutImg img {
      max-height: 500px;
    }
    .imgContainer {
      max-height: 500px;
    }
    .aboutInfo p {
      width: 100%;
      word-spacing: 0.2rem;
      line-height: 2rem;
    }
  }
  @media screen and (min-width: 1200px) {
    .aboutCenter {
      grid-row-gap: 2rem;
      margin-bottom: 5rem;
      width: 95vw;
      max-width: 1170px;
    }
  }
`

export default AboutHomy
