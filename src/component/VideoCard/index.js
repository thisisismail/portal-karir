import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import VideoPlayerCard from "../VideoPlayerCard/index.js";
import {
  Card,
  Popover,
  PopoverContent,
  PopoverHandler,
} from "@material-tailwind/react";
import { playedVideolink } from "../../store/action/index.js";

export default function VideoCard(props) {
  const [link, setLink] = useState("");

  const dispatch = useDispatch();
  const playedVideo = useSelector((state) => state.playVideoReducer);

  useEffect(() => {
    dispatch(playedVideolink(link));
    console.log("stored to redux");
  }, [link]);

  useEffect(() => {
    console.log("Display link from redux");
    console.log(playedVideo);
    console.log("finish display link from redux");
  }, [playedVideo]);

  const videoLink = `https://www.youtube.com/watch?v=${props.videoId}`;
  const videoLinkPoppup = `https://www.youtube.com/embed/${props.videoId}`;
  const videoTitle = props.videoTitle;
  const videoImage = props.videoImage;
  const videoChannel = props.videoChannel;
  const videoDate = props.videoDate;

  const openVideoPlayer = () => {
    setLink(videoLinkPoppup);
    console.log("video clicked start");
    console.log(videoLinkPoppup);
    console.log("video clicked finish");
  };

  return (
    <div
      style={{ maxWidth: 600 }}
      className="mx-auto border-0 flex flex-col sm:flex-row w-full mb-4 sm:mb-6"
    >
      {/* <iframe
        title={videoTitle}
        id="videoPlayer"
        className="w-full aspect-video hidden absolute"
        src={videoLinkPoppup}
      ></iframe> */}
      <div
        id="videoPlayer"
        className="border-0 hidden absolute w-full left-0 flex justify-center"
      >
        <VideoPlayerCard
          videoId={props.videoId}
          videoLink={videoLink}
          className="z-50"
        />
      </div>

      <div className="w-full sm:w-min sm:h-44 mb-0 border-0 border-green-200">
        <button
          // href={videoLink}
          onClick={openVideoPlayer}
          className="border-0 border-red-400 w-full sm:h-full sm:w-80"
        >
          <img
            src={videoImage}
            alt="thumbnail"
            className="w-full h-full object-cover rounded-xl shadow-lg"
          />
        </button>
      </div>
      <div className="flex flex-col ml-0 sm:ml-4">
        <a href={videoLink}>
          <h1 className="text-xs sm:font-semibold md:text-sm">{videoTitle}</h1>
        </a>
        <a href={videoLink}>
          <h1 className="text-xs sm:text-sm text-grey-600">{videoChannel}</h1>
        </a>
        <a href={videoLink}>
          <h1 className="text-xs sm:text-sm text-grey-600">{videoDate}</h1>
        </a>
      </div>
    </div>
  );
}
