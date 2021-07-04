import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import SongData from './SongData' 

const SongDetail = ({ song }) => {
  const ref = useRef();

  useEffect(() => {
    // hack to re-load audio control
    // let element = ReactDOM.findDOMNode(this)
    // let audio = element.querySelector('audio')
    if (ref.current) {
      ref.current.load();
      ref.current.pause();
    }
  }, [song]);

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
      <SongData songId={song.id}></SongData>
    </div>
  );
};

// can pass in 'ownProps' too eg const mapStateToProps = (state, ownProps)  
const mapStateToProps = (state) => {
  return {
    song: state.selectedSong,
  };
};

export default connect(mapStateToProps)(SongDetail);
