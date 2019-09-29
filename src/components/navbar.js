import React, { useState } from "react"
import styles from "../css/navbar.module.css"
import links from "../constants/links"
import socialLinks from "../constants/socialLinks"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FaAlignRight } from "react-icons/fa"
import logo from "../images/logo.svg"
import styled from "styled-components"

const navbar = ({ className }) => {
  const [isOpen, setNav] = useState(false)
  const toggleNav = () => {
    setNav(() => !isOpen)
  }

  return (
    <nav className={className}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <AniLink fade to="/">
            <img src={logo} alt="svadbeni cvet"></img>
          </AniLink>
          <button
            aria-label="hamburger menu"
            type="button"
            onClick={toggleNav}
            className={styles.logoBtn}
          >
            <FaAlignRight className={styles.logoIcon}></FaAlignRight>
          </button>
        </div>
        <div
          className={
            isOpen
              ? `${styles.navLinks} ${styles.showNav}`
              : `${styles.navLinks}`
          }
        >
          {links.map((item, index) => {
            return (
              <AniLink fade key={index} to={item.path}>
                {item.label}
              </AniLink>
            )
          })}
        </div>
        <div
          className={
            isOpen
              ? `${styles.navSocialLinks} ${styles.showSocial}`
              : `${styles.navSocialLinks}`
          }
        >
          {socialLinks.map((item, index) => {
            return (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="socials links"
              >
                {item.icon}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default styled(navbar)`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
  background: var(--mainWhite);
  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.65);

  visibility: ${props => (props.show ? "visible" : "hidden")};
  transition: all 200ms ${props => (props.show ? "ease-in" : "ease-out")};
  transform: ${props => (props.show ? "none" : "translate(0, -100%)")};
`
