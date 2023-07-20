"use client";

import { Gallery as GalleryComponent } from "react-grid-gallery";
import { ImageProps } from "@/types";
import GalleryImage from "./GalleryImage";

type Props = {
  images: ImageProps[];
};

const Gallery = ({ images }: Props) => {
  return (
    <GalleryComponent
      images={images}
      thumbnailImageComponent={GalleryImage}
      enableImageSelection={false}
      rowHeight={300}
    />
  );
};

export default Gallery;
