const FetchSearch = async (search) => {
  const SEARCH = search;
  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
  return await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${SEARCH}%20dengan%20siapa&type=video&key=${API_KEY}`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    });
};

export { FetchSearch };
