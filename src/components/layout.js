import React from "react"
import Navbar from "./navbar"
import Footer from "./footer"
import Sidebar from "./sidebar"

const Layout = ({ children }) => {
  return (
    <main>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      {children}
      <Footer></Footer>
    </main>
  )
}

export default Layout
