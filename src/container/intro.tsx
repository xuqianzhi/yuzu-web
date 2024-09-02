import React, { FC } from "react";
import styled from "styled-components";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

import { meal } from "src/constants";

const Intro: FC<{ className?: string }> = ({ className }) => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef = React.useRef<HTMLVideoElement>(null);

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);
    if (playVideo) {
      vidRef?.current?.pause();
    } else {
      vidRef?.current?.play();
    }
  };

  return (
    <div className={className}>
      <div className="app__video">
        <video
          ref={vidRef}
          src={meal}
          loop
          controls={false}
          muted
        />
        <div className="app__video-overlay flex__center">
          <div
            className="app__video-overlay_circle flex__center"
            onClick={handleVideo}
          >
            {playVideo ? (
              <BsPauseFill color="#fff" fontSize={30} />
            ) : (
              <BsFillPlayFill color="#fff" fontSize={30} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default styled(Intro)`
  .app__video {
    height: 100vh;
    position: relative;
  }

  .app__video video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .app__video-overlay {
    position: absolute;
    inset: 0;
    background: rgb(0, 0, 0, 0.3);
  }

  .app__video-overlay_circle {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 1px solid var(--color-golden);
    cursor: pointer;
  }
`;
