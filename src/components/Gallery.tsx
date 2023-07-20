"use client";

import { Gallery as GalleryComponent } from "react-grid-gallery";
import { ImageProps } from "@/types";
import ImageComponent from "./ImageComponent";

type Props = {
  images: ImageProps[];
};

const Gallery = ({ images }: Props) => {
  return (
    <GalleryComponent
      images={images}
      thumbnailImageComponent={ImageComponent}
      enableImageSelection={false}
      rowHeight={300}
    />
  );
};

export default Gallery;
