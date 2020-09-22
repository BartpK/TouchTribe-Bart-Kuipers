import React from "react";
import actions from "../state/actions";
import VideoThumbnail from "./VideoThumbnail";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function VideoList({ dispatch, videos }) {
  return (
    <section className="video-list">
      <Router>
        <h2>Up next...</h2>
        {videos.map((video, i) => {
          return (
            <Link to={video.name} key={video.name}>
              <VideoThumbnail
                dispatch={dispatch}
                key={`${video.name}-thumbnail`}
                name={video.name}
                onClick={() => {
                  dispatch({ type: actions.SELECT_VIDEO, payload: i });
                }}
                src={video.thumbnail}
              />
            </Link>
          );
        })}
      </Router>
    </section>
  );
}
