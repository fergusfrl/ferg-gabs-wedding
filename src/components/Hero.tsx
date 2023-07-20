import Image from "next/image";
import HeroImage from "../../public/OhauDrone.jpeg";

const Hero = () => {
  return (
    <div className="relative">
      <Image
        src={HeroImage}
        alt="Drone landscape of Ohau valley"
        className="h-screen overflow-hidden object-cover"
      />
      <div className="text-white absolute top-4 left-4 font-sans font-bold">
        <p>6th May, 2023</p>
        <a
          href="https://www.google.com/maps/@-44.230475,169.8183702,3a,75y,314.07h,98.31t/data=!3m7!1e1!3m5!1sXQKIEID3lCPYlpBSSy_mhA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DXQKIEID3lCPYlpBSSy_mhA%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D22.870071%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656?entry=ttu"
          target="_blank"
          className="text-sm hover:underline transition-all flex justify-between gap-1 items-center"
        >
          Ōhau Lodge, Lake Ōhau
        </a>
      </div>
      <h1 className="text-6xl md:text-8xl text-white absolute bottom-4 left-4 font-sans font-bold">
        Gabby and Fergus
      </h1>
    </div>
  );
};

export default Hero;
