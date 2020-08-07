import React from "react"
import Navbar from "./navbar"
import Footer from "./footer"
import Sidebar from "./sidebar"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <main>{children}</main>
      <Footer></Footer>
    </>
  )
}

export default Layout
