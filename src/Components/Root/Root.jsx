import { Outlet } from "react-router-dom"
import { Navbar } from "../Navbar/Navbar"
import { Footer } from "../Footer/Footer"

import { Additem } from "../AddItem/Additem";

export const Root = () => {
    return (
        <div>

            <Navbar></Navbar>
            <Additem></Additem>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    )
}
