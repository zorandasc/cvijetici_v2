import React from "react"
import { FaTimes } from "react-icons/fa"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { AppContext } from "../context/context"
import styles from "../css/sidebar.module.css"
import links from "../constants/links"
import socialLinks from "../constants/socialLinks"

const Sidebar = () => {
  const { isSidebarOpen, handleCloseSidebar, height } = React.useContext(
    AppContext
  )

  return (
    <div
      className={
        isSidebarOpen
          ? `${styles.sidebar}`
          : `${styles.sidebar} ${styles.closeSidebar} `
      }
    >
      <header
        className={
          height < 80
            ? `${styles.header}`
            : `${styles.header} ${styles.movingHeader}`
        }
      >
        <button
          aria-label="close icon"
          type="button"
          onClick={handleCloseSidebar}
          className={styles.closeBtn}
        >
          <FaTimes className={styles.closeIcon}></FaTimes>
        </button>
      </header>
      <section className={styles.linksContainer}>
        {links.map((item, index) => {
          return (
            <AniLink
              key={index}
              to={item.path}
              className={styles.link}
              onClick={handleCloseSidebar}
            >
              {item.label}
            </AniLink>
          )
        })}
      </section>
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
  )
}

export default Sidebar