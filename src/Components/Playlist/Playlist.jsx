import React, { Component, Fragment } from "react";
import "./Playlist.css";

const Playlist = () => {
  return (
    <Fragment>
      <section>
        <div>
          <iframe
            src="https://open.spotify.com/embed/playlist/67jgN0CFg6RycDqNnLzkZM"
            width="100%"
            height="500px"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>
      </section>
    </Fragment>
  );
};

export default Playlist;
