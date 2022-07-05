import React from "react";
import { Button } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import gambar from "../../assets/img/background-search.png";
import SearchBar from "../../component/SearchBar/index.js";
import VideoCard from "../../component/VideoCard/index.js";

export default function KursusPage() {
  const searchResult = useSelector((state) => state.searchResultReducer);

  // const resultsList = searchResult.map((item, index)=>(<div>
  //   <h3>{item}</h3>
  // </div>))

  const videoList = searchResult?.map((item, index) => (
    <div key={index}>
      <VideoCard
        videoTitle={item.snippet.title}
        videoId={item.id.videoId}
        videoImage={item.snippet.thumbnails.high.url}
        videoChannel={item.snippet.channelTitle}
        videoDate={item.snippet.publishedAt.slice(0, 10)}
      />
    </div>
  ));

  return (
    <div className="border-0 px-4">
      <div className="w-full border-0 justify-center">
        <SearchBar />
      </div>
      <div style={{maxWidth:1000}} className="mx-auto">
        <div className="mt-12 border-0">{videoList}</div>
      </div>
      <div style={{ maxWidth: 500 }} className="mx-auto">
        <img src={gambar} alt="background-search" />
      </div>
    </div>
  );
}
