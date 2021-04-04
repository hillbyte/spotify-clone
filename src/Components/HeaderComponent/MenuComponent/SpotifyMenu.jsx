import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const SpotifyMenu = () => {
  return (
    <Fragment>
      <nav>
        <ul>
          <li>
            <Link to="./Playlist">Launch Web Player</Link>
          </li>

          <li>
            <Link to="">Premium</Link>
          </li>
          <li>
            <Link to="./Signup">Sign up</Link>
          </li>
          <li>
            <Link to="/Signin">Log in</Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default SpotifyMenu;
