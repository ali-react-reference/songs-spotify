import axios, * as others from "axios";

const token = "BQBUXWVBzfW10cDAWN7AFDKo8q7WvgKKPu6jLscaBpImhpwDPq0GZCP00A7tTjPpRzLVVIhmsUv6CPhRCmU8s4GaeH7GJRWQImNJiT2D2UK6EYcJ87GJpiggkFMiXSTU2164JKE_m_5l8ZF47DcWNT_apQK9POW7-RipLsotUl3_lUcfeeEw9443qu-gYMe1zAmqakuXgSpe2MatSpKdcCJ2b6svJ0wQWwJ8ive92pay849ZA-BjKOR4LCAlzgnInGD7loTh_i6fSSyvfdOKNA";

export default axios.create({
  baseURL: "https://api.spotify.com/v1",
  headers: {
    Accept: 'application/json',
    Authorization:`Bearer ${token}` 
  }
});