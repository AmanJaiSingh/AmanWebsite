import React from "react";
import Navbar from "../boilerplates/Navbar";
import Main from "../boilerplates/Main";
import Footer from "../boilerplates/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <Main page="Contact Page" visit="/Search" btname="Search" />
      <Footer />
    </>
  );
}
