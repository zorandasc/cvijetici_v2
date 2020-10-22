import React from "react"

import { AppContext } from "../context"
import Footerr from "./Footerr"
import NavBarDesk from "./NavBarDesk"
import NavBarMob from "./NavBarMob"
import Siddebar from "./Siddebar"

const Layout = ({ children }) => {
  const {
    width,
    handleCloseSidebar,
    handleOpenSidebar,
    isSidebarOpen,
  } = React.useContext(AppContext)
  const TRANSITION_LENGTH = 0.4
  return (
    <>
      {width > 1100 ? (
        <NavBarDesk></NavBarDesk>
      ) : (
        <NavBarMob openDrawer={handleOpenSidebar}></NavBarMob>
      )}

      <Siddebar
        visible={isSidebarOpen}
        closeDrawer={handleCloseSidebar}
        transitionLength={TRANSITION_LENGTH}
      ></Siddebar>

      <main
        style={{
          height: "100vh",
          overflow: isSidebarOpen ? "hidden" : "visible",
          transform: isSidebarOpen ? "scale(0.9)" : "none",
          transition: `transform ${TRANSITION_LENGTH}s ease-out`,
        }}
      >
        {children}
      </main>
      <Footerr></Footerr>
    </>
  )
}

export default Layout
