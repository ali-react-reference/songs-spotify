import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong, fetchSongs } from "../actions";

class SongList extends Component {
  // I want this to refresh on the first render and every time there is a click
  componentDidMount() {
    this.props.fetchSongs("ram ranch");
  }

  renderList() {
    console.log(this.props.songs);
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.id}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">
            <b>{song.title}</b>
          </div>
          <div className="content">{song.artist}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

// getting data into the component
const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong, fetchSongs })(SongList);
