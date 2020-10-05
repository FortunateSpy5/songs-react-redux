import { combineReducers } from 'redux'

const songsReducer = () => {
  return [
    { title: 'Ocean', singer: 'Anuv Jain' },
    { title: 'Let It Be', singer: 'Sir Paul McCartney' },
    { title: 'All of Me', singer: 'John Legend' },
    { title: 'The Nights', singer: 'Avicii' },
    { title: 'Hey There Delilah', singer: 'Plain White Ts' },
    { title: 'All I Want', singer: 'Kodaline'}
  ]
};

const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})