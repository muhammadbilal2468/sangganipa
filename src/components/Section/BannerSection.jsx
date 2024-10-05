import { IoDocumentText } from "react-icons/io5";
import Button from "../Base/Button";
import party from "../../data/party.json";

const BannerSection = () => {
  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/document.pdf";
    link.download = "Dokumen Pengesahan Calon Perwakilan.pdf";
    link.click();
  };
  return (
    <div className="relative xl:px-32 lg:px-24 md:px-10 sm:px-5 grid grid-cols-2 lg:h-screen h-fit -mt-20 pt-20 border-b-2">
      <div className="cols-span-1 flex flex-col justify-center lg:gap-5 md:gap-3 gap-2 lg:pb-0 md:pb-20 pb-10">
        <h2 className="lg:text-4xl md:text-lg text-xs font-semibold">
          Menyerukan Kerjasama Untuk <br />{" "}
          <span className="text-primary">Wujudkan Pembangunan</span>
          <br /> Sulawesi Tengah.
        </h2>
        <p className="lg:text-lg md:text-sm text-[8px]">
          mengajak setiap elemen masyarakat untuk bahu-membahu berkontribusi
          dalam memajukan Sulawesi Tengah, dengan saling mendukung dalam
          pembangunan infrastruktur, ekonomi, pendidikan, dan sosial.
        </p>
        <Button className="flex items-center gap-2 w-fit" onClick={downloadPDF}>
          Downlaod Dokumen <IoDocumentText />
        </Button>
      </div>
      <div className="relative cols-span-1 flex justify-center items-end">
        <div className="absolute lg:top-5 md:top-3 top-0 flex items-center gap-2 z-30">
          <img
            src={"/logocudysah.png"}
            alt="cudysah"
            className="lg:w-40 md:w-32 w-20"
          />
        </div>
        <div className="absolute lg:bottom-10 md:bottom-10 bottom-5 flex items-center gap-2 z-30">
          {party.map((item, index) => (
            <img
              src={item.image}
              alt=""
              className="lg:h-12 md:h-8 h-6 rounded-lg p-0.5 bg-white"
              key={index}
            />
          ))}
        </div>
        <img
          src="/paslon2.png"
          alt="Rusti-Mastura-Sulaiman Agusto"
          className="w-[960px] z-20"
        />
      </div>
    </div>
  );
};

export default BannerSection;
