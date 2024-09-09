import { FC } from "react";
import styled from "styled-components";

import { images } from "src/common";

const AboutUs: FC<{ className?: string }> = ({ className }) => (
  <div className={className}>
    <div className="app__aboutus app__bg flex__center section__padding">
      <div className="app__aboutus-overlay flex__center">
        <img src={images.G} alt="g letter" />
      </div>

      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant">About Us</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <button type="button" className="custom__button">
            Know More
          </button>
        </div>

        <div className="app__aboutus-content_knife flex__center">
          <img src={images.knife} alt="about_knife" />
        </div>

        <div className="app__aboutus-content_history">
          <h1 className="headtext__cormorant">Our History</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <button type="button" className="custom__button">
            Know More
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default styled(AboutUs)`
  .app__aboutus {
    position: relative;
  }

  .app__aboutus-overlay {
    position: absolute;
    inset: 0;
  }

  .app__aboutus-overlay img {
    width: 391px;
    height: 415px;
    z-index: 0;
  }

  .app__aboutus-content {
    width: 100%;
    z-index: 2;
  }

  .app__aboutus-content_about {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: column;

    text-align: right;
  }

  .app__aboutus-content_knife {
    margin: 2rem 4rem;
  }

  .app__aboutus-content_knife img {
    height: 910px;
  }

  .app__aboutus-content_history {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;

    text-align: left;
  }

  .app__aboutus-content_history p,
  .app__aboutus-content_about p {
    margin: 2rem 0;
    color: var(--color-grey);
  }

  @media screen and (max-width: 2000px) {
    .app__aboutus-content_knife img {
      height: 1110px;
    }

    .app__aboutus-content_history p,
    .app__aboutus-content_about p {
      margin: 4rem 0;
      color: var(--color-grey);
    }
  }

  @media screen and (max-width: 900px) {
    .app__aboutus-content {
      flex-direction: column;
    }

    .app__aboutus-content_knife {
      margin: 4rem 0px;
    }
  }

  @media screen and (max-width: 650px) {
    .app__aboutus-overlay img {
      width: 80%;
      height: 320px;
    }
  }
`;
