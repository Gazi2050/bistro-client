import { NavLink, Outlet } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { ImHome } from "react-icons/im";
import { MdDateRange, MdOutlinePayment, MdRateReview } from "react-icons/md";
import { IoBookmarks } from "react-icons/io5";
const DashBoard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-full bg-orange-400">
                <ul className="menu space-y-1 text-xl">
                    <li><NavLink to='/dashBoard/home'><ImHome /> Home</NavLink></li>
                    <li><NavLink to='/dashBoard/cart'><FaCartShopping /> Cart</NavLink></li>
                    <li><NavLink to='/dashBoard/reservation'><MdDateRange /> Reservation</NavLink></li>
                    <li><NavLink to='/dashBoard/payment'><MdOutlinePayment /> Payment</NavLink></li>
                    <li><NavLink to='/dashBoard/bookings'><IoBookmarks /> My Bookings</NavLink></li>
                    <li><NavLink to='/dashBoard/addReviews'><MdRateReview /> Add Review</NavLink></li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;