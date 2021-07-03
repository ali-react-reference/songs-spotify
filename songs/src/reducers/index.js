import { combineReducers } from "redux";

const fetchSongsReducer = (songs=[], action) => {
  if (action.type === "FETCH_SONGS") {
    return action.payload;
  }
  return songs
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  console.log(selectedSong);
  return selectedSong;
};

export default combineReducers({
  songs: fetchSongsReducer,
  selectedSong: selectedSongReducer,
});
