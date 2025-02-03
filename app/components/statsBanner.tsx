import Image from "next/image";
import Background from "../images/background.png";

const StatsBanner = () => {
  return (
    <div className="relative w-full py-16 px-4">
      <Image
        src={Background}
        alt="Background"
        width={1222}
        height={259}
        className="rounded-2xl w-full h-auto"
      />
      <div className="absolute inset-0 flex flex-col sm:flex-row items-center justify-center sm:justify-around text-white px-4">
        <div className="text-center mb-6 sm:mb-0">
          <p className="text-3xl md:text-4xl font-bold">1</p>
          <p className="text-lg md:text-xl">Year</p>
        </div>
        <div className="text-center mb-6 sm:mb-0">
          <p className="text-3xl md:text-4xl font-bold">500+</p>
          <p className="text-lg md:text-xl">Challenges Completed</p>
        </div>
        <div className="text-center mb-6 sm:mb-0">
          <p className="text-3xl md:text-4xl font-bold">10K+</p>
          <p className="text-lg md:text-xl">Users</p>
        </div>
        <div className="text-center">
          <p className="text-3xl md:text-4xl font-bold">6+</p>
          <p className="text-lg md:text-xl">Countries</p>
        </div>
      </div>
    </div>
  );
};

export default StatsBanner;