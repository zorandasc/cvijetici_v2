import React from "react"
import styles from "../css/navbar.module.css"
import { AppContext } from "../context"
import links from "../constants/links"
import socialLinks from "../constants/socialLinks"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FaAlignRight } from "react-icons/fa"
import logo from "../images/logo.svg"

const Navbar = () => {
  const { width, handleOpenSidebar } = React.useContext(AppContext)
  return (
    <nav className={styles.navbar}>
      {width > 990 ? (
        <div className={styles.center}>
          <AniLink fade to="/" className={styles.logo}>
            <img src={logo} alt="svadbeni cvet"></img>
          </AniLink>
          <ul className={styles.links}>
            {links.map((item, index) => {
              return (
                <li key={index}>
                  <AniLink fade to={item.path} className={styles.navLink}>
                    {item.label}
                  </AniLink>
                </li>
              )
            })}
          </ul>
          <div className={styles.socialLinks}>
            {socialLinks.map((item, index) => {
              return (
                <a
                  key={index}
                  href={item.url}
                  className={styles.socialIcon}
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
      ) : (
        <div className={styles.header}>
          <AniLink fade to="/" className={styles.logo}>
            <img src={logo} alt="svadbeni cvet"></img>
          </AniLink>
          <button
            aria-label="hamburger menu"
            type="button"
            onClick={handleOpenSidebar}
            className={styles.toggleBtn}
          >
            <FaAlignRight className={styles.toggleIcon}></FaAlignRight>
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar
