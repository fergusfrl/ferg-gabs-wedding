import Image from "next/image";
import HeroImage from "../../public/OhauDrone.jpeg";
import AnimateIn from "./AnimateIn";

const Hero = () => {
  return (
    <div className="relative">
      <Image
        src={HeroImage}
        alt="Drone landscape of Ohau valley"
        className="h-screen overflow-hidden object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
      <div className="text-white absolute top-6 left-6">
        <p>6th May, 2023</p>
        <a
          href="https://www.google.com/maps/@-44.230475,169.8183702,3a,75y,314.07h,98.31t/data=!3m7!1e1!3m5!1sXQKIEID3lCPYlpBSSy_mhA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DXQKIEID3lCPYlpBSSy_mhA%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D22.870071%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656?entry=ttu"
          target="_blank"
          className="text-sm hover:underline transition-all flex justify-between gap-1 items-center"
        >
          Ōhau Lodge, Lake Ōhau
        </a>
      </div>
      <AnimateIn>
        <h1 className="text-6xl md:text-8xl text-white absolute bottom-6 left-6 font-bold">
          Gabrielle and Fergus
        </h1>
      </AnimateIn>
    </div>
  );
};

export default Hero;
