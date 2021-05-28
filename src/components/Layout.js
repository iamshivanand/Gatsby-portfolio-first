import React from "react"
import "../styles/global.css"
//components
import Navbar from "./Navbar"
function Layout({ children }) {
  return (
    <div className="Layout">
      <Navbar />

      <div className="content">{children}</div>
      <footer>
        <p>copyright 2021 web warrior</p>
      </footer>
    </div>
  )
}

export default Layout
