import React, { Component, Fragment } from "react";
import SpotifyNavbar from "./Components/HeaderComponent/SpotifyNavbar";
import FooterMenu from "./Components/FooterComponent/FooterComponent";
import SignUp from "./Components/AuthComponent/Signup";
import SignIn from "./Components/AuthComponent/Signin";
import Home from "./Components/HomeComponent/Home";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import Playlist from "./Components/Playlist/Playlist";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import firebase from "./firebase";

class App extends Component {
  state = {
    userInfo: "",
  };

  async componentDidMount() {
    await firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ userInfo: user });
      } else {
        this.setState({ userInfo: "" });
      }
    });
  }

  render() {
    return (
      <Fragment>
        <Router>
          <header>
            <SpotifyNavbar user={this.state.userInfo} />
          </header>
          <ToastContainer />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/playlist" exact component={Playlist} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/signin" exact component={SignIn} />
            <Route path="*" exact component={PageNotFound} />
          </Switch>
          <FooterMenu />
        </Router>
      </Fragment>
    );
  }
}

export default App;
