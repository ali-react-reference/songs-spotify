import axios from "axios";

const spotifyCreds = process.env.REACT_APP_SPOTIFY_CREDENTIALS
// console.log(spotifyCreds)
export const spotify = axios.create({
  baseURL: "https://api.spotify.com/v1/",
  headers: {
    Accept: 'application/json',
  }
});

export const spotifyAccounts = axios.create({
  baseURL: "https://accounts.spotify.com/api/",
  headers: {
    Authorization:`Basic ${spotifyCreds}`,
  }
})

