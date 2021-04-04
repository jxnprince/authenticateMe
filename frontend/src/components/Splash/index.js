import "./splash.css";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import LoginForm from "../LoginFormModal/LoginForm";
import SignupForm from "../SignupFormModal/SignupForm";
import ProfileButton from "../Navigation/ProfileButton";
import { activateLogin } from "../../store/modal";
import { activateSignUp } from "../../store/modal";
import Carousel from "../Carousel";
import { songs } from "../../store/songs";
import SongsContainer from "../SongsContainer";

function Splash({ isLoaded }) {
  const dispatch = useDispatch();
  const history = useHistory();
  // const [showModal, setShowModal] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);
  const songsState = useSelector((state) => state.song.songs);

  useEffect(() => {
    if (sessionUser) {
      history.push("/dashboard");
    }
  }, [sessionUser]);

  useEffect(() => {
    dispatch(songs());
  }, []);

  function modalIsOpenSignUp() {
    dispatch(activateSignUp());
  }

  function modalIsOpenLogin() {
    dispatch(activateLogin());
  }

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <div>
          <button onClick={() => modalIsOpenLogin()} className="splash-login">
            Sign in
          </button>
          <LoginForm />
        </div>
        <div>
          <button onClick={() => modalIsOpenSignUp()} className="splash-signup">
            Create account
          </button>
          <SignupForm />
        </div>
      </>
    );
  }

  return (
    <div className="splash">
      <div className="splash-top-line"></div>
      <div className="splash-banner-container">
        {/* <Carousel className="carousel" /> */}

        <div className="splash-banner-navbar">
          <div className="splash-banner-left">
          </div>

          <div className="splash-banner-right">{isLoaded && sessionLinks}</div>
        </div>
        <div className="overflow-hidden position-relative">
          <Carousel />
        </div>
      </div>

      <div>
        <div className="splash-trending-container">
          <h3>See what's trendng~!</h3>
          <div>
            <div className="splash-trending-tracks">
              {songsState.map((song) => (
                <SongsContainer key={song.id} song={song} />
              ))}
            </div>
            <div className="splash-button-row">
            </div>
          </div>
        </div>
        <div className="orange-line"></div>
      </div>

      <div className="splash-creators">
        <div className="splash-creators-text">
          <h1 className="splash-header">Calling all creators</h1>
          <h3>
            Get on Middle8 to connect with fans, share your sounds, and grow
            your audience. What are you waiting for?
          </h3>
          <button onClick={() => modalIsOpenSignUp()}>Find Out More</button>
        </div>
      </div>

      <div className="splash-footer">
        <a href="https://github.com/jxnprince/middle8">GitHub</a>
        <p>-</p>
        <a href="https://www.linkedin.com/in/jackson-prince-4b3a637b/">Linkedin</a>
      </div>
      {/* <div>
        <MusicPlayer />
      </div> */}
    </div>
  );
}

export default Splash;
