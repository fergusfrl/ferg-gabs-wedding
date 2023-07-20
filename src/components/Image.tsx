"use client";

import { default as NextImage } from "next/image";

type Props = {
  cloudinaryFileName: string;
  blurPlaceholder: string;
};

const Image = ({ cloudinaryFileName, blurPlaceholder }: Props) => {
  return (
    <NextImage
      src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_6000/${cloudinaryFileName}`}
      width={1000}
      height={1000}
      alt={cloudinaryFileName}
      decoding="async"
      loading="eager"
      className="w-screen h-screen object-contain"
      placeholder="blur"
      blurDataURL={blurPlaceholder}
    />
  );
};

export default Image;
