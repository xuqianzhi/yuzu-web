import { FC } from "react";
import styled from "styled-components";
import { SubHeading } from "src/components";

import { images } from "src/constants";

const Header: FC<{ className?: string }> = ({ className }) => (
  <div className={className}>
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Chase the new flavour" />
        <h1 className="app__header-h1">The Key To Fine Dining</h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus
        </p>
        <button type="button" className="custom__button">
          Explore Menu
        </button>
      </div>

      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header img" />
      </div>
    </div>
  </div>
);

export default styled(Header)`
  .app__header {
    background-color: var(--color-black);
  }

  .app__header-h1 {
    font-family: var(--font-base);
    color: var(--color-golden);
    letter-spacing: 0.04em;
    line-height: 117px;
    font-size: 90px;
  }

  .app__header-img img {
    width: 80%;
  }
`;
