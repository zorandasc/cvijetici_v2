import React, { useState } from "react"
import styles from "../css/navbar.module.css"
import links from "../constants/links"
import socialLinks from "../constants/socialLinks"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FaAlignRight } from "react-icons/fa"
import logo from "../images/optimised.gif"

const navbar = () => {
  const [isOpen, setNav] = useState(false)
  const toggleNav = () => {
    setNav(() => !isOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <AniLink fade to="/">
            <img src={logo} alt="svadbeni cvet"></img>
          </AniLink>
          <button onClick={toggleNav} className={styles.logoBtn}>
            <FaAlignRight className={styles.logoIcon}></FaAlignRight>
          </button>
        </div>
        <ul
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
        </ul>
        <div
          className={
            isOpen
              ? `${styles.navSocialLinks} ${styles.showSocial}`
              : `${styles.navSocialLinks}`
          }
        >
          {socialLinks.map((item, index) => {
            return (
              <a key={index} href={item.url}>
                {item.icon}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default navbar
