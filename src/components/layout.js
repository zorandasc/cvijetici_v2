import React from "react"

import { AppContext } from "../context"
import Footerr from "./Footerr"
import NavBarDesk from "./NavBarDesk"
import NavBarMob from "./NavBarMob"
import Drawer from "./Drawer"

const Layout = ({ children }) => {
  const { width, handleCloseSidebar, handleOpenSidebar, isSidebarOpen } = React.useContext(AppContext)
  const TRANSITION_LENGTH = 0.4
  return (
    <>
      {width > 1100 ? <NavBarDesk></NavBarDesk> : <NavBarMob openDrawer={handleOpenSidebar}></NavBarMob>}
      <Drawer visible={isSidebarOpen} closeDrawer={handleCloseSidebar} transitionLength={TRANSITION_LENGTH}></Drawer>
      <div style={{
        height: "100vh",
        //overflow: isSidebarOpen ? "hidden" : "visible",
        transform: isSidebarOpen
          ? "scale(0.9)"
          : "none",
        transition: `transform ${TRANSITION_LENGTH}s ease-out`,
      }}>
        <main>{children}</main>
        <Footerr></Footerr>
      </div>

    </>
  )
}

export default Layout
