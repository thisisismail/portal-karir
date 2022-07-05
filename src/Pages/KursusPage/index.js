import React from "react";
import { Button } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import gambar from "../../assets/img/background-search.png";
import SearchBar from "../../component/SearchBar/index.js";
import VideoCard from "../../component/VideoCard/index.js";

export default function KursusPage() {
  const searchResult = useSelector((state) => state.searchResultReducer);

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
    <div className="border-0 px-4 md:-mt-14">
      <div className="w-full border-0 justify-center">
        <SearchBar />
      </div>
      <div style={{ maxWidth: 1000 }} className="mx-auto">
        <div className="mt-6 md:mt-12 border-0">{videoList}</div>
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
