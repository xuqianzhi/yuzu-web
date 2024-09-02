import React, { FC } from "react";

import { images } from "src/constants";

const SubHeading: FC<{ title: string }> = ({ title }) => (
  <div style={{ marginBottom: "1rem" }}>
    <p className="p__cormorant">{title}</p>
    <img src={images.spoon} alt="spoon" className="spoon__img" />
  </div>
);

export default SubHeading;
