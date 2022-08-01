export const searchResult = (result) => {
  return {
    type: "VIDEORESULT",
    payload: result,
  };
};

export const playedVideolink = (link) => {
  return {
    type: "PLAYEDVIDEO",
    payload: link,
  };
};

export const userData = (data) => {
  return {
    type: "USERDATA",
    payload: data,
  };
};

export const articleData = (data) => {
  return {
    type: "ARTICLEDATA",
    payload: data,
  };
};
