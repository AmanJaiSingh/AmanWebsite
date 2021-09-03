import React, { useState } from "react";
import Navbar from "../boilerplates/Navbar";
import SImg from "../boilerplates/SImg";
import Footer from "../boilerplates/Footer";

export default function Search() {
  const [Img, setImg] = useState("");
  const inputevent = (event) => {
    const data = event.target.value;
    console.log(data);
    setImg(data);
  };

  return (
    <div className="w-screen h-screen bg-green-100">
      <Navbar />
      <div className=" w-screen flex justify-center p-10">
        <input
          className=" font-mono text-gray-600 p-2 bg-red-200 rounded-lg w-80 h-12 border-4 focus:outline-none"
          type="text"
          placeholder="Search anything"
          value={Img}
          onChange={inputevent}
        />
      </div>
      {Img === "" ? null : <SImg name={Img} />}
      <Footer />
    </div>
  );
}
