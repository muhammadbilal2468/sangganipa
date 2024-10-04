import { missions, vision } from "../../data/visionmission.json";

const VissionMissonSection = () => {
  return (
    // <div className="relative xl:px-32 lg:px-24 md:px-10 sm:px-5 bg-secondary w-full lg:py-20 md:py-16 py-10">
    //   <div className="w-full lg:space-y-20 md:space-y-10 space-y-5">
    //     <div className="lg:space-y-10 md:space-y-5 space-y-3">
    //       <h1 className="lg:text-3xl md:text-xl text-base font-bold text-primary text-center">
    //         V I S I
    //       </h1>
    //       <h2 className="text-white font-semibold text-center lg:text-2xl md:text-lg text-[9px] lg:leading-10 md:leading-7 leading-5 tracking-wide">
    //         {vision}
    //       </h2>
    //     </div>
    //     <div className="lg:space-y-10 md:space-y-5 space-y-3">
    //       <h1 className="lg:text-3xl md:text-xl text-base font-bold text-primary text-center">
    //         M I S I
    //       </h1>
    //       <div className="grid md:grid-cols-3 grid-cols-2 lg:gap-10 md:gap-5 gap-3">
    //         {mission.map((item, index) => (
    //           <div
    //             className="relative bg-gray-800 lg:p-4 p-2 rounded-xl"
    //             key={index}
    //           >
    //             <h2 className="lg:text-base md:text-xs text-[8px] text-white font-semibold text-center">
    //               {item.name}
    //             </h2>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="relative xl:px-32 lg:px-24 md:px-10 sm:px-5 bg-secondary w-full lg:py-20 md:py-16 py-5">
      <div className="flex flex-col">
        <img src="./visi.png" alt="" className="absolute left-0 mt-3" />
        <img src="./misi.png" alt="" className="absolute right-0" />
        <div className="max-w-screen-xl mx-auto z-10">
          <div className="relative mt-10">
            <div className="flex flex-col justify-center items-center gap-5 mb-10">
              <h1 className="lg:text-3xl md:text-xl text-md font-bold text-white text-center">
                V I S I
              </h1>
              <div className="xl:p-6 p-3 rounded-md lg::w-1/2 w-full text-center bg-primary text-white shadow-2xl">
                <p className="lg:leading-9 leading-5 lg:text-lg md:text-sm text-[10px] shadow-2xl rounded-lg lg:p-3 p-2">
                  {vision}
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-5 mb-10">
              <h1 className="lg:text-3xl md:text-xl text-md font-bold text-white text-center">
                V I S I
              </h1>
              <div className="grid xl:grid-cols-3 grid-cols-2 lg:gap-10 gap-5">
                {missions.map((misi, index) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-col border-primary rounded-lg shadow-lg shadow-primary bg-gray-800 xl:p-6 p-4 xl:gap-5 gap-1"
                    >
                      <p className="text-primary xl:text-5xl text-lg font-bold xl:text-start text-center">
                        {1 + index}
                      </p>
                      <p className="xl:text-lg text-[10px] text-gray-100 xl:text-justify text-center">
                        {misi}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VissionMissonSection;
