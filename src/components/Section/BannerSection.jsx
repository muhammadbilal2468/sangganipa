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
    <div className="relative xl:px-32 lg:px-24 md:px-10 sm:px-5 grid grid-cols-2 h-full">
      <div className="cols-span-1 flex flex-col justify-center lg:gap-5 md:gap-3 gap-2 lg:pb-0 md:pb-20 pb-10">
        <h2 className="lg:text-4xl md:text-lg text-[10px] font-semibold">
          menyerukan kerjasama untuk <br />{" "}
          <span className="text-primary">wujudkan pembangunan</span>
          <br /> Sulawesi Tengah.
        </h2>
        <h3 className="lg:text-md md:text-[10px] text-[7px]">
          mengajak setiap elemen masyarakat untuk bahu-membahu berkontribusi
          dalam memajukan Sulawesi Tengah, dengan saling mendukung dalam
          pembangunan infrastruktur, ekonomi, pendidikan, dan sosial.
        </h3>
        <Button className="flex items-center gap-2 w-fit" onClick={downloadPDF}>
          Downlaod Dokumen <IoDocumentText />
        </Button>
      </div>
      <div className="relative cols-span-1 flex justify-center items-end">
        <div className="absolute lg:bottom-20 md:bottom-16 bottom-10 flex items-center gap-2 z-30">
          {party.map((item, index) => (
            <img
              src={item.image}
              alt=""
              className="lg:h-12 md:h-8 h-6 rounded-full"
              key={index}
            />
          ))}
        </div>
        <img
          src="/paslon.png"
          alt="Rusti-Mastura-Sulaiman Agusto"
          className="w-[600px] z-20"
        />
      </div>
    </div>
  );
};

export default BannerSection;
