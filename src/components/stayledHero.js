import React from "react"
import styled from "styled-components"
import BacgroundImage from "gatsby-background-image"

const stayledHero = ({ home, img, children, className }) => {
  return (
    <BacgroundImage home={home} fluid={img} className={className}>
      {children}
    </BacgroundImage>
  )
}

export default styled(stayledHero)`
  min-height: ${props => (props.home ? "calc(90vh)" : "60vh")};
  background: ${props =>
    props.home
      ? "linear-gradient(rgba(210,170,92,0.5), rgba(0,0,0,1))"
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
