import { FC } from "react";
import styled from "styled-components";

import { SubHeading, MenuItem } from "src/landing_page";
import { images, data } from "src/common";
import LaserTooltip from "src/common/laser_tooltip.component";
import { useTranslation } from "src/common/translation/use_translation_text.hook";

const SpecialMenu: FC<{ className?: string }> = ({ className }) => {
  const t = useTranslation();
  const showButton = false;

  return (
    <div className={className}>
      <div className="app__specialMenu flex__center section__padding" id="menu">
        <div className="app__specialMenu-title">
          <SubHeading title={t.takeAPeek} />
          <h1 className="headtext__cormorant">{t.sourceOfUmami}</h1>
        </div>
        <div className="app__specialMenu-menu">
          <div className="app__specialMenu-menu_img">
            <LaserTooltip
              text={"hello world"}
              position={{ top: "0px", left: "-100px" }}
            />
            <img src={images.menu} alt="menu img" />
          </div>
        </div>

        {showButton && (
          <div style={{ marginTop: "15px" }}>
            <button type="button" className="custom__button">
              View More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default styled(SpecialMenu)`
  .app__specialMenu {
    flex-direction: column;
    background: var(--color-black);
  }

  .app__specialMenu-title {
    margin-bottom: 2rem;
    text-align: center;
  }

  .app__specialMenu-menu {
    width: 100%;
    margin: 2rem 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
  }

  .app__specialMenu-menu_heading {
    font-family: var(--font-base);
    font-weight: 600;
    font-size: 45px;
    line-height: 58.5px;
    letter-spacing: 0.04em;
    color: var(--color-white);
  }

  .app__specialMenu-menu_wine,
  .app__specialMenu-menu_cocktails {
    flex: 1;
    width: 100%;
    flex-direction: column;
  }

  .app__specialMenu-menu_img {
    width: 410px;
    margin: 0 2rem;
    position: relative;
  }

  .app__specialMenu-menu_img img {
    width: 100%;
    height: auto;
  }

  .app__specialMenu_menu_items {
    display: flex;
    flex-direction: column;
    margin: 2rem 0;
    width: 100%;
  }

  @media screen and (max-width: 2000px) {
    .app__specialMenu-menu_img {
      width: 650px;
    }
    .app__specialMenu-menu_img img {
      height: 920px;
    }
  }

  @media screen and (max-width: 1150px) {
    .app__specialMenu-menu {
      flex-direction: column;
      align-items: center;
      width: 100%;
    }

    .app__specialMenu-menu_img {
      margin: 3rem 0;
    }
  }

  @media screen and (max-width: 650px) {
    .app__specialMenu-menu_img {
      width: 100%;
    }

    .app__specialMenu-menu_heading {
      font-size: 35px;
      line-height: 48.5px;
    }
  }
`;
