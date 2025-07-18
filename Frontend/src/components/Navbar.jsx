import { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
const Navbar = () => {
  const [visible, setVisible] = useState(false);
  
  const {setShowSearch, cartQuantity} = useContext(ShopContext);

const toggleMenu = () => {
    if (!visible) {
        setVisible(true);
    } else {
        setVisible(false);
    }
}
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/">
        <img src={assets.logo} className="w-36" alt="logo" />
      </Link>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink
          to="/"
          className="flex flex-col items-center gap-1 transition-transform duration-300 transform hover:scale-105"
        >
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink
          to="/collection"
          className="flex flex-col items-center gap-1 transition-transform duration-300 transform hover:scale-105"
        >
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink
          to="/about"
          className="flex flex-col items-center gap-1 transition-transform duration-300 transform hover:scale-105"
        >
          <p>ABOUT US</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink
          to="/contact"
          className="flex flex-col items-center gap-1 transition-transform duration-300 transform hover:scale-105"
        >
          <p>CONTACT US </p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <img onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          className="w-5 cursor-pointer"
          alt="search"
        />
        <div className="group relative">
          <img
            src={assets.profile_icon}
            className="w-5 cursor-pointer"
            alt="profile icon"
          />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-2 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img
            src={assets.cart_icon}
            className="w-5 min-w-5 cursor-pointer"
            alt="cart's icon"
          />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 h-4 text-xs flex items-center justify-center text-white bg-black rounded-full">
            {cartQuantity()}
          </p>
        </Link>
        <img
          onClick={toggleMenu}
          className="w-5 cursor-pointer sm:hidden"
          src={assets.menu_icon}
          alt="menu icon"
        />
        <div
          className={`absolute top-0 right-0 botton-0 overflow-hidden bg-white transition-all duration-300 ${
            visible ? "w-full h-full" : "w-0"
          }`}
        >
          <div className="flex flex-col text-gray-600">
            <div
              onClick={toggleMenu}
              className="flex items-center gap-4 p-3 cursor-pointer"
            >
              <img
                src={assets.dropdown_icon}
                alt="dropdown icon"
                className="h-4 rotate-180"
              />
              <p>Back</p>
            </div>
            <NavLink onClick={toggleMenu} className="p-2 pl-6 border-b " to="/">
              HOME
            </NavLink>
            <NavLink
              onClick={toggleMenu}
              className="p-2 pl-6 border-b "
              to="/collection"
            >
              COLLECTION
            </NavLink>
            <NavLink
              onClick={toggleMenu}
              className="p-2 pl-6 border-b"
              to="/about"
            >
              ABOUT US
            </NavLink>
            <NavLink onClick={toggleMenu} className="p-2 pl-6 " to="/contact">
              CONTACT US
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar