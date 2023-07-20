import { ImageProps } from "@/types";
import { getAllImages } from "@/utils/cloudinary";
import Gallery from "@/components/Gallery";

export const revalidate = 86400; // 24 hours in seconds.

export default async function Home() {
  const results = await getAllImages();
  const images: ImageProps[] = results.resources.map((resource, index) => ({
    id: index,
    height: resource.height,
    width: resource.width,
    publicId: resource.public_id,
    format: resource.format,
    src: `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${resource.public_id}.${resource.format}`,
    nano: `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/f_jpg,w_5,q_30/${resource.public_id}.${resource.format}`,
  }));

  return (
    <main className="m-2">
      <Gallery images={images} />
    </main>
  );
}
