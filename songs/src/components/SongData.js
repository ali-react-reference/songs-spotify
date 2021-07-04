import React from "react";
import { connect } from "react-redux";
import { Radar } from "react-chartjs-2";

const SongData = ({ radarData, songId }) => {
  const options = {
    tension: 0.15,
    scale: {
      r: {
        angleLines: {
          display: false,
        },
        suggestedMin: 0,
        suggestedMax: 1,
      },
    },
  };
  return (
    <div>
      <Radar data={radarData} options={options} />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    radarData: state.songsFeatures.find(
      (songFeatures) => ownProps.songId === songFeatures.id
    ),
  };
};

export default connect(mapStateToProps)(SongData);
