import React, { useState } from "react";
import { useSelector } from "react-redux";
import gambar from "../../assets/img/background-search.png";
import SearchBar from "../../component/SearchBar/index.js";
import VideoCard from "../../component/VideoCard/index.js";
import VideoPlayerCard from "../../component/VideoPlayerCard";

export default function KursusPage() {
  const [loading, setLoading] = useState(
    <div className="w-full aspect-square border-0 animate-pulse rounded-md bg-grey-200"></div>
  );
  const [display, setDisplay] = useState("hidden");

  const searchResult = useSelector((state) => state.searchResultReducer);
  const playedVideo = useSelector((state) => state.playVideoReducer);

  const renderFramePlayer = () => {
    return (
      <div>
        {playedVideo !== "" ? <VideoPlayerCard source={playedVideo} /> : null}
      </div>
    );
  };

  const myClass = `${display}`;

  const renderBackgroundImage = () => {
    return (
      <div className="border-0 min-h-full">
        {searchResult.length === 0 ? (
          <div id="banner-image" style={{ maxWidth: 500 }} className="mx-auto">
            {loading}
            <img
              src={gambar}
              alt="background-search"
              onLoad={() => {
                setLoading();
                setDisplay("");
                console.log("Fully Loaded");
              }}
              className={myClass}
            />
          </div>
        ) : null}
      </div>
    );
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
      <div className="w-full bg-grey-50 border-0 border-red-200 justify-center fixed left-0 top-0 h-36 px-4 pt-24 z-1">
        <SearchBar />
      </div>
      {renderFramePlayer()}
      <div style={{ maxWidth: 1000 }} className="mx-auto">
        <div className="mt-12 md:mt-24 border-0">{videoList}</div>
      </div>
      {renderBackgroundImage()}
    </div>
  );
}
