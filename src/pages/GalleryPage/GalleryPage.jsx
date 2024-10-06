import { useState } from "react";
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";
import { RiGalleryFill } from "react-icons/ri";
import Button from "../../components/Base/Button";
import gallery from "../../data/gallery.json";
import Layout from "../../layouts/Layout";

const GalleryPage = () => {
  const [visibleImages, setVisibleImages] = useState(8);

  const loadMore = () => {
    if (visibleImages < gallery.length) {
      setVisibleImages((prev) => prev + 4);
    }
  };

  const showLess = () => {
    if (visibleImages > 8) {
      setVisibleImages((prev) => prev - 4);
    }
  };

  return (
    <Layout>
      <div className="relative xl:px-32 lg:px-24 md:px-10 sm:px-5 w-full">
        <h1 className="flex items-center justify-center gap-2 lg:text-3xl md:text-2xl text-xl font-bold lg:py-10 md:py-5 py-3 relative text-secondary bg-white p-4 rounded-md mb-10">
          <RiGalleryFill /> G A L E R I
        </h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
          {gallery.slice(0, visibleImages).map((item, index) => (
            <div
              className="w-full lg:h-72 md:h-64 h-60 rounded-lg"
              key={index}
              data-aos="fade-down"
              data-aos-duration="500"
            >
              <img
                className="w-full h-full rounded-lg"
                src={item.image}
                alt=""
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10 space-x-4">
          {visibleImages > 8 && (
            <Button
              className="flex items-center gap-2 w-fit"
              onClick={showLess}
            >
              Lebih Sedikit <FaArrowCircleUp />
            </Button>
          )}
          {visibleImages < gallery.length && (
            <Button
              className="flex items-center gap-2 w-fit"
              onClick={loadMore}
            >
              Lebih Banyak <FaArrowCircleDown />
            </Button>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default GalleryPage;
