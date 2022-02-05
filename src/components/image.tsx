import React, { useState } from "react";
import { ImageType } from "../interfaces";

export default function Image({ image = {} }: { image?: ImageType }) {
  const [img, setImg] = useState<ImageType>(image);

  return (
    <picture>
      <source srcSet={img.large} media="(min-width: 992px)" />
      <source srcSet={img.medium} media="(min-width: 768px)" />
      <img
        src={img.small}
        alt=""
        style={{ width: "auto", maxWidth: 400, maxHeight: 190 }}
      />
    </picture>
  );
}
