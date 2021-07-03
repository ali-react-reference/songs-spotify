import spotify from "../api/Spotify";
import { millisToMinutesAndSeconds } from "../helpers/TimeConverter";

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
    // get a list of spotify songs
    const response = await spotify.get("/search", {
      params: {
        type: "track",
        limit: 5,
        q: term,
      },
    });
    // convert the list into one I find useful
    const payload = response.data.tracks.items.map((song) => ({
      title: song.name,
      duration: millisToMinutesAndSeconds(song.duration_ms),
      artist: song.artists[0].name,
      img: song.album.images[1].url,
      id: song.id
    }));
    //
    dispatch({
      type: "FETCH_SONGS",
      payload: payload
    });
  };
