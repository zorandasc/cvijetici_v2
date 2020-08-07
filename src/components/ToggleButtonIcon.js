import React from "react"
import { FaAlignRight, FaTimes } from "react-icons/fa"
import styled from "styled-components"

const ToggleButtonIcon = ({ className, handleToggle, isSidebarOpen }) => {
  return (
    <>
      {isSidebarOpen ? (
        <button
          aria-label="close icon"
          type="button"
          onClick={handleToggle}
          className={className}
        >
          <FaTimes className="icon"></FaTimes>
        </button>
      ) : (
        <button
          aria-label="hamburger menu"
          type="button"
          onClick={handleToggle}
          className={className}
        >
          <FaAlignRight className="icon"></FaAlignRight>
        </button>
      )}
    </>
  )
}

/*
  isSidebarOpen ? (
    <button
      aria-label="close icon"
      type="button"
      onClick={handleToggle}
      className={className}
    >
      <FaTimes className="icon"></FaTimes>
    </button>
  ) : (
    <button
      aria-label="hamburger menu"
      type="button"
      onClick={handleToggle}
      className={className}
    >
      <FaAlignRight className="icon"></FaAlignRight>
    </button>
  )
  */

export default styled(ToggleButtonIcon)`
  transition: var(--mainTransition);
  background: transparent;
  border: none;
  outline-color: var(--primaryColor);
  cursor: pointer;
  &::hover,
  &::focus {
    color: var(--primaryColor);
  }
  .icon {
    font-size: 3em;
  }
`
