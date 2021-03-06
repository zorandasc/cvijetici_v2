import React from "react"
import styled from "styled-components"
import BacgroundImage from "gatsby-background-image"

const SectionBcg = ({ home, img, children, className }) => {
  return (
    <BacgroundImage home={home} fluid={img} className={className}>
      {children}
    </BacgroundImage>
  )
}

export default styled(SectionBcg)`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`
