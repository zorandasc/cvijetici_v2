import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import socialIkons from "../constants/socialIcons"
import SEO from "../components/seo"
import StayledHero from "../components/stayledHero"
import Title from "../components/title"
import ContactForm from "../components/ContacForm"

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


const contact = ({ data }) => {
  return (
    <>
      <SEO title="Kontakt"></SEO>
      <StayledHero img={data.connectBcg.childImageSharp.fluid}></StayledHero>
      <SectionWrapper>
        <Title title="kontaktirajte" subtitle="nas"></Title>
        <div className="center">
          <div className="icons">
            {socialIkons.map((item, index) => {
              return (
                <a
                  key={index}
                  href={item.url}
                  //item.label odnosi se na globalni style za primjenu box-shadowa za svaku ikonu posebno na a link
                  className={`socialItem ${item.label}`}
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
      </SectionWrapper>
    </>
  )
}


const SectionWrapper = styled.section`

  padding: 1rem 0 4rem 0;
  background-color: var(--mainWhite);


.center {
  width: 80vw;
  margin: 0 auto;
}

.icons {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 3rem;
}

.socialItem {
  display: inline-flex;
  width: 60px;
  height: 60px;
  margin: 20px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  color: #fff;
  position: relative;
  font-size: 21px;
  flex-shrink: 0;
  transition: var(--mainTransition);
}

.socialItem:hover {
  transform: scale(1.2);
}

@media screen and (min-width: 992px) {
  
    padding: 4rem 0;

  .center {
    width: 50vw;
    margin: 0 auto;
  }
}


`


export default contact
