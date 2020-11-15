import React from "react"
import styled from "styled-components"
import { GatsbyImage } from "@wardpeet/gatsby-image-nextgen/compat"
//import Img from "gatsby-image"

const StayledHero = ({ home, img, children, className }) => {
  return (
    <div className={className}>
      <GatsbyImage
        fluid={img}
        //loading={home ? "eager" : "lazy"}
        className="image"
      ></GatsbyImage>
      {children}
    </div>
  )
}

export default styled(StayledHero)`
  position: relative;
  width: 100%;
  padding-top: 110px;
  min-height: ${props => (props.home ? "100vh" : "60vh")};
  background: ${props =>
    props.home ? "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7 ))" : "none"};
  display: flex;
  justify-content: center;
  align-items: center;

  .image {
    pointer-events: none;
    position: fixed !important;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    object-fit: cover !important;
  }

  @media screen and (min-width: 400px) {
    min-height: ${props => (props.home ? "100vh" : "65vh")};
  }

  @media screen and (min-width: 576px) {
    min-height: ${props => (props.home ? "100vh" : "75vh")};
  }
`
