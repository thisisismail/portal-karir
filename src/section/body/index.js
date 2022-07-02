import React from "react";
import LandingPage from "../../Pages/LandingPage/index.js";

export default function BodySection() {
  const iteration = Array.from(Array(100).keys());

  const dummy = iteration.map((item) => <div key={item}>{item}</div>);

  return (
    <div className="border-0 flex flex-1 justify-center overflow-y-auto">
      <div style={{ width: 1400 }} className="border-0 px-4 md:pt-24 pt-12 ">
        <LandingPage />
        <div>{dummy}</div>
      </div>
    </div>
  );
}
