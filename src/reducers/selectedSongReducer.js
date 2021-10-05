// eslint-disable-next-line import/no-anonymous-default-export
export default (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    // console.log(action.payload)
    return action.payload;
  }
  // console.log(selectedSong);
  return selectedSong;
};