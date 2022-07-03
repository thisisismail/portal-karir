import React from "react";

export default function BodySection(props) {
  return (
    <div className="border-0 flex flex-1 justify-center overflow-y-auto">
      <div style={{ width: 1400 }} className="border-0 px-1 md:pt-24 pt-10">
        {props.pageComponent}
      </div>
    </div>
  );
}
