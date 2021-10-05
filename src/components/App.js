import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';
import SearchBar from './SearchBar'

const App = () => {
  return (
    <div className="ui container grid">
    <div className="ui row">
      <h1>Quality Spotify Songs</h1>
    </div>
    <div className="ui row">
      <SearchBar></SearchBar>
    </div>
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
