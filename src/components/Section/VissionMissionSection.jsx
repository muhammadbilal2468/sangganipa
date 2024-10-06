import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { IoIosCheckbox } from "react-icons/io";
import { missions, vision } from "../../data/visionmission.json";

const VissionMissonSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="relative xl:px-32 lg:px-24 md:px-10 sm:px-5 w-full lg:py-20 md:py-16 py-10">
      <div className="w-full lg:space-y-20 md:space-y-10 space-y-5">
        <div className="">
          <h1
            className="lg:text-3xl md:text-2xl text-xl font-extrabold text-center border-b-4 border-secondary w-fit px-10 pb-5"
            data-aos="fade-left"
            data-aos-duration="700"
          >
            V I S I
          </h1>
          <h2
            className="font-semibold text-center lg:text-lg md:text-base text-sm lg:leading-10 md:leading-7 leading-5 tracking-wide bg-white rounded-lg p-5"
            data-aos="fade-down"
            data-aos-duration="700"
          >
            {vision}
          </h2>
        </div>
        <div className="">
          <h1
            className="lg:text-3xl md:text-2xl text-xl font-extrabold text-center border-b-4 border-secondary w-fit px-10 pb-5"
            data-aos="fade-left"
            data-aos-duration="700"
          >
            M I S I
          </h1>
          <div className="bg-white rounded-lg p-5">
            {missions.map((item, index) => (
              <div
                className="relative flex items-center md:justify-center justify-start gap-2 lg:p-4 p-0 rounded-xl"
                key={index}
                data-aos="fade-down"
                data-aos-duration={index * 200}
              >
                <div className="flex items-center justify-center w-10 h-10">
                  {" "}
                  <IoIosCheckbox className="text-6xl text-primary" />
                </div>
                <h2 className="flex items-center lg:text-lg md:text-base text-sm text-black font-semibold">
                  {item}
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
