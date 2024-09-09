import { FC } from "react";
import styled from "styled-components";

import { SubHeading } from "src/landing_page";
import { images } from "src/common";
import { useTranslation } from "src/common/translation/use_translation_text.hook";

const Chef: FC<{ className?: string }> = ({ className }) => {
  const t = useTranslation();
  return (
    <div className={className}>
      <div id="about" className="app__bg app__wrapper section__padding">
        <div className="app__wrapper_img app__wrapper_img-reverse">
          <img src={images.profilePic} alt="chef" />
        </div>

        <div className="app__wrapper_info">
          <SubHeading title={t.yuzuStory} />
          <h1 className="headtext__cormorant">{t.chefsDream}</h1>

          <div className="app__chef-content">
            <div className="app__chef-content_quote">
              <img src={images.quote} alt="quote" />
            </div>
            <p className="p__opensans">{t.chefsDreamDetail}</p>
          </div>

          <div className="app__chef-sign">
            <p>{t.name}</p>
            <p className="p__opensans">{t.chefAndFounder}</p>
            <img src={images.sign} alt="sign" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default styled(Chef)`
  .app__chef-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 5rem;
  }

  .app__chef-content_quote {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
  }

  .app__chef-content_quote img {
    width: 47px;
    height: 40px;
    margin: 0 1rem 1rem 0;
  }

  .app__chef-sign {
    width: 100%;
    margin-top: 3rem;
  }

  .app__chef-sign p:first-child {
    font-family: var(--font-base);
    font-weight: 400;
    font-size: 30px;
    line-height: 41px;
    letter-spacing: 0.04em;
    color: var(--color-golden);
  }

  .app__chef-sign img {
    width: 250px;
    margin-top: 3rem;
  }

  @media screen and (max-width: 2000px) {
    .app__chef-sign img {
      width: 370px;
    }
  }

  @media screen and (max-width: 450px) {
    .app__chef-sign img {
      width: 80%;
    }
  }
`;
