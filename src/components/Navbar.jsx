import { Link } from "react-router";
import { FaInfo } from "react-icons/fa6";
import { MdOutlineArrowBack, MdOutlineArrowForward } from "react-icons/md";
import { useAuth } from "../context/AuthContext";
import { FiLogIn } from "react-icons/fi";
import { FaRegCircleUser } from "react-icons/fa6";
/*
import { useState } from "react";
import { useSelector } from "react-redux";

const navigation = [
    {name: "Dashboard", href:"/user-dashboard"},
    {name: "history", href:"/history"},
    {name: "favorites", href:"/favorites"},
]
*/
const Navbar = () => {

    const {currentUser, logout} = useAuth();

    const handleLogOut = () => {
        logout()
    }
/*
    const  [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const cartItems = useSelector(state => state.cart.cartItems);

    const token = localStorage.getItem('token');
  */
    return (
        <header className="max-w-screen-2xl mx-auto px-4 py-2 bg-neutral-300">
            <nav className="flex justify-between items-center">
                {/* left side */}
                <div className="flex items-center md:gap-16 gap-4">
                    <Link to="/about">
                        <FaInfo className="size-6 text-gray-700 hover:text-gray-900" />
                    </Link>
                </div>

                <div className="flex items-center md:space-x-8 space-x-4">

                <button onClick={() => window.history.back()}>
                    <MdOutlineArrowBack className="size-6 text-gray-700 hover:text-gray-900" />
                </button>
                <div className="flex text-xl text-gray-500 from-neutral-400 font-mono">texto Biblico</div>
                <button onClick={() => window.history.forward()}>
                    <MdOutlineArrowForward className="size-6 text-gray-700 hover:text-gray-900" />
                </button>

                </div>

                {/* rigth side */}
                <div className="flex items-center md:space-x-3 space-x-2">
                    {/*
                    <Link to="/login">
                        <FiLogIn className="size-6 text-gray-700 hover:text-gray-900" />
                    </Link>
                    <FaRegCircleUser className="size-6 text-gray-700 hover:text-gray-900" />*/}
                </div>
            </nav>
        </header>
    )
}

export default Navbar;