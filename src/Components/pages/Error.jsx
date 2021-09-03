import React from "react";
import Navbar from "../boilerplates/Navbar";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="bg-gradient-to-b from-red-200 to-blue-200 w-screen h-screen">
      <Navbar />
      <div className="w-screen  max-h-screen flex justify-center items-center text-8xl font-mono text-blue-400 flex-col">
        <div>404 Error..... Opps</div>
        <Link to="/">
          <button>Go back</button>
        </Link>
      </div>
    </div>
  );
}
