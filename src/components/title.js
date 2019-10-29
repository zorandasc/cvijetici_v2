import React from "react"
import styled from "styled-components"

const title = ({ title, subtitle, className }) => {
  return (
    <div className={className}>
      <h3>
        <span className="title">{title}</span>
        <span>{subtitle}</span>
      </h3>
    </div>
  )
}

export default styled(title)`
  text-transform: capitalize;
  margin-top: 2rem;
  margin-bottom: 5rem;
  font-size: 2.3rem;
  h3 {
    text-align: center;
    letter-spacing: 6px;
    color: var(--primaryColor);
    text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.8);
  }
  .title {
    color: var(--mainBlack);
  }
  span {
    display: block;
  }

  @media screen and (min-width: 576px) {
    text-transform: uppercase;
    span {
      padding-left: 1rem;
      display: inline-block;
      margin: 0 0.35rem;
    }
  }
`
