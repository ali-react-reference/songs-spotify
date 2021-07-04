import { combineReducers } from "redux";
import fetchSongsReducer from './fetchSongsReducer'
import selectedSongReducer from './selectedSongReducer'
import fetchSongFeaturesReducer from './getSongFeaturesReducer'

export default combineReducers({
  songs: fetchSongsReducer,
  selectedSong: selectedSongReducer,
  songsFeatures: fetchSongFeaturesReducer
});
