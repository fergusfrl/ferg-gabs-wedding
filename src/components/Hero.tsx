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
      <p className=" text-white absolute top-4 left-4 font-sans font-bold">
        Lake Ohau, 6th May, 2023
      </p>
      <h1 className="text-6xl md:text-8xl text-white absolute bottom-4 left-4 font-sans font-bold">
        Gabby and Fergus
      </h1>
    </div>
  );
};

export default Hero;
