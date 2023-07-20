import Image from "next/image";
import Link from "next/link";
import { ThumbnailImageProps } from "react-grid-gallery";

const GalleryImage = ({ imageProps, item }: ThumbnailImageProps) => {
  const fileName = item.src.split("/").at(-1);
  return (
    <Link href={`/${fileName}`}>
      <Image
        src={imageProps.src}
        alt={imageProps.alt}
        style={imageProps.style}
        width={200}
        height={200}
        loading="lazy"
        decoding="async"
        className="hover:opacity-80 transition-opacity cursor-zoom-in"
        sizes="(max-width: 640px) 100vw,
        (max-width: 1280px) 50vw,
        (max-width: 1536px) 33vw,
        25vw"
      />
    </Link>
  );
};

export default GalleryImage;
