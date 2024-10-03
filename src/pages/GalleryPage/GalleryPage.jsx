import { useState } from "react";
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";
import Button from "../../components/Base/Button";
import gallery from "../../data/gallery.json";
import Layout from "../../layouts/Layout";

const GalleryPage = () => {
  // Inisialisasi state dengan gambar yang lebih banyak (misalnya 8)
  const [visibleImages, setVisibleImages] = useState(8);

  const loadMore = () => {
    if (visibleImages >= gallery.length) return;
    setVisibleImages((prev) => prev + 5);
  };

  const showLess = () => {
    if (visibleImages <= 8) return;
    setVisibleImages((prev) => (prev > 8 ? prev - 5 : 8));
  };

  return (
    <Layout>
      <div className="relative xl:px-32 lg:px-24 md:px-10 sm:px-5 w-full">
        <h1 className="lg:text-4xl md:text-xl text-sm font-bold text-primary text-center mb-10">
          Galeri
        </h1>
        <div className="grid grid-cols-4 gap-4">
          {" "}
          {/* Mengubah grid menjadi 4 kolom */}
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
