import React, { Fragment } from "react";
import VideoList from "./VideoList";
import VideoRectangle from "./VideoRectangle";

export default function VideoPlayer({ dispatch, videoSelected, videos }) {
  videos = videos.sort((a, b) => (a.name > b.name ? 1 : -1));

  return (
    <Fragment>
      <section className="container">
        <h1>
          {videos[videoSelected] ? videos[videoSelected].name : "Video Player"}
        </h1>
        <VideoRectangle videoSelected={videoSelected} videos={videos} />
        <VideoList dispatch={dispatch} videos={videos} />
      </section>
    </Fragment>
  );
}
