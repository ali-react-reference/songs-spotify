# About songs
Songs contains:
- Basic react-redux with static content (synchronous)
- Async api calls by action creators (async) - index.js
- Redux thunk middleware to handle action creators not returning js objects (they return a request object instead). When the action creator gets to the reducer, then there is no response yet
- Mapstate to props (get data from the redux store into the component) 
- Using action creators from components with react-redux
- Reducer rules - fetchSongsReducer
- mapStateToProps ownProps arguments - SongDetail
- Nested action creators - actions/index.js