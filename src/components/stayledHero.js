import React from "react"
import styled from "styled-components"
import BacgroundImage from "gatsby-background-image"

const stayledHero = ({ home, img, children, className }) => {
  return (
    <BacgroundImage
      fadeIn={home ? false : true}
      loading={home ? "eager" : "lazy"}
      home={home}
      fluid={img}
      className={className}
    >
      {children}
    </BacgroundImage>
  )
}

export default styled(stayledHero)`
  padding-top: 110px;
  min-height: ${props => (props.home ? "calc(95vh)" : "75vh")};
  background: ${props =>
    props.home
      ? "linear-gradient(rgba(210,170,92,0.7), rgba(0,0,0,0.5 ),rgba(0,0,0,0 ))"
      : "none"};
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
`
