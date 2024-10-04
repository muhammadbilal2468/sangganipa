import { FaPlusMinus } from "react-icons/fa6";
import vissonmission from "../../data/visionmission.json";
import { useEffect, useState } from "react";

const VissionMissonSection = () => {
  const [vision, setVision] = useState("");
  const [mission, setMission] = useState([]);

  useEffect(() => {
    setVision(vissonmission.vision.name);
    setMission(vissonmission.missions);
  }, []);

  return (
    <div className="relative xl:px-32 lg:px-24 md:px-10 sm:px-5 bg-secondary w-full h-fit lg:pb-20 md:pb-16 pb-10">
      <div className="absolute lg:-top-16 md:-top-10 -top-5 xl:px-32 lg:px-24 md:px-10 sm:px-5 left-1/2 transform -translate-x-1/2 w-full grid grid-cols-3 lg:gap-10 md:gap-5 gap-3 z-20">
        <div className="flex items-center justify-center gap-2 text-gray-800 w-full lg:py-12 md:py-6 py-2 bg-primary rounded-lg md:border-4 border-2 border-t-tertiary">
          <FaPlusMinus className="lg:text-3xl md:text-lg text-xs" />
          <p className="lg:text-5xl md:text-xl text-xs font-bold">13</p>
          <p className="lg:text-2xl md:text-sm text-[8px] font-bold">
            Kab/Kota
          </p>
        </div>
        <div className="flex items-center justify-center gap-2 text-gray-800 w-full lg:py-12 md:py-6 py-2 bg-primary rounded-lg md:border-4 border-2 border-t-tertiary">
          <FaPlusMinus className="lg:text-3xl md:text-lg text-xs" />
          <p className="lg:text-5xl md:text-xl text-xs font-bold">164</p>
          <p className="lg:text-2xl md:text-sm text-[8px] font-bold">
            Kecamatan
          </p>
        </div>
        <div className="flex items-center justify-center gap-2 text-gray-800 w-full lg:py-12 md:py-6 py-2 bg-primary rounded-lg md:border-4 border-2 border-t-tertiary">
          <FaPlusMinus className="lg:text-3xl md:text-lg text-xs" />
          <p className="lg:text-5xl md:text-xl text-xs font-bold">1.200</p>
          <p className="lg:text-2xl md:text-sm text-[8px] font-bold">Desa</p>
        </div>
      </div>
      <div className="lg:pt-40 md:pt-28 pt-16 w-full lg:space-y-20 md:space-y-10 space-y-5">
        <div className="lg:space-y-10 md:space-y-5 space-y-3">
          <h1 className="lg:text-3xl md:text-xl text-base font-bold text-primary text-center">
            V I S I
          </h1>
          <h2 className="text-white font-semibold text-center lg:text-2xl md:text-lg text-[9px] lg:leading-10 md:leading-7 leading-5 tracking-wide">
            {vision}
          </h2>
        </div>
        <div className="lg:space-y-10 md:space-y-5 space-y-3">
          <h1 className="lg:text-3xl md:text-xl text-base font-bold text-primary text-center">
            M I S I
          </h1>
          <div className="grid md:grid-cols-3 grid-cols-2 lg:gap-10 md:gap-5 gap-3">
            {mission.map((item, index) => (
              <div
                className="relative bg-gray-800 lg:p-4 p-2 rounded-xl"
                key={index}
              >
                <p className="absolute lg:-top-3 -top-2 lg:-left-3 -left-2 text-white font-extrabold text-center bg-primary rounded-full lg:w-8 md:w-6 w-5 lg:h-8 md:h-6 h-5 flex items-center justify-center">
                  {index + 1}
                </p>
                <h2 className="lg:text-base md:text-xs text-[8px] text-white font-semibold text-center">
                  {item.name}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VissionMissonSection;
