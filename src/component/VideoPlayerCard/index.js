import React from "react";

export default function VideoPlayer(props) {
  return (
    <div>
      <iframe
        title={props.videoId}
        src={props.videoLink}
        width="500"
        height="300"
      ></iframe>
    </div>
  );
}
