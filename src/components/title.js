import React from "react"
import styled from "styled-components"

const title = ({ title, subtitle, className }) => {
  return (
    <div className={className}>
      <h4>
        <span className="title">{title}</span>
        <span>{subtitle}</span>
      </h4>
    </div>
  )
}

export default styled(title)`
  text-transform: uppercase;
  margin-bottom: 2rem;
  font-size: 2.3rem;
  h4 {
    text-align: center;
    letter-spacing: 6px;
    color: var(--primaryColor);
    text-shadow: 3px 3px rgba(0, 0, 0, 0.5);
  }
  .title {
    color: var(--mainBlack);
  }
  span {
    display: block;
  }

  @media screen and (min-width: 576px) {
    span {
      display: inline-block;
      margin: 0 0.35rem;
    }
  }
`
