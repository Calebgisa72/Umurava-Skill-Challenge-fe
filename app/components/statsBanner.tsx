import Image from "next/image";
import Background from "../images/background.png";

const StatsBanner = () => {
  return (
    <div className="relative w-full py-16">
      <Image
        src={Background}
        alt="Background"
        width={1222}
        height={259}
        className="rounded-2xl"
      />
      <div className="absolute inset-0 flex items-center justify-around text-white">
        <div className="text-center">
          <p className="text-3xl font-bold">1</p>
          <p className="text-lg">Year</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold">500+</p>
          <p className="text-lg">Challenges Completed</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold">10K+</p>
          <p className="text-lg">Users</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold">6+</p>
          <p className="text-lg">Countries</p>
        </div>
      </div>
    </div>
  );
};

export default StatsBanner;