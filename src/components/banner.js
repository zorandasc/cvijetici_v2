import React from "react"
import style from "../css/banner.module.css"

const banner = ({ title, info, children }) => {
  return (
    <div className={style.banner}>
      <h1>{title}</h1>
      <p>{info}</p>
      {children}
    </div>
  )
}

export default banner
