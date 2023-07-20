import Image from "@/components/Image";
import { getAllImages } from "@/utils/cloudinary";

import Link from "next/link";

type Props = {
  params: { fileName: string };
};

async function getBase64ImageUrl(imageId: string): Promise<string> {
  const response = await fetch(
    `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/f_jpg,w_5,q_30/${imageId}`
  );
  const buffer = await response.arrayBuffer();
  const data = Buffer.from(buffer).toString("base64");
  return `data:image/webp;base64,${data}`;
}

export async function generateStaticParams() {
  const images = await getAllImages();
  return images.resources.map((image) => ({
    fileName: `${image.public_id}.${image.format}`,
  }));
}

export default async function ImagePage({ params }: Props) {
  // TODO: dynamic background color
  const blurPlaceholder = await getBase64ImageUrl(params.fileName);
  return (
    <div className="bg-slate-400 relative w-screen h-screen">
      <Link
        href="/"
        className="absolute top-4 right-4 underline hover:no-underline transition-all"
      >
        Close
      </Link>
      <Image
        cloudinaryFileName={params.fileName}
        blurPlaceholder={blurPlaceholder}
      />
    </div>
  );
}
