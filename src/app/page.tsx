import { Suspense } from "react";
import Hero from "@/components/Hero";
import GalleryWrapper from "@/components/GalleryWrapper";
import GalleryLoader from "@/components/GalleryLoader";

export const revalidate = 86400; // 24 hours in seconds.

export default async function Home() {
  return (
    <main>
      <Hero />
      <div className="m-1">
        <Suspense fallback={<GalleryLoader />}>
          <GalleryWrapper />
        </Suspense>
      </div>
    </main>
  );
}
