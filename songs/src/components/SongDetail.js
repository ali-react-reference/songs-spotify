import React, { useEffect, useRef } from "react";
import ReactDOM from 'react-dom';
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  const ref = useRef();

  useEffect(()=>{
    // hack to re-load audio control
    // let element = ReactDOM.findDOMNode(this)
    // let audio = element.querySelector('audio')
    if (ref.current) {
      ref.current.load();
      ref.current.play();
    }
  },[song])

  if (!song) {
    return <div>Select a song</div>;
  }

  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title: {song.title} <br />
        Duration: {song.duration}
      </p>
      <img src={song.img} alt="" />
      <div>
        <div className="audio-player-wrap">
          <audio id="audioPlayer" autoPlay controls ref={ref}>
            <source src={song.preview_url} type="audio/mpeg" />
            Your browser does not support HTML5 Audio!
          </audio>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
