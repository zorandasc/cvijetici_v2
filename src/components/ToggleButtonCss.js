import React from "react"
import styled from "styled-components"

const ToggleButton = ({ className, isSidebarOpen, handleToggle }) => {
  return (
    <button
      aria-label="open close menu"
      className={className}
      isSidebarOpen={isSidebarOpen}
      onClick={handleToggle}
    >
      <div className="hamburger"></div>
    </button>
  )
}

export default styled(ToggleButton)`
  padding: 1em;
  cursor: pointer;
  outline: none;
  border: none;
  background: transparent;
  .hamburger,
  .hamburger::before,
  .hamburger::after {
    content: "";
    display: block;
    background-color: var(--mainBlack);
    height: 5px;
    width: 2em;
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
