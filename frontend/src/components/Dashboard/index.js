import React from "react";
import { useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { songs, singleSong } from "../../store/songs";
import { useEffect } from "react";
import MusicPlayer from "../MusicPlayer";
import Navigation from "../Navigation";
import "./dashboard.css";

function Dashboard({ isLoaded }) {
  const dispatch = useDispatch();
  // const history = useHistory();
  const songsState = useSelector((state) => state.song.songs);
  const song = useSelector((state) => state.song.currentSong);

  useEffect(() => dispatch(singleSong(1)), []);

  useEffect(() => {
    dispatch(songs());
  }, []);

  return (
    <div>
      <div className="dark-background">
        <Navigation isLoaded={isLoaded} />
      </div>
      <MusicPlayer />
      <div className="dashboard">
        <div className="dashboard-main">
          <div className="dashboard-content">
            <p>Your current playlist</p>
            <div className="dashboard-suggested">
              <div className="suggested-photo">
                <img className="suggested-photo" src={song?.image} />
              </div>
              <div className="suggested-song-list">
                {songsState
                  ? songsState.map((song) => (
                      <button
                        className="more-of-what-you-like-button"
                      onClick={() => {
                          dispatch(singleSong(song.id));
                        }}
                      >
                        <div className="small-list">
                          <div className="small-image-and-title">
                            <Link to={`/song/${song.id}`}>
                              <img
                                className="small-tile-image"
                                src={song.image}
                              ></img>
                            </Link>
                            <p className="song-title">
                              {song.title} by {song.artistName}
                            </p>
                          </div>
                        </div>
                      </button>
                    ))
                  : null}
              </div>
            </div>
          </div>

          <div className="dashboard-content">
            <h1>Top Songs</h1>
            <div className="dashboard-top">
              {songsState ? songsState.map((song) => (
                    <div>
                      <div className="button-outer"></div>
                      <div className="tile-outer">
                        <Link
                          className="tile-container"
                          to={`/song/${song.id}`}
                        >
                          <img className="tile-image" src={song.image}></img>
                        </Link>
                        <button
                          className="play-button"
                          onClick={() => {dispatch(singleSong(song.id))}}>
                        </button>
                        <p className="song-title">{song.title}</p>
                      </div>
                    </div>
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
