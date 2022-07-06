import React from "react";
import { Button, Card } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { playedVideolink } from "../../store/action/index.js";

export default function VideoPlayer(props) {
  const dispatch = useDispatch();
  return (
    <div
      id="played-video-id"
      className="border-2 bg-grey-700 bg-opacity-80 backdrop-blur-sm h-full w-screen px-0 fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
    >
      <Card
        style={{ maxWidth: 800 }}
        className="p-2 rounded-xl fixed top-1/2 -translate-y-1/2 mx-auto"
      >
        <iframe
          title="notitle"
          className="w-full aspect-video absolute sticky z-50 top-0 mb-2 rounded-xl"
          src={props.source}
        ></iframe>
        <Button onClick={() => dispatch(playedVideolink(""))}>X</Button>
      </Card>
    </div>
  );
}
