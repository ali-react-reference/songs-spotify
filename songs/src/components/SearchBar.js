import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchSongs, getSongsAndSongFeatures } from "../actions";

const SearchBar = (props) => {
  const [term, setTerm] = useState("mr brightside");

  useEffect(() => {
    // note: useEffect wont accept async functions directly
    // the function passed to useEffect
    if (term && !props.songList.length) {
      console.log('getSongsAndSongFeatures called')
      props.getSongsAndSongFeatures(term);
    } else {
      // create a new timeout fn to call the api after 500 ms of no change
      const timeoutId = setTimeout(() => {
        if (term) {
          console.log('getSongsAndSongFeatures called')
          props.getSongsAndSongFeatures(term);
        }
      }, 500);

      // cleanup fn is called before the rest of use effect
      return () => {
        clearTimeout(timeoutId);
      };
    }

    // 2nd term can be empty - (first render + any rerender), [] - (first render), or [dataRef1, dataRef2] - (first time or (rerender && dataChange))
  }, [term]);

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="">Enter the name of a good song</label>
          <input
            type="text"
            className="input"
            onChange={(e) => setTerm(e.target.value)}
            value={term}
          ></input>
        </div>
      </div>
    </div>
  );
};

// getting data into the component
const mapStateToProps = (state) => {
  return { songList: state.songs };
};

export default connect(mapStateToProps, { fetchSongs, getSongsAndSongFeatures })(SearchBar);
