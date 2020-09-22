import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

export default function VideoThumbnail({ src, name, onClick }) {
  return (
    <Wrapper onClick={onClick}>
      <img alt="name" src={src} />
      {name}
    </Wrapper>
  );
}
