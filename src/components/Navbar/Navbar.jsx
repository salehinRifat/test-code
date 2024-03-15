import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Auth Provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const hadleLogOut = () => {
        logOut()
    }
    const li = <>
        <NavLink to={'/'} className={({ isActive }) => isActive ? "bg-indigo-500 text-white" : ""
        }><li className="text-lg  px-5 py-2 hover:bg-indigo-400 hover:text-white">Home</li></NavLink>
        <NavLink to={'/addblogs'} className={({ isActive }) => isActive ? "bg-indigo-500 text-white" : ""
        }><li className="text-lg  px-5 py-2 hover:bg-indigo-400 hover:text-white">Add Blog</li></NavLink>
        <NavLink to={'/allblogs'} className={({ isActive }) => isActive ? "bg-indigo-500 text-white" : ""
        }><li className="text-lg  px-5 py-2 hover:bg-indigo-400 hover:text-white">All Blogs</li></NavLink>
        <NavLink to={'/featured'} className={({ isActive }) => isActive ? "bg-indigo-500 text-white" : ""
        }><li className="text-lg  px-5 py-2 hover:bg-indigo-400 hover:text-white">Featured Blogs</li></NavLink>
        <NavLink to={'/wishlist'} className={({ isActive }) => isActive ? "bg-indigo-500 text-white" : ""
        }><li className="text-lg  px-5 py-2 hover:bg-indigo-400 hover:text-white">Wishlist</li></NavLink>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {li}

                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl ">Blog Point</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {li}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user?.photoURL} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li>

                                    {user?.displayName}

                                </li>
                                <li>{user?.email}</li>
                                <li><button className="btn btn-sm" onClick={hadleLogOut}>Log Out</button></li>
                            </ul>
                        </div>
                            :
                            <Link to={"/login"}><button className="btn btn-sm">Login</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;