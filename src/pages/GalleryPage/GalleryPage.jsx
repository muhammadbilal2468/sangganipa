import { useState } from "react";
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";
import { RiGalleryFill } from "react-icons/ri";
import Button from "../../components/Base/Button";
import gallery from "../../data/gallery.json";
import Layout from "../../layouts/Layout";

const GalleryPage = () => {
  const [visibleImages, setVisibleImages] = useState(5);

  const loadMore = () => {
    if (visibleImages >= gallery.length) return;
    setVisibleImages((prev) => prev + 5);
  };

  const showLess = () => {
    if (visibleImages <= 5) return;
    setVisibleImages((prev) => (prev > 5 ? prev - 5 : 5));
  };

  return (
    <Layout>
      <div className="relative xl:px-32 lg:px-24 md:px-10 sm:px-5 w-full">
        <h1 className="flex items-center justify-center gap-2 lg:text-3xl md:text-xl text-md font-bold lg:py-10 md:py-5 py-3 relative text-secondary bg-white p-4 rounded-md mb-10">
          <RiGalleryFill /> G A L E R I
        </h1>
        <div className="grid grid-cols-4 gap-4">
          {" "}
          {gallery.slice(0, visibleImages).map((item, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg ${
                index % 5 === 0
                  ? "col-span-2 row-span-2" // Gambar besar setiap ke-1, ke-6, ke-11, dll.
                  : "col-span-1 row-span-1" // Gambar kecil pada kolom yang tersisa
              }`}
            >
              <img
                className="w-full h-full object-cover"
                src={item.image}
                alt={`Gallery Image ${index + 1}`}
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
