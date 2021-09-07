import React, { useEffect, useState } from "react";
import web from "./../../img/code2.svg";
import { Link } from "react-router-dom";

export default function Main(props) {
  const [isAnimated, setisAnimated] = useState(false);
  useEffect(() => {
    setisAnimated(true);
  }, []);
  return (
    <div className="h-screen flex justify-around pb-28 bg-gradient-to-b from-gray-200 to-white-500">
      <div className="flex items-center  pr-20 ">
        <div
          className={`${
            isAnimated ? "scale-100" : "-translate-x-full translate-y-full"
          } transform transition duration-1000 ease-in-out `}
        >
          <div className="flex flex-col">
            <h1 className="text-4xl font-mono">
              Welcome My Frnd to my {props.page}
              <h1 className="text-blue-500">
                <strong>AmanjaiSingh</strong>
              </h1>
            </h1>
            <h2 className="pt-2 pb-2">
              This Is My First Website By My Own. And Want To Become Best
            </h2>
          </div>
          <div>
            <Link to={props.visit}>
              <button className=" shadow-2xl duration-500 bg-blue-400 border-blue-400 border-2 text-white text-2xl p-3 hover:text-blue-400 hover:bg-gray-200 hover:border-blue-400  rounded-full">
                {props.btname}
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <div className="bounce">
          <img
            src={web}
            alt="Img comin soon"
            className={`${
              isAnimated ? "scale-150" : "translate-x-full translate-y-full"
            } transform transition duration-1000 ease-in-out `}
          />
        </div>
      </div>
    </div>
  );
}
