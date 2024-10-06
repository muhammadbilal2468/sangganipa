import { FaArrowCircleRight, FaLongArrowAltRight } from "react-icons/fa";
import Button from "../Base/Button";
import { Link } from "react-router-dom";
import gallery from "../../data/gallery.json";

const GallerySection = () => {
  return (
    <div className="relative xl:px-32 lg:px-24 md:px-10 sm:px-5 lg:py-20 md:py-16 py-10 mx-auto">
      <div className="flex items-center justify-between lg:mb-20 mb-10">
        <h1 className="lg:text-3xl md:text-2xl text-xl font-extrabold text-center border-b-4 border-secondary">
          G A L E R I
        </h1>
        <Link
          to={"/gallery"}
          className="flex items-center gap-2 text-tertiary lg:text-xl md:text-md text-xs font-bold text-secondary hover:text-primary"
        >
          Lihat Semua <FaLongArrowAltRight />
        </Link>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 lg:mb-10 md:mb-6 mb-5">
        {gallery.slice(0, 8).map((item, index) => (
          <div
            className="w-full lg:h-72 md:h-64 h-60 rounded-lg lg:p-2 p-1 bg-white"
            key={index}
          >
            <img
              className="w-full h-full rounded-lg"
              src={`/gallery${index + 1}.jpg  `}
              alt=""
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <Link to={"/gallery"}>
          <Button className="flex items-center gap-2">
            Lihat Lainnya <FaArrowCircleRight />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default GallerySection;
