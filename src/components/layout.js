import React from "react"
import Navbar from "./navbar"
import Footer from "./footer"

const layout = ({ children }) => {
  return (
    <main>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </main>
  )
}

export default layout
