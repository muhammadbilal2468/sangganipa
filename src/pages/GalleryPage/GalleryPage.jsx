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
        <h1 className="flex items-center justify-center gap-2 lg:text-3xl md:text-xl text-md font-bold lg:py-10 md:py-5 py-3 relative text-secondary bg-white p-4 rounded-md mb-10">
          <RiGalleryFill /> B E R I T A
        </h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
          {gallery.slice(0, visibleImages).map((item, index) => (
            <div className="w-full lg:h-60 md:h-40 h-36 rounded-lg" key={index}>
              <img
                className="w-full h-full rounded-lg"
                src={`/gallery${index + 1}.jpg`}
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
