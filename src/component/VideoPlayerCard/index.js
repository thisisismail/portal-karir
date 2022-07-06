import React from "react";
import { Button, Card } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { playedVideolink } from "../../store/action/index.js";

export default function VideoPlayer(props) {
  const dispatch = useDispatch();
  return (
    <div
      style={{ maxWidth: 800 }}
      id="played-video-id"
      className="border-0 bg-grey-700 bg-opacity-80 backdrop-blur-sm h-full w-full px-0 fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
    >
      <Card className="p-2 rounded-xl fixed top-1/2 -translate-y-1/2 mx-2">
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
