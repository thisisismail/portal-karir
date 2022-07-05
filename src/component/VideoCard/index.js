import React from "react";
import VideoPlayerCard from "../VideoPlayerCard/index.js";
import {
  Card,
  Popover,
  PopoverContent,
  PopoverHandler,
} from "@material-tailwind/react";

export default function VideoCard(props) {
  const videoLink = `https://www.youtube.com/watch?v=${props.videoId}`;
  const videoTitle = props.videoTitle;
  const videoImage = props.videoImage;
  const videoChannel = props.videoChannel;
  const videoDate = props.videoDate;

  const openVideoPlayer = () => {
    var videoPlayer = document.getElementById("videoPlayer");
    videoPlayer.classList.toggle("hidden");
  };

  return (
    <div className="border-0 flex flex-col sm:flex-row w-full mb-4 sm:mb-6">
      {/* <div id="videoPlayer" className="border-2 hidden absolute w-full left-0 flex justify-center">
        <VideoPlayerCard videoId={props.videoId} videoLink={videoLink} className="z-50"/>
      </div> */}
      <div className="h-24 lg:h-52 mb-0 md:h-24">
        <div className="border-0 border-green-200">
          <button href={videoLink} onClick={openVideoPlayer}>
            <img
              src={videoImage}
              alt="thumbnail"
              className="w-44 h-24 lg:h-52 lg:w-96 object-cover rounded-tl-xl rounded-br-xl shadow-lg"
            />
          </button>
        </div>
      </div>
      <div className="flex flex-col ml-2">
        <a href={videoLink}>
          <h1 className="text-xs sm:font-semibold">{videoTitle}</h1>
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
