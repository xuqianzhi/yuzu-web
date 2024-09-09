import { FC, ReactNode } from "react";
import styled from "styled-components";

interface LaserTooltipProps {
  className?: string;
  text: string | ReactNode;
  position: { top: string; left: string };
}

const LaserTooltip: FC<LaserTooltipProps> = ({ className, text }) => (
  <div className={className}>
    <div className="item-hints">
      <div className="hint" data-position="4">
        <span className="hint-radius"></span>
        <span className="hint-dot"></span>
        <div className="hint-content do--split-children p__opensans">
          <p>{text}</p>
        </div>
      </div>
    </div>
  </div>
);

export default styled(LaserTooltip)`
  position: absolute;
  top: ${({ position }) => position.top};
  left: ${({ position }) => position.left};
  z-index: 5;

  .item-hints {
    height: 500px;
    width: 500px;
    margin: 250px auto;
  }
  .item-hints .hint {
    width: 60px;
    height: 60px;
    margin: 150px auto;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .item-hints .hint::before {
    /* //rotated squre */
    background-color: #fff;
    width: 8px;
    height: 8px;
    z-index: 2;
    -webkit-clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
    clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  .item-hints .hint::after {
    /* //green glow */
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    border-radius: 50%;
    width: 2px;
    height: 2px;
    z-index: 1;
    -webkit-box-shadow: 0 0 50px 30px rgba(72, 170, 72, 0.3);
    box-shadow: 0 0 50px 30px rgba(72, 170, 72, 0.3);
    -webkit-animation: home_hero_item_hints_glow 2s
      cubic-bezier(0.25, 0.1, 0.2, 1) infinite;
    animation: home_hero_item_hints_glow 2s cubic-bezier(0.25, 0.1, 0.2, 1)
      infinite;
    -webkit-transition: opacity 0.5s ease;
    transition: opacity 0.5s ease;
  }
  @-webkit-keyframes home_hero_item_hints_glow {
    0% {
      -webkit-box-shadow: 0 0 30px 5px #48aa48;
      box-shadow: 0 0 30px 5px #48aa48;
    }
    70% {
      -webkit-box-shadow: 0 0 70px 50px rgba(72, 170, 72, 0);
      box-shadow: 0 0 70px 50px rgba(72, 170, 72, 0);
    }
    100% {
      -webkit-box-shadow: 0 0 0 50px rgba(72, 170, 72, 0);
      box-shadow: 0 0 0 50px rgba(72, 170, 72, 0);
    }
  }
  @keyframes home_hero_item_hints_glow {
    0% {
      -webkit-box-shadow: 0 0 30px 5px #48aa48;
      box-shadow: 0 0 30px 5px #48aa48;
    }
    70% {
      -webkit-box-shadow: 0 0 70px 50px rgba(72, 170, 72, 0);
      box-shadow: 0 0 70px 50px rgba(72, 170, 72, 0);
    }
    100% {
      -webkit-box-shadow: 0 0 0 50px rgba(72, 170, 72, 0);
      box-shadow: 0 0 0 50px rgba(72, 170, 72, 0);
    }
  }
  .item-hints .hint-dot {
    z-index: 3;
    border: 1px solid #fff;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: block;
    -webkit-transform: translate(-0%, -0%) scale(0.95);
    transform: translate(-0%, -0%) scale(0.95);
    -webkit-animation: home_hero_item_hints_border 1.5s linear infinite;
    animation: home_hero_item_hints_border 1.5s linear infinite;
    margin: auto;
  }
  @-webkit-keyframes home_hero_item_hints_border {
    0%,
    100% {
      border-color: rgba(255, 255, 255, 0.6);
      -webkit-transform: translate(-50%, -50%) scale(0.95);
      transform: translate(-0%, -0%) scale(0.95);
    }
    50% {
      border-color: rgba(255, 255, 255, 0.3);
      -webkit-transform: translate(-50%, -50%) scale(1);
      transform: translate(-0%, -0%) scale(1);
    }
  }
  @keyframes home_hero_item_hints_border {
    0%,
    100% {
      border-color: rgba(255, 255, 255, 0.6);
      -webkit-transform: translate(-50%, -50%) scale(0.95);
      transform: translate(-0%, -0%) scale(0.95);
    }
    50% {
      border-color: rgba(255, 255, 255, 0.3);
      -webkit-transform: translate(-50%, -50%) scale(1);
      transform: translate(-0%, -0%) scale(1);
    }
  }
  .item-hints .hint-radius {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    width: 250px;
    height: 250px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -125px 0 0 -125px;
    opacity: 0;
    visibility: hidden;
    -webkit-transform: scale(0);
    transform: scale(0);
    -webkit-transition-property:
      background-color,
      opacity,
      visibility,
      -webkit-transform;
    transition-property:
      background-color,
      opacity,
      visibility,
      -webkit-transform;
    transition-property: background-color, opacity, visibility, transform;
    transition-property:
      background-color,
      opacity,
      visibility,
      transform,
      -webkit-transform;
    -webkit-transition-duration: 0.5s;
    transition-duration: 0.5s;
    -webkit-transition-timing-function: ease, ease, ease,
      cubic-bezier(0.5, 0, 0, 1);
    transition-timing-function: ease, ease, ease, cubic-bezier(0.5, 0, 0, 1);
  }
  .item-hints .hint:hover .hint-radius {
    opacity: 1;
    visibility: visible;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  .item-hints .hint[data-position="1"] .hint-content {
    top: 85px;
    left: 50%;
    margin-left: 56px;
  }
  .item-hints .hint-content {
    color: #fff;
    width: 300px;
    position: absolute;
    z-index: 5;
    padding: 12px 0;
    opacity: 0;
    visibility: hidden;
    -webkit-transition:
      opacity 0.7s ease,
      visibility 0.7s ease;
    transition:
      opacity 0.7s ease,
      visibility 0.7s ease;
    pointer-events: none;
    color: #fff;
    visibility: hidden;
    pointer-events: none;
  }
  .item-hints .hint:hover .hint-content {
    color: #fff;
    width: 300px;
    position: absolute;
    z-index: 5;
    padding: 0px 20px 0px 20px;
    opacity: 1;
    visibility: visible !important;
    -webkit-transition:
      opacity 0.7s ease,
      visibility 0.7s ease;
    transition:
      opacity 0.7s ease,
      visibility 0.7s ease;
    pointer-events: none;
    color: #fff;
    visibility: hidden;
    pointer-events: none;
    background-color: rgba(0, 0, 0, 0.7); /* transparent background shadow */
    font-size: 14px;
  }
  .item-hints .hint-content::before {
    width: 0px;
    bottom: 0;
    left: 0;
    content: "";
    background-color: #fff;
    height: 1px;
    position: absolute;
    transition: width 0.4s;
  }
  .item-hints .hint:hover .hint-content::before {
    width: 180px;
    transition: width 0.4s;
  }
  .item-hints .hint-content::after {
    -webkit-transform-origin: 0 50%;
    transform-origin: 0 50%;
    -webkit-transform: rotate(-225deg);
    transform: rotate(-225deg);
    bottom: 0;
    left: 0;
    width: 80px; /* laser length */
    content: "";
    background-color: #fff;
    height: 1px;
    position: absolute;
    opacity: 1;
    -webkit-transition: opacity 0.5s ease;
    transition: opacity 0.5s ease;
    transition-delay: 0s;
    -webkit-transition-delay: 0s;
    transition-delay: 0s;
  }
  .item-hints .hint:hover .hint-content::after {
    opacity: 1;
    visibility: visible;
  }
  .item-hints .hint[data-position="4"] .hint-content {
    bottom: 85px;
    left: 50%;
    margin-left: 56px;
  }
`;
