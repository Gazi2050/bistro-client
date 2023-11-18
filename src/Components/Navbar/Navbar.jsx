import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))

    }

    const navOptions = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/menu'>Our Menu</NavLink></li>
        <li><NavLink to='/order/salad'>Order Food</NavLink></li>
        <li><NavLink to='/contact'>Contact Us</NavLink></li>
        <li><NavLink to='/signUp'>SignUp</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar max-w-screen-xl fixed z-10 bg-black bg-opacity-40 text-orange-400 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost btn-xs sm:btn-sm md:btn-md lg:btn-ghost">Bistro</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-3">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ? <button onClick={handleLogout} className="btn btn-outline btn-sm md:btn-md text-yellow-400 ">LogOut</button> :
                        <NavLink to='/login' className="btn btn-outline btn-sm md:btn-md text-yellow-400 ">Login</NavLink>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;