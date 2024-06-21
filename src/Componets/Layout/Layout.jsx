import React from "react";
import NavBar from "../Reuseables/NavBar";
import Footer from "../Reuseables/Footer";
import {Outlet} from "react-router-dom"
const Layout =()=>{
    return(
        <>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </>
    )
}
export default Layout;