import { useState } from "react";
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa"; // Mengimpor FaArrowCircleUp untuk tombol 'Lebih Sedikit'
import Button from "../../components/Base/Button";
import CardNews from "../../components/Fragment/CardNews";
import news from "../../data/news.json";
import Layout from "../../layouts/Layout";
import { GiNewspaper } from "react-icons/gi";

const NewsPage = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  const showLess = () => {
    setVisibleCount((prevCount) => (prevCount > 3 ? prevCount - 3 : 3));
  };

  return (
    <Layout>
      <div className="relative xl:px-32 lg:px-24 md:px-10 sm:px-5 w-full">
        <h1 className="flex items-center justify-center gap-2 lg:text-3xl md:text-2xl text-xl font-bold lg:py-10 md:py-5 py-3 relative text-secondary bg-white p-4 rounded-md mb-10">
          <GiNewspaper /> B E R I T A
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 md:gap-5 gap-3">
          {news.slice(0, visibleCount).map((newsItem) => (
            <CardNews
              key={newsItem.id}
              id={newsItem.id}
              image={`/gallery${newsItem.id + 1}.jpg`}
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
