import party from "../../data/party.json";

const BannerSection = () => {
  // const downloadPDF = () => {
  //   const link = document.createElement("a");
  //   link.href = "/document.pdf";
  //   link.download = "Dokumen Pengesahan Calon Perwakilan.pdf";
  //   link.click();
  // };
  return (
    <div className="lg:pt-16 md:pt-10 pt-0 border-b-2">
      <div className="relative xl:px-32 lg:px-24 md:px-10 sm:px-5 grid grid-cols-6 md:pb-0 pb-5">
        <div className="md:col-span-3 col-span-4 flex flex-col justify-center lg:gap-5 md:gap-3 gap-2">
          <div className="flex items-center justify-center gap-2">
            {party.map((item, index) => (
              <img
                src={item.image}
                alt=""
                className="lg:h-12 md:h-8 h-6 rounded-lg"
                key={index}
              />
            ))}
          </div>
          <div className="flex items-center lg:gap-5 md:gap-3 gap-2">
            <img src="/nourut.png" alt="" className="lg:w-32 md:w-24 w-10" />
            <div className="lg:space-y-5 md:space-y-3 space-y-0">
              <h2 className="lg:text-6xl md:text-2xl text-xl font-extrabold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                CUDYAGUSTO
              </h2>
              <p className="lg:text-3xl md:text-xl text-xs text-white font-semibold bg-primary rounded-lg lg:p-2 md:p-1.5 p-1 w-fit">
                # SULTENG EMAS
              </p>
            </div>
          </div>
          {/* <Button
            className="flex items-center gap-2 w-fit"
            onClick={downloadPDF}
          >
            Downlaod Dokumen <IoDocumentText />
          </Button> */}
        </div>
        <div className="md:col-span-3 col-span-2 flex justify-center items-end">
          <img
            src="/paslon2.png"
            alt="Rusti-Mastura-Sulaiman Agusto"
            className="w-full z-20"
          />
        </div>
      </div>
      <div className="w-full flex items-center justify-center flex-col lg:h-1/12 h-fit border-2 bg-secondary md:py-4 py-2 md:-space-y-3 -space-y-5">
        <h1 className="text-white font-semibold lg:text-3xl md:text-xl text-xs">
          H. Rusdy Mastura | Sulaiman Agusto, S.I.P., M.M.
        </h1>
        <br />
        <h1 className="text-gray-300 font-bold lg:text-2xl md:text-lg text-[10px]">
          Calon Gubernur dan Calon Wakil Gubernur 2024 - 2029
        </h1>
      </div>
    </div>
  );
};

export default BannerSection;
