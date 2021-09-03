import React, { useState } from "react";

export default function SImg(props) {
  const img = `https://source.unsplash.com/600x400/?${props.name}`;

  return (
    <>
      <div className="flex justify-center">
        <div className="">
          <img src={img} alt="Opps" />
        </div>
      </div>
    </>
  );
}
