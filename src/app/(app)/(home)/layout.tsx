import React from "react"
import Navbar from "./navbar" // sesuaikan path kalau beda

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>{children}</main>
    </div>
  )
}

export default Layout
