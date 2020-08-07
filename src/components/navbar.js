import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import styles from "../css/navbar.module.css"
import { AppContext } from "../context"
import links from "../constants/links"
import socialLinks from "../constants/socialLinks"
import logo from "../images/logo.svg"
import ToggleButton from "./ToggleButtonCss"
//import ToggleButtonIcon from "./ToggleButtonIcon"

const Navbar = () => {
  const { width, handleToggle, isSidebarOpen } = React.useContext(AppContext)
  return (
    <nav className={styles.navbar}>
      {width > 1100 ? (
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

          <ToggleButton
            handleToggle={handleToggle}
            isSidebarOpen={isSidebarOpen}
          ></ToggleButton>
        </div>
      )}
    </nav>
  )
}

export default Navbar
