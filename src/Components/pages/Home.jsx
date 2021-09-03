import React from "react";
import Navbar from "../boilerplates/Navbar";
import Main from "../boilerplates/Main";
import Footer from "../boilerplates/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Main page="website" img="" visit="/About" btname="Get Started" />
      <Footer />
    </>
  );
}
