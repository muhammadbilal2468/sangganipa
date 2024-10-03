import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import workprogram from "../../data/workprogram.json";

const WorkProgramSection = () => {
  return (
    <div className="relative xl:px-32 lg:px-24 md:px-10 sm:px-5 w-full lg:py-20 md:py-16 py-10">
      <div className="flex items-center justify-between lg:mb-20 mb-10">
        <h1 className="lg:text-3xl md:text-xl text-sm font-bold text-primary text-center">
          P R O G R A M - K E R J A
        </h1>
        <Link
          to={"/work-program"}
          className="flex items-center gap-2 text-tertiary lg:text-xl md:text-md text-sm font-bold"
        >
          Lihat Semua <FaLongArrowAltRight />
        </Link>
      </div>
      <div className="lg:space-y-32 md:space-y-10 space-y-10">
        <div className="grid grid-cols-2 items-start lg:gap-32 md:gap-16 gap-10">
          <div className="relative w-full lg:h-full md:h-56 h-40">
            <img
              src="/workprogram1.jpg"
              alt=""
              className="absolute top-0 left-0 right-0 bottom-0 w-full h-full z-20"
            />
            <img
              src="/vector1.png"
              alt=""
              className="absolute -top-1 -left-5 z-10 lg:w-32 nd:w-20 w-16 -rotate-45"
            />
            <img
              src="/vector1.png"
              alt=""
              className="absolute -top-1 -right-5 z-10 lg:w-32 nd:w-20 w-16 rotate-45"
            />
          </div>
          <div className="lg:space-y-10 md:space-y-4 space-y-2">
            <h2 className="lg:text-3xl md:text-base text-xs font-semibold text-tertiary">
              {workprogram[2].title}
            </h2>
            <p className="lg:text-base md:text-xs text-[8px] text-justify">
              {workprogram[2].desc}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 items-start lg:gap-32 md:gap-20 gap-10">
          <div className="lg:space-y-10 md:space-y-4 space-y-2">
            <h2 className="lg:text-3xl md:text-base text-xs font-semibold text-tertiary text-right">
              {workprogram[3].title}
            </h2>
            <p className="lg:text-base md:text-xs text-[8px] text-justify">
              {workprogram[3].desc}
            </p>
          </div>
          <div className="relative w-full lg:h-full md:h-56 h-40">
            <img
              src="/workprogram1.jpg"
              alt=""
              className="absolute top-0 left-0 right-0 bottom-0 w-full h-full z-20"
            />
            <img
              src="/vector1.png"
              alt=""
              className="absolute -top-1 -left-5 z-10 lg:w-32 nd:w-20 w-16 -rotate-45"
            />
            <img
              src="/vector1.png"
              alt=""
              className="absolute -top-1 -right-5 z-10 lg:w-32 nd:w-20 w-16 rotate-45"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkProgramSection;
