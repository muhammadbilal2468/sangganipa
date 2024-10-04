import { PiNotepadFill } from "react-icons/pi";
import CardWorkProgram from "../../components/Fragment/CardWorkProgram";
import workprogram from "../../data/workprogram.json";
import Layout from "../../layouts/Layout";

const WorkProgramPage = () => {
  return (
    <Layout>
      <div className="relative xl:px-32 lg:px-24 md:px-10 sm:px-5 w-full">
        <h1 className="flex items-center justify-center gap-2 lg:text-3xl md:text-xl text-md font-bold lg:py-10 md:py-5 py-3 relative text-secondary bg-white p-4 rounded-md mb-10">
          <PiNotepadFill /> P R O G R A M - K E R J A
        </h1>
        <div className="grid grid-cols-1 lg:gap-32 md:gap-20 gap-10 mt-10">
          {workprogram.map((program, index) => (
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
    </Layout>
  );
};

export default WorkProgramPage;
