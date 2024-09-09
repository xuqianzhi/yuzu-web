import { FC } from "react";
import styled from "styled-components";

const FooterOverlay: FC<{ className?: string }> = ({ className }) => (
  <div className={className}>
    <div className="app__footerOverlay">
      <div className="app__footerOverlay-black app__bg" />
      <div className="app__footerOverlay-img app__bg" />
    </div>
  </div>
);

export default styled(FooterOverlay)`
  width: 100vw;
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
  }

  .app__footerOverlay-img {
    height: 75%;
  }
`;
