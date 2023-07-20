"use client";

import { default as NextImage } from "next/image";

type Props = {
  cloudinaryFileName: string;
  blurPlaceholder: string;
};

const Image = ({ cloudinaryFileName, blurPlaceholder }: Props) => {
  return (
    <NextImage
      src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_4000/${cloudinaryFileName}`}
      width={0}
      height={0}
      alt={cloudinaryFileName}
      decoding="async"
      loading="eager"
      sizes="100vh"
      className="w-full h-full object-contain"
      placeholder="blur"
      blurDataURL={blurPlaceholder}
    />
  );
};

export default Image;
