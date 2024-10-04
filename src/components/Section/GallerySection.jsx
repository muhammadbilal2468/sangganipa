import { FaArrowCircleRight } from "react-icons/fa";
import Button from "../Base/Button";
import { Link } from "react-router-dom";
import gallery from "../../data/gallery.json";

const GallerySection = () => {
  return (
    <div className="relative xl:px-32 lg:px-24 md:px-10 sm:px-5 lg:py-20 md:py-16 py-5 mx-auto">
      <h1 className="lg:text-3xl md:text-2xl text-lg font-bold text-primary text-center lg:mb-20 md:mb-10 mb-6">
        G A L E R I
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 lg:mb-10 md:mb-6 mb-5">
        {gallery.slice(0, 12).map((item, index) => (
          <div className="w-full lg:h-60 md:h-40 h-36 rounded-lg" key={index}>
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
