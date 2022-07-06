import React, { useState, useEffect } from "react";
import { Button, Card } from "@material-tailwind/react";
import { useSelector, useDispatch } from "react-redux";
import gambar from "../../assets/img/background-search.png";
import SearchBar from "../../component/SearchBar/index.js";
import VideoCard from "../../component/VideoCard/index.js";
import { playedVideolink } from "../../store/action/index.js";

export default function KursusPage() {
  const dispatch = useDispatch();

  const searchResult = useSelector((state) => state.searchResultReducer);
  const playedVideo = useSelector((state) => state.playVideoReducer);

  // useEffect(() => {
  //   var videoFrame = document.getElementById("PlayedVideoId");
  //   videoFrame.classList.toggle("hidden");
  // }, [playedVideo]);

  const renderFramePlayer = () => {
    if (playedVideo !== "") {
      return (
        <div
          id="played-video-id"
          className="border-0 bg-grey-700 bg-opacity-80 backdrop-blur-sm h-full w-full px-0 fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
        >
          <Card className="p-2 rounded-xl fixed top-1/2 -translate-y-1/2 mx-2">
            <iframe
              title="notitle"
              className="w-full aspect-video absolute sticky z-50 top-0 mb-2 rounded-xl"
              src={playedVideo}
            ></iframe>
            <Button onClick={() => dispatch(playedVideolink(""))}>X</Button>
          </Card>
        </div>
      );
    }
  };

  const videoList = searchResult?.map((item, index) => (
    <div key={index}>
      <VideoCard
        videoTitle={item.snippet.title}
        videoId={item.id.videoId}
        videoImage={item.snippet.thumbnails.medium.url}
        videoChannel={item.snippet.channelTitle}
        videoDate={item.snippet.publishedAt.slice(0, 10)}
      />
    </div>
  ));

  return (
    <div className="border-0 px-4 md:-mt-14 relative">
      <div className="w-full bg-white border-0 border-red-200 justify-center fixed left-0 top-0 h-36 px-4 pt-24 z-1">
        <SearchBar />
      </div>
      {renderFramePlayer()}
      <div style={{ maxWidth: 1000 }} className="mx-auto">
        <div className="mt-12 md:mt-24 border-0">{videoList}</div>
      </div>
      <div id="banner-image" style={{ maxWidth: 500 }} className="mx-auto">
        {searchResult.length > 0 ? (
          <img src={gambar} alt="background-search" className="hidden" />
        ) : (
          <img src={gambar} alt="background-search" className="" />
        )}
      </div>
    </div>
  );
}
