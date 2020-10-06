import React from 'react';
import { connect } from 'react-redux'

const SongDetail = ({ song }) => {
  if (!song) {
    return (
      <div className="ui large header" style={{ height: "100%" }}>
        Select a song
      </div>
    );
  }
  return (
    <div>
      <div className="ui large header">Details</div>
      <p>
        <span className="ui medium header">Title:</span> {song.title}
        <br />
        <span className="ui medium header">Singer:</span> {song.singer}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong }
};

export default connect(
  mapStateToProps
)(SongDetail);