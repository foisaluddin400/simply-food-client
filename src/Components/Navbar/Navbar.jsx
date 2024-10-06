import { Link, NavLink } from "react-router-dom"
import { FaBars } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import Img from "../../assets/img/icon.png"
import { useContext } from "react";
import { AuthContext } from "../Authcontext/AuthPriver";

export const Navbar = () => {
    const { logOut, user } = useContext(AuthContext); 

    const handleLogout = () => {
        logOut()
            .then(() => {
                console.log('sucsessfull');
            })
            .catch(error => {
                console.error(error)
            })
    }
    const menu = <>
        <NavLink className={' bb '} to='/'><li>Home</li></NavLink>
        <NavLink className={'pl-4 bb'} to='/about'><li>About</li></NavLink>
        {
            user && <>
                <NavLink className={'pl-4 bb'} to='/ourmenu'><li>Our Menu</li></NavLink>
                <NavLink className={'pl-4 bb'} to='/blog'><li>Blog</li></NavLink>
                <NavLink className={'pl-4 bb'} to='/contact'><li>Contact</li></NavLink></>
        }
        <NavLink className={'pl-4 bb'} to='/userinfo'><li>User Info</li></NavLink>
        <NavLink className={'pl-4'} to='/faq'><li>FAQ</li></NavLink>
    </>
    const menuMobile = <>
        <NavLink className={'pl-3  '} to='/'><li>Home</li></NavLink>
        <NavLink className={'pl-3 '} to='/about'><li>About</li></NavLink>
        <NavLink className={'pl-3 '} to='/ourmenu'><li>Our Menu</li></NavLink>
        <NavLink className={'pl-3 '} to='/blog'><li>Blog</li></NavLink>
        <NavLink className={'pl-3 '} to='/contact'><li>Contact</li></NavLink>
        <NavLink className={'pl-3 '} to='/contact'><li>CAtering</li></NavLink>
        <NavLink className={'pl-3'} to='/register'><li>FAQ</li></NavLink>


    </>
    const icon = <><FaUserCircle /></>
    return (
        <div>
            <div className="bg-amber-600 p-3 text-center text-white">%%   Free shipping on all orders   %%</div>
            <div className="navbar p-0 pt-5 bg-white md:w-[85%] m-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"

                                stroke="currentColor">
                                <FaBars className="text-xl" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-white shadow-red-600 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {menuMobile}
                            <div><a className="border border-red-600 px-5 ml-2 text-red-600 py-2 bg-white">Button</a></div>
                        </ul>
                    </div>
                    <a className=" btn-ghost text-xl"><img src={Img} alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menu}

                    </ul>
                </div>
                <div className="navbar-end">

                    <div className="text-8xl ">

                    </div>

                    {
                        user ? <>

                            {
                                user.photoURL ? <Link to='/user'><div  ><img className="rounded-full w-[35px]" src={user.photoURL} alt="" /></div></Link> : <Link to='/user'><div className="text-4xl " >{icon}</div></Link>
                            }
                            <Link onClick={handleLogout} to='/register'><div className="border hidden lg:block border-red-600 px-5 ml-2  py-2 bg-amber-600 text-white">LogOut</div></Link>

                        </> : <>
                            <Link to='/user'><div className="text-4xl " >{icon}</div></Link>
                            <Link to='/login'><div className="border hidden lg:block border-red-600 px-5 ml-2 text-red-600 py-2 bg-white">Sign In</div></Link><Link to='/register'><div className="border hidden lg:block border-red-600 px-5 ml-2  py-2 bg-amber-600 text-white">Register</div></Link></>
                    }


                </div>
            </div>
        </div>
    )
}
