import { FC } from "react";
import styled from "styled-components";
import { FiInstagram } from "react-icons/fi";
import { SiXiaohongshu } from "react-icons/si";
import { FaTiktok, FaYoutube } from "react-icons/fa";
import { Tooltip } from "react-tooltip";

import SubHeading from "src/landing_page/sub_heading.component";
import { useTranslation } from "src/common/translation/use_translation_text.hook";

const SocialMedia: FC<{ className?: string }> = ({ className }) => {
  const t = useTranslation();

  return (
    <div className={className}>
      <div className="app__newsletter">
        <div className="app__newsletter-heading">
          <SubHeading title={t.follow} />
          <h1 className="headtext__cormorant">{t.yuzuxuSocialMedia}</h1>
        </div>
        <div className="app__newsletter-input flex__center app__footer-links_icons">
          <SiXiaohongshu size={60} id="xiaohongshu-icon" />
          <Tooltip anchorSelect="#xiaohongshu-icon" place="bottom">
            <div>qr code here</div>
          </Tooltip>
          <FaTiktok id="tiktok-icon" />
          <Tooltip anchorSelect="#tiktok-icon" place="bottom">
            <div>qr code here</div>
          </Tooltip>
          <FiInstagram id="instagram-icon" />
          <Tooltip anchorSelect="#instagram-icon" place="bottom">
            <div>qr code here</div>
          </Tooltip>
          <FaYoutube id="youtube-icon" />
          <Tooltip anchorSelect="#youtube-icon" place="bottom">
            <div>qr code here</div>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default styled(SocialMedia)`
  .app__footer-links_icons {
    .app__footer-links_icons svg {
      color: var(--color-white);
      font-size: 24px;
      cursor: pointer;
    }

    .app__footer-links_icons svg:hover {
      color: var(--color-golden);
    }
  }

  .app__newsletter {
    padding: 2rem 4rem;
    border: 1px solid var(--color-golden);
    background: var(--color-black);
  }

  .app__newsletter-heading {
    text-align: center;
  }

  .app__newsletter-input {
    flex-direction: row;
    gap: 20px;
  }

  .app__newsletter-input input {
    width: 620px;
    border: 1px solid var(--color-golden);
    border-radius: 5px;
    font-size: 1rem;
    font-family: var(--font-base);
    color: var(--color-white);

    margin-right: 2rem;
    padding: 0.75rem 1rem;
    background: var(--color-black);
  }

  .app__newsletter-input button {
    width: max-content;
  }

  @media screen and (min-width: 2000px) {
    .app__newsletter-input input {
      font-size: 2rem;
    }
  }

  @media screen and (max-width: 990px) {
    .app__newsletter-input {
      flex-direction: column;
      width: 100%;
    }

    .app__newsletter-input input {
      margin: 0 0 2rem 0;
      width: 100%;
    }
  }

  @media screen and (max-width: 650px) {
    .app__newsletter {
      padding: 2rem 0;
      border: none;
    }
  }

  @media screen and (max-width: 300px) {
    .app__newsletter-heading h1 {
      font-size: 32px;
      line-height: 50px;
    }
  }
`;
