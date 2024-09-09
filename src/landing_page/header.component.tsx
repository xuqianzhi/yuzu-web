import { FC } from "react";
import styled from "styled-components";
import { SubHeading } from "src/landing_page";

import { images } from "src/common";
import { useTranslation } from "src/common/translation/use_translation_text.hook";
import LaserTooltip from "src/common/laser_tooltip.component";

const Header: FC<{ className?: string }> = ({ className }) => {
  const t = useTranslation();
  const scrollToMenu = () => {
    const menuElement = document.getElementById("menu");
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={className}>
      <div className="app__header app__wrapper section__padding" id="home">
        <div className="app__wrapper_info">
          <SubHeading title={t.enjoyUmami} />
          <h1 className="app__header-h1">{t.heading1}</h1>
          <h1 className="app__header-h1">{t.heading2}</h1>
          <p className="p__opensans" style={{ margin: "2rem 0" }}>
            <p>{t.subheading1}</p>
            <p>{t.subheading2}</p>
          </p>
          <button
            onClick={scrollToMenu}
            type="button"
            className="custom__button"
          >
            {t.exploreMenu}
          </button>
        </div>

        <div className="app__wrapper_img">
          <img src={images.welcome} alt="header img" />
        </div>
      </div>
    </div>
  );
};

export default styled(Header)`
  .app__wrapper_img {
    position: relative;
  }

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
