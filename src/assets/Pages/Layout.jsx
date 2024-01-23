import { Outlet } from "react-router-dom"
import Header from "../Header"
import { useContext } from "react"
import { Context } from "../../Context/Context"


const Layout = () => {
  const {mode}=useContext(Context)
  return (
    <div style={mode? {backgroundColor: "black"}:{}}> 
        <Header/>
        <Outlet/>
    </div>
  )
}

export default Layout