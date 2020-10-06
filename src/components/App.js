import React from 'react';
import SongList from './SongList';
import SongDetail from "./SongDetail";

const App = () => {
  return (
    <div
      className="ui grid container"
      style={{ paddingTop: "1.5rem" }}
    >
      <div className="ui center aligned row">
        <div className="ui sixteen wide column huge header">Songs</div>
      </div>
      <div className="ui row segment">
        <div className="ui eight wide column segemnt">
          <SongList />
        </div>
        <div className="ui middle aligned center aligned eight wide column">
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default App;