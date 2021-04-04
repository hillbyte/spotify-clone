import React, { Fragment } from "react";
import SpotifyLogo from "../HeaderComponent/LogoComponent/SpotifyLogo";
import "./FooterComponent.css";

const FooterMenu = () => {
  return (
    <Fragment>
      <section id="footerMenu">
        <article>
          <div className="footerLogo">
            <div>
              <SpotifyLogo />
            </div>
          </div>
          <div className="companySection">
            <div>
              <ul>
                <li>
                  <a href="">Company</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Jobs</a>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <a href="">Communities</a>
                </li>
                <li>
                  <a href="">For Artist</a>
                </li>
                <li>
                  <a href="">Developer</a>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <a href="">Useful Links</a>
                </li>
                <li>
                  <a href="">Support</a>
                </li>
                <li>
                  <a href="">Web Player</a>
                </li>
                <li>
                  <a href="">Free Mobile App</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="social">
            <ul>
              <li>
                <span>
                  <i className="fab fa-twitter"></i>
                </span>
              </li>
              <li>
                <span>
                  <i className="fab fa-instagram"></i>
                </span>
              </li>
              <li>
                <span>
                  <i className="fab fa-github"></i>
                </span>
              </li>
            </ul>
          </div>
        </article>
      </section>
    </Fragment>
  );
};
export default FooterMenu;
