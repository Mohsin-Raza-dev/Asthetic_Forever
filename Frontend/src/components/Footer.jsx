import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="w-32 mb-6" alt="logo" />
          <p className="w-full md:w-2/3 text-gray-500 mt-4">
            At Asthetic Forever, we believe shopping should be simple,
            affordable, and fun. Explore top-quality fashion and accessories
            made to match your lifestyle — all in one place.
          </p>
        </div>
        <div>
          <p className="text-xl text-gray-700 font-medium mb-5">COMPANY</p>
          <ul className=" flex flex-col gap-2 text-gray-500">
            <Link to="/" className="hover:text-gray-700">
              Home
            </Link>
            <Link to="/about" className="hover:text-gray-700">
              About us
            </Link>
            <Link to="#" className="hover:text-gray-700">
              Delivery
            </Link>
            <Link to="#" className="hover:text-gray-700">
              Privacy Policy
            </Link>
          </ul>
        </div>
        <div>
          <p className="text-xl text-gray-700 font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-500">
            <Link>456 Fashion Ave, NY 10018, USA</Link>
            <Link>+92 123 456 789</Link>
            <Link>astheticforever@gmail.com</Link>
          </ul>
        </div>
      </div>
      <div>
        <hr className="w-full " />
        <p className="text-sm text-gray-500 mt-4 text-center">
          Copyright © 2025 Asthetic Forever. All Rights Reserved.
        </p>
        <p className="text-sm text-gray-500 text-center">
          Privacy Policy | Terms & Conditions
        </p>
        <p className="text-sm text-gray-500 text-center">
          Made with ❤️ by{" "}
          <span className="text-gray-600 font-medium">Mohsin Raza</span>
        </p>
      </div>
    </div>
  );
}

export default Footer