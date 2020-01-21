import React, { useState } from "react"
import Navbar from "./navbar"
import Footer from "./footer"
import "./layout.css"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"

const layout = ({ children }) => {
  const [hideOnScroll, setHideOnScroll] = useState(true)

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y
      if (isShow !== hideOnScroll) setHideOnScroll(isShow)
    },
    [hideOnScroll],
    false,
    false,
    300
  )

  return (
    <main>
      <Navbar show={hideOnScroll}></Navbar>
      {children}
      <Footer></Footer>
    </main>
  )
}

export default layout
