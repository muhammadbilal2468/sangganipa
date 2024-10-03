import { useState } from "react";
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa"; // Mengimpor FaArrowCircleUp untuk tombol 'Lebih Sedikit'
import Button from "../../components/Base/Button";
import CardNews from "../../components/Fragment/CardNews";
import news from "../../data/news.json";
import Layout from "../../layouts/Layout";

const NewsPage = () => {
  const [visibleCount, setVisibleCount] = useState(4);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  const showLess = () => {
    setVisibleCount((prevCount) => (prevCount > 4 ? prevCount - 4 : 4));
  };

  return (
    <Layout>
      <div className="relative xl:px-32 lg:px-24 md:px-10 sm:px-5 w-full">
        <div className="relative">
          <img
            src="/headers.jpg"
            alt="Header Image"
            className="w-full lg:h-64 md:h-52 h-24 object-cover opacity-60"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="lg:text-4xl md:text-xl text-sm font-bold text-primary text-center bg-black bg-opacity-30 backdrop-blur-md px-8 lg:py-4 md:py-2 py-1 rounded-lg shadow-lg">
              B E R I T A
            </h1>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-10 md:gap-5 gap-3 mt-10">
          {news.slice(0, visibleCount).map((newsItem) => (
            <CardNews
              key={newsItem.id}
              id={newsItem.id}
              image={newsItem.image}
              author={newsItem.author}
              date={newsItem.date}
              title={newsItem.title}
              desc={newsItem.desc}
              link={newsItem.link}
            />
          ))}
        </div>

        <div className="flex justify-center mt-10 space-x-4">
          {visibleCount > 4 && (
            <Button
              className="flex items-center gap-2 w-fit"
              onClick={showLess}
            >
              Lebih Sedikit <FaArrowCircleUp />
            </Button>
          )}
          {visibleCount < news.length && (
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

export default NewsPage;
