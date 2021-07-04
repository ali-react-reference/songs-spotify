/* eslint-disable import/no-anonymous-default-export */
// rules of reducers
// 2. can only use the previous state and an action to return a new state
// 3. reducers should be pure - they can't use other functions or make api requests 
// 4. can't mutate the input state argument eg songs - can't change the state element. Create a copy instead, then modify
export default (songs=[], action) => {
  switch (action.type){
    case 'FETCH_SONGS':
      return action.payload
    default:
      return songs
  }
  // 1. reducers can't return undefined
  // if there is no return statement, then undefined is returned
};