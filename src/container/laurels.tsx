import React, { FC } from "react";
import styled from "styled-components";

import { SubHeading } from "src/components";
import { images, data } from "src/constants";

interface AwardCardProps {
  className?: string;
  award: { imgUrl: string; title: string; subtitle: string };
}

const AwardCard: FC<AwardCardProps> = ({
  className,
  award: { imgUrl, title, subtitle },
}) => (
  <div className={className}>
    <div className="app__laurels_awards-card">
      <img src={imgUrl} alt="award" />
      <div className="app__laurels_awards-cards_content">
        <p className="p__cormorant" style={{ color: "#DCCA87" }}>
          {title}
        </p>
        <p className="p__opensans">{subtitle}</p>
      </div>
    </div>
  </div>
);

const Laurels: FC<{ className?: string }> = ({ className }) => (
  <div className={className}>
    <div className="app__bg app__wrapper section__padding" id="award">
      <div className="app__wrapper_info">
        <SubHeading title="Awards & Recognition" />
        <h1 className="headtext__cormorant">Our Laurels</h1>

        <div className="app__laurels_awards">
          {data.awards.map((award) => (
            <AwardCard award={award} key={award.title} />
          ))}
        </div>
      </div>
      <div className="app__wrapper_img">
        <img src={images.laurels} alt="laurals_img" />
      </div>
    </div>
  </div>
);

export default styled(Laurels)`
  .app__laurels_awards {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 3rem;
  }

  .app__laurels_awards-card {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    min-width: 230px;

    margin: 1rem;
  }

  .app__laurels_awards-card img {
    width: 50px;
    height: 50px;
    margin: 1rem;
  }

  .app__laurels_awards-card_content {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
  }

  @media screen and (min-width: 1900px) {
    .app__laurels_awards-card {
      min-width: 390px;
    }
  }

  @media screen and (max-width: 450px) {
    .app__laurels_awards-card {
      min-width: 100%;
      margin: 1rem 0;
    }
  }
`;
