import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className=" h-16 bg-gray-300">
        <div className="flex justify-between ">
          <div className="pt-3 pl-32 text-3xl text-black">
            <Link to="/"> Aman Jai Singh</Link>
          </div>
          <div className="pt-1  mr-24 flex item-center justify-evenly w-96 pr-10 text-gray-500">
            <Link
              className="duration-500 mt-3 text-gray-500 border-b-0 hover:text-blue-400 hover:border-6 text-xl "
              to="/AmanWebsite"
            >
              Home
            </Link>
            <Link
              className="duration-500 mt-3 hover:text-black text-xl"
              to="/Search"
            >
              Search
            </Link>
            <Link
              className="duration-500 mt-3 hover:text-black text-xl "
              to="/About"
            >
              About us
            </Link>
            <Link
              className="duration-500 mt-3 hover:text-black text-xl"
              to="/SignIn"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
