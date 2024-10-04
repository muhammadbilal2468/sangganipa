import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import workprogram from "../../data/workprogram.json";
import CardWorkProgram from "../Fragment/CardWorkProgram";

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
        <div className="grid grid-cols-1 lg:gap-32 md:gap-20 gap-10 mt-10">
          {workprogram.slice(2, 4).map((program, index) => (
            <CardWorkProgram
              key={program.id}
              id={program.id}
              image={program.image}
              title={program.title}
              desc={program.desc}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkProgramSection;
