// eslint-disable-next-line import/no-anonymous-default-export
export default (songsFeatures = [], action) => {
  switch (action.type){
    case 'FETCH_SONG_FEATURES':
      console.log(action.payload)
      // add the song features to the songs features list, if it's not there already
      let obj = songsFeatures.find(songFeatures => songFeatures.id === action.payload.id);
      // if the song isn't there already, add it to the list
      if(!obj){
        let newSongsFeatures = [action.payload, ...songsFeatures]
        // if the list is too big, then remove some
        while(newSongsFeatures.length > 5){
          newSongsFeatures.pop()
        }
        console.log('reducer new state')
        console.log(newSongsFeatures)
        return newSongsFeatures;
      }
      return songsFeatures
    default:
      return songsFeatures;
  }
};