import React from "react";

export default function UserInfoHeader(props) {
  return (
    <div className="flex felx-row justify-center items-center">
      <div className="border-0 h-8 scale-square mr-2">
        <img
          src={props.source}
          alt="profile"
          className="w-full h-full object-fill rounded-full"
        />
      </div>
      <div className="border-0 text-grey-700">{props.name}</div>
    </div>
  );
}
