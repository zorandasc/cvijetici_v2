import React from "react"

import styled from "styled-components"
//import Img from "gatsby-image"
import { GatsbyImage } from "@wardpeet/gatsby-image-nextgen/compat"

const SectionBcg = ({ img, children, className }) => {
  return (
    <div className={className}>
      <GatsbyImage fluid={img} className="image"></GatsbyImage>
      {children}
    </div>
  )
}

export default styled(SectionBcg)`
  position: relative;
  width: 100%;
  overflow: hidden;
  .image {
    pointer-events: none;
    position: absolute !important;

    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    object-fit: cover;
  }
`
