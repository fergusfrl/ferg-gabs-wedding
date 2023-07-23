import { getAllImages } from "@/utils/cloudinary";
import { ImageProps } from "@/types";
import Gallery from "./Gallery";

const GalleryWrapper = async () => {
  const results = await getAllImages();
  const images: ImageProps[] = results.resources.map((resource, index) => ({
    id: index,
    height: resource.height,
    width: resource.width,
    publicId: resource.public_id,
    format: resource.format,
    highQualitySrc: `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_4000/${resource.public_id}.${resource.format}`,
    src: `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${resource.public_id}.${resource.format}`,
    nano: `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/f_jpg,w_5,q_30/${resource.public_id}.${resource.format}`,
  }));

  return <Gallery images={images} />;
};

export default GalleryWrapper;
