import { Link } from "react-router";
import { HiOutlineHeart } from "react-icons/hi2";
import { AiOutlineHome } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
/*
import { useState } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";

const navigation = [
    {name: "Dashboard", href:"/user-dashboard"},
    {name: "Orders", href:"/orders"},
    {name: "Cart Page", href:"/cart"},
    {name: "Check Out", href:"/checkout"},
]
*/
const Navbar = () => {
/*
    const  [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const cartItems = useSelector(state => state.cart.cartItems);
   
    const {currentUser, logout} = useAuth()
    
    const handleLogOut = () => {
        logout()
    }

    const token = localStorage.getItem('token');
  */
    return (
        <header className="max-w-screen-2xl mx-auto px-4 py-2 bg-neutral-300">
            <nav className="flex justify-between items-center">
                {/* left side */}
                <div className="flex items-center md:gap-16 gap-4">
                    <Link to="/">
                        <AiOutlineHome className="size-6 text-gray-700 hover:text-gray-900" />
                    </Link>
                </div>

                <div className="flex text-xl text-gray-500 from-neutral-400 font-mono">texto Biblico</div>

                {/* rigth side */}
                <div className="flex items-center md:space-x-3 space-x-2">

                    <button>
                        <RxAvatar className="size-6 text-gray-700 hover:text-gray-900" />
                    </button>
                    
                    <button className="hidden sm:block">
                        <HiOutlineHeart className="size-6 text-gray-700 hover:text-gray-900" />
                    </button>

                </div>
            </nav>
        </header>
    )
}

export default Navbar;