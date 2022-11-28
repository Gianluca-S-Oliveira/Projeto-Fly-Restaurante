
import * as React from "react"
import "./layout.css"
import Menu from "../Menu"
import Footer from "../Footer/footer"


const Layout = ({ children }) => {
  return (
    <>
   <Menu/>
        <main>{children}</main>
     <Footer/>
     </>

  )
}

export default Layout
