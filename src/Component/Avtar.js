import React from "react";

export default function Avtar({ avtar }) {
  const myStyle = {
    position: "relative",
    backgroundcolor: "#ffffff",
    width: "2.5rem",
    height: "2.5rem",
    borderradius: "9999px",
    bordercolor: "#D1D5DB",
  };
  return (
    <div
      className=" relative h-10 w-10 rounded-full
    border-gray-300 bg-white"
      style={myStyle}
    >
      <img
        layout="fill"
        src={`https://avatars.dicebear.com/api/open-peeps/${avtar}.svg`}
      />
    </div>
  );
}
