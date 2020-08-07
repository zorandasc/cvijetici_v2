import React from "react"
import styled from "styled-components"

const ToggleButton = ({ className, isSidebarOpen, handleToggle }) => {
  return (
    <div
      role="button"
      className={className}
      isSidebarOpen={isSidebarOpen}
      onClick={handleToggle}
      onKeyDown={handleToggle}
      tabIndex="0"
    >
      <div className="hamburger"></div>
    </div>
  )
}

export default styled(ToggleButton)`
  padding: 1em;
  cursor: pointer;
  outline: none;
  .hamburger,
  .hamburger::before,
  .hamburger::after {
    content: "";
    display: block;
    background-color: var(--mainBlack);
    height: 5px;
    width: 1.75em;
    border-radius: 3px;
    transition: all ease-in-out 500ms;
  }

  .hamburger {
    transform: ${props => (props.isSidebarOpen ? "rotate(45deg)" : "")};
  }

  .hamburger::before {
    transform: translateY(-9px);
    opacity: ${props => (props.isSidebarOpen ? "0" : "1")};
  }

  .hamburger::after {
    transform: translateY(4px);
    transform: ${props =>
      props.isSidebarOpen ? "translateY(-5px) rotate(-90deg)" : ""};
  }
`
