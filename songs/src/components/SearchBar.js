import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { fetchSongs } from '../actions';

const SearchBar = (props) => {
  const [term, setTerm] = useState("ram ranch");

  useEffect(() => {
    // note: useEffect wont accept async functions directly
    // the function passed to useEffect
    console.log(!term.toLowerCase().includes('ram'))
    if(term.toLowerCase().includes('ram')||term.toLowerCase().includes('ranch')){
      if (term && !props.songList.length) {
        props.fetchSongs(term);
      } else {
        // create a new timeout fn to call the api after 500 ms of no change
        const timeoutId = setTimeout(() => {
          if (term) {
            props.fetchSongs(term);
          }
        }, 500);
  
        // cleanup fn is called before the rest of use effect
        return () => {
          clearTimeout(timeoutId);
        };
      } 
    } else {
      setTerm('ram ranch')
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
}

// getting data into the component
const mapStateToProps = state => {
  return { songList: state.songs };
};

export default connect(
  mapStateToProps,
  { fetchSongs }
)(SearchBar);