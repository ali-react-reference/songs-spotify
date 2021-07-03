import {spotify, spotifyAccounts} from "../api/Spotify";
import { millisToMinutesAndSeconds } from "../helpers/TimeConverter";
import qs from 'qs'

// Action creator
export const selectSong = (song) => {
  // Return an action
  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};

export const fetchSongs =
  (term) => async (dispatch) => {
    // get the auth token from a registered spotify app
    const authResponse = await spotifyAccounts.post('token','grant_type=client_credentials')
    const token = authResponse.data.access_token
    
    // get a list of spotify songs
    const response = await spotify.get("/search", {
      params: {
        type: "track",
        limit: 5,
        q: term,
      },
      headers:{
        Authorization:`Bearer ${token}`
      }
    });
    // convert the list into one I find useful
    console.log(response.data.tracks.items)
    const payload = response.data.tracks.items.map((song) => ({
      title: song.name,
      duration: millisToMinutesAndSeconds(song.duration_ms),
      artist: song.artists[0].name,
      img: song.album.images[1].url,
      id: song.id,
      preview_url: song.preview_url
    }));
    //
    dispatch({
      type: "FETCH_SONGS",
      payload: payload
    });
  };
