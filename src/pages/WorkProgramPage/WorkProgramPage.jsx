import Layout from "../../layouts/Layout";
import workprogram from "../../data/workprogram.json";
import CardWorkProgram from "../../components/Fragment/CardWorkProgram";

const WorkProgramPage = () => {
  return (
    <Layout>
      <div className="relative xl:px-32 lg:px-24 md:px-10 sm:px-5 w-full">
        <div className="relative">
          <img
            src="/headers.jpg"
            alt=""
            className="w-full lg:h-64 md:h-52 h-24 object-cover opacity-60"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="lg:text-4xl md:text-xl text-sm font-bold text-primary text-center bg-black bg-opacity-30 backdrop-blur-md px-8 lg:py-4 md:py-2 py-1 rounded-lg shadow-lg">
              P R O G R A M - K E R J A
            </h1>
          </div>
        </div>

        {/* Map data program kerja */}
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
