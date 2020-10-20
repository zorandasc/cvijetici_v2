import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"


export const RichImage = ({ className, fluid, title }) => {
  return (
    <div className={className}>
      <Image className="image" fluid={fluid} alt={title} />
      <p className="title">{title}</p>
    </div>
  )
}

export default styled(RichImage)`

  position: relative;
  background: transparent;

.image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: var(--darkShadow);
  margin: 2rem auto;
}
.title {
  font-size: 12px;
  position: absolute;
  left: 0;
  top: 85%;
  background: var(--primaryColor);
  color: var(--mainBlack);
  padding: 0 0.5rem;
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 2rem;
}

@media screen and (min-width: 900px) {
  
  margin: 3rem;
 
  .title {
    font-size: 1rem;
    top: 90%;
  }
}

`
