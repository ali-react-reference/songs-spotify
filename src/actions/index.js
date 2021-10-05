import { spotify, spotifyAccounts } from "../api/Spotify";
import { millisToMinutesAndSeconds } from "../helpers/TimeConverter";
import qs from "qs";

// Action creator
export const selectSong = (song) => {
  // Return an action
  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};

const getAuth = async () => {
  const authResponse = await spotifyAccounts.post(
    "token",
    "grant_type=client_credentials"
  );
  return authResponse.data.access_token;
}

export const getSongsAndSongFeatures = (term) => async (dispatch, getState) => {
  await dispatch(fetchSongs(term)) //a
  
  const songIds = getState().songs.map(song=>song.id)
  console.log(songIds)
  songIds.forEach(id=>{
    dispatch(getSongFeatures(id))
  })
}

export const getSongFeatures = (trackId) => async (dispatch) => {
  console.log("action creator:");
  // get the auth token from a registered spotify app
  const token = await getAuth()
  // get the song features
  const response = await spotify.get(`audio-features/${trackId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const radarData = {
    id:response.data.id,
    labels: [
      "danceability",
      "energy",
      "speechiness",
      "acousticness",
      "instrumentalness",
      "liveness",
      "valence",
    ],
    datasets: [
      {
        label: "Song features",
        data: [
          response.data.danceability,
          response.data.energy,
          response.data.speechiness,
          response.data.acousticness,
          response.data.instrumentalness,
          response.data.liveness,
          response.data.valence,
        ],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  // console.log(radarData);
  dispatch({
    type: "FETCH_SONG_FEATURES",
    payload: radarData,
  });
};

export const fetchSongs = (term) => async (dispatch) => {
  // get the auth token from a registered spotify app
  const token = await getAuth()

  // get a list of spotify songs
  const response = await spotify.get("/search", {
    params: {
      type: "track",
      limit: 5,
      q: term,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  // convert the list into one I find useful
  // console.log(response.data.tracks.items)
  const payload = response.data.tracks.items.map((song) => ({
    title: song.name,
    duration: millisToMinutesAndSeconds(song.duration_ms),
    artist: song.artists[0].name,
    img: song.album.images[1].url,
    id: song.id,
    preview_url: song.preview_url,
  }));
  //
  dispatch({
    type: "FETCH_SONGS",
    payload: payload,
  });
};
