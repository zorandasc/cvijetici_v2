import React, { useState } from "react"
import NavbarOld from "./navbarOld"
import Footer from "./footer"

import { useScrollPosition } from "@n8tb1t/use-scroll-position"

const Layout = ({ children }) => {
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
      <NavbarOld show={hideOnScroll}></NavbarOld>
      {children}
      <Footer></Footer>
    </main>
  )
}

export default Layout
