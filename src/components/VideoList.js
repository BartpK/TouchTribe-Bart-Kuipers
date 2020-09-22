import React from "react";
import actions from "../state/actions";
import VideoThumbnail from "./VideoThumbnail";

export default function VideoList({ dispatch, videos }) {
  return (
    <section className="video-list">
      <h2>Up next...</h2>
      {videos.map((video, i) => {
        return (
          <VideoThumbnail
            dispatch={dispatch}
            key={`${video.name}-thumbnail`}
            name={video.name}
            onClick={() => {
              dispatch({ type: actions.SELECT_VIDEO, payload: i });
            }}
            src={video.thumbnail}
          />
        );
      })}
    </section>
  );
}
