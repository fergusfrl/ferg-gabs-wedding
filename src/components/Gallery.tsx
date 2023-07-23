"use client";

import { Gallery as GalleryComponent } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import { ImageProps } from "@/types";
import GalleryImage from "./GalleryImage";
import "react-image-lightbox/style.css";
import { useState } from "react";

type Props = {
  images: ImageProps[];
};

const Gallery = ({ images }: Props) => {
  const [index, setIndex] = useState(-1);

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  const handleClick = (index: number, item: ImageProps) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  return (
    <>
      <GalleryComponent
        images={images}
        thumbnailImageComponent={GalleryImage}
        enableImageSelection={false}
        rowHeight={300}
        onClick={handleClick}
        margin={4}
      />
      {currentImage && (
        <Lightbox
          enableZoom={false}
          mainSrc={currentImage.highQualitySrc}
          mainSrcThumbnail={currentImage.src}
          nextSrc={nextImage.highQualitySrc}
          nextSrcThumbnail={nextImage.src}
          prevSrc={prevImage.highQualitySrc}
          prevSrcThumbnail={prevImage.src}
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
        />
      )}
    </>
  );
};

export default Gallery;
