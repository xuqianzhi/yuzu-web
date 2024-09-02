import React, { FC } from "react";
import styled from "styled-components";

const FooterOverlay: FC<{ className?: string }> = ({ className }) => (
  <div className={className}>
    <div className="app__footerOverlay">
      <div className="app__footerOverlay-black" />
      <div className="app__footerOverlay-img app__bg" />
    </div>
  </div>
);

export default styled(FooterOverlay)`
  .app__footerOverlay {
    width: 100%;
    height: 100%;
    z-index: -1;

    display: flex;
    flex-direction: column;
    position: absolute;
  }

  .app__footerOverlay-black {
    height: 25%;
    background: var(--color-black);
  }

  .app__footerOverlay-img {
    height: 75%;
  }
`;
