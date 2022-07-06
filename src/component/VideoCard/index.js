import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { playedVideolink } from "../../store/action/index.js";

export default function VideoCard(props) {
  const [link, setLink] = useState("");
  const [click, setClick] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(playedVideolink(link));
    console.log("finish store video link to redux");
  }, [click]);

  // use embed instead of watch?v=
  const videoLink = `https://www.youtube.com/embed/${props.videoId}`;
  const videoTitle = props.videoTitle;
  const videoImage = props.videoImage;
  const videoChannel = props.videoChannel;
  const videoDate = props.videoDate;

  const openVideoPlayer = () => {
    setClick(!click);
    setLink(videoLink);
    console.log("video clicked start");
    console.log(videoLink);
    console.log("video clicked finish");
  };

  return (
    <div
      style={{ maxWidth: 600 }}
      className="mx-auto border-0 flex flex-col sm:flex-row w-full mb-4 sm:mb-6"
    >
      <div className="w-full sm:w-min sm:h-44 mb-0 border-0 border-green-200">
        <button
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
