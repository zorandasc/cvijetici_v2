import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { AppContext } from "../context/context"
import styles from "../css/sidebar.module.css"
import links from "../constants/links"
import socialLinks from "../constants/socialIcons"

const Sidebar = () => {
  const { width, isSidebarOpen, handleCloseSidebar } = React.useContext(
    AppContext
  )

  return (
    <div
      /* OVAJ STYLE JE ZA TABOVANJE NA OTVORENOM DESKTOPU */
      style={{ display: width > 1100 ? "none" : "block" }}
      className={
        isSidebarOpen
          ? `${styles.sidebar}`
          : `${styles.sidebar} ${styles.closeSidebar} `
      }
    >
      <nav className={styles.linksContainer}>
        <ul>
          {links.map((item, index) => {
            return (
              <li className={styles.topLink}>
                <AniLink
                  fade
                  key={index}
                  to={item.path}
                  className={styles.link}
                  activeClassName={styles.active}
                  onClick={handleCloseSidebar}
                >
                  <i className={styles.linksIcon}>{item.icon}</i>
                  {item.label}
                </AniLink>
              </li>
            )
          })}
          <li className={styles.socialLinks}>
            {socialLinks.map((item, index) => {
              return (
                <a
                  key={index}
                  href={item.url}
                  className={`${styles.socialIcon} ${item.label}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="socials links"
                >
                  {item.icon}
                </a>
              )
            })}
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
