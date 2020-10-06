import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions'

const renderList = (songs, selectSong) => {
  return songs.map((song) => {
    return (
      <div className="item" key={song.title}>
        <div className="right floated content">
          <div 
            className="ui button primary"
            onClick={() => selectSong(song)}
          >
            Select
          </div>
        </div>
        <div className="content">{song.title}</div>
      </div>
    );
  })
};

const SongList = (props) => {
  return (
    <div className="ui divided list">
      {renderList(props.songs, props.selectSong)}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(
  mapStateToProps,
  { selectSong }
)(SongList);