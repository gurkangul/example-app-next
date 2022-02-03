import React, { FC } from "react";

type ImageProps = {
  image: {
    large?: string;
    medium?: string;
    small?: string;
  };
};

const Image: FC<ImageProps> = ({ image }) => {
  return (
    <picture>
      <source srcSet={image.large} media="(min-width: 991px)" />
      <source srcSet={image.medium} media="(min-width: 479px)" />
      <img
        src={image.small}
        alt=""
        style={{ width: "auto", maxWidth: 400, maxHeight: 190 }}
      />
    </picture>
  );
};

export default Image;
